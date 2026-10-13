import { ref, computed, watch, type Ref, inject } from 'vue'
import type {
  CurrencyInputProps,
  GlobalDefaultText,
  SupportedLanguage,
} from '../../../../configs/types'
import { defaultTextLabelsMap } from '../../../../configs/i18n'

type CurrencyEmit = {
  (e: 'update:modelValue', value: number | null, key: string): void
}

/**
 * Map untuk menentukan mata uang dan simbol berdasarkan bahasa.
 */
const langCurrencyMap: Record<
  SupportedLanguage,
  { currency: string; symbol: string; locale: string }
> = {
  id: { currency: 'IDR', symbol: 'Rp', locale: 'id-ID' },
  en: { currency: 'USD', symbol: '$', locale: 'en-US' },
  us: { currency: 'USD', symbol: '$', locale: 'en-US' },
}

export function useCurrencyInput(props: CurrencyInputProps, emit: CurrencyEmit) {
  const injected = inject<{ labels: Ref<GlobalDefaultText> }>('TableComponents', {
    labels: ref(defaultTextLabelsMap[props.lang ?? 'en']),
  })

  const lang = computed(() => (injected.labels.value.lang as SupportedLanguage) ?? 'en')
  const currencyInfo = computed(() => langCurrencyMap[lang.value] || langCurrencyMap.en)

  // State untuk menyimpan nilai yang sedang diketik pengguna
  const displayValue = ref('')
  const isEditing = ref(false)

  /**
   * Simbol mata uang yang akan ditampilkan di samping input.
   */
  const currencySymbol = computed(() => currencyInfo.value.symbol)

  /**
   * Fungsi untuk memformat angka menjadi format mata uang.
   * @param value - Angka yang akan diformat.
   */
  const formatCurrency = (value: number | null | undefined): string => {
    if (value === null || value === undefined) return ''
    return new Intl.NumberFormat(currencyInfo.value.locale, {
      // style: 'currency' akan menambahkan simbol, kita hanya butuh pemisah ribuan.
      // currency: currencyInfo.value.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  /**
   * Nilai yang akan ditampilkan di input.
   * Jika sedang diedit, tampilkan nilai mentah. Jika tidak, tampilkan nilai yang sudah diformat.
   */
  const formattedValue = computed(() => {
    if (isEditing.value) {
      return displayValue.value
    }
    return formatCurrency(props.modelValue)
  })

  /**
   * Handler untuk event `input`.
   * Membersihkan input dari karakter non-digit dan mengupdate `displayValue`.
   */
  function onInput(event: Event) {
    isEditing.value = true
    const input = event.target as HTMLInputElement
    const numericValue = input.value.replace(/[^\d]/g, '')
    displayValue.value = numericValue

    // Emit nilai numerik ke parent
    const numberValue = numericValue === '' ? null : parseInt(numericValue, 10)
    emit('update:modelValue', numberValue, props.id!)
  }

  /**
   * Handler untuk event `blur`.
   * Menghentikan mode edit sehingga nilai akan diformat kembali.
   */
  function onBlur() {
    isEditing.value = false
    // Reset displayValue agar komputasi `formattedValue` berjalan benar saat fokus kembali
    displayValue.value = ''
  }

  // Watcher untuk memastikan input terupdate jika modelValue diubah dari luar
  watch(
    () => props.modelValue,
    (newValue, oldValue) => {
      if (newValue !== oldValue && !isEditing.value) {
        displayValue.value = newValue?.toString() ?? ''
      }
    },
  )

  return {
    formattedValue,
    currencySymbol,
    onInput,
    onBlur,
  }
}
