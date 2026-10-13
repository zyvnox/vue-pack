<template>
  <div class="zyvnox-w-full zyvnox-relative zyvnox-mb-4">
    <label
      :for="id"
      class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-text-sm zyvnox-font-medium zyvnox-mb-2 zyvnox-text-slate-900 zyvnox-transition-colors zyvnox-duration-200 dark:zyvnox-text-slate-100"
      :class="{ 'zyvnox-text-red-500 dark:zyvnox-text-red-400': errorMessage.length || error }"
    >
      {{ label }}
      <Tooltip v-if="tooltip" :text="tooltip" :position="tooltipPosition ?? 'top'">
        <span class="zyvnox-text-slate-400 dark:zyvnox-text-slate-500 zyvnox-text-xs">
          {{ tooltipIcon ?? '❓' }}
        </span>
      </Tooltip>
    </label>

    <div class="zyvnox-relative">
      <div
        class="zyvnox-absolute zyvnox-right-3 zyvnox-top-1/2 -zyvnox-translate-y-1/2 zyvnox-pointer-events-none zyvnox-text-slate-500 dark:zyvnox-text-slate-400"
      >
        <span class="zyvnox-i-mdi-calendar-clock zyvnox-w-5 zyvnox-h-5"></span>
      </div>
      <input
        :id="id"
        type="datetime-local"
        :value="localValue"
        :disabled="disabled"
        :min="props.validate?.minDateTime"
        :max="props.validate?.maxDateTime"
        @input="onInput"
        :placeholder="placeholderText"
        class="zyvnox-w-full zyvnox-py-3 zyvnox-px-4 zyvnox-text-base zyvnox-text-slate-900 zyvnox-bg-white zyvnox-border-1 zyvnox-border-solid zyvnox-border-slate-300 zyvnox-rounded-lg zyvnox-transition-all zyvnox-duration-200 zyvnox-box-border zyvnox-appearance-none focus:zyvnox-outline-none focus:zyvnox-border-blue-500 focus:zyvnox-ring-4 focus:zyvnox-ring-blue-500/20 disabled:zyvnox-bg-slate-100 disabled:zyvnox-text-slate-500 disabled:zyvnox-cursor-not-allowed dark:zyvnox-bg-slate-800 dark:zyvnox-text-slate-100 dark:zyvnox-border-slate-600 dark:focus:zyvnox-border-blue-400 dark:focus:zyvnox-ring-blue-400/25 dark:disabled:zyvnox-bg-slate-700 [color-scheme:light_dark] [&::-webkit-calendar-picker-indicator]:zyvnox-opacity-0 [&::-webkit-calendar-picker-indicator]:zyvnox-cursor-pointer [&::-webkit-calendar-picker-indicator]:zyvnox-absolute [&::-webkit-calendar-picker-indicator]:zyvnox-right-3 [&::-webkit-calendar-picker-indicator]:zyvnox-top-1/2 [&::-webkit-calendar-picker-indicator]:-zyvnox-translate-y-1/2 [&::-webkit-calendar-picker-indicator]:zyvnox-w-6 [&::-webkit-calendar-picker-indicator]:zyvnox-h-6"
        :class="{
          'zyvnox-border-red-400 focus:zyvnox-ring-red-500/20 dark:zyvnox-border-red-400 dark:focus:zyvnox-ring-red-400/25':
            errorMessage.length || error,
        }"
      />
    </div>

    <p
      v-for="(err, i) in errorMessage"
      :key="i"
      class="zyvnox-text-sm zyvnox-text-red-500 zyvnox-mt-2 zyvnox-animate-[fadeIn_300ms_ease-out] dark:zyvnox-text-red-400"
    >
      {{ err }}
    </p>
    <p
      v-if="typeof props.error === 'string' && errorMessage.length === 0"
      class="zyvnox-text-sm zyvnox-text-red-500 zyvnox-mt-2 zyvnox-animate-[fadeIn_300ms_ease-out] dark:zyvnox-text-red-400"
    >
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref, watch, type Ref, type PropType } from 'vue'
import type {
  GlobalDefaultText,
  DateTimeInputProps,
  DateTimeString,
  SupportedLanguage,
} from '../../../configs/types'
import { defaultTextLabelsMap } from '../../../configs/i18n'
import { setUID } from '../../../untils'
import { getMessage } from '../../../helpers'
import { Tooltip } from '../Display'

const props = withDefaults(defineProps<DateTimeInputProps>(), {
  id: () => setUID(),
  modelValue: '',
  outputFormat: 'local-offset',
  tooltipPosition: 'top',
  tooltipIcon: '❓',
})
const injected = inject<{ labels: Ref<GlobalDefaultText> }>('TableComponents', {
  labels: ref(defaultTextLabelsMap[props.lang ?? 'en']),
})
const labels = injected.labels
const emit = defineEmits<{
  (e: 'update:modelValue', value: string, key: string): void
  (e: 'push:error', message: string[], key: string): void
  (e: 'remove:error', key: string): void
}>()

/**
 * [TETAP SAMA - SUDAH BENAR]
 * Fungsi ini mengonversi SEMUA format (termasuk ...Z dari server)
 * ke format 'YYYY-MM-DDTHH:mm' LOKAL untuk ditampilkan di input.
 * Inilah yang mengubah '...T00:00:00Z' (UTC) menjadi '...T07:00' (WIB).
 */
function formatToLocalInput(dateTimeString: string | undefined): string {
  if (!dateTimeString) return ''

  // Cek jika format lokal ...:mm (dari input)
  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(dateTimeString)) {
    return dateTimeString
  }

  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/.test(dateTimeString)) {
    return dateTimeString.substring(0, 16)
  }
  try {
    const date = new Date(dateTimeString)
    if (isNaN(date.getTime())) return ''

    const y = date.getFullYear()
    const m = (date.getMonth() + 1).toString().padStart(2, '0')
    const d = date.getDate().toString().padStart(2, '0')
    const h = date.getHours().toString().padStart(2, '0')
    const min = date.getMinutes().toString().padStart(2, '0')

    return `${y}-${m}-${d}T${h}:${min}`
  } catch (e) {
    return ''
  }
}

const localValue = computed(() => formatToLocalInput(props.modelValue))

const errorMessage = ref<string[]>([])

// Watcher ini sudah benar, tidak perlu diubah
watch(
  () => ({
    val: props.modelValue,
    disabled: props.disabled,
    validate: props.validate,
  }),
  ({ val, disabled, validate }) => {
    if (disabled) {
      errorMessage.value = []
      return
    }

    const err: string[] = []
    const comparableValue = formatToLocalInput(val) // Pakai ...:mm untuk perbandingan min/max

    if (validate) {
      const { minDateTime, maxDateTime } = validate

      if (comparableValue) {
        // Bandingkan min/max dalam format YYYY-MM-DDTHH:mm
        const min = minDateTime ? formatToLocalInput(minDateTime) : undefined
        const max = maxDateTime ? formatToLocalInput(maxDateTime) : undefined

        if (min && comparableValue < min) {
          err.push(getMessage('dateTimeMin', { min: String(min) }, props.lang ?? 'en'))
        }
        if (max && comparableValue > max) {
          err.push(getMessage('dateTimeMax', { max: String(max) }, props.lang ?? 'en'))
        }
      }
    }

    errorMessage.value = err

    if (err.length) emit('push:error', err, props.id)
    else emit('remove:error', props.id)
  },
  { deep: true, immediate: true },
)

const placeholderText = computed(
  () => props.placeholder ?? labels?.value?.placeholder?.datetime ?? '',
)

/**
 * [DIUBAH - PENTING]
 * Saat input diubah, tambahkan ':00' agar sesuai tipe '...:ss'
 */
function onInput(event: Event) {
  if (props.disabled) return
  const input = event.target as HTMLInputElement
  const localDateTimeString = input.value // misal: "2025-10-16T14:02"

  // Jika input kosong, emit string kosong
  if (!localDateTimeString) {
    emit('update:modelValue', '', props.id)
    return
  }

  // Buat string lokal lengkap dengan detik
  const valueDenganDetik = `${localDateTimeString}:00`

  // Buat Date object dari string lokal.
  // Ini akan ditafsirkan sebagai waktu LOKAL di device client
  // (misal: 16 Okt 2025 jam 14:02:00 WIB)
  const date = new Date(valueDenganDetik)

  let finalDateTimeString = ''

  if (props.outputFormat === 'utc') {
    // --- OPSI 1: Format ke UTC ---
    // date.toISOString() akan mengonversi waktu lokal ke padanan UTC-nya
    // misal: "2025-10-16T07:02:00.000Z" (karena 14:02 WIB = 07:02 UTC)
    finalDateTimeString = date.toISOString()
  } else {
    // --- OPSI 2: Format ke Local + Offset (Default) ---
    const offsetMinutes = date.getTimezoneOffset()
    const offsetHours = Math.abs(offsetMinutes / 60)
    const offsetMinutesPart = Math.abs(offsetMinutes % 60)
    // Tanda dibalik: offset -420 menit (WIB) berarti ZONA WAKTU "+07:00"
    const offsetSign = offsetMinutes > 0 ? '-' : '+'
    const offsetString = `${offsetSign}${String(offsetHours).padStart(2, '0')}:${String(offsetMinutesPart).padStart(2, '0')}`

    // Hasil: "2025-10-16T14:02:00+07:00"
    finalDateTimeString = `${valueDenganDetik}${offsetString}`
  }

  // Emit nilai yang sudah diformat
  emit('update:modelValue', finalDateTimeString, props.id)
}
</script>
