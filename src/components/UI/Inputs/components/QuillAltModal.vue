<template>
  <transition name="zyvnox-modal-overlay" appear>
    <div
      v-if="show"
      class="zyvnox-fixed zyvnox-inset-0 zyvnox-z-[10001] zyvnox-flex zyvnox-items-center zyvnox-justify-center zyvnox-p-4 zyvnox-bg-black/60 zyvnox-backdrop-blur-sm"
      @click.self="close"
    >
      <transition name="zyvnox-modal-container" appear>
        <div
          class="zyvnox-w-full zyvnox-max-w-sm zyvnox-bg-white zyvnox-rounded-xl zyvnox-shadow-2xl zyvnox-overflow-hidden dark:zyvnox-bg-slate-800"
        >
          <div
            class="zyvnox-p-5 zyvnox-border-b zyvnox-border-slate-200 dark:zyvnox-border-slate-700"
          >
            <h3
              class="zyvnox-text-lg zyvnox-font-bold zyvnox-text-slate-900 dark:zyvnox-text-slate-100"
            >
              {{ t('editor.editAltTitle') }}
            </h3>
          </div>

          <div class="zyvnox-p-5 zyvnox-flex zyvnox-flex-col zyvnox-gap-4">
            <div>
              <label
                class="zyvnox-block zyvnox-text-sm zyvnox-font-medium zyvnox-mb-1 dark:zyvnox-text-slate-300"
                >{{ t('editor.altText') }}</label
              >
              <input
                v-model="altText"
                type="text"
                :placeholder="t('editor.altPlaceholder')"
                class="zyvnox-w-full zyvnox-py-2 zyvnox-px-3 zyvnox-rounded-md zyvnox-border zyvnox-border-slate-300 dark:zyvnox-bg-slate-700 dark:zyvnox-border-slate-600 dark:zyvnox-text-white"
                @keydown.enter="handleSubmit"
              />
              <p
                class="zyvnox-text-xs zyvnox-text-slate-500 zyvnox-mt-2 dark:zyvnox-text-slate-400"
              >
                {{ t('editor.altHelp') }}
              </p>
            </div>
          </div>

          <div
            class="zyvnox-p-4 zyvnox-bg-slate-50 zyvnox-flex zyvnox-justify-end zyvnox-gap-3 dark:zyvnox-bg-slate-900/50"
          >
            <button
              @click="close"
              class="zyvnox-px-4 zyvnox-py-2 zyvnox-rounded-md zyvnox-text-sm zyvnox-font-medium zyvnox-bg-white zyvnox-border zyvnox-border-slate-300 hover:zyvnox-bg-slate-50 dark:zyvnox-bg-slate-700 dark:zyvnox-text-slate-200 dark:zyvnox-border-slate-600 dark:hover:zyvnox-bg-slate-600"
            >
              {{ t('common.cancel') }}
            </button>
            <button
              @click="handleSubmit"
              class="zyvnox-px-4 zyvnox-py-2 zyvnox-rounded-md zyvnox-text-sm zyvnox-font-medium zyvnox-text-white zyvnox-bg-blue-600 hover:zyvnox-bg-blue-700 dark:zyvnox-bg-blue-500 dark:hover:zyvnox-bg-blue-600"
            >
              {{ t('common.save') }}
            </button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useI18n } from '../../../composables/useI18n'

const props = defineProps<{
  show: boolean
  initialValue?: string
  lang?: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'submit', value: string): void
}>()

const { t } = useI18n(computed(() => props.lang))

const altText = ref('')

watch(
  () => props.show,
  (newVal) => {
    if (newVal) {
      altText.value = props.initialValue || ''
    }
  },
)

function close() {
  emit('close')
}

function handleSubmit() {
  emit('submit', altText.value)
}
</script>
