export interface CurrencyMeta {
  code: string
  symbol: string
  name: string
  locale: string
}

/**
 * Standard dictionary of world currencies mapping codes, symbols, and localized formatting.
 */
export const CURRENCY_MAP: Record<string, CurrencyMeta> = {
  // Indonesian Rupiah
  idr: { code: 'IDR', symbol: 'Rp', name: 'Indonesian Rupiah', locale: 'id-ID' },
  'rp.': { code: 'IDR', symbol: 'Rp.', name: 'Indonesian Rupiah', locale: 'id-ID' },
  rp: { code: 'IDR', symbol: 'Rp', name: 'Indonesian Rupiah', locale: 'id-ID' },
  rupiah: { code: 'IDR', symbol: 'Rp', name: 'Indonesian Rupiah', locale: 'id-ID' },

  // US Dollar
  usd: { code: 'USD', symbol: '$', name: 'US Dollar', locale: 'en-US' },
  $: { code: 'USD', symbol: '$', name: 'US Dollar', locale: 'en-US' },
  dollar: { code: 'USD', symbol: '$', name: 'US Dollar', locale: 'en-US' },

  // Japanese Yen
  jpy: { code: 'JPY', symbol: '¥', name: 'Japanese Yen', locale: 'ja-JP' },
  '¥': { code: 'JPY', symbol: '¥', name: 'Japanese Yen', locale: 'ja-JP' },
  yen: { code: 'JPY', symbol: '¥', name: 'Japanese Yen', locale: 'ja-JP' },

  // Euro
  eur: { code: 'EUR', symbol: '€', name: 'Euro', locale: 'de-DE' },
  '€': { code: 'EUR', symbol: '€', name: 'Euro', locale: 'de-DE' },
  euro: { code: 'EUR', symbol: '€', name: 'Euro', locale: 'de-DE' },

  // British Pound Sterling
  gbp: { code: 'GBP', symbol: '£', name: 'British Pound', locale: 'en-GB' },
  '£': { code: 'GBP', symbol: '£', name: 'British Pound', locale: 'en-GB' },
  pound: { code: 'GBP', symbol: '£', name: 'British Pound', locale: 'en-GB' },

  // Chinese Yuan / Renminbi
  cny: { code: 'CNY', symbol: '¥', name: 'Chinese Yuan', locale: 'zh-CN' },
  rmb: { code: 'CNY', symbol: '¥', name: 'Chinese Yuan', locale: 'zh-CN' },
  yuan: { code: 'CNY', symbol: '¥', name: 'Chinese Yuan', locale: 'zh-CN' },

  // South Korean Won
  krw: { code: 'KRW', symbol: '₩', name: 'South Korean Won', locale: 'ko-KR' },
  '₩': { code: 'KRW', symbol: '₩', name: 'South Korean Won', locale: 'ko-KR' },
  won: { code: 'KRW', symbol: '₩', name: 'South Korean Won', locale: 'ko-KR' },

  // Singapore Dollar
  sgd: { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', locale: 'en-SG' },
  's$': { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', locale: 'en-SG' },

  // Australian Dollar
  aud: { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', locale: 'en-AU' },
  'a$': { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', locale: 'en-AU' },

  // Canadian Dollar
  cad: { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', locale: 'en-CA' },
  'c$': { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', locale: 'en-CA' },

  // Malaysian Ringgit
  myr: { code: 'MYR', symbol: 'RM', name: 'Malaysian Ringgit', locale: 'ms-MY' },
  rm: { code: 'MYR', symbol: 'RM', name: 'Malaysian Ringgit', locale: 'ms-MY' },
  ringgit: { code: 'MYR', symbol: 'RM', name: 'Malaysian Ringgit', locale: 'ms-MY' },

  // Thai Baht
  thb: { code: 'THB', symbol: '฿', name: 'Thai Baht', locale: 'th-TH' },
  '฿': { code: 'THB', symbol: '฿', name: 'Thai Baht', locale: 'th-TH' },
  baht: { code: 'THB', symbol: '฿', name: 'Thai Baht', locale: 'th-TH' },

  // Philippine Peso
  php: { code: 'PHP', symbol: '₱', name: 'Philippine Peso', locale: 'en-PH' },
  '₱': { code: 'PHP', symbol: '₱', name: 'Philippine Peso', locale: 'en-PH' },
  peso: { code: 'PHP', symbol: '₱', name: 'Philippine Peso', locale: 'en-PH' },

  // Vietnamese Dong
  vnd: { code: 'VND', symbol: '₫', name: 'Vietnamese Dong', locale: 'vi-VN' },
  '₫': { code: 'VND', symbol: '₫', name: 'Vietnamese Dong', locale: 'vi-VN' },
  dong: { code: 'VND', symbol: '₫', name: 'Vietnamese Dong', locale: 'vi-VN' },

  // Indian Rupee
  inr: { code: 'INR', symbol: '₹', name: 'Indian Rupee', locale: 'en-IN' },
  '₹': { code: 'INR', symbol: '₹', name: 'Indian Rupee', locale: 'en-IN' },
  rupee: { code: 'INR', symbol: '₹', name: 'Indian Rupee', locale: 'en-IN' },

  // Saudi Riyal
  sar: { code: 'SAR', symbol: 'SAR', name: 'Saudi Riyal', locale: 'ar-SA' },
  riyal: { code: 'SAR', symbol: 'SAR', name: 'Saudi Riyal', locale: 'ar-SA' },

  // UAE Dirham
  aed: { code: 'AED', symbol: 'AED', name: 'UAE Dirham', locale: 'ar-AE' },
  dirham: { code: 'AED', symbol: 'AED', name: 'UAE Dirham', locale: 'ar-AE' },

  // Swiss Franc
  chf: { code: 'CHF', symbol: 'CHF', name: 'Swiss Franc', locale: 'de-CH' },
  franc: { code: 'CHF', symbol: 'CHF', name: 'Swiss Franc', locale: 'de-CH' },

  // Brazilian Real
  brl: { code: 'BRL', symbol: 'R$', name: 'Brazilian Real', locale: 'pt-BR' },
  'r$': { code: 'BRL', symbol: 'R$', name: 'Brazilian Real', locale: 'pt-BR' },
  real: { code: 'BRL', symbol: 'R$', name: 'Brazilian Real', locale: 'pt-BR' },

  // Russian Ruble
  rub: { code: 'RUB', symbol: '₽', name: 'Russian Ruble', locale: 'ru-RU' },
  '₽': { code: 'RUB', symbol: '₽', name: 'Russian Ruble', locale: 'ru-RU' },
  ruble: { code: 'RUB', symbol: '₽', name: 'Russian Ruble', locale: 'ru-RU' },

  // Turkish Lira
  try: { code: 'TRY', symbol: '₺', name: 'Turkish Lira', locale: 'tr-TR' },
  '₺': { code: 'TRY', symbol: '₺', name: 'Turkish Lira', locale: 'tr-TR' },
  lira: { code: 'TRY', symbol: '₺', name: 'Turkish Lira', locale: 'tr-TR' },

  // Hong Kong Dollar
  hkd: { code: 'HKD', symbol: 'HK$', name: 'Hong Kong Dollar', locale: 'zh-HK' },
  'hk$': { code: 'HKD', symbol: 'HK$', name: 'Hong Kong Dollar', locale: 'zh-HK' },

  // New Zealand Dollar
  nzd: { code: 'NZD', symbol: 'NZ$', name: 'New Zealand Dollar', locale: 'en-NZ' },
  'nz$': { code: 'NZD', symbol: 'NZ$', name: 'New Zealand Dollar', locale: 'en-NZ' },

  // New Taiwan Dollar
  twd: { code: 'TWD', symbol: 'NT$', name: 'New Taiwan Dollar', locale: 'zh-TW' },
  'nt$': { code: 'TWD', symbol: 'NT$', name: 'New Taiwan Dollar', locale: 'zh-TW' },
}

/**
 * Common list of popular currencies for selectors and quick pickers.
 */
export const POPULAR_CURRENCIES: Array<{ code: string; symbol: string; label: string }> = [
  { code: 'IDR', symbol: 'Rp', label: 'IDR - Rupiah (Rp)' },
  { code: 'USD', symbol: '$', label: 'USD - Dollar ($)' },
  { code: 'JPY', symbol: '¥', label: 'JPY - Yen (¥)' },
  { code: 'EUR', symbol: '€', label: 'EUR - Euro (€)' },
  { code: 'GBP', symbol: '£', label: 'GBP - Pound Sterling (£)' },
  { code: 'SGD', symbol: 'S$', label: 'SGD - Singapore Dollar (S$)' },
  { code: 'AUD', symbol: 'A$', label: 'AUD - Australian Dollar (A$)' },
  { code: 'CAD', symbol: 'C$', label: 'CAD - Canadian Dollar (C$)' },
  { code: 'CNY', symbol: '¥', label: 'CNY - Chinese Yuan (¥)' },
  { code: 'KRW', symbol: '₩', label: 'KRW - South Korean Won (₩)' },
  { code: 'MYR', symbol: 'RM', label: 'MYR - Malaysian Ringgit (RM)' },
  { code: 'THB', symbol: '฿', label: 'THB - Thai Baht (฿)' },
  { code: 'PHP', symbol: '₱', label: 'PHP - Philippine Peso (₱)' },
  { code: 'VND', symbol: '₫', label: 'VND - Vietnamese Dong (₫)' },
  { code: 'INR', symbol: '₹', label: 'INR - Indian Rupee (₹)' },
  { code: 'SAR', symbol: 'SAR', label: 'SAR - Saudi Riyal (SAR)' },
  { code: 'AED', symbol: 'AED', label: 'AED - UAE Dirham (AED)' },
  { code: 'CHF', symbol: 'CHF', label: 'CHF - Swiss Franc (CHF)' },
  { code: 'BRL', symbol: 'R$', label: 'BRL - Brazilian Real (R$)' },
  { code: 'RUB', symbol: '₽', label: 'RUB - Russian Ruble (₽)' },
  { code: 'TRY', symbol: '₺', label: 'TRY - Turkish Lira (₺)' },
  { code: 'HKD', symbol: 'HK$', label: 'HKD - Hong Kong Dollar (HK$)' },
  { code: 'NZD', symbol: 'NZ$', label: 'NZD - New Zealand Dollar (NZ$)' },
  { code: 'TWD', symbol: 'NT$', label: 'TWD - New Taiwan Dollar (NT$)' },
]

/**
 * Resolves a currency code, symbol, or word into structured metadata and locale formatting.
 *
 * @param inputCurrency Currency identifier (e.g. 'USD', '$', 'Rp.', 'yen', 'EUR', 'GBP')
 * @param fallbackLang Active language fallback ('id', 'en', 'us')
 */
export function resolveCurrency(
  inputCurrency?: string,
  fallbackLang: string = 'en',
): CurrencyMeta {
  if (inputCurrency && typeof inputCurrency === 'string') {
    const raw = inputCurrency.trim()
    const key = raw.toLowerCase()

    if (CURRENCY_MAP[key]) {
      // If user typed exact 'Rp.' or custom punctuation, preserve it
      if (raw === 'Rp.') {
        return { ...CURRENCY_MAP[key], symbol: 'Rp.' }
      }
      return CURRENCY_MAP[key]
    }

    // Custom fallback for arbitrary symbols (e.g. 'Rp.', 'Dinar', 'CHF', etc.)
    return {
      code: raw.toUpperCase(),
      symbol: raw,
      name: raw,
      locale: fallbackLang === 'id' ? 'id-ID' : 'en-US',
    }
  }

  // Fallback to language locale default
  if (fallbackLang === 'id') {
    return CURRENCY_MAP.idr
  }
  return CURRENCY_MAP.usd
}

export function formatCurrencyValue(value: number, currency: string = 'IDR'): string {
  const meta = resolveCurrency(currency, 'id')
  return new Intl.NumberFormat(meta.locale, {
    style: 'currency',
    currency: meta.code,
  }).format(value)
}
