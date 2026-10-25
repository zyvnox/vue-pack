<template>
  <div
    class="h-full flex flex-col bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 transition-colors duration-200"
  >
    <!-- Editor Header Toolbar -->
    <div
      class="px-4 py-2 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 select-none transition-colors duration-200"
    >
      <div class="flex items-center gap-2 font-mono">
        <span class="text-blue-500 dark:text-blue-400">⚡</span>
        <span class="font-semibold text-slate-800 dark:text-slate-200">App.vue</span>
        <span
          class="text-[10px] text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-950/80 border border-blue-300 dark:border-blue-800/60 px-1.5 py-0.5 rounded font-mono"
        >
          Vue SFC
        </span>
      </div>
      <div class="flex items-center gap-2 text-[11px] text-slate-400 dark:text-slate-500 font-mono">
        <span v-if="isMonacoReady" class="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>VS Code Engine</span>
        </span>
        <span v-else class="text-amber-500 flex items-center gap-1">
          <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
          <span>Loading Editor...</span>
        </span>
        <span>•</span>
        <span class="hidden sm:inline">Ctrl+Space: Autocomplete</span>
      </div>
    </div>

    <!-- Editor Workspace Area -->
    <div class="flex-1 relative flex overflow-hidden">
      <!-- 1. Monaco Editor Container -->
      <div
        ref="monacoContainer"
        class="w-full h-full"
        :class="{ 'opacity-0 pointer-events-none absolute': !isMonacoReady }"
      ></div>

      <!-- 2. Fallback Textarea Editor (Displayed while Monaco is loading or in offline environments) -->
      <div
        v-if="!isMonacoReady"
        class="w-full h-full flex overflow-hidden absolute inset-0 bg-white dark:bg-slate-950"
      >
        <!-- Line Numbers Column -->
        <div
          class="w-12 py-3 bg-slate-50 dark:bg-slate-950/80 text-right pr-3 select-none text-xs font-mono text-slate-400 dark:text-slate-600 border-r border-slate-200 dark:border-slate-900 overflow-hidden leading-6"
        >
          <div v-for="n in fallbackLines" :key="n">{{ n }}</div>
        </div>

        <!-- Plain Textarea -->
        <textarea
          ref="textareaEl"
          :value="modelValue"
          @input="onFallbackInput"
          @keydown.tab.prevent="onFallbackTab"
          class="flex-1 p-3 bg-transparent text-slate-900 dark:text-slate-100 font-mono text-xs leading-6 resize-none outline-none whitespace-pre overflow-auto font-normal focus:ring-0 border-none"
          placeholder="Type or paste Vue SFC code here..."
          spellcheck="false"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: string
    isDark?: boolean
  }>(),
  {
    isDark: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const monacoContainer = ref<HTMLElement | null>(null)
const textareaEl = ref<HTMLTextAreaElement | null>(null)
const isMonacoReady = ref(false)
let editorInstance: any = null
let completionDisposable: any = null

// Fallback line counting
const fallbackLines = computed(() => {
  const count = (props.modelValue || '').split('\n').length
  return Math.max(count, 1)
})

const onFallbackInput = (e: Event) => {
  const val = (e.target as HTMLTextAreaElement).value
  emit('update:modelValue', val)
}

const onFallbackTab = (e: KeyboardEvent) => {
  const target = e.target as HTMLTextAreaElement
  const start = target.selectionStart
  const end = target.selectionEnd
  const value = target.value

  const updated = value.substring(0, start) + '  ' + value.substring(end)
  emit('update:modelValue', updated)

  setTimeout(() => {
    target.selectionStart = target.selectionEnd = start + 2
  }, 0)
}

// Custom autocomplete completions for Vue & Zyvnox Vue Pack
function registerAutocomplete(monaco: any) {
  if (completionDisposable) return

  completionDisposable = monaco.languages.registerCompletionItemProvider('html', {
    triggerCharacters: ['<', '.', ':', '@', 'v', 'd', 's', 't', 'f', 'm', 'n', 'c', 'p', 'b', 'l', 'a', 'r'],
    provideCompletionItems: (model: any, position: any) => {
      const word = model.getWordUntilPosition(position)
      const range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn,
      }

      const suggestions = [
        // HTML Elements
        {
          label: 'div',
          kind: monaco.languages.CompletionItemKind.Snippet,
          documentation: 'HTML <div> element container',
          insertText: '<div class="$1">\n\t$0\n</div>',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'button',
          kind: monaco.languages.CompletionItemKind.Snippet,
          documentation: 'HTML <button> click element',
          insertText: '<button type="button" @click="$1" class="${2:px-4 py-2 bg-blue-600 text-white rounded-lg}">\n\t$0\n</button>',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'span',
          kind: monaco.languages.CompletionItemKind.Snippet,
          documentation: 'HTML <span> inline element',
          insertText: '<span class="$1">$0</span>',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'p',
          kind: monaco.languages.CompletionItemKind.Snippet,
          documentation: 'HTML <p> paragraph element',
          insertText: '<p class="$1">$0</p>',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'template',
          kind: monaco.languages.CompletionItemKind.Snippet,
          documentation: 'Vue SFC <template> section',
          insertText: '<template>\n\t$0\n</template>',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'script setup',
          kind: monaco.languages.CompletionItemKind.Snippet,
          documentation: 'Vue 3 <script setup lang="ts"> section',
          insertText: '<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { TextInput } from \'@zyvnox/vue-pack/components\'\n\nconst name = ref(\'\')\n$0\n<\/script>',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        // Core Zyvnox Vue Pack Components
        {
          label: 'TextInput',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox TextInput component with reactive v-model and validation',
          insertText: '<TextInput v-model="$1" label="${2:Text Label}" placeholder="$3" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'NumberInput',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox NumberInput component with numeric bounds',
          insertText: '<NumberInput v-model="$1" label="${2:Number Label}" :min="${3:0}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'CurrencyInput',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox CurrencyInput with auto-formatted locale display',
          insertText: '<CurrencyInput v-model="$1" label="${2:Price}" currency="${3:IDR}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'EmailInput',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox RFC-compliant EmailInput',
          insertText: '<EmailInput v-model="$1" label="${2:Email Address}" placeholder="user@example.com" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'PasswordInput',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox Secure PasswordInput with visibility toggle',
          insertText: '<PasswordInput v-model="$1" label="${2:Password}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'TelInput',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox International Telephone Input',
          insertText: '<TelInput v-model="$1" label="${2:Phone Number}" placeholder="+62..." />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'UrlInput',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox Web URL Input with validation',
          insertText: '<UrlInput v-model="$1" label="${2:Website URL}" placeholder="https://..." />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'TextAreaInput',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox Multiline TextAreaInput',
          insertText: '<TextAreaInput v-model="$1" label="${2:Description}" :rows="${3:3}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'TextAreaQuillInput',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox Rich Text WYSIWYG Editor (Quill 2.0 with custom fonts & image upload)',
          insertText: '<TextAreaQuillInput v-model="$1" label="${2:Rich Content}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'MapPicker',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox GIS Interactive Leaflet Map Coordinates & Geocoding Picker',
          insertText: '<MapPicker v-model="$1" label="${2:Map Location}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'ColorInput',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox Color Picker & Hex Palette Input',
          insertText: '<ColorInput v-model="$1" label="${2:Select Color}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'SelectedOptions',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox Searchable Combobox & Multi-Select Dropdown',
          insertText: '<SelectedOptions v-model="$1" label="${2:Choose Option}" :options="${3:options}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'TagInput',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox Chip / Tag Array Input',
          insertText: '<TagInput v-model="$1" label="${2:Tags}" placeholder="Add tag..." />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'RateInput',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox Star Rating Input',
          insertText: '<RateInput v-model="$1" label="${2:Rating}" :max="${3:5}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'DateInput',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox DateInput picker (YYYY-MM-DD)',
          insertText: '<DateInput v-model="$1" label="${2:Select Date}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'DateTimeInput',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox ISO DateTimeInput picker',
          insertText: '<DateTimeInput v-model="$1" label="${2:Date & Time}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'TimeInput',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox 24h TimeInput picker',
          insertText: '<TimeInput v-model="$1" label="${2:Time (HH:mm)}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'ToggleInput',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox ToggleInput switch component',
          insertText: '<ToggleInput v-model="$1" label="${2:Active Status}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'FileInput',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox Single File Upload Input',
          insertText: '<FileInput v-model="$1" label="${2:Attach Document}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'FileArrayInput',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox Multiple File Upload List Input',
          insertText: '<FileArrayInput v-model="$1" label="${2:Upload Files}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'ImageInput',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox Single Image Input with live thumbnail preview',
          insertText: '<ImageInput v-model="$1" label="${2:Profile Picture}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'ImageArrayInput',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox Image Gallery Upload Array',
          insertText: '<ImageArrayInput v-model="$1" label="${2:Gallery Images}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'ArrayObjectInput',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox Repeatable Form Array of Objects Generator',
          insertText: '<ArrayObjectInput v-model="$1" label="${2:Items}" :schema="${3:itemSchema}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'ObjectInput',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox Nested JSON Object Fieldset',
          insertText: '<ObjectInput v-model="$1" label="${2:Settings}" :schema="${3:nestedSchema}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'GroupRendererInput',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox Multi-column Form Fieldset Group Renderer',
          insertText: '<GroupRendererInput :schema="${1:groupSchema}" v-model="${2:formData}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'FormModal',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox Schema-Driven FormModal Generator',
          insertText: '<FormModal :schema="${1:schema}" v-model="${2:isOpen}" @submit="${3:handleSubmit}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'TabelData',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox Enterprise Datatable Suite with full CRUD orchestration',
          insertText: '<TabelData :base="${1:tableConfig}" :validation="${2:tableValidation}" :demo="true" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'AlertApp',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox AlertApp banner feedback notification',
          insertText: '<AlertApp type="${1|info,success,warning,danger|}" title="${2:Notification}">\n\t$0\n</AlertApp>',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'Loader',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox Animated Loader & Spinner indicator',
          insertText: '<Loader ref="${1:loaderRef}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'Tooltip',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox Interactive Tooltip popup hint',
          insertText: '<Tooltip text="${1:Tooltip information}">\n\t$0\n</Tooltip>',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'SafeHtml',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox XSS-sanitized HTML viewer powered by DOMPurify',
          insertText: '<SafeHtml :content="${1:trustedHtmlContent}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'BaseImage',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox Optimized Image element with lazy loading & skeleton',
          insertText: '<BaseImage src="${1:imageSrc}" alt="${2:Description}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'ModalDetailData',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox Read-only Record Detail View Modal',
          insertText: '<ModalDetailData v-model="${1:isOpen}" :data="${2:selectedRow}" :schema="${3:schema}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'WarningForm',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox Confirmation Modal (destructive, warning, or approval prompt)',
          insertText: '<WarningForm v-if="${1:showWarning}" type="${2|danger,warning,success,info|}" title="${3:Warning Title}" message="${4:Are you sure?}" @confirm="${5:handleConfirm}" @cancel="${1:showWarning} = false" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'SponsorButton',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox Saweria & Ko-fi Sponsor Button Group',
          insertText: '<SponsorButton variant="${1|both,saweria,kofi|}" />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'SponsorCard',
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: 'Zyvnox Project Sponsor Banner Card',
          insertText: '<SponsorCard />',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        // Vue Directives & Snippets
        {
          label: 'v-model',
          kind: monaco.languages.CompletionItemKind.Property,
          documentation: 'Vue two-way data binding',
          insertText: 'v-model="$1"',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'v-if',
          kind: monaco.languages.CompletionItemKind.Property,
          documentation: 'Vue conditional rendering',
          insertText: 'v-if="$1"',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'v-for',
          kind: monaco.languages.CompletionItemKind.Property,
          documentation: 'Vue list rendering directive',
          insertText: 'v-for="${1:item} in ${2:items}" :key="${1:item}.${3:id}"',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: '@click',
          kind: monaco.languages.CompletionItemKind.Event,
          documentation: 'Vue click event handler',
          insertText: '@click="$1"',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'ref',
          kind: monaco.languages.CompletionItemKind.Function,
          documentation: 'Vue 3 reactive ref primitive',
          insertText: 'const ${1:name} = ref(${2:\'\'})',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'computed',
          kind: monaco.languages.CompletionItemKind.Function,
          documentation: 'Vue 3 computed getter',
          insertText: 'const ${1:name} = computed(() => ${2:expression})',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
      ]

      return { suggestions }
    },
  })
}

// Load Monaco Editor dynamically via CDN loader
function loadMonaco(): Promise<any> {
  if ((window as any).monaco) {
    return Promise.resolve((window as any).monaco)
  }

  return new Promise((resolve, reject) => {
    // Configure Monaco Environment cross-origin worker fallback
    if (!(window as any).MonacoEnvironment) {
      ;(window as any).MonacoEnvironment = {
        getWorkerUrl: function () {
          return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
            self.MonacoEnvironment = {
              baseUrl: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/'
            };
            importScripts('https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs/base/worker/workerMain.js');
          `)}`
        },
      }
    }

    const onLoaderAvailable = () => {
      const req = (window as any).require
      req.config({
        paths: {
          vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs',
        },
      })
      req(['vs/editor/editor.main'], () => {
        resolve((window as any).monaco)
      })
    }

    if ((window as any).require && (window as any).require.config) {
      onLoaderAvailable()
      return
    }

    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs/loader.js'
    script.async = true
    script.onload = onLoaderAvailable
    script.onerror = (err) => {
      console.warn('Monaco Editor CDN failed to load, keeping fallback editor active.', err)
      reject(err)
    }
    document.head.appendChild(script)
  })
}

onMounted(async () => {
  try {
    const monaco = await loadMonaco()
    if (!monacoContainer.value) return

    registerAutocomplete(monaco)

    editorInstance = monaco.editor.create(monacoContainer.value, {
      value: props.modelValue,
      language: 'html',
      theme: props.isDark ? 'vs-dark' : 'vs',
      automaticLayout: true,
      fontSize: 13,
      lineHeight: 20,
      fontFamily: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', Consolas, Menlo, Monaco, monospace",
      fontLigatures: true,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      tabSize: 2,
      wordWrap: 'on',
      formatOnPaste: true,
      formatOnType: true,
      suggestOnTriggerCharacters: true,
      acceptSuggestionOnEnter: 'on',
      quickSuggestions: {
        other: true,
        comments: false,
        strings: true,
      },
      renderWhitespace: 'none',
      scrollbar: {
        verticalScrollbarSize: 8,
        horizontalScrollbarSize: 8,
      },
    })

    editorInstance.onDidChangeModelContent(() => {
      const val = editorInstance.getValue()
      emit('update:modelValue', val)
    })

    isMonacoReady.value = true
  } catch (err) {
    console.warn('Using fallback textarea editor due to Monaco initialization delay:', err)
  }
})

// Watch modelValue from parent (e.g. Preset button clicks)
watch(
  () => props.modelValue,
  (newVal) => {
    if (editorInstance && editorInstance.getValue() !== newVal) {
      editorInstance.setValue(newVal)
    }
  },
)

// Watch dark mode toggle
watch(
  () => props.isDark,
  (dark) => {
    if ((window as any).monaco) {
      ;(window as any).monaco.editor.setTheme(dark ? 'vs-dark' : 'vs')
    }
  },
)

onBeforeUnmount(() => {
  if (editorInstance) {
    editorInstance.dispose()
    editorInstance = null
  }
  if (completionDisposable) {
    completionDisposable.dispose()
    completionDisposable = null
  }
})
</script>
