<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '../../composables/useI18n'

export type WarningModalType = 'danger' | 'warning' | 'success' | 'info'

interface Props {
  title?: string
  message?: string
  type?: WarningModalType
  confirmText?: string
  cancelText?: string
  lang?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Warning Title',
  message: 'Warning Message',
  type: 'danger',
})

const { t } = useI18n(computed(() => props.lang))

const emit = defineEmits<{
  (e: 'confirm'): void
  (e: 'close'): void
  (e: 'cancel'): void
}>()

const resolvedType = computed<WarningModalType>(() => props.type ?? 'danger')

const handleClose = () => {
  emit('close')
  emit('cancel')
}
</script>

<template>
  <div
    class="zyvnox-fixed zyvnox-inset-0 zyvnox-z-36 zyvnox-grid zyvnox-place-items-center zyvnox-p-4 zyvnox-bg-slate-900/60 zyvnox-backdrop-blur-sm zyvnox-animate-[zyvnox-fadeIn_250ms_ease-out]"
    @keydown.esc="handleClose"
  >
    <div
      class="zyvnox-relative zyvnox-w-full zyvnox-max-w-md zyvnox-pt-16 zyvnox-pb-8 zyvnox-px-8 zyvnox-bg-white zyvnox-rounded-2xl zyvnox-shadow-2xl zyvnox-text-center zyvnox-animate-[zyvnox-scaleIn_250ms_cubic-bezier(0.16,1,0.3,1)] zyvnox-border-1 zyvnox-border-solid zyvnox-border-slate-200 dark:zyvnox-bg-slate-900 dark:zyvnox-border-slate-800"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="props.title"
    >
      <!-- Icon Container (Top Badge) -->
      <div
        class="zyvnox-absolute zyvnox-top-[-2.25rem] zyvnox-left-1/2 -zyvnox-translate-x-1/2 zyvnox-w-[4.5rem] zyvnox-h-[4.5rem] zyvnox-rounded-full zyvnox-grid zyvnox-place-items-center zyvnox-border-4 zyvnox-border-solid zyvnox-shadow-lg zyvnox-animate-[zyvnox-scaleIn_400ms_150ms_ease-out_backwards]"
        :class="[
          resolvedType === 'warning'
            ? 'zyvnox-bg-amber-100 zyvnox-border-white dark:zyvnox-bg-amber-950/80 dark:zyvnox-border-slate-800'
            : resolvedType === 'success'
              ? 'zyvnox-bg-emerald-100 zyvnox-border-white dark:zyvnox-bg-emerald-950/80 dark:zyvnox-border-slate-800'
              : resolvedType === 'info'
                ? 'zyvnox-bg-blue-100 zyvnox-border-white dark:zyvnox-bg-blue-950/80 dark:zyvnox-border-slate-800'
                : 'zyvnox-bg-rose-100 zyvnox-border-white dark:zyvnox-bg-rose-950/80 dark:zyvnox-border-slate-800'
        ]"
      >
        <!-- Warning Icon (Triangle) -->
        <svg
          v-if="resolvedType === 'warning'"
          class="zyvnox-w-9 zyvnox-h-9 zyvnox-text-amber-500 dark:zyvnox-text-amber-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z" />
        </svg>

        <!-- Success Icon (Checkmark) -->
        <svg
          v-else-if="resolvedType === 'success'"
          class="zyvnox-w-9 zyvnox-h-9 zyvnox-text-emerald-600 dark:zyvnox-text-emerald-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>

        <!-- Info Icon -->
        <svg
          v-else-if="resolvedType === 'info'"
          class="zyvnox-w-9 zyvnox-h-9 zyvnox-text-blue-600 dark:zyvnox-text-blue-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>

        <!-- Danger / Error Icon -->
        <svg
          v-else
          class="zyvnox-w-9 zyvnox-h-9 zyvnox-text-rose-600 dark:zyvnox-text-rose-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
      </div>

      <h2
        id="dialog-title"
        class="zyvnox-text-2xl zyvnox-font-bold zyvnox-text-slate-800 zyvnox-mb-3 dark:zyvnox-text-slate-100"
      >
        {{ props.title }}
      </h2>
      <p
        id="dialog-desc"
        class="zyvnox-text-slate-500 zyvnox-leading-relaxed zyvnox-mb-8 dark:zyvnox-text-slate-400 zyvnox-text-sm"
      >
        {{ props.message }}
      </p>
      <div class="zyvnox-grid zyvnox-grid-cols-2 zyvnox-gap-4">
        <button
          class="zyvnox-w-full zyvnox-py-3.5 zyvnox-px-4 zyvnox-rounded-lg zyvnox-border-none zyvnox-font-semibold zyvnox-text-sm zyvnox-cursor-pointer zyvnox-transition-all zyvnox-duration-200 hover:-zyvnox-translate-y-0.5 zyvnox-text-white"
          :class="[
            resolvedType === 'warning'
              ? 'zyvnox-bg-amber-500 hover:zyvnox-bg-amber-600 zyvnox-shadow-lg zyvnox-shadow-amber-500/30 hover:zyvnox-shadow-xl hover:zyvnox-shadow-amber-500/40'
              : resolvedType === 'success'
                ? 'zyvnox-bg-emerald-600 hover:zyvnox-bg-emerald-700 zyvnox-shadow-lg zyvnox-shadow-emerald-500/30 hover:zyvnox-shadow-xl hover:zyvnox-shadow-emerald-500/40'
                : resolvedType === 'info'
                  ? 'zyvnox-bg-blue-600 hover:zyvnox-bg-blue-700 zyvnox-shadow-lg zyvnox-shadow-blue-500/30 hover:zyvnox-shadow-xl hover:zyvnox-shadow-blue-500/40'
                  : 'zyvnox-bg-rose-600 hover:zyvnox-bg-rose-700 zyvnox-shadow-lg zyvnox-shadow-rose-500/30 hover:zyvnox-shadow-xl hover:zyvnox-shadow-rose-500/40'
          ]"
          @click="emit('confirm')"
        >
          {{ props.confirmText ?? t('common.yes') }}
        </button>
        <button
          class="zyvnox-w-full zyvnox-py-3.5 zyvnox-px-4 zyvnox-rounded-lg zyvnox-font-semibold zyvnox-text-sm zyvnox-cursor-pointer zyvnox-transition-all zyvnox-duration-200 hover:-zyvnox-translate-y-0.5 zyvnox-bg-slate-100 zyvnox-text-slate-700 zyvnox-border-1 zyvnox-border-solid zyvnox-border-slate-300 hover:zyvnox-bg-slate-200 dark:zyvnox-bg-slate-800 dark:zyvnox-text-slate-200 dark:zyvnox-border-slate-700 dark:hover:zyvnox-bg-slate-700"
          @click="handleClose"
        >
          {{ props.cancelText ?? t('common.no') }}
        </button>
      </div>
    </div>
  </div>
</template>
