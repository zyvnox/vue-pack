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
        <span class="zyvnox-i-mdi-calendar zyvnox-w-5 zyvnox-h-5"></span>
      </div>
      <input
        :id="id"
        type="date"
        :value="modelValue"
        :disabled="disabled"
        :min="props.validate?.minDate"
        :max="props.validate?.maxDate"
        @input="onInput"
        :placeholder="placeholderText"
        class="zyvnox-w-full zyvnox-py-3 zyvnox-px-4 zyvnox-text-base zyvnox-text-slate-900 zyvnox-bg-white zyvnox-border zyvnox-border-slate-300 zyvnox-rounded-lg zyvnox-transition-all zyvnox-duration-200 zyvnox-box-border zyvnox-appearance-none focus:zyvnox-outline-none focus:zyvnox-border-blue-500 focus:zyvnox-ring-4 focus:zyvnox-ring-blue-500/20 disabled:zyvnox-bg-slate-100 disabled:zyvnox-text-slate-500 disabled:zyvnox-cursor-not-allowed dark:zyvnox-bg-slate-800 dark:zyvnox-text-slate-100 dark:zyvnox-border-slate-600 dark:focus:zyvnox-border-blue-400 dark:focus:zyvnox-ring-blue-400/25 dark:disabled:zyvnox-bg-slate-700 [color-scheme:light_dark] [&::-webkit-calendar-picker-indicator]:zyvnox-opacity-0 [&::-webkit-calendar-picker-indicator]:zyvnox-cursor-pointer [&::-webkit-calendar-picker-indicator]:zyvnox-absolute [&::-webkit-calendar-picker-indicator]:zyvnox-right-3 [&::-webkit-calendar-picker-indicator]:zyvnox-top-1/2 [&::-webkit-calendar-picker-indicator]:-zyvnox-translate-y-1/2 [&::-webkit-calendar-picker-indicator]:zyvnox-w-6 [&::-webkit-calendar-picker-indicator]:zyvnox-h-6"
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
import { computed, inject, onMounted, ref, watch, type Ref } from 'vue'
import type {
  GlobalDefaultText,
  SupportedLanguage,
  DateInputProps,
  DateOnly,
} from '../../../configs/types'
import { defaultTextLabelsMap } from '../../../configs/i18n'
import { toDateOnly, setUID } from '../../../untils'
import { getMessage } from '../../../helpers'
import { Tooltip } from '../Display'

const props = withDefaults(defineProps<DateInputProps>(), {
  id: setUID(),
  tooltipPosition: 'top',
  tooltipIcon: '❓',
})

const injected = inject<{ labels: Ref<GlobalDefaultText> }>('TableComponents', {
  labels: ref(defaultTextLabelsMap[props.lang ?? 'en']),
})

const labels = injected.labels
const lang = computed(() => (labels?.value?.lang as SupportedLanguage) ?? 'en')

const emit = defineEmits<{
  (e: 'update:modelValue', value: string, key: string): void
  (e: 'push:error', message: string[], key: string): void
  (e: 'remove:error', key: string): void
}>()

const errorMessage = ref<string[]>([])

watch(
  () => [props.modelValue, props.disabled, props.validate],
  ([val, disabled, validate]) => {
    if (disabled) {
      errorMessage.value = []
      return
    }

    const err: string[] = []
    const dateVal = toDateOnly(val as string)

    if (validate && typeof validate === 'object') {
      try {
        toDateOnly(val as DateOnly)
      } catch (e) {
        errorMessage.value = [String(e)]
        emit('push:error', errorMessage.value, props.id)
        return
      }
      const { minDate, maxDate } = validate as { minDate?: string; maxDate?: string }

      const min = minDate ? toDateOnly(minDate) : undefined
      const max = maxDate ? toDateOnly(maxDate) : undefined

      if (min && dateVal && dateVal < min) {
        err.push(getMessage('dateMin', { min: toDateOnly(min) }, props.lang ?? 'en'))
      }
      if (max && dateVal && dateVal > max) {
        err.push(getMessage('dateMax', { max: toDateOnly(max) }, props.lang ?? 'en'))
      }
    }

    errorMessage.value = err

    if (err.length) emit('push:error', err, props.id)
    else emit('remove:error', props.id)
  },
)

onMounted(() => {
  if (props.modelValue) {
    try {
      toDateOnly(props.modelValue as DateOnly)
    } catch (e) {
      errorMessage.value = [String(e)]
      emit('push:error', errorMessage.value, props.id)
      return
    }
  }
})

const placeholderText = computed(() => props.placeholder ?? labels?.value?.placeholder?.date ?? '')

function onInput(event: Event) {
  if (props.disabled) return
  const input = event.target as HTMLInputElement
  emit('update:modelValue', input.value, props.id)
}
</script>
