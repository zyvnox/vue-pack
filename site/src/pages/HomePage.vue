<template>
  <div class="max-w-4xl mx-auto py-8">
    <!-- Hero Header -->
    <div class="text-center space-y-4 mb-12">
      <div
        class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-semibold"
      >
        <span>🚀 Version {{ version }} — Early Release</span>
        <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
        <span>Vue 3.5+ & Vite 6 Ready</span>
      </div>

      <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        @zyvnox/vue-pack
      </h1>

      <p class="text-xs font-mono text-amber-600 dark:text-amber-400">
        ⚠️ Early — breaking changes possible until v1.0.0 stable
      </p>

      <p
        class="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
      >
        Enterprise Schema-Driven Vue 3 Component Library, Datatable Engine, Custom Schema Tooltip
        Architecture, and Offline-First Storage Utilities.
      </p>

      <div class="flex flex-col sm:flex-row gap-3 justify-center pt-2 items-center">
        <RouterLink
          to="/playground"
          class="w-full sm:w-auto text-center px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-lg font-medium text-sm shadow-sm transition-all flex items-center justify-center gap-1.5"
        >
          <span>⚡</span>
          <span>Live Playground</span>
        </RouterLink>
        <RouterLink
          to="/getting-started"
          class="w-full sm:w-auto text-center px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm shadow-sm transition-colors"
        >
          Get Started →
        </RouterLink>
        <RouterLink
          to="/examples/form-modal"
          class="w-full sm:w-auto text-center px-6 py-2.5 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium text-sm transition-colors"
        >
          Explore Components
        </RouterLink>
        <a
          href="https://github.com/zyvnox/vue-pack"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full sm:w-auto text-center px-6 py-2.5 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium text-sm transition-colors"
        >
          GitHub ↗
        </a>
      </div>

      <div class="flex items-center justify-center pt-2">
        <SponsorButton variant="both" />
      </div>
    </div>

    <!-- Quick Consumer Simulation Banner -->
    <div
      class="mb-12 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 flex items-start gap-3"
    >
      <span class="text-xl">✅</span>
      <div class="text-xs text-emerald-900 dark:text-emerald-200">
        <p class="font-semibold mb-0.5">Standalone Consumer Simulation Mode Active</p>
        <p class="text-emerald-700 dark:text-emerald-300">
          This documentation site is running independently, consuming pre-compiled subpath exports
          via
          <code class="font-mono bg-emerald-100 dark:bg-emerald-900/60 px-1.5 py-0.5 rounded"
            >@zyvnox/vue-pack/*</code
          >
          with zero internal relative imports to <code class="font-mono">../src</code>.
        </p>
      </div>
    </div>

    <!-- Feature Pillars Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
      <div
        v-for="feature in features"
        :key="feature.title"
        class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 space-y-2.5"
      >
        <div
          class="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl"
        >
          {{ feature.icon }}
        </div>
        <h3 class="font-semibold text-sm text-slate-900 dark:text-slate-100">
          {{ feature.title }}
        </h3>
        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          {{ feature.desc }}
        </p>
      </div>
    </div>

    <!-- Code Quickstart Snippet -->
    <div class="space-y-3">
      <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">Instant Usage Preview</h3>
      <CodeBlock :code="quickSnippet" language="vue" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import { SponsorButton } from '@zyvnox/vue-pack/components'
import pkg from '../../../package.json'

const version = pkg.version

const features = [
  {
    icon: '🧩',
    title: 'Schema-Driven UI Engine',
    desc: 'Render complex responsive forms, modals, and datatables declaratively from Zod/JSON schemas with zero boilerplate.',
  },
  {
    icon: '📦',
    title: 'Clean Subpath Exports',
    desc: 'Granular tree-shakeable imports: /components, /config, /init, /indexedDB, /secureFetch, /vue, /type, and /style.css.',
  },
  {
    icon: '🛡️',
    title: 'Zod Validation & Tooltips',
    desc: 'Schema-first validation paired with a dedicated custom tooltip system for explicit user guidance.',
  },
  {
    icon: '💾',
    title: 'Offline-First Storage',
    desc: 'Integrated IndexedDB engine with schema migrations, reactive local storage, and seamless offline data synchronization.',
  },
  {
    icon: '🌐',
    title: 'Deep Multi-Language i18n',
    desc: 'Built-in en and id language packs with dynamic runtime registration via registerLanguage and full message overrides.',
  },
  {
    icon: '🎨',
    title: 'Prefixed UnoCSS Isolation',
    desc: 'All utilities strictly namespaced with zyvnox- prefix, preventing any styling bleed in host consumer applications.',
  },
]

const quickSnippet = `<template>
  <div class="p-6">
    <TextInput
      v-model="fullName"
      label="Full Name"
      tooltip="Enter legal name without titles"
      tooltip-position="right"
      placeholder="e.g. John Doe"
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
</script>
