<template>
  <Teleport to="body">
    <Loader ref="loaderRef" class="zyvnox-fixed zyvnox-inset-0 zyvnox-z-[20000000]" />
  </Teleport>
  <transition name="zyvnox-modal-overlay" appear>
    <div
      v-if="show"
      class="zyvnox-fixed zyvnox-inset-0 zyvnox-z-[10000000] zyvnox-flex zyvnox-items-center zyvnox-justify-center zyvnox-p-4 zyvnox-bg-black/60 zyvnox-backdrop-blur-sm"
      @click.self="close"
    >
      <transition name="zyvnox-modal-container" appear>
        <div
          class="zyvnox-w-full zyvnox-max-w-3xl zyvnox-bg-white zyvnox-rounded-xl zyvnox-shadow-2xl zyvnox-overflow-hidden dark:zyvnox-bg-slate-800"
        >
          <div
            class="zyvnox-p-5 zyvnox-border-b zyvnox-border-slate-200 zyvnox-flex zyvnox-justify-between zyvnox-items-center dark:zyvnox-border-slate-700"
          >
            <h3
              class="zyvnox-text-lg zyvnox-font-bold zyvnox-text-slate-900 dark:zyvnox-text-slate-100"
            >
              {{ title }}
            </h3>
            <button
              @click="close"
              :title="t('common.close')"
              class="zyvnox-text-slate-400 hover:zyvnox-text-slate-600"
            >
              ✕
            </button>
          </div>

          <div
            class="zyvnox-flex zyvnox-border-b zyvnox-border-slate-200 dark:zyvnox-border-slate-700"
          >
            <button
              v-for="tab in availableTabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="[
                'zyvnox-flex-1 zyvnox-py-3 zyvnox-text-sm zyvnox-font-semibold zyvnox-transition-all',
                activeTab === tab.id
                  ? 'zyvnox-border-b-2 zyvnox-border-blue-600 zyvnox-text-blue-600'
                  : 'zyvnox-text-slate-500 hover:zyvnox-bg-slate-50 dark:hover:zyvnox-bg-slate-700',
              ]"
            >
              {{ tab.label }}
            </button>
          </div>

          <div class="zyvnox-p-6 zyvnox-max-h-[60vh] zyvnox-overflow-y-auto">
            <div v-if="activeTab === 'gallery'" class="zyvnox-space-y-4">
              <div v-if="isLoadingGallery" class="zyvnox-flex zyvnox-justify-center zyvnox-p-10">
                <div
                  class="zyvnox-animate-spin zyvnox-rounded-full zyvnox-h-8 zyvnox-w-8 zyvnox-border-b-2 zyvnox-border-blue-600"
                ></div>
              </div>
              <div
                v-else-if="galleryItems.length === 0"
                class="zyvnox-text-center zyvnox-p-10 zyvnox-text-slate-400"
              >
                {{ t('editor.embedGalleryEmpty') }}
              </div>
              <div v-else class="zyvnox-grid zyvnox-grid-cols-3 zyvnox-gap-4 sm:zyvnox-grid-cols-4">
                <div
                  v-for="item in galleryItems"
                  :key="item.url"
                  class="zyvnox-relative zyvnox-group zyvnox-aspect-square zyvnox-bg-slate-100 zyvnox-rounded-lg zyvnox-overflow-hidden zyvnox-border-2 zyvnox-transition-all"
                  :class="
                    selectedFromGallery?.url === item.url
                      ? 'zyvnox-border-blue-500'
                      : 'zyvnox-border-transparent'
                  "
                >
                  <img
                    v-if="mode === 'image'"
                    :src="item.url"
                    class="zyvnox-w-full zyvnox-h-full zyvnox-object-cover zyvnox-cursor-pointer"
                    @click="selectFromGallery(item)"
                  />
                  <video
                    v-else-if="mode === 'video'"
                    :src="item.url"
                    class="zyvnox-w-full zyvnox-h-full zyvnox-object-cover zyvnox-cursor-pointer zyvnox-bg-black"
                    @click="selectFromGallery(item)"
                    preload="metadata"
                    muted
                    onmouseover="this.play()"
                    onmouseout="this.pause(); this.currentTime=0;"
                  ></video>

                  <div
                    class="zyvnox-absolute zyvnox-top-2 zyvnox-left-2 2xl:zyvnox-opacity-0 2xl:group-hover:zyvnox-opacity-100 zyvnox-transition-opacity"
                  >
                    <button
                      @click.stop="confirmDelete(item)"
                      class="zyvnox-p-1.5 zyvnox-bg-red-600 hover:zyvnox-bg-red-700 zyvnox-text-white zyvnox-rounded-md zyvnox-shadow-sm"
                      :title="t('common.delete')"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="activeTab === 'upload'" class="zyvnox-space-y-4">
              <div
                class="zyvnox-border-2 zyvnox-border-dashed zyvnox-rounded-xl zyvnox-p-8 zyvnox-text-center zyvnox-transition-colors zyvnox-cursor-pointer"
                :class="[
                  isDragging
                    ? 'zyvnox-border-blue-500 zyvnox-bg-blue-50 dark:zyvnox-bg-blue-900/20'
                    : 'zyvnox-border-slate-300 hover:zyvnox-border-blue-400',
                ]"
                @click="triggerFileInput"
                @dragover.prevent="isDragging = true"
                @dragleave.prevent="isDragging = false"
                @drop.prevent="handleDrop"
              >
                <input
                  type="file"
                  ref="fileInput"
                  class="zyvnox-hidden"
                  @change="handleFileSelect"
                  :accept="mode === 'image' ? 'image/*' : 'video/*'"
                />

                <div v-if="!uploadPreview">
                  <div class="zyvnox-mb-3 zyvnox-flex zyvnox-justify-center">
                    <svg
                      class="zyvnox-w-10 zyvnox-h-10 zyvnox-text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  </div>
                  <p class="zyvnox-text-slate-600 dark:zyvnox-text-slate-400">
                    {{ isDragging ? t('upload.dragDrop') : t('upload.orClick') }}
                  </p>
                </div>

                <div v-else class="zyvnox-flex zyvnox-flex-col zyvnox-items-center">
                  <img
                    v-if="mode === 'image'"
                    :src="uploadPreview"
                    class="zyvnox-max-h-48 zyvnox-rounded zyvnox-shadow-md"
                  />
                  <video
                    v-else-if="mode === 'video'"
                    :src="uploadPreview"
                    controls
                    class="zyvnox-max-h-48 zyvnox-rounded zyvnox-shadow-md zyvnox-bg-black"
                  ></video>

                  <button
                    @click.stop="resetUpload"
                    class="zyvnox-mt-2 zyvnox-text-xs zyvnox-text-red-500 zyvnox-underline"
                  >
                    {{ t('upload.replace') }}
                  </button>
                </div>
              </div>
            </div>

            <div v-if="activeTab === 'url'" class="zyvnox-space-y-4">
              <label
                class="zyvnox-block zyvnox-text-sm zyvnox-font-medium dark:zyvnox-text-slate-300"
                >{{ t('editor.embedDirectUrl') }}</label
              >
              <input
                v-model="inputUrl"
                type="text"
                placeholder="https://..."
                class="zyvnox-w-full zyvnox-py-2 zyvnox-px-3 zyvnox-rounded-md zyvnox-border dark:zyvnox-bg-slate-700 dark:zyvnox-text-white"
              />
            </div>

            <div
              v-if="activeTab !== 'gallery' || selectedFromGallery"
              class="zyvnox-mt-6 zyvnox-pt-6 zyvnox-border-t dark:zyvnox-border-slate-700"
            >
              <div v-if="mode === 'link'">
                <label
                  class="zyvnox-block zyvnox-text-sm zyvnox-font-medium dark:zyvnox-text-slate-300"
                  >{{ t('editor.embedDisplayText') }}</label
                >
                <input
                  v-model="inputText"
                  type="text"
                  class="zyvnox-w-full zyvnox-py-2 zyvnox-px-3 zyvnox-rounded-md zyvnox-border dark:zyvnox-bg-slate-700"
                />
              </div>
              <div v-if="mode === 'image'" class="zyvnox-mt-3">
                <label
                  class="zyvnox-block zyvnox-text-sm zyvnox-font-medium dark:zyvnox-text-slate-300"
                  >{{ t('editor.altText') }}</label
                >
                <input
                  v-model="inputAlt"
                  type="text"
                  :placeholder="t('editor.altPlaceholder')"
                  class="zyvnox-w-full zyvnox-py-2 zyvnox-px-3 zyvnox-rounded-md zyvnox-border dark:zyvnox-bg-slate-700 dark:zyvnox-text-white"
                />
              </div>
            </div>
          </div>

          <div
            class="zyvnox-p-4 zyvnox-bg-slate-50 zyvnox-flex zyvnox-justify-end zyvnox-gap-3 dark:zyvnox-bg-slate-900/50"
          >
            <button
              @click="close"
              class="zyvnox-px-7 zyvnox-py-3.5 zyvnox-rounded-xl zyvnox-border-none zyvnox-font-semibold zyvnox-text-sm zyvnox-cursor-pointer zyvnox-transition-all zyvnox-relative zyvnox-overflow-hidden zyvnox-flex zyvnox-items-center zyvnox-gap-2 zyvnox-min-w-[100px] zyvnox-justify-center disabled:zyvnox-opacity-70 disabled:zyvnox-cursor-not-allowed before:zyvnox-content-[''] before:zyvnox-absolute before:zyvnox-top-0 before:zyvnox-left-[-100%] before:zyvnox-w-full before:zyvnox-h-full before:zyvnox-bg-gradient-to-r before:zyvnox-from-transparent before:zyvnox-via-white/30 before:zyvnox-to-transparent before:zyvnox-transition-[left] before:zyvnox-duration-600 hover:before:zyvnox-left-full zyvnox-text-white zyvnox-bg-gradient-to-br zyvnox-from-red-500 zyvnox-to-red-600 zyvnox-shadow-md hover:zyvnox-from-red-600 hover:zyvnox-to-red-700 hover:-zyvnox-translate-y-0.5 active:zyvnox-translate-y-0"
            >
              {{ t('common.cancel') }}
            </button>
            <button
              @click="handleSubmit"
              class="zyvnox-px-7 zyvnox-py-3.5 zyvnox-rounded-xl zyvnox-border-none zyvnox-font-semibold zyvnox-text-sm zyvnox-cursor-pointer zyvnox-transition-all zyvnox-relative zyvnox-overflow-hidden zyvnox-flex zyvnox-items-center zyvnox-gap-2 zyvnox-min-w-[100px] zyvnox-justify-center disabled:zyvnox-opacity-70 disabled:zyvnox-cursor-not-allowed before:zyvnox-content-[''] before:zyvnox-absolute before:zyvnox-top-0 before:zyvnox-left-[-100%] before:zyvnox-w-full before:zyvnox-h-full before:zyvnox-bg-gradient-to-r before:zyvnox-from-transparent before:zyvnox-via-white/30 before:zyvnox-to-transparent before:zyvnox-transition-[left] before:zyvnox-duration-600 hover:before:zyvnox-left-full zyvnox-text-white zyvnox-bg-gradient-to-br zyvnox-from-emerald-500 zyvnox-to-emerald-600 zyvnox-shadow-md hover:zyvnox-from-emerald-600 hover:zyvnox-to-emerald-700 hover:-zyvnox-translate-y-0.5 active:zyvnox-translate-y-0"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? t('editor.embedInserting') : t('editor.embedInsert') }}
            </button>
          </div>
        </div>
      </transition>

      <transition name="zyvnox-modal-overlay">
        <div
          v-if="itemToDelete"
          class="zyvnox-fixed zyvnox-inset-0 zyvnox-z-[10000001] zyvnox-flex zyvnox-items-center zyvnox-justify-center zyvnox-bg-black/40"
        >
          <div
            class="zyvnox-bg-white dark:zyvnox-bg-slate-800 zyvnox-p-6 zyvnox-rounded-xl zyvnox-shadow-xl zyvnox-max-w-sm zyvnox-w-full"
          >
            <h4
              class="zyvnox-text-lg zyvnox-font-bold zyvnox-text-red-600 zyvnox-border-slate-200 dark:zyvnox-border-slate-700 zyvnox-border-b zyvnox-pb-2"
            >
              {{ t('editor.embedDeleteConfirmTitle') }}
            </h4>
            <p class="zyvnox-text-sm zyvnox-text-slate-600 dark:zyvnox-text-white zyvnox-mt-2">
              {{ t('editor.embedDeleteConfirmDesc') }}
            </p>
            <div class="zyvnox-mt-6 zyvnox-flex zyvnox-justify-end zyvnox-gap-3">
              <button
                @click="itemToDelete = null"
                class="zyvnox-px-4 zyvnox-py-2 hover:zyvnox-scale-105 hover:zyvnox-cursor-pointer zyvnox-text-white zyvnox-text-sm zyvnox-bg-slate-500 zyvnox-rounded-md"
              >
                {{ t('common.cancel') }}
              </button>
              <button
                @click="handleDeleteMedia"
                class="zyvnox-px-4 zyvnox-py-2 hover:zyvnox-scale-105 hover:zyvnox-cursor-pointer zyvnox-text-sm zyvnox-bg-red-600 zyvnox-text-white zyvnox-rounded-md"
              >
                {{ t('editor.embedDeleteProceed') }}
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { Loader } from '../../Feedback'
import { type SecureFetchOptions, secureFetch } from '../../../../lib/secureFetch'
import { useI18n } from '../../../composables/useI18n'

interface GalleryItem {
  url: string
}

const props = defineProps<{
  show: boolean
  mode: 'image' | 'video' | 'link'
  lang?: string
  api?: {
    uploadImage?: {
      api: string
      config: SecureFetchOptions
    }
    uploadVideo?: {
      api: string
      config: SecureFetchOptions
    }
    listImages?: {
      api: string
      config: SecureFetchOptions
    }
    listVideos?: {
      api: string
      config: SecureFetchOptions
    }
    deleteImage?: {
      api: string
      config: SecureFetchOptions
    }
    deleteVideo?: {
      api: string
      config: SecureFetchOptions
    }
  }
  initialValue?: string
  initialText?: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'submit', payload: { url: string; alt?: string; text?: string }): void
}>()

const { t } = useI18n(computed(() => props.lang))

const activeTab = ref<'gallery' | 'upload' | 'url'>('gallery')
const inputUrl = ref('')
const inputAlt = ref('')
const inputText = ref('')
const selectedFile = ref<File | null>(null)
const uploadPreview = ref<string | null>(null)
const fileInput = ref<HTMLInputElement | null>(null)
const isSubmitting = ref(false)

// State General untuk Image & Video
const galleryItems = ref<GalleryItem[]>([])
const isLoadingGallery = ref(false)
const selectedFromGallery = ref<GalleryItem | null>(null)
const itemToDelete = ref<GalleryItem | null>(null)

const isDragging = ref(false)
const loaderRef = ref<InstanceType<typeof Loader>>()

const processFile = (file: File) => {
  selectedFile.value = file
  // Gunakan ObjectURL untuk video agar browser tidak freeze saat generate base64
  if (file.type.startsWith('video/')) {
    if (uploadPreview.value) URL.revokeObjectURL(uploadPreview.value)
    uploadPreview.value = URL.createObjectURL(file)
  } else {
    const reader = new FileReader()
    reader.onload = (e) => (uploadPreview.value = e.target?.result as string)
    reader.readAsDataURL(file)
  }
}

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files?.[0]) {
    processFile(target.files[0])
  }
}

const handleDrop = (event: DragEvent) => {
  isDragging.value = false
  const file = event.dataTransfer?.files?.[0]
  if (file) {
    const isImage = file.type.startsWith('image/')
    const isVideo = file.type.startsWith('video/')

    if ((props.mode === 'image' && isImage) || (props.mode === 'video' && isVideo)) {
      processFile(file)
    } else {
      loaderRef.value?.show('error', t('editor.embedInvalidType'))
    }
  }
}

const title = computed(() =>
  props.mode === 'image'
    ? t('editor.insertImage')
    : props.mode === 'video'
      ? t('editor.insertVideo')
      : t('editor.insertLink'),
)

const availableTabs = computed(() => {
  const tabs: { id: 'gallery' | 'upload' | 'url'; label: string }[] = []

  // Deteksi support library sesuai mode
  const hasListApi =
    (props.mode === 'image' && props.api?.listImages) ||
    (props.mode === 'video' && props.api?.listVideos)
  if (hasListApi) tabs.push({ id: 'gallery', label: t('editor.embedTabLibrary') })

  // Deteksi support upload sesuai mode
  const hasUploadApi =
    (props.mode === 'image' && props.api?.uploadImage) ||
    (props.mode === 'video' && props.api?.uploadVideo)
  if (hasUploadApi) tabs.push({ id: 'upload', label: t('editor.embedTabUpload') })

  tabs.push({ id: 'url', label: t('editor.embedTabUrl') })
  return tabs
})

const triggerFileInput = () => fileInput.value?.click()

const resetUpload = () => {
  if (uploadPreview.value && selectedFile.value?.type.startsWith('video/')) {
    URL.revokeObjectURL(uploadPreview.value)
  }
  uploadPreview.value = null
  selectedFile.value = null
  if (fileInput.value) fileInput.value.value = ''
}

const fetchGallery = async () => {
  const isVideo = props.mode === 'video'
  const apiConfig = isVideo ? props.api?.listVideos : props.api?.listImages
  galleryItems.value = []
  if (!apiConfig) return
  isLoadingGallery.value = true

  try {
    const res = await secureFetch(apiConfig.api, apiConfig.config)
    const data = await res.json()

    // Ambil array images atau videos dari respons API
    const items = isVideo ? data.videos : data.images

    if (items && Array.isArray(items)) {
      galleryItems.value = items.map((url: string) => ({ url }))
    } else {
      galleryItems.value = []
    }
  } catch (e) {
    console.error(e)
  } finally {
    isLoadingGallery.value = false
  }
}

const confirmDelete = (item: GalleryItem) => {
  itemToDelete.value = item
}

const handleDeleteMedia = async () => {
  const isVideo = props.mode === 'video'
  const apiConfig = isVideo ? props.api?.deleteVideo : props.api?.deleteImage

  if (!itemToDelete.value || !apiConfig) return
  loaderRef.value?.show('loading', t('status.loading'))
  try {
    const encodedUrl = encodeURIComponent(itemToDelete.value.url)
    const endpoint = apiConfig.api.endsWith('/')
      ? `${apiConfig.api}${encodedUrl}`
      : `${apiConfig.api}/${encodedUrl}`

    apiConfig.config.method = apiConfig.config.method ?? 'DELETE'

    const res = await secureFetch(endpoint, apiConfig.config)

    if (res.ok) {
      galleryItems.value = galleryItems.value.filter((i) => i.url !== itemToDelete.value?.url)
      if (selectedFromGallery.value?.url === itemToDelete.value.url) {
        selectedFromGallery.value = null
      }
    }
    loaderRef.value?.show(
      res.ok ? 'success' : 'error',
      res.ok ? 'File berhasil dihapus.' : 'Gagal menghapus file.',
    )
  } catch (e) {
    loaderRef.value?.show('error', 'Gagal menghapus file.')
  } finally {
    itemToDelete.value = null
  }
}

const selectFromGallery = (item: GalleryItem) => {
  selectedFromGallery.value = item
  inputAlt.value = ''
}

const handleSubmit = async () => {
  isSubmitting.value = true
  loaderRef.value?.show('loading', 'Uploading...')
  try {
    let finalUrl = ''

    if (activeTab.value === 'gallery' && selectedFromGallery.value) {
      finalUrl = selectedFromGallery.value.url
    } else if (activeTab.value === 'upload' && selectedFile.value) {
      const isVideo = props.mode === 'video'
      const uploadApi = isVideo ? props.api?.uploadVideo : props.api?.uploadImage

      if (uploadApi) {
        const formData = new FormData()
        formData.append('file', selectedFile.value)
        uploadApi.config.method = uploadApi.config.method ?? 'POST'

        const res = await secureFetch(uploadApi.api, {
          ...uploadApi.config,
          body: formData,
        })
        const data = await res.json()
        finalUrl = data.url || data.secure_url || data.data?.url
      }
    } else {
      finalUrl = inputUrl.value
    }

    if (!finalUrl) {
      return loaderRef.value?.show('error', `URL ${props.mode} wajib diisi.`)
    }
    emit('submit', { url: finalUrl, alt: inputAlt.value, text: inputText.value })
    if (activeTab.value === 'upload') {
      loaderRef.value?.show('success', 'Berhasil diproses!')
    } else {
      loaderRef.value?.hide()
    }
  } catch (e) {
    loaderRef.value?.show('error', 'Gagal memproses file.')
  } finally {
    isSubmitting.value = false
  }
}

const close = () => emit('close')

watch(
  () => props.show,
  (val) => {
    if (val) {
      resetUpload()
      if (availableTabs.value[0]) activeTab.value = availableTabs.value[0].id
      if (activeTab.value === 'gallery') fetchGallery()
    }
  },
)
</script>
