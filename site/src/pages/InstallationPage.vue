<template>
  <div class="max-w-4xl mx-auto space-y-10 py-6">
    <!-- Header -->
    <header class="border-b border-slate-200 dark:border-slate-800 pb-6">
      <div class="flex items-center gap-3 mb-2">
        <h1 class="text-3xl font-bold text-slate-900 dark:text-white">
          {{ isIndonesian ? 'Panduan Instalasi' : 'Installation' }}
        </h1>
        <span
          class="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-400 border border-amber-300/60 dark:border-amber-800/60"
        >
          v0.1.4 Early Release
        </span>
      </div>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        {{ isIndonesian
          ? 'Persyaratan sistem terperinci, perintah instalasi manajer paket, dan metode integrasi aplikasi.'
          : 'Detailed system requirements, package manager installation commands, and integration methods.' }}
      </p>
    </header>

    <!-- System Requirements -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">
        {{ isIndonesian ? 'Persyaratan Sistem' : 'Requirements' }}
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div class="text-xs font-medium text-slate-500">Node.js</div>
          <div class="text-base font-bold text-slate-900 dark:text-white mt-1">^20.19 || >=22.12</div>
        </div>
        <div class="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div class="text-xs font-medium text-slate-500">Vue</div>
          <div class="text-base font-bold text-slate-900 dark:text-white mt-1">^3.5.18</div>
        </div>
        <div class="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div class="text-xs font-medium text-slate-500">Zod</div>
          <div class="text-base font-bold text-slate-900 dark:text-white mt-1">v3.23+ or v4.0+</div>
        </div>
        <div class="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div class="text-xs font-medium text-slate-500">Leaflet</div>
          <div class="text-base font-bold text-slate-900 dark:text-white mt-1">^1.9.4 (Peer)</div>
        </div>
      </div>
    </section>

    <!-- Package Manager Commands -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">
        {{ isIndonesian ? 'Manajer Paket' : 'Package Managers' }}
      </h2>
      <div class="space-y-3">
        <h3 class="text-xs font-semibold text-slate-500 uppercase">npm</h3>
        <CodeBlock code="npm install @zyvnox/vue-pack zod vue leaflet" language="bash" />
        <h3 class="text-xs font-semibold text-slate-500 uppercase">pnpm</h3>
        <CodeBlock code="pnpm add @zyvnox/vue-pack zod vue leaflet" language="bash" />
        <h3 class="text-xs font-semibold text-slate-500 uppercase">bun</h3>
        <CodeBlock code="bun add @zyvnox/vue-pack zod vue leaflet" language="bash" />
      </div>
    </section>

    <!-- Plugin Registration Options -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">
        {{ isIndonesian ? 'Strategi Pendaftaran Komponen' : 'Registration Strategies' }}
      </h2>
      <div class="space-y-4">
        <div class="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <h3 class="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2">
            {{ isIndonesian ? 'Opsi A: Impor Subpath Granular (Disarankan untuk Tree-Shaking)' : 'Option A: Granular Subpath Imports (Recommended for Tree-Shaking)' }}
          </h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 mb-3">
            {{ isIndonesian
              ? 'Hanya impor komponen yang Anda butuhkan langsung ke dalam SFC. Memberikan ukuran bundle paling optimal.'
              : 'Import only the components you need directly into SFCs. Provides optimal bundle sizes.' }}
          </p>
          <CodeBlock :code="granularCode" language="vue" />
        </div>

        <div class="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <h3 class="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-2">
            {{ isIndonesian ? 'Opsi B: Pendaftaran Plugin Vue Global' : 'Option B: Global Vue Plugin Registration' }}
          </h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 mb-3">
            {{ isIndonesian
              ? 'Daftarkan semua komponen secara global ke seluruh aplikasi Vue Anda.'
              : 'Register all components globally across your entire Vue application.' }}
          </p>
          <CodeBlock :code="pluginCode" language="ts" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import { useSiteI18n } from '@/i18n'

const { isIndonesian } = useSiteI18n()

const granularCode = `<template>
  <TextInput v-model="name" label="Full Name" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TextInput } from '@zyvnox/vue-pack/components'
import '@zyvnox/vue-pack/style.css'

const name = ref('')
<\/script>`

const pluginCode = `// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import ZyvnoxVuePack from '@zyvnox/vue-pack/vue'
import '@zyvnox/vue-pack/style.css'

const app = createApp(App)
app.use(ZyvnoxVuePack)
app.mount('#app')`
</script>
