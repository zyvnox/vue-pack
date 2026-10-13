// composables/useFormFieldRenderer.ts
import { computed, inject, ref, hasInjectionContext } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import type {
  Field,
  Errors,
  FormData,
  GlobalDefaultText,
  SupportedLanguage,
} from '../../../configs'
import { defaultTextLabelsMap } from '../../../configs/i18n'

interface FormFieldRendererProps {
  field: Field
  fieldKey: string
  formData: FormData
  errors: Errors
  lang?: SupportedLanguage
}

interface FormFieldRendererComposable {
  label: ComputedRef<string>
  labels: Ref<GlobalDefaultText>
  removedItems: Ref<number[]>
  handlers: {
    pushError: (message: string | string[], key: string) => void
    removeError: (key: string) => void
    removeChildData: (items: number[]) => void
  }
  mergeNumberArrays: (arrayA: number[], arrayB: number[]) => number[]
}

function resolveFallbackLabels(lang?: SupportedLanguage): GlobalDefaultText {
  const targetLang = lang ?? 'en'
  return (
    defaultTextLabelsMap[targetLang] ?? defaultTextLabelsMap['en'] ?? defaultTextLabelsMap['id']
  )
}

export function useFormFieldRenderer<TEmit extends (event: any, ...args: any[]) => void>(
  props: FormFieldRendererProps,
  emit: TEmit,
): FormFieldRendererComposable {
  const removedItems = ref<number[]>([])

  // Defensive lookup with fallback chain: injected TableComponents.labels -> defaultTextLabelsMap[lang] -> 'en' -> FALLBACK_DEFAULT_TEXT
  const injected = hasInjectionContext()
    ? (inject<{ labels?: Ref<GlobalDefaultText> }>('TableComponents', {}) ??
      inject<{ labels?: Ref<GlobalDefaultText> }>('tableComponents', {}))
    : {}
  const labels: Ref<GlobalDefaultText> = injected?.labels ?? ref(resolveFallbackLabels(props.lang))

  if (typeof import.meta !== 'undefined' && import.meta.env?.DEV && (!labels || !labels.value)) {
    console.warn('[vue-pack] Missing labels for', { lang: props.lang, key: props.fieldKey })
  }

  const label = computed(() => {
    const fieldLabel = props.field?.label ?? props.fieldKey ?? ''
    const req = labels?.value?.required ?? '*'
    const opt = labels?.value?.optional ?? '(Optional)'
    return `${fieldLabel} ${props.field?.required ? req : opt}`.trim()
  })

  const mergeNumberArrays = (arrayA: number[], arrayB: number[]): number[] => {
    return [...new Set([...arrayA, ...arrayB])]
  }

  const handlers = {
    pushError: (message: string[] | string, key: string) => emit('push:errors', message, key),
    removeError: (key: string) => emit('remove:errors', key),
    removeChildData: (items: number[]) => {
      removedItems.value = mergeNumberArrays(removedItems.value, items)
      emit('remove-items', removedItems.value)
    },
  }

  return {
    label,
    labels,
    removedItems,
    handlers,
    mergeNumberArrays,
  }
}
