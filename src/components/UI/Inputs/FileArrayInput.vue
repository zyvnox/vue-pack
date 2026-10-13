<template>
  <div class="zyvnox-w-full zyvnox-mb-4">
    <label
      :for="id"
      class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-text-sm zyvnox-font-medium zyvnox-mb-2 zyvnox-text-slate-900 zyvnox-transition-colors zyvnox-duration-200 dark:zyvnox-text-slate-100"
      :class="{ 'zyvnox-text-red-500 dark:zyvnox-text-red-400': allErrors.length !== 0 }"
    >
      {{ label }}

      <Tooltip v-if="tooltip" :text="tooltip" :position="tooltipPosition ?? 'top'">
        <span class="zyvnox-text-slate-400 dark:zyvnox-text-slate-500 zyvnox-text-xs">
          {{ tooltipIcon ?? '❓' }}
        </span>
      </Tooltip>
    </label>

    <div
      class="zyvnox-bg-white zyvnox-border-2 zyvnox-border-dashed zyvnox-border-slate-300 zyvnox-rounded-xl zyvnox-p-6 zyvnox-transition-colors zyvnox-duration-200 hover:zyvnox-bg-slate-50 hover:zyvnox-border-blue-500 dark:zyvnox-bg-slate-800 dark:zyvnox-border-slate-600 dark:hover:zyvnox-bg-slate-700 dark:hover:zyvnox-border-blue-400"
      :class="{ 'zyvnox-border-red-300 dark:zyvnox-border-red-800': allErrors.length !== 0 }"
    >
      <div
        v-if="fileDetails.length > 0"
        class="zyvnox-flex zyvnox-flex-col zyvnox-gap-3 zyvnox-mb-6"
      >
        <div
          v-for="(file, index) in fileDetails"
          :key="index"
          class="zyvnox-group zyvnox-flex zyvnox-items-center zyvnox-justify-between zyvnox-p-3 zyvnox-bg-slate-50 zyvnox-border zyvnox-border-slate-200 zyvnox-rounded-lg zyvnox-shadow-sm zyvnox-transition-all zyvnox-duration-200 zyvnox-animate-[zyvnox-slideInFade_500ms_ease-out_backwards] hover:-zyvnox-translate-y-0.5 hover:zyvnox-shadow-md dark:zyvnox-bg-slate-700 dark:zyvnox-border-slate-600 dark:hover:zyvnox-bg-slate-600"
          :style="{ animationDelay: `${index * 60}ms` }"
        >
          <div class="zyvnox-flex zyvnox-items-center zyvnox-gap-3 zyvnox-min-w-0">
            <span
              class="zyvnox-text-2xl zyvnox-text-slate-500 zyvnox-shrink-0 dark:zyvnox-text-slate-400"
              >📄</span
            >
            <div class="zyvnox-flex zyvnox-flex-col zyvnox-overflow-hidden">
              <span
                class="zyvnox-font-medium zyvnox-text-slate-900 zyvnox-truncate dark:zyvnox-text-slate-100"
                >{{ file.name }}</span
              >
              <span class="zyvnox-text-xs zyvnox-text-slate-500 dark:zyvnox-text-slate-400">{{
                file.size
              }}</span>
            </div>
          </div>
          <button
            v-if="!disabled"
            @click="removeFile(index)"
            class="zyvnox-w-6 zyvnox-h-6 zyvnox-flex zyvnox-items-center zyvnox-justify-center zyvnox-pb-[5px] zyvnox-shrink-0 zyvnox-ml-4 zyvnox-text-xl zyvnox-font-bold zyvnox-text-white zyvnox-bg-red-500 zyvnox-rounded-full zyvnox-border-none zyvnox-cursor-pointer zyvnox-opacity-0 zyvnox-scale-50 zyvnox-transition-all zyvnox-duration-200 hover:zyvnox-bg-red-600 hover:zyvnox-scale-110 hover:zyvnox-rotate-90 group-hover:zyvnox-opacity-100 group-hover:zyvnox-scale-100"
            :aria-label="t('upload.remove')"
          >
            &times;
          </button>
        </div>
      </div>

      <div
        v-else
        class="zyvnox-text-center zyvnox-py-8 zyvnox-px-4 zyvnox-text-slate-400 zyvnox-italic dark:zyvnox-text-slate-500"
      >
        <p>{{ labels?.message?.noItemSelected }}</p>
      </div>

      <div class="zyvnox-text-center zyvnox-mt-4">
        <input
          :id="id"
          type="file"
          multiple
          @change="handleFileUpload"
          class="zyvnox-hidden"
          :disabled="isAddButtonDisabled"
        />
        <label
          :for="id"
          class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-px-5 zyvnox-py-2.5 zyvnox-font-medium zyvnox-border-none zyvnox-rounded-lg zyvnox-text-white zyvnox-bg-blue-500 zyvnox-cursor-pointer zyvnox-transition-all zyvnox-duration-200 hover:zyvnox-bg-blue-600 hover:zyvnox-scale-105 hover:zyvnox-shadow-lg disabled:zyvnox-bg-slate-100 disabled:zyvnox-text-slate-500 disabled:zyvnox-cursor-not-allowed dark:zyvnox-bg-blue-600 dark:hover:zyvnox-bg-blue-500 dark:disabled:zyvnox-bg-slate-700 dark:disabled:zyvnox-text-slate-400 before:zyvnox-content-['+'] before:zyvnox-text-lg before:zyvnox-leading-none"
          :class="{
            'zyvnox-opacity-60 zyvnox-cursor-not-allowed': isAddButtonDisabled,
          }"
        >
          {{ labels?.btn?.upload ?? t('common.upload') }}
        </label>
        <button
          type="button"
          @click="handleUrlInput"
          :disabled="isAddButtonDisabled"
          class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-px-5 zyvnox-py-2.5 zyvnox-font-medium zyvnox-border-none zyvnox-rounded-lg zyvnox-text-white zyvnox-bg-slate-600 zyvnox-cursor-pointer zyvnox-transition-all zyvnox-duration-200 hover:zyvnox-bg-slate-700 hover:zyvnox-scale-105 hover:zyvnox-shadow-lg disabled:zyvnox-opacity-60 disabled:zyvnox-cursor-not-allowed dark:zyvnox-bg-slate-500 dark:hover:zyvnox-bg-slate-400"
        >
          URL
        </button>
      </div>
    </div>

    <div class="zyvnox-mt-2 zyvnox-flex zyvnox-flex-col zyvnox-gap-1">
      <p
        v-if="allErrors.length > 0"
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
import { ref, watch, inject, computed, type Ref } from 'vue'
import { type FileArrayInputProps, type GlobalDefaultText } from '../../../configs/types'
import { useI18n } from '../../composables/useI18n'
import { setUID } from '../../../untils'
import { getMessage } from '../../../helpers'
import { Tooltip } from '../Display'

// --- PROPS & EMITS ---
const props = withDefaults(defineProps<FileArrayInputProps>(), {
  id: setUID(),
  modelValue: () => [],
  tooltipPosition: 'top',
  tooltipIcon: '❓',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: (File | string)[]): void
  (e: 'push:error', message: string[], key: string): void
  (e: 'remove:error', key: string): void
}>()

// --- INJECTIONS & LABELS ---
const { t, labels } = useI18n(computed(() => props.lang))
const ShowAlert =
  inject<any>('TableComponents')?.ShowAlert ?? inject<any>('tableComponents')?.ShowAlert

// --- STATE MANAGEMENT ---
const fileDetails = ref<{ name: string; size: string }[]>([])
const localErrors = ref<string[]>([])

// --- COMPUTED PROPERTIES ---
const allErrors = computed(() => {
  if (localErrors.value.length > 0) return localErrors.value
  if (typeof props.error === 'string') return [props.error]
  if (Array.isArray(props.error)) return props.error
  return []
})

const isAddButtonDisabled = computed(() => {
  if (props.disabled) return true
  // Ensure we return a boolean (avoid returning 0 when maxFiles is 0)
  if (props.validate?.maxFiles !== undefined) {
    return !!(props.modelValue && props.modelValue.length >= props.validate.maxFiles)
  }
  return false
})

// --- WATCHERS ---
watch(
  () => props.modelValue,
  (newValues) => {
    if (!newValues || newValues.length === 0) {
      fileDetails.value = []
      validateAllFiles()
      return
    }

    fileDetails.value = newValues.map((item) => {
      if (item instanceof File) {
        return {
          name: item.name,
          size: `${(item.size / 1024).toFixed(2)} KB`,
        }
      }
      // Handle string value (e.g., URL or existing file name)
      return {
        name: item,
        size: 'N/A',
      }
    })

    validateAllFiles()
  },
  { immediate: true, deep: true },
)

// --- METHODS ---
function handleUrlInput() {
  if (props.disabled) return
  if (isAddButtonDisabled.value) {
    ShowAlert?.(
      'error',
      getMessage('fileMaxFiles', { max: props.validate!.maxFiles! }, props.lang ?? 'en'),
    )
    return
  }
  const url = prompt(labels.value.placeholder?.url ?? t('placeholder.url'))
  if (url) {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      const currentFiles = props.modelValue || []
      emit('update:modelValue', [...currentFiles, url])
    } else {
      ShowAlert?.('error', t('upload.invalidUrl'), [t('upload.invalidUrlDesc')])
    }
  }
}

function handleFileUpload(event: Event) {
  if (props.disabled) return

  const target = event.target as HTMLInputElement
  const files = target.files
  if (!files || files.length === 0) return

  const currentFiles = props.modelValue || []
  const maxFiles = props.validate?.maxFiles

  if (maxFiles && currentFiles.length + files.length > maxFiles) {
    ShowAlert?.('error', getMessage('fileMaxFiles', { max: maxFiles }, props.lang ?? 'en'))
    target.value = ''
    return
  }

  const newFiles: File[] = []
  const allowedTypes = props.validate?.allowedTypes?.map((tVal) => tVal.toLowerCase()) ?? []

  for (const file of Array.from(files)) {
    const ext = file.name.split('.').pop()?.toLowerCase()
    if (allowedTypes.length > 0 && (!ext || !allowedTypes.includes(ext))) {
      ShowAlert?.('error', t('upload.invalidFileType'), [
        getMessage('fileType', {}, props.lang ?? 'en') +
          ` (${props.validate?.allowedTypes?.join(', ')})`,
      ])
      continue
    }
    newFiles.push(file)
  }

  emit('update:modelValue', [...currentFiles, ...newFiles])
  target.value = ''
}

function removeFile(index: number) {
  if (props.disabled) return
  const updatedValue = [...(props.modelValue || [])]
  updatedValue.splice(index, 1)
  emit('update:modelValue', updatedValue)
}

// --- VALIDATION LOGIC ---
function validateAllFiles() {
  if (!props.validate || !props.modelValue || props.modelValue.length === 0) {
    localErrors.value = []
    emit('remove:error', props.id)
    return
  }

  const errors: string[] = []

  if (props.validate.maxFiles && props.modelValue.length > props.validate.maxFiles) {
    errors.push(getMessage('fileMaxFiles', { max: props.validate.maxFiles }, props.lang ?? 'en'))
  }

  props.modelValue.forEach((file, index) => {
    if (file instanceof File) {
      const fileErrors = validateSingleFile(file, index + 1)
      errors.push(...fileErrors)
    }
  })

  localErrors.value = [...new Set(errors)]

  if (localErrors.value.length > 0) {
    emit('push:error', localErrors.value, props.id)
  } else {
    emit('remove:error', props.id)
  }
}

function validateSingleFile(file: File, fileNumber: number): string[] {
  const fileErrors: string[] = []
  const v = props.validate!

  // File Type
  if (v.allowedTypes) {
    const ext = file.name.split('.').pop()?.toLowerCase()
    if (!ext || !v.allowedTypes.map((t) => t.toLowerCase()).includes(ext)) {
      fileErrors.push(
        `File #${fileNumber} (${file.name}): ` +
          getMessage('fileType', {}, props.lang ?? 'en') +
          ` (${v.allowedTypes.join(', ')})`,
      )
    }
  }

  // Size
  if (v.maxSize) {
    const fileSizeKB = file.size / 1024
    if (fileSizeKB > v.maxSize) {
      fileErrors.push(
        `File #${fileNumber} (${file.name}): ` +
          getMessage('fileMaxSize', { max: v.maxSize }, props.lang ?? 'en'),
      )
    }
  }

  return fileErrors
}
</script>
