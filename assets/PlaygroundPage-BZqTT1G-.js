import{A as e,M as t,O as n,R as r,T as i,U as a,c as o,d as s,ft as c,g as l,h as u,i as d,mt as f,q as p,s as m,t as h,u as g,w as _,z as v}from"./i18n-CQHTY6ci.js";import{c as y,l as b}from"./runtime-dom.esm-bundler-DNfOAvQL.js";import{a as x,o as S,u as C}from"./index-DITURD3u.js";import{t as w}from"./package-Dh9mnj8p.js";var T={class:`h-full flex flex-col bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 transition-colors duration-200`},E={class:`px-4 py-2 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 select-none transition-colors duration-200`},D={class:`flex items-center gap-2 text-[11px] text-slate-400 dark:text-slate-500 font-mono shrink-0`},ee={key:0,class:`text-emerald-600 dark:text-emerald-400 flex items-center gap-1`},O={key:1,class:`text-amber-500 flex items-center gap-1`},k={class:`flex-1 relative flex overflow-hidden`},A={key:0,class:`w-full h-full flex overflow-hidden absolute inset-0 bg-white dark:bg-slate-950`},j={class:`w-12 py-3 bg-slate-50 dark:bg-slate-950/80 text-right pr-3 select-none text-xs font-mono text-slate-400 dark:text-slate-600 border-r border-slate-200 dark:border-slate-900 overflow-hidden leading-6`},M=[`value`,`onKeydown`],N=l({__name:`CodeEditor`,props:{modelValue:{},isDark:{type:Boolean,default:!1}},emits:[`update:modelValue`],setup(t,{emit:l}){let u=t,p=l,h=a(null),v=a(null),x=a(!1),S=null,C=null,w=m(()=>{let e=(u.modelValue||``).split(`
`).length;return Math.max(e,1)}),N=e=>{let t=e.target.value;p(`update:modelValue`,t)},P=e=>{let t=e.target,n=t.selectionStart,r=t.selectionEnd,i=t.value,a=i.substring(0,n)+`  `+i.substring(r);p(`update:modelValue`,a),setTimeout(()=>{t.selectionStart=t.selectionEnd=n+2},0)};function F(e){C||=e.languages.registerCompletionItemProvider(`html`,{triggerCharacters:[`<`,`.`,`:`,`@`,`v`,`d`,`s`,`t`,`f`,`m`,`n`,`c`,`p`,`b`,`l`,`a`,`r`],provideCompletionItems:(t,n)=>{let r=t.getWordUntilPosition(n),i={startLineNumber:n.lineNumber,endLineNumber:n.lineNumber,startColumn:r.startColumn,endColumn:r.endColumn};return{suggestions:[{label:`div`,kind:e.languages.CompletionItemKind.Snippet,documentation:`HTML <div> element container`,insertText:`<div class="$1">
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
<\/script>`,insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`TextInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox TextInput component with reactive v-model and validation`,insertText:'<TextInput v-model="$1" label="${2:Text Label}" placeholder="$3" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`NumberInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox NumberInput component with numeric bounds`,insertText:'<NumberInput v-model="$1" label="${2:Number Label}" :min="${3:0}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`CurrencyInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox CurrencyInput with auto-formatted locale display`,insertText:'<CurrencyInput v-model="$1" label="${2:Price}" currency="${3:IDR}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`EmailInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox RFC-compliant EmailInput`,insertText:'<EmailInput v-model="$1" label="${2:Email Address}" placeholder="user@example.com" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`PasswordInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Secure PasswordInput with visibility toggle`,insertText:'<PasswordInput v-model="$1" label="${2:Password}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`TelInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox International Telephone Input`,insertText:'<TelInput v-model="$1" label="${2:Phone Number}" placeholder="+62..." />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`UrlInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Web URL Input with validation`,insertText:'<UrlInput v-model="$1" label="${2:Website URL}" placeholder="https://..." />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`TextAreaInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Multiline TextAreaInput`,insertText:'<TextAreaInput v-model="$1" label="${2:Description}" :rows="${3:3}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`TextAreaQuillInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Rich Text WYSIWYG Editor (Quill 2.0 with custom fonts & image upload)`,insertText:'<TextAreaQuillInput v-model="$1" label="${2:Rich Content}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`MapPicker`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox GIS Interactive Leaflet Map Coordinates & Geocoding Picker`,insertText:'<MapPicker v-model="$1" label="${2:Map Location}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`ColorInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Color Picker & Hex Palette Input`,insertText:'<ColorInput v-model="$1" label="${2:Select Color}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`SelectedOptions`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Searchable Combobox & Multi-Select Dropdown`,insertText:'<SelectedOptions v-model="$1" label="${2:Choose Option}" :options="${3:options}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`TagInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Chip / Tag Array Input`,insertText:'<TagInput v-model="$1" label="${2:Tags}" placeholder="Add tag..." />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`RateInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Star Rating Input`,insertText:'<RateInput v-model="$1" label="${2:Rating}" :max="${3:5}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`DateInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox DateInput picker (YYYY-MM-DD)`,insertText:'<DateInput v-model="$1" label="${2:Select Date}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`DateTimeInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox ISO DateTimeInput picker`,insertText:'<DateTimeInput v-model="$1" label="${2:Date & Time}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`TimeInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox 24h TimeInput picker`,insertText:'<TimeInput v-model="$1" label="${2:Time (HH:mm)}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`ToggleInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox ToggleInput switch component`,insertText:'<ToggleInput v-model="$1" label="${2:Active Status}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`FileInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Single File Upload Input`,insertText:'<FileInput v-model="$1" label="${2:Attach Document}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`FileArrayInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Multiple File Upload List Input`,insertText:'<FileArrayInput v-model="$1" label="${2:Upload Files}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`ImageInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Single Image Input with live thumbnail preview`,insertText:'<ImageInput v-model="$1" label="${2:Profile Picture}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`ImageArrayInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Image Gallery Upload Array`,insertText:'<ImageArrayInput v-model="$1" label="${2:Gallery Images}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`ArrayObjectInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Repeatable Form Array of Objects Generator`,insertText:'<ArrayObjectInput v-model="$1" label="${2:Items}" :schema="${3:itemSchema}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`ObjectInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Nested JSON Object Fieldset`,insertText:'<ObjectInput v-model="$1" label="${2:Settings}" :schema="${3:nestedSchema}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`GroupRendererInput`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Multi-column Form Fieldset Group Renderer`,insertText:'<GroupRendererInput :schema="${1:groupSchema}" v-model="${2:formData}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`FormModal`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Schema-Driven FormModal Generator`,insertText:'<FormModal :schema="${1:schema}" v-model="${2:isOpen}" @submit="${3:handleSubmit}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`TabelData`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Enterprise Datatable Suite with full CRUD orchestration`,insertText:'<TabelData :base="${1:tableConfig}" :validation="${2:tableValidation}" :demo="true" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`AlertApp`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox AlertApp banner feedback notification`,insertText:`<AlertApp type="\${1|info,success,warning,danger|}" title="\${2:Notification}">
	$0
</AlertApp>`,insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`Loader`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Animated Loader & Spinner indicator`,insertText:'<Loader ref="${1:loaderRef}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`Tooltip`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Interactive Tooltip popup hint`,insertText:`<Tooltip text="\${1:Tooltip information}">
	$0
</Tooltip>`,insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`SafeHtml`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox XSS-sanitized HTML viewer powered by DOMPurify`,insertText:'<SafeHtml :content="${1:trustedHtmlContent}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`BaseImage`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Optimized Image element with lazy loading & skeleton`,insertText:'<BaseImage src="${1:imageSrc}" alt="${2:Description}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`ModalDetailData`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Read-only Record Detail View Modal`,insertText:'<ModalDetailData v-model="${1:isOpen}" :data="${2:selectedRow}" :schema="${3:schema}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`WarningForm`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Confirmation Modal (destructive, warning, or approval prompt)`,insertText:'<WarningForm v-if="${1:showWarning}" type="${2|danger,warning,success,info|}" title="${3:Warning Title}" message="${4:Are you sure?}" @confirm="${5:handleConfirm}" @cancel="${1:showWarning} = false" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`SponsorButton`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox GitHub, Saweria & Ko-fi Sponsor Button Group`,insertText:'<SponsorButton variant="${1|both,all,github,saweria,kofi|}" />',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`SponsorCard`,kind:e.languages.CompletionItemKind.Class,documentation:`Zyvnox Project Sponsor Banner Card`,insertText:`<SponsorCard />`,insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`v-model`,kind:e.languages.CompletionItemKind.Property,documentation:`Vue two-way data binding`,insertText:`v-model="$1"`,insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`v-if`,kind:e.languages.CompletionItemKind.Property,documentation:`Vue conditional rendering`,insertText:`v-if="$1"`,insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`v-for`,kind:e.languages.CompletionItemKind.Property,documentation:`Vue list rendering directive`,insertText:'v-for="${1:item} in ${2:items}" :key="${1:item}.${3:id}"',insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`@click`,kind:e.languages.CompletionItemKind.Event,documentation:`Vue click event handler`,insertText:`@click="$1"`,insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`ref`,kind:e.languages.CompletionItemKind.Function,documentation:`Vue 3 reactive ref primitive`,insertText:"const ${1:name} = ref(${2:''})",insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i},{label:`computed`,kind:e.languages.CompletionItemKind.Function,documentation:`Vue 3 computed getter`,insertText:"const ${1:name} = computed(() => ${2:expression})",insertTextRules:e.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:i}]}}})}function I(){return window.monaco?Promise.resolve(window.monaco):new Promise((e,t)=>{window.MonacoEnvironment||(window.MonacoEnvironment={getWorkerUrl:function(){return`data:text/javascript;charset=utf-8,%0A%20%20%20%20%20%20%20%20%20%20%20%20self.MonacoEnvironment%20%3D%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20baseUrl%3A%20'https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fmonaco-editor%400.52.2%2Fmin%2F'%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20importScripts('https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fmonaco-editor%400.52.2%2Fmin%2Fvs%2Fbase%2Fworker%2FworkerMain.js')%3B%0A%20%20%20%20%20%20%20%20%20%20`}});let n=()=>{let t=window.require;t.config({paths:{vs:`https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs`}}),t([`vs/editor/editor.main`],()=>{e(window.monaco)})};if(window.require&&window.require.config){n();return}let r=document.createElement(`script`);r.src=`https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs/loader.js`,r.async=!0,r.onload=n,r.onerror=e=>{console.warn(`Monaco Editor CDN failed to load, keeping fallback editor active.`,e),t(e)},document.head.appendChild(r)})}return i(async()=>{try{let e=await I();if(!h.value)return;F(e),S=e.editor.create(h.value,{value:u.modelValue,language:`html`,theme:u.isDark?`vs-dark`:`vs`,automaticLayout:!0,fontSize:13,lineHeight:20,fontFamily:`'Fira Code', 'Cascadia Code', 'JetBrains Mono', Consolas, Menlo, Monaco, monospace`,fontLigatures:!0,minimap:{enabled:!1},scrollBeyondLastLine:!1,tabSize:2,wordWrap:`on`,formatOnPaste:!0,formatOnType:!0,suggestOnTriggerCharacters:!0,acceptSuggestionOnEnter:`on`,quickSuggestions:{other:!0,comments:!1,strings:!0},renderWhitespace:`none`,scrollbar:{verticalScrollbarSize:8,horizontalScrollbarSize:8}}),S.onDidChangeModelContent(()=>{let e=S.getValue();p(`update:modelValue`,e)}),x.value=!0}catch(e){console.warn(`Using fallback textarea editor due to Monaco initialization delay:`,e)}}),r(()=>u.modelValue,e=>{S&&S.getValue()!==e&&S.setValue(e)}),r(()=>u.isDark,e=>{window.monaco&&window.monaco.editor.setTheme(e?`vs-dark`:`vs`)}),_(()=>{S&&=(S.dispose(),null),C&&=(C.dispose(),null)}),(r,i)=>(n(),s(`div`,T,[o(`div`,E,[i[4]||=o(`div`,{class:`flex items-center gap-2 font-mono`},[o(`span`,{class:`text-blue-500 dark:text-blue-400`},`⚡`),o(`span`,{class:`font-semibold text-slate-800 dark:text-slate-200`},`App.vue`),o(`span`,{class:`text-[10px] text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-950/80 border border-blue-300 dark:border-blue-800/60 px-1.5 py-0.5 rounded font-mono`},` Vue SFC `)],-1),o(`div`,D,[x.value?(n(),s(`span`,ee,[...i[0]||=[o(`span`,{class:`w-1.5 h-1.5 rounded-full bg-emerald-500`},null,-1),o(`span`,{class:`hidden sm:inline`},`VS Code Engine`,-1),o(`span`,{class:`sm:hidden`},`Monaco`,-1)]])):(n(),s(`span`,O,[...i[1]||=[o(`span`,{class:`w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse`},null,-1),o(`span`,null,`Loading...`,-1)]])),i[2]||=o(`span`,{class:`hidden md:inline`},`•`,-1),i[3]||=o(`span`,{class:`hidden md:inline`},`Ctrl+Space: Autocomplete`,-1)])]),o(`div`,k,[o(`div`,{ref_key:`monacoContainer`,ref:h,class:c([`w-full h-full`,{"opacity-0 pointer-events-none absolute":!x.value}])},null,2),x.value?g(``,!0):(n(),s(`div`,A,[o(`div`,j,[(n(!0),s(d,null,e(w.value,e=>(n(),s(`div`,{key:e},f(e),1))),128))]),o(`textarea`,{ref_key:`textareaEl`,ref:v,value:t.modelValue,onInput:N,onKeydown:y(b(P,[`prevent`]),[`tab`]),class:`flex-1 p-3 bg-transparent text-slate-900 dark:text-slate-100 font-mono text-xs leading-6 resize-none outline-none whitespace-pre overflow-auto font-normal focus:ring-0 border-none`,placeholder:`Type or paste Vue SFC code here...`,spellcheck:`false`},null,40,M)]))])]))}}),P={class:`h-full flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors duration-200`},F={class:`px-4 py-2 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 select-none transition-colors duration-200 gap-2 min-w-0`},I={class:`flex items-center gap-2 text-[11px] text-slate-400 dark:text-slate-500 shrink-0`},L={class:`flex-1 relative bg-slate-100 dark:bg-slate-950 p-2 transition-colors duration-200`},R=[`srcdoc`],z=l({__name:`Preview`,props:{code:{},isDark:{type:Boolean,default:!1},version:{default:`0.1.4`}},setup(e){let t=e;function r(e){let t=``,n=``,r=e.match(/<template[^>]*>([\s\S]*?)<\/template>/i);t=r?r[1].trim():e.trim();let i=e.match(/<script[^>]*>([\s\S]*?)<\/script>/i);return i&&(n=i[1].trim()),{template:t,script:n}}let i=m(()=>{let{template:e,script:n}=r(t.code),i=new Set,a=n.matchAll(/import\s+\{([^}]+)\}\s+from\s+['"][^'"]+['"]/g);for(let e of a)e[1]&&e[1].split(`,`).forEach(e=>{let t=e.trim().split(/\s+as\s+/),n=t[t.length-1].trim();n&&i.add(n)});let o=n.matchAll(/import\s+([a-zA-Z0-9_$]+)\s+from\s+['"][^'"]+['"]/g);for(let e of o)e[1]&&!e[1].startsWith(`{`)&&i.add(e[1].trim());let s=n.replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"];?/g,``).replace(/import\s+['"][^'"]+['"];?/g,``).trim(),c=Array.from(i).map(e=>`const ${e} = (window.ZyvnoxVuePack && window.ZyvnoxVuePack['${e}']) || (window.Vue && window.Vue['${e}']) || undefined;`).join(`
`),l=new Set;for(let e of i)l.add(e);let u=s.matchAll(/(?:const|let|var|function)\s+([a-zA-Z0-9_$]+)/g);for(let e of u)e[1]&&l.add(e[1]);[`name`,`title`,`isOpen`,`count`].forEach(e=>l.add(e));let d=`{ ${Array.from(l).map(e=>`...(typeof ${e} !== 'undefined' ? { ${e} } : {})`).join(`, `)} }`;return`
<!DOCTYPE html>
<html lang="en" class="${t.isDark?`dark`:``}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- CDN Stylesheet for @zyvnox/vue-pack with resilient CDN fallback -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@unocss/reset/normalize.min.css" />
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
</html>`});return(t,r)=>(n(),s(`div`,P,[o(`div`,F,[r[2]||=o(`div`,{class:`flex items-center gap-2 font-mono min-w-0`},[o(`span`,{class:`w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0`}),o(`span`,{class:`font-semibold text-slate-800 dark:text-slate-200 shrink-0`},`Live Preview`),o(`span`,{class:`text-[10px] text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800/60 px-1.5 py-0.5 rounded font-mono hidden sm:inline`},` CDN Mode `)],-1),o(`div`,I,[r[0]||=o(`span`,{class:`hidden sm:inline`},`Vue 3.5+`,-1),r[1]||=o(`span`,{class:`hidden sm:inline`},`•`,-1),o(`span`,null,`v`+f(e.version),1)])]),o(`div`,L,[o(`iframe`,{ref:`iframeEl`,class:`w-full h-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-inner transition-colors duration-200`,sandbox:`allow-scripts allow-modals allow-same-origin`,srcdoc:i.value},null,8,R)])]))}}),B={class:`h-screen w-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden font-sans transition-colors duration-200`},V={class:`h-14 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md px-3 sm:px-5 flex items-center justify-between shrink-0 select-none z-10 transition-colors duration-200 gap-2 overflow-x-auto sm:overflow-x-visible no-scrollbar`},H={class:`flex items-center gap-2 sm:gap-3 shrink-0`},U={class:`hidden md:inline`},te={class:`hidden md:inline`},W={class:`hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800/80 text-[11px] font-mono font-medium text-emerald-700 dark:text-emerald-400 shrink-0 whitespace-nowrap`},G={class:`flex items-center gap-1.5 sm:gap-2 shrink-0`},K=[`title`],q={class:`hidden sm:inline`},J=[`title`],Y={key:0,class:`text-emerald-600 dark:text-emerald-400 font-semibold`},X={key:1,class:`flex items-center gap-1`},Z={class:`hidden sm:inline`},Q={class:`hidden 2xl:inline-flex`},ne={key:0},re={key:1},ie={class:`flex-1 flex flex-col md:flex-row overflow-hidden`},ae={class:`h-1/2 md:h-full md:w-1/2 flex flex-col border-b md:border-b-0 border-slate-200 dark:border-slate-800`},oe={class:`h-1/2 md:h-full md:w-1/2 flex flex-col`},$=`<script setup>
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
</template>`,se=l({__name:`PlaygroundPage`,setup(e){let r=w.version||`0.1.4`,{isDark:i,toggleDark:c}=S(),{isIndonesian:l}=h(),d=a($),m=a(!1),g=()=>{d.value=$},_=async()=>{try{await navigator.clipboard.writeText(d.value),m.value=!0,setTimeout(()=>{m.value=!1},1500)}catch(e){console.error(`Failed to copy`,e)}};return(e,a)=>{let h=t(`RouterLink`);return n(),s(`div`,B,[o(`header`,V,[o(`div`,H,[u(h,{to:`/`,class:`flex items-center gap-1.5 group shrink-0`},{default:v(()=>[...a[2]||=[o(`img`,{src:`/vue-pack/zyvnox-black.svg`,class:`w-6 h-6 sm:w-7 sm:h-7 dark:hidden shrink-0`,alt:`Logo`},null,-1),o(`img`,{src:`/vue-pack/zyvnox-white.svg`,class:`w-6 h-6 sm:w-7 sm:h-7 hidden dark:block shrink-0`,alt:`Logo`},null,-1),o(`div`,{class:`flex items-center gap-1 font-bold text-xs sm:text-sm tracking-tight text-slate-900 dark:text-white whitespace-nowrap`},[o(`span`,null,`@zyvnox`),o(`span`,{class:`text-blue-600 dark:text-blue-400`},`/vue-pack`),o(`span`,{class:`text-xs text-slate-500 font-normal ml-1 hidden lg:inline`},`Playground`)],-1)]]),_:1}),a[5]||=o(`span`,{class:`text-slate-300 dark:text-slate-700 hidden sm:inline`},`|`,-1),u(h,{to:`/`,class:`flex items-center gap-1 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700/60 shrink-0`,title:p(l)?`Kembali ke Beranda`:`Back to Home Page`},{default:v(()=>[a[3]||=o(`span`,null,`🏠`,-1),o(`span`,U,f(p(l)?`Beranda`:`Home`),1)]),_:1},8,[`title`]),u(h,{to:`/doc`,class:`flex items-center gap-1 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700/60 shrink-0`,title:p(l)?`Ke Halaman Dokumentasi`:`Go to Documentation`},{default:v(()=>[a[4]||=o(`span`,null,`📖`,-1),o(`span`,te,f(p(l)?`Dokumentasi`:`Docs`),1)]),_:1},8,[`title`])]),o(`div`,W,[a[6]||=o(`span`,{class:`w-2 h-2 rounded-full bg-emerald-500 animate-pulse`},null,-1),a[7]||=o(`span`,null,`Vue CDN: 3.5`,-1),a[8]||=o(`span`,{class:`text-emerald-700 dark:text-emerald-600`},`+`,-1),o(`span`,null,`@zyvnox/vue-pack CDN: `+f(p(r)),1)]),o(`div`,G,[u(x),o(`button`,{type:`button`,onClick:g,class:`flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer border border-slate-200 dark:border-slate-700/60 shrink-0`,title:p(l)?`Reset kode ke contoh awal`:`Reset code to default example`},[a[9]||=o(`span`,null,`🔄`,-1),o(`span`,q,f(p(l)?`Atur Ulang`:`Reset`),1)],8,K),o(`button`,{type:`button`,onClick:_,class:`flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer border border-slate-200 dark:border-slate-700/60 shrink-0`,title:p(l)?`Salin kode ke papan klip`:`Copy current code to clipboard`},[m.value?(n(),s(`span`,Y,f(p(l)?`✓ Tersalin!`:`✓ Copied!`),1)):(n(),s(`span`,X,[a[10]||=o(`span`,null,`📋`,-1),o(`span`,Z,f(p(l)?`Salin Kode`:`Copy Code`),1)]))],8,J),o(`div`,Q,[u(p(C),{variant:`both`})]),o(`button`,{type:`button`,onClick:a[0]||=(...e)=>p(c)&&p(c)(...e),class:`p-1 sm:px-2.5 sm:py-1.5 rounded-lg border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs flex items-center justify-center cursor-pointer shrink-0`,title:`Toggle Dark Mode`},[p(i)?(n(),s(`span`,ne,`🌙`)):(n(),s(`span`,re,`☀️`))]),a[11]||=o(`a`,{href:`https://github.com/zyvnox/vue-pack`,target:`_blank`,rel:`noopener noreferrer`,class:`hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-700/60 shrink-0`,title:`View on GitHub`},[o(`span`,null,`GitHub ↗`)],-1)])]),o(`main`,ie,[o(`section`,ae,[u(N,{modelValue:d.value,"onUpdate:modelValue":a[1]||=e=>d.value=e,"is-dark":p(i)},null,8,[`modelValue`,`is-dark`])]),o(`section`,oe,[u(z,{code:d.value,"is-dark":p(i),version:p(r)},null,8,[`code`,`is-dark`,`version`])])])])}}});export{se as default};