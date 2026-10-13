<template>
  <div class="max-w-4xl mx-auto space-y-10 py-6">
    <!-- Header -->
    <header class="border-b border-slate-200 dark:border-slate-800 pb-6">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        Installation
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Detailed system requirements, package manager installation commands, and integration methods.
      </p>
    </header>

    <!-- System Requirements -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">
        Requirements
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
        Package Managers
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
        Registration Strategies
      </h2>
      <div class="space-y-4">
        <div class="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <h3 class="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2">
            Option A: Granular Subpath Imports (Recommended for Tree-Shaking)
          </h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 mb-3">
            Import only the components you need directly into SFCs. Provides optimal bundle sizes.
          </p>
          <CodeBlock :code="granularCode" language="vue" />
        </div>

        <div class="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <h3 class="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-2">
            Option B: Global Vue Plugin Registration
          </h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 mb-3">
            Register all components globally across your entire Vue application.
          </p>
          <CodeBlock :code="pluginCode" language="ts" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const granularCode = `<template>
  <TextInput v-model="name" label="Full Name" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TextInput } from '@zyvnox/vue-pack/components'
import '@zyvnox/vue-pack/style.css'

const name = ref('')
<\/script>`

const pluginCode = [
  '// src/main.ts',
  "import { createApp } from 'vue'",
  "import App from './" + "App.vue'",
  "import ZyvnoxVuePack from '@zyvnox/vue-pack/vue'",
  "import '@zyvnox/vue-pack/style.css'",
  '',
  'const app = createApp(App)',
  'app.use(ZyvnoxVuePack)',
  "app.mount('#app')",
].join('\n')
</script>

