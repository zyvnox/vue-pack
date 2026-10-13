import{Et as e,St as t,Tt as n,at as r,b as i,ct as a,et as o,ft as s,gt as c,ht as l,kt as u,lt as d,ot as f,pt as p,st as m,vt as h,xt as g,yt as _}from"./index-jB9TdKXO.js";import{t as v}from"./package-OflMutq4.js";var y={class:`h-full flex flex-col bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 transition-colors duration-200`},b={class:`flex-1 relative flex overflow-hidden`},x={class:`w-12 py-3 bg-slate-50 dark:bg-slate-950/80 text-right pr-3 select-none text-xs font-mono text-slate-400 dark:text-slate-600 border-r border-slate-200 dark:border-slate-900 overflow-hidden leading-6 transition-colors duration-200`},S=[`value`,`onKeydown`],C=c({__name:`CodeEditor`,props:{modelValue:{}},emits:[`update:modelValue`],setup(e,{emit:t}){let i=e,o=t,c=n(null),l=a(()=>{let e=(i.modelValue||``).split(`
`).length;return Math.max(e,1)}),g=e=>{let t=e.target.value;o(`update:modelValue`,t)},v=e=>{let t=e.target,n=t.selectionStart,r=t.selectionEnd,i=t.value,a=i.substring(0,n)+`  `+i.substring(r);o(`update:modelValue`,a),setTimeout(()=>{t.selectionStart=t.selectionEnd=n+2},0)};return(t,n)=>(h(),s(`div`,y,[n[0]||=p(`<div class="px-4 py-2 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 select-none transition-colors duration-200"><div class="flex items-center gap-2 font-mono"><span class="text-amber-500 dark:text-amber-400">⚡</span><span class="font-semibold text-slate-800 dark:text-slate-200">App.vue</span><span class="text-[10px] text-slate-600 dark:text-slate-400 bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono"> SFC </span></div><div class="text-[11px] text-slate-400 dark:text-slate-500 font-mono"> Tab: 2 spaces • Simple Editor </div></div>`,1),d(`div`,b,[d(`div`,x,[(h(!0),s(m,null,_(l.value,e=>(h(),s(`div`,{key:e},u(e),1))),128))]),d(`textarea`,{ref_key:`textareaEl`,ref:c,value:e.modelValue,onInput:g,onKeydown:r(f(v,[`prevent`]),[`tab`]),class:`flex-1 p-3 bg-transparent text-slate-900 dark:text-slate-100 font-mono text-xs leading-6 resize-none outline-none selection:bg-blue-500/20 dark:selection:bg-blue-600/30 whitespace-pre overflow-auto font-normal focus:ring-0 border-none transition-colors duration-200`,placeholder:`Type or paste Vue SFC code here...`,spellcheck:`false`},null,40,S)])]))}}),w={class:`h-full flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors duration-200`},T={class:`flex-1 relative bg-slate-100 dark:bg-slate-950 p-2 transition-colors duration-200`},E=[`srcdoc`],D=c({__name:`Preview`,props:{code:{},isDark:{type:Boolean,default:!1}},setup(e){let t=e;function n(e){let t=``,n=``,r=e.match(/<template[^>]*>([\s\S]*?)<\/template>/i);t=r?r[1].trim():e.trim();let i=e.match(/<script[^>]*>([\s\S]*?)<\/script>/i);return i&&(n=i[1].trim()),{template:t,script:n}}let r=a(()=>{let{template:e,script:r}=n(t.code),i=r.replace(/import\s+{[^}]+}\s+from\s+['"][^'"]+['"]/g,``).replace(/import\s+['"][^'"]+['"]/g,``).trim();return`<!DOCTYPE html>
<html lang="en" class="${t.isDark?`dark`:``}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- CDN Stylesheet for @zyvnox/vue-pack with local fallback for pre-published dev -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@0.1.0/dist/style.css" onerror="this.onerror=null;this.href='/src/style.css';" />
  
  <!-- CDN Tailwind for layout in preview -->
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>

  <!-- Importmap -->
  <script type="importmap">
  {
    "imports": {
      "vue": "https://cdn.jsdelivr.net/npm/vue@3.5/dist/vue.esm-browser.js",
      "@zyvnox/vue-pack": "https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@0.1.0/dist/zyvnox-vue-pack.es.js",
      "@zyvnox/vue-pack/components": "https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@0.1.0/dist/components.es.js"
    }
  }
  <\/script>

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

  <script type="module">
    import { createApp, ref, reactive, computed, watch, onMounted } from 'vue'

    const errorEl = document.getElementById('error-container')
    function showError(msg) {
      if (errorEl) {
        errorEl.style.display = 'block'
        errorEl.textContent = 'Preview Error: ' + msg
      }
    }

    window.addEventListener('error', (e) => {
      showError(e.message || String(e))
    })

    async function init() {
      let Components = {}
      try {
        Components = await import('@zyvnox/vue-pack/components')
      } catch (err) {
        try {
          // Dev mode fallback before npm publish
          Components = await import('/src/components/index.ts')
        } catch (fallbackErr) {
          showError('Failed to load @zyvnox/vue-pack/components from CDN or local fallback.')
          return
        }
      }

      try {
        const App = {
          template: ${JSON.stringify(e||`<div>No template</div>`)},
          setup() {
            try {
              ${i}
              // Return all variables created in scope if any
              return {
                ...(typeof name !== 'undefined' ? { name } : {}),
                ...(typeof title !== 'undefined' ? { title } : {}),
                ...(typeof isOpen !== 'undefined' ? { isOpen } : {}),
                ...(typeof count !== 'undefined' ? { count } : {}),
              }
            } catch (setupErr) {
              showError(setupErr.message)
              return {}
            }
          }
        }

        const app = createApp(App)

        // Register all library components
        Object.entries(Components).forEach(([name, comp]) => {
          if (comp && (typeof comp === 'object' || typeof comp === 'function')) {
            app.component(name, comp)
          }
        })

        app.mount('#app')
      } catch (appErr) {
        showError(appErr.message)
      }
    }

    init()
  <\/script>
</body>
</html>`});return(e,t)=>(h(),s(`div`,w,[t[0]||=p(`<div class="px-4 py-2 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 select-none transition-colors duration-200"><div class="flex items-center gap-2 font-mono"><span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span><span class="font-semibold text-slate-800 dark:text-slate-200">Live Preview</span><span class="text-[10px] text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800/60 px-1.5 py-0.5 rounded font-mono"> CDN Mode (Isolated iframe) </span></div><div class="flex items-center gap-3 text-[11px] text-slate-400 dark:text-slate-500"><span>Vue 3.5+</span><span>•</span><span>@zyvnox/vue-pack 0.1.0</span></div></div>`,1),d(`div`,T,[d(`iframe`,{ref:`iframeEl`,class:`w-full h-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-inner transition-colors duration-200`,sandbox:`allow-scripts allow-modals allow-same-origin`,srcdoc:r.value},null,8,E)])]))}}),O={class:`h-screen w-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden font-sans transition-colors duration-200`},k={class:`h-14 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md px-4 sm:px-5 flex items-center justify-between shrink-0 select-none z-10 transition-colors duration-200`},A={class:`flex items-center gap-3 sm:gap-4`},j={class:`hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800/80 text-[11px] font-mono font-medium text-emerald-700 dark:text-emerald-400`},M={class:`flex items-center gap-2`},N={key:0,class:`text-emerald-600 dark:text-emerald-400 font-semibold`},P={key:1,class:`flex items-center gap-1`},F={key:0},I={key:1},L={class:`flex-1 flex flex-col md:flex-row overflow-hidden`},R={class:`h-1/2 md:h-full md:w-1/2 flex flex-col border-b md:border-b-0 border-slate-200 dark:border-slate-800`},z={class:`h-1/2 md:h-full md:w-1/2 flex flex-col`},B=`<script setup>
import { ref } from 'vue'
import { FormModal, TextInput } from '@zyvnox/vue-pack/components'
import '@zyvnox/vue-pack/style.css'

const name = ref('Zyvnox User')
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
    </div>

    <FormModal title="Live Test Dialog" />
  </div>
</template>`,V=c({__name:`PlaygroundPage`,setup(r){let a=v.version||`0.1.0`,{isDark:c,toggleDark:f}=o(),p=n(B),m=n(!1),_=()=>{p.value=B},y=async()=>{try{await navigator.clipboard.writeText(p.value),m.value=!0,setTimeout(()=>{m.value=!1},1500)}catch(e){console.error(`Failed to copy`,e)}};return(n,r)=>{let o=g(`RouterLink`);return h(),s(`div`,O,[d(`header`,k,[d(`div`,A,[l(o,{to:`/`,class:`flex items-center gap-2 group`},{default:t(()=>[...r[2]||=[d(`img`,{src:`/vue-pack/zyvnox-black.svg`,class:`w-7 h-7 dark:hidden shrink-0`,alt:`Logo`},null,-1),d(`img`,{src:`/vue-pack/zyvnox-white.svg`,class:`w-7 h-7 hidden dark:block shrink-0`,alt:`Logo`},null,-1),d(`div`,{class:`flex items-center gap-1.5 font-bold text-sm tracking-tight text-slate-900 dark:text-white`},[d(`span`,null,`@zyvnox`),d(`span`,{class:`text-blue-600 dark:text-blue-400`},`/vue-pack`),d(`span`,{class:`text-xs text-slate-500 font-normal ml-1 hidden sm:inline`},`Playground`)],-1)]]),_:1}),r[4]||=d(`span`,{class:`text-slate-300 dark:text-slate-700 hidden sm:inline`},`|`,-1),l(o,{to:`/`,class:`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700/60`,title:`Back to documentation home`},{default:t(()=>[...r[3]||=[d(`span`,null,`←`,-1),d(`span`,null,`Back to Docs`,-1)]]),_:1})]),d(`div`,j,[r[5]||=d(`span`,{class:`w-2 h-2 rounded-full bg-emerald-500 animate-pulse`},null,-1),r[6]||=d(`span`,null,`Vue CDN: 3.5`,-1),r[7]||=d(`span`,{class:`text-emerald-700 dark:text-emerald-600`},`+`,-1),d(`span`,null,`@zyvnox/vue-pack CDN: `+u(e(a)),1)]),d(`div`,M,[d(`button`,{type:`button`,onClick:_,class:`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer border border-slate-200 dark:border-slate-700/60`,title:`Reset code to default example`},[...r[8]||=[d(`span`,null,`🔄`,-1),d(`span`,{class:`hidden sm:inline`},`Reset`,-1)]]),d(`button`,{type:`button`,onClick:y,class:`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer border border-slate-200 dark:border-slate-700/60`,title:`Copy current code to clipboard`},[m.value?(h(),s(`span`,N,`✓ Copied!`)):(h(),s(`span`,P,[...r[9]||=[d(`span`,null,`📋`,-1),d(`span`,{class:`hidden sm:inline`},`Copy Code`,-1)]]))]),l(e(i),{variant:`both`,class:`hidden lg:inline-flex`}),d(`button`,{type:`button`,onClick:r[0]||=(...t)=>e(f)&&e(f)(...t),class:`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs flex items-center justify-center cursor-pointer`,title:`Toggle Dark Mode`},[e(c)?(h(),s(`span`,F,`🌙`)):(h(),s(`span`,I,`☀️`))]),r[10]||=d(`a`,{href:`https://github.com/zyvnox/vue-pack`,target:`_blank`,rel:`noopener noreferrer`,class:`hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-700/60`,title:`View on GitHub`},[d(`span`,null,`GitHub ↗`)],-1)])]),d(`main`,L,[d(`section`,R,[l(C,{modelValue:p.value,"onUpdate:modelValue":r[1]||=e=>p.value=e},null,8,[`modelValue`])]),d(`section`,z,[l(D,{code:p.value,"is-dark":e(c)},null,8,[`code`,`is-dark`])])])])}}});export{V as default};