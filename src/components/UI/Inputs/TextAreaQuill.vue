<template>
  <Teleport to="body" :disabled="!isMaximized">
    <div class="rich-text-editor-wrapper" :class="{ 'editor-maximized': isMaximized }">
      <div class="editor-header">
        <label
          :for="id"
          class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-text-sm zyvnox-font-medium zyvnox-mb-2 zyvnox-text-slate-900 zyvnox-transition-colors zyvnox-duration-200 dark:zyvnox-text-slate-100"
          :class="{
            'zyvnox-text-red-500 dark:zyvnox-text-red-400': errorMessage.length > 0 || error,
          }"
        >
          {{ label }}
          <Tooltip v-if="tooltip" :text="tooltip" :position="tooltipPosition ?? 'top'">
            <span class="zyvnox-text-slate-400 dark:zyvnox-text-slate-500 zyvnox-text-xs">
              {{ tooltipIcon ?? '❓' }}
            </span>
          </Tooltip>
        </label>
      </div>

      <div
        :id="`toolbar-container-${id}`"
        class="quill-toolbar zyvnox-flex zyvnox-flex-wrap zyvnox-items-center zyvnox-gap-1 zyvnox-p-2"
      >
        <!-- 1. HISTORY (UNDO & REDO) -->
        <span class="ql-formats">
          <button class="ql-undo" type="button" @click="handleUndo" :title="t('editor.undo')">
            <svg viewBox="0 0 18 18" width="18" height="18">
              <polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"></polygon>
              <path class="ql-stroke" d="M3,11 A5,5 0 0,1 12,6 A5,5 0 0,1 15,11"></path>
            </svg>
          </button>
          <button class="ql-redo" type="button" @click="handleRedo" :title="t('editor.redo')">
            <svg viewBox="0 0 18 18" width="18" height="18">
              <polygon class="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"></polygon>
              <path class="ql-stroke" d="M15,11 A5,5 0 0,0 6,6 A5,5 0 0,0 3,11"></path>
            </svg>
          </button>
        </span>

        <!-- 2. AI GENERATOR BUTTON -->
        <span class="ql-formats" v-if="api?.aiContentGeneration">
          <button
            @click="openAIModal"
            class="ai-gen-button dark:zyvnox-text-white"
            type="button"
            :title="t('editor.aiGenerate')"
          >
            <!-- inline simple robot SVG -->
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
              <rect
                x="6"
                y="7"
                width="12"
                height="9"
                rx="2"
                ry="2"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              ></rect>
              <circle cx="9" cy="11" r="0.9" fill="currentColor"></circle>
              <circle cx="15" cy="11" r="0.9" fill="currentColor"></circle>
              <rect
                x="10.5"
                y="3.5"
                width="3"
                height="2"
                rx="0.5"
                ry="0.5"
                fill="none"
                stroke="currentColor"
                stroke-width="1.2"
              ></rect>
              <line
                x1="12"
                y1="16"
                x2="12"
                y2="18"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linecap="round"
              ></line>
            </svg>
          </button>
        </span>

        <!-- 3. EXTENDED FONT FAMILIES & PIXEL SIZES -->
        <span class="ql-formats">
          <select class="ql-font" :title="t('editor.fontFamily')">
            <option selected label="Sans Serif">Sans Serif</option>
            <option value="serif" label="Serif">Serif</option>
            <option value="monospace" label="Monospace">Monospace</option>
            <option value="inter" label="Inter">Inter</option>
            <option value="roboto" label="Roboto">Roboto</option>
            <option value="poppins" label="Poppins">Poppins</option>
            <option value="arial" label="Arial">Arial</option>
            <option value="georgia" label="Georgia">Georgia</option>
            <option value="times-new-roman" label="Times New Roman">Times New Roman</option>
            <option value="courier-new" label="Courier New">Courier New</option>
            <option value="trebuchet-ms" label="Trebuchet MS">Trebuchet MS</option>
            <option value="verdana" label="Verdana">Verdana</option>
          </select>
          <select class="ql-size" :title="t('editor.fontSize')">
            <option value="9px" label="9px">9px</option>
            <option value="10px" label="10px">10px</option>
            <option value="11px" label="11px">11px</option>
            <option value="12px" label="12px">12px</option>
            <option value="13px" label="13px">13px</option>
            <option value="14px" label="14px" selected>14px ({{ t('editor.normal') }})</option>
            <option value="16px" label="16px">16px</option>
            <option value="18px" label="18px">18px</option>
            <option value="20px" label="20px">20px</option>
            <option value="22px" label="22px">22px</option>
            <option value="24px" label="24px">24px</option>
            <option value="28px" label="28px">28px</option>
            <option value="32px" label="32px">32px</option>
            <option value="36px" label="36px">36px</option>
            <option value="48px" label="48px">48px</option>
          </select>
        </span>

        <!-- 4. HEADINGS DROPDOWN (H1 - H6) & QUICK BUTTONS (H1 - H5) -->
        <span class="ql-formats">
          <select class="ql-header" :title="t('editor.headingLevel')">
            <option value="1">{{ t('editor.headingLevel') }} 1</option>
            <option value="2">{{ t('editor.headingLevel') }} 2</option>
            <option value="3">{{ t('editor.headingLevel') }} 3</option>
            <option value="4">{{ t('editor.headingLevel') }} 4</option>
            <option value="5">{{ t('editor.headingLevel') }} 5</option>
            <option value="6">{{ t('editor.headingLevel') }} 6</option>
            <option selected>{{ t('editor.normal') }}</option>
          </select>
          <button
            class="ql-header"
            value="1"
            :title="`${t('editor.headingLevel')} 1 (H1)`"
          ></button>
          <button
            class="ql-header"
            value="2"
            :title="`${t('editor.headingLevel')} 2 (H2)`"
          ></button>
          <button
            class="ql-header"
            value="3"
            :title="`${t('editor.headingLevel')} 3 (H3)`"
          ></button>
          <button
            class="ql-header"
            value="4"
            :title="`${t('editor.headingLevel')} 4 (H4)`"
          ></button>
          <button
            class="ql-header"
            value="5"
            :title="`${t('editor.headingLevel')} 5 (H5)`"
          ></button>
        </span>

        <!-- 5. INLINE FORMATTING & SCRIPTS -->
        <span class="ql-formats">
          <button class="ql-bold" :title="t('editor.bold')"></button>
          <button class="ql-italic" :title="t('editor.italic')"></button>
          <button class="ql-underline" :title="t('editor.underline')"></button>
          <button class="ql-strike" :title="t('editor.strike')"></button>
          <button class="ql-script" value="sub" :title="t('editor.subscript')"></button>
          <button class="ql-script" value="super" :title="t('editor.superscript')"></button>
        </span>

        <!-- 6. COLORS -->
        <span class="ql-formats">
          <select class="ql-color" :title="t('editor.textColor')"></select>
          <select class="ql-background" :title="t('editor.bgColor')"></select>
        </span>

        <!-- 7. ALIGNMENT & TEXT DIRECTION -->
        <span class="ql-formats">
          <select class="ql-align" :title="t('editor.alignCenter')"></select>
          <button class="ql-direction" value="rtl" :title="t('editor.textDirection')"></button>
        </span>

        <!-- 8. LISTS & INDENTS (ORDERED, BULLET, CHECKLIST) -->
        <span class="ql-formats">
          <button class="ql-list" value="ordered" :title="t('editor.orderedList')"></button>
          <button class="ql-list" value="bullet" :title="t('editor.bulletList')"></button>
          <button class="ql-list" value="check" :title="t('editor.checkList')"></button>
          <button class="ql-indent" value="-1" :title="t('editor.indentDecrease')"></button>
          <button class="ql-indent" value="+1" :title="t('editor.indentIncrease')"></button>
        </span>

        <!-- 9. BLOCKS (QUOTE, CODE, DIVIDER) -->
        <span class="ql-formats">
          <button class="ql-blockquote" :title="t('editor.blockquote')"></button>
          <button class="ql-code-block" :title="t('editor.codeBlock')"></button>
          <button
            class="ql-divider"
            type="button"
            @click="insertHorizontalRule"
            :title="t('editor.divider')"
          >
            <svg viewBox="0 0 18 18" width="18" height="18">
              <line class="ql-stroke" x1="2" y1="9" x2="16" y2="9"></line>
              <line class="ql-stroke" x1="2" y1="5" x2="16" y2="5" stroke-dasharray="2,2"></line>
            </svg>
          </button>
        </span>

        <!-- 10. MEDIA EMBED -->
        <span class="ql-formats">
          <button class="ql-link" :title="t('editor.insertLink')"></button>
          <button class="ql-image" :title="t('editor.insertImage')"></button>
          <button class="ql-video" :title="t('editor.insertVideo')"></button>
        </span>

        <!-- 11. CLEAN & SYSTEM UTILITIES -->
        <span class="ql-formats">
          <button class="ql-clean" :title="t('editor.clearFormat')"></button>
          <!-- MAXIMIZE -->
          <button
            @click="toggleMaximize"
            class="maximize-button"
            type="button"
            :title="isMaximized ? t('editor.minimize') : t('editor.maximize')"
          >
            <svg v-if="!isMaximized" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true">
              <rect class="ql-stroke" x="3" y="3" width="12" height="12" rx="1" ry="1"></rect>
              <rect class="ql-stroke" x="10" y="10" width="1" height="1"></rect>
              <rect class="ql-stroke" x="7" y="10" width="1" height="1"></rect>
              <rect class="ql-stroke" x="10" y="7" width="1" height="1"></rect>
              <rect class="ql-stroke" x="7" y="7" width="1" height="1"></rect>
            </svg>
            <svg v-else viewBox="0 0 18 18" width="18" height="18" aria-hidden="true">
              <rect class="ql-stroke" x="5" y="5" width="8" height="8" rx="1" ry="1"></rect>
              <polyline class="ql-stroke" points="15 3 10 8"></polyline>
              <polyline class="ql-stroke" points="3 15 8 10"></polyline>
            </svg>
          </button>

          <!-- CODE VIEW -->
          <button
            @click="toggleCodeView"
            class="code-view-button"
            type="button"
            :title="t('editor.sourceCode')"
          >
            <svg viewBox="0 0 18 18" width="18" height="18" aria-hidden="true">
              <polyline class="ql-stroke" points="5 3 2 9 5 15"></polyline>
              <polyline class="ql-stroke" points="13 3 16 9 13 15"></polyline>
            </svg>
          </button>
        </span>
      </div>

      <div
        :class="isMaximized ? 'zyvnox-max-h-[calc(100%-4rem)]' : 'zyvnox-max-h-lg'"
        class="editor-relative-container zyvnox-overflow-y-auto"
      >
        <!-- LOADING OVERLAY UNTUK AI & UPLOAD -->
        <div v-if="isUploading || isGenerating" class="upload-overlay">
          <div class="spinner"></div>
          <p class="zyvnox-mt-2 zyvnox-font-bold">
            {{ isGenerating ? t('editor.generatingContent') : t('upload.uploading') }}
          </p>
        </div>

        <div v-show="!isCodeView" class="zyvnox-max-w-none zyvnox-h-full zyvnox-overflow-hidden">
          <div
            :id="`editor-container-${id}`"
            class="quill-editor-container"
            :class="{ 'has-error': errorMessage.length > 0 || error }"
          ></div>
        </div>
        <textarea
          v-if="isCodeView"
          v-model="sourceContent"
          class="code-view-editor"
          spellcheck="false"
        ></textarea>
      </div>

      <!-- WORD & CHARACTER COUNTER FOOTER -->
      <div
        class="zyvnox-flex zyvnox-items-center zyvnox-justify-between zyvnox-px-4 zyvnox-py-2 zyvnox-bg-slate-50 dark:zyvnox-bg-slate-800/80 zyvnox-border zyvnox-border-t-0 zyvnox-border-slate-200 dark:zyvnox-border-slate-700 zyvnox-rounded-b-xl zyvnox-text-xs zyvnox-text-slate-500 dark:zyvnox-text-slate-400 zyvnox-transition-colors"
      >
        <div class="zyvnox-flex zyvnox-items-center zyvnox-gap-4">
          <span
            >{{ t('counter.word') }}:
            <strong class="zyvnox-text-slate-700 dark:zyvnox-text-slate-200">{{
              liveWordCount
            }}</strong></span
          >
          <span
            >{{ t('counter.character') }}:
            <strong class="zyvnox-text-slate-700 dark:zyvnox-text-slate-200">{{
              liveCharCount
            }}</strong></span
          >
        </div>
        <div class="zyvnox-flex zyvnox-items-center zyvnox-gap-3">
          <span v-if="props.validate?.minLength" class="zyvnox-text-[11px]">
            Min: {{ props.validate.minLength }}
          </span>
          <span
            v-if="props.validate?.maxLength"
            class="zyvnox-text-[11px]"
            :class="{
              'zyvnox-text-red-500 dark:zyvnox-text-red-400 zyvnox-font-bold':
                liveCharCount > props.validate.maxLength,
            }"
          >
            Max: {{ props.validate.maxLength }}
          </span>
          <span
            class="zyvnox-text-[11px] zyvnox-text-emerald-600 dark:zyvnox-text-emerald-400 zyvnox-font-medium"
          >
            Quill 2.0 Extended
          </span>
        </div>
      </div>

      <!-- Error Messages -->
      <div class="zyvnox-mt-2">
        <p
          v-for="(err, i) in errorMessage"
          :key="i"
          class="zyvnox-text-sm zyvnox-text-red-500 zyvnox-mt-1 dark:zyvnox-text-red-400"
        >
          {{ err }}
        </p>
        <p
          v-if="typeof props.error === 'string' && errorMessage.length === 0"
          class="zyvnox-text-sm zyvnox-text-red-500 zyvnox-mt-1 dark:zyvnox-text-red-400"
        >
          {{ error }}
        </p>
      </div>

      <!-- MODALS -->
      <QuillAIModal
        v-if="showAIModal && api?.aiContentGeneration"
        :show="showAIModal"
        :lang="props.lang"
        @close="showAIModal = false"
        @submit="handleAIGenerate"
      />

      <QuillEmbedModal
        :show="showEmbedModal"
        :mode="embedMode"
        :api="api"
        :lang="props.lang"
        :initial-value="currentLinkUrl"
        :initial-text="currentLinkText"
        @close="showEmbedModal = false"
        @submit="handleEmbedSubmit"
      />

      <QuillAltModal
        :show="showAltModal"
        :lang="props.lang"
        :initial-value="currentAltValue"
        @close="showAltModal = false"
        @submit="handleAltSubmit"
      />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import type Quill from 'quill'
import { computed, inject, onMounted, onUnmounted, ref, watch, type Ref } from 'vue'
import { sanitizeHtml } from '../../../untils/sanitize'
import type { GlobalDefaultText } from '../../../configs/types/globalText.types'
import type { TextEdiorQuillProps } from '../../../configs/types/props.types'
import { defaultTextLabelsMap } from '../../../configs/i18n/labels'
import { setUID } from '../../../untils/misc'
import { secureFetch } from '../../../lib/secureFetch'
import Tooltip from '../Display/Tooltip.vue'
import QuillEmbedModal from './components/QuillEmbedModal.vue'
import QuillAltModal from './components/QuillAltModal.vue'
import QuillAIModal from './components/QuillAiModal.vue'
import { useQuillResizeToolbar } from './composables/useQuillResizeToolbar'
import { useI18n } from '../../composables/useI18n'

import 'quill/dist/quill.snow.css'
import 'quill-resize-module/dist/resize.css'

const props = withDefaults(defineProps<TextEdiorQuillProps>(), {
  id: () => setUID(),
  tooltipPosition: 'top',
  tooltipIcon: '❓',
})

const { t } = useI18n(computed(() => props.lang))

useQuillResizeToolbar()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string, key: string): void
  (e: 'update:title', value: string): void
  (e: 'push:error', message: string[], key: string): void
  (e: 'remove:error', key: string): void
}>()

// --- STATE ---
let quillInstance: Quill | null = null
const isMaximized = ref(false)
const errorMessage = ref<string[]>([])
const isUploading = ref(false)
const isGenerating = ref(false)
const uploadType = ref('')

const showAIModal = ref(false)
const showEmbedModal = ref(false)
const embedMode = ref<'image' | 'video' | 'link'>('link')
const currentLinkUrl = ref('')
const currentLinkText = ref('')
let savedRange: any = null

const showAltModal = ref(false)
const currentImageElement = ref<HTMLElement | null>(null)
const currentAltValue = ref('')

const isCodeView = ref(false)
const sourceContent = ref('')

// Live text statistics
const liveWordCount = ref(0)
const liveCharCount = ref(0)

const updateStats = () => {
  if (!quillInstance) return
  const text = quillInstance.getText().trim()
  liveCharCount.value = text ? text.length : 0
  const words = text ? text.split(/\s+/).filter(Boolean) : []
  liveWordCount.value = words.length
}

// --- LOGIC & LABELS ---
const injected = inject<{ labels: Ref<GlobalDefaultText> }>('TableComponents', {
  labels: ref(defaultTextLabelsMap[props.lang ?? 'en']),
})
const placeholder = computed(() => props.placeholder ?? t('placeholder.quillEditor'))

// --- ACTIONS ---
const toggleMaximize = () => (isMaximized.value = !isMaximized.value)
const openAIModal = () => (showAIModal.value = true)

const toggleCodeView = () => {
  isCodeView.value = !isCodeView.value
  if (isCodeView.value) {
    sourceContent.value = quillInstance?.root.innerHTML ?? props.modelValue ?? ''
  } else if (quillInstance) {
    quillInstance.root.innerHTML = sanitizeHtml(sourceContent.value)
    updateStats()
  }
}

// History Controls
const handleUndo = () => {
  if (quillInstance && (quillInstance as any).history) {
    ;(quillInstance as any).history.undo()
  }
}

const handleRedo = () => {
  if (quillInstance && (quillInstance as any).history) {
    ;(quillInstance as any).history.redo()
  }
}

// Horizontal Rule Insert
const insertHorizontalRule = () => {
  if (!quillInstance) return
  const range = quillInstance.getSelection(true) || { index: 0, length: 0 }
  quillInstance.clipboard.dangerouslyPasteHTML(range.index, '<hr>', 'user')
  quillInstance.setSelection(range.index + 1, 0, 'user')
}

// --- AI GENERATION LOGIC ---
const handleAIGenerate = async (payload: { topic: string; keyword: string; tone: string }) => {
  if (!props.api?.aiContentGeneration || !quillInstance) return

  showAIModal.value = false
  isGenerating.value = true

  const currentContent =
    quillInstance.root.innerHTML === '<p><br></p>' ||
    quillInstance.root.innerHTML === '<p class="ql-align-justify"><br></p>'
      ? ''
      : quillInstance.root.innerHTML

  try {
    const { api, config } = props.api.aiContentGeneration

    const response = await secureFetch(api, {
      ...config,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(config?.headers || {}),
      },
      body: JSON.stringify({
        topic: payload.topic,
        keyword: payload.keyword,
        tone: payload.tone,
        content: currentContent ?? undefined,
      }),
    })

    const result = await response.json()

    if (response.ok && result.data) {
      if (result.data.title) {
        emit('update:title', result.data.title)
      }

      const cleanHTML = sanitizeHtml(result.data.htmlContent)
      quillInstance.root.innerHTML = cleanHTML
      updateStats()

      emit('update:modelValue', cleanHTML, props.id!)
    } else {
      throw new Error(result.errors || 'AI gagal membuat konten')
    }
  } catch (error: any) {
    console.error('AI Error:', error)
    errorMessage.value = [error.message || 'Gagal menghubungi server AI']
  } finally {
    isGenerating.value = false
  }
}

// --- QUILL INITIALIZATION ---
onMounted(async () => {
  const container = document.getElementById(`editor-container-${props.id}`)
  if (!container) return

  const { default: QuillClass } = await import('quill')

  // 1. Register Style-based Font Size Whitelist
  try {
    const SizeStyle = QuillClass.import('attributors/style/size') as any
    SizeStyle.whitelist = [
      '9px',
      '10px',
      '11px',
      '12px',
      '13px',
      '14px',
      '16px',
      '18px',
      '20px',
      '22px',
      '24px',
      '28px',
      '32px',
      '36px',
      '48px',
    ]
    QuillClass.register(SizeStyle, true)
  } catch (e) {
    console.warn('Custom size style registration error', e)
  }

  // 2. Register Style-based Font Family Whitelist
  try {
    const FontStyle = QuillClass.import('attributors/style/font') as any
    FontStyle.whitelist = [
      'sans-serif',
      'serif',
      'monospace',
      'inter',
      'roboto',
      'poppins',
      'arial',
      'georgia',
      'times-new-roman',
      'courier-new',
      'trebuchet-ms',
      'verdana',
    ]
    QuillClass.register(FontStyle, true)
  } catch (e) {
    console.warn('Custom font style registration error', e)
  }

  // 3. Register Resize Module
  try {
    const { default: ResizeModule } = await import('quill-resize-module')
    if (!QuillClass.imports['modules/resize']) {
      QuillClass.register('modules/resize', ResizeModule)
    }
  } catch (e) {
    console.warn('Resize module error', e)
  }

  quillInstance = new QuillClass(container, {
    theme: 'snow',
    readOnly: props.disabled,
    placeholder: placeholder.value,
    modules: {
      toolbar: {
        container: `#toolbar-container-${props.id}`,
        handlers: { image: imageHandler, video: videoHandler, link: linkHandler },
      },
      history: {
        delay: 1000,
        maxStack: 100,
        userOnly: true,
      },
      resize: {
        embedTags: ['IMG', 'VIDEO', 'IFRAME'],
        tools: [
          'left',
          'center',
          'right',
          'full',
          {
            text: 'Alt',
            handler: (evt: any, btn: any, el: HTMLElement) => {
              currentImageElement.value = el
              currentAltValue.value = el.getAttribute('alt') || ''
              showAltModal.value = true
            },
          },
        ],
      },
    },
  })

  if (props.modelValue) {
    quillInstance.root.innerHTML = sanitizeHtml(props.modelValue)
    updateStats()
  }

  quillInstance.on('text-change', () => {
    const html = quillInstance!.root.innerHTML
    updateStats()
    emit('update:modelValue', sanitizeHtml(html), props.id!)
  })
})

const imageHandler = () => {
  embedMode.value = 'image'
  showEmbedModal.value = true
}
const videoHandler = () => {
  embedMode.value = 'video'
  showEmbedModal.value = true
}
const linkHandler = (v: any) => {
  savedRange = quillInstance?.getSelection() || { index: 0, length: 0 }
  currentLinkText.value = quillInstance?.getText(savedRange.index, savedRange.length) || ''
  currentLinkUrl.value = typeof v === 'string' ? v : ''
  embedMode.value = 'link'
  showEmbedModal.value = true
}

const handleEmbedSubmit = (p: any) => {
  if (!quillInstance) return
  showEmbedModal.value = false
  if (embedMode.value === 'link') {
    quillInstance.insertText(savedRange.index, p.text || p.url, 'link', p.url, 'user')
  } else if (embedMode.value === 'image') {
    quillInstance.clipboard.dangerouslyPasteHTML(
      quillInstance.getSelection(true).index,
      `<img src="${p.url}" alt="${p.alt || ''}" />`,
      'user',
    )
  } else {
    quillInstance.insertEmbed(quillInstance.getSelection(true).index, 'video', p.url, 'user')
  }
}

const handleAltSubmit = (val: string) => {
  if (currentImageElement.value) currentImageElement.value.setAttribute('alt', val)
  showAltModal.value = false
}

watch(
  () => props.disabled,
  (v) => quillInstance?.enable(!v),
)

watch(
  () => props.modelValue,
  (newVal) => {
    if (!quillInstance) return
    const currentHtml = quillInstance.root.innerHTML
    if (newVal !== currentHtml && newVal !== undefined) {
      quillInstance.root.innerHTML = sanitizeHtml(newVal || '')
      updateStats()
    }
  },
)

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>
