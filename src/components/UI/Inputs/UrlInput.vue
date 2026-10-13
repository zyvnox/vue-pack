<template>
  <div class="zyvnox-w-full zyvnox-relative zyvnox-mb-4">
    <label
      :for="id"
      class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-text-sm zyvnox-font-medium zyvnox-mb-2 zyvnox-text-slate-900 zyvnox-transition-colors zyvnox-duration-200 dark:zyvnox-text-slate-100"
      :class="{ 'zyvnox-text-red-500 dark:zyvnox-text-red-400': errorMessage }"
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
        <p class="zyvnox-i-mdi-link-variant zyvnox-w-5 zyvnox-h-5"></p>
      </div>
      <input
        :id="id"
        type="text"
        :value="modelValue"
        @input="onInput"
        :disabled="disabled"
        class="zyvnox-w-full zyvnox-py-3 zyvnox-pl-11 zyvnox-text-base zyvnox-text-slate-900 zyvnox-bg-white zyvnox-border-1 zyvnox-border-solid zyvnox-border-slate-300 zyvnox-rounded-lg zyvnox-transition-all zyvnox-duration-200 zyvnox-box-border focus:zyvnox-outline-none focus:zyvnox-border-blue-500 focus:zyvnox-ring-4 focus:zyvnox-ring-blue-500/20 disabled:zyvnox-bg-slate-100 disabled:zyvnox-text-slate-500 disabled:zyvnox-cursor-not-allowed dark:zyvnox-bg-slate-800 dark:zyvnox-text-slate-100 dark:zyvnox-border-slate-600 dark:focus:zyvnox-border-blue-400 dark:focus:zyvnox-ring-blue-400/25 dark:disabled:zyvnox-bg-slate-700"
        :class="{
          'zyvnox-border-red-400 focus:zyvnox-ring-red-500/20 dark:zyvnox-border-red-400 dark:focus:zyvnox-ring-red-400/25':
            errorMessage,
        }"
        :placeholder="
          placeholder ??
          (labels?.placeholder?.url
            ? `${labels.placeholder.url}: https://example.com`
            : 'https://example.com')
        "
      />
    </div>
    <p
      v-if="errorMessage"
      class="zyvnox-text-sm zyvnox-text-red-500 zyvnox-mt-2 zyvnox-animate-[fadeIn_300ms_ease-out] dark:zyvnox-text-red-400"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, watch, type Ref } from 'vue'
import type { GlobalDefaultText, UrlInputProps } from '../../../configs/types'
import { defaultTextLabelsMap } from '../../../configs/i18n'
import { setUID } from '../../../untils'
import { getMessage } from '../../../helpers'
import { Tooltip } from '../Display'

const internalError = ref<string | undefined>(undefined)
const errorMessage = ref<string>()

const props = withDefaults(defineProps<UrlInputProps>(), {
  id: setUID(),
  tooltipPosition: 'top',
  tooltipIcon: '❓',
})

const injected = inject<{ labels: Ref<GlobalDefaultText> }>('TableComponents', {
  labels: ref(defaultTextLabelsMap[props.lang ?? 'en']),
})

const labels = injected.labels

const emit = defineEmits<{
  (e: 'update:modelValue', v: string, key: string): void
  (e: 'push:error', message: string, key: string): void
  (e: 'remove:error', key: string): void
}>()

function onInput(e: Event) {
  if (props.disabled) return
  const input = e.target as HTMLInputElement
  emit('update:modelValue', input.value, props.id)

  if (!input.value) {
    internalError.value = undefined
    emit('remove:error', props.id)
    return
  }
  try {
    new URL(input.value)
    internalError.value = undefined
    emit('remove:error', props.id)
  } catch {
    internalError.value = getMessage('url', {}, props.lang ?? 'en')
    emit('push:error', internalError.value, props.id)
  }
}
watch(
  () => props,
  () => {
    errorMessage.value = props.error || internalError.value || ''
  },
  { deep: true },
)
</script>
