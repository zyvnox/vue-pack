import { toRaw } from 'vue'
import { getItemById, type StoreArray } from '../../../lib'
import type { Field, Schema } from '../../../configs/types'

export async function normalizeDataForForm(
  data: Record<string, any>,
  schema: Record<string, any>,
  isUpdate: number | null,
  idKey?: string | number | null,
): Promise<Record<string, any>> {
  let normalized: Record<string, any> = {}

  for (const [key, field] of Object.entries(schema)) {
    const type: Field['type'] = field?.type

    // SELECT DB lookup
    if (type === 'select' && field.DB_NAME && !field.optionsIsNumber) {
      const idValue = data[field.baseKey?.base ?? key]
      if (idValue !== null && idValue !== '') {
        const getName = await getItemById(field.DB_NAME as StoreArray, idValue)
        normalized[key] = getName?.[field.baseKey.name ?? 'name'] ?? ''
      } else {
        normalized[key] = ''
      }
      continue
    }

    if (type === 'object') {
      const updatedValue = data[key] || {}
      normalized[key] = await normalizeDataForForm(
        data[key] || {},
        field.schema || {},
        updatedValue,
        field.baseKey?.base ?? 'id',
      )
      continue
    }

    if (type === 'mapPicker') {
      if (field.withFieldKey) {
        const value = data[key]
        normalized[key] = normalizeFieldValue(value, field, isUpdate !== null)
      } else {
        const lat = data[field.key.lat]
        const lng = data[field.key.lng]
        normalized[field.key.lng] = normalizeFieldValue(lng, field, isUpdate !== null)
        normalized[field.key.lat] = normalizeFieldValue(lat, field, isUpdate !== null)
      }
      continue
    }
    // === Recursive Option Group Support ===
    if (type === 'optionGroupSchema' && (field.options as Record<string, Schema>)) {
      if (field.withValue) {
        const value = data[key]
        normalized[key] = normalizeFieldValue(value, field, isUpdate !== null)
      }
      for (const [optionKey, groupSchema] of Object.entries(
        field.options as Record<string, Schema>,
      )) {
        for (const [innerKey, innerFieldRaw] of Object.entries(groupSchema)) {
          const innerField = innerFieldRaw as Field
          const innerValue = data[innerKey]

          // Jika nested lagi (rekursif)
          if (innerField.type === 'optionGroupSchema' && innerField.options) {
            const nestedNormalized = await normalizeDataForForm(
              data,
              { [innerKey]: innerField },
              isUpdate,
              idKey,
            )
            // PERBAIKAN: Jangan timpa jika sudah ada nilainya
            normalized = { ...normalized, ...nestedNormalized }
            continue
          }

          // DISINI
          if (innerField.type === 'object') {
            const nestedObject = await normalizeDataForForm(
              data[innerKey] || {},
              innerField.schema || {},
              isUpdate,
              innerField.baseKey?.base ?? 'id',
            )

            // PERBAIKAN KUNCI: Merge data lama dengan yang baru agar tidak tertimpa!
            normalized[innerKey] = {
              ...normalized[innerKey],
              ...nestedObject,
            }
            continue
          }

          if (innerField.type === 'mapPicker') {
            if (innerField.withFieldKey) {
              const value = data[key]
              normalized[key] = normalizeFieldValue(value, innerField, isUpdate !== null)
            } else {
              const lat = data[innerField.key?.lat]
              const lng = data[innerField.key.lng]
              normalized[innerField.key?.lng] = normalizeFieldValue(
                lng,
                innerField,
                isUpdate !== null,
              )
              normalized[innerField.key?.lat] = normalizeFieldValue(
                lat,
                innerField,
                isUpdate !== null,
              )
            }
            continue
          }

          // SELECT DB lookup untuk nested
          if (innerField.type === 'select' && innerField.DB_NAME && !innerField.optionsIsNumber) {
            const idValue = data[innerField.baseKey?.base ?? innerKey]
            if (idValue != null && idValue !== '') {
              const storeName = innerField.DB_NAME as StoreArray
              const relatedItem = await getItemById(storeName, idValue)
              normalized[innerKey] = relatedItem?.[innerField.baseKey?.name ?? 'name'] ?? undefined
            } else {
              if (normalized[innerKey] === undefined) normalized[innerKey] = undefined
            }
          } else {
            // PERBAIKAN: Hanya isi nilai jika sebelumnya belum diisi (menghindari tertimpa opsi kosong)
            if (normalized[innerKey] === undefined) {
              normalized[innerKey] = normalizeFieldValue(innerValue, innerField, isUpdate !== null)
            }
          }
        }
      }
      continue
    }

    // Default
    const value = data[key]
    normalized[key] = normalizeFieldValue(value, field, isUpdate !== null)
  }

  // Tambahkan ID jika mode update
  if (isUpdate && data?.[idKey ?? 'id']) {
    normalized[idKey ?? 'id'] = data?.[idKey ?? 'id']
  }
  return normalized
}

export async function normalizeDataForDetail(
  data: Record<string, any>,
  schema: Record<string, any>,
  isUpdate: number | null,
): Promise<Record<string, any>> {
  const normalized: Record<string, any> = {}
  for (const [key, field] of Object.entries(schema)) {
    const type = field?.type
    const value = data[field.baseKey?.base ?? key]
    if (type === 'select' && field.optionsView && field.options && value) {
      const index = field.options.findIndex((opt: any) => opt === value)
      if (!field.optionsView[index] && field.DB_NAME && field.baseKey.name) {
        const option = await getItemById(field.DB_NAME as StoreArray, value)
        const val = option?.[field.baseKey.name]
        normalized[key] = val
      } else {
        normalized[key] = field.optionsView[index] ?? value
      }

      continue
    }

    if (type === 'object') {
      normalized[key] = await normalizeDataForDetail(value || {}, field.schema || {}, isUpdate)
      continue
    }

    if (type === 'mapPicker') {
      if (field.withFieldKey) {
        const value = data[key]
        normalized[key] = normalizeFieldValue(value, field, isUpdate !== null)
      } else {
        const lat = data[field.key.lat]
        const lng = data[field.key.lng]
        const value = {
          lat,
          lng,
        }
        normalized[field.key] = normalizeFieldValue(value, field, isUpdate !== null)
      }

      if (field.view?.geoJsonKey) {
        const value = data[field.view?.geoJsonKey]
        if (!value) {
          continue
        }
        normalized[field.view?.geoJsonKey] = normalizeFieldValue(value, field, isUpdate !== null)
      }
      continue
    }

    if (type === 'optionGroupSchema') {
      const groupSchemas: Schema[] = []
      for (const [optionKey, optionSchema] of Object.entries(
        field.options as Record<string, Schema>,
      )) {
        groupSchemas.push(optionSchema)
      }
      const normalizedGroup = await normalizeOptionGroupSchemaDetail(data, groupSchemas, isUpdate)
      Object.assign(normalized, normalizedGroup)
      continue
    }

    if (type === 'arrayObject') {
      const result: Array<any> = []

      // FIX: Use (value || []) to ensure it's iterable
      // If value is null, it defaults to [], which is safe to loop over.
      for (const item of value || []) {
        const normalizedItem = await normalizeDataForDetail(item, field.schema || {}, isUpdate)
        result.push(normalizedItem)
      }
      normalized[key] = result
      continue
    }

    normalized[key] = normalizeFieldValue(value, field, isUpdate !== null)
  }
  return normalized
}

export async function normalizeOptionGroupSchemaDetail(
  data: Record<string, any>,
  schemaGroup: Record<string, any>[],
  isUpdate: number | null,
): Promise<Record<string, any>> {
  const result: Record<string, any> = {}

  for (const group of schemaGroup) {
    for (const [key, field] of Object.entries(group)) {
      const type = field?.type
      const value = data[field.baseKey?.base ?? key]

      if (type === 'select' && field.optionsView && field.options && value) {
        const index = field.options.findIndex((opt: any) => opt === value)
        if (!field.optionsView[index] && field.DB_NAME && field.baseKey.name) {
          const option = await getItemById(field.DB_NAME as StoreArray, value)
          const val = option?.[field.baseKey.name]
          // PERBAIKAN: Jangan timpa jika sudah ada
          if (result[key] === undefined) result[key] = val
        } else {
          if (result[key] === undefined) result[key] = field.optionsView[index] ?? value
        }
      } else if (type === 'optionGroupSchema') {
        const groupSchemas: Schema[] = []
        for (const [optionKey, optionSchema] of Object.entries(
          field.options as Record<string, Schema>,
        )) {
          groupSchemas.push(optionSchema)
        }
        const nestedGroup = await normalizeOptionGroupSchemaDetail(data, groupSchemas, isUpdate)

        // PERBAIKAN: Smart Merge untuk mencegah penimpaan dari Object.assign bawaan
        for (const [nestedKey, nestedVal] of Object.entries(nestedGroup)) {
          if (typeof nestedVal === 'object' && nestedVal !== null && !Array.isArray(nestedVal)) {
            result[nestedKey] = { ...(result[nestedKey] || {}), ...nestedVal }
          } else if (result[nestedKey] === undefined) {
            result[nestedKey] = nestedVal
          }
        }
      } else if (type === 'object') {
        const nestedObject = await normalizeDataForDetail(value || {}, field.schema || {}, isUpdate)
        // PERBAIKAN KUNCI: Merge object yang sudah ada agar properti sebelumnya (seperti minDay) tidak hilang
        result[key] = {
          ...(result[key] || {}),
          ...nestedObject,
        }
      } else if (type === 'arrayObject') {
        if (result[key] === undefined) {
          const res: Array<any> = []
          for (const item of value || []) {
            const normalizedItem = await normalizeDataForDetail(item, field.schema || {}, isUpdate)
            res.push(normalizedItem)
          }
          result[key] = res
        }
      } else if (type === 'mapPicker') {
        if (field.withFieldKey) {
          if (result[key] === undefined)
            result[key] = normalizeFieldValue(value, field, isUpdate !== null)
        } else {
          if (result[field.key.lat] === undefined)
            result[field.key.lat] = normalizeFieldValue(
              data[field.key.lat],
              field,
              isUpdate !== null,
            )
          if (result[field.key.lng] === undefined)
            result[field.key.lng] = normalizeFieldValue(
              data[field.key.lng],
              field,
              isUpdate !== null,
            )
        }

        if (field.view?.geoJsonKey) {
          if (result[field.view?.geoJsonKey] === undefined) {
            result[field.view?.geoJsonKey] = normalizeFieldValue(
              data[field.view?.geoJsonKey],
              field,
              isUpdate !== null,
            )
          }
        }
      } else {
        // PERBAIKAN: Hanya set nilai jika belum ada nilainya dari opsi lain (guard primitive field)
        if (result[key] === undefined) {
          result[key] = normalizeFieldValue(value, field, isUpdate !== null)
        }
      }
    }
  }

  return result
}

export function normalizeFieldValue(value: any, field: Field, isUpdate: boolean) {
  // Gunakan field.value dari definisi schema jika data asli kosong
  if (isUpdate) {
    return value ?? null
  }
  return value ?? field.value ?? null
}

export function normalizeData(obj: any): any {
  const rawObj = toRaw(obj)
  const clone: any = Array.isArray(rawObj) ? [] : {}

  if (Array.isArray(rawObj)) {
    return rawObj.map((item) => {
      if (
        item !== null &&
        typeof item === 'object' &&
        !(item instanceof File || item instanceof Blob || item instanceof Date) &&
        !Array.isArray(item)
      ) {
        return normalizeData(item)
      }
      return item
    })
  }

  for (const key in rawObj) {
    const value = rawObj[key]

    if (value === undefined) {
      clone[key] = null
    } else if (value instanceof File || value instanceof Blob || value instanceof Date) {
      clone[key] = value // biarkan utuh
    } else if (typeof value === 'string' && (value.trim() === '' || value === '<p><br></p>')) {
      clone[key] = null
    } else if (Array.isArray(value)) {
      clone[key] = value.map((item) => {
        if (
          item !== null &&
          typeof item === 'object' &&
          !(item instanceof File || item instanceof Blob || item instanceof Date) &&
          !Array.isArray(item)
        ) {
          return normalizeData(item)
        }
        return item
      })
    } else if (typeof value === 'object' && value !== null) {
      clone[key] = normalizeData(value)
    } else {
      clone[key] = value
    }
  }
  return clone
}

export function mergeWithDefaults<T>(defaults: T, override?: Partial<T>): T {
  const result: any = Array.isArray(defaults) ? [] : {}

  for (const key in defaults) {
    const defaultValue = defaults[key]
    const overrideValue = override?.[key]

    if (
      override &&
      Object.prototype.hasOwnProperty.call(override, key) &&
      overrideValue !== undefined
    ) {
      if (
        typeof defaultValue === 'object' &&
        defaultValue !== null &&
        !Array.isArray(defaultValue)
      ) {
        result[key] = mergeWithDefaults(defaultValue, overrideValue as any)
      } else {
        result[key] = overrideValue
      }
    } else {
      result[key] = defaultValue
    }
  }

  return result
}
