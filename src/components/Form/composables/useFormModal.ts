// composables/useFormModal.ts
import { ref, computed, watch, toRaw } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import {
  getNested,
  normalizeKey,
  setNested,
  isSameMessage,
  deleteNestedAndCleanup,
  calculateSeo,
} from '../../../untils'

import { defaultMessagesErrorRequired } from '../../../configs/i18n'

import type {
  Schema,
  Errors,
  FormData,
  FromModalProps,
  SupportedLanguage,
  Field,
  OptionGroupField,
  GlobalDefaultText,
  SeoAnalysisResult,
  MapPickerField,
} from '../../../configs/types'
import { secureFetch } from '../../../lib/secureFetch'

interface FormModalComposable {
  formData: Ref<FormData>
  errors: Ref<Errors>
  hasChanges: ComputedRef<boolean>
  seletedOption: Ref<Record<string, string | null>>
  multiSelected: Ref<Record<string, string[]>>
  DataChildRemove: Ref<number[]>
  isSubmitting: Ref<boolean>
  seoResult: Ref<SeoAnalysisResult | null>
  isGeneratingSeo: Ref<boolean>
  initializeFormData: (schema: Schema) => void
  validate: () => boolean
  handleSubmit: () => void
  handleCancel: () => void
  pushInputValidateErrorMessage: (message: string | string[], key: string) => void
  deleteInputValidateErrorMessage: (key: string) => void
  autoGenerateSEO: () => Promise<void>
}

function t(lang: SupportedLanguage, params: Record<string, string>): string {
  const template = defaultMessagesErrorRequired[lang]
  return template.replace(/\{(\w+)\}/g, (_, p) => params[p] || '')
}

export function useFormModal<TEmit extends (event: any, ...args: any[]) => void>(
  options: FromModalProps,
  emit: TEmit,
  loader?: any,
  ShowAlert?: Function,
  labels?: GlobalDefaultText,
): FormModalComposable {
  const formData = ref<FormData>({})
  const DataChildRemove = ref<number[]>([])
  const errors = ref<Errors>({})
  const errorsInput = ref<Errors>({})
  const originalData = ref<FormData>({})
  const seletedOption = ref<Record<string, any>>({})
  const multiSelected = ref<Record<string, any>>({})
  const isSubmitting = ref<boolean>(false)
  const isGeneratingSeo = ref<boolean>(false)

  // State SEO
  const seoResult = ref<SeoAnalysisResult | null>(null)

  const hasChanges = computed(() => {
    if (!options.isUpdate) return true

    return Object.keys(formData.value).some((key) => {
      const currentValue = formData.value[key]
      const originalValue = originalData.value[key]

      if (Array.isArray(currentValue) && Array.isArray(originalValue)) {
        return JSON.stringify(currentValue) !== JSON.stringify(originalValue)
      }

      if (currentValue instanceof File) return true
      return currentValue !== originalValue
    })
  })

  // --- LOGIC SEO CALCULATOR ---
  if (options.seo) {
    watch(
      formData,
      (newVal) => {
        seoResult.value = calculateSeo(newVal, { seo: options.seo })
      },
      { deep: true, immediate: true },
    )
  }
  // --- FITUR AUTO GENERATE SEO VIA AI ---
  async function autoGenerateSEO() {
    if (!options.seo?.apiAI) return

    loader?.value?.show('loading', labels?.message?.process?.loading ?? 'AI sedang memproses...')
    isGeneratingSeo.value = true

    // Ekstraksi Heuristik
    const title =
      (options.seo?.content?.title ? getNested(formData.value, options.seo.content.title) : '') ||
      formData.value.name ||
      formData.value.title ||
      formData.value.judul ||
      ''

    const content =
      (options.seo?.content?.body ? getNested(formData.value, options.seo.content.body) : '') ||
      formData.value.description ||
      formData.value.content ||
      formData.value.body ||
      formData.value.deskripsi ||
      JSON.stringify(formData.value)

    if (!title && (!content || content === '{}')) {
      ShowAlert?.('error', 'Konteks Kosong', [
        'Harap isi form utama (seperti Nama/Judul dan Deskripsi) terlebih dahulu agar AI bisa membaca konteks data.',
      ])
      loader?.value?.show('error', 'Data konteks kosong.')
      isGeneratingSeo.value = false
      return
    }

    try {
      options.seo.apiAI.options = options.seo.apiAI.options ?? {}
      options.seo.apiAI.options.authType = options.seo.apiAI.options.authType ?? 'none'
      options.seo.apiAI.options.method = options.seo.apiAI.options.method ?? 'POST'
      options.seo.apiAI.options.headers = {
        'Content-Type': 'application/json',
        ...options.seo.apiAI.options.headers,
      }
      options.seo.apiAI.options.body = JSON.stringify({ title, content })
      const response = await secureFetch(options.seo.apiAI.api, {
        ...options.seo.apiAI.options,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.errors || data.message || 'Gagal menghasilkan SEO dari server.')
      }

      if (data && data.data) {
        const aiData = data.data
        const seoMap = options.seo

        // OPTIMASI: Mapping Definition untuk menghubungkan Key AI (Statis) dengan Path User (Dinamis)
        const mappingDefinitions = [
          // Meta Group
          { aiKey: 'metaTitle', path: seoMap.meta?.title },
          { aiKey: 'metaDescription', path: seoMap.meta?.description },
          { aiKey: 'metaFocusKeyword', path: seoMap.meta?.focusKeyword },

          // Content Group
          { aiKey: 'metaTags', path: seoMap.content?.tags },

          // Social Group
          { aiKey: 'ogTitle', path: seoMap.social?.ogTitle },
          { aiKey: 'ogDescription', path: seoMap.social?.ogDescription },
          { aiKey: 'ogType', path: seoMap.social?.ogType },
          { aiKey: 'ogSiteName', path: seoMap.social?.ogSiteName },
          { aiKey: 'twitterTitle', path: seoMap.social?.twitterTitle },
          { aiKey: 'twitterDescription', path: seoMap.social?.twitterDescription },
          { aiKey: 'twitterCard', path: seoMap.social?.twitterCard },
        ]

        // Eksekusi mapping secara otomatis
        mappingDefinitions.forEach(({ aiKey, path }) => {
          // Jika user mendefinisikan path-nya AND AI mengembalikan datanya
          if (path && aiData[aiKey] !== undefined) {
            setNested(formData.value, path, aiData[aiKey])
          }
        })
      }

      loader?.value?.show('success', 'Meta Data SEO berhasil dibuat secara otomatis!')
    } catch (error: any) {
      console.error('AI SEO Error:', error)
      ShowAlert?.('error', 'AI Generation Failed', [
        error.message || 'Terjadi kesalahan saat menghasilkan SEO.',
      ])
      loader?.value?.show('error', error.message || 'Gagal menghasilkan SEO otomatis')
    } finally {
      isGeneratingSeo.value = false
    }
  }
  // --- END FITUR AUTO GENERATE SEO ---

  watch(
    [() => options.schema, () => options.initialData],
    ([newSchema, newInitial], [oldSchema, oldInitial]) => {
      if (newSchema !== oldSchema || newInitial !== oldInitial) {
        initializeFormData(newSchema)
      }
    },
    { immediate: true, deep: true },
  )

  function initializeFormData(schema: Schema = options.schema) {
    const initial: FormData = {}
    const original: FormData = {}
    const initialData = options.initialData ?? {}
    processSchema(schema, initial, original, initialData)

    formData.value = initial
    originalData.value = original
  }

  function processSchema(
    schema: Schema,
    dataTarget: FormData,
    originalTarget: FormData,
    initialDataPart: FormData = {},
    keyParent?: string,
  ) {
    for (const [key, field] of Object.entries(schema)) {
      if (field.type === 'optionGroupSchema') {
        if (field.withValue) {
          const value = key in initialDataPart ? initialDataPart[key] : getDefaultValue(field)
          setNested(dataTarget, keyParent ? `${keyParent}.${key}` : key, value)
          setNested(
            originalTarget,
            keyParent ? `${keyParent}.${key}` : key,
            structuredClone(toRaw(value)),
          )
        }
        processOptionGroupSchema(field, dataTarget, originalTarget, initialDataPart)
        continue
      }

      if (field.type === 'mapPicker') {
        if (field.withFieldKey) {
          // Mode Nested: { key: { lat: ..., lng: ... } }
          const value = initialDataPart[key] || {
            [field.key.lat]: field.initialLat ?? null,
            [field.key.lng]: field.initialLng ?? null,
          }
          if (value[field.key.lat] && value[field.key.lng]) {
            field.initialLat = value[field.key.lat]
            field.initialLng = value[field.key.lng]
          }
          setNested(dataTarget, keyParent ? `${keyParent}.${key}` : key, value)
          setNested(
            originalTarget,
            keyParent ? `${keyParent}.${key}` : key,
            structuredClone(toRaw(value)),
          )
        } else {
          // Mode Spread: { latKey: ..., lngKey: ... }
          const latVal = initialDataPart[field.key.lat] ?? field.initialLat ?? null
          const lngVal = initialDataPart[field.key.lng] ?? field.initialLng ?? null
          if (latVal && lngVal) {
            field.initialLat = latVal
            field.initialLng = lngVal
          }

          setNested(dataTarget, keyParent ? `${keyParent}.${field.key.lat}` : field.key.lat, latVal)
          setNested(dataTarget, keyParent ? `${keyParent}.${field.key.lng}` : field.key.lng, lngVal)

          setNested(
            originalTarget,
            keyParent ? `${keyParent}.${field.key.lat}` : field.key.lat,
            latVal,
          )
          setNested(
            originalTarget,
            keyParent ? `${keyParent}.${field.key.lng}` : field.key.lng,
            lngVal,
          )
        }
        continue
      }

      if (field.type === 'object') {
        const updatedValue = initialDataPart[key] || {}
        dataTarget[key] = {}
        originalTarget[key] = {}
        processSchema(
          field.schema || {},
          dataTarget[key] as FormData,
          originalTarget[key] as FormData,
          updatedValue,
        )
        continue
      }

      const value = key in initialDataPart ? initialDataPart[key] : getDefaultValue(field)
      setNested(dataTarget, keyParent ? `${keyParent}.${key}` : key, value)
      setNested(
        originalTarget,
        keyParent ? `${keyParent}.${key}` : key,
        structuredClone(toRaw(value)),
      )
    }
  }

  function processOptionGroupSchema(
    field: OptionGroupField,
    initial: FormData,
    original: FormData,
    initialData: Record<string, any>,
  ) {
    for (const [optionKey, schema] of Object.entries(field.options)) {
      // schema adalah Schema (Record<string, Field>)
      for (const [innerKey, innerField] of Object.entries(schema)) {
        const fieldEntry = innerField as Field

        if (fieldEntry.type === 'object') {
          const updatedValue = initialData[innerKey] || {}

          // PERBAIKAN 1: Gabungkan data jika sudah ada, jangan di-reset menjadi {}
          initial[innerKey] = initial[innerKey] || {}
          original[innerKey] = original[innerKey] || {}

          // rekursif untuk object
          processSchema(
            fieldEntry.schema || {},
            initial[innerKey] as FormData,
            original[innerKey] as FormData,
            updatedValue,
          )
          continue
        }

        if (fieldEntry.type === 'optionGroupSchema') {
          processOptionGroupSchema(fieldEntry, initial, original, initialData)
          continue
        }

        if (fieldEntry.type === 'mapPicker') {
          if (fieldEntry.withFieldKey) {
            // PERBAIKAN 2: Jangan proses ulang jika sudah diisi oleh opsi sebelumnya
            if (initial[innerKey] === undefined) {
              const value = initialData[innerKey] ?? getDefaultValue(fieldEntry)
              if (value[fieldEntry.key.lat] && value[fieldEntry.key.lng]) {
                fieldEntry.initialLat = value[fieldEntry.key.lat]
                fieldEntry.initialLng = value[fieldEntry.key.lng]
              }
              setNested(initial, innerKey, value)
              setNested(original, innerKey, structuredClone(toRaw(value)))
            }
          } else {
            // PERBAIKAN 2: Jangan proses ulang jika sudah diisi oleh opsi sebelumnya
            if (initial[fieldEntry.key.lat] === undefined) {
              const lat = initialData[fieldEntry.key.lat] ?? fieldEntry.initialLat ?? null
              const lng = initialData[fieldEntry.key.lng] ?? fieldEntry.initialLng ?? null
              if (lat && lng) {
                fieldEntry.initialLat = lat
                fieldEntry.initialLng = lng
              }
              setNested(initial, fieldEntry.key.lat, lat)
              setNested(initial, fieldEntry.key.lng, lng)
              setNested(original, fieldEntry.key.lat, structuredClone(toRaw(lat)))
              setNested(original, fieldEntry.key.lng, structuredClone(toRaw(lng)))
            }
          }
          continue
        }

        const value = innerKey in initialData ? initialData[innerKey] : getDefaultValue(fieldEntry)
        initial[innerKey] = value
        original[innerKey] = structuredClone(toRaw(value))
      }
    }
  }

  function getDefaultValue(field: Field): any {
    switch (field.type) {
      case 'image':
        return null
      case 'color':
        if (field.single) {
          return ''
        }
        return []
      case 'optionGroupSchema':
        if (field.withValue) {
          if (field.typeDesign === 'cekbox') return []
          else return ''
        }
      case 'date':
        return undefined
      case 'time':
        return undefined
      case 'dateTime':
        return undefined
      case 'arrayObject':
        return []
      case 'tag':
        return []
      case 'mapPicker': {
        if (field.withFieldKey) {
          return {
            [field.key.lat]: field.initialLat ?? null,
            [field.key.lng]: field.initialLng ?? null,
          }
        }
        return null
      }
      case 'imageArray':
        return []
      case 'fileArray':
        return []
      case 'toggle':
        return false
      case 'number':
        return undefined
      case 'select':
        return null
      default:
        return ''
    }
  }

  function pushInputValidateErrorMessage(message: string | string[], key: string): void {
    const current = getNested(errorsInput.value, key) as string | string[] | undefined
    if (isSameMessage(current, message)) return

    setNested(errorsInput.value, key, message)
  }

  function deleteInputValidateErrorMessage(fieldkey: string): void {
    deleteNestedAndCleanup(errorsInput.value, fieldkey)
  }

  function validateInput(): boolean {
    let valid = true
    errors.value = {}

    if (Object.keys(errorsInput.value).length !== 0) {
      valid = false
    }

    return valid
  }

  function validate(): boolean {
    let valid = validateInput()

    function processSchema(schema: Schema, parentKey = ''): boolean {
      let isValid = true
      for (const [key, field] of Object.entries(schema)) {
        const fullKey = parentKey ? `${parentKey}.${key}` : key

        if (field.type === 'object') {
          const value = formData.value[key] || {}
          isValid = validateObjectField(fullKey, field.schema || {}, value) && isValid
          continue
        }

        if (field.type === 'optionGroupSchema') {
          isValid = validateOptionGroupField(key, field, key) && isValid
          continue
        }

        if (field.type === 'mapPicker') {
          // isValid = validateMapPickerField(fullKey, field) && isValid
          const errMessage = getNested(errorsInput.value, fullKey)
          if (errMessage) {
            setNested(errors.value, fullKey, errMessage)
            ShowAlert?.(
              'error',
              field.label ?? fullKey,
              Array.isArray(errMessage) ? errMessage : [errMessage],
            )
            isValid = false
          }
          continue
        }

        // Field biasa
        const validValue = validateStandardField(key, field)
        isValid = validValue && isValid
      }
      if (errors.value.length === 0) {
        valid = true
      }
      return isValid
    }

    const schemaValid = processSchema(options.schema)
    return schemaValid && valid && Object.keys(errors.value).length === 0
  }

  function validateMapPickerField(fullKey: string, field: MapPickerField): boolean {
    let isMapValid = true
    let errorMessage: string | string[] | undefined = []
    // Mode Spread: { latKey: ..., lngKey: ... }
    // Untuk spread, kita harus cari key lat/lng relatif terhadap parent path jika ada
    const parentPath = fullKey.includes('.') ? fullKey.substring(0, fullKey.lastIndexOf('.')) : ''
    const latKey = parentPath ? `${parentPath}.${field.key.lat}` : field.key.lat
    const lngKey = parentPath ? `${parentPath}.${field.key.lng}` : field.key.lng

    const lat = getNested(formData.value, latKey)
    const lng = getNested(formData.value, lngKey)
    if (field.required && (isEmpty(lat) || isEmpty(lng))) {
      isMapValid = false
    }

    // Tambahkan validasi min/max lat/lng
    if (field.validate) {
      const numLat = parseFloat(String(lat))
      const numLng = parseFloat(String(lng))

      if (field.validate.minLat !== undefined && numLat < field.validate.minLat) {
        isMapValid = false
        errorMessage.push(`Latitude tidak boleh kurang dari ${field.validate.minLat}`)
      }
      if (field.validate.maxLat !== undefined && numLat > field.validate.maxLat) {
        isMapValid = false
        errorMessage.push(`Latitude tidak boleh lebih dari ${field.validate.maxLat}`)
      }
      if (field.validate.minLng !== undefined && numLng < field.validate.minLng) {
        isMapValid = false
        errorMessage.push(`Longitude tidak boleh kurang dari ${field.validate.minLng}`)
      }
      if (field.validate.maxLng !== undefined && numLng > field.validate.maxLng) {
        isMapValid = false
        errorMessage.push(`Longitude tidak boleh lebih dari ${field.validate.maxLng}`)
      }
    }
    if (!isMapValid) {
      if (errorMessage.length === 0) {
        errorMessage = t(options.lang ?? 'en', { label: field.label ?? fullKey })
      }
      setNested(errors.value, fullKey, errorMessage)
      const err = getNested(errors.value, fullKey)
      ShowAlert?.('error', field.label ?? fullKey, Array.isArray(err) ? err : [err])
      return false
    }

    // Jika valid, hapus pesan error input jika ada
    deleteInputValidateErrorMessage(fullKey)
    return true
  }

  // Validasi rekursif untuk object
  function validateObjectField(parentKey: string, schema: Schema, value: any): boolean {
    let isValid = true
    for (const [key, field] of Object.entries(schema)) {
      const fullKey = parentKey ? `${parentKey}.${key}` : key
      if (field.type === 'object') {
        isValid = validateObjectField(fullKey, field.schema || {}, value?.[key] || {}) && isValid
        continue
      }
      if (field.type === 'optionGroupSchema') {
        isValid = validateOptionGroupField(fullKey, field, key) && isValid
        continue
      }
      if (field.type === 'mapPicker') {
        isValid = validateMapPickerField(fullKey, field) && isValid
        continue
      }
      // Field biasa
      const validValue = validateStandardField(fullKey, field)
      if (!validValue) {
        isValid = false
      } else {
        deleteInputValidateErrorMessage(fullKey)
      }
    }
    return isValid
  }

  function validateStandardField(key: string, field: any): boolean {
    const value = getNested(formData.value, key)
    if (field.required && isEmpty(value)) {
      setNested(errors.value, key, t(options.lang ?? 'en', { label: field.label ?? key }))
      const err = getNested(errors.value, key)
      ShowAlert?.('error', field.label ?? key, Array.isArray(err) ? err : [err])
      return false
    } else if (getNested(errorsInput.value, key)) {
      setNested(errors.value, key, getNested(errorsInput.value, key))
      const err = getNested(errors.value, key)
      ShowAlert?.('error', field.label ?? key, Array.isArray(err) ? err : [err])
      return false
    }
    return true
  }

  function validateOptionGroupField(
    fullKey: string,
    field: OptionGroupField,
    key: string,
  ): boolean {
    const noSelection =
      (field.typeDesign === 'cekbox' &&
        (!Array.isArray(getNested(multiSelected.value, fullKey)) ||
          getNested(multiSelected.value, fullKey).length === 0)) ||
      (field.typeDesign !== 'cekbox' && getNested(seletedOption.value, fullKey) == null)

    if (field.required && noSelection) {
      setNested(errors.value, fullKey, t(options.lang ?? 'en', { label: field.label ?? fullKey }))
      const err = getNested(errors.value, fullKey)
      if (err) {
        ShowAlert?.('error', field.label ?? fullKey, Array.isArray(err) ? err : [err])
      }
      return false
    }

    // === SELECT ===
    if (field.typeDesign === 'select') {
      const selectedKey = getNested(seletedOption.value, fullKey) as string | null
      if (selectedKey == null || !field.options[selectedKey]) return true
      return validateOptionGroupFields(field.options[selectedKey], normalizeKey(fullKey, key))
    }

    // === CEKBOX ===
    if (field.typeDesign === 'cekbox') {
      const selectedKeys: string[] = Array.isArray(getNested(multiSelected.value, fullKey))
        ? getNested(multiSelected.value, fullKey)
        : []

      let isValid = true
      for (const optKey of selectedKeys) {
        if (!field.options[optKey]) continue
        isValid =
          validateOptionGroupFields(field.options[optKey], normalizeKey(fullKey, key)) && isValid
      }
      return isValid
    }

    return true
  }

  function validateOptionGroupFields(schema: Record<string, any>, key?: string): boolean {
    let isValid = true
    for (const [innerKey, innerField] of Object.entries(schema)) {
      const fullKey = key ? key + '.' + innerKey : innerKey
      if (innerField.type === 'object') {
        // Rekursif validasi object di dalam optionGroupSchema
        const value = getNested(formData.value, fullKey) || {}
        const objectValid = validateObjectField(fullKey, innerField.schema || {}, value)
        isValid = objectValid && isValid
        continue
      } else if (innerField.type === 'optionGroupSchema') {
        // PERBAIKAN: Kirim fullKey sebagai argumen pertama, dan innerKey sebagai argumen ketiga
        isValid = validateOptionGroupField(fullKey, innerField, innerKey) && isValid
        continue
      }
      if (innerField.type === 'mapPicker') {
        isValid = validateMapPickerField(fullKey, innerField) && isValid
        continue
      }
      const validateInput = validateStandardField(fullKey, innerField)
      if (!validateInput) {
        isValid = false
        continue
      }
    }
    return isValid
  }

  function isEmpty(value: any): boolean {
    return (
      value === null ||
      value === undefined ||
      value === '' ||
      (Array.isArray(value) && value.length === 0)
    )
  }

  function handleSubmit(): void {
    isSubmitting.value = true
    if (!validate()) {
      isSubmitting.value = false
      return
    }

    if (options.isUpdate && !hasChanges.value) {
      loader?.value?.show('error', labels?.message.noChange ?? 'No data has changed')
      setTimeout(() => {
        isSubmitting.value = false
      }, 2000)
      return
    }
    const cleanedData = prepareSubmissionData()
    // --- FITUR BARU: INJECT SEO SCORE ---
    if (options.seo && seoResult.value) {
      // 1. INJECT SCORE (Wajib/Default)
      if (options.seo.scorePath) {
        setNested(cleanedData, options.seo.scorePath, seoResult.value.score)
      }
      // 2. INJECT DETAILS / ANALYSIS (Opsional)
      if (options.seo.analysisPath) {
        setNested(cleanedData, options.seo.analysisPath, seoResult.value.details)
      }
    }
    emit('submit', cleanedData)
    setTimeout(() => {
      isSubmitting.value = false
    }, 2000)
  }

  function prepareSubmissionData(): Record<string, any> {
    const schema = options.schema
    const form = formData.value
    const initial = options.initialData ?? {}

    const base: Record<string, any> = options.id && options.isUpdate ? { id: options.id } : {}
    return prepareDataFromSchema(schema, form, initial, base)
  }

  function prepareDataFromSchema(
    schema: Record<string, Field> | Field[],
    form: Record<string, any>,
    initial: Record<string, any>,
    target: Record<string, any> = {},
  ): Record<string, any> {
    if (Array.isArray(schema)) {
      for (const group of schema) {
        for (const [key, field] of Object.entries(group)) {
          if (field.type === 'optionGroupSchema') {
            Object.assign(
              target,
              processOptionGroupSubmissionData(field, form, initial, key, form?.[key]),
            )
            continue
          }

          if (field.type === 'object') {
            target[key] = prepareDataFromSchema(
              field.schema,
              form?.[key] ?? {},
              initial?.[key] ?? {},
            )
            continue
          }
          if (field.type === 'mapPicker') {
            if (field.withFieldKey) {
              const val = form[key]
              target[key] = val
                ? {
                    [field.key.lat]: coerceValue(
                      val[field.key.lat],
                      { type: 'number' } as Field,
                      null,
                    ),
                    [field.key.lng]: coerceValue(
                      val[field.key.lng],
                      { type: 'number' } as Field,
                      null,
                    ),
                  }
                : null
            } else {
              target[field.key.lat] = coerceValue(
                form[field.key.lat],
                { type: 'number' } as Field,
                null,
              )
              target[field.key.lng] = coerceValue(
                form[field.key.lng],
                { type: 'number' } as Field,
                null,
              )
            }
            continue
          }

          target[key] = coerceValue(form?.[key], field, initial?.[key])
        }
      }
      return target
    }

    for (const [key, field] of Object.entries(schema)) {
      if (field.type === 'optionGroupSchema') {
        Object.assign(
          target,
          processOptionGroupSubmissionData(field, form, initial, key, form?.[key]),
        )

        continue
      }

      if (field.type === 'object') {
        target[key] = prepareDataFromSchema(field.schema, form?.[key] ?? {}, initial?.[key] ?? {})
        continue
      }
      if (field.type === 'mapPicker') {
        if (field.withFieldKey) {
          const val = form[key]
          target[key] = val
            ? {
                [field.key.lat]: coerceValue(val[field.key.lat], { type: 'number' } as Field, null),
                [field.key.lng]: coerceValue(val[field.key.lng], { type: 'number' } as Field, null),
              }
            : null
        } else {
          target[field.key.lat] = coerceValue(
            form[field.key.lat],
            { type: 'number' } as Field,
            null,
          )
          target[field.key.lng] = coerceValue(
            form[field.key.lng],
            { type: 'number' } as Field,
            null,
          )
        }
        continue
      }

      target[key] = coerceValue(form?.[key], field, initial?.[key])
    }

    return target
  }

  function coerceValue(value: any, field: Field, initialValue: any): any {
    if (value instanceof File || value instanceof Blob) {
      return value
    }

    if (Array.isArray(value)) {
      return [...toRaw(value)]
    }

    if (typeof value === 'object' && value !== null) {
      const raw = toRaw(value)
      return Object.keys(raw).length === 0 ? null : raw
    }

    if (typeof value === 'number') {
      const n = Number(value)
      return Number.isFinite(n) ? n : null
    }

    if (value === '' || value === undefined || value === null) {
      return null
    }

    return value
  }

  function processOptionGroupSubmissionData(
    field: OptionGroupField,
    form: FormData,
    initial: Record<string, any>,
    key?: string,
    value?: string | string[] | number | number[],
  ) {
    const data: Record<string, any> = {}
    if (field.withValue && key) {
      data[key] = coerceValue(value, field, initial?.[key])
    }
    for (const [optionKey, schema] of Object.entries(field.options)) {
      for (const [innerKey, innerFieldRaw] of Object.entries(schema)) {
        const innerField = innerFieldRaw as Field

        if (innerField.type === 'object') {
          data[innerKey] = {
            ...(data[innerKey] || {}),
            ...prepareDataFromSchema(
              innerField.schema || {},
              form?.[innerKey] ?? {},
              initial?.[innerKey] ?? {},
            ),
          }
          continue
        }

        if (innerField.type === 'optionGroupSchema') {
          Object.assign(
            data,
            processOptionGroupSubmissionData(innerField, form, initial, innerKey, form?.[innerKey]),
          )
          continue
        }

        if (innerField.type === 'mapPicker') {
          if (innerField.withFieldKey) {
            const val = form[innerKey]
            data[innerKey] = val
              ? {
                  [innerField.key.lat]: val[innerField.key.lat],
                  [innerField.key.lng]: val[innerField.key.lng],
                }
              : null
          } else {
            data[innerField.key.lat] = form[innerField.key.lat]
            data[innerField.key.lng] = form[innerField.key.lng]
          }
          continue
        }
        // field biasa
        data[innerKey] = coerceValue(form?.[innerKey], innerField, initial?.[innerKey])
      }
    }

    return data
  }

  function handleCancel(): void {
    emit('cancel')
  }

  return {
    formData,
    errors,
    hasChanges,
    seletedOption,
    multiSelected,
    DataChildRemove,
    isSubmitting,
    seoResult,
    isGeneratingSeo,
    initializeFormData,
    validate,
    handleSubmit,
    handleCancel,
    pushInputValidateErrorMessage,
    deleteInputValidateErrorMessage,
    autoGenerateSEO,
  }
}
