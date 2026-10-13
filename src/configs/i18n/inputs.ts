import type { SupportedLanguage } from '../types/globalText.types'

export const inputMessages: Record<string, Record<SupportedLanguage, string>> = {
  email: {
    en: 'Invalid email. Example: user@example.com',
    id: 'Email tidak valid. Contoh: user@example.com',
  },
  url: {
    en: 'Invalid URL. Example: https://example.com',
    id: 'URL tidak valid. Contoh: https://example.com',
  },
  valueList: {
    en: '{value} is not allowed',
    id: '{value} tidak diperbolehkan',
  },
  textMinLength: {
    en: 'Text must be at least {min} characters',
    id: 'Teks minimal {min} karakter',
  },
  textMaxLength: {
    en: 'Text must be at most {max} characters',
    id: 'Teks maksimal {max} karakter',
  },
  textPattern: {
    en: 'Text format is invalid',
    id: 'Format teks tidak valid',
  },
  numberInvalid: {
    en: 'Invalid number',
    id: 'Angka tidak valid',
  },
  numberInteger: {
    en: 'Must be an integer',
    id: 'Harus berupa bilangan bulat',
  },
  numberMin: {
    en: 'Must be at least {min}',
    id: 'Minimal {min}',
  },
  numberMax: {
    en: 'Must be at most {max}',
    id: 'Maksimal {max}',
  },
  passwordMin: {
    en: 'Password must be at least {min} characters',
    id: 'Password minimal {min} karakter',
  },
  passwordMax: {
    en: 'Password must be at most {max} characters',
    id: 'Password maksimal {max} karakter',
  },
  passwordUpper: {
    en: 'Password must contain an uppercase letter',
    id: 'Password harus mengandung huruf kapital',
  },
  passwordLower: {
    en: 'Password must contain a lowercase letter',
    id: 'Password harus mengandung huruf kecil',
  },
  passwordNumber: {
    en: 'Password must contain a number',
    id: 'Password harus mengandung angka',
  },
  passwordSymbol: {
    en: 'Password must contain a symbol',
    id: 'Password harus mengandung simbol',
  },
  arrayColorMin: {
    en: 'Select at least {min} colors',
    id: 'Pilih minimal {min} warna',
  },
  arrayColorMax: {
    en: 'Select at most {max} colors',
    id: 'Pilih maksimal {max} warna',
  },
  arrayTagMin: {
    en: 'Select at least {min} tags',
    id: 'Pilih minimal {min} tag',
  },
  arrayTagMax: {
    en: 'Select at most {max} tags',
    id: 'Pilih maksimal {max} tag',
  },
  dateMin: {
    en: 'Date must be on or after {min}',
    id: 'Tanggal harus pada atau setelah {min}',
  },
  dateMax: {
    en: 'Date must be on or before {max}',
    id: 'Tanggal harus pada atau sebelum {max}',
  },
  timeMin: {
    en: 'Time must be at or after {min}',
    id: 'Waktu harus pada atau setelah {min}',
  },
  timeMax: {
    en: 'Time must be at or before {max}',
    id: 'Waktu harus pada atau sebelum {max}',
  },
  dateTimeMin: {
    en: 'Date and time must be on or after {min}',
    id: 'Tanggal dan waktu harus pada atau setelah {min}',
  },
  dateTimeMax: {
    en: 'Date and time must be on or before {max}',
    id: 'Tanggal dan waktu harus pada atau sebelum {max}',
  },
  imageType: {
    en: 'Image must be in one of the allowed formats',
    id: 'Gambar harus berformat yang diizinkan',
  },
  imageMaxFiles: {
    en: 'You can upload up to {max} images only',
    id: 'Anda hanya dapat mengunggah maksimal {max} gambar',
  },
  imageMaxSize: {
    en: 'Image size must be less than {max} KB',
    id: 'Ukuran gambar harus kurang dari {max} KB',
  },
  imagePixel: {
    en: 'Image size must be {width} x {height} pixels',
    id: 'Ukuran gambar harus {width} x {height} piksel',
  },
  imageMinWidth: {
    en: 'Image width must be at least {min}px',
    id: 'Lebar gambar harus minimal {min}px',
  },
  imageMinHeight: {
    en: 'Image height must be at least {min}px',
    id: 'Tinggi gambar harus minimal {min}px',
  },
  imageMaxWidth: {
    en: 'Image width must not exceed {max}px',
    id: 'Lebar gambar tidak boleh melebihi {max}px',
  },
  imageMaxHeight: {
    en: 'Image height must not exceed {max}px',
    id: 'Tinggi gambar tidak boleh melebihi {max}px',
  },
  imageRatio: {
    en: 'Image ratio must be {w}:{h}',
    id: 'Rasio gambar harus {w}:{h}',
  },
  fileType: {
    en: 'File must be in one of the allowed formats',
    id: 'File harus dalam format yang diizinkan',
  },
  fileMaxSize: {
    en: 'File size must be less than {max} KB',
    id: 'Ukuran file harus kurang dari {max} KB',
  },
  fileMaxFiles: {
    en: 'You can upload up to {max} files only',
    id: 'Anda hanya dapat mengunggah maksimal {max} file',
  },
}
