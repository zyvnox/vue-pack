export function getNested(obj: any, path: string | number): any {
  if (path == null) return undefined
  return String(path).split('.').reduce((acc, part) => acc?.[part], obj)
}

export function setNested(obj: any, path: string | number, value: any): void {
  if (path == null) return
  const parts = String(path).split('.')
  const last = parts.pop()!
  const target = parts.reduce((acc, part) => {
    if (!acc[part]) acc[part] = {}
    return acc[part]
  }, obj)
  target[last] = value
}

export function unsetNested(obj: any, path: string | number) {
  if (path == null) return
  const keys = String(path).split('.')
  let current = obj
  for (let i = 0; i < keys.length - 1; i++) {
    if (!(keys[i] in current)) return
    current = current[keys[i]]
  }
  const lastKey = keys[keys.length - 1]
  if (current && lastKey in current) {
    delete current[lastKey]
  }
  for (let i = keys.length - 2; i >= 0; i--) {
    const parentPath = keys.slice(0, i + 1).join('.')
    const parentObj = getNested(obj, parentPath)
    if (parentObj && typeof parentObj === 'object' && Object.keys(parentObj).length === 0) {
      unsetNested(obj, parentPath)
    } else {
      break
    }
  }
}

// Helper untuk memeriksa apakah sebuah objek atau array kosong
function isEmpty(value: any): boolean {
  if (value === null || value === undefined) return true
  if (Array.isArray(value)) return value.length === 0
  if (typeof value === 'object') return Object.keys(value).length === 0
  return false
}

export function deleteNestedAndCleanup(obj: any, path: string | number): void {
  if (path == null) return
  const parts = String(path).split('.')

  // Fungsi rekursif internal
  const recurse = (currentObj: any, pathParts: string[]): boolean => {
    // Jika path sudah habis, kita selesai
    if (!pathParts.length || !currentObj) {
      return isEmpty(currentObj)
    }

    const key = pathParts[0]
    const remainingParts = pathParts.slice(1)

    // Cek apakah key adalah indeks array
    const isArrayIndex = /^\d+$/.test(key)
    const index = isArrayIndex ? parseInt(key, 10) : -1

    // Jika path berikutnya adalah tujuan akhir (tidak ada remainingParts)
    if (remainingParts.length === 0) {
      if (Array.isArray(currentObj) && isArrayIndex) {
        if (index < currentObj.length) {
          currentObj.splice(index, 1)
        }
      } else if (typeof currentObj === 'object' && !Array.isArray(currentObj)) {
        delete currentObj[key]
      }
    } else {
      // Jika masih ada path, lanjutkan rekursi ke level selanjutnya
      const nextObj =
        Array.isArray(currentObj) && isArrayIndex ? currentObj[index] : currentObj[key]

      if (recurse(nextObj, remainingParts)) {
        // Jika rekursi mengembalikan 'true' (artinya child menjadi kosong dan dihapus),
        // maka kita hapus juga referensinya dari parent (currentObj)
        if (Array.isArray(currentObj) && isArrayIndex) {
          if (index < currentObj.length) {
            currentObj.splice(index, 1)
          }
        } else if (typeof currentObj === 'object' && !Array.isArray(currentObj)) {
          delete currentObj[key]
        }
      }
    }

    // Kembalikan true jika objek/array saat ini menjadi kosong setelah operasi
    return isEmpty(currentObj)
  }

  recurse(obj, parts)
}

export function normalizeKey(key: string, keyRemove: string = 'optionGroupSchema'): string {
  const regex = new RegExp(`(\\.?${keyRemove})+`, 'g')
  return key
    .replace(regex, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '')
}
