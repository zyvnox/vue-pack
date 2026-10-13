import { ref, watch, onMounted } from 'vue'
import type { Ref } from 'vue'
import type { Schema, SchemaGroupRendererProps } from '../../../../configs/types'

interface SchemaGroupRendererComposable {
  selectedOption: Ref<string | null>
  multiSelected: Ref<string[]>
  fieldIsColor: Ref<string[]>
  initializeFormData: () => void
  handleSelectChange: () => void
  handleCheckboxChange: () => void
  errorPush: (message: string | string[], key: string) => void
  errorRemove: (key: string) => void
}

export function useSchemaGroupRenderer<TEmit extends (event: any, ...args: any[]) => void>(
  props: SchemaGroupRendererProps,
  emit: TEmit,
): SchemaGroupRendererComposable {
  const selectedOption = ref<string | null>(null)
  const multiSelected = ref<string[]>([])
  const fieldIsColor = ref<string[]>([])
  let selectedOptionCheck: string | null = null
  let initialized = false

  const isFilled = (value: any): boolean => {
    if (value === null || value === undefined) return false
    if (typeof value === 'string' && value.trim() === '') return false
    if (Array.isArray(value) && value.length === 0) return false
    if (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0) {
      return false
    }
    return true
  }

  const countFilledFields = (schemaPart: Schema, formData: Record<string, any>): number => {
    let count = 0
    if (!formData) return 0 // Keamanan tambahan agar tidak error jika formData null

    Object.keys(schemaPart).forEach((key) => {
      const field = schemaPart[key]
      const value = formData[key]

      if (field.type === 'optionGroupSchema' && field.options) {
        const subScores = Object.values(field.options).map((subSchema) =>
          countFilledFields(subSchema, formData),
        )
        count += Math.max(0, ...subScores)
      } else if (field.type === 'object' && field.schema) {
        if (value && typeof value === 'object') {
          count += countFilledFields(field.schema, value)
        }
      } else if (isFilled(value)) {
        count++
      }
    })
    return count
  }

  const resetSchemaKeys = (
    schemaPart: Schema,
    targetData: Record<string, any> = props.formData,
    isRoot = true,
  ): void => {
    Object.keys(schemaPart).forEach((key) => {
      const field = schemaPart[key]

      targetData[key] = null

      // Hanya emit event update jika berada di tingkat terluar (root)
      if (isRoot) {
        emit('update:model-value', null, key)
      }

      if (field.type === 'optionGroupSchema' && field.options) {
        Object.values(field.options).forEach((subSchema) =>
          resetSchemaKeys(subSchema, targetData, isRoot),
        )
      }
      if (field.type === 'object' && field.schema) {
        // resetSchemaKeys(field.schema)
      }
    })
  }

  const ensureSchemaKeys = (
    schemaPart: Schema,
    targetData: Record<string, any> = props.formData,
  ): void => {
    Object.keys(schemaPart).forEach((key) => {
      const field = schemaPart[key]

      if (!(key in targetData)) {
        targetData[key] = null
      }

      if (field.type === 'optionGroupSchema' && field.options) {
        Object.values(field.options).forEach((subSchema) => ensureSchemaKeys(subSchema, targetData))
      }
      if (field.type === 'object' && field.schema) {
        // Buat object kosong jika belum ada, agar child/nested key bisa dimasukkan
        if (targetData[key] === null || typeof targetData[key] !== 'object') {
          targetData[key] = {}
        }
        ensureSchemaKeys(field.schema, targetData[key])
      }
    })
  }

  const autoDetectSelect = (): void => {
    if (props.typeDesign !== 'select' && props.typeDesign !== 'dropdown') return

    // 1. PRIORITAS UTAMA: Jika withValue menyala, gunakan value eksplisit dari formData (jika ada)
    if (props.withValue && props.formData[props.id] && props.options[props.formData[props.id]]) {
      selectedOption.value = props.formData[props.id]
      ensureSchemaKeys(props.options[selectedOption.value!])
      return
    }

    // 2. BACKUP: Jika tidak ada value eksplisit, gunakan sistem skoring otomatis
    let bestOption: string | null = null
    let maxScore = 0

    for (const [optKey, schemaPart] of Object.entries(props.options)) {
      const score = countFilledFields(schemaPart, props.formData)
      if (score > maxScore) {
        maxScore = score
        bestOption = optKey
      }
    }

    if (bestOption) {
      selectedOption.value = bestOption
      ensureSchemaKeys(props.options[bestOption])
      return
    }

    // 3. Fallback: Default Value atau Required
    if (props.defaultValue) {
      selectedOption.value = props.defaultValue as string
      return
    }
    selectedOption.value = props.required ? (Object.keys(props.options)[0] ?? null) : null
  }

  const autoDetectCheckbox = (): void => {
    if (props.typeDesign !== 'cekbox') return

    // 1. PRIORITAS UTAMA: Jika withValue menyala, gunakan value dari formData
    if (
      props.withValue &&
      Array.isArray(props.formData[props.id]) &&
      props.formData[props.id].length > 0
    ) {
      const raw = props.formData[props.id]
      const validKeys = Array.isArray(raw)
        ? (raw.filter(
            (k: unknown) => typeof k === 'string' && props.options[k as string],
          ) as string[])
        : ([] as string[])
      if (validKeys.length > 0) {
        multiSelected.value = Array.from(new Set(validKeys))
        validKeys.forEach((k: string) => ensureSchemaKeys(props.options[k]))
        return
      }
    }

    // 2. BACKUP: Sistem skoring/deteksi
    const preselected: string[] = []
    for (const [optKey, schemaPart] of Object.entries(props.options)) {
      if (countFilledFields(schemaPart, props.formData) > 0) {
        preselected.push(optKey)
        ensureSchemaKeys(schemaPart)
      }
    }

    if (props.defaultValue) {
      preselected.push(...(props.defaultValue as string[]))
    }
    multiSelected.value = [...new Set(preselected)]
  }

  const initializeFormData = (): void => {
    autoDetectSelect()
    autoDetectCheckbox()
    initialized = true
  }

  const handleSelectChange = (): void => {
    if (selectedOptionCheck && props.options[selectedOptionCheck]) {
      resetSchemaKeys(props.options[selectedOptionCheck])
    }
    if (selectedOption.value && props.options[selectedOption.value]) {
      ensureSchemaKeys(props.options[selectedOption.value])
    }
    selectedOptionCheck = selectedOption.value
  }

  const handleCheckboxChange = (): void => {
    const allKeys = Object.keys(props.options)
    const unselected = allKeys.filter((k) => !multiSelected.value.includes(k))

    for (const key of unselected) {
      const schemaPart = props.options[key]
      if (!schemaPart) continue
      resetSchemaKeys(schemaPart)
    }

    for (const key of multiSelected.value) {
      const schemaPart = props.options[key]
      if (!schemaPart) continue
      ensureSchemaKeys(schemaPart)
    }
  }

  const errorPush = (message: string | string[], key: string): void => {
    emit('push:errors', message, key)
  }

  const errorRemove = (key: string): void => {
    emit('remove:errors', key)
  }

  watch(
    selectedOption,
    () => {
      emit('selected-option-change', selectedOption.value, props.id)
      if (props.withValue) {
        emit('update:model-value', selectedOption.value, props.id)
      }
      if (!initialized) return
      handleSelectChange()
    },
    { deep: true },
  )

  watch(
    multiSelected,
    () => {
      emit('multi-selected-change', multiSelected.value, props.id)
      if (props.withValue) {
        emit('update:model-value', multiSelected.value, props.id)
      }
      if (!initialized) return
      handleCheckboxChange()
    },
    { deep: true },
  )

  watch(
    () => props.formData,
    (newVal) => {
      if (!initialized || !newVal) return

      if (props.typeDesign === 'cekbox') {
        // BYPASS SKORING JIKA withValue MENYALA
        if (props.withValue) {
          const savedVal = newVal[props.id]
          if (Array.isArray(savedVal)) {
            const validKeys = savedVal.filter((k: string) => props.options[k])
            // Cegah infinite loop dengan mengecek array sama/tidak
            if (
              JSON.stringify(validKeys.sort()) !== JSON.stringify([...multiSelected.value].sort())
            ) {
              multiSelected.value = validKeys
            }
          }
          return // Keluar, jangan eksekusi skoring di bawah
        }

        const currentMulti = [...multiSelected.value]
        let changed = false

        for (const [optKey, schemaPart] of Object.entries(props.options)) {
          if (countFilledFields(schemaPart, newVal) > 0 && !currentMulti.includes(optKey)) {
            currentMulti.push(optKey)
            changed = true
          }
        }

        if (changed) {
          multiSelected.value = currentMulti
        }
      } else if (props.typeDesign === 'select' || props.typeDesign === 'dropdown') {
        // BYPASS SKORING JIKA withValue MENYALA
        if (props.withValue) {
          const savedVal = newVal[props.id]
          if (savedVal && props.options[savedVal] && savedVal !== selectedOption.value) {
            selectedOption.value = savedVal
          }
          return // Keluar, biarkan opsi tetap berdasarkan binding
        }

        // --- SISTEM SKORING HANYA BERJALAN JIKA withValue === false ---
        let bestOption = selectedOption.value
        let maxScore =
          bestOption && props.options[bestOption]
            ? countFilledFields(props.options[bestOption], newVal)
            : 0

        for (const [optKey, schemaPart] of Object.entries(props.options)) {
          if (optKey === selectedOption.value) continue

          const score = countFilledFields(schemaPart, newVal)
          if (score > maxScore) {
            maxScore = score
            bestOption = optKey
          }
        }

        if (bestOption !== selectedOption.value) {
          selectedOption.value = bestOption
        }
      }
    },
    { deep: true },
  )

  onMounted(() => {
    initializeFormData()
  })

  return {
    selectedOption,
    multiSelected,
    fieldIsColor,
    initializeFormData,
    handleSelectChange,
    handleCheckboxChange,
    errorPush,
    errorRemove,
  }
}
