<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
    <!-- Standalone Landing Page Header -->
    <header
      class="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 sm:px-8 py-3.5 transition-colors duration-200"
    >
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <!-- Left: Logo & Brand -->
        <RouterLink to="/" class="flex items-center gap-3 group">
          <img src="/zyvnox-black.svg" class="w-8 h-8 dark:hidden shrink-0 transition-transform group-hover:scale-105" alt="Zyvnox Logo" />
          <img src="/zyvnox-white.svg" class="w-8 h-8 hidden dark:block shrink-0 transition-transform group-hover:scale-105" alt="Zyvnox Logo" />
          <div class="flex items-center gap-2">
            <span class="font-bold text-base tracking-tight text-slate-900 dark:text-white">@zyvnox/vue-pack</span>
            <span
              class="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-400 border border-amber-300/60 dark:border-amber-800/60"
            >
              v{{ version }}
            </span>
          </div>
        </RouterLink>

        <!-- Right: Nav Links & Actions -->
        <div class="flex items-center gap-2 sm:gap-4">
          <RouterLink
            to="/doc/whats-new"
            class="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hidden md:inline-flex items-center gap-1"
          >
            <span>✨</span>
            <span>What's New</span>
          </RouterLink>

          <RouterLink
            to="/doc"
            class="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Documentation
          </RouterLink>

          <RouterLink
            to="/playground"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-sm transition-all"
          >
            <span>⚡</span>
            <span>Playground</span>
          </RouterLink>

          <RouterLink
            to="/doc/sponsor"
            class="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-950/40 transition-colors"
          >
            <span>💖</span>
            <span>Sponsor</span>
          </RouterLink>

          <a
            href="https://github.com/zyvnox/vue-pack"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <span>GitHub ↗</span>
          </a>

          <button
            type="button"
            @click="toggleDark"
            class="p-2 rounded-lg border border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs flex items-center justify-center cursor-pointer"
            title="Toggle Dark Mode"
          >
            <span v-if="isDark">🌙</span>
            <span v-else>☀️</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <main class="flex-1">
      <section class="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6">
        <!-- Subtle Glow Background -->
        <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-teal-500/10 blur-3xl pointer-events-none -z-10 rounded-full"></div>

        <div class="max-w-4xl mx-auto text-center space-y-6">
          <!-- Release Status Pill -->
          <RouterLink
            to="/doc/whats-new"
            class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-semibold shadow-xs hover:border-amber-400 dark:hover:border-amber-600 transition-colors group cursor-pointer"
          >
            <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span>What's New in v{{ version }}</span>
            <span class="text-amber-400 dark:text-amber-600">•</span>
            <span class="group-hover:underline">Changelog & Updates ↗</span>
          </RouterLink>

          <!-- Main Hero Headline -->
          <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            The Enterprise Schema-Driven<br />
            <span class="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Vue 3 Component Library
            </span>
          </h1>

          <!-- Tagline -->
          <p class="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Engineered for high-velocity administration dashboards, complex CRUD platforms, and offline-first data platforms. Powered by Zod schemas, autonomous IndexedDB, and zero CSS collisions.
          </p>

          <!-- Primary CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-3.5 justify-center pt-2 items-center">
            <RouterLink
              to="/doc"
              class="w-full sm:w-auto text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Documentation</span>
              <span>→</span>
            </RouterLink>

            <RouterLink
              to="/playground"
              class="w-full sm:w-auto text-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>⚡</span>
              <span>Live Playground</span>
            </RouterLink>

            <a
              href="https://github.com/zyvnox/vue-pack"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full sm:w-auto text-center px-6 py-3 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <span>GitHub ↗</span>
            </a>
          </div>

          <!-- Sponsor Buttons -->
          <div class="flex items-center justify-center pt-2">
            <SponsorButton variant="both" />
          </div>

          <!-- Interactive Package Manager Install Tabs -->
          <div class="max-w-md mx-auto pt-6 text-left">
            <div class="flex items-center justify-between pb-2 px-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span>Quick Install</span>
              <div class="flex gap-2">
                <button
                  type="button"
                  v-for="pm in (['npm', 'pnpm', 'yarn', 'bun'] as const)"
                  :key="pm"
                  @click="selectedPm = pm"
                  class="px-2 py-0.5 rounded text-[11px] font-mono cursor-pointer transition-colors"
                  :class="selectedPm === pm ? 'bg-blue-600 text-white font-bold' : 'hover:bg-slate-200 dark:hover:bg-slate-800'"
                >
                  {{ pm }}
                </button>
              </div>
            </div>

            <div
              class="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-mono text-xs shadow-inner"
            >
              <div class="truncate mr-3">
                <span class="text-blue-400 select-none">$ </span>
                <span>{{ installCommands[selectedPm] }}</span>
              </div>
              <button
                type="button"
                @click="copyInstall"
                class="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                title="Copy install command"
              >
                <span v-if="copied">✓ Copied!</span>
                <span v-else>📋 Copy</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Feature Pillars Grid -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-200 dark:border-slate-800">
        <div class="text-center space-y-2 mb-12">
          <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Architected for Scalable Production Applications
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Everything you need to deliver enterprise back-offices without rewriting repetitive CRUD tables and form schemas.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 shadow-xs hover:shadow-md transition-all space-y-3"
          >
            <div class="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl">
              {{ feature.icon }}
            </div>
            <h3 class="font-bold text-sm text-slate-900 dark:text-slate-100">
              {{ feature.title }}
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {{ feature.desc }}
            </p>
          </div>
        </div>
      </section>

      <!-- Code Showcase / Live Preview Section -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div class="p-8 rounded-3xl bg-gradient-to-b from-slate-100 to-slate-200/50 dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col lg:flex-row items-center gap-8">
          <div class="flex-1 space-y-4">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
              <span>⚡ Standalone CDN & SFC Ready</span>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white">
              Declarative Schema UI in Seconds
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Define your fields once with Zod validation rules and tooltips, and let <code class="font-bold">FormModal</code> and <code class="font-bold">TabelData</code> orchestrate responsive multi-layout inputs, live errors, and CRUD mutations automatically.
            </p>
            <div class="pt-2 flex flex-wrap gap-3">
              <RouterLink
                to="/playground"
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-all"
              >
                <span>⚡ Open in Live Playground</span>
                <span>→</span>
              </RouterLink>
              <RouterLink
                to="/doc/examples/form-modal"
                class="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 text-xs font-semibold transition-colors"
              >
                Explore FormModal Engine ↗
              </RouterLink>
            </div>
          </div>

          <div class="flex-1 w-full overflow-hidden rounded-2xl shadow-xl border border-slate-800">
            <CodeBlock :code="quickSnippet" language="vue" />
          </div>
        </div>
      </section>

      <!-- Sponsor Callout -->
      <section class="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <SponsorCard />
      </section>
    </main>

    <!-- Standalone Landing Footer -->
    <footer class="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 py-8 px-4 sm:px-8 text-xs text-slate-500 dark:text-slate-400 transition-colors duration-200">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-2.5">
          <img src="/zyvnox-black.svg" class="w-6 h-6 dark:hidden" alt="Zyvnox Logo" />
          <img src="/zyvnox-white.svg" class="w-6 h-6 hidden dark:block" alt="Zyvnox Logo" />
          <span>&copy; 2026 zyvnox • MIT License • Early Release v{{ version }}</span>
        </div>

        <div class="flex items-center gap-5 font-medium">
          <RouterLink to="/" class="hover:text-slate-900 dark:hover:text-white transition-colors">Home</RouterLink>
          <RouterLink to="/doc" class="hover:text-slate-900 dark:hover:text-white transition-colors">Documentation</RouterLink>
          <RouterLink to="/playground" class="hover:text-slate-900 dark:hover:text-white transition-colors">Playground</RouterLink>
          <RouterLink to="/doc/sponsor" class="text-pink-600 dark:text-pink-400 hover:underline">💖 Sponsor</RouterLink>
          <a href="https://github.com/zyvnox/vue-pack" target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 dark:hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import { SponsorButton, SponsorCard } from '@zyvnox/vue-pack/components'
import { useDark } from '@/composables/useDark'
import pkg from '../../../package.json'

const version = pkg.version || '0.1.2'
const { isDark, toggleDark } = useDark()

const selectedPm = ref<'npm' | 'pnpm' | 'yarn' | 'bun'>('npm')
const copied = ref(false)

const installCommands = {
  npm: 'npm install @zyvnox/vue-pack',
  pnpm: 'pnpm add @zyvnox/vue-pack',
  yarn: 'yarn add @zyvnox/vue-pack',
  bun: 'bun add @zyvnox/vue-pack',
}

const copyInstall = async () => {
  try {
    await navigator.clipboard.writeText(installCommands[selectedPm.value])
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 1500)
  } catch (err) {
    console.error('Failed to copy', err)
  }
}

const features = [
  {
    icon: '🧩',
    title: 'Schema-Driven UI Engine',
    desc: 'Render complex responsive forms, modals, and datatables declaratively from Zod/JSON schemas with zero boilerplate.',
  },
  {
    icon: '🎨',
    title: 'Prefixed UnoCSS Isolation',
    desc: 'All utilities strictly namespaced with zyvnox- prefix, preventing any styling bleed in host consumer applications.',
  },
  {
    icon: '🛡️',
    title: 'Dual-Layer Zod Validation',
    desc: 'Schema-first validation with runtime type safety and custom tooltip guidance across all inputs and CRUD actions.',
  },
  {
    icon: '💾',
    title: 'Autonomous Offline Storage',
    desc: 'Integrated IndexedDB engine with automatic store upgrades, reactive caching, and offline mock support.',
  },
  {
    icon: '📦',
    title: 'Granular Subpath Tree-Shaking',
    desc: 'Fine-grained module exports: /components, /config, /init, /indexedDB, /secureFetch, /vue, /type, and /style.css.',
  },
  {
    icon: '🌐',
    title: 'Deep Multi-Language i18n',
    desc: 'Built-in en and id language packs with dynamic runtime registration via registerLanguage and full message overrides.',
  },
]

const quickSnippet = `<template>
  <div class="p-6">
    <TextInput
      v-model="name"
      label="Subscriber Name"
      placeholder="e.g. John Doe"
      tooltip="Enter full legal name"
      required
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TextInput } from '@zyvnox/vue-pack/components'
import '@zyvnox/vue-pack/style.css'

const name = ref('')
<\/script>`
</script>
