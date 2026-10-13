<template>
  <div
    class="h-screen w-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden font-sans transition-colors duration-200"
  >
    <!-- Top Bar Header -->
    <header
      class="h-14 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md px-4 sm:px-5 flex items-center justify-between shrink-0 select-none z-10 transition-colors duration-200"
    >
      <!-- Left: Logo & Back to Docs -->
      <div class="flex items-center gap-3 sm:gap-4">
        <RouterLink to="/" class="flex items-center gap-2 group">
          <img src="/zyvnox-black.svg" class="w-7 h-7 dark:hidden shrink-0" alt="Logo" />
          <img src="/zyvnox-white.svg" class="w-7 h-7 hidden dark:block shrink-0" alt="Logo" />
          <div class="flex items-center gap-1.5 font-bold text-sm tracking-tight text-slate-900 dark:text-white">
            <span>@zyvnox</span>
            <span class="text-blue-600 dark:text-blue-400">/vue-pack</span>
            <span class="text-xs text-slate-500 font-normal ml-1 hidden sm:inline">Playground</span>
          </div>
        </RouterLink>

        <span class="text-slate-300 dark:text-slate-700 hidden sm:inline">|</span>

        <RouterLink
          to="/"
          class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700/60"
          title="Back to documentation home"
        >
          <span>←</span>
          <span>Back to Docs</span>
        </RouterLink>
      </div>

      <!-- Center: CDN Status Badge -->
      <div
        class="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800/80 text-[11px] font-mono font-medium text-emerald-700 dark:text-emerald-400"
      >
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Vue CDN: 3.5</span>
        <span class="text-emerald-700 dark:text-emerald-600">+</span>
        <span>@zyvnox/vue-pack CDN: {{ version }}</span>
      </div>

      <!-- Right: Action Buttons -->
      <div class="flex items-center gap-2">
        <button
          type="button"
          @click="resetCode"
          class="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer border border-slate-200 dark:border-slate-700/60"
          title="Reset code to default example"
        >
          <span>🔄</span>
          <span class="hidden sm:inline">Reset</span>
        </button>

        <button
          type="button"
          @click="copyCode"
          class="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer border border-slate-200 dark:border-slate-700/60"
          title="Copy current code to clipboard"
        >
          <span v-if="copied" class="text-emerald-600 dark:text-emerald-400 font-semibold">✓ Copied!</span>
          <span v-else class="flex items-center gap-1">
            <span>📋</span>
            <span class="hidden sm:inline">Copy Code</span>
          </span>
        </button>

        <SponsorButton variant="both" class="hidden lg:inline-flex" />

        <button
          type="button"
          @click="toggleDark"
          class="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs flex items-center justify-center cursor-pointer"
          title="Toggle Dark Mode"
        >
          <span v-if="isDark">🌙</span>
          <span v-else>☀️</span>
        </button>

        <a
          href="https://github.com/zyvnox/vue-pack"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-700/60"
          title="View on GitHub"
        >
          <span>GitHub ↗</span>
        </a>
      </div>
    </header>

    <!-- Split Pane Workspace (50% Left / 50% Right) -->
    <main class="flex-1 flex flex-col md:flex-row overflow-hidden">
      <!-- Left: Code Editor (50%) -->
      <section
        class="h-1/2 md:h-full md:w-1/2 flex flex-col border-b md:border-b-0 border-slate-200 dark:border-slate-800"
      >
        <CodeEditor v-model="code" />
      </section>

      <!-- Right: Live Preview (50%) -->
      <section class="h-1/2 md:h-full md:w-1/2 flex flex-col">
        <Preview :code="code" :is-dark="isDark" />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CodeEditor from '@/components/playground/CodeEditor.vue'
import Preview from '@/components/playground/Preview.vue'
import { useDark } from '@/composables/useDark'
import { SponsorButton } from '@zyvnox/vue-pack/components'
import pkg from '../../../package.json'

const version = pkg.version || '0.1.0'
const { isDark, toggleDark } = useDark()

const defaultCode = `<script setup>
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
</template>`

const code = ref(defaultCode)
const copied = ref(false)

const resetCode = () => {
  code.value = defaultCode
}

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(code.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 1500)
  } catch (err) {
    console.error('Failed to copy', err)
  }
}
</script>

