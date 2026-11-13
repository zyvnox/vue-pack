import { ref, computed, watch, type Ref, inject } from 'vue'
import type { CurrencyInputProps } from '../../../../configs/types/props.types'
import type {
  GlobalDefaultText,
  SupportedLanguage,
} from '../../../../configs/types/globalText.types'
import { defaultTextLabelsMap } from '../../../../configs/i18n'
import { resolveCurrency, type CurrencyMeta } from '../../../../helpers/currency'

export type CurrencyEmit = (e: any, ...args: any[]) => void

export function useCurrencyInput(
  props: CurrencyInputProps,
  emit: CurrencyEmit,
  options?: {
    currency?: Ref<string | undefined>
  },
) {
  const injected = inject<{ labels: Ref<GlobalDefaultText> }>('TableComponents', {
    labels: ref(defaultTextLabelsMap[props.lang ?? 'en']),
  })

  const lang = computed(
    () => (injected.labels.value?.lang as SupportedLanguage) ?? props.lang ?? 'en',
  )

  const activeCurrencyProp = computed(() => {
    return options?.currency?.value ?? props.currency
  })

  // Internal active currency override (allows switching dynamically)
  const selectedCurrency = ref<string | undefined>(activeCurrencyProp.value)

  watch(
    activeCurrencyProp,
    (val) => {
      selectedCurrency.value = val
    },
    { immediate: true },
  )

  const currencyMeta = computed<CurrencyMeta>(() => {
    return resolveCurrency(selectedCurrency.value ?? activeCurrencyProp.value, lang.value)
  })

  const currencySymbol = computed(() => currencyMeta.value.symbol)
  const currencyCode = computed(() => currencyMeta.value.code)

  function setCurrency(newCurrency: string) {
    selectedCurrency.value = newCurrency
    emit('update:currency', newCurrency, props.id!)
  }

  // State untuk menyimpan nilai yang sedang diketik pengguna
  const displayValue = ref('')
  const isEditing = ref(false)

  /**
   * Fungsi untuk memformat angka menjadi format mata uang.
   * @param value - Angka yang akan diformat.
   */
  const formatCurrency = (value: number | null | undefined): string => {
    if (value === null || value === undefined) return ''
    return new Intl.NumberFormat(currencyMeta.value.locale, {
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
    currencyCode,
    currencyMeta,
    selectedCurrency,
    setCurrency,
    formatCurrency,
    onInput,
    onBlur,
  }
}
