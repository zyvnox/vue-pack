<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '../../composables/useI18n'

interface Props {
  title?: string
  message?: string
  isGreen?: boolean
  confirmText?: string
  cancelText?: string
  lang?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Warning Title',
  message: 'Warning Message',
  isGreen: false,
})

const { t } = useI18n(computed(() => props.lang))

const emit = defineEmits<{
  (e: 'confirm'): void
  (e: 'close'): void
}>()
</script>

<template>
  <div
    class="zyvnox-fixed zyvnox-inset-0 zyvnox-z-36 zyvnox-grid zyvnox-place-items-center zyvnox-p-4 zyvnox-bg-slate-900/60 zyvnox-backdrop-blur-sm zyvnox-animate-[zyvnox-fadeIn_250ms_ease-out]"
    @keydown.esc="emit('close')"
  >
    <div
      class="zyvnox-relative zyvnox-w-full zyvnox-max-w-md zyvnox-pt-16 zyvnox-pb-8 zyvnox-px-8 zyvnox-bg-gradient-to-br zyvnox-from-white zyvnox-to-slate-50 zyvnox-rounded-2xl zyvnox-shadow-2xl zyvnox-text-center zyvnox-animate-[zyvnox-scaleIn_250ms_cubic-bezier(0.16,1,0.3,1)] zyvnox-border-1 zyvnox-border-solid zyvnox-border-slate-200 dark:zyvnox-from-slate-800 dark:zyvnox-to-slate-900 dark:zyvnox-border-slate-700"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="props.title"
    >
      <!-- Icon Container -->
      <div
        class="zyvnox-absolute zyvnox-top-[-2.25rem] zyvnox-left-1/2 -zyvnox-translate-x-1/2 zyvnox-w-[4.5rem] zyvnox-h-[4.5rem] zyvnox-rounded-full zyvnox-grid zyvnox-place-items-center zyvnox-border-4 zyvnox-border-solid zyvnox-border-white zyvnox-shadow-md zyvnox-animate-[zyvnox-scaleIn_400ms_150ms_ease-out_backwards] dark:zyvnox-border-slate-800"
        :class="
          props.isGreen
            ? 'zyvnox-bg-green-100 dark:zyvnox-bg-green-900/50'
            : 'zyvnox-bg-red-100 dark:zyvnox-bg-red-900/50'
        "
      >
        <span
          class="zyvnox-w-9 zyvnox-h-9"
          :class="[
            props.isGreen ? 'zyvnox-i-mdi-check-decagram' : 'zyvnox-i-mdi-alert-decagram',
            props.isGreen
              ? 'zyvnox-text-green-600 dark:zyvnox-text-green-400'
              : 'zyvnox-text-red-600 dark:zyvnox-text-red-400',
          ]"
        ></span>
      </div>

      <h2
        id="dialog-title"
        class="zyvnox-text-2xl zyvnox-font-bold zyvnox-text-slate-800 zyvnox-mb-3 dark:zyvnox-text-slate-100"
      >
        {{ props.title }}
      </h2>
      <p
        id="dialog-desc"
        class="zyvnox-text-slate-500 zyvnox-leading-relaxed zyvnox-mb-10 dark:zyvnox-text-slate-400"
      >
        {{ props.message }}
      </p>
      <div class="zyvnox-grid zyvnox-grid-cols-2 zyvnox-gap-4">
        <button
          class="zyvnox-w-full zyvnox-py-3.5 zyvnox-px-4 zyvnox-rounded-lg zyvnox-border-none zyvnox-font-semibold zyvnox-text-sm zyvnox-cursor-pointer zyvnox-transition-all zyvnox-duration-300 zyvnox-ease-[cubic-bezier(0.4,0,0.2,1)] zyvnox-relative zyvnox-overflow-hidden hover:-zyvnox-translate-y-0.5 zyvnox-text-white"
          :class="
            props.isGreen
              ? 'zyvnox-bg-gradient-to-br zyvnox-from-green-500 zyvnox-to-emerald-600 zyvnox-shadow-lg zyvnox-shadow-green-500/20 hover:zyvnox-shadow-xl hover:zyvnox-shadow-green-500/30'
              : 'zyvnox-bg-gradient-to-br zyvnox-from-red-500 zyvnox-to-rose-600 zyvnox-shadow-lg zyvnox-shadow-red-500/20 hover:zyvnox-shadow-xl hover:zyvnox-shadow-red-500/30'
          "
          @click="emit('confirm')"
        >
          {{ props.confirmText ?? t('common.yes') }}
        </button>
        <button
          class="zyvnox-w-full zyvnox-py-3.5 zyvnox-px-4 zyvnox-rounded-lg zyvnox-font-semibold zyvnox-text-sm zyvnox-cursor-pointer zyvnox-transition-all zyvnox-duration-300 zyvnox-ease-[cubic-bezier(0.4,0,0.2,1)] zyvnox-relative zyvnox-overflow-hidden hover:-zyvnox-translate-y-0.5 zyvnox-bg-slate-200 zyvnox-text-slate-700 zyvnox-border-1 zyvnox-border-solid zyvnox-border-slate-300 hover:zyvnox-bg-slate-300 dark:zyvnox-bg-slate-700 dark:zyvnox-text-slate-200 dark:zyvnox-border-slate-600 dark:hover:zyvnox-bg-slate-600"
          @click="emit('close')"
        >
          {{ props.cancelText ?? t('common.no') }}
        </button>
      </div>
    </div>
  </div>
</template>
