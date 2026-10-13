<template>
  <transition name="zyvnox-modal-overlay" appear>
    <div
      class="zyvnox-fixed zyvnox-inset-0 zyvnox-z-20 zyvnox-flex zyvnox-items-center zyvnox-justify-center 2xl:zyvnox-p-4 zyvnox-bg-black/70 zyvnox-backdrop-blur-md"
      @click.self="close"
    >
      <transition name="zyvnox-modal-container" appear>
        <div
          class="zyvnox-w-full zyvnox-h-full zyvnox-flex zyvnox-flex-col zyvnox-max-h-screen zyvnox-bg-gradient-to-br zyvnox-from-white zyvnox-to-slate-50 zyvnox-shadow-2xl zyvnox-overflow-hidden zyvnox-relative md:zyvnox-h-auto md:zyvnox-w-[90%] md:zyvnox-max-w-[700px] md:zyvnox-max-h-[90vh] md:zyvnox-rounded-2xl lg:zyvnox-w-[80%] dark:zyvnox-from-slate-800 dark:zyvnox-to-slate-900 dark:zyvnox-text-slate-100"
          :class="isMobile ? 'zyvnox-rounded-xl' : ''"
        >
          <div
            class="zyvnox-p-6 zyvnox-bg-gradient-to-br zyvnox-from-indigo-600 zyvnox-to-violet-600 zyvnox-text-white zyvnox-relative zyvnox-shadow-md md:zyvnox-px-8 md:zyvnox-py-6 zyvnox-flex-shrink-0"
          >
            <div class="zyvnox-flex zyvnox-justify-between zyvnox-items-center">
              <div class="zyvnox-flex zyvnox-items-center zyvnox-gap-3">
                <div
                  class="zyvnox-bg-white/20 zyvnox-rounded-xl zyvnox-w-10 zyvnox-h-10 zyvnox-flex zyvnox-items-center zyvnox-justify-center zyvnox-backdrop-blur-md"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3H6C4.89543 3 4 3.89543 4 5V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V5C20 3.89543 19.1046 3 18 3H14M10 3V6C10 6.55228 10.4477 7 11 7H13C13.5523 7 14 6.55228 14 6V3M10 3V1M14 3V1M9 11H15M9 15H15"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h2 class="zyvnox-text-xl md:zyvnox-text-2xl zyvnox-font-bold zyvnox-m-0">
                  {{ title ?? t('title.detailData') }}
                </h2>
              </div>
            </div>
          </div>

          <div
            class="zyvnox-p-6 md:zyvnox-p-8 zyvnox-overflow-y-auto zyvnox-flex-grow zyvnox-modal-scrollbar"
          >
            <div class="zyvnox-flex zyvnox-flex-col zyvnox-gap-4">
              <FieldDetailRenderer
                v-for="(field, key) in schema"
                :key="key"
                :field="field"
                :field-key="key"
                :form-data="formData"
                :required-text="requiredText"
                :optional-text="optionalText"
                :value-null-view="valueNullView"
                @image-click="handleImageClick"
                :lang="lang"
              />
            </div>
          </div>

          <div
            class="zyvnox-p-4 md:zyvnox-px-8 md:zyvnox-py-5 zyvnox-bg-slate-50 dark:zyvnox-bg-slate-800/80 zyvnox-border-t zyvnox-border-slate-200 dark:zyvnox-border-slate-700 zyvnox-flex-justify-end zyvnox-items-center zyvnox-flex-shrink-0"
          >
            <button type="button" @click="close" class="zyvnox-btn zyvnox-btn-primary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ closeText ?? t('common.close') }}
            </button>
          </div>
        </div>
      </transition>
    </div>
  </transition>

  <transition name="zyvnox-modal-overlay" appear>
    <div
      v-if="showImagePreview"
      class="zyvnox-fixed zyvnox-inset-0 zyvnox-z-50 zyvnox-flex zyvnox-items-center zyvnox-justify-center zyvnox-bg-black/80 zyvnox-backdrop-blur-md zyvnox-p-4"
      @click="showImagePreview = false"
    >
      <transition name="zyvnox-modal-container" appear>
        <img
          :src="previewImageUrl"
          :alt="t('common.preview')"
          class="zyvnox-max-w-[90vw] zyvnox-max-h-[90vh] zyvnox-rounded-xl zyvnox-shadow-2xl zyvnox-object-contain"
        />
      </transition>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { FieldDetailRenderer } from './'
import { useI18n } from '../../composables/useI18n'
import type { Schema, FormData, SupportedLanguage } from '../../../configs/types'

const props = defineProps<{
  schema: Schema
  formData: FormData
  valueNullView: boolean
  title?: string
  closeText?: string
  requiredText?: string
  optionalText?: string
  lang?: SupportedLanguage
}>()

const { t } = useI18n(computed(() => props.lang))

const emit = defineEmits<{
  (e: 'close'): void
}>()

const showImagePreview = ref(false)
const previewImageUrl = ref('')

const close = () => emit('close')

const handleImageClick = (url: string) => {
  previewImageUrl.value = url
  showImagePreview.value = true
}

const isMobile = ref(false)
const checkScreenSize = () => {
  if (typeof window !== 'undefined') {
    isMobile.value = window.innerWidth < 768
  }
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>
