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
        class="zyvnox-absolute zyvnox-left-3 zyvnox-top-1/2 -zyvnox-translate-y-1/2 zyvnox-text-slate-400 zyvnox-pointer-events-none"
      >
        <p class="zyvnox-i-mdi-phone zyvnox-w-5 zyvnox-h-5"></p>
      </div>
      <input
        :id="id"
        type="tel"
        :value="modelValue"
        :disabled="disabled"
        @input="onInput"
        :placeholder="placeholderText"
        class="zyvnox-w-full zyvnox-py-3 zyvnox-pl-11 zyvnox-pr-4 zyvnox-text-base zyvnox-text-slate-900 zyvnox-bg-white zyvnox-border zyvnox-border-slate-300 zyvnox-rounded-lg zyvnox-transition-all zyvnox-duration-200 zyvnox-box-border focus:zyvnox-outline-none focus:zyvnox-border-blue-500 focus:zyvnox-ring-4 focus:zyvnox-ring-blue-500/20 disabled:zyvnox-bg-slate-100 disabled:zyvnox-text-slate-500 disabled:zyvnox-cursor-not-allowed dark:zyvnox-bg-slate-800 dark:zyvnox-text-slate-100 dark:zyvnox-border-slate-600 dark:focus:zyvnox-border-blue-400 dark:focus:zyvnox-ring-blue-400/25 dark:disabled:zyvnox-bg-slate-700"
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
import type { TelInputProps, GlobalDefaultText, SupportedLanguage } from '../../../configs/types'
import { defaultTextLabelsMap } from '../../../configs/i18n'
import { setUID, telRegex } from '../../../untils'
import { getMessage } from '../../../helpers'
import { Tooltip } from '../Display'

const props = withDefaults(defineProps<TelInputProps>(), {
  id: setUID(),
  tooltipPosition: 'top',
  tooltipIcon: '❓',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string, key: string): void
  (e: 'push:error', message: string[], key: string): void
  (e: 'remove:error', key: string): void
}>()

const injected = inject<{ labels: Ref<GlobalDefaultText> }>('TableComponents', {
  labels: ref(defaultTextLabelsMap[props.lang ?? 'en']),
})

const labels = injected.labels
const lang = computed(() => (labels?.value?.lang as SupportedLanguage) ?? 'en')

const errorMessage = ref<string[]>([])

watch(
  () => ({ val: props.modelValue, disabled: props.disabled }),
  ({ val, disabled }) => {
    if (disabled || !val) {
      errorMessage.value = []
      emit('remove:error', props.id)
      return
    }

    const err: string[] = []
    const strVal = String(val ?? '')

    if (!telRegex.test(strVal)) {
      err.push('Invalid phone number format')
    }

    errorMessage.value = err
    err.length ? emit('push:error', err, props.id) : emit('remove:error', props.id)
  },
  { deep: true, immediate: true },
)

const placeholderText = computed(() => props.placeholder ?? '0812-3456-7890')

function onInput(event: Event) {
  if (props.disabled) return
  const input = event.target as HTMLInputElement
  emit('update:modelValue', input.value, props.id)
}
</script>
