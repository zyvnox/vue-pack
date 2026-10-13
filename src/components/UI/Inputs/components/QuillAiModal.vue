<template>
  <Transition name="zyvnox-modal-fade">
    <div
      v-if="show"
      class="zyvnox-fixed zyvnox-inset-0 zyvnox-bg-slate-900/70 zyvnox-flex zyvnox-items-center zyvnox-justify-center zyvnox-z-[10000] zyvnox-backdrop-blur-sm zyvnox-p-4"
      @click.self="$emit('close')"
    >
      <div
        class="zyvnox-bg-white dark:zyvnox-bg-slate-800 zyvnox-w-full zyvnox-max-w-[480px] zyvnox-rounded-2xl zyvnox-overflow-hidden zyvnox-shadow-2xl zyvnox-border zyvnox-border-slate-200 dark:zyvnox-border-slate-700 zyvnox-transition-all zyvnox-duration-300"
      >
        <div
          class="zyvnox-p-5 zyvnox-bg-white dark:zyvnox-bg-slate-800 zyvnox-border-b zyvnox-border-slate-200 dark:zyvnox-border-slate-700 zyvnox-flex zyvnox-justify-between zyvnox-items-center"
        >
          <div class="zyvnox-flex zyvnox-items-center zyvnox-gap-3">
            <div
              class="zyvnox-bg-purple-600 zyvnox-text-white zyvnox-p-2 zyvnox-rounded-xl zyvnox-flex zyvnox-shadow-md zyvnox-shadow-purple-500/30"
            >
              <span class="zyvnox-i-mdi-robot-variant zyvnox-text-xl"></span>
            </div>
            <div>
              <h3
                class="zyvnox-text-lg zyvnox-font-bold zyvnox-text-slate-900 dark:zyvnox-text-white zyvnox-m-0"
              >
                {{ t('editor.aiModalTitle') }}
              </h3>
              <p class="zyvnox-text-xs zyvnox-text-slate-500 zyvnox-m-0">
                {{ t('editor.aiModalSubtitle') }}
              </p>
            </div>
          </div>
          <button
            @click="$emit('close')"
            class="zyvnox-bg-transparent zyvnox-border-none zyvnox-text-slate-400 hover:zyvnox-text-red-500 hover:zyvnox-bg-red-50 dark:hover:zyvnox-bg-red-900/30 zyvnox-p-1 zyvnox-rounded-lg zyvnox-cursor-pointer zyvnox-transition-colors"
            :title="t('common.close')"
          >
            <span class="zyvnox-i-mdi-close"></span>
          </button>
        </div>

        <div class="zyvnox-p-6 zyvnox-space-y-4">
          <div>
            <label
              class="zyvnox-block zyvnox-text-xs zyvnox-font-semibold zyvnox-text-slate-800 dark:zyvnox-text-slate-200 zyvnox-mb-2"
            >
              {{ t('editor.aiTopicLabel') }}
            </label>
            <div class="zyvnox-relative zyvnox-flex zyvnox-items-start">
              <span
                class="zyvnox-i-mdi-text-short zyvnox-absolute zyvnox-left-3 zyvnox-top-3.5 zyvnox-text-slate-400 dark:zyvnox-text-slate-500 zyvnox-pointer-events-none"
              ></span>
              <textarea
                v-model="form.topic"
                rows="3"
                :placeholder="t('editor.aiTopicPlaceholder')"
                class="zyvnox-w-full zyvnox-py-3 zyvnox-pr-3 zyvnox-pl-10 zyvnox-bg-slate-100 dark:zyvnox-bg-slate-700 zyvnox-border-2 zyvnox-border-transparent focus:zyvnox-border-purple-600 focus:zyvnox-bg-white dark:focus:zyvnox-bg-slate-800 focus:zyvnox-outline-none zyvnox-rounded-xl zyvnox-text-slate-900 dark:zyvnox-text-slate-100 zyvnox-text-sm zyvnox-transition-colors zyvnox-max-h-[200px] zyvnox-min-h-[120px] zyvnox-resize-y"
                autofocus
              ></textarea>
            </div>
          </div>

          <div>
            <label
              class="zyvnox-block zyvnox-text-xs zyvnox-font-semibold zyvnox-text-slate-800 dark:zyvnox-text-slate-200 zyvnox-mb-2"
            >
              {{ t('editor.aiKeywordLabel') }}
            </label>
            <div class="zyvnox-relative zyvnox-flex zyvnox-items-center">
              <span
                class="zyvnox-i-mdi-key-variant zyvnox-absolute zyvnox-left-3 zyvnox-text-slate-400 dark:zyvnox-text-slate-500 zyvnox-pointer-events-none"
              ></span>
              <input
                v-model="form.keyword"
                type="text"
                :placeholder="t('editor.aiKeywordPlaceholder')"
                class="zyvnox-w-full zyvnox-py-3 zyvnox-pr-3 zyvnox-pl-10 zyvnox-bg-slate-100 dark:zyvnox-bg-slate-700 zyvnox-border-2 zyvnox-border-transparent focus:zyvnox-border-purple-600 focus:zyvnox-bg-white dark:focus:zyvnox-bg-slate-800 focus:zyvnox-outline-none zyvnox-rounded-xl zyvnox-text-slate-900 dark:zyvnox-text-slate-100 zyvnox-text-sm zyvnox-transition-colors"
              />
            </div>
          </div>

          <div>
            <label
              class="zyvnox-block zyvnox-text-xs zyvnox-font-semibold zyvnox-text-slate-800 dark:zyvnox-text-slate-200 zyvnox-mb-2"
            >
              {{ t('editor.aiToneLabel') }}
            </label>
            <div class="zyvnox-relative zyvnox-flex zyvnox-items-center">
              <span
                class="zyvnox-i-mdi-comment-quote zyvnox-absolute zyvnox-left-3 zyvnox-text-slate-400 dark:zyvnox-text-slate-500 zyvnox-pointer-events-none"
              ></span>
              <select
                v-model="form.tone"
                class="zyvnox-w-full zyvnox-py-3 zyvnox-pr-3 zyvnox-pl-10 zyvnox-bg-slate-100 dark:zyvnox-bg-slate-700 zyvnox-border-2 zyvnox-border-transparent focus:zyvnox-border-purple-600 focus:zyvnox-bg-white dark:focus:zyvnox-bg-slate-800 focus:zyvnox-outline-none zyvnox-rounded-xl zyvnox-text-slate-900 dark:zyvnox-text-slate-100 zyvnox-text-sm zyvnox-transition-colors zyvnox-appearance-none"
              >
                <option value="Profesional">{{ t('editor.aiToneProfessional') }}</option>
                <option value="Santai">{{ t('editor.aiToneCasual') }}</option>
                <option value="Informatif">{{ t('editor.aiToneInformative') }}</option>
                <option value="Persuasif">{{ t('editor.aiTonePersuasive') }}</option>
              </select>
            </div>
          </div>

          <div
            class="zyvnox-bg-purple-500/10 zyvnox-border zyvnox-border-dashed zyvnox-border-purple-500/30 zyvnox-p-4 zyvnox-rounded-xl zyvnox-flex zyvnox-gap-3 zyvnox-text-purple-600 dark:zyvnox-text-purple-400 zyvnox-text-xs zyvnox-leading-relaxed"
          >
            <span class="zyvnox-i-mdi-auto-fix zyvnox-text-lg zyvnox-shrink-0"></span>
            <p class="zyvnox-m-0">
              {{ t('editor.aiTips') }}
            </p>
          </div>
        </div>

        <div
          class="zyvnox-p-5 zyvnox-bg-slate-50 dark:zyvnox-bg-slate-900 zyvnox-border-t zyvnox-border-slate-200 dark:zyvnox-border-slate-700 zyvnox-flex zyvnox-justify-end zyvnox-gap-3"
        >
          <button
            @click="$emit('close')"
            class="zyvnox-bg-transparent zyvnox-text-slate-600 dark:zyvnox-text-slate-400 zyvnox-px-5 zyvnox-py-2.5 zyvnox-font-semibold zyvnox-text-sm zyvnox-cursor-pointer zyvnox-rounded-xl zyvnox-border zyvnox-border-slate-300 dark:zyvnox-border-slate-600 hover:zyvnox-bg-slate-100 dark:hover:zyvnox-bg-slate-800 zyvnox-transition-colors"
          >
            {{ t('common.cancel') }}
          </button>
          <button
            @click="submit"
            class="zyvnox-bg-purple-600 hover:zyvnox-bg-purple-700 zyvnox-text-white zyvnox-px-5 zyvnox-py-2.5 zyvnox-font-bold zyvnox-text-sm zyvnox-rounded-xl zyvnox-flex zyvnox-items-center zyvnox-cursor-pointer zyvnox-border-none zyvnox-transition-all hover:-zyvnox-translate-y-0.5 hover:zyvnox-shadow-lg hover:zyvnox-shadow-purple-500/30 disabled:zyvnox-opacity-50 disabled:zyvnox-cursor-not-allowed disabled:zyvnox-transform-none disabled:zyvnox-shadow-none"
            :disabled="!form.topic || !form.keyword"
          >
            <span class="zyvnox-i-mdi-sparkles zyvnox-mr-1"></span>
            {{ t('editor.aiGenerateNow') }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useI18n } from '../../../composables/useI18n'

const props = defineProps<{ show: boolean; lang?: string }>()
const emit = defineEmits(['close', 'submit'])

const { t } = useI18n(computed(() => props.lang))

const form = reactive({
  topic: '',
  keyword: '',
  tone: 'Profesional',
})

const submit = () => {
  emit('submit', { ...form })
}
</script>
