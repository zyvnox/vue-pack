// lib/indexedDB.ts
import type { ZodType } from 'zod'
import { safeValidate } from '../validate/validate'

// Helper untuk memeriksa dukungan IndexedDB di lingkungan saat ini (SSR guard)
export const isIndexedDBSupported = (): boolean =>
  typeof window !== 'undefined' && typeof indexedDB !== 'undefined'

// Variabel ini akan menyimpan nama store yang sudah dikonfigurasi
let STORE_SINGLE: string[] = []
let STORE_ARRAY: string[] = []
let DB_NAME = 'MyAppDB'
let DB_VERSION = 1

// Variabel ini akan menyimpan semua store yang pernah diminta secara dinamis
const KNOWN_STORES = {
  single: new Set<string>(),
  array: new Set<string>(),
}

export type IndexedDBConfig<S extends string = string, A extends string = string> = {
  dbName?: string
  dbVersion?: number
  storeSingle?: S[]
  storeArray?: A[]
}

let configured = false

export function configureIndexedDB<S extends string = string, A extends string = string>(
  config: IndexedDBConfig<S, A>,
) {
  if (configured) return
  configured = true

  DB_NAME = config.dbName || DB_NAME
  DB_VERSION = config.dbVersion || DB_VERSION
  STORE_SINGLE = config.storeSingle || []
  STORE_ARRAY = config.storeArray || []

  // Daftarkan store awal ke KNOWN_STORES
  STORE_SINGLE.forEach((store) => KNOWN_STORES.single.add(store))
  STORE_ARRAY.forEach((store) => KNOWN_STORES.array.add(store))
}

// Helper untuk memeriksa tipe store secara dinamis
export function isStoreArray(store: string): store is StoreArray {
  return KNOWN_STORES.array.has(store)
}

// Tipe ini dinamis
export type StoreSingle = string
export type StoreArray = string
export type StoreName = StoreSingle | StoreArray

// --- LOGIKA INTI PEMBUKAAN DB ---
async function openDB(requiredStores: StoreName[] = []): Promise<IDBDatabase> {
  if (!isIndexedDBSupported()) {
    return Promise.reject(
      new Error(
        '[zyvnox-vue-pack] IndexedDB is not supported in the current environment (SSR/Node.js).',
      ),
    )
  }

  if (!configured) {
    // Peringatan HANYA akan muncul di mode development
    if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
      console.warn(
        '[zyvnox-vue-pack] IndexedDB options not provided in app.use(). Using default settings.',
      )
    }
    configureIndexedDB({})
  }

  // Daftarkan semua store yang dibutuhkan
  requiredStores.forEach(registerStoreIfNeeded)

  // Buka koneksi tanpa versi untuk memeriksa kondisi saat ini
  const existingDb = await new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open(DB_NAME)
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })

  const existingStoreNames = new Set(Array.from(existingDb.objectStoreNames))
  const allRequiredStores = new Set([...KNOWN_STORES.single, ...KNOWN_STORES.array])

  let needsUpgrade = false
  for (const store of allRequiredStores) {
    if (!existingStoreNames.has(store)) {
      needsUpgrade = true
      break
    }
  }

  if (!needsUpgrade) {
    return existingDb
  }

  // Jika butuh upgrade, tutup koneksi lama dan buka dengan versi baru
  const currentVersion = existingDb.version
  existingDb.close()

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, currentVersion + 1)

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result
      const existingStores = new Set(Array.from(db.objectStoreNames))

      // Buat store single yang belum ada
      KNOWN_STORES.single.forEach((store) => {
        if (!existingStores.has(store)) {
          db.createObjectStore(store)
        }
      })

      // Buat store array yang belum ada
      KNOWN_STORES.array.forEach((store) => {
        if (!existingStores.has(store)) {
          db.createObjectStore(store, { keyPath: 'id' })
        }
      })
    }

    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

// Helper untuk mendaftarkan store baru secara dinamis
function registerStoreIfNeeded(storeName: StoreName) {
  const isSingle = STORE_SINGLE.includes(storeName) || KNOWN_STORES.single.has(storeName)
  const isArray = STORE_ARRAY.includes(storeName) || KNOWN_STORES.array.has(storeName)

  if (!isSingle && !isArray) {
    KNOWN_STORES.array.add(storeName)
  }
}

// --- FUNGSI PUBLIK DENGAN SSR GUARD & ZOD VALIDATION ---

export async function saveToIndexedDB(data: Record<string, any>): Promise<void> {
  if (!isIndexedDBSupported()) return

  const storeNames = Object.keys(data)
  const db = await openDB(storeNames)
  const tx = db.transaction(Array.from(db.objectStoreNames), 'readwrite')

  for (const storeName of storeNames) {
    if (KNOWN_STORES.single.has(storeName) && data[storeName] !== undefined) {
      tx.objectStore(storeName).put(data[storeName], 'current')
    } else if (KNOWN_STORES.array.has(storeName) && Array.isArray(data[storeName])) {
      const objectStore = tx.objectStore(storeName)
      objectStore.clear()
      data[storeName].forEach((item: any) => objectStore.put(item))
    }
  }

  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}

export async function getSingleFromIndexedDB<T = any>(
  storeName: StoreSingle,
  key = 'current',
  schema?: ZodType<T>,
): Promise<T | undefined> {
  if (!isIndexedDBSupported()) return undefined

  KNOWN_STORES.single.add(storeName)
  const db = await openDB([storeName])

  if (!db.objectStoreNames.contains(storeName)) return undefined

  const tx = db.transaction(storeName, 'readonly')
  const store = tx.objectStore(storeName)

  return new Promise((resolve, reject) => {
    const request = store.get(key)
    request.onsuccess = () => {
      const raw = request.result
      if (schema && raw !== undefined) {
        const result = safeValidate(schema, raw)
        resolve(result.success ? result.data : undefined)
      } else {
        resolve(raw)
      }
    }
    request.onerror = () => reject(request.error)
  })
}

export async function getFromIndexedDB<T = any>(
  storeName: StoreArray,
  schema?: ZodType<T>,
): Promise<T[]> {
  if (!isIndexedDBSupported()) return []

  KNOWN_STORES.array.add(storeName)
  const db = await openDB([storeName])

  if (!db.objectStoreNames.contains(storeName)) return []

  const tx = db.transaction(storeName, 'readonly')
  const store = tx.objectStore(storeName)

  return new Promise((resolve, reject) => {
    const request = store.getAll()
    request.onsuccess = () => {
      const rawList = request.result || []
      if (schema && Array.isArray(rawList)) {
        const validated: T[] = []
        for (const item of rawList) {
          const res = safeValidate(schema, item)
          if (res.success) {
            validated.push(res.data)
          }
        }
        resolve(validated)
      } else {
        resolve(rawList)
      }
    }
    request.onerror = () => reject(request.error)
  })
}

export async function updateItemInStore<T = any>(storeName: StoreArray, item: T): Promise<void> {
  if (!isIndexedDBSupported()) return

  KNOWN_STORES.array.add(storeName)
  const db = await openDB([storeName])

  const tx = db.transaction(storeName, 'readwrite')
  const store = tx.objectStore(storeName)
  store.put(item)
  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}

export async function getItemById<T = any>(
  storeName: StoreArray,
  id: string | number | undefined | null,
  schema?: ZodType<T>,
): Promise<T | undefined> {
  if (!isIndexedDBSupported() || id === undefined || id === null || id === '') {
    return undefined
  }

  KNOWN_STORES.array.add(storeName)
  const db = await openDB([storeName])

  if (!db.objectStoreNames.contains(storeName)) return undefined

  const tx = db.transaction(storeName, 'readonly')
  const store = tx.objectStore(storeName)

  return new Promise((resolve, reject) => {
    const request = store.get(id)
    request.onsuccess = () => {
      const raw = request.result
      if (schema && raw !== undefined) {
        const result = safeValidate(schema, raw)
        resolve(result.success ? result.data : undefined)
      } else {
        resolve(raw)
      }
    }
    request.onerror = () => reject(request.error)
  })
}

export async function clearStore(storeName: StoreName): Promise<void> {
  if (!isIndexedDBSupported()) return

  const db = await openDB([storeName])
  if (!db.objectStoreNames.contains(storeName)) return

  const tx = db.transaction(storeName, 'readwrite')
  tx.objectStore(storeName).clear()

  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}

export async function deleteItemFromStore(
  storeName: StoreArray,
  id: string | number,
): Promise<void> {
  if (!isIndexedDBSupported()) return

  KNOWN_STORES.array.add(storeName)
  const db = await openDB([storeName])

  if (!db.objectStoreNames.contains(storeName)) {
    console.warn(`Store "${storeName}" not found. Skipping delete operation.`)
    return
  }

  const tx = db.transaction(storeName, 'readwrite')
  tx.objectStore(storeName).delete(id)

  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}

export async function removeFromIndexedDB(data: Record<string, number[] | number>): Promise<void> {
  if (!isIndexedDBSupported()) return

  const storeNames = Object.keys(data)
  if (storeNames.length === 0) return

  storeNames.forEach((storeName) => KNOWN_STORES.array.add(storeName))
  const db = await openDB(storeNames)

  const validStoreNames = storeNames.filter((name) => db.objectStoreNames.contains(name))
  if (validStoreNames.length === 0) return

  const tx = db.transaction(validStoreNames, 'readwrite')

  for (const [storeName, value] of Object.entries(data)) {
    if (!validStoreNames.includes(storeName)) continue

    const store = tx.objectStore(storeName)
    const ids = Array.isArray(value) ? value : [value]
    ids.forEach((id) => store.delete(id))
  }

  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}
