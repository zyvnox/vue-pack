import{At as e,Ct as t,Mt as n,Ot as r,S as i,Tt as a,_t as o,bt as s,ct as c,ft as l,gt as u,kt as d,lt as f,ot as p,pt as m,st as h,tt as g,ut as _,vt as v,wt as y,xt as b,yt as x}from"./index-EUDlBqHA.js";import{t as S}from"./package-Bqbd9cN5.js";var C={class:`h-full flex flex-col bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 transition-colors duration-200`},w={class:`px-4 py-2 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 select-none transition-colors duration-200`},T={class:`flex items-center gap-2 text-[11px] text-slate-400 dark:text-slate-500 font-mono`},E={key:0,class:`text-emerald-600 dark:text-emerald-400 flex items-center gap-1`},D={key:1,class:`text-amber-500 flex items-center gap-1`},O={class:`flex-1 relative flex overflow-hidden`},k={key:0,class:`w-full h-full flex overflow-hidden absolute inset-0 bg-white dark:bg-slate-950`},A={class:`w-12 py-3 bg-slate-50 dark:bg-slate-950/80 text-right pr-3 select-none text-xs font-mono text-slate-400 dark:text-slate-600 border-r border-slate-200 dark:border-slate-900 overflow-hidden leading-6`},j=[`value`,`onKeydown`],M=o({__name:`CodeEditor`,props:{modelValue:{},isDark:{type:Boolean,default:!1}},emits:[`update:modelValue`],setup(t,{emit:i}){let a=t,o=i,u=r(null),d=r(null),g=r(!1),S=null,M=null,N=f(()=>{let e=(a.modelValue||``).split(`
`).length;return Math.max(e,1)}),P=e=>{let t=e.target.value;o(`update:modelValue`,t)},F=e=>{let t=e.target,n=t.selectionStart,r=t.selectionEnd,i=t.value,a=i.substring(0,n)+`  `+i.substring(r);o(`update:modelValue`,a),setTimeout(()=>{t.selectionStart=t.selectionEnd=n+2},0)};function I(e){M||=e.languages.registerCompletionItemProvider(`html`,{triggerCharacters:[`<`,`.`,`:`,`@`,`v`,`d`,`s`,`t`,`f`,`m`,`n`,`c`,`p`,`b`,`l`,`a`,`r`],provideCompletionItems:(t,n)=>{let r=t.getWordUntilPosition(n),i={startLineNumber:n.lineNumber,endLineNumber:n.lineNumber,startColumn:r.startColumn,endColumn:r.endColumn};return{suggestions:[{label:`div`,kind:e.languages.CompletionItemKind.Snippet,documentation:`HTML <div> element container`,insertText:`<div class="$1">
	$0
</div>`,insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`button`,kind:e.languages.CompletionItemKind.Snippet,documentation:`HTML <button> click element`,insertText:`<button type="button" @click="$1" class="\${2:px-4 py-2 bg-blue-600 text-white rounded-lg}">
	$0
</button>`,insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`span`,kind:e.languages.CompletionItemKind.Snippet,documentation:`HTML <span> inline element`,insertText:`<span class="$1">$0</span>`,insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`p`,kind:e.languages.CompletionItemKind.Snippet,documentation:`HTML <p> paragraph element`,insertText:`<p class="$1">$0</p>`,insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`template`,kind:e.languages.CompletionItemKind.Snippet,documentation:`Vue SFC <template> section`,insertText:`<template>
	$0
</template>`,insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`script setup`,kind:e.languages.CompletionItemKind.Snippet,documentation:`Vue 3 <script setup lang="ts"> section`,insertText:`<script setup lang="ts">
import { ref } from 'vue'
import { TextInput } from '@zyvnox/vue-pack/components'

const name = ref('')
$0
<\/script>`,insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`TextInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox TextInput component with reactive v-model and validation`,insertText:'<TextInput v-model="$1" label="${2:Text Label}" placeholder="$3" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`NumberInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox NumberInput component with numeric bounds`,insertText:'<NumberInput v-model="$1" label="${2:Number Label}" :min="${3:0}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`CurrencyInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox CurrencyInput with auto-formatted locale display`,insertText:'<CurrencyInput v-model="$1" label="${2:Price}" currency="${3:IDR}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`EmailInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox RFC-compliant EmailInput`,insertText:'<EmailInput v-model="$1" label="${2:Email Address}" placeholder="user@example.com" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`PasswordInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Secure PasswordInput with visibility toggle`,insertText:'<PasswordInput v-model="$1" label="${2:Password}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`TextAreaInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Multiline TextAreaInput`,insertText:'<TextAreaInput v-model="$1" label="${2:Description}" :rows="${3:3}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`TextAreaQuill`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Rich Text Editor (Quill 2.0 WYSIWYG)`,insertText:'<TextAreaQuill v-model="$1" label="${2:Rich Content}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`DateInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox DateInput picker (YYYY-MM-DD)`,insertText:'<DateInput v-model="$1" label="${2:Select Date}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`DateTimeInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox ISO DateTimeInput picker`,insertText:'<DateTimeInput v-model="$1" label="${2:Date & Time}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`TimeInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox 24h TimeInput picker`,insertText:'<TimeInput v-model="$1" label="${2:Time (HH:mm)}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`LocationPicker`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox GIS LocationPicker map component (Leaflet & OSM)`,insertText:'<LocationPicker v-model="$1" label="${2:Map Location}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`ToggleInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox ToggleInput switch component`,insertText:'<ToggleInput v-model="$1" label="${2:Active Status}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`FormModal`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Schema-Driven FormModal Generator`,insertText:'<FormModal :schema="${1:schema}" v-model="${2:isOpen}" @submit="${3:handleSubmit}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`TabelData`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Enterprise Datatable Suite with full CRUD orchestration`,insertText:'<TabelData :base="${1:tableConfig}" :validation="${2:tableValidation}" :demo="true" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`AlertApp`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox AlertApp banner feedback notification`,insertText:`<AlertApp type="\${1|info,success,warning,danger|}" title="\${2:Notification}">
	$0
</AlertApp>`,insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`Loader`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Animated Loader & Spinner indicator`,insertText:'<Loader :loading="${1:isLoading}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`v-model`,kind:e.languages.CompletionItemKind.Property,documentation:`Vue two-way data binding`,insertText:`v-model="$1"`,insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`v-if`,kind:e.languages.CompletionItemKind.Property,documentation:`Vue conditional rendering`,insertText:`v-if="$1"`,insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`v-for`,kind:e.languages.CompletionItemKind.Property,documentation:`Vue list rendering directive`,insertText:'v-for="${1:item} in ${2:items}" :key="${1:item}.${3:id}"',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`@click`,kind:e.languages.CompletionItemKind.Event,documentation:`Vue click event handler`,insertText:`@click="$1"`,insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`ref`,kind:e.languages.CompletionItemKind.Function,documentation:`Vue 3 reactive ref primitive`,insertText:"const ${1:name} = ref(${2:''})",insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`computed`,kind:e.languages.CompletionItemKind.Function,documentation:`Vue 3 computed getter`,insertText:"const ${1:name} = computed(() => ${2:expression})",insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i}]}}})}function L(){return window.monaco?Promise.resolve(window.monaco):new Promise((e,t)=>{window.MonacoEnvironment||(window.MonacoEnvironment={getWorkerUrl:function(){return`data:text/javascript;charset=utf-8,%0A%20%20%20%20%20%20%20%20%20%20%20%20self.MonacoEnvironment%20%3D%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20baseUrl%3A%20'https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fmonaco-editor%400.52.2%2Fmin%2F'%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20importScripts('https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fmonaco-editor%400.52.2%2Fmin%2Fvs%2Fbase%2Fworker%2FworkerMain.js')%3B%0A%20%20%20%20%20%20%20%20%20%20`}});let n=()=>{let t=window.require;t.config({paths:{vs:`https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs`}}),t([`vs/editor/editor.main`],()=>{e(window.monaco)})};if(window.require&&window.require.config){n();return}let r=document.createElement(`script`);r.src=`https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs/loader.js`,r.async=!0,r.onload=n,r.onerror=e=>{console.warn(`Monaco Editor CDN failed to load, keeping fallback editor active.`,e),t(e)},document.head.appendChild(r)})}return x(async()=>{try{let e=await L();if(!u.value)return;I(e),S=e.editor.create(u.value,{value:a.modelValue,language:`html`,theme:a.isDark?`vs-dark`:`vs`,automaticLayout:!0,fontSize:13,lineHeight:20,fontFamily:`'Fira Code', 'Cascadia Code', 'JetBrains Mono', Consolas, Menlo, Monaco, monospace`,fontLigatures:!0,minimap:{enabled:!1},scrollBeyondLastLine:!1,tabSize:2,wordWrap:`on`,formatOnPaste:!0,formatOnType:!0,suggestOnTriggerCharacters:!0,acceptSuggestionOnEnter:`on`,quickSuggestions:{other:!0,comments:!1,strings:!0},renderWhitespace:`none`,scrollbar:{verticalScrollbarSize:8,horizontalScrollbarSize:8}}),S.onDidChangeModelContent(()=>{let e=S.getValue();o(`update:modelValue`,e)}),g.value=!0}catch(e){console.warn(`Using fallback textarea editor due to Monaco initialization delay:`,e)}}),y(()=>a.modelValue,e=>{S&&S.getValue()!==e&&S.setValue(e)}),y(()=>a.isDark,e=>{window.monaco&&window.monaco.editor.setTheme(e?`vs-dark`:`vs`)}),v(()=>{S&&=(S.dispose(),null),M&&=(M.dispose(),null)}),(r,i)=>(s(),m(`div`,C,[_(`div`,w,[i[4]||=_(`div`,{class:`flex items-center gap-2 font-mono`},[_(`span`,{class:`text-blue-500 dark:text-blue-400`},`⚡`),_(`span`,{class:`font-semibold text-slate-800 dark:text-slate-200`},`App.vue`),_(`span`,{class:`text-[10px] text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-950/80 border border-blue-300 dark:border-blue-800/60 px-1.5 py-0.5 rounded font-mono`},` Vue SFC `)],-1),_(`div`,T,[g.value?(s(),m(`span`,E,[...i[0]||=[_(`span`,{class:`w-1.5 h-1.5 rounded-full bg-emerald-500`},null,-1),_(`span`,null,`VS Code Engine`,-1)]])):(s(),m(`span`,D,[...i[1]||=[_(`span`,{class:`w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse`},null,-1),_(`span`,null,`Loading Editor...`,-1)]])),i[2]||=_(`span`,null,`•`,-1),i[3]||=_(`span`,{class:`hidden sm:inline`},`Ctrl+Space: Autocomplete`,-1)])]),_(`div`,O,[_(`div`,{ref_key:`monacoContainer`,ref:u,class:e([`w-full h-full`,{"opacity-0 pointer-events-none absolute":!g.value}])},null,2),g.value?l(``,!0):(s(),m(`div`,k,[_(`div`,A,[(s(!0),m(c,null,b(N.value,e=>(s(),m(`div`,{key:e},n(e),1))),128))]),_(`textarea`,{ref_key:`textareaEl`,ref:d,value:t.modelValue,onInput:P,onKeydown:p(h(F,[`prevent`]),[`tab`]),class:`flex-1 p-3 bg-transparent text-slate-900 dark:text-slate-100 font-mono text-xs leading-6 resize-none outline-none whitespace-pre overflow-auto font-normal focus:ring-0 border-none`,placeholder:`Type or paste Vue SFC code here...`,spellcheck:`false`},null,40,j)]))])]))}}),N={class:`h-full flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors duration-200`},P={class:`px-4 py-2 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 select-none transition-colors duration-200`},F={class:`flex items-center gap-3 text-[11px] text-slate-400 dark:text-slate-500`},I={class:`flex-1 relative bg-slate-100 dark:bg-slate-950 p-2 transition-colors duration-200`},L=[`srcdoc`],R=o({__name:`Preview`,props:{code:{},isDark:{type:Boolean,default:!1},version:{default:`0.1.1`}},setup(e){let t=e;function r(e){let t=``,n=``,r=e.match(/<template[^>]*>([\s\S]*?)<\/template>/i);t=r?r[1].trim():e.trim();let i=e.match(/<script[^>]*>([\s\S]*?)<\/script>/i);return i&&(n=i[1].trim()),{template:t,script:n}}let i=f(()=>{let{template:e,script:n}=r(t.code),i=new Set,a=n.matchAll(/import\s+\{([^}]+)\}\s+from\s+['"][^'"]+['"]/g);for(let e of a)e[1]&&e[1].split(`,`).forEach(e=>{let t=e.trim().split(/\s+as\s+/),n=t[t.length-1].trim();n&&i.add(n)});let o=n.matchAll(/import\s+([a-zA-Z0-9_$]+)\s+from\s+['"][^'"]+['"]/g);for(let e of o)e[1]&&!e[1].startsWith(`{`)&&i.add(e[1].trim());let s=n.replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"];?/g,``).replace(/import\s+['"][^'"]+['"];?/g,``).trim(),c=Array.from(i).map(e=>`const ${e} = (window.ZyvnoxVuePack && window.ZyvnoxVuePack['${e}']) || (window.Vue && window.Vue['${e}']) || undefined;`).join(`
`),l=new Set;for(let e of i)l.add(e);let u=s.matchAll(/(?:const|let|var|function)\s+([a-zA-Z0-9_$]+)/g);for(let e of u)e[1]&&l.add(e[1]);[`name`,`title`,`isOpen`,`count`].forEach(e=>l.add(e));let d=`{ ${Array.from(l).map(e=>`...(typeof ${e} !== 'undefined' ? { ${e} } : {})`).join(`, `)} }`;return`
<!DOCTYPE html>
<html lang="en" class="${t.isDark?`dark`:``}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- CDN Stylesheet for @zyvnox/vue-pack with resilient CDN fallback -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@unocss/reset/tailwind.min.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@${t.version}/dist/style.css" onerror="this.onerror=null;this.href='https://esm.sh/@zyvnox/vue-pack@${t.version}/dist/style.css';" />
  
  <!-- CDN Tailwind for layout in preview -->
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>

  <!-- Vue 3.5 Global Build (with complete in-browser Runtime Template Compiler) -->
  <script src="https://cdn.jsdelivr.net/npm/vue@3.5/dist/vue.global.js"><\/script>

  <!-- @zyvnox/vue-pack Standalone CDN UMD Bundle (with all dependencies pre-bundled) -->
  <script src="https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@${t.version}/dist/cdn/vue-pack.umd.js" onerror="this.onerror=null;this.src='https://unpkg.com/@zyvnox/vue-pack@${t.version}/dist/cdn/vue-pack.umd.js';"><\/script>
  <script src="https://cdn.jsdelivr.net/npm/@unocss/runtime"><\/script>
  <style>
    html.dark body {
      background-color: #0f172a;
      color: #f8fafc;
    }
    html:not(.dark) body {
      background-color: #f8fafc;
      color: #0f172a;
    }
    body {
      font-family: ui-sans-serif, system-ui, sans-serif;
      margin: 0;
      padding: 1.5rem;
      transition: background-color 0.2s ease, color 0.2s ease;
    }
    #error-container {
      display: none;
      margin-bottom: 1rem;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      background-color: rgba(239, 68, 68, 0.15);
      border: 1px solid rgba(239, 68, 68, 0.4);
      color: #fca5a5;
      font-family: monospace;
      font-size: 0.75rem;
      white-space: pre-wrap;
    }
  </style>

</head>

<body>
  <div id="error-container"></div>
  <div id="app"></div>

  <script>
    (function() {
      const errorEl = document.getElementById('error-container')
      function showError(msg) {
        if (errorEl) {
          errorEl.style.display = 'block'
          errorEl.textContent = 'Preview Error: ' + msg
        }
      }

      window.addEventListener('error', function(e) {
        showError(e.message || String(e))
      })

      window.addEventListener('unhandledrejection', function(e) {
        showError(e.reason?.message || String(e.reason))
      })

      function start() {
        if (!window.Vue) {
          showError('Vue 3 failed to load from CDN. Please check your internet connection.')
          return
        }

        const {
          createApp,
          ref,
          shallowRef,
          reactive,
          shallowReactive,
          computed,
          watch,
          watchEffect,
          onMounted,
          onUnmounted,
          onUpdated,
          nextTick,
          provide,
          inject,
          toRef,
          toRefs,
          unref,
          isRef
        } = window.Vue

        const Components = window.ZyvnoxVuePack || {}

        function toKebab(str) {
          return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
        }

        // Only register components that were EXPLICITLY imported in the script
        const importedComponentMap = {}
        const explicitlyImported = ${JSON.stringify(Array.from(i))}
        explicitlyImported.forEach(function(name) {
          if (Components[name]) {
            importedComponentMap[name] = Components[name]
            const kebab = toKebab(name)
            if (kebab !== name) {
              importedComponentMap[kebab] = Components[name]
            }
          }
        })

        try {
          const App = {
            template: ${JSON.stringify(e||`<div class="p-4 text-slate-500">No template provided</div>`)},
            components: importedComponentMap,
            setup() {
              try {
                ${c}
                ${s}
                return ${d}
              } catch (setupErr) {
                showError('Script Setup Error: ' + setupErr.message)
                return {}
              }
            }
          }

          const app = createApp(App)

          app.config.errorHandler = function(err) {
            showError('Vue Runtime Error: ' + (err.message || String(err)))
          }

          app.config.warnHandler = function(msg) {
            console.warn('[Vue warn]:', msg)
            if (msg.includes('Failed to resolve component')) {
              showError(msg)
            }
          }

          app.mount('#app')
        } catch (err) {
          showError('App Mount Error: ' + (err.message || String(err)))
        }
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start)
      } else {
        start()
      }
    })()
  <\/script>
</body>
</html>`});return(t,r)=>(s(),m(`div`,N,[_(`div`,P,[r[2]||=_(`div`,{class:`flex items-center gap-2 font-mono`},[_(`span`,{class:`w-2 h-2 rounded-full bg-emerald-500 animate-pulse`}),_(`span`,{class:`font-semibold text-slate-800 dark:text-slate-200`},`Live Preview`),_(`span`,{class:`text-[10px] text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800/60 px-1.5 py-0.5 rounded font-mono`},` CDN Mode (Isolated iframe) `)],-1),_(`div`,F,[r[0]||=_(`span`,null,`Vue 3.5+`,-1),r[1]||=_(`span`,null,`•`,-1),_(`span`,null,`@zyvnox/vue-pack `+n(e.version),1)])]),_(`div`,I,[_(`iframe`,{ref:`iframeEl`,class:`w-full h-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-inner transition-colors duration-200`,sandbox:`allow-scripts allow-modals allow-same-origin`,srcdoc:i.value},null,8,L)])]))}}),z={class:`h-screen w-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden font-sans transition-colors duration-200`},B={class:`h-14 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md px-4 sm:px-5 flex items-center justify-between shrink-0 select-none z-10 transition-colors duration-200`},V={class:`flex items-center gap-3 sm:gap-4`},H={class:`hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800/80 text-[11px] font-mono font-medium text-emerald-700 dark:text-emerald-400`},U={class:`flex items-center gap-2`},W={key:0,class:`text-emerald-600 dark:text-emerald-400 font-semibold`},G={key:1,class:`flex items-center gap-1`},K={key:0},q={key:1},J={class:`flex-1 flex flex-col md:flex-row overflow-hidden`},Y={class:`h-1/2 md:h-full md:w-1/2 flex flex-col border-b md:border-b-0 border-slate-200 dark:border-slate-800`},X={class:`h-1/2 md:h-full md:w-1/2 flex flex-col`},Z=`<script setup>
import { ref } from 'vue'
import { TextInput, FormModal } from '@zyvnox/vue-pack/components'
import '@zyvnox/vue-pack/style.css'

const name = ref('Zyvnox User')
const isOpen = ref(false)

const schema = {
  email: {
    type: 'email',
    label: 'Email Address',
    required: true,
    placeholder: 'user@example.com'
  },
  role: {
    type: 'text',
    label: 'User Role',
    placeholder: 'e.g. Frontend Developer'
  }
}
<\/script>

<template>
  <div class="space-y-6 max-w-md mx-auto py-4">
    <div class="p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-colors">
      <h2 class="text-base font-bold text-slate-900 dark:text-white mb-1">Live CDN Demo</h2>
      <p class="text-xs text-slate-500 dark:text-slate-400 mb-4">
        Rendered live in isolated sandbox using Vue 3.5 & @zyvnox/vue-pack CDN.
      </p>

      <TextInput
        v-model="name"
        label="Full Name"
        placeholder="Enter your name"
        tooltip="Rendered with @zyvnox/vue-pack"
        required
      />

      <div class="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center text-xs">
        <span class="text-slate-500 dark:text-slate-400">Current value:</span>
        <span class="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">{{ name }}</span>
      </div>

      <div class="mt-4">
        <button
          type="button"
          @click="isOpen = true"
          class="w-full py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs transition-colors shadow-sm cursor-pointer"
        >
          Open Form Modal Demo
        </button>
      </div>
    </div>

    <!-- Modal Form (controlled by isOpen state) -->
    <FormModal
      v-if="isOpen"
      title="Live Dialog Form"
      :schema="schema"
      @cancel="isOpen = false"
      @submit="isOpen = false"
    />
  </div>
</template>`,Q=o({__name:`PlaygroundPage`,setup(e){let o=S.version||`0.1.1`,{isDark:c,toggleDark:l}=g(),f=r(Z),p=r(!1),h=()=>{f.value=Z},v=async()=>{try{await navigator.clipboard.writeText(f.value),p.value=!0,setTimeout(()=>{p.value=!1},1500)}catch(e){console.error(`Failed to copy`,e)}};return(e,r)=>{let g=t(`RouterLink`);return s(),m(`div`,z,[_(`header`,B,[_(`div`,V,[u(g,{to:`/`,class:`flex items-center gap-2 group`},{default:a(()=>[...r[2]||=[_(`img`,{src:`/vue-pack/zyvnox-black.svg`,class:`w-7 h-7 dark:hidden shrink-0`,alt:`Logo`},null,-1),_(`img`,{src:`/vue-pack/zyvnox-white.svg`,class:`w-7 h-7 hidden dark:block shrink-0`,alt:`Logo`},null,-1),_(`div`,{class:`flex items-center gap-1.5 font-bold text-sm tracking-tight text-slate-900 dark:text-white`},[_(`span`,null,`@zyvnox`),_(`span`,{class:`text-blue-600 dark:text-blue-400`},`/vue-pack`),_(`span`,{class:`text-xs text-slate-500 font-normal ml-1 hidden sm:inline`},`Playground`)],-1)]]),_:1}),r[5]||=_(`span`,{class:`text-slate-300 dark:text-slate-700 hidden sm:inline`},`|`,-1),u(g,{to:`/`,class:`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700/60`,title:`Back to Home Page`},{default:a(()=>[...r[3]||=[_(`span`,null,`🏠`,-1),_(`span`,{class:`hidden sm:inline`},`Home`,-1)]]),_:1}),u(g,{to:`/doc`,class:`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700/60`,title:`Go to Documentation`},{default:a(()=>[...r[4]||=[_(`span`,null,`📖`,-1),_(`span`,null,`Docs`,-1)]]),_:1})]),_(`div`,H,[r[6]||=_(`span`,{class:`w-2 h-2 rounded-full bg-emerald-500 animate-pulse`},null,-1),r[7]||=_(`span`,null,`Vue CDN: 3.5`,-1),r[8]||=_(`span`,{class:`text-emerald-700 dark:text-emerald-600`},`+`,-1),_(`span`,null,`@zyvnox/vue-pack CDN: `+n(d(o)),1)]),_(`div`,U,[_(`button`,{type:`button`,onClick:h,class:`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer border border-slate-200 dark:border-slate-700/60`,title:`Reset code to default example`},[...r[9]||=[_(`span`,null,`🔄`,-1),_(`span`,{class:`hidden sm:inline`},`Reset`,-1)]]),_(`button`,{type:`button`,onClick:v,class:`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer border border-slate-200 dark:border-slate-700/60`,title:`Copy current code to clipboard`},[p.value?(s(),m(`span`,W,`✓ Copied!`)):(s(),m(`span`,G,[...r[10]||=[_(`span`,null,`📋`,-1),_(`span`,{class:`hidden sm:inline`},`Copy Code`,-1)]]))]),u(d(i),{variant:`both`,class:`hidden lg:inline-flex`}),_(`button`,{type:`button`,onClick:r[0]||=(...e)=>d(l)&&d(l)(...e),class:`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs flex items-center justify-center cursor-pointer`,title:`Toggle Dark Mode`},[d(c)?(s(),m(`span`,K,`🌙`)):(s(),m(`span`,q,`☀️`))]),r[11]||=_(`a`,{href:`https://github.com/zyvnox/vue-pack`,target:`_blank`,rel:`noopener noreferrer`,class:`hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-700/60`,title:`View on GitHub`},[_(`span`,null,`GitHub ↗`)],-1)])]),_(`main`,J,[_(`section`,Y,[u(M,{modelValue:f.value,"onUpdate:modelValue":r[1]||=e=>f.value=e,"is-dark":d(c)},null,8,[`modelValue`,`is-dark`])]),_(`section`,X,[u(R,{code:f.value,"is-dark":d(c),version:d(o)},null,8,[`code`,`is-dark`,`version`])])])])}}});export{Q as default};