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
            v-if="customWatermarkPreview"
            :src="customWatermarkPreview"
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
              @change="handleWatermarkFileSelect"
              class="zyvnox-hidden"
              id="watermark-upload-input"
            />
            <label
              for="watermark-upload-input"
              class="zyvnox-px-3 zyvnox-py-1.5 zyvnox-text-xs zyvnox-font-medium zyvnox-text-white zyvnox-bg-slate-600 zyvnox-rounded hover:zyvnox-bg-slate-700 zyvnox-cursor-pointer zyvnox-transition-colors"
            >
              {{ customWatermarkPreview ? t('upload.changeImage') : t('upload.selectImage') }}
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
      class="zyvnox-bg-slate-50 zyvnox-border-2 zyvnox-border-dashed zyvnox-border-slate-300 zyvnox-rounded-xl zyvnox-p-6 zyvnox-transition-colors zyvnox-duration-200 hover:zyvnox-bg-slate-100 hover:zyvnox-border-blue-500 dark:zyvnox-bg-slate-800 dark:zyvnox-border-slate-600 dark:hover:zyvnox-bg-slate-700 dark:hover:zyvnox-border-blue-400"
      :class="{ 'zyvnox-border-red-300 dark:zyvnox-border-red-800': allErrors.length !== 0 }"
    >
      <div
        v-if="localPreviewUrls.length > 0"
        class="zyvnox-grid zyvnox-grid-cols-2 zyvnox-gap-4 zyvnox-mb-6 min-[480px]:zyvnox-grid-cols-3 md:zyvnox-grid-cols-4 lg:zyvnox-grid-cols-5"
      >
        <div
          v-for="(src, index) in localPreviewUrls"
          :key="index"
          class="zyvnox-relative zyvnox-rounded-lg zyvnox-overflow-hidden zyvnox-shadow-sm zyvnox-transition-all zyvnox-duration-200 zyvnox-group hover:zyvnox-scale-105 hover:zyvnox-shadow-lg zyvnox-animate-[zyvnox-popIn_0.4s_ease-out_backwards]"
          :style="{ animationDelay: `${index * 50}ms` }"
        >
          <img
            :src="src"
            :alt="`${previewAlt} ${index + 1}`"
            class="zyvnox-block zyvnox-w-full zyvnox-aspect-square zyvnox-object-cover zyvnox-bg-white dark:zyvnox-bg-transparent"
          />
          <button
            v-if="!disabled"
            @click="removeImage(index)"
            class="zyvnox-absolute zyvnox-top-2 zyvnox-right-2 zyvnox-w-7 zyvnox-h-7 zyvnox-pb-[5px] zyvnox-flex zyvnox-items-center zyvnox-justify-center zyvnox-text-xl zyvnox-font-bold zyvnox-leading-none zyvnox-text-white zyvnox-bg-red-500/80 zyvnox-backdrop-blur-sm zyvnox-rounded-full zyvnox-border-2 zyvnox-border-white zyvnox-cursor-pointer zyvnox-opacity-0 zyvnox-scale-50 zyvnox-transition-all zyvnox-duration-200 hover:zyvnox-bg-red-600 hover:zyvnox-scale-110 hover:zyvnox-rotate-90 group-hover:zyvnox-opacity-100 group-hover:zyvnox-scale-100"
            :aria-label="t('common.delete')"
          >
            &times;
          </button>
        </div>
      </div>

      <div
        v-else
        class="zyvnox-text-center zyvnox-py-8 zyvnox-px-4 zyvnox-text-slate-400 dark:zyvnox-text-slate-500"
      >
        <p>{{ labels?.message?.noItemSelected ?? t('message.noItemSelected') }}</p>
      </div>

      <div class="zyvnox-text-center zyvnox-mt-4">
        <input
          :id="id"
          type="file"
          accept="image/*"
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
          class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-px-5 zyvnox-py-2.5 zyvnox-ml-2 zyvnox-font-medium zyvnox-border-none zyvnox-rounded-lg zyvnox-text-white zyvnox-bg-slate-600 zyvnox-cursor-pointer zyvnox-transition-all zyvnox-duration-200 hover:zyvnox-bg-slate-700 hover:zyvnox-scale-105 hover:zyvnox-shadow-lg disabled:zyvnox-opacity-60 disabled:zyvnox-cursor-not-allowed dark:zyvnox-bg-slate-500 dark:hover:zyvnox-bg-slate-400"
        >
          {{ t('upload.useUrl') }}
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
import { ref, watch, inject, computed } from 'vue'
import type {
  ImageArrayInputProps,
  watermarkSize,
  watermarkMargin,
  watermarkPosition,
} from '../../../configs/types'
import { getMessage } from '../../../helpers'
import { simplifyRatio, setUID } from '../../../untils'
import { Tooltip } from '../Display'
import { useI18n } from '../../composables/useI18n'

// --- PROPS & EMITS ---
const props = withDefaults(defineProps<ImageArrayInputProps>(), {
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
const localPreviewUrls = ref<string[]>([])
const localErrors = ref<string[]>([])

// State khusus untuk Custom Watermark (jika props.watermark.url === 'upload')
const customWatermarkSource = ref<string | File | null>(null)
const customWatermarkPreview = ref<string>('')

// --- COMPUTED PROPERTIES ---

const allErrors = computed(() => {
  if (localErrors.value.length > 0) {
    return localErrors.value
  }
  if (typeof props.error === 'string') {
    return [props.error]
  }
  if (Array.isArray(props.error)) {
    return props.error
  }
  return []
})

const isAddButtonDisabled = computed(() => {
  if (props.disabled) return true
  return !!(
    props.validate?.maxFiles &&
    props.modelValue &&
    props.modelValue.length >= props.validate.maxFiles
  )
})

// --- WATCHERS ---
watch(
  () => props.modelValue,
  async (newValues) => {
    if (!newValues || newValues.length === 0) {
      localPreviewUrls.value = props.previewImages || []
      validateAllFiles()
      return
    }

    const previewPromises = newValues.map((item) => {
      return new Promise<string>((resolve) => {
        if (typeof item === 'string') {
          resolve(item)
        } else if (item instanceof File) {
          const reader = new FileReader()
          reader.onload = (e) => resolve(e.target?.result as string)
          reader.onerror = () => resolve('') // Resolve with empty string on error
          reader.readAsDataURL(item)
        } else {
          resolve('')
        }
      })
    })

    localPreviewUrls.value = await Promise.all(previewPromises)
    validateAllFiles()
  },
  { immediate: true, deep: true },
)

// --- METHODS ---

// =========================================================================
// CUSTOM WATERMARK HANDLERS
// =========================================================================

function handleWatermarkUrlInput() {
  const url = prompt(t('upload.watermarkUrlPrompt'))
  if (url) {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      customWatermarkSource.value = url
      customWatermarkPreview.value = url
    } else {
      ShowAlert?.('error', t('upload.invalidUrl'), [t('upload.invalidUrlDesc')])
    }
  }
}

function handleWatermarkFileSelect(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    customWatermarkSource.value = file
    // Buat URL sementara untuk preview
    customWatermarkPreview.value = URL.createObjectURL(file)
  }
  // Reset value agar bisa select file yang sama ulang jika perlu
  target.value = ''
}

// =========================================================================
// WATERMARK LOGIC
// =========================================================================

function loadImage(src: string, isCrossOrigin: boolean = false): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    if (isCrossOrigin) {
      img.crossOrigin = 'anonymous'
    }
    img.onload = () => resolve(img)
    img.onerror = (err) => {
      console.error('Failed to load image:', src, err)
      reject(new Error(`Failed to load image: ${src}`))
    }
    img.src = src
  })
}

async function applyWatermark(file: File): Promise<File> {
  // 1. Return original file if no watermark prop
  if (!props.watermark) {
    return file
  }

  let watermarkSrcUrl = ''

  // 2. Determine Watermark Source
  if (props.watermark.url === 'upload') {
    // Case A: User must have uploaded/set a watermark source
    if (!customWatermarkSource.value) {
      // Jika user belum set watermark tapi mencoba upload gambar utama,
      // Kita bisa lemparkan error atau kembalikan file asli.
      // Di sini kita kembalikan file asli, tapi log warning.
      console.warn('Watermark config is "upload" but no watermark image set. Skipping watermark.')
      return file
    }

    if (customWatermarkSource.value instanceof File) {
      watermarkSrcUrl = URL.createObjectURL(customWatermarkSource.value)
    } else if (typeof customWatermarkSource.value === 'string') {
      watermarkSrcUrl = customWatermarkSource.value
    } else {
      // Unexpected type (shouldn't happen) — skip watermark to avoid runtime/type errors
      console.warn('Unsupported watermark source type. Skipping watermark.')
      return file
    }
  } else {
    // Case B: URL is predefined string
    watermarkSrcUrl = props.watermark.url
  }

  const wmConfig = props.watermark
  const originalImageUrl = URL.createObjectURL(file)

  try {
    // 3. Load images
    const [originalImg, watermarkImg] = await Promise.all([
      loadImage(originalImageUrl, false),
      loadImage(watermarkSrcUrl, true),
    ])

    // 4. Setup Canvas
    const canvas = document.createElement('canvas')
    canvas.width = originalImg.width
    canvas.height = originalImg.height
    const ctx = canvas.getContext('2d')
    if (!ctx) return file

    // 5. Draw Original Image
    ctx.drawImage(originalImg, 0, 0)

    // 6. Calculate Watermark Size
    let wmWidth = watermarkImg.width
    let wmHeight = watermarkImg.height

    if (typeof wmConfig.size === 'number') {
      wmWidth = wmConfig.size
      wmHeight = wmConfig.size
    } else if (wmConfig.size) {
      const mc = wmConfig.size as watermarkSize
      wmWidth = mc.width
      wmHeight = mc.height
    }

    // 7. Handle Margins
    let mt = 0,
      mr = 0,
      mb = 0,
      ml = 0
    if (wmConfig.margin !== undefined) {
      if (typeof wmConfig.margin === 'number') {
        mt = mr = mb = ml = wmConfig.margin
      } else {
        const mc = wmConfig.margin as watermarkMargin
        mt = mc.top ?? 0
        mr = mc.right ?? 0
        mb = mc.bottom ?? 0
        ml = mc.left ?? 0
      }
    }

    // 8. Calculate Position (X, Y)
    let x = 0
    let y = 0
    const canvasW = canvas.width
    const canvasH = canvas.height
    const position = wmConfig.position ?? 'bottom-right' // default

    if (typeof position === 'string') {
      if (position === 'full') {
        x = 0
        y = 0
        wmWidth = canvasW
        wmHeight = canvasH
      } else {
        switch (position) {
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
        }
      }
    } else if (typeof position === 'object') {
      const mc = position as watermarkPosition
      x = mc.x
      y = mc.y
    }

    // 9. Draw Watermark with Transformations
    ctx.save()

    let alpha = 1.0
    if (wmConfig.opacity !== undefined) {
      alpha = wmConfig.opacity
    } else if (wmConfig.transparant !== undefined) {
      alpha = wmConfig.transparant / 100
    }
    ctx.globalAlpha = alpha

    const centerX = x + wmWidth / 2
    const centerY = y + wmHeight / 2

    ctx.translate(centerX, centerY)

    if (wmConfig.rotate) {
      ctx.rotate((wmConfig.rotate * Math.PI) / 180)
    }

    ctx.drawImage(watermarkImg, -wmWidth / 2, -wmHeight / 2, wmWidth, wmHeight)

    ctx.restore()

    // 10. Convert back to File
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) {
          const watermarkedFile = new File([blob], file.name, { type: file.type })
          resolve(watermarkedFile)
        } else {
          reject(new Error('Canvas toBlob failed'))
        }
      }, file.type)
    })
  } catch (error) {
    console.error(`Watermark application failed for ${file.name}:`, error)
    ShowAlert?.('error', `${t('upload.watermark')} (${file.name})`, [t('upload.watermarkError')])
    return file
  } finally {
    // Cleanup temporary URLs
    URL.revokeObjectURL(originalImageUrl)
    if (props.watermark.url === 'upload' && customWatermarkSource.value instanceof File) {
      URL.revokeObjectURL(watermarkSrcUrl)
    }
  }
}

// =========================================================================
// MAIN UPLOAD HANDLERS
// =========================================================================

// MODIFIED: Handle URL Input Logic untuk Multiple Upload
async function handleUrlInput() {
  if (props.disabled) return

  // 1. Validasi Batas Maksimal File
  if (isAddButtonDisabled.value) {
    ShowAlert?.(
      'error',
      getMessage('imageMaxFiles', { max: props.validate!.maxFiles! }, props.lang ?? 'en'),
    )
    return
  }

  const url = prompt(labels.value.placeholder?.url ?? t('placeholder.url'))

  if (url) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      ShowAlert?.('error', t('upload.invalidUrl'), [t('upload.invalidUrlDesc')])
      return
    }

    const currentFiles = props.modelValue || []

    // CASE A: TIDAK ADA WATERMARK -> Tambahkan string URL langsung
    if (!props.watermark || !customWatermarkSource) {
      emit('update:modelValue', [...currentFiles, url])
      return
    }

    // CASE B: ADA WATERMARK -> Download & Proses
    try {
      // Kita anggap sedang loading (opsional: tambahkan state isProcessing jika perlu)

      // 1. Fetch Gambar (CORS harus diizinkan oleh server tujuan)
      const response = await fetch(url, { mode: 'cors' })
      if (!response.ok) throw new Error('Failed to fetch image')

      const blob = await response.blob()

      // Nama file unik untuk array
      const urlFileName = url.split('/').pop()?.split('?')[0] || `image-${Date.now()}.png`
      const file = new File([blob], urlFileName, { type: blob.type || 'image/png' })

      // 2. Tempel Watermark
      const watermarkedFile = await applyWatermark(file)

      // 3. Update ModelValue dengan File baru
      emit('update:modelValue', [...currentFiles, watermarkedFile])
    } catch (e: any) {
      console.error('URL Watermark Error:', e)

      // Fallback: Jika gagal karena CORS, tanya user apakah ingin lanjut tanpa watermark
      const confirmOriginal = confirm(t('upload.corsFallbackPrompt'))

      if (confirmOriginal) {
        emit('update:modelValue', [...currentFiles, url])
      }
    }
  }
}

async function handleFileUpload(event: Event) {
  if (props.disabled) return

  const target = event.target as HTMLInputElement
  const files = target.files
  if (!files || files.length === 0) return

  const currentFiles = props.modelValue || []
  const maxFiles = props.validate?.maxFiles

  if (maxFiles && currentFiles.length + files.length > maxFiles) {
    ShowAlert?.('error', getMessage('imageMaxFiles', { max: maxFiles }, props.lang ?? 'en'))
    target.value = ''
    return
  }

  const validFiles: File[] = []
  const allowedTypes = props.validate?.allowedTypes?.map((t) => t.toLowerCase()) ?? []

  // 1. Validate Types
  for (const file of Array.from(files)) {
    const ext = file.name.split('.').pop()?.toLowerCase()
    if (allowedTypes.length > 0 && (!ext || !allowedTypes.includes(ext))) {
      ShowAlert?.('error', t('upload.invalidFileType'), [
        getMessage('imageType', {}, props.lang ?? 'en') +
          ` (${props.validate?.allowedTypes?.join(', ')})`,
      ])
      continue
    }
    validFiles.push(file)
  }

  // 2. Apply Watermark (Parallel)
  let finalFiles: File[] = []
  if (props.watermark && customWatermarkSource.value && validFiles.length > 0) {
    try {
      const watermarkPromises = validFiles.map((file) => applyWatermark(file))
      finalFiles = await Promise.all(watermarkPromises)
    } catch (error) {
      console.error('Batch watermarking process failed:', error)
      target.value = ''
      return
    }
  } else {
    finalFiles = validFiles
  }

  // 3. Emit Result
  if (finalFiles.length > 0) {
    emit('update:modelValue', [...currentFiles, ...finalFiles])
  }

  target.value = ''
}

function removeImage(index: number) {
  if (props.disabled) return
  const updatedValue = [...(props.modelValue || [])]
  updatedValue.splice(index, 1)
  emit('update:modelValue', updatedValue)
}

// --- VALIDATION LOGIC ---
async function validateAllFiles() {
  if (!props.validate || !props.modelValue || props.modelValue.length === 0) {
    localErrors.value = []
    emit('remove:error', props.id)
    return
  }

  const errors: string[] = []

  // 🔹 Max files validation
  if (props.validate.maxFiles && props.modelValue.length > props.validate.maxFiles) {
    errors.push(getMessage('imageMaxFiles', { max: props.validate.maxFiles }, props.lang ?? 'en'))
  }

  const validationPromises = props.modelValue.map((fileOrString, index) =>
    validateSingleFile(fileOrString, index + 1),
  )

  const results = await Promise.all(validationPromises)
  results.forEach((fileErrors) => errors.push(...fileErrors))

  localErrors.value = [...new Set(errors)]

  if (localErrors.value.length > 0) {
    emit('push:error', localErrors.value, props.id)
  } else {
    emit('remove:error', props.id)
  }
}

async function validateSingleFile(
  fileOrString: File | string,
  fileNumber: number,
): Promise<string[]> {
  const fileErrors: string[] = []
  if (!(fileOrString instanceof File)) {
    return []
  }

  const file = fileOrString
  const v = props.validate!

  // 🔹 File Type
  if (v.allowedTypes) {
    const ext = file.name.split('.').pop()?.toLowerCase()
    if (!ext || !v.allowedTypes.map((t) => t.toLowerCase()).includes(ext)) {
      fileErrors.push(
        `File ${fileNumber}: ` +
          getMessage('imageType', {}, props.lang ?? 'en') +
          ` (${v.allowedTypes.join(', ')})`,
      )
    }
  }

  // 🔹 Size
  if (v.maxSize) {
    const fileSizeKB = file.size / 1024
    if (fileSizeKB > v.maxSize) {
      fileErrors.push(
        `File ${fileNumber}: ` + getMessage('imageMaxSize', { max: v.maxSize }, props.lang ?? 'en'),
      )
    }
  }

  // 🔹 Pixel & Ratio
  if (v.pixel || v.ratio) {
    const dimensions = await getImageDimensions(file)
    const w = dimensions.width
    const h = dimensions.height

    if (v.pixel) {
      const p = v.pixel
      if (
        ('minWidth' in p && p.minWidth && w < p.minWidth) ||
        ('minHeight' in p && p.minHeight && h < p.minHeight) ||
        ('maxWidth' in p && p.maxWidth && w > p.maxWidth) ||
        ('maxHeight' in p && p.maxHeight && h > p.maxHeight)
      ) {
        fileErrors.push(`File ${fileNumber}: Invalid dimensions.`)
      }
      if (
        ('width' in p && p.width && w !== p.width) ||
        ('height' in p && p.height && h !== p.height)
      ) {
        fileErrors.push(
          `File ${fileNumber}: ` +
            getMessage(
              'imagePixel',
              { width: p.width ?? w, height: p.height ?? h },
              props.lang ?? 'en',
            ),
        )
      }
    }

    if (v.ratio) {
      const expectedW = v.ratio.Width
      const expectedH = v.ratio.Height
      const simpCur = simplifyRatio(w, h)
      const simpExp = simplifyRatio(expectedW, expectedH)

      let matched = simpCur.w === simpExp.w && simpCur.h === simpExp.h
      if (!matched) {
        const ratioCur = w / h
        const ratioExp = expectedW / expectedH
        matched = Math.abs(ratioCur - ratioExp) <= 0.01
      }
      if (!matched) {
        fileErrors.push(
          `File ${fileNumber}: ` +
            getMessage(
              'imageRatio',
              { w: String(expectedW), h: String(expectedH) },
              props.lang ?? 'en',
            ),
        )
      }
    }
  }

  return fileErrors
}

function getImageDimensions(file: File): Promise<{ width: number; height: number }> {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => resolve({ width: img.width, height: img.height })
      img.onerror = () => resolve({ width: 0, height: 0 })
      img.src = e.target?.result as string
    }
    reader.onerror = () => resolve({ width: 0, height: 0 })
    reader.readAsDataURL(file)
  })
}
</script>
