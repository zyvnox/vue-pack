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
        class="zyvnox-bg-white zyvnox-p-8 zyvnox-rounded-xl zyvnox-shadow-2xl zyvnox-flex zyvnox-flex-col zyvnox-items-center zyvnox-w-[90%] zyvnox-max-w-sm zyvnox-text-center zyvnox-transition-transform zyvnox-duration-300 dark:zyvnox-bg-slate-800"
      >
        <div
          v-if="status === 'loading'"
          class="zyvnox-flex zyvnox-flex-col zyvnox-items-center zyvnox-gap-4"
        >
          <div
            class="zyvnox-w-12 zyvnox-h-12 zyvnox-rounded-full zyvnox-border-4 zyvnox-border-slate-200 dark:zyvnox-border-slate-700 zyvnox-border-t-indigo-600 zyvnox-animate-spin"
          ></div>
          <p class="zyvnox-text-slate-500 zyvnox-font-medium dark:zyvnox-text-slate-400">
            {{ message || t('status.processing') }}
          </p>
        </div>

        <div
          v-if="status === 'success'"
          class="zyvnox-flex zyvnox-flex-col zyvnox-items-center zyvnox-gap-4"
        >
          <div
            class="zyvnox-relative zyvnox-animate-[zyvnox-popIn_400ms_cubic-bezier(0.16,1,0.3,1)_backwards]"
          >
            <div
              class="zyvnox-w-14 zyvnox-h-14 zyvnox-rounded-full zyvnox-grid zyvnox-place-items-center zyvnox-bg-green-100 dark:zyvnox-bg-green-900/50"
            >
              <span
                class="zyvnox-i-mdi-check zyvnox-w-8 zyvnox-h-8 zyvnox-text-green-600 dark:zyvnox-text-green-400"
              ></span>
            </div>
            <div
              class="zyvnox-absolute zyvnox-inset-0 zyvnox-rounded-full zyvnox-animate-ping zyvnox-bg-green-200 dark:zyvnox-bg-green-800/50"
              style="animation-delay: 0.2s"
            ></div>
          </div>
          <p class="zyvnox-font-medium zyvnox-text-slate-700 dark:zyvnox-text-slate-200">
            {{ message || t('status.success') }}
          </p>
        </div>

        <div
          v-if="status === 'error'"
          class="zyvnox-flex zyvnox-flex-col zyvnox-items-center zyvnox-gap-4"
        >
          <div
            class="zyvnox-relative zyvnox-animate-[zyvnox-popIn_400ms_cubic-bezier(0.16,1,0.3,1)_backwards]"
          >
            <div
              class="zyvnox-w-14 zyvnox-h-14 zyvnox-rounded-full zyvnox-grid zyvnox-place-items-center zyvnox-bg-red-100 dark:zyvnox-bg-red-900/50"
            >
              <span
                class="zyvnox-i-mdi-close zyvnox-w-8 zyvnox-h-8 zyvnox-text-red-600 dark:zyvnox-text-red-400"
              ></span>
            </div>
            <div
              class="zyvnox-absolute zyvnox-inset-0 zyvnox-rounded-full zyvnox-animate-ping zyvnox-bg-red-200 dark:zyvnox-bg-red-800/50"
              style="animation-delay: 0.2s"
            ></div>
          </div>
          <p class="zyvnox-font-medium zyvnox-text-slate-700 dark:zyvnox-text-slate-200">
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

type StatusType = 'loading' | 'success' | 'error'
const emit = defineEmits<{
  (e: 'success'): void
  (e: 'error'): void
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
      type === 'success' ? emit('success') : emit('error')
    }, 3000)
  }
}

const hide = (): void => {
  isVisible.value = false
}

defineExpose({ show, hide })
</script>
