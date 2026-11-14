import{M as ee,O as e,U as te,c as t,d as n,ft as r,g as i,h as a,m as o,mt as s,q as c,t as l,z as u}from"./i18n-CQHTY6ci.js";import{t as d}from"./CodeBlock-Cjmxf9F4.js";import{t as ne}from"./package-Dh9mnj8p.js";var re={class:`max-w-4xl mx-auto space-y-8 sm:space-y-10 py-4 sm:py-6 overflow-x-hidden min-w-0 w-full`},ie={class:`border-b border-slate-200 dark:border-slate-800 pb-6`},f={class:`flex flex-wrap items-center gap-2 mb-2`},p={class:`text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white`},m={class:`px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-400 border border-amber-300/60 dark:border-amber-800/60 shrink-0`},h={class:`text-xs sm:text-sm text-slate-600 dark:text-slate-400`},g={class:`mt-6 grid grid-cols-2 sm:flex sm:items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-lg w-full sm:w-fit border border-slate-200 dark:border-slate-700/60 gap-1`},_={class:`hidden sm:inline`},v={class:`hidden sm:inline`},y={key:0,class:`space-y-10`},b={class:`space-y-4`},x={class:`flex items-center gap-3`},S={class:`text-lg font-bold text-slate-900 dark:text-slate-100`},C={class:`text-xs text-slate-600 dark:text-slate-400`},w={class:`space-y-3`},T={class:`p-3.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 text-xs text-blue-800 dark:text-blue-300`},E={class:`font-semibold mb-0.5`},D={class:`space-y-4`},O={class:`flex items-center gap-3`},k={class:`text-lg font-bold text-slate-900 dark:text-slate-100`},A={class:`text-xs text-slate-600 dark:text-slate-400`},j={class:`space-y-4`},M={class:`flex items-center gap-3`},N={class:`text-lg font-bold text-slate-900 dark:text-slate-100`},P={class:`text-xs text-slate-600 dark:text-slate-400 leading-relaxed`},F={class:`overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg`},I={class:`w-full text-left text-xs`},L={class:`bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700`},R={class:`p-3 font-semibold`},z={class:`p-3 font-semibold`},ae={class:`p-3 font-semibold`},B={class:`divide-y divide-slate-200 dark:divide-slate-800 text-slate-600 dark:text-slate-400`},V={class:`p-3`},H={class:`p-3`},U={class:`p-3`},W={class:`p-3`},G={class:`p-3`},K={class:`p-3`},q={key:1,class:`space-y-10`},J={class:`p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1.5`},oe={class:`font-semibold text-slate-900 dark:text-white flex items-center gap-1.5`},se={class:`p-4 rounded-xl bg-gradient-to-r from-emerald-600/10 via-teal-600/10 to-cyan-600/10 border border-emerald-200/60 dark:border-emerald-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3`},ce={class:`space-y-0.5`},le={class:`text-xs font-semibold text-emerald-800 dark:text-emerald-300`},ue={class:`text-[11px] text-slate-600 dark:text-slate-400`},de={class:`space-y-4`},fe={class:`flex items-center gap-3`},pe={class:`text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2`},me={class:`px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800/60`},he={class:`text-xs text-slate-500`},ge={class:`space-y-4`},_e={class:`flex items-center gap-3`},ve={class:`text-xs text-slate-500`},ye={class:`space-y-4`},be={class:`flex items-center gap-3`},xe={class:`text-xs text-slate-500`},Se={class:`pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between`},Ce=`<template>
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
<\/script>`,Y=i({__name:`GettingStarted`,setup(i){let{t:Y,isIndonesian:X}=l(),Z=ne.version||`0.1.4`,Q=te(`npm`),$=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Zyvnox Vue Pack - jsDelivr ESM</title>
  <!-- 1. Import library stylesheet -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@${Z}/dist/style.css" />

  <!-- 2. Importmap maps Vue & Zyvnox Vue Pack for clean native browser ES modules -->
  <script type="importmap">
  {
    "imports": {
      "vue": "https://cdn.jsdelivr.net/npm/vue@3.5/dist/vue.esm-browser.js",
      "@zyvnox/vue-pack": "https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@${Z}/dist/cdn/vue-pack.es.js"
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
</html>`,we=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Zyvnox Vue Pack - esm.sh Import Map</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@${Z}/dist/style.css" />

  <!-- 1. Define browser import maps with shared Vue 3 runtime compiler -->
  <script type="importmap">
  {
    "imports": {
      "vue": "https://cdn.jsdelivr.net/npm/vue@3.5/dist/vue.esm-browser.js",
      "@zyvnox/vue-pack": "https://esm.sh/@zyvnox/vue-pack@${Z}?external=vue"
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
</html>`,Te=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Zyvnox Vue Pack - UMD Script</title>
  <!-- 1. Isolated stylesheet -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@${Z}/dist/style.css" />
</head>
<body>
  <div id="app"></div>

  <!-- 2. Load Vue 3 Global first (with in-browser template compiler) -->
  <script src="https://cdn.jsdelivr.net/npm/vue@3.5/dist/vue.global.js"><\/script>

  <!-- 3. Load Zyvnox Vue Pack Standalone CDN UMD Bundle -->
  <script src="https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@${Z}/dist/cdn/vue-pack.umd.js"><\/script>

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
</html>`;return(te,i)=>{let l=ee(`RouterLink`);return e(),n(`div`,re,[t(`header`,ie,[t(`div`,f,[t(`h1`,p,s(c(Y)(`gettingStarted.title`)),1),t(`span`,m,` v`+s(c(Z))+` Early Release `,1)]),t(`p`,h,s(c(Y)(`gettingStarted.subtitle`)),1),t(`div`,g,[t(`button`,{type:`button`,onClick:i[0]||=ee=>Q.value=`npm`,class:r([`flex items-center justify-center gap-1.5 px-2.5 sm:px-4 py-2 rounded-md text-xs font-semibold transition-all cursor-pointer text-center`,Q.value===`npm`?`bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm`:`text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200`])},[i[3]||=t(`span`,null,`📦`,-1),t(`span`,null,[i[2]||=t(`span`,{class:`sm:hidden`},`NPM`,-1),t(`span`,_,s(c(Y)(`gettingStarted.tabNpm`)),1)])],2),t(`button`,{type:`button`,onClick:i[1]||=ee=>Q.value=`cdn`,class:r([`flex items-center justify-center gap-1.5 px-2.5 sm:px-4 py-2 rounded-md text-xs font-semibold transition-all cursor-pointer text-center`,Q.value===`cdn`?`bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm`:`text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200`])},[i[5]||=t(`span`,null,`🌐`,-1),t(`span`,null,[i[4]||=t(`span`,{class:`sm:hidden`},`CDN`,-1),t(`span`,v,s(c(Y)(`gettingStarted.tabCdn`)),1)])],2)])]),Q.value===`npm`?(e(),n(`div`,y,[t(`section`,b,[t(`div`,x,[i[6]||=t(`span`,{class:`w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold`},` 1 `,-1),t(`h2`,S,s(c(X)?`Instalasi Manajer Paket`:`Package Manager Installation`),1)]),t(`p`,C,s(c(X)?`Pasang menggunakan manajer paket pilihan Anda:`:`Install using your favorite package manager:`),1),t(`div`,w,[t(`div`,null,[i[7]||=t(`span`,{class:`text-[11px] font-semibold text-slate-500 uppercase tracking-wider`},`npm`,-1),a(d,{code:`npm install @zyvnox/vue-pack`,language:`bash`})]),t(`div`,null,[i[8]||=t(`span`,{class:`text-[11px] font-semibold text-slate-500 uppercase tracking-wider`},`pnpm`,-1),a(d,{code:`pnpm add @zyvnox/vue-pack`,language:`bash`})]),t(`div`,null,[i[9]||=t(`span`,{class:`text-[11px] font-semibold text-slate-500 uppercase tracking-wider`},`yarn`,-1),a(d,{code:`yarn add @zyvnox/vue-pack`,language:`bash`})]),t(`div`,null,[i[10]||=t(`span`,{class:`text-[11px] font-semibold text-slate-500 uppercase tracking-wider`},`bun`,-1),a(d,{code:`bun add @zyvnox/vue-pack`,language:`bash`})])]),t(`div`,T,[t(`p`,E,s(c(X)?`Dependensi Peer`:`Peer Dependencies`),1),t(`p`,null,s(c(X)?`Pastikan vue (^3.5.18+) dan zod (v3 atau v4) telah terpasang di proyek Anda. Jika Anda berencana menggunakan MapPicker, pasang juga leaflet (^1.9.4).`:`Ensure vue (^3.5.18+) and zod (v3 or v4) are installed in your project. If you plan to use MapPicker, install leaflet (^1.9.4) as well.`),1)])]),t(`section`,D,[t(`div`,O,[i[11]||=t(`span`,{class:`w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold`},` 2 `,-1),t(`h2`,k,s(c(X)?`Penggunaan Komponen Dasar`:`Basic Component Usage`),1)]),t(`p`,A,s(c(X)?`Impor komponen UI secara individual dan sertakan stylesheet terisolasi:`:`Import individual UI components and include the isolated stylesheet:`),1),a(d,{code:Ce,language:`vue`})]),t(`section`,j,[t(`div`,M,[i[12]||=t(`span`,{class:`w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold`},` 3 `,-1),t(`h2`,N,s(c(X)?`Arsitektur Subpath Tree-Shakeable`:`Tree-Shakeable Subpath Architecture`),1)]),t(`p`,P,s(c(X)?`Pada lingkungan pengembangan, situs dokumentasi ini menautkan alias langsung ke src/* untuk debugging cepat. Pada build produksi, @zyvnox/vue-pack menyediakan modul subpath ES dan CJS pra-kompilasi yang dapat di-tree-shake:`:`In development, this documentation site links aliases directly to src/* for rapid HMR debugging. In production builds, @zyvnox/vue-pack exposes pre-compiled, tree-shakeable ES and CJS subpath modules:`),1),t(`div`,F,[t(`table`,I,[t(`thead`,L,[t(`tr`,null,[t(`th`,R,s(c(X)?`Ekspor Subpath`:`Subpath Export`),1),t(`th`,z,s(c(X)?`Target Distribusi`:`Distribution Target`),1),t(`th`,ae,s(c(X)?`Tujuan / Kegunaan`:`Purpose`),1)])]),t(`tbody`,B,[t(`tr`,null,[i[13]||=t(`td`,{class:`p-3 font-mono font-medium text-slate-900 dark:text-slate-200`},` @zyvnox/vue-pack `,-1),i[14]||=t(`td`,{class:`p-3 font-mono`},`dist/zyvnox-vue-pack.es.js`,-1),t(`td`,V,s(c(X)?`Entri bundle utama & engine inti`:`Main bundle entry & core engines`),1)]),t(`tr`,null,[i[15]||=t(`td`,{class:`p-3 font-mono font-medium text-slate-900 dark:text-slate-200`},` @zyvnox/vue-pack/components `,-1),i[16]||=t(`td`,{class:`p-3 font-mono`},`dist/components.es.js`,-1),t(`td`,H,s(c(X)?`Seluruh input formulir, tabel data, & tampilan`:`All form inputs, datatables, & displays`),1)]),t(`tr`,null,[i[17]||=t(`td`,{class:`p-3 font-mono font-medium text-slate-900 dark:text-slate-200`},` @zyvnox/vue-pack/config `,-1),i[18]||=t(`td`,{class:`p-3 font-mono`},`dist/config.es.js`,-1),t(`td`,U,s(c(X)?`Penyusun skema, konfigurasi i18n, & bawaan`:`Schema builders, i18n configs, & defaults`),1)]),t(`tr`,null,[i[19]||=t(`td`,{class:`p-3 font-mono font-medium text-slate-900 dark:text-slate-200`},` @zyvnox/vue-pack/indexedDB `,-1),i[20]||=t(`td`,{class:`p-3 font-mono`},`dist/indexedDB.es.js`,-1),t(`td`,W,s(c(X)?`Utilitas IndexedDB reaktif offline-first`:`Offline-first reactive IndexedDB utilities`),1)]),t(`tr`,null,[i[21]||=t(`td`,{class:`p-3 font-mono font-medium text-slate-900 dark:text-slate-200`},` @zyvnox/vue-pack/vue `,-1),i[22]||=t(`td`,{class:`p-3 font-mono`},`dist/vue.es.js`,-1),t(`td`,G,s(c(X)?`Plugin Vue Global (app.use)`:`Global Vue plugin (app.use)`),1)]),t(`tr`,null,[i[23]||=t(`td`,{class:`p-3 font-mono font-medium text-slate-900 dark:text-slate-200`},` @zyvnox/vue-pack/style.css `,-1),i[24]||=t(`td`,{class:`p-3 font-mono`},`dist/style.css`,-1),t(`td`,K,s(c(X)?`Stylesheet utilitas UnoCSS terisolasi ber-prefix zyvnox-`:`Isolated, zyvnox-prefixed CSS styles`),1)])])])])])])):(e(),n(`div`,q,[t(`div`,J,[t(`p`,oe,[i[25]||=t(`span`,null,`🚀`,-1),t(`span`,null,s(c(X)?`Penggunaan CDN Langsung / Tanpa Bundler`:`Zero Bundler / Direct CDN Setup`),1)]),t(`p`,null,s(c(X)?`Anda dapat menggunakan @zyvnox/vue-pack langsung dari CDN global seperti jsDelivr, unpkg, dan esm.sh tanpa perlu menginstal Node.js atau menjalankan bundler.`:`You can consume @zyvnox/vue-pack straight from global CDNs like jsDelivr, unpkg, and esm.sh without installing Node.js or running a bundler.`),1)]),t(`div`,se,[t(`div`,ce,[t(`p`,le,s(c(X)?`Ingin mencoba CDN Vue 3.5 & @zyvnox/vue-pack langsung di browser?`:`Want to test CDN Vue 3.5 & @zyvnox/vue-pack right in your browser?`),1),t(`p`,ue,s(c(X)?`Buka playground live kami untuk mengedit dan melihat pratinjau komponen secara realtime.`:`Open our live split-pane playground to edit and preview live components in real time.`),1)]),a(l,{to:`/playground`,class:`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-all shrink-0`},{default:u(()=>[i[26]||=t(`span`,null,`⚡`,-1),t(`span`,null,s(c(X)?`Buka Live Playground (/playground) →`:`Open Live Playground (/playground) →`),1)]),_:1})]),t(`section`,de,[t(`div`,fe,[i[28]||=t(`span`,{class:`w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold`},` A `,-1),t(`div`,null,[t(`h2`,pe,[i[27]||=t(`span`,null,`ESM via jsDelivr`,-1),t(`span`,me,s(c(X)?`Direkomendasikan`:`Recommended`),1)]),t(`p`,he,s(c(X)?`Impor modul ES browser native langsung dari CDN.`:`Native browser ES module imports directly from CDN.`),1)])]),a(d,{code:$,language:`html`})]),t(`section`,ge,[t(`div`,_e,[i[30]||=t(`span`,{class:`w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold`},` B `,-1),t(`div`,null,[i[29]||=t(`h2`,{class:`text-lg font-bold text-slate-900 dark:text-slate-100`},` ESM via esm.sh + Import Map `,-1),t(`p`,ve,s(c(X)?`Import map standar W3C modern untuk impor bersih tanpa path panjang.`:`Modern W3C standard import maps for clean, bare specifier imports.`),1)])]),a(d,{code:we,language:`html`})]),t(`section`,ye,[t(`div`,be,[i[32]||=t(`span`,{class:`w-7 h-7 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold`},` C `,-1),t(`div`,null,[i[31]||=t(`h2`,{class:`text-lg font-bold text-slate-900 dark:text-slate-100`},` UMD for <script> Tag (No Bundler / Classic HTML) `,-1),t(`p`,xe,s(c(X)?`Skrip UMD mandiri yang menempel pada window.ZyvnoxVuePack.`:`Standalone pre-bundled UMD script attaching to window.ZyvnoxVuePack.`),1)])]),a(d,{code:Te,language:`html`})])])),t(`section`,Se,[a(l,{to:`/doc/installation`,class:`text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline`},{default:u(()=>[o(s(c(X)?`Berikutnya: Persyaratan Sistem Lengkap & Dependensi →`:`Next: Full System Requirements & Peer Dependencies →`),1)]),_:1}),a(l,{to:`/doc/examples/form-modal`,class:`text-xs font-semibold text-slate-600 dark:text-slate-400 hover:underline`},{default:u(()=>[o(s(c(X)?`Jelajahi Engine FormModal ↗`:`Explore FormModal Engine ↗`),1)]),_:1})])])}}});export{Y as default};