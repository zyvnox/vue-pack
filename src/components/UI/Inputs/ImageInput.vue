<template>
  <div class="zyvnox-w-full">
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
      v-if="props.watermark?.url === 'upload'"
      class="zyvnox-mb-4 zyvnox-p-4 zyvnox-bg-blue-50 zyvnox-border zyvnox-border-blue-200 zyvnox-rounded-lg dark:zyvnox-bg-blue-900/20 dark:zyvnox-border-blue-800"
    >
      <p
        class="zyvnox-text-xs zyvnox-font-bold zyvnox-uppercase zyvnox-text-blue-600 zyvnox-mb-2 dark:zyvnox-text-blue-400"
      >
        {{ t('upload.watermarkConfig') }}
      </p>

      <div class="zyvnox-flex zyvnox-items-center zyvnox-gap-4">
        <div
          class="zyvnox-shrink-0 zyvnox-w-16 zyvnox-h-16 zyvnox-bg-white zyvnox-rounded zyvnox-border zyvnox-border-slate-300 zyvnox-flex zyvnox-items-center zyvnox-justify-center zyvnox-overflow-hidden dark:zyvnox-bg-slate-700 dark:zyvnox-border-slate-600"
        >
          <img
            v-if="customWatermarkUrl"
            :src="customWatermarkUrl"
            :alt="t('upload.watermark')"
            class="zyvnox-w-full zyvnox-h-full zyvnox-object-contain"
          />
          <span v-else class="zyvnox-text-xs zyvnox-text-slate-400">{{ t('common.none') }}</span>
        </div>

        <div class="zyvnox-flex zyvnox-flex-col zyvnox-gap-2">
          <div class="zyvnox-flex zyvnox-gap-2">
            <input
              type="file"
              accept="image/*"
              @change="handleWatermarkUpload"
              class="zyvnox-hidden"
              :id="`watermark-upload-${id}`"
            />

            <label
              :for="`watermark-upload-${id}`"
              class="zyvnox-px-3 zyvnox-py-1.5 zyvnox-text-xs zyvnox-font-medium zyvnox-text-white zyvnox-bg-slate-600 zyvnox-rounded hover:zyvnox-bg-slate-700 zyvnox-cursor-pointer zyvnox-transition-colors"
            >
              {{ customWatermarkUrl ? t('upload.changeImage') : t('upload.selectImage') }}
            </label>

            <button
              type="button"
              @click="handleWatermarkUrlInput"
              class="zyvnox-px-3 zyvnox-py-1.5 zyvnox-text-xs zyvnox-font-medium zyvnox-text-white zyvnox-bg-slate-600 zyvnox-rounded hover:zyvnox-bg-slate-700 zyvnox-cursor-pointer zyvnox-transition-colors"
            >
              {{ t('upload.useUrl') }}
            </button>
          </div>
          <p class="zyvnox-text-[10px] zyvnox-text-slate-500 dark:zyvnox-text-slate-400">
            {{ t('upload.watermarkHint') }}
          </p>
        </div>
      </div>
    </div>

    <div
      class="zyvnox-bg-slate-50 zyvnox-border-1 zyvnox-border-solid zyvnox-border-slate-200 zyvnox-rounded-xl zyvnox-shadow-sm zyvnox-mb-4 zyvnox-transition-colors zyvnox-duration-200 dark:zyvnox-bg-slate-800/50 dark:zyvnox-border-slate-700"
      :class="{
        'zyvnox-border-red-400 dark:zyvnox-border-red-500': errorMessage.length !== 0 || error,
      }"
    >
      <div
        class="zyvnox-p-3 zyvnox-flex zyvnox-flex-col zyvnox-gap-3 md:zyvnox-p-4 md:zyvnox-grid md:zyvnox-grid-cols-2 md:zyvnox-gap-x-6 md:zyvnox-gap-y-4 md:zyvnox-items-start"
        style="grid-template-areas: 'preview info' 'preview buttons'"
      >
        <img
          :src="previewImage"
          :alt="previewAlt"
          class="zyvnox-block zyvnox-w-full zyvnox-aspect-video zyvnox-object-contain zyvnox-rounded-lg zyvnox-border-1 zyvnox-border-solid zyvnox-border-slate-200 zyvnox-shadow-sm zyvnox-transition-transform zyvnox-duration-200 hover:zyvnox-scale-105 md:zyvnox-h-full dark:zyvnox-border-slate-700"
          style="grid-area: preview"
        />

        <input
          :id="id"
          ref="fileInputRef"
          type="file"
          accept="image/*"
          @change="handleFileUpload"
          class="zyvnox-hidden"
          :disabled="props.disabled || isProcessing"
        />

        <div class="zyvnox-flex zyvnox-flex-col zyvnox-gap-3 md:zyvnox-contents">
          <div
            class="zyvnox-w-full zyvnox-box-border zyvnox-grid zyvnox-grid-cols-[auto_1fr] zyvnox-gap-x-4 zyvnox-gap-y-1 zyvnox-p-3 zyvnox-bg-blue-50 zyvnox-rounded-lg zyvnox-text-sm zyvnox-animate-[zyvnox-slideUpFade_400ms_ease-out] dark:zyvnox-bg-blue-900/20"
            style="grid-area: info"
          >
            <template v-if="fileName">
              <span class="zyvnox-font-medium zyvnox-text-slate-600 dark:zyvnox-text-slate-400">{{
                t('upload.name')
              }}</span>
              <span
                class="zyvnox-text-slate-900 zyvnox-font-medium zyvnox-text-right zyvnox-break-words dark:zyvnox-text-slate-100"
              >
                {{ fileName.length > 20 ? fileName.slice(0, 20) + '...' : fileName }}
              </span>
            </template>
            <template v-if="filePixel">
              <span class="zyvnox-font-medium zyvnox-text-slate-600 dark:zyvnox-text-slate-400">{{
                t('upload.pixels')
              }}</span>
              <span
                class="zyvnox-text-slate-900 zyvnox-font-medium zyvnox-text-right zyvnox-break-words dark:zyvnox-text-slate-100"
              >
                {{ filePixel }}
              </span>
            </template>
            <template v-if="fileSize">
              <span class="zyvnox-font-medium zyvnox-text-slate-600 dark:zyvnox-text-slate-400">{{
                t('upload.size')
              }}</span>
              <span
                class="zyvnox-text-slate-900 zyvnox-font-medium zyvnox-text-right zyvnox-break-words dark:zyvnox-text-slate-100"
              >
                {{ fileSize }}
              </span>
            </template>
            <template v-if="fileRatio">
              <span class="zyvnox-font-medium zyvnox-text-slate-600 dark:zyvnox-text-slate-400">{{
                t('upload.ratio')
              }}</span>
              <span
                class="zyvnox-text-slate-900 zyvnox-font-medium zyvnox-text-right zyvnox-break-words dark:zyvnox-text-slate-100"
              >
                {{ fileRatio }}
              </span>
            </template>

            <template v-if="props.watermark?.url === 'upload' && customWatermarkUrl">
              <span class="zyvnox-font-medium zyvnox-text-slate-600 dark:zyvnox-text-slate-400">{{
                t('upload.watermark')
              }}</span>
              <span
                class="zyvnox-text-green-600 zyvnox-font-medium zyvnox-text-right zyvnox-break-words dark:zyvnox-text-green-400"
              >
                {{ customWatermarkName || t('status.active') }}
              </span>
            </template>

            <div
              v-if="isProcessing"
              class="zyvnox-col-span-2 zyvnox-text-center zyvnox-py-2 zyvnox-text-blue-600"
            >
              {{ t('upload.processingImage') }}
            </div>
          </div>

          <div
            class="zyvnox-flex zyvnox-flex-wrap zyvnox-justify-center zyvnox-gap-3 zyvnox-w-full md:zyvnox-self-end"
            style="grid-area: buttons"
          >
            <label
              :for="id"
              class="zyvnox-flex-grow zyvnox-inline-flex zyvnox-items-center zyvnox-justify-center zyvnox-gap-2 zyvnox-px-4 zyvnox-py-2.5 zyvnox-font-medium zyvnox-rounded-lg zyvnox-border-none zyvnox-cursor-pointer zyvnox-transition-all zyvnox-duration-200 hover:-zyvnox-translate-y-0.5 hover:zyvnox-shadow-md disabled:zyvnox-opacity-60 disabled:zyvnox-cursor-not-allowed zyvnox-bg-blue-600 zyvnox-text-white hover:zyvnox-bg-blue-700 dark:zyvnox-bg-blue-500 dark:hover:zyvnox-bg-blue-400"
              :class="{
                'zyvnox-opacity-60 zyvnox-cursor-not-allowed': props.disabled || isProcessing,
              }"
            >
              {{ labels?.btn?.upload ?? t('common.upload') }}
            </label>

            <button
              type="button"
              @click="handleUrlInput"
              :disabled="props.disabled || isProcessing"
              class="zyvnox-flex-grow zyvnox-inline-flex zyvnox-items-center zyvnox-justify-center zyvnox-gap-2 zyvnox-px-4 zyvnox-py-2.5 zyvnox-font-medium zyvnox-rounded-lg zyvnox-border-none zyvnox-cursor-pointer zyvnox-transition-all zyvnox-duration-200 hover:-zyvnox-translate-y-0.5 hover:zyvnox-shadow-md disabled:zyvnox-opacity-60 disabled:zyvnox-cursor-not-allowed zyvnox-bg-slate-600 zyvnox-text-white hover:zyvnox-bg-slate-700 dark:zyvnox-bg-slate-500 dark:hover:zyvnox-bg-slate-400"
            >
              URL
            </button>

            <button
              v-if="modelValue && !props.disabled"
              type="button"
              @click="handleDelete"
              :disabled="isProcessing"
              class="zyvnox-flex-grow zyvnox-inline-flex zyvnox-items-center zyvnox-justify-center zyvnox-gap-2 zyvnox-px-4 zyvnox-py-2.5 zyvnox-font-medium zyvnox-rounded-lg zyvnox-border-none zyvnox-cursor-pointer zyvnox-transition-all zyvnox-duration-200 hover:-zyvnox-translate-y-0.5 hover:zyvnox-shadow-md disabled:zyvnox-opacity-60 disabled:zyvnox-cursor-not-allowed zyvnox-bg-red-500 zyvnox-text-white hover:zyvnox-bg-red-600 dark:zyvnox-bg-red-600 dark:hover:zyvnox-bg-red-500"
            >
              {{ labels?.btn?.remove ?? t('common.delete') }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="zyvnox-px-1">
      <p
        v-if="errorMessage.length !== 0"
        v-for="(err, i) in errorMessage"
        :key="i"
        class="zyvnox-text-sm zyvnox-text-red-500 zyvnox-mt-2 zyvnox-animate-[zyvnox-fadeIn_300ms_ease-out] dark:zyvnox-text-red-400"
      >
        {{ err }}
      </p>

      <p
        v-if="typeof props.error === 'string' && errorMessage.length === 0"
        class="zyvnox-text-sm zyvnox-text-red-500 zyvnox-mt-2 zyvnox-animate-[zyvnox-fadeIn_300ms_ease-out] dark:zyvnox-text-red-400"
      >
        {{ props.error }}
      </p>

      <p
        v-if="Array.isArray(props.error) && errorMessage.length === 0"
        v-for="(err, i) in props.error"
        :key="'ext-' + i"
        class="zyvnox-text-sm zyvnox-text-red-500 zyvnox-mt-2 zyvnox-animate-[zyvnox-fadeIn_300ms_ease-out] dark:zyvnox-text-red-400"
      >
        {{ err }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, inject, computed } from 'vue'
import { type ImageInputProps } from '../../../index'
import { getMessage } from '../../../helpers'
import { getCommonRatio, simplifyRatio, setUID } from '../../../untils'
import { Tooltip } from '../Display'
import { useI18n } from '../../composables/useI18n'
import type { watermarkSize, watermarkMargin, watermarkPosition } from '../../../configs/types'

// -- Props & Injects --
const props = withDefaults(defineProps<ImageInputProps>(), {
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

// -- State --
const fileName = ref('')
const filePixel = ref('')
const fileSize = ref('')
const fileRatio = ref('')
const pixelImage = ref<{ width: number; height: number } | null>(null)
const sizeImage = ref<number | null>(null)
const isProcessing = ref(false)

// Refs for inputs
const fileInputRef = ref<HTMLInputElement | null>(null)

// State for Custom Watermark Upload
const customWatermarkUrl = ref<string | null>(null)
const customWatermarkName = ref<string>('')

const previewImage = ref<string>(
  props.previewImage ||
    'https://static.vecteezy.com/system/resources/thumbnails/005/720/408/small_2x/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg',
)

const sizeValid = ref(true)
const pixelValid = ref(true)
const ratioValid = ref(true)
const errorMessage = ref<string[]>([])

// -- Watcher --
watch(
  () => props.modelValue,
  (newFile) => {
    if (newFile instanceof File) {
      // Logic jika modelValue adalah FILE (Watermarked URL masuk sini juga)
      fileName.value = newFile.name
      sizeImage.value = newFile.size / 1024
      fileSize.value = `${sizeImage.value.toFixed(2)} KB`

      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        previewImage.value = result

        const img = new Image()
        img.onload = () => {
          filePixel.value = `${img.width} x ${img.height}`
          fileRatio.value = getCommonRatio(img.width, img.height)
          pixelImage.value = { width: img.width, height: img.height }
          validateSuccess()
        }
        img.src = result
      }
      reader.readAsDataURL(newFile)
    } else if (typeof newFile === 'string' && newFile) {
      // Logic jika modelValue adalah URL STRING
      previewImage.value = newFile
      fileName.value = newFile.split('/').pop() || newFile
      fileSize.value = 'N/A'

      const img = new Image()
      img.onload = () => {
        filePixel.value = `${img.width} x ${img.height}`
        fileRatio.value = getCommonRatio(img.width, img.height)
        pixelImage.value = { width: img.width, height: img.height }
        validateSuccess()
      }
      img.onerror = () => {
        filePixel.value = 'Invalid'
        fileRatio.value = 'N/A'
        pixelImage.value = null
        validateSuccess()
      }
      img.src = newFile
    } else {
      resetPreview()
    }
  },
  { immediate: true },
)

// -- Handlers --

// MODIFIED: Handle URL Input Logic
async function handleUrlInput() {
  if (props.disabled) return
  const url = prompt(labels.value.placeholder?.url ?? t('placeholder.url'))

  if (url) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      ShowAlert?.('error', t('upload.invalidUrl'), [t('upload.invalidUrlDesc')])
      return
    }

    // CASE 1: TIDAK ADA WATERMARK -> Kirim string URL biasa
    if (!props.watermark || !customWatermarkUrl.value) {
      emit('update:modelValue', url, props.id)
      return
    }

    // CASE 2: ADA WATERMARK -> Proses Download & Watermark
    isProcessing.value = true
    try {
      // 1. Fetch URL -> Blob (Perlu dukungan CORS dari server gambar)
      const response = await fetch(url, { mode: 'cors' })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const blob = await response.blob()

      // Ambil nama file dari URL atau default
      const urlFileName = url.split('/').pop()?.split('?')[0] || 'downloaded-image.png'
      const fileType = blob.type || 'image/png'

      // Convert ke File Object
      const file = new File([blob], urlFileName, { type: fileType })

      // 2. Apply Watermark
      const finalFile = await applyWatermark(file)

      // 3. Emit File Baru (Sekarang berupa File Object, bukan URL lagi)
      emit('update:modelValue', finalFile, props.id)
    } catch (e: any) {
      console.error(e)

      let errorMsg = t('upload.processingError')

      // Deteksi error CORS
      if (e.name === 'TypeError' || e.message.includes('fetch')) {
        errorMsg = t('upload.corsError')
        // Fallback: Kirim URL asli jika gagal download/watermark
        emit('update:modelValue', url, props.id)
        ShowAlert?.('warning', t('upload.watermarkSkipped'), [errorMsg])
      } else {
        ShowAlert?.('error', t('status.error'), [errorMsg])
      }
    } finally {
      isProcessing.value = false
    }
  }
}

function handleDelete() {
  if (props.disabled) return
  emit('update:modelValue', null, props.id)
  emit('remove:error', props.id)
  if (fileInputRef.value) fileInputRef.value.value = ''
}

// =========================================================================
// WATERMARK UPLOAD CONFIGURATION
// =========================================================================

function handleWatermarkUpload(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    if (!file.type.startsWith('image/')) {
      ShowAlert?.('error', t('upload.invalidFileType'), [t('upload.watermarkHint')])
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      customWatermarkUrl.value = e.target?.result as string
      customWatermarkName.value = file.name
    }
    reader.readAsDataURL(file)
  }
}

function handleWatermarkUrlInput() {
  const url = prompt(t('upload.enterWatermarkUrl'))
  if (url) {
    if (url.startsWith('http') || url.startsWith('data:image')) {
      customWatermarkUrl.value = url
      customWatermarkName.value = 'URL Image'
    } else {
      ShowAlert?.('error', t('upload.invalidUrl'), [t('upload.invalidUrlDesc')])
    }
  }
}

// =========================================================================
// WATERMARK APPLICATION LOGIC
// =========================================================================

function loadImage(src: string, isCrossOrigin: boolean = false): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    if (isCrossOrigin && !src.startsWith('data:')) {
      img.crossOrigin = 'anonymous'
    }
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`))
    img.src = src
  })
}

async function applyWatermark(file: File): Promise<File> {
  if (!props.watermark) return file

  // 1. Determine Watermark Source URL
  let wmSourceUrl = ''

  if (props.watermark.url === 'upload') {
    if (!customWatermarkUrl.value) {
      throw new Error('Please upload a watermark image first.')
    }
    wmSourceUrl = customWatermarkUrl.value
  } else {
    wmSourceUrl = props.watermark.url
  }

  const wm = props.watermark
  const originalImageUrl = URL.createObjectURL(file)

  try {
    const [originalImg, watermarkImg] = await Promise.all([
      loadImage(originalImageUrl, false),
      loadImage(wmSourceUrl, true),
    ])

    const canvas = document.createElement('canvas')
    canvas.width = originalImg.width
    canvas.height = originalImg.height
    const ctx = canvas.getContext('2d')

    if (!ctx) return file

    // 2. Draw Base Image
    ctx.drawImage(originalImg, 0, 0)

    // 3. Configure Watermark Style
    const alpha = wm.opacity ?? (wm.transparant ? wm.transparant / 100 : 1)
    ctx.globalAlpha = Math.max(0, Math.min(1, alpha))

    // Dimensions
    let wmWidth = watermarkImg.width
    let wmHeight = watermarkImg.height

    if (typeof wm.size === 'number') {
      wmWidth = wm.size
      wmHeight = wm.size
    } else if (wm.size && typeof wm.size !== 'number') {
      const s = wm.size as watermarkSize
      wmWidth = s.width ?? watermarkImg.width
      wmHeight = s.height ?? watermarkImg.height
    }

    // Resolve Margins
    let mt = 0,
      mb = 0,
      ml = 0,
      mr = 0
    if (typeof wm.margin === 'number') {
      mt = mb = ml = mr = wm.margin
    } else if (wm.margin) {
      const m = wm.margin as watermarkMargin
      mt = m.top ?? 0
      mb = m.bottom ?? 0
      ml = m.left ?? 0
      mr = m.right ?? 0
    }

    // Coordinates
    let x = 0
    let y = 0
    const canvasW = canvas.width
    const canvasH = canvas.height

    if (wm.position && typeof wm.position === 'object' && 'x' in wm.position) {
      const m = wm.position as watermarkPosition
      x = m.x
      y = m.y
    } else {
      const pos = (wm.position as string) || 'bottom-right'
      switch (pos) {
        case 'top-left':
          x = ml
          y = mt
          break
        case 'top-right':
          x = canvasW - wmWidth - mr
          y = mt
          break
        case 'bottom-left':
          x = ml
          y = canvasH - wmHeight - mb
          break
        case 'bottom-right':
          x = canvasW - wmWidth - mr
          y = canvasH - wmHeight - mb
          break
        case 'full':
          x = 0
          y = 0
          wmWidth = canvasW
          wmHeight = canvasH
          break
        default:
          x = canvasW - wmWidth - mr
          y = canvasH - wmHeight - mb
      }
    }

    // Rotation & Drawing
    ctx.save()
    if (wm.rotate) {
      const cx = x + wmWidth / 2
      const cy = y + wmHeight / 2
      ctx.translate(cx, cy)
      ctx.rotate((wm.rotate * Math.PI) / 180)
      ctx.translate(-cx, -cy)
    }

    ctx.drawImage(watermarkImg, x, y, wmWidth, wmHeight)
    ctx.restore()
    ctx.globalAlpha = 1.0

    // Output
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(new File([blob], file.name, { type: file.type }))
        } else {
          reject(new Error('Canvas toBlob failed'))
        }
      }, file.type)
    })
  } catch (error: any) {
    throw error
  } finally {
    URL.revokeObjectURL(originalImageUrl)
  }
}

async function handleFileUpload(event: Event) {
  if (props.disabled) return
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (file) {
    // 1. Validation
    const allowedTypes = props.validate?.allowedTypes ?? [
      'png',
      'jpg',
      'jpeg',
      'gif',
      'bmp',
      'webp',
      'heif',
      'heic',
      'tiff',
      'tif',
      'svg',
      'avif',
      'ico',
      'jfif',
    ]
    const ext = file.name.split('.').pop()?.toLowerCase()
    if (!ext || !allowedTypes.map((t) => t.toLowerCase()).includes(ext)) {
      ShowAlert?.('error', t('upload.invalidFileType'), [
        getMessage('imageType', {}, props.lang ?? 'en') + ` (${allowedTypes.join(', ')})`,
      ])
      if (fileInputRef.value) fileInputRef.value.value = ''
      return
    }

    // 2. Processing
    isProcessing.value = true
    let finalFile = file

    try {
      if (props.watermark && customWatermarkUrl.value) {
        finalFile = await applyWatermark(file)
      }
      emit('update:modelValue', finalFile, props.id)
    } catch (e: any) {
      console.error(e)
      if (e.message === 'Please upload a watermark image first.') {
        ShowAlert?.('error', t('upload.watermarkMissing'), [t('upload.watermarkMissingHint')])
      } else {
        ShowAlert?.('error', t('status.error'), [t('upload.processingError')])
      }
      if (fileInputRef.value) fileInputRef.value.value = ''
      emit('update:modelValue', null, props.id)
    } finally {
      isProcessing.value = false
    }
  }
}

// =========================================================================
// VALIDATION LOGIC
// =========================================================================

function validateSuccess() {
  if (!props.validate) {
    errorMessage.value = []
    emit('remove:error', props.id)
    return
  }

  const errors: string[] = []

  // Type Validation
  if (props.validate.allowedTypes && props.modelValue instanceof File) {
    const ext = props.modelValue.name.split('.').pop()?.toLowerCase()
    const allowed = props.validate.allowedTypes.map((t) => t.toLowerCase())
    if (!ext || !allowed.includes(ext)) {
      errors.push(getMessage('imageType', {}, props.lang ?? 'en') + ` (${allowed.join(', ')})`)
    }
  }

  // Size Validation
  if (props.validate.maxSize && sizeImage.value) {
    sizeValid.value = sizeImage.value <= props.validate.maxSize
    if (!sizeValid.value) {
      errors.push(getMessage('imageMaxSize', { max: props.validate.maxSize }, props.lang ?? 'en'))
    }
  }

  // Pixel Validation
  if (props.validate.pixel && pixelImage.value) {
    const p = props.validate.pixel
    const w = pixelImage.value.width
    const h = pixelImage.value.height

    if (p.minWidth && w < p.minWidth)
      errors.push(getMessage('imageMinWidth', { min: p.minWidth }, props.lang ?? 'en'))
    if (p.minHeight && h < p.minHeight)
      errors.push(getMessage('imageMinHeight', { min: p.minHeight }, props.lang ?? 'en'))
    if (p.maxWidth && w > p.maxWidth)
      errors.push(getMessage('imageMaxWidth', { max: p.maxWidth }, props.lang ?? 'en'))
    if (p.maxHeight && h > p.maxHeight)
      errors.push(getMessage('imageMaxHeight', { max: p.maxHeight }, props.lang ?? 'en'))

    if (p.width && w !== p.width)
      errors.push(
        getMessage('imagePixel', { width: p.width, height: p.height ?? h }, props.lang ?? 'en'),
      )
    if (p.height && h !== p.height)
      errors.push(
        getMessage('imagePixel', { width: p.width ?? w, height: p.height }, props.lang ?? 'en'),
      )
  }

  // Ratio Validation
  if (props.validate.ratio && pixelImage.value) {
    const expectedW = props.validate.ratio.Width
    const expectedH = props.validate.ratio.Height
    const curW = pixelImage.value.width
    const curH = pixelImage.value.height

    const simpCur = simplifyRatio(curW, curH)
    const simpExp = simplifyRatio(expectedW, expectedH)
    let matched = simpCur.w === simpExp.w && simpCur.h === simpExp.h

    if (!matched) {
      const ratioCur = curW / curH
      const ratioExp = expectedW / expectedH
      matched = Math.abs(ratioCur - ratioExp) <= 0.01
    }

    ratioValid.value = matched
    if (!ratioValid.value) {
      errors.push(
        getMessage(
          'imageRatio',
          { w: String(expectedW), h: String(expectedH) },
          props.lang ?? 'en',
        ),
      )
    }
  }

  errorMessage.value = errors
  if (errors.length) emit('push:error', errors, props.id)
  else emit('remove:error', props.id)
}

function resetPreview() {
  fileName.value = ''
  filePixel.value = ''
  fileSize.value = ''
  fileRatio.value = ''
  errorMessage.value = []
  previewImage.value =
    props.previewImage ||
    'https://static.vecteezy.com/system/resources/thumbnails/005/720/408/small_2x/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg'
}
</script>
