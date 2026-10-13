<template>
  <label
    class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-text-sm zyvnox-font-semibold zyvnox-mb-3 zyvnox-text-slate-900 zyvnox-transition-colors zyvnox-duration-200 dark:zyvnox-text-slate-100"
    :class="{ 'zyvnox-text-red-500 dark:zyvnox-text-red-400': errorMessage.length !== 0 || error }"
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
      'zyvnox-border-red-300 zyvnox-bg-red-50 dark:zyvnox-border-red-800 dark:zyvnox-bg-red-900/10':
        errorMessage.length !== 0 || error,
    }"
  >
    <div
      class="zyvnox-flex zyvnox-flex-wrap zyvnox-gap-3 zyvnox-p-3 zyvnox-mb-4 zyvnox-min-h-[3.5rem] zyvnox-bg-slate-50 zyvnox-rounded-lg zyvnox-border-1 zyvnox-border-solid zyvnox-border-dashed zyvnox-border-slate-300 dark:zyvnox-bg-slate-700 dark:zyvnox-border-slate-600"
    >
      <div
        v-for="(color, index) in selectedColors"
        :key="index"
        class="zyvnox-relative zyvnox-animate-[popIn_300ms_ease-out_backwards] zyvnox-group"
        :style="{ animationDelay: `${index * 50}ms` }"
      >
        <div
          :style="{ backgroundColor: color }"
          class="zyvnox-w-10 zyvnox-h-10 zyvnox-rounded-full zyvnox-border-2 zyvnox-border-white zyvnox-shadow-[0_0_0_1px_rgba(0,0,0,0.1)] zyvnox-cursor-pointer zyvnox-transition-transform zyvnox-duration-200 hover:zyvnox-scale-110 dark:zyvnox-border-slate-800 dark:zyvnox-shadow-[0_0_0_1px_rgba(255,255,255,0.2)]"
        ></div>
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
    </div>

    <input
      type="color"
      v-model="newColor"
      :disabled="disabled"
      class="zyvnox-appearance-none zyvnox-w-full zyvnox-h-10 zyvnox-bg-transparent zyvnox-border-1 zyvnox-border-solid zyvnox-border-slate-200 zyvnox-rounded-md zyvnox-box-border zyvnox-cursor-pointer zyvnox-p-0 zyvnox-overflow-hidden disabled:zyvnox-opacity-60 disabled:zyvnox-cursor-not-allowed [&::-webkit-color-swatch-wrapper]:zyvnox-p-0 [&::-webkit-color-swatch]:zyvnox-border-none [&::-webkit-color-swatch]:zyvnox-rounded-[5px] [&::-moz-color-swatch]:zyvnox-border-none [&::-moz-color-swatch]:zyvnox-rounded-[5px] dark:zyvnox-border-slate-600"
    />

    <div class="zyvnox-flex zyvnox-justify-end zyvnox-mt-4" v-if="!props.single">
      <button
        type="button"
        class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-px-4 zyvnox-py-2 zyvnox-font-semibold zyvnox-text-sm zyvnox-border-none zyvnox-rounded-md zyvnox-text-white zyvnox-bg-green-500 zyvnox-cursor-pointer zyvnox-transition-all zyvnox-duration-200 hover:zyvnox-bg-green-600 hover:zyvnox-scale-105 hover:zyvnox-shadow-md disabled:zyvnox-opacity-60 disabled:zyvnox-cursor-not-allowed dark:zyvnox-bg-green-500 dark:hover:zyvnox-bg-green-400"
        :disabled="disabled"
        @click="addColor"
      >
        {{ labels?.btn?.add ?? 'Tambah' }}
      </button>
    </div>

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
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, watch, type Ref } from 'vue'
import type { ColorPickerProps, GlobalDefaultText } from '../../../configs/types'
import { defaultTextLabelsMap } from '../../../configs/i18n'
import { setUID } from '../../../untils'
import { getMessage } from '../../../helpers'
import { Tooltip } from '../Display'

const props = withDefaults(defineProps<ColorPickerProps>(), {
  id: setUID(),
  tooltipPosition: 'top',
  tooltipIcon: '❓',
})
const emit = defineEmits<{
  (e: 'update:modelValue', value: string[] | string, key: string): void
  (e: 'push:error', message: string[], key: string): void
  (e: 'remove:error', key: string): void
}>()

const newColor = ref('#000000')
const selectedColors = ref<string[]>([...(props.modelValue ?? [])])

const injected = inject<{ labels: Ref<GlobalDefaultText> }>('TableComponents', {
  labels: ref(defaultTextLabelsMap[props.lang ?? 'en']),
})

const labels = injected.labels

const errorMessage = ref<string[]>([])

watch(
  () => ({
    modelValue: props.modelValue,
    disabled: props.disabled,
    validate: props.validate,
    single: props.single,
  }),
  ({ modelValue, disabled, validate, single }) => {
    if (Array.isArray(modelValue)) {
      selectedColors.value = [...modelValue]
    } else {
      selectedColors.value = [modelValue as string]
    }

    if (disabled || single) {
      errorMessage.value = []
      return
    }

    const err: string[] = []
    const val = selectedColors.value.length

    if (validate && typeof validate === 'object' && !single) {
      const { min, max } = validate as { min?: number; max?: number }
      if (min !== undefined && val < min) {
        err.push(getMessage('arrayColorMin', { min: String(min) }, props.lang ?? 'en'))
      }
      if (max !== undefined && val > max) {
        err.push(getMessage('arrayColorMax', { max: String(max) }, props.lang ?? 'en'))
      }
    }

    errorMessage.value = err

    if (err.length) emit('push:error', err, props.id)
    else emit('remove:error', props.id)
  },
)

function addColor() {
  if (props.single) {
    selectedColors.value = [newColor.value]
    emit('update:modelValue', newColor.value, props.id)
  } else if (!selectedColors.value.includes(newColor.value)) {
    selectedColors.value.push(newColor.value)
    emit('update:modelValue', selectedColors.value, props.id)
  }
}

function removeColor(index: number) {
  selectedColors.value.splice(index, 1)
  if (props.single) {
    emit('update:modelValue', selectedColors.value[0] ?? '', props.id)
  } else {
    emit('update:modelValue', selectedColors.value, props.id)
  }
}
</script>
