<template>
  <div class="zyvnox-w-full zyvnox-mb-4">
    <label
      :for="id"
      class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-text-sm zyvnox-font-medium zyvnox-mb-2 zyvnox-text-slate-900 zyvnox-transition-colors zyvnox-duration-200 dark:zyvnox-text-slate-100"
      :class="{
        'zyvnox-text-red-500 dark:zyvnox-text-red-400': allErrors.length !== 0,
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
      class="zyvnox-group zyvnox-relative zyvnox-bg-slate-50 zyvnox-border-2 zyvnox-border-dashed zyvnox-border-slate-300 zyvnox-rounded-xl zyvnox-transition-all zyvnox-duration-200 hover:zyvnox-bg-slate-100/70 hover:zyvnox-border-blue-500 dark:zyvnox-bg-slate-800 dark:zyvnox-border-slate-600 dark:hover:zyvnox-bg-slate-700/80 dark:hover:zyvnox-border-blue-400"
      :class="{
        'zyvnox-border-red-300 dark:zyvnox-border-red-800': allErrors.length !== 0,
        'zyvnox-border-blue-500 zyvnox-bg-blue-50/80 dark:zyvnox-bg-blue-900/30 zyvnox-scale-[1.008] zyvnox-shadow-lg': isDragging && !props.disabled,
      }"
      @dragenter.prevent.stop="onDragEnter"
      @dragover.prevent.stop="onDragOver"
      @dragleave.prevent.stop="onDragLeave"
      @drop.prevent.stop="onDrop"
    >
      <!-- Drag Over Visual Overlay -->
      <div
        v-if="isDragging && !props.disabled"
        class="zyvnox-absolute zyvnox-inset-0 zyvnox-z-20 zyvnox-flex zyvnox-flex-col zyvnox-items-center zyvnox-justify-center zyvnox-bg-blue-500/10 zyvnox-backdrop-blur-[2px] zyvnox-rounded-xl zyvnox-border-2 zyvnox-border-dashed zyvnox-border-blue-500 zyvnox-pointer-events-none"
      >
        <div class="zyvnox-w-12 zyvnox-h-12 zyvnox-rounded-full zyvnox-bg-blue-600 zyvnox-text-white zyvnox-flex zyvnox-items-center zyvnox-justify-center zyvnox-shadow-lg zyvnox-animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
        </div>
        <span class="zyvnox-mt-2 zyvnox-text-sm zyvnox-font-semibold zyvnox-text-blue-600 dark:zyvnox-text-blue-400">
          {{ t('upload.dragDrop') || 'Drop file here' }}
        </span>
      </div>

      <!-- STATE 1: Empty / No File Selected -->
      <div
        v-if="!fileName"
        class="zyvnox-flex zyvnox-flex-col zyvnox-items-center zyvnox-justify-center zyvnox-py-7 zyvnox-px-4 zyvnox-gap-3.5"
      >
        <div
          class="zyvnox-w-14 zyvnox-h-14 zyvnox-rounded-full zyvnox-bg-blue-100/70 dark:zyvnox-bg-blue-900/30 zyvnox-flex zyvnox-items-center zyvnox-justify-center zyvnox-text-blue-600 dark:zyvnox-text-blue-400 zyvnox-transition-transform zyvnox-duration-200 group-hover:zyvnox-scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
        </div>

        <div class="zyvnox-text-center">
          <p class="zyvnox-text-sm zyvnox-font-medium zyvnox-text-slate-700 dark:zyvnox-text-slate-200">
            {{ t('upload.dragDrop') || 'Drag & drop file here' }}
          </p>
          <p class="zyvnox-text-xs zyvnox-text-slate-400 dark:zyvnox-text-slate-500 zyvnox-mt-0.5">
            {{ t('upload.orClick') || 'or click to browse' }}
          </p>
        </div>

        <input
          :id="id"
          type="file"
          @change="handleFileUpload"
          class="zyvnox-hidden"
          :disabled="props.disabled"
        />

        <div class="zyvnox-flex zyvnox-flex-wrap zyvnox-items-center zyvnox-justify-center zyvnox-gap-3 zyvnox-mt-1">
          <label
            :for="id"
            class="zyvnox-inline-flex zyvnox-items-center zyvnox-justify-center zyvnox-gap-2 zyvnox-px-5 zyvnox-py-2.5 zyvnox-font-medium zyvnox-rounded-lg zyvnox-border-none zyvnox-cursor-pointer zyvnox-transition-all zyvnox-duration-200 hover:-zyvnox-translate-y-0.5 hover:zyvnox-shadow-md disabled:zyvnox-opacity-60 disabled:zyvnox-cursor-not-allowed zyvnox-bg-blue-600 zyvnox-text-white hover:zyvnox-bg-blue-700 dark:zyvnox-bg-blue-500 dark:hover:zyvnox-bg-blue-400 before:zyvnox-content-['+'] before:zyvnox-text-lg before:zyvnox-leading-none"
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
        </div>
      </div>

      <!-- STATE 2: File Selected -->
      <div
        v-else
        class="zyvnox-flex zyvnox-flex-col zyvnox-p-5 zyvnox-gap-4"
      >
        <input
          :id="id"
          type="file"
          @change="handleFileUpload"
          class="zyvnox-hidden"
          :disabled="props.disabled"
        />

        <!-- Selected File Preview Card -->
        <div
          class="zyvnox-group/card zyvnox-flex zyvnox-items-center zyvnox-justify-between zyvnox-p-3.5 zyvnox-bg-white dark:zyvnox-bg-slate-700/60 zyvnox-border zyvnox-border-slate-200 dark:zyvnox-border-slate-600 zyvnox-rounded-xl zyvnox-shadow-sm zyvnox-transition-all zyvnox-duration-200 hover:zyvnox-shadow-md"
        >
          <div class="zyvnox-flex zyvnox-items-center zyvnox-gap-3.5 zyvnox-min-w-0">
            <div
              class="zyvnox-w-10 zyvnox-h-10 zyvnox-rounded-lg zyvnox-bg-blue-50 dark:zyvnox-bg-blue-900/40 zyvnox-flex zyvnox-items-center zyvnox-justify-center zyvnox-text-blue-600 dark:zyvnox-text-blue-400 zyvnox-shrink-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
              </svg>
            </div>

            <div class="zyvnox-flex zyvnox-flex-col zyvnox-overflow-hidden">
              <span
                class="zyvnox-font-semibold zyvnox-text-sm zyvnox-text-slate-900 dark:zyvnox-text-slate-100 zyvnox-truncate"
                :title="fileName"
              >
                {{ fileName }}
              </span>
              <div
                class="zyvnox-flex zyvnox-items-center zyvnox-gap-2 zyvnox-text-xs zyvnox-text-slate-500 dark:zyvnox-text-slate-400 zyvnox-mt-0.5"
              >
                <span v-if="fileSize">{{ fileSize }}</span>
                <span v-if="fileSize && fileType">&bull;</span>
                <span v-if="fileType" class="zyvnox-uppercase">{{ fileType }}</span>
              </div>
            </div>
          </div>

          <button
            v-if="!props.disabled"
            type="button"
            @click="handleDelete"
            class="zyvnox-w-7 zyvnox-h-7 zyvnox-flex zyvnox-items-center zyvnox-justify-center zyvnox-text-slate-400 hover:zyvnox-text-red-500 hover:zyvnox-bg-red-50 dark:hover:zyvnox-bg-red-950/40 dark:hover:zyvnox-text-red-400 zyvnox-rounded-lg zyvnox-transition-colors zyvnox-border-none zyvnox-bg-transparent zyvnox-cursor-pointer zyvnox-shrink-0 zyvnox-ml-3"
            :aria-label="labels?.btn?.remove || t('common.delete')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Action buttons to change or replace file (if not disabled) -->
        <div
          v-if="!props.disabled"
          class="zyvnox-flex zyvnox-flex-wrap zyvnox-items-center zyvnox-justify-center zyvnox-gap-3 zyvnox-mt-1"
        >
          <label
            :for="id"
            class="zyvnox-inline-flex zyvnox-items-center zyvnox-justify-center zyvnox-gap-2 zyvnox-px-4 zyvnox-py-2 zyvnox-text-xs zyvnox-font-medium zyvnox-rounded-lg zyvnox-border-none zyvnox-cursor-pointer zyvnox-transition-all zyvnox-duration-200 hover:-zyvnox-translate-y-0.5 hover:zyvnox-shadow-md zyvnox-bg-blue-600 zyvnox-text-white hover:zyvnox-bg-blue-700 dark:zyvnox-bg-blue-500 dark:hover:zyvnox-bg-blue-400"
          >
            {{ labels?.btn?.upload ?? t('common.upload') }}
          </label>
          <button
            type="button"
            @click="handleUrlInput"
            class="zyvnox-inline-flex zyvnox-items-center zyvnox-justify-center zyvnox-gap-2 zyvnox-px-4 zyvnox-py-2 zyvnox-text-xs zyvnox-font-medium zyvnox-rounded-lg zyvnox-border-none zyvnox-cursor-pointer zyvnox-transition-all zyvnox-duration-200 hover:-zyvnox-translate-y-0.5 hover:zyvnox-shadow-md zyvnox-bg-slate-600 zyvnox-text-white hover:zyvnox-bg-slate-700 dark:zyvnox-bg-slate-500 dark:hover:zyvnox-bg-slate-400"
          >
            URL
          </button>
          <button
            type="button"
            @click="handleDelete"
            class="zyvnox-inline-flex zyvnox-items-center zyvnox-justify-center zyvnox-gap-2 zyvnox-px-4 zyvnox-py-2 zyvnox-text-xs zyvnox-font-medium zyvnox-rounded-lg zyvnox-border-none zyvnox-cursor-pointer zyvnox-transition-all zyvnox-duration-200 hover:-zyvnox-translate-y-0.5 hover:zyvnox-shadow-md zyvnox-bg-red-500 zyvnox-text-white hover:zyvnox-bg-red-600 dark:zyvnox-bg-red-600 dark:hover:zyvnox-bg-red-500"
          >
            {{ labels?.btn?.remove || t('common.delete') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Error Messages (Placed neatly outside container, consistent with other inputs) -->
    <div v-if="allErrors.length > 0" class="zyvnox-mt-2 zyvnox-flex zyvnox-flex-col zyvnox-gap-1">
      <p
        v-for="(err, i) in allErrors"
        :key="i"
        class="zyvnox-text-sm zyvnox-text-red-500 zyvnox-animate-[zyvnox-fadeIn_300ms_ease-out] dark:zyvnox-text-red-400"
      >
        {{ err }}
      </p>
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
const isDragging = ref(false)
let dragCounter = 0

function onDragEnter(e: DragEvent) {
  if (props.disabled) return
  dragCounter++
  isDragging.value = true
}

function onDragOver(e: DragEvent) {
  if (props.disabled) return
  if (e.dataTransfer) {
    e.dataTransfer.dropEffect = 'copy'
  }
}

function onDragLeave(e: DragEvent) {
  if (props.disabled) return
  dragCounter--
  if (dragCounter <= 0) {
    dragCounter = 0
    isDragging.value = false
  }
}

function onDrop(e: DragEvent) {
  if (props.disabled) return
  dragCounter = 0
  isDragging.value = false
  const files = e.dataTransfer?.files
  if (files && files.length > 0) {
    emit('update:modelValue', files[0], props.id)
  }
}

const allErrors = computed(() => {
  const list = [...errorMessage.value]
  if (props.error) {
    if (Array.isArray(props.error)) list.push(...props.error)
    else list.push(props.error)
  }
  return list
})

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
