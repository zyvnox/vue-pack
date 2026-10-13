import { computed, inject, ref, unref, hasInjectionContext, type Ref } from 'vue'
import type { GlobalDefaultText } from '../../configs/types/globalText.types'
import { defaultTextLabelsMap } from '../../configs/i18n/labels'
import { getAvailableLanguages } from '../../configs/i18n/register'

/**
 * Composable untuk akses i18n label di dalam komponen.
 *
 * @example
 * const { t, lang, setLang, labels } = useI18n()
 *
 * // Di template:
 * {{ t('counter.word') }} → "Kata" (id) / "Word" (en)
 * {{ t('upload.maxFiles', { max: 5 }) }} → "Maksimal 5 file" (id) / "Max 5 files" (en)
 */
export function useI18n(overrideLang?: string | Ref<string | undefined>) {
  // Ambil dari inject ('TableComponents' atau 'tableComponents'), fallback ke default 'en'
  const injected = hasInjectionContext()
    ? (inject<any>('TableComponents', null) ?? inject<any>('tableComponents', null))
    : null

  const initialLang = computed(() => {
    const rawOverride = unref(overrideLang)
    if (rawOverride) return rawOverride
    const injectedLabels = injected?.labels ? unref(injected.labels) : null
    return injectedLabels?.lang ?? 'en'
  })

  const manualLang = ref<string | null>(null)

  const activeLang = computed<string>(() => {
    return manualLang.value ?? initialLang.value
  })

  const labels = computed<GlobalDefaultText>(() => {
    const langKey = activeLang.value
    const available = getAvailableLanguages()

    if (available.includes(langKey) && defaultTextLabelsMap[langKey]) {
      return defaultTextLabelsMap[langKey]
    }

    if (injected?.labels) {
      const injectedVal = unref(injected.labels)
      if (injectedVal) return injectedVal
    }

    return defaultTextLabelsMap['en']
  })

  /**
   * Translate dot-notation key ke string dengan parameter opsional.
   *
   * @example
   * t('counter.word')                → "Kata"
   * t('table.showing')               → "Menampilkan"
   * t('common.copy')                 → "Salin"
   * t('upload.maxFiles', { max: 5 }) → "Maksimal 5 file"
   */
  const t = (key: string, params?: Record<string, string | number>): string => {
    const keys = key.split('.')
    let result: any = labels.value

    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k]
      } else {
        // Fallback ke 'en' kalau key tidak ada di bahasa aktif
        let fallback: any = defaultTextLabelsMap['en']
        for (const fk of keys) {
          if (fallback && typeof fallback === 'object' && fk in fallback) {
            fallback = fallback[fk]
          } else {
            if (import.meta.env.DEV) {
              console.warn(`[vue-pack/i18n] Missing key: "${key}" (lang: ${activeLang.value})`)
            }
            return key
          }
        }
        result = fallback
        break
      }
    }

    if (typeof result !== 'string') {
      if (import.meta.env.DEV) {
        console.warn(`[vue-pack/i18n] Key "${key}" is not a string:`, result)
      }
      return key
    }

    // Replace {param} dengan value
    if (params) {
      return result.replace(/\{(\w+)\}/g, (_, k) => String(params[k] ?? `{${k}}`))
    }

    return result
  }

  const setLang = (newLang: string) => {
    manualLang.value = newLang
  }

  return {
    t,
    lang: activeLang,
    setLang,
    labels,
  }
}
