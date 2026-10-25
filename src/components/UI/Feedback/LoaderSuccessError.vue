<template>
  <transition
    enter-active-class="zyvnox-transition-opacity zyvnox-duration-300 zyvnox-ease-out"
    enter-from-class="zyvnox-opacity-0"
    enter-to-class="zyvnox-opacity-100"
    leave-active-class="zyvnox-transition-opacity zyvnox-duration-300 zyvnox-ease-in"
    leave-from-class="zyvnox-opacity-100"
    leave-to-class="zyvnox-opacity-0"
  >
    <div
      v-if="isVisible"
      class="zyvnox-fixed zyvnox-inset-0 zyvnox-z-100 zyvnox-grid zyvnox-place-items-center zyvnox-bg-slate-900/70 zyvnox-backdrop-blur-sm"
    >
      <div
        class="zyvnox-bg-white zyvnox-p-8 zyvnox-rounded-2xl zyvnox-shadow-2xl zyvnox-flex zyvnox-flex-col zyvnox-items-center zyvnox-w-[90%] zyvnox-max-w-sm zyvnox-text-center zyvnox-transition-transform zyvnox-duration-300 dark:zyvnox-bg-slate-800 dark:zyvnox-border-1 dark:zyvnox-border-solid dark:zyvnox-border-slate-700"
      >
        <!-- Loading State: Smooth Precision SVG Spinner -->
        <div
          v-if="status === 'loading'"
          class="zyvnox-flex zyvnox-flex-col zyvnox-items-center zyvnox-gap-4"
        >
          <div class="zyvnox-relative zyvnox-w-14 zyvnox-h-14 zyvnox-flex zyvnox-items-center zyvnox-justify-center">
            <svg
              class="zyvnox-w-12 zyvnox-h-12 zyvnox-animate-spin"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="25"
                cy="25"
                r="20"
                stroke="currentColor"
                stroke-width="4"
                class="zyvnox-text-slate-200 dark:zyvnox-text-slate-700/60"
              />
              <circle
                cx="25"
                cy="25"
                r="20"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-dasharray="80 200"
                class="zyvnox-text-blue-600 dark:zyvnox-text-blue-500"
              />
            </svg>
          </div>
          <p class="zyvnox-text-slate-600 zyvnox-font-medium dark:zyvnox-text-slate-300 zyvnox-text-sm">
            {{ message || t('status.processing') }}
          </p>
        </div>

        <!-- Success State: Soft Clean Badge -->
        <div
          v-if="status === 'success'"
          class="zyvnox-flex zyvnox-flex-col zyvnox-items-center zyvnox-gap-4"
        >
          <div class="zyvnox-relative">
            <div
              class="zyvnox-absolute zyvnox-inset-0 zyvnox-rounded-full zyvnox-animate-ping zyvnox-bg-emerald-400/25"
              style="animation-delay: 0.15s"
            ></div>
            <div
              class="zyvnox-relative zyvnox-w-14 zyvnox-h-14 zyvnox-rounded-full zyvnox-grid zyvnox-place-items-center zyvnox-bg-emerald-100 dark:zyvnox-bg-emerald-950/70 zyvnox-shadow-sm"
            >
              <svg class="zyvnox-w-8 zyvnox-h-8 zyvnox-text-emerald-600 dark:zyvnox-text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
          </div>
          <p class="zyvnox-font-semibold zyvnox-text-slate-800 dark:zyvnox-text-slate-100 zyvnox-text-sm">
            {{ message || t('status.success') }}
          </p>
        </div>

        <!-- Warning State: Soft Clean Badge -->
        <div
          v-if="status === 'warning'"
          class="zyvnox-flex zyvnox-flex-col zyvnox-items-center zyvnox-gap-4"
        >
          <div class="zyvnox-relative">
            <div
              class="zyvnox-absolute zyvnox-inset-0 zyvnox-rounded-full zyvnox-animate-ping zyvnox-bg-amber-400/25"
              style="animation-delay: 0.15s"
            ></div>
            <div
              class="zyvnox-relative zyvnox-w-14 zyvnox-h-14 zyvnox-rounded-full zyvnox-grid zyvnox-place-items-center zyvnox-bg-amber-100 dark:zyvnox-bg-amber-950/70 zyvnox-shadow-sm"
            >
              <svg class="zyvnox-w-8 zyvnox-h-8 zyvnox-text-amber-500 dark:zyvnox-text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z" />
              </svg>
            </div>
          </div>
          <p class="zyvnox-font-semibold zyvnox-text-slate-800 dark:zyvnox-text-slate-100 zyvnox-text-sm">
            {{ message || t('status.warning') }}
          </p>
        </div>

        <!-- Error State: Soft Clean Badge -->
        <div
          v-if="status === 'error'"
          class="zyvnox-flex zyvnox-flex-col zyvnox-items-center zyvnox-gap-4"
        >
          <div class="zyvnox-relative">
            <div
              class="zyvnox-absolute zyvnox-inset-0 zyvnox-rounded-full zyvnox-animate-ping zyvnox-bg-rose-400/25"
              style="animation-delay: 0.15s"
            ></div>
            <div
              class="zyvnox-relative zyvnox-w-14 zyvnox-h-14 zyvnox-rounded-full zyvnox-grid zyvnox-place-items-center zyvnox-bg-rose-100 dark:zyvnox-bg-rose-950/70 zyvnox-shadow-sm"
            >
              <svg class="zyvnox-w-8 zyvnox-h-8 zyvnox-text-rose-600 dark:zyvnox-text-rose-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
              </svg>
            </div>
          </div>
          <p class="zyvnox-font-semibold zyvnox-text-slate-800 dark:zyvnox-text-slate-100 zyvnox-text-sm">
            {{ message || t('status.error') }}
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '../../composables/useI18n'

const { t } = useI18n()

export type StatusType = 'loading' | 'success' | 'error' | 'warning'

const emit = defineEmits<{
  (e: 'success'): void
  (e: 'error'): void
  (e: 'warning'): void
}>()

const isVisible = ref(false)
const status = ref<StatusType>('loading')
const message = ref<string>('')

const show = (type: StatusType = 'loading', msg: string = ''): void => {
  isVisible.value = true
  status.value = type
  message.value = msg
  if (type !== 'loading') {
    setTimeout(() => {
      hide()
      if (type === 'success') emit('success')
      else if (type === 'error') emit('error')
      else if (type === 'warning') emit('warning')
    }, 3000)
  }
}

const hide = (): void => {
  isVisible.value = false
}

defineExpose({ show, hide })
</script>
