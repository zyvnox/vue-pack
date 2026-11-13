<template>
  <div class="max-w-4xl mx-auto space-y-8 sm:space-y-10 py-4 sm:py-6 overflow-x-hidden min-w-0 w-full">
    <!-- Header -->
    <header class="border-b border-slate-200 dark:border-slate-800 pb-6">
      <div class="flex flex-wrap items-center gap-2 mb-2">
        <h1 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{{ t('gettingStarted.title') }}</h1>
        <span
          class="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-400 border border-amber-300/60 dark:border-amber-800/60 shrink-0"
        >
          v{{ version }} Early Release
        </span>
      </div>
      <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
        {{ t('gettingStarted.subtitle') }}
      </p>

      <!-- Tab Switcher -->
      <div
        class="mt-6 grid grid-cols-2 sm:flex sm:items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-lg w-full sm:w-fit border border-slate-200 dark:border-slate-700/60 gap-1"
      >
        <button
          type="button"
          @click="activeTab = 'npm'"
          class="flex items-center justify-center gap-1.5 px-2.5 sm:px-4 py-2 rounded-md text-xs font-semibold transition-all cursor-pointer text-center"
          :class="
            activeTab === 'npm'
              ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          "
        >
          <span>📦</span>
          <span>
            <span class="sm:hidden">NPM</span>
            <span class="hidden sm:inline">{{ t('gettingStarted.tabNpm') }}</span>
          </span>
        </button>
        <button
          type="button"
          @click="activeTab = 'cdn'"
          class="flex items-center justify-center gap-1.5 px-2.5 sm:px-4 py-2 rounded-md text-xs font-semibold transition-all cursor-pointer text-center"
          :class="
            activeTab === 'cdn'
              ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          "
        >
          <span>🌐</span>
          <span>
            <span class="sm:hidden">CDN</span>
            <span class="hidden sm:inline">{{ t('gettingStarted.tabCdn') }}</span>
          </span>
        </button>
      </div>
    </header>

    <!-- TAB 1: NPM / Package Manager -->
    <div v-if="activeTab === 'npm'" class="space-y-10">
      <!-- Step 1: Package Manager Installation -->
      <section class="space-y-4">
        <div class="flex items-center gap-3">
          <span
            class="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold"
          >
            1
          </span>
          <h2 class="text-lg font-bold text-slate-900 dark:text-slate-100">
            {{ isIndonesian ? 'Instalasi Manajer Paket' : 'Package Manager Installation' }}
          </h2>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-400">
          {{ isIndonesian ? 'Pasang menggunakan manajer paket pilihan Anda:' : 'Install using your favorite package manager:' }}
        </p>

        <!-- Package Manager Code Tabs -->
        <div class="space-y-3">
          <div>
            <span class="text-[11px] font-semibold text-slate-500 uppercase tracking-wider"
              >npm</span
            >
            <CodeBlock code="npm install @zyvnox/vue-pack" language="bash" />
          </div>
          <div>
            <span class="text-[11px] font-semibold text-slate-500 uppercase tracking-wider"
              >pnpm</span
            >
            <CodeBlock code="pnpm add @zyvnox/vue-pack" language="bash" />
          </div>
          <div>
            <span class="text-[11px] font-semibold text-slate-500 uppercase tracking-wider"
              >yarn</span
            >
            <CodeBlock code="yarn add @zyvnox/vue-pack" language="bash" />
          </div>
          <div>
            <span class="text-[11px] font-semibold text-slate-500 uppercase tracking-wider"
              >bun</span
            >
            <CodeBlock code="bun add @zyvnox/vue-pack" language="bash" />
          </div>
        </div>

        <div
          class="p-3.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 text-xs text-blue-800 dark:text-blue-300"
        >
          <p class="font-semibold mb-0.5">{{ isIndonesian ? 'Dependensi Peer' : 'Peer Dependencies' }}</p>
          <p>
            {{ isIndonesian
              ? 'Pastikan vue (^3.5.18+) dan zod (v3 atau v4) telah terpasang di proyek Anda. Jika Anda berencana menggunakan MapPicker, pasang juga leaflet (^1.9.4).'
              : 'Ensure vue (^3.5.18+) and zod (v3 or v4) are installed in your project. If you plan to use MapPicker, install leaflet (^1.9.4) as well.' }}
          </p>
        </div>
      </section>

      <!-- Step 2: Basic Usage -->
      <section class="space-y-4">
        <div class="flex items-center gap-3">
          <span
            class="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold"
          >
            2
          </span>
          <h2 class="text-lg font-bold text-slate-900 dark:text-slate-100">
            {{ isIndonesian ? 'Penggunaan Komponen Dasar' : 'Basic Component Usage' }}
          </h2>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-400">
          {{ isIndonesian ? 'Impor komponen UI secara individual dan sertakan stylesheet terisolasi:' : 'Import individual UI components and include the isolated stylesheet:' }}
        </p>
        <CodeBlock :code="npmUsageCode" language="vue" />
      </section>

      <!-- Step 3: Production vs Playground Explanation -->
      <section class="space-y-4">
        <div class="flex items-center gap-3">
          <span
            class="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold"
          >
            3
          </span>
          <h2 class="text-lg font-bold text-slate-900 dark:text-slate-100">
            {{ isIndonesian ? 'Arsitektur Subpath Tree-Shakeable' : 'Tree-Shakeable Subpath Architecture' }}
          </h2>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          {{ isIndonesian
            ? 'Pada lingkungan pengembangan, situs dokumentasi ini menautkan alias langsung ke src/* untuk debugging cepat. Pada build produksi, @zyvnox/vue-pack menyediakan modul subpath ES dan CJS pra-kompilasi yang dapat di-tree-shake:'
            : 'In development, this documentation site links aliases directly to src/* for rapid HMR debugging. In production builds, @zyvnox/vue-pack exposes pre-compiled, tree-shakeable ES and CJS subpath modules:' }}
        </p>

        <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg">
          <table class="w-full text-left text-xs">
            <thead
              class="bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700"
            >
              <tr>
                <th class="p-3 font-semibold">{{ isIndonesian ? 'Ekspor Subpath' : 'Subpath Export' }}</th>
                <th class="p-3 font-semibold">{{ isIndonesian ? 'Target Distribusi' : 'Distribution Target' }}</th>
                <th class="p-3 font-semibold">{{ isIndonesian ? 'Tujuan / Kegunaan' : 'Purpose' }}</th>
              </tr>
            </thead>
            <tbody
              class="divide-y divide-slate-200 dark:divide-slate-800 text-slate-600 dark:text-slate-400"
            >
              <tr>
                <td class="p-3 font-mono font-medium text-slate-900 dark:text-slate-200">
                  @zyvnox/vue-pack
                </td>
                <td class="p-3 font-mono">dist/zyvnox-vue-pack.es.js</td>
                <td class="p-3">{{ isIndonesian ? 'Entri bundle utama & engine inti' : 'Main bundle entry & core engines' }}</td>
              </tr>
              <tr>
                <td class="p-3 font-mono font-medium text-slate-900 dark:text-slate-200">
                  @zyvnox/vue-pack/components
                </td>
                <td class="p-3 font-mono">dist/components.es.js</td>
                <td class="p-3">{{ isIndonesian ? 'Seluruh input formulir, tabel data, & tampilan' : 'All form inputs, datatables, & displays' }}</td>
              </tr>
              <tr>
                <td class="p-3 font-mono font-medium text-slate-900 dark:text-slate-200">
                  @zyvnox/vue-pack/config
                </td>
                <td class="p-3 font-mono">dist/config.es.js</td>
                <td class="p-3">{{ isIndonesian ? 'Penyusun skema, konfigurasi i18n, & bawaan' : 'Schema builders, i18n configs, & defaults' }}</td>
              </tr>
              <tr>
                <td class="p-3 font-mono font-medium text-slate-900 dark:text-slate-200">
                  @zyvnox/vue-pack/indexedDB
                </td>
                <td class="p-3 font-mono">dist/indexedDB.es.js</td>
                <td class="p-3">{{ isIndonesian ? 'Utilitas IndexedDB reaktif offline-first' : 'Offline-first reactive IndexedDB utilities' }}</td>
              </tr>
              <tr>
                <td class="p-3 font-mono font-medium text-slate-900 dark:text-slate-200">
                  @zyvnox/vue-pack/vue
                </td>
                <td class="p-3 font-mono">dist/vue.es.js</td>
                <td class="p-3">{{ isIndonesian ? 'Plugin Vue Global (app.use)' : 'Global Vue plugin (app.use)' }}</td>
              </tr>
              <tr>
                <td class="p-3 font-mono font-medium text-slate-900 dark:text-slate-200">
                  @zyvnox/vue-pack/style.css
                </td>
                <td class="p-3 font-mono">dist/style.css</td>
                <td class="p-3">{{ isIndonesian ? 'Stylesheet utilitas UnoCSS terisolasi ber-prefix zyvnox-' : 'Isolated, zyvnox-prefixed CSS styles' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>

    <!-- TAB 2: CDN (Direct Browser Usage) -->
    <div v-else class="space-y-10">
      <div
        class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1.5"
      >
        <p class="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
          <span>🚀</span>
          <span>{{ isIndonesian ? 'Penggunaan CDN Langsung / Tanpa Bundler' : 'Zero Bundler / Direct CDN Setup' }}</span>
        </p>
        <p>
          {{ isIndonesian
            ? 'Anda dapat menggunakan @zyvnox/vue-pack langsung dari CDN global seperti jsDelivr, unpkg, dan esm.sh tanpa perlu menginstal Node.js atau menjalankan bundler.'
            : 'You can consume @zyvnox/vue-pack straight from global CDNs like jsDelivr, unpkg, and esm.sh without installing Node.js or running a bundler.' }}
        </p>
      </div>

      <!-- Try it live in Playground button -->
      <div
        class="p-4 rounded-xl bg-gradient-to-r from-emerald-600/10 via-teal-600/10 to-cyan-600/10 border border-emerald-200/60 dark:border-emerald-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
      >
        <div class="space-y-0.5">
          <p class="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
            {{ isIndonesian ? 'Ingin mencoba CDN Vue 3.5 & @zyvnox/vue-pack langsung di browser?' : 'Want to test CDN Vue 3.5 & @zyvnox/vue-pack right in your browser?' }}
          </p>
          <p class="text-[11px] text-slate-600 dark:text-slate-400">
            {{ isIndonesian ? 'Buka playground live kami untuk mengedit dan melihat pratinjau komponen secara realtime.' : 'Open our live split-pane playground to edit and preview live components in real time.' }}
          </p>
        </div>
        <RouterLink
          to="/playground"
          class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-all shrink-0"
        >
          <span>⚡</span>
          <span>{{ isIndonesian ? 'Buka Live Playground (/playground) →' : 'Open Live Playground (/playground) →' }}</span>
        </RouterLink>
      </div>

      <!-- Method A: ESM via jsDelivr -->
      <section class="space-y-4">
        <div class="flex items-center gap-3">
          <span
            class="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold"
          >
            A
          </span>
          <div>
            <h2
              class="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2"
            >
              <span>ESM via jsDelivr</span>
              <span
                class="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800/60"
              >
                {{ isIndonesian ? 'Direkomendasikan' : 'Recommended' }}
              </span>
            </h2>
            <p class="text-xs text-slate-500">
              {{ isIndonesian ? 'Impor modul ES browser native langsung dari CDN.' : 'Native browser ES module imports directly from CDN.' }}
            </p>
          </div>
        </div>
        <CodeBlock :code="cdnMethodACode" language="html" />
      </section>

      <!-- Method B: ESM via esm.sh + Import Map -->
      <section class="space-y-4">
        <div class="flex items-center gap-3">
          <span
            class="w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold"
          >
            B
          </span>
          <div>
            <h2 class="text-lg font-bold text-slate-900 dark:text-slate-100">
              ESM via esm.sh + Import Map
            </h2>
            <p class="text-xs text-slate-500">
              {{ isIndonesian ? 'Import map standar W3C modern untuk impor bersih tanpa path panjang.' : 'Modern W3C standard import maps for clean, bare specifier imports.' }}
            </p>
          </div>
        </div>
        <CodeBlock :code="cdnMethodBCode" language="html" />
      </section>

      <!-- Method C: UMD for <script> tag -->
      <section class="space-y-4">
        <div class="flex items-center gap-3">
          <span
            class="w-7 h-7 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold"
          >
            C
          </span>
          <div>
            <h2 class="text-lg font-bold text-slate-900 dark:text-slate-100">
              UMD for &lt;script&gt; Tag (No Bundler / Classic HTML)
            </h2>
            <p class="text-xs text-slate-500">
              {{ isIndonesian ? 'Skrip UMD mandiri yang menempel pada window.ZyvnoxVuePack.' : 'Standalone pre-bundled UMD script attaching to window.ZyvnoxVuePack.' }}
            </p>
          </div>
        </div>
        <CodeBlock :code="cdnMethodCCode" language="html" />
      </section>
    </div>

    <!-- Next Steps Navigation -->
    <section
      class="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between"
    >
      <RouterLink
        to="/doc/installation"
        class="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
      >
        {{ isIndonesian ? 'Berikutnya: Persyaratan Sistem Lengkap & Dependensi →' : 'Next: Full System Requirements & Peer Dependencies →' }}
      </RouterLink>
      <RouterLink
        to="/doc/examples/form-modal"
        class="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:underline"
      >
        {{ isIndonesian ? 'Jelajahi Engine FormModal ↗' : 'Explore FormModal Engine ↗' }}
      </RouterLink>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import { useSiteI18n } from '@/i18n'
import pkg from '../../../package.json'

const { t, isIndonesian } = useSiteI18n()
const version = pkg.version || '0.1.4'
const activeTab = ref<'npm' | 'cdn'>('npm')

const npmUsageCode = `<template>
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
<\/script>`

const cdnMethodACode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Zyvnox Vue Pack - jsDelivr ESM</title>
  <!-- 1. Import library stylesheet -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@${version}/dist/style.css" />

  <!-- 2. Importmap maps Vue & Zyvnox Vue Pack for clean native browser ES modules -->
  <script type="importmap">
  {
    "imports": {
      "vue": "https://cdn.jsdelivr.net/npm/vue@3.5/dist/vue.esm-browser.js",
      "@zyvnox/vue-pack": "https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@${version}/dist/cdn/vue-pack.es.js"
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
</html>`

const cdnMethodBCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Zyvnox Vue Pack - esm.sh Import Map</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@${version}/dist/style.css" />

  <!-- 1. Define browser import maps with shared Vue 3 runtime compiler -->
  <script type="importmap">
  {
    "imports": {
      "vue": "https://cdn.jsdelivr.net/npm/vue@3.5/dist/vue.esm-browser.js",
      "@zyvnox/vue-pack": "https://esm.sh/@zyvnox/vue-pack@${version}?external=vue"
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
</html>`

const cdnMethodCCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Zyvnox Vue Pack - UMD Script</title>
  <!-- 1. Isolated stylesheet -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@${version}/dist/style.css" />
</head>
<body>
  <div id="app"></div>

  <!-- 2. Load Vue 3 Global first (with in-browser template compiler) -->
  <script src="https://cdn.jsdelivr.net/npm/vue@3.5/dist/vue.global.js"><\/script>

  <!-- 3. Load Zyvnox Vue Pack Standalone CDN UMD Bundle -->
  <script src="https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@${version}/dist/cdn/vue-pack.umd.js"><\/script>

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
</html>`
</script>
