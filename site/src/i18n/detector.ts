import type { SiteLocale } from './types'

const STORAGE_KEY = 'zyvnox_site_lang'

/**
 * Deteksi bahasa awal berdasarkan preferensi tersimpan atau lokasi pengguna (Indonesia -> 'id', lainnya -> 'en').
 * Berjalan secara sinkron saat pemuatan awal untuk mencegah layout shift.
 */
export function detectLocationLocale(): SiteLocale {
  // 1. Cek preferensi tersimpan pengguna
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'en' || saved === 'id') {
        return saved
      }
    } catch {
      // Abaikan jika localStorage diblokir
    }
  }

  // 2. Deteksi lokasi berdasarkan Timezone Indonesia:
  // WIB (UTC+7): Asia/Jakarta, Asia/Pontianak
  // WITA (UTC+8): Asia/Makassar, Asia/Ujung_Pandang
  // WIT (UTC+9): Asia/Jayapura
  if (typeof Intl !== 'undefined' && Intl.DateTimeFormat) {
    try {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || ''
      if (/Asia\/(Jakarta|Pontianak|Makassar|Jayapura|Ujung_Pandang)/i.test(timeZone)) {
        return 'id'
      }
    } catch {
      // fallback
    }
  }

  // 3. Deteksi bahasa browser (id, id-ID, in, in-ID)
  if (typeof navigator !== 'undefined') {
    try {
      const langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || '']
      for (const l of langs) {
        const lower = (l || '').toLowerCase()
        if (lower.startsWith('id') || lower.startsWith('in')) {
          return 'id'
        }
      }
    } catch {
      // fallback
    }
  }

  // Default fallback jika di luar Indonesia
  return 'en'
}

/**
 * Simpan preferensi bahasa pengguna ke localStorage
 */
export function saveLocalePreference(locale: SiteLocale): void {
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // Abaikan jika localStorage tidak tersedia
    }
  }
}

/**
 * Pemeriksaan lokasi tambahan di latar belakang (non-blocking) menggunakan IP Geolocation gratis.
 * Hanya dipanggil jika pengguna belum pernah memilih bahasa secara manual.
 */
export async function checkIpCountryBackground(onDetectedId: () => void): Promise<void> {
  if (typeof window === 'undefined') return
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return // Jangan override jika user sudah memilih secara eksplisit

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 2000)

    // Coba endpoint deteksi negara yang cepat dan tanpa token
    const res = await fetch('https://api.country.is', {
      signal: controller.signal,
    }).catch(() => null)

    clearTimeout(timeoutId)

    if (res && res.ok) {
      const data = await res.json()
      if (data && data.country === 'ID') {
        onDetectedId()
      }
    }
  } catch {
    // Fail silently
  }
}
