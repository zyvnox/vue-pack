<template>
  <div
    class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col lg:flex-row"
  >
    <!-- Sticky Mobile Top Bar (visible on < lg screens) -->
    <header
      class="lg:hidden sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm"
    >
      <div class="flex items-center gap-3">
        <button
          type="button"
          @click="mobileOpen = true"
          class="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Open Navigation"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <RouterLink to="/" class="flex items-center gap-2.5">
          <img src="/zyvnox-black.svg" class="w-7 h-7 dark:hidden shrink-0" alt="Zyvnox Logo" />
          <img
            src="/zyvnox-white.svg"
            class="w-7 h-7 hidden dark:block shrink-0"
            alt="Zyvnox Logo"
          />
          <div class="leading-tight">
            <span
              class="font-bold text-xs sm:text-sm tracking-tight text-slate-900 dark:text-white"
            >
              @zyvnox
            </span>
            <span
              class="block text-[9px] font-mono bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 px-1 rounded"
            >
              vue-pack v0.1.0 • Early
            </span>
          </div>
        </RouterLink>
      </div>

      <div class="flex items-center gap-2">
        <SponsorButton variant="both" class="hidden sm:inline-flex" />
        <RouterLink
          to="/playground"
          class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors flex items-center gap-1 shadow-sm"
          title="Open Live Playground"
        >
          <span>⚡</span>
          <span>Playground</span>
        </RouterLink>

        <button
          type="button"
          @click="toggleDark"
          class="p-1 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title="Toggle Dark Mode"
        >
          <span v-if="isDark">🌙</span>
          <span v-else>☀️</span>
        </button>
      </div>
    </header>

    <!-- Sidebar (Desktop sticky, Mobile drawer) -->
    <SidebarNav :is-open="mobileOpen" @close="mobileOpen = false" />

    <!-- Main Content Area -->
    <main class="flex-1 min-w-0 w-full p-4 sm:p-6 lg:p-10 mx-auto lg:mx-0 flex flex-col justify-between">
      <div>
        <RouterView />
      </div>

      <!-- Footer with SponsorCard -->
      <footer class="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 space-y-6 flex flex-col gap-6">
        <SponsorCard />
        <div class="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-3 pt-2">
          <span>&copy; 2026 zyvnox • MIT License</span>
          <div class="flex items-center gap-4">
            <RouterLink to="/sponsor" class="hover:underline text-amber-600 dark:text-amber-400 font-medium">💖 Sponsor</RouterLink>
            <a href="https://github.com/zyvnox/vue-pack" target="_blank" rel="noopener noreferrer" class="hover:underline">GitHub</a>
            <RouterLink to="/playground" class="hover:underline">Live Playground</RouterLink>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SidebarNav from '@/components/SidebarNav.vue'
import { useDark } from '@/composables/useDark'
import { SponsorButton, SponsorCard } from '@zyvnox/vue-pack/components'

const mobileOpen = ref(false)
const { isDark, toggleDark } = useDark()
</script>
