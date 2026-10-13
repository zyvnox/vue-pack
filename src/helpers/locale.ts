import { getClientLocaleAndTimeZone } from '..'

function getSafeLocale(locale: string, fallback = 'id-ID') {
  const supported = Intl.DateTimeFormat.supportedLocalesOf([locale])
  return supported.length > 0 ? supported[0] : fallback
}

function isValidDate(d: Date) {
  return d instanceof Date && !isNaN(d.getTime())
}

export const formatDate = (val: string) => {
  try {
    if (!val) return '-'
    const d = new Date(val)
    if (!isValidDate(d)) return val
    const { locale, timeZone } = getClientLocaleAndTimeZone()
    return d.toLocaleDateString(getSafeLocale(locale), {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone,
    })
  } catch {
    return val
  }
}

export const formatTime = (val: string) => {
  try {
    if (!val) return '-'
    const d = new Date(`1970-01-01T${val}`)
    if (!isValidDate(d)) return val
    const { locale, timeZone } = getClientLocaleAndTimeZone()
    return d.toLocaleTimeString(getSafeLocale(locale), {
      hour: '2-digit',
      minute: '2-digit',
      timeZone,
    })
  } catch {
    return val
  }
}

export const formatDateTime = (val: string) => {
  try {
    if (!val) return '-'
    const d = new Date(val)
    if (!isValidDate(d)) return val
    const { locale, timeZone } = getClientLocaleAndTimeZone()
    return d.toLocaleString(getSafeLocale(locale), {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone,
    })
  } catch {
    return val
  }
}
