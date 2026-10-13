export interface ClientLocaleInfo {
  locale: string
  timeZone: string
}

export function getClientLocaleAndTimeZone(
  fallbackLocale = 'id-ID',
  fallbackTimeZone = 'Asia/Jakarta',
): ClientLocaleInfo {
  let locale = fallbackLocale
  let timeZone = fallbackTimeZone

  try {
    if (typeof navigator !== 'undefined') {
      locale = navigator.language || fallbackLocale
    }
    timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || fallbackTimeZone
  } catch {
    // fallback
  }

  return { locale, timeZone }
}
