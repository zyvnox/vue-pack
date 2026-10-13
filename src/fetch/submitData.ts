import { validate } from '../validate/validate'
import isEqual from 'lodash.isequal'
import {
  secureFetch,
  saveToIndexedDB,
  removeFromIndexedDB,
  getFromIndexedDB,
  updateItemInStore,
  isStoreArray,
  type StoreArray,
  type SubmitOptions,
  type SubmitResponse,
  type Schema,
} from '../index'
export const submitData = async <
  T extends Record<string, any> = Record<string, any>,
  TResult = any,
>(
  options: SubmitOptions<T>,
  schema?: Schema,
  idKey = 'id',
  idsKey = 'ids',
): Promise<SubmitResponse<TResult>> => {
  const { data, oldData, validation, endpoint, mode, db, deleteDataDB, demo } = options
  const DeleteDB = deleteDataDB ?? true
  if (mode !== 'get' && !data) {
    return {
      message: 'data Not Found',
    }
  }
  const parsed = validation ? (validate(validation, data) as Record<string, any>) : { ...data }
  const parsedOld = oldData
    ? validation
      ? (validate(validation, oldData) as Record<string, any>)
      : { ...oldData }
    : undefined

  // =================================
  // == LOGIKA MODE DEMO (OFFLINE) ==
  // =================================
  if (demo) {
    if (!db) {
      throw new Error('Demo mode requires a `db` (IndexedDB store name) to be specified.')
    }

    switch (mode) {
      case 'create': {
        const newData = { ...parsed, [idKey]: `demo-${Date.now()}` }
        const existingData = await getFromIndexedDB(db as StoreArray)
        await saveToIndexedDB({ [db]: [...existingData, newData] })
        return {
          message: 'Data created in demo mode.',
          data: newData as unknown as TResult,
          response: true,
        }
      }
      case 'update': {
        await updateItemInStore(db as StoreArray, parsed)
        return {
          message: 'Data updated in demo mode.',
          data: parsed as unknown as TResult,
          response: true,
        }
      }
      case 'delete':
      case 'deleteMany': {
        const idsToDelete = parsed[idsKey] || [parsed[idKey]]
        if (idsToDelete && idsToDelete.length > 0) {
          await removeFromIndexedDB({ [db]: idsToDelete })
        }
        return {
          message: 'Data deleted in demo mode.',
          response: true,
        }
      }
      case 'get':
        // Dalam mode demo, 'get' tidak melakukan apa-apa karena data sudah dibaca dari DB.
        return {
          message: 'Get operation skipped in demo mode.',
          data: [] as unknown as TResult,
          response: true,
        }
    }
  }
  // == AKHIR LOGIKA MODE DEMO ==

  const {
    endpoint: finalEndpoint,
    remaining: filteredParsed,
    remainingOld,
  } = extractPathParamsWithOld(endpoint, parsed, parsedOld)
  let method: 'POST' | 'PATCH' | 'DELETE' =
    mode === 'create' ? 'POST' : mode === 'update' ? 'PATCH' : 'DELETE'
  let hasFile = false

  // -------------------
  // DELETE
  // -------------------
  if (mode === 'delete' || mode === 'deleteMany') {
    const bodyToSend =
      Object.keys(filteredParsed).length > 0 ? JSON.stringify(filteredParsed) : undefined
    console.log(data![idsKey ?? 'ids'] || data![idKey ?? 'id'] || filteredParsed._id)
    const response = await secureFetch(finalEndpoint, {
      method,
      headers: bodyToSend ? { 'Content-Type': 'application/json' } : undefined,
      body: bodyToSend,
      authType: options.authType,
      token: options.token,
      customHeaders: options.customHeaders,
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({}))
      throw new Error(error.message || 'Gagal menghapus data')
    }

    const res = await response.json()
    if (DeleteDB && db) {
      await removeFromIndexedDB({
        [db]: data![idsKey ?? 'ids'] || data![idKey ?? 'id'] || filteredParsed._id,
      })
    }

    return {
      message: res.message,
      response: response.ok,
    }
  }
  // -------------------
  // GET (Single or All)
  // -------------------
  if (mode === 'get') {
    const response = await secureFetch(finalEndpoint, {
      method: 'GET',
      authType: options.authType,
      token: options.token,
      customHeaders: options.customHeaders,
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({}))
      throw new Error(error.message || 'Failed to fetch data')
    }

    const res = await response.json()

    // simpan ke IndexedDB kalau diminta
    if (db && res.data) {
      const isArrayStore = isStoreArray(db)
      if (isArrayStore) {
        await saveToIndexedDB({ [db]: res.data })
      } else {
        await saveToIndexedDB({ [db]: [res.data] })
      }
    }

    return {
      ...res,
      message: res.message ?? 'Data fetched successfully',
      response: response.ok,
    }
  }

  // -------------------
  // CREATE or UPDATE
  // -------------------
  const formData = new FormData()
  const parsedData: Record<string, any> = {}
  let hasChanges = mode === 'update' ? false : true
  if (mode === 'update' && remainingOld) {
    for (const key in filteredParsed) {
      const currentValue = filteredParsed[key]
      const oldValue = remainingOld[key]
      const isDifferent = !isEqual(currentValue, oldValue)
      if (key === idKey || isDifferent) {
        if (
          appendToFormData(
            formData,
            key,
            currentValue,
            parsedData,
            oldValue,
            undefined,
            schema,
            idKey,
            idsKey,
          )
        ) {
          hasFile = true
        }
        if (key !== idKey) hasChanges = true
      }
    }

    if (!hasChanges && isEqual(filteredParsed, remainingOld)) {
      throw new Error('No data has changed')
    }
  } else {
    for (const key in filteredParsed) {
      const value = filteredParsed[key]
      const isEmptyArray = Array.isArray(value) && value.length === 0

      if (value !== undefined && value !== null && !isEmptyArray) {
        parsedData[key] = value
        if (appendToFormData(formData, key, value, parsedData, undefined, undefined, schema)) {
          hasFile = true
        }
      }
    }
  }

  const response = await secureFetch(
    finalEndpoint,
    hasFile
      ? {
          method,
          body: formData,
          authType: options.authType,
          token: options.token,
          customHeaders: options.customHeaders,
        }
      : {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(parsedData),
          authType: options.authType,
          token: options.token,
          customHeaders: options.customHeaders,
        },
  )

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.message || 'Failed to process data')
  }

  const res = await response.json()
  if (db) {
    const isArrayStore = isStoreArray(db)
    if (mode === 'update') {
      await updateItemInStore(db as StoreArray, res.data)
    } else if (mode === 'create' && isArrayStore) {
      const existingData = await getFromIndexedDB(db as StoreArray)
      await saveToIndexedDB({ [db]: [...existingData, res.data] })
    }
  }

  return {
    message: res.message,
    data: res.data,
    response: response.ok,
  }
}

function appendToFormData(
  formData: FormData,
  key: string,
  value: any,
  currentParsedObject: Record<string, any>,
  oldData: Record<string, any> = {},
  parentFormDataKey?: string,
  schema?: Schema,
  idKey?: string,
  idsKey?: string,
): boolean {
  let localHasFile = false
  // Pembuatan key untuk FormData tetap sama
  const FormDataKey = parentFormDataKey ? `${parentFormDataKey}[${key}]` : key

  // 🔹 Array of object
  if (
    Array.isArray(value) &&
    value.length > 0 &&
    typeof value[0] === 'object' &&
    !(value[0] instanceof File)
  ) {
    const newIds = new Set(
      value.map((item) => item[idKey ?? 'id']).filter((id) => id !== undefined),
    )

    if (Array.isArray(oldData)) {
      const deletedItems = oldData.filter(
        (oldItem) => oldItem[idKey ?? 'id'] !== undefined && !newIds.has(oldItem[idKey ?? 'id']),
      )
      if (deletedItems.length > 0) {
        const deletedIds = deletedItems.map((item) => item[idKey ?? 'id'])

        // Untuk JSON Payload
        currentParsedObject[key + '_deleted'] = deletedIds

        // ================== TAMBAHAN UNTUK FORMDATA ==================
        // Loop melalui setiap ID yang dihapus dan tambahkan ke formData
        deletedIds.forEach((id) => {
          formData.append(`${key}_deleted[]`, String(id))
        })
        // ==========================================================
      }
    }

    // ================== PERUBAHAN LOGIKA INTI (1) ==================
    // Buat array baru di dalam object JSON yang sedang kita proses
    const newParsedArray: any[] = []
    currentParsedObject[key] = newParsedArray
    // =============================================================

    let numberArray = 0
    value.forEach((item: any) => {
      const parsedItem: Record<string, any> = {}
      const oldItem: Record<string, any> =
        (Array.isArray(oldData)
          ? oldData.find((old: Record<string, any>) => old[idKey ?? 'id'] === item[idKey ?? 'id'])
          : undefined) || {}
      let hasChanged = !item[idKey ?? 'id'] || false

      for (const field in item) {
        const itemValue = item[field]
        const oldItemValue = oldItem?.[field]
        const isChanged = !isEqual(itemValue, oldItemValue)

        if (itemValue !== undefined && itemValue !== null && (isChanged || !item[idKey ?? 'id'])) {
          if (!item[idKey ?? 'id']) hasChanged = true
          else if (field !== 'id') hasChanged = true

          const formKey = `${FormDataKey}[${numberArray}][${field}]`

          if (itemValue instanceof File) {
            formData.append(formKey, itemValue)
            localHasFile = true
            parsedItem[field] = itemValue.name
          } else if (
            Array.isArray(itemValue) ||
            (typeof itemValue === 'object' && itemValue !== null)
          ) {
            const currentItemKey = `${FormDataKey}[${numberArray}]`
            // ================== PERUBAHAN LOGIKA INTI (2) ==================
            // Kita oper 'parsedItem' sebagai object JSON baru yang akan diisi,
            // dan 'currentItemKey' sebagai parent key BARU untuk FormData.
            if (
              appendToFormData(
                formData,
                field,
                itemValue,
                parsedItem, // Target JSON sekarang adalah 'parsedItem'
                oldItemValue, // Kirim bagian yang relevan dari oldItem
                currentItemKey, // Parent key untuk FormData
                schema,
                idKey,
                idsKey,
              )
            ) {
              localHasFile = true
            }
            // =============================================================
          } else {
            formData.append(formKey, String(itemValue))
            parsedItem[field] = itemValue
          }
        }
      }
      if (hasChanged) {
        if (item[idKey ?? 'id'] !== undefined) {
          formData.append(`${FormDataKey}[${numberArray}][${idKey}]`, String(item[idKey ?? 'id']))
          parsedItem[idKey ?? 'id'] = item[idKey ?? 'id']
        }
        numberArray += 1
        // Langsung push item yang sudah selesai diproses ke array JSON kita
        newParsedArray.push(parsedItem)
      }
    })

    // Jika setelah loop, tidak ada item yang berubah/ditambahkan, hapus key array dari JSON
    if (newParsedArray.length === 0) {
      delete currentParsedObject[key]
    }
  }
  // 🔹 Object biasa (nested object)
  else if (
    typeof value === 'object' &&
    value !== null &&
    !(value instanceof File) &&
    !Array.isArray(value)
  ) {
    // ================== PERUBAHAN LOGIKA INTI (3) ==================
    const newParsedObject: Record<string, any> = {}
    let hasContent = false
    let id: string | number | undefined = undefined
    // 'oldData' di sini adalah versi lama dari 'value' (object)
    for (const field in value) {
      const subValue = value[field]
      const oldSubValue = oldData?.[field] ?? null
      // Normalisasi array kosong menjadi null untuk perbandingan yang konsisten
      const isEmptyArray = Array.isArray(subValue) && subValue.length === 0
      const normalizedSubValue = isEmptyArray ? null : subValue

      const isDifferent = !isEqual(normalizedSubValue, oldSubValue)

      if (field === (idKey ?? 'id')) {
        id = subValue
      } else if (isDifferent) {
        // Panggil rekursif dengan 'newParsedObject' sebagai target JSON
        if (
          appendToFormData(
            formData,
            field,
            subValue,
            newParsedObject, // Target JSON sekarang adalah 'newParsedObject'
            oldSubValue, // Kirim bagian yang relevan dari oldData
            FormDataKey, // Parent key untuk FormData
            schema,
            idKey,
            idsKey,
          )
        ) {
          localHasFile = true
        }
        hasContent = true
      }
    }

    // Hanya tambahkan object ke JSON jika memiliki isi
    if (hasContent && Object.keys(newParsedObject).length > 0) {
      if (id) {
        newParsedObject[idKey ?? 'id'] = id
      }
      currentParsedObject[key] = newParsedObject
    } else {
      delete currentParsedObject[key]
    }
    // =============================================================
  } else if (Array.isArray(value) && (typeof value[0] !== 'object' || value[0] === null)) {
    if (value.length > 0) {
      currentParsedObject[key] = value
      value.forEach((item, index) => {
        const formKey = `${FormDataKey}[${index}]`
        formData.append(formKey, String(item))
      })
    } else {
      currentParsedObject[key] = null
    }
  } else if (Array.isArray(value) && value.some((item) => item instanceof File)) {
    localHasFile = true
    const fileNames: (string | any)[] = []
    value.forEach((file, index) => {
      const formKey = `${FormDataKey}[${index}]`
      if (file instanceof File) {
        formData.append(formKey, file)
        fileNames.push(file.name)
      } else {
        formData.append(formKey, file)
        fileNames.push(file)
      }
    })
    currentParsedObject[key] = fileNames
  }
  // 🔹 File
  else if (value instanceof File) {
    formData.append(FormDataKey, value)
    currentParsedObject[key] = value.name
    localHasFile = true
  }
  // 🔹 Primitive
  else {
    formData.append(FormDataKey, String(value))
    currentParsedObject[key] = value
  }
  return localHasFile
}

function extractPathParamsWithOld(
  endpoint: string,
  data: Record<string, any>,
  oldData?: Record<string, any>,
): {
  endpoint: string
  remaining: Record<string, any>
  remainingOld?: Record<string, any>
} {
  const clone = { ...data }
  const oldClone = oldData ? { ...oldData } : undefined

  // Regex diubah untuk memastikan parameter dimulai dengan huruf atau underscore, bukan angka
  const newEndpoint = endpoint.replace(/:([a-zA-Z_][a-zA-Z0-9_]*)/g, (_, key) => {
    const value = clone[key]
    if (!value) throw new Error(`Missing value for :${key}`)
    delete clone[key]
    if (oldClone) delete oldClone[key]
    return encodeURIComponent(String(value))
  })

  return {
    endpoint: newEndpoint,
    remaining: clone,
    remainingOld: oldClone,
  }
}
