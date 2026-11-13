<template>
  <label
    v-if="label"
    class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-text-sm zyvnox-font-semibold zyvnox-mb-3 zyvnox-text-slate-900 zyvnox-transition-colors zyvnox-duration-200 dark:zyvnox-text-slate-100"
    :class="{ 'zyvnox-text-red-500 dark:zyvnox-text-red-400': hasError }"
  >
    {{ label }}

    <Tooltip v-if="tooltip" :text="tooltip" :position="tooltipPosition ?? 'top'">
      <span class="zyvnox-text-slate-400 dark:zyvnox-text-slate-500 zyvnox-text-xs">
        {{ tooltipIcon ?? '❓' }}
      </span>
    </Tooltip>
  </label>

  <div
    class="zyvnox-bg-white zyvnox-border-1 zyvnox-border-solid zyvnox-border-slate-200 zyvnox-rounded-lg zyvnox-p-5 zyvnox-shadow-sm zyvnox-w-full zyvnox-mb-4 zyvnox-box-border zyvnox-transition-all zyvnox-duration-200 dark:zyvnox-bg-slate-800 dark:zyvnox-border-slate-700"
    :class="{
      'zyvnox-border-red-300 zyvnox-bg-red-50/60 dark:zyvnox-border-red-800 dark:zyvnox-bg-red-900/10': hasError,
    }"
  >
    <!-- Swatches Box -->
    <div
      class="zyvnox-flex zyvnox-flex-wrap zyvnox-items-center zyvnox-gap-3 zyvnox-p-3 zyvnox-mb-4 zyvnox-min-h-[3.5rem] zyvnox-bg-slate-50 zyvnox-rounded-lg zyvnox-border-1 zyvnox-border-solid zyvnox-border-dashed zyvnox-border-slate-300 dark:zyvnox-bg-slate-700/60 dark:zyvnox-border-slate-600"
    >
      <div
        v-for="(color, index) in displayColors"
        :key="index"
        class="zyvnox-relative zyvnox-animate-[popIn_300ms_ease-out_backwards] zyvnox-group"
        :style="{ animationDelay: `${index * 40}ms` }"
      >
        <button
          type="button"
          :style="{ backgroundColor: color }"
          :class="[
            'zyvnox-w-10 zyvnox-h-10 zyvnox-rounded-full zyvnox-border-2 zyvnox-border-white',
            'zyvnox-shadow-[0_0_0_1px_rgba(0,0,0,0.15)] zyvnox-cursor-pointer zyvnox-transition-all zyvnox-duration-200',
            'hover:zyvnox-scale-110 dark:zyvnox-border-slate-800 dark:zyvnox-shadow-[0_0_0_1px_rgba(255,255,255,0.25)]',
            props.single && newColor.toLowerCase() === color.toLowerCase()
              ? 'zyvnox-ring-2 zyvnox-ring-blue-500 zyvnox-scale-105'
              : '',
            disabled ? 'zyvnox-opacity-60 zyvnox-cursor-not-allowed' : '',
          ]"
          :disabled="disabled"
          :title="color"
          @click="selectSwatch(color)"
        />
        <button
          v-if="!props.single"
          type="button"
          @click="removeColor(index)"
          :disabled="disabled"
          class="zyvnox-absolute zyvnox-top-[-0.25rem] zyvnox-right-[-0.25rem] zyvnox-w-5 zyvnox-h-5 zyvnox-flex zyvnox-items-center zyvnox-justify-center zyvnox-text-base zyvnox-font-bold zyvnox-leading-none zyvnox-text-white zyvnox-bg-red-500 zyvnox-rounded-full zyvnox-border-2 zyvnox-border-white zyvnox-cursor-pointer zyvnox-opacity-0 zyvnox-scale-50 zyvnox-transition-all zyvnox-duration-200 hover:zyvnox-bg-red-600 hover:zyvnox-scale-110 hover:zyvnox-rotate-90 group-hover:zyvnox-opacity-100 group-hover:zyvnox-scale-100 disabled:zyvnox-opacity-60 disabled:zyvnox-cursor-not-allowed disabled:zyvnox-transform-none dark:zyvnox-border-slate-800 dark:zyvnox-bg-red-600 dark:hover:zyvnox-bg-red-500"
        >
          &times;
        </button>
      </div>

      <div
        v-if="displayColors.length === 0"
        class="zyvnox-text-xs zyvnox-text-slate-400 dark:zyvnox-text-slate-500 zyvnox-italic zyvnox-py-2"
      >
        {{ props.lang === 'id' ? 'Belum ada warna yang dipilih' : 'No colors selected yet' }}
      </div>
    </div>

    <!-- Color Picker Bar & Action Controls -->
    <div class="zyvnox-flex zyvnox-items-center zyvnox-gap-3">
      <input
        type="color"
        v-model="newColor"
        :disabled="disabled"
        @input="onColorInput"
        @change="onColorInput"
        class="zyvnox-appearance-none zyvnox-w-full zyvnox-h-10 zyvnox-bg-transparent zyvnox-border-1 zyvnox-border-solid zyvnox-border-slate-200 zyvnox-rounded-md zyvnox-box-border zyvnox-cursor-pointer zyvnox-p-0 zyvnox-overflow-hidden disabled:zyvnox-opacity-60 disabled:zyvnox-cursor-not-allowed [&::-webkit-color-swatch-wrapper]:zyvnox-p-0 [&::-webkit-color-swatch]:zyvnox-border-none [&::-webkit-color-swatch]:zyvnox-rounded-[5px] [&::-moz-color-swatch]:zyvnox-border-none [&::-moz-color-swatch]:zyvnox-rounded-[5px] dark:zyvnox-border-slate-600"
      />

      <button
        v-if="!props.single"
        type="button"
        class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-px-4 zyvnox-py-2 zyvnox-font-semibold zyvnox-text-sm zyvnox-border-none zyvnox-rounded-md zyvnox-text-white zyvnox-bg-green-500 zyvnox-cursor-pointer zyvnox-transition-all zyvnox-duration-200 hover:zyvnox-bg-green-600 hover:zyvnox-scale-105 hover:zyvnox-shadow-md disabled:zyvnox-opacity-60 disabled:zyvnox-cursor-not-allowed dark:zyvnox-bg-green-500 dark:hover:zyvnox-bg-green-400 zyvnox-shrink-0"
        :disabled="disabled"
        @click="addColor"
      >
        {{ labels?.btn?.add ?? (props.lang === 'id' ? 'Tambah' : 'Add') }}
      </button>
    </div>

    <!-- Error Messages -->
    <p
      v-if="errorMessage.length !== 0"
      v-for="(err, i) in errorMessage"
      :key="i"
      class="zyvnox-mt-2 zyvnox-text-sm zyvnox-text-red-500 zyvnox-animate-[fadeIn_300ms_ease-out] dark:zyvnox-text-red-400"
    >
      {{ err }}
    </p>
    <p
      v-else-if="typeof props.error === 'string'"
      class="zyvnox-mt-2 zyvnox-text-sm zyvnox-text-red-500 zyvnox-animate-[fadeIn_300ms_ease-out] dark:zyvnox-text-red-400"
    >
      {{ props.error }}
    </p>
    <div v-else-if="Array.isArray(props.error) && props.error.length > 0" class="zyvnox-mt-2 zyvnox-space-y-1">
      <p
        v-for="(err, i) in props.error"
        :key="i"
        class="zyvnox-text-sm zyvnox-text-red-500 dark:zyvnox-text-red-400"
      >
        {{ err }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref, watch, type Ref } from 'vue'
import type { ColorPickerProps, GlobalDefaultText } from '../../../configs/types'
import { defaultTextLabelsMap } from '../../../configs/i18n'
import { setUID } from '../../../untils'
import { getMessage } from '../../../helpers'
import { Tooltip } from '../Display'

const props = withDefaults(defineProps<ColorPickerProps>(), {
  id: setUID(),
  tooltipPosition: 'top',
  tooltipIcon: '❓',
  single: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[] | string, key: string): void
  (e: 'push:error', message: string[], key: string): void
  (e: 'remove:error', key: string): void
}>()

const DEFAULT_PRESETS = [
  '#ef4444',
  '#f97316',
  '#f59e0b',
  '#10b981',
  '#06b6d4',
  '#3b82f6',
  '#8b5cf6',
  '#ec4899',
]

function normalizeHex(c: any): string {
  if (typeof c === 'string') {
    const trimmed = c.trim()
    if (/^#[0-9A-Fa-f]{3}$/.test(trimmed)) {
      return (
        '#' +
        trimmed[1] +
        trimmed[1] +
        trimmed[2] +
        trimmed[2] +
        trimmed[3] +
        trimmed[3]
      ).toLowerCase()
    }
    if (/^#[0-9A-Fa-f]{6}$/.test(trimmed)) {
      return trimmed.toLowerCase()
    }
    if (/^#[0-9A-Fa-f]{8}$/.test(trimmed)) {
      return trimmed.slice(0, 7).toLowerCase()
    }
  }
  return ''
}

function getInitialColor(): string {
  if (typeof props.modelValue === 'string') {
    const norm = normalizeHex(props.modelValue)
    if (norm) return norm
  } else if (Array.isArray(props.modelValue) && props.modelValue.length > 0) {
    const norm = normalizeHex(props.modelValue[0])
    if (norm) return norm
  }
  return '#3b82f6'
}

const newColor = ref(getInitialColor())
const paletteColors = ref<string[]>([])

const injected = inject<{ labels: Ref<GlobalDefaultText> }>('TableComponents', {
  labels: ref(defaultTextLabelsMap[props.lang ?? 'en']),
})

const labels = injected.labels
const errorMessage = ref<string[]>([])

const hasError = computed(() => {
  return (
    errorMessage.value.length > 0 ||
    Boolean(props.error && (typeof props.error === 'string' || props.error.length > 0))
  )
})

const displayColors = computed(() => {
  if (props.single) {
    if (Array.isArray(props.selectedColors) && props.selectedColors.length > 0) {
      return props.selectedColors.map(normalizeHex).filter(Boolean)
    }
    return DEFAULT_PRESETS
  }
  return paletteColors.value
})

function selectSwatch(color: string) {
  if (props.disabled) return
  newColor.value = color
  if (props.single) {
    emit('update:modelValue', color, props.id)
  }
}

function onColorInput(e: Event) {
  const val = (e.target as HTMLInputElement).value
  newColor.value = val
  if (props.single) {
    emit('update:modelValue', val, props.id)
  }
}

function addColor() {
  if (props.disabled) return
  if (props.single) {
    emit('update:modelValue', newColor.value, props.id)
  } else {
    if (!paletteColors.value.includes(newColor.value)) {
      paletteColors.value.push(newColor.value)
    }
    emit('update:modelValue', [...paletteColors.value], props.id)
    validatePalette()
  }
}

function removeColor(index: number) {
  if (props.disabled) return
  paletteColors.value.splice(index, 1)
  emit('update:modelValue', [...paletteColors.value], props.id)
  validatePalette()
}

function validatePalette() {
  if (props.disabled || props.single) {
    errorMessage.value = []
    return
  }

  const err: string[] = []
  const count = paletteColors.value.length

  if (props.validate && typeof props.validate === 'object') {
    const { min, max } = props.validate
    if (min !== undefined && count < min) {
      err.push(getMessage('arrayColorMin', { min: String(min) }, props.lang ?? 'en'))
    }
    if (max !== undefined && count > max) {
      err.push(getMessage('arrayColorMax', { max: String(max) }, props.lang ?? 'en'))
    }
  }

  errorMessage.value = err
  if (err.length) emit('push:error', err, props.id)
  else emit('remove:error', props.id)
}

watch(
  () => props.modelValue,
  (val) => {
    if (props.single) {
      const norm = normalizeHex(Array.isArray(val) ? val[0] : val)
      if (norm) {
        newColor.value = norm
      }
    } else {
      if (Array.isArray(val)) {
        paletteColors.value = val.map(normalizeHex).filter(Boolean)
      } else if (typeof val === 'string' && val) {
        const norm = normalizeHex(val)
        paletteColors.value = norm ? [norm] : []
      } else {
        paletteColors.value = []
      }
      validatePalette()
    }
  },
  { immediate: true },
)
</script>
