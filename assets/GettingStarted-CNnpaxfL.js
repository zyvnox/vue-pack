import{At as e,Ct as t,Mt as n,Ot as r,Tt as i,_t as a,bt as o,gt as s,ht as c,kt as l,mt as u,pt as d,ut as f}from"./index-Dtl-Gxe1.js";import{t as p}from"./CodeBlock-B1_NttD9.js";import{t as m}from"./package-Bqbd9cN5.js";var h={class:`max-w-4xl mx-auto space-y-10 py-6`},g={class:`border-b border-slate-200 dark:border-slate-800 pb-6`},_={class:`flex items-center gap-2 mb-2`},v={class:`px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-400 border border-amber-300/60 dark:border-amber-800/60`},y={class:`mt-6 flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-lg w-fit border border-slate-200 dark:border-slate-700/60`},b={key:0,class:`space-y-10`},x={class:`space-y-4`},S={class:`space-y-3`},C={class:`space-y-4`},w={key:1,class:`space-y-10`},T={class:`p-4 rounded-xl bg-gradient-to-r from-emerald-600/10 via-teal-600/10 to-cyan-600/10 border border-emerald-200/60 dark:border-emerald-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3`},E={class:`space-y-4`},D={class:`space-y-4`},O={class:`space-y-4`},k={class:`pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between`},A=`<template>
  <div class="p-6">
    <TextInput
      v-model="fullName"
      label="Full Name"
      placeholder="e.g. Jane Doe"
      required
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TextInput } from '@zyvnox/vue-pack/components'
import '@zyvnox/vue-pack/style.css'

const fullName = ref('')
<\/script>`,j=a({__name:`GettingStarted`,setup(a){let j=m.version||`0.1.1`,M=r(`npm`),N=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Zyvnox Vue Pack - jsDelivr ESM</title>
  <!-- 1. Import library stylesheet -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@${j}/dist/style.css" />

  <!-- 2. Importmap maps Vue & Zyvnox Vue Pack for clean native browser ES modules -->
  <script type="importmap">
  {
    "imports": {
      "vue": "https://cdn.jsdelivr.net/npm/vue@3.5/dist/vue.esm-browser.js",
      "@zyvnox/vue-pack": "https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@${j}/dist/cdn/vue-pack.es.js"
    }
  }
  <\/script>
</head>
<body>
  <div id="app"></div>

  <script type="module">
    import { createApp, ref } from 'vue'
    import { FormModal, TextInput } from '@zyvnox/vue-pack'

    const app = createApp({
      components: { FormModal, TextInput },
      setup() {
        const name = ref('John Doe')
        return { name }
      },
      template: \`
        <div class="p-6 max-w-md mx-auto">
          <TextInput v-model="name" label="Subscriber Name" />
        </div>
      \`
    })
    app.mount('#app')
  <\/script>
</body>
</html>`,P=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Zyvnox Vue Pack - esm.sh Import Map</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@${j}/dist/style.css" />

  <!-- 1. Define browser import maps with shared Vue 3 runtime compiler -->
  <script type="importmap">
  {
    "imports": {
      "vue": "https://cdn.jsdelivr.net/npm/vue@3.5/dist/vue.esm-browser.js",
      "@zyvnox/vue-pack": "https://esm.sh/@zyvnox/vue-pack@${j}?external=vue"
    }
  }
  <\/script>
</head>
<body>
  <div id="app"></div>

  <script type="module">
    import { createApp, ref } from 'vue'
    import { TextInput } from '@zyvnox/vue-pack'

    const app = createApp({
      components: { TextInput },
      setup() {
        const name = ref('John Doe')
        return { name }
      },
      template: \`
        <div class="p-6 max-w-md mx-auto">
          <TextInput v-model="name" label="Import Map Demo" />
        </div>
      \`
    })
    app.mount('#app')
  <\/script>
</body>
</html>`,F=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Zyvnox Vue Pack - UMD Script</title>
  <!-- 1. Isolated stylesheet -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@${j}/dist/style.css" />
</head>
<body>
  <div id="app"></div>

  <!-- 2. Load Vue 3 Global first (with in-browser template compiler) -->
  <script src="https://cdn.jsdelivr.net/npm/vue@3.5/dist/vue.global.js"><\/script>

  <!-- 3. Load Zyvnox Vue Pack Standalone CDN UMD Bundle -->
  <script src="https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@${j}/dist/cdn/vue-pack.umd.js"><\/script>

  <!-- 4. Components are available on global window.ZyvnoxVuePack -->
  <script>
    const { createApp, ref } = Vue
    const { FormModal, TextInput } = ZyvnoxVuePack

    const app = createApp({
      components: { FormModal, TextInput },
      setup() {
        const title = ref('Standalone UMD App')
        return { title }
      },
      template: \`
        <div class="p-6">
          <h1 class="text-xl font-bold mb-4">{{ title }}</h1>
          <TextInput label="UMD Direct Field" />
        </div>
      \`
    })
    app.mount('#app')
  <\/script>
</body>
</html>`;return(r,a)=>{let m=t(`RouterLink`);return o(),d(`div`,h,[f(`header`,g,[f(`div`,_,[a[2]||=f(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white`},`Getting Started`,-1),f(`span`,v,` v`+n(l(j))+` Early Release `,1)]),a[5]||=f(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},[c(` Choose your preferred integration method to start building schema-driven interfaces with `),f(`code`,null,`@zyvnox/vue-pack`),c(`. `)],-1),f(`div`,y,[f(`button`,{type:`button`,onClick:a[0]||=e=>M.value=`npm`,class:e([`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold transition-all cursor-pointer`,M.value===`npm`?`bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm`:`text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200`])},[...a[3]||=[f(`span`,null,`📦`,-1),f(`span`,null,`NPM / Package Manager`,-1)]],2),f(`button`,{type:`button`,onClick:a[1]||=e=>M.value=`cdn`,class:e([`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold transition-all cursor-pointer`,M.value===`cdn`?`bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm`:`text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200`])},[...a[4]||=[f(`span`,null,`🌐`,-1),f(`span`,null,`CDN / Standalone Browser`,-1)]],2)])]),M.value===`npm`?(o(),d(`div`,b,[f(`section`,x,[a[10]||=f(`div`,{class:`flex items-center gap-3`},[f(`span`,{class:`w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold`},` 1 `),f(`h2`,{class:`text-lg font-bold text-slate-900 dark:text-slate-100`},`Installation`)],-1),a[11]||=f(`p`,{class:`text-xs text-slate-600 dark:text-slate-400`},` Install using your favorite package manager: `,-1),f(`div`,S,[f(`div`,null,[a[6]||=f(`span`,{class:`text-[11px] font-semibold text-slate-500 uppercase tracking-wider`},`npm`,-1),s(p,{code:`npm install @zyvnox/vue-pack`,language:`bash`})]),f(`div`,null,[a[7]||=f(`span`,{class:`text-[11px] font-semibold text-slate-500 uppercase tracking-wider`},`pnpm`,-1),s(p,{code:`pnpm add @zyvnox/vue-pack`,language:`bash`})]),f(`div`,null,[a[8]||=f(`span`,{class:`text-[11px] font-semibold text-slate-500 uppercase tracking-wider`},`yarn`,-1),s(p,{code:`yarn add @zyvnox/vue-pack`,language:`bash`})]),f(`div`,null,[a[9]||=f(`span`,{class:`text-[11px] font-semibold text-slate-500 uppercase tracking-wider`},`bun`,-1),s(p,{code:`bun add @zyvnox/vue-pack`,language:`bash`})])]),a[12]||=f(`div`,{class:`p-3.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 text-xs text-blue-800 dark:text-blue-300`},[f(`p`,{class:`font-semibold mb-0.5`},`Peer Dependencies`),f(`p`,null,[c(` Ensure `),f(`code`,null,`vue`),c(` (^3.5.18+) and `),f(`code`,null,`zod`),c(` (v3 or v4) are installed in your project. If you plan to use `),f(`code`,null,`MapPicker`),c(`, install `),f(`code`,null,`leaflet`),c(` (^1.9.4) as well. `)])],-1)]),f(`section`,C,[a[13]||=f(`div`,{class:`flex items-center gap-3`},[f(`span`,{class:`w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold`},` 2 `),f(`h2`,{class:`text-lg font-bold text-slate-900 dark:text-slate-100`},` Basic Component Usage `)],-1),a[14]||=f(`p`,{class:`text-xs text-slate-600 dark:text-slate-400`},` Import individual UI components and include the isolated stylesheet: `,-1),s(p,{code:A,language:`vue`})]),a[15]||=u(`<section class="space-y-4"><div class="flex items-center gap-3"><span class="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold"> 3 </span><h2 class="text-lg font-bold text-slate-900 dark:text-slate-100"> Tree-Shakeable Subpath Architecture </h2></div><p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed"> In development, this documentation site links aliases directly to <code>src/*</code> for rapid HMR debugging. In production builds, <code>@zyvnox/vue-pack</code> exposes pre-compiled, tree-shakeable ES and CJS subpath modules: </p><div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg"><table class="w-full text-left text-xs"><thead class="bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700"><tr><th class="p-3 font-semibold">Subpath Export</th><th class="p-3 font-semibold">Distribution Target</th><th class="p-3 font-semibold">Purpose</th></tr></thead><tbody class="divide-y divide-slate-200 dark:divide-slate-800 text-slate-600 dark:text-slate-400"><tr><td class="p-3 font-mono font-medium text-slate-900 dark:text-slate-200"> @zyvnox/vue-pack </td><td class="p-3 font-mono">dist/zyvnox-vue-pack.es.js</td><td class="p-3">Main bundle entry &amp; core engines</td></tr><tr><td class="p-3 font-mono font-medium text-slate-900 dark:text-slate-200"> @zyvnox/vue-pack/components </td><td class="p-3 font-mono">dist/components.es.js</td><td class="p-3">All form inputs, datatables, &amp; displays</td></tr><tr><td class="p-3 font-mono font-medium text-slate-900 dark:text-slate-200"> @zyvnox/vue-pack/config </td><td class="p-3 font-mono">dist/config.es.js</td><td class="p-3">Schema builders, i18n configs, &amp; defaults</td></tr><tr><td class="p-3 font-mono font-medium text-slate-900 dark:text-slate-200"> @zyvnox/vue-pack/indexedDB </td><td class="p-3 font-mono">dist/indexedDB.es.js</td><td class="p-3">Offline-first reactive IndexedDB utilities</td></tr><tr><td class="p-3 font-mono font-medium text-slate-900 dark:text-slate-200"> @zyvnox/vue-pack/vue </td><td class="p-3 font-mono">dist/vue.es.js</td><td class="p-3">Global Vue plugin (app.use)</td></tr><tr><td class="p-3 font-mono font-medium text-slate-900 dark:text-slate-200"> @zyvnox/vue-pack/style.css </td><td class="p-3 font-mono">dist/style.css</td><td class="p-3">Isolated, zyvnox-prefixed CSS styles</td></tr></tbody></table></div></section>`,1)])):(o(),d(`div`,w,[a[21]||=u(`<div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1.5"><p class="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5"><span>🚀</span><span>Zero Bundler / Direct CDN Setup</span></p><p> You can consume <code>@zyvnox/vue-pack</code> straight from global CDNs like <strong>jsDelivr</strong>, <strong>unpkg</strong>, and <strong>esm.sh</strong> without installing Node.js or running a bundler. </p></div>`,1),f(`div`,T,[a[17]||=f(`div`,{class:`space-y-0.5`},[f(`p`,{class:`text-xs font-semibold text-emerald-800 dark:text-emerald-300`},` Want to test CDN Vue 3.5 & @zyvnox/vue-pack right in your browser? `),f(`p`,{class:`text-[11px] text-slate-600 dark:text-slate-400`},` Open our live split-pane playground to edit and preview live components in real time. `)],-1),s(m,{to:`/playground`,class:`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-all shrink-0`},{default:i(()=>[...a[16]||=[f(`span`,null,`⚡`,-1),f(`span`,null,`Open Live Playground (/playground) →`,-1)]]),_:1})]),f(`section`,E,[a[18]||=u(`<div class="flex items-center gap-3"><span class="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold"> A </span><div><h2 class="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2"><span>ESM via jsDelivr</span><span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800/60"> Recommended </span></h2><p class="text-xs text-slate-500"> Native browser ES module imports directly from CDN. </p></div></div>`,1),s(p,{code:N,language:`html`})]),f(`section`,D,[a[19]||=f(`div`,{class:`flex items-center gap-3`},[f(`span`,{class:`w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold`},` B `),f(`div`,null,[f(`h2`,{class:`text-lg font-bold text-slate-900 dark:text-slate-100`},` ESM via esm.sh + Import Map `),f(`p`,{class:`text-xs text-slate-500`},` Modern W3C standard import maps for clean, bare specifier imports. `)])],-1),s(p,{code:P,language:`html`})]),f(`section`,O,[a[20]||=f(`div`,{class:`flex items-center gap-3`},[f(`span`,{class:`w-7 h-7 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold`},` C `),f(`div`,null,[f(`h2`,{class:`text-lg font-bold text-slate-900 dark:text-slate-100`},` UMD for <script> Tag (No Bundler / Classic HTML) `),f(`p`,{class:`text-xs text-slate-500`},[c(` Standalone pre-bundled UMD script attaching to `),f(`code`,null,`window.ZyvnoxVuePack`),c(`. `)])])],-1),s(p,{code:F,language:`html`})])])),f(`section`,k,[s(m,{to:`/doc/installation`,class:`text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline`},{default:i(()=>[...a[22]||=[c(` Next: Full System Requirements & Peer Dependencies → `,-1)]]),_:1}),s(m,{to:`/doc/examples/form-modal`,class:`text-xs font-semibold text-slate-600 dark:text-slate-400 hover:underline`},{default:i(()=>[...a[23]||=[c(` Explore FormModal Engine ↗ `,-1)]]),_:1})])])}}});export{j as default};