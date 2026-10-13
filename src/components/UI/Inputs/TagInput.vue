<template>
  <div class="zyvnox-w-full zyvnox-relative zyvnox-mb-4">
    <label
      :for="id"
      class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-text-sm zyvnox-font-medium zyvnox-mb-2 zyvnox-text-slate-900 zyvnox-transition-colors zyvnox-duration-200 dark:zyvnox-text-slate-100"
      :class="{
        'zyvnox-text-red-500 dark:zyvnox-text-red-400': errorMessage.length !== 0 || error,
      }"
    >
      {{ label }}

      <Tooltip v-if="tooltip" :text="tooltip" :position="tooltipPosition ?? 'top'">
        <span class="zyvnox-text-slate-400 dark:zyvnox-text-slate-500 zyvnox-text-xs">
          {{ tooltipIcon ?? '❓' }}
        </span>
      </Tooltip>
    </label>

    <div
      class="zyvnox-flex zyvnox-flex-wrap zyvnox-items-center zyvnox-gap-2 zyvnox-border-1 zyvnox-border-solid zyvnox-border-slate-300 zyvnox-rounded-lg zyvnox-p-2 zyvnox-bg-white zyvnox-transition-all zyvnox-duration-200 zyvnox-cursor-text zyvnox-box-border focus-within:zyvnox-border-blue-500 focus-within:zyvnox-ring-4 focus-within:zyvnox-ring-blue-500/20 dark:zyvnox-bg-slate-800 dark:zyvnox-border-slate-600 dark:focus-within:zyvnox-border-blue-400 dark:focus-within:zyvnox-ring-blue-400/25"
      :class="{
        'zyvnox-border-red-400 focus-within:zyvnox-ring-red-500/20 dark:zyvnox-border-red-400 dark:focus-within:zyvnox-ring-red-400/25':
          errorMessage.length !== 0 || error,
        'zyvnox-bg-slate-100 zyvnox-cursor-not-allowed dark:zyvnox-bg-slate-700': disabled,
      }"
    >
      <span
        v-for="(tag, i) in modelValue"
        :key="i"
        class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-px-3 zyvnox-py-1 zyvnox-bg-blue-100 zyvnox-text-blue-800 zyvnox-font-medium zyvnox-text-sm zyvnox-rounded-full zyvnox-animate-[zyvnox-popIn_300ms_ease-out_backwards] dark:zyvnox-bg-blue-900 dark:zyvnox-text-blue-200 zyvnox-max-w-full zyvnox-box-border"
      >
        <span class="zyvnox-truncate">{{ tag }}</span>

        <button
          v-if="!disabled"
          type="button"
          @click="removeTag(i)"
          class="zyvnox-w-4 zyvnox-h-4 zyvnox-flex zyvnox-shrink-0 zyvnox-items-center zyvnox-justify-center zyvnox-bg-transparent zyvnox-border-none zyvnox-rounded-full zyvnox-text-red-500 zyvnox-cursor-pointer zyvnox-font-bold zyvnox-leading-none zyvnox-transition-all zyvnox-duration-200 hover:zyvnox-bg-red-500 hover:zyvnox-text-white hover:zyvnox-rotate-180 dark:zyvnox-text-red-400 dark:hover:zyvnox-bg-red-500 dark:hover:zyvnox-text-white"
        >
          &times;
        </button>
      </span>

      <input
        v-if="!disabled"
        ref="tagInput"
        type="text"
        class="zyvnox-flex-1 zyvnox-min-w-[120px] zyvnox-max-w-full zyvnox-border-none zyvnox-outline-none zyvnox-bg-transparent zyvnox-text-slate-900 zyvnox-text-base zyvnox-p-1 zyvnox-box-border dark:zyvnox-text-slate-100"
        @keydown.enter.prevent="addTag"
        :placeholder="placeholderText"
      />
    </div>

    <p
      v-if="errorMessage.length !== 0"
      v-for="(err, i) in errorMessage"
      :key="i"
      class="zyvnox-text-sm zyvnox-text-red-500 zyvnox-mt-2 zyvnox-animate-[zyvnox-fadeIn_300ms_ease-out] dark:zyvnox-text-red-400"
    >
      {{ err }}
    </p>
    <p
      v-else-if="typeof props.error === 'string'"
      class="zyvnox-text-sm zyvnox-text-red-500 zyvnox-mt-2 zyvnox-animate-[zyvnox-fadeIn_300ms_ease-out] dark:zyvnox-text-red-400"
    >
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
// (Bagian script dan style tetap sama persis seperti kode Mas Joko sebelumnya)
import { computed, inject, ref, watch, type Ref } from 'vue'
import type { GlobalDefaultText, TagInputProps } from '../../..'
import { defaultTextLabelsMap } from '../../../configs/i18n'
import { setUID } from '../../../untils'
import { getMessage } from '../../../helpers'
import { Tooltip } from '../Display'

const props = withDefaults(defineProps<TagInputProps>(), {
  id: setUID(),
  modelValue: () => [] as string[],
  tooltipPosition: 'top',
  tooltipIcon: '❓',
})

const emit = defineEmits<{
  (e: 'update:modelValue', v: string[], key: string): void
  (e: 'push:error', message: string[], key: string): void
  (e: 'remove:error', key: string): void
}>()

// Labels
const injected = inject<{ labels: Ref<GlobalDefaultText> }>('TableComponents', {
  labels: ref(defaultTextLabelsMap[props.lang ?? 'en']),
})
const labels = injected.labels

// Input ref
const tagInput = ref<HTMLInputElement>()

// ========== Validasi ========== //
const errorMessage = ref<string[]>([])

watch(
  () => ({
    val: props.modelValue,
    disabled: props.disabled,
    validate: props.validate,
  }),
  ({ val, disabled, validate }) => {
    if (disabled) {
      errorMessage.value = []
      emit('remove:error', props.id)
      return
    }

    const err: string[] = []
    const arrVal = val ?? []

    if (validate) {
      if (validate.min !== undefined && arrVal.length < validate.min) {
        err.push(getMessage('arrayTagMin', { min: String(validate.min) }, props.lang ?? 'en'))
      }
      if (validate.max !== undefined && arrVal.length > validate.max) {
        err.push(getMessage('arrayTagMax', { max: String(validate.max) }, props.lang ?? 'en'))
      }
    }

    errorMessage.value = err

    if (err.length) emit('push:error', err, props.id)
    else if (props.id) emit('remove:error', props.id)
  },
  { deep: true },
)

// ========== Placeholder ========== //
const placeholderText = computed(() => {
  return errorMessage.value.length > 0
    ? errorMessage.value[0] + '...'
    : (props.placeholder ?? labels?.value?.placeholder?.tag ?? '')
})

// ========== Methods ========== //
function addTag() {
  if (props.disabled) return
  const inputValue = tagInput.value?.value?.trim()
  if (!inputValue) return

  const newTags = inputValue
    .split(',')
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0)

  if (newTags.length > 0) {
    emit('update:modelValue', [...props.modelValue, ...newTags], props.id)
  }
  if (tagInput.value) tagInput.value.value = ''
}

function removeTag(i: number) {
  if (props.disabled) return
  emit(
    'update:modelValue',
    props.modelValue.filter((_, idx) => idx !== i),
    props.id,
  )
}
</script>
