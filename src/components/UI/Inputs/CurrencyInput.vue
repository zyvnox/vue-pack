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
        class="zyvnox-absolute zyvnox-left-3 zyvnox-top-1/2 -zyvnox-translate-y-1/2 zyvnox-text-slate-500 zyvnox-pointer-events-none dark:zyvnox-text-slate-400"
      >
        {{ currencySymbol }}
      </div>
      <input
        :id="id"
        type="text"
        inputmode="numeric"
        :value="formattedValue"
        :disabled="disabled"
        @input="onInput"
        @blur="onBlur"
        :placeholder="placeholderText"
        class="zyvnox-w-full zyvnox-py-3 zyvnox-pl-10 zyvnox-pr-4 zyvnox-text-base zyvnox-text-slate-900 zyvnox-bg-white zyvnox-border zyvnox-border-slate-300 zyvnox-rounded-lg zyvnox-transition-all zyvnox-duration-200 zyvnox-box-border focus:zyvnox-outline-none focus:zyvnox-border-blue-500 focus:zyvnox-ring-4 focus:zyvnox-ring-blue-500/20 disabled:zyvnox-bg-slate-100 disabled:zyvnox-text-slate-500 disabled:zyvnox-cursor-not-allowed dark:zyvnox-bg-slate-800 dark:zyvnox-text-slate-100 dark:zyvnox-border-slate-600 dark:focus:zyvnox-border-blue-400 dark:focus:zyvnox-ring-blue-400/25 dark:disabled:zyvnox-bg-slate-700"
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
import { computed, inject, ref, watch, type Ref } from 'vue'
import type {
  CurrencyInputProps,
  GlobalDefaultText,
  SupportedLanguage,
} from '../../../configs/types'
import { defaultTextLabelsMap } from '../../../configs/i18n'
import { setUID } from '../../../untils'
import { getMessage } from '../../../helpers'
import { Tooltip } from '../Display'
import { useCurrencyInput } from './composables'

const props = withDefaults(defineProps<CurrencyInputProps>(), {
  id: setUID(),
  tooltipPosition: 'top',
  tooltipIcon: '❓',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | null, key: string): void
  (e: 'push:error', message: string[], key: string): void
  (e: 'remove:error', key: string): void
}>()

const injected = inject<{ labels: Ref<GlobalDefaultText> }>('TableComponents', {
  labels: ref(defaultTextLabelsMap[props.lang ?? 'en']),
})

const labels = injected.labels
const lang = computed(() => (labels?.value?.lang as SupportedLanguage) ?? 'en')

const { formattedValue, currencySymbol, onInput, onBlur } = useCurrencyInput(props, emit)

const errorMessage = ref<string[]>([])

watch(
  () => ({ val: props.modelValue, disabled: props.disabled, validate: props.validate }),
  ({ val, disabled, validate }) => {
    if (disabled) {
      errorMessage.value = []
      emit('remove:error', props.id)
      return
    }

    const err: string[] = []
    const numVal: number | undefined | null = val

    if (validate && numVal !== null && numVal !== undefined) {
      if (validate.min !== undefined && numVal < validate.min) {
        err.push(getMessage('numberMin', { min: String(validate.min) }, lang.value))
      }
      if (validate.max !== undefined && numVal > validate.max) {
        err.push(getMessage('numberMax', { max: String(validate.max) }, lang.value))
      }
    }

    errorMessage.value = err
    err.length ? emit('push:error', err, props.id) : emit('remove:error', props.id)
  },
  { deep: true, immediate: true },
)

const placeholderText = computed(() => props.placeholder ?? labels.value.placeholder?.number ?? '')
</script>
