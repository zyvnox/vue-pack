import { ref, computed } from 'vue'
import type { SiteLocale } from './types'
import { detectLocationLocale, saveLocalePreference, checkIpCountryBackground } from './detector'
import en from './messages/en'
import id from './messages/id'

export * from './types'
export * from './detector'

const messages: Record<SiteLocale, Record<string, any>> = {
  en,
  id,
}

// Reactive singleton state
const currentLocale = ref<SiteLocale>(detectLocationLocale())

// Deteksi latar belakang non-blocking jika user belum memilih bahasa sendiri
if (typeof window !== 'undefined') {
  checkIpCountryBackground(() => {
    if (currentLocale.value !== 'id') {
      currentLocale.value = 'id'
      saveLocalePreference('id')
    }
  })
}

export function useSiteI18n() {
  const locale = computed(() => currentLocale.value)
  const isIndonesian = computed(() => currentLocale.value === 'id')

  const setLocale = (newLocale: SiteLocale) => {
    currentLocale.value = newLocale
    saveLocalePreference(newLocale)
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLocale
    }
  }

  const toggleLocale = () => {
    setLocale(currentLocale.value === 'en' ? 'id' : 'en')
  }

  /**
   * Translate dot-notation key ke string dengan parameter opsional
   * @example t('home.heroTitlePrefix')
   * @example t('home.whatsNewPill', { version: '0.1.4' })
   */
  const t = (path: string, params?: Record<string, string | number>): string => {
    const keys = path.split('.')
    let current: any = messages[currentLocale.value]

    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key]
      } else {
        // Fallback to EN if missing
        let fallback: any = messages.en
        for (const fbKey of keys) {
          if (fallback && typeof fallback === 'object' && fbKey in fallback) {
            fallback = fallback[fbKey]
          } else {
            return path
          }
        }
        current = fallback
        break
      }
    }

    if (typeof current !== 'string') {
      return path
    }

    if (params) {
      return current.replace(/\{(\w+)\}/g, (_, k) => String(params[k] ?? `{${k}}`))
    }

    return current
  }

  return {
    locale,
    currentLocale,
    isIndonesian,
    setLocale,
    toggleLocale,
    t,
  }
}
