<template>
  <div class="zyvnox-w-full zyvnox-mb-4">
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
      class="zyvnox-bg-slate-50 zyvnox-border-2 zyvnox-border-dashed zyvnox-border-slate-300 zyvnox-rounded-xl zyvnox-transition-colors zyvnox-duration-200 hover:zyvnox-bg-slate-100 hover:zyvnox-border-blue-500 dark:zyvnox-bg-slate-800 dark:zyvnox-border-slate-600 dark:hover:zyvnox-bg-slate-700 dark:hover:zyvnox-border-blue-400"
      :class="{
        'zyvnox-border-red-300 dark:zyvnox-border-red-800': errorMessage.length !== 0 || error,
      }"
    >
      <div
        class="zyvnox-flex zyvnox-flex-col zyvnox-items-center zyvnox-justify-center zyvnox-p-8 zyvnox-gap-5 zyvnox-relative zyvnox-overflow-hidden"
      >
        <div
          class="zyvnox-absolute zyvnox-top-1/2 zyvnox-left-1/2 -zyvnox-translate-x-1/2 -zyvnox-translate-y-1/2 zyvnox-w-16 zyvnox-h-16 zyvnox-opacity-10 zyvnox-text-slate-900 zyvnox-pointer-events-none zyvnox-transition-opacity zyvnox-duration-200 group-hover:zyvnox-opacity-20 dark:zyvnox-text-slate-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
        </div>

        <input
          :id="id"
          type="file"
          @change="handleFileUpload"
          class="zyvnox-hidden"
          :disabled="props.disabled"
        />

        <div class="zyvnox-flex zyvnox-items-center zyvnox-gap-3 zyvnox-z-10">
          <label
            :for="id"
            class="zyvnox-inline-flex zyvnox-items-center zyvnox-justify-center zyvnox-gap-2 zyvnox-px-5 zyvnox-py-2.5 zyvnox-font-medium zyvnox-rounded-lg zyvnox-border-none zyvnox-cursor-pointer zyvnox-transition-all zyvnox-duration-200 hover:-zyvnox-translate-y-0.5 hover:zyvnox-shadow-md disabled:zyvnox-opacity-60 disabled:zyvnox-cursor-not-allowed zyvnox-bg-blue-600 zyvnox-text-white hover:zyvnox-bg-blue-700 dark:zyvnox-bg-blue-500 dark:hover:zyvnox-bg-blue-400"
            :class="{ 'zyvnox-opacity-60 zyvnox-cursor-not-allowed': props.disabled }"
          >
            {{ labels?.btn?.upload ?? t('common.upload') }}
          </label>
          <button
            type="button"
            @click="handleUrlInput"
            :disabled="props.disabled"
            class="zyvnox-inline-flex zyvnox-items-center zyvnox-justify-center zyvnox-gap-2 zyvnox-px-5 zyvnox-py-2.5 zyvnox-font-medium zyvnox-rounded-lg zyvnox-border-none zyvnox-cursor-pointer zyvnox-transition-all zyvnox-duration-200 hover:-zyvnox-translate-y-0.5 hover:zyvnox-shadow-md disabled:zyvnox-opacity-60 disabled:zyvnox-cursor-not-allowed zyvnox-bg-slate-600 zyvnox-text-white hover:zyvnox-bg-slate-700 dark:zyvnox-bg-slate-500 dark:hover:zyvnox-bg-slate-400"
          >
            URL
          </button>
          <button
            v-if="fileName && !props.disabled"
            type="button"
            @click="handleDelete"
            class="zyvnox-inline-flex zyvnox-items-center zyvnox-justify-center zyvnox-gap-2 zyvnox-px-5 zyvnox-py-2.5 zyvnox-font-medium zyvnox-rounded-lg zyvnox-border-none zyvnox-cursor-pointer zyvnox-transition-all zyvnox-duration-200 hover:-zyvnox-translate-y-0.5 hover:zyvnox-shadow-md disabled:zyvnox-opacity-60 disabled:zyvnox-cursor-not-allowed zyvnox-bg-red-500 zyvnox-text-white hover:zyvnox-bg-red-600 dark:zyvnox-bg-red-600 dark:hover:zyvnox-bg-red-500"
          >
            {{ labels?.btn?.remove || t('common.delete') }}
          </button>
        </div>

        <div
          v-if="fileName"
          class="zyvnox-w-full zyvnox-p-4 zyvnox-bg-blue-50 zyvnox-rounded-lg zyvnox-text-sm zyvnox-text-slate-600 zyvnox-animate-[zyvnox-slideUpFade_400ms_ease-out] zyvnox-z-10 dark:zyvnox-bg-blue-900/20 dark:zyvnox-text-slate-300"
        >
          <p class="zyvnox-m-0 zyvnox-leading-relaxed zyvnox-break-words">
            <b class="zyvnox-text-slate-900 dark:zyvnox-text-slate-100">{{ t('upload.name') }}:</b>
            {{ fileName }}
          </p>
          <p v-if="fileSize" class="zyvnox-m-0 zyvnox-leading-relaxed zyvnox-break-words">
            <b class="zyvnox-text-slate-900 dark:zyvnox-text-slate-100">{{ t('upload.size') }}:</b>
            {{ fileSize }}
          </p>
          <p v-if="fileType" class="zyvnox-m-0 zyvnox-leading-relaxed zyvnox-break-words">
            <b class="zyvnox-text-slate-900 dark:zyvnox-text-slate-100">{{ t('upload.type') }}:</b>
            {{ fileType }}
          </p>
        </div>
      </div>

      <div class="zyvnox-mt-2 zyvnox-flex zyvnox-flex-col zyvnox-gap-1">
        <p
          v-for="(err, i) in errorMessage"
          :key="i"
          class="zyvnox-text-sm zyvnox-text-red-500 zyvnox-animate-[zyvnox-fadeIn_300ms_ease-out] dark:zyvnox-text-red-400"
        >
          {{ err }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject, watch, computed } from 'vue'
import type { FileInputProps } from '../../../configs/types'
import { setUID } from '../../../untils'
import { getMessage } from '../../../helpers'
import { Tooltip } from '../Display'
import { useI18n } from '../../composables/useI18n'

const props = withDefaults(defineProps<FileInputProps>(), {
  id: setUID(),
  tooltipPosition: 'top',
  tooltipIcon: '❓',
})

const { t, labels } = useI18n(computed(() => props.lang))
const ShowAlert =
  inject<any>('TableComponents')?.ShowAlert ?? inject<any>('tableComponents')?.ShowAlert

const emit = defineEmits<{
  (e: 'update:modelValue', value: File | string | null, key: string): void
  (e: 'push:error', message: string[], key: string): void
  (e: 'remove:error', key: string): void
}>()

// State
const fileName = ref('')
const fileSize = ref('')
const fileType = ref('')
const sizeValid = ref(true)
const errorMessage = ref<string[]>([])

// Watch modelValue
watch(
  () => props.modelValue,
  (newFile) => {
    if (newFile instanceof File) {
      fileName.value = newFile.name
      fileSize.value = `${(newFile.size / 1024).toFixed(2)} KB`
      fileType.value = newFile.type.split('/').pop() || newFile.name.split('.').pop() || 'unknown'
      validateFile(newFile)
    } else {
      if (typeof newFile === 'string' && newFile) {
        fileName.value = newFile.split('/').pop() || newFile
        fileSize.value = 'N/A'
        fileType.value = newFile.split('.').pop() || 'link'
        errorMessage.value = []
        emit('remove:error', props.id)
      } else {
        resetFile()
      }
    }
  },
  { immediate: true },
)

function handleUrlInput() {
  if (props.disabled) return
  const url = prompt(labels.value.placeholder?.url ?? t('placeholder.url'))
  if (url) {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      emit('update:modelValue', url, props.id)
    } else {
      ShowAlert?.('error', t('upload.invalidUrl'), [t('upload.invalidUrlDesc')])
    }
  }
}
function handleFileUpload(event: Event) {
  if (props.disabled) return
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    emit('update:modelValue', file, props.id)
  }
}
function handleDelete() {
  if (props.disabled) return
  emit('update:modelValue', null, props.id)
  emit('remove:error', props.id)
}

function validateFile(file: File) {
  const errors: string[] = []

  // Allowed types
  if (props.validate?.allowedTypes) {
    const ext = file.name.split('.').pop()?.toLowerCase()
    const allowed = props.validate.allowedTypes.map((t) => t.toLowerCase())
    if (!ext || !allowed.includes(ext)) {
      errors.push(getMessage('fileType', {}, props.lang ?? 'en') + ` (${allowed.join(', ')})`)
    }
  }

  // Max size
  if (props.validate?.maxSize) {
    sizeValid.value = file.size / 1024 <= props.validate.maxSize
    if (!sizeValid.value) {
      errors.push(getMessage('fileMaxSize', { max: props.validate.maxSize }, props.lang ?? 'en'))
    }
  }

  errorMessage.value = errors
  if (errors.length) emit('push:error', errors, props.id)
  else emit('remove:error', props.id)
}

function resetFile() {
  fileName.value = ''
  fileSize.value = ''
  fileType.value = ''
  errorMessage.value = []
}
</script>
