<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200 overflow-x-hidden">
    <!-- Standalone Landing Page Header -->
    <header
      class="fixed top-0 left-0 right-0 z-40 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 sm:px-8 py-2.5 sm:py-3.5 transition-colors duration-200"
    >
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <!-- Left: Logo & Brand -->
        <RouterLink to="/" class="flex items-center gap-2 group shrink-0 min-w-0">
          <img src="/zyvnox-black.svg" class="w-7 h-7 sm:w-8 sm:h-8 dark:hidden shrink-0 transition-transform group-hover:scale-105" alt="Zyvnox Logo" />
          <img src="/zyvnox-white.svg" class="w-7 h-7 sm:w-8 sm:h-8 hidden dark:block shrink-0 transition-transform group-hover:scale-105" alt="Zyvnox Logo" />
          <div class="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span class="font-bold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white truncate">
              <span class="hidden sm:inline">@zyvnox/vue-pack</span>
              <span class="sm:hidden">@zyvnox</span>
            </span>
            <span
              class="px-1.5 py-0.2 sm:px-2 sm:py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-400 border border-amber-300/60 dark:border-amber-800/60 shrink-0"
            >
              v{{ version }}
            </span>
          </div>
        </RouterLink>

        <!-- Right: Nav Links & Actions -->
        <div class="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <RouterLink
            to="/doc/whats-new"
            class="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hidden md:inline-flex items-center gap-1"
          >
            <span>✨</span>
            <span>{{ t('nav.whatsNew') }}</span>
          </RouterLink>

          <RouterLink
            to="/doc"
            class="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <span>{{ t('nav.docs') }}</span>
          </RouterLink>

          <RouterLink
            to="/playground"
            class="flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-sm transition-all"
          >
            <span>⚡</span>
            <span class="hidden sm:inline">{{ t('nav.playground') }}</span>
          </RouterLink>

          <div class="hidden lg:inline-flex">
            <RouterLink
              to="/doc/sponsor"
              class="items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-950/40 transition-colors"
            >
              <span>💖</span>
              <span>{{ t('nav.sponsor') }}</span>
            </RouterLink>
          </div>

          <a
            href="https://github.com/zyvnox/vue-pack"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <span>{{ t('nav.github') }}</span>
          </a>

          <!-- Interactive Language Switcher -->
          <LanguageSwitcher />

          <!-- Dark Mode Toggle -->
          <button
            type="button"
            @click="toggleDark"
            class="p-1.5 sm:p-2 rounded-lg border border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs flex items-center justify-center cursor-pointer"
            :title="t('nav.toggleTheme')"
          >
            <span v-if="isDark">🌙</span>
            <span v-else>☀️</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Header Spacer -->
    <div class="h-14 sm:h-16 shrink-0" aria-hidden="true" />

    <!-- Hero Section -->
    <main class="flex-1">
      <section class="relative overflow-hidden pt-10 pb-16 sm:pt-20 sm:pb-28 px-4 sm:px-6">
        <!-- Subtle Glow Background -->
        <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-teal-500/10 blur-3xl pointer-events-none -z-10 rounded-full"></div>

        <div class="max-w-4xl mx-auto text-center space-y-6">
          <!-- Release Status Pill -->
          <RouterLink
            to="/doc/whats-new"
            class="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-semibold shadow-xs hover:border-amber-400 dark:hover:border-amber-600 transition-colors group cursor-pointer"
          >
            <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse shrink-0"></span>
            <span>{{ t('home.whatsNewPill', { version }) }}</span>
            <span class="hidden sm:inline text-amber-400 dark:text-amber-600">•</span>
            <span class="hidden sm:inline group-hover:underline">{{ t('home.changelog') }}</span>
          </RouterLink>

          <!-- Main Hero Headline -->
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            {{ t('home.heroTitlePrefix') }}<br />
            <span class="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              {{ t('home.heroTitleHighlight') }}
            </span>
          </h1>

          <!-- Tagline -->
          <p class="text-sm sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed px-2">
            {{ t('home.heroTagline') }}
          </p>

          <!-- Primary CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 justify-center pt-2 items-stretch sm:items-center max-w-xs sm:max-w-none mx-auto w-full">
            <RouterLink
              to="/doc"
              class="w-full sm:w-auto text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>{{ t('home.exploreDocs') }}</span>
              <span>→</span>
            </RouterLink>

            <RouterLink
              to="/playground"
              class="w-full sm:w-auto text-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>⚡</span>
              <span>{{ t('home.openPlayground') }}</span>
            </RouterLink>

            <a
              href="https://github.com/zyvnox/vue-pack"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full sm:w-auto text-center px-6 py-3 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <span>{{ t('nav.github') }}</span>
            </a>
          </div>

          <!-- Sponsor Buttons -->
          <div class="flex items-center justify-center pt-2">
            <SponsorButton variant="both" />
          </div>

          <!-- Interactive Package Manager Install Tabs -->
          <div class="max-w-md mx-auto pt-6 text-left w-full px-2 sm:px-0">
            <div class="flex items-center justify-between pb-2 px-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span>{{ t('home.quickInstall') }}</span>
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
              class="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-mono text-xs shadow-inner min-w-0 max-w-full"
            >
              <div class="truncate mr-2 min-w-0">
                <span class="text-blue-400 select-none">$ </span>
                <span>{{ installCommands[selectedPm] }}</span>
              </div>
              <button
                type="button"
                @click="copyInstall"
                class="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                :title="t('home.copyInstallTitle')"
              >
                <span v-if="copied">{{ t('home.copied') }}</span>
                <span v-else>{{ t('home.copy') }}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Feature Pillars Grid -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-200 dark:border-slate-800">
        <div class="text-center space-y-2 mb-12">
          <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            {{ t('home.architectureTitle') }}
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            {{ t('home.architectureSubtitle') }}
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
              <span>{{ t('home.declarativeBadge') }}</span>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white">
              {{ t('home.declarativeTitle') }}
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {{ t('home.declarativeDesc') }}
            </p>
            <div class="pt-2 flex flex-wrap gap-3">
              <RouterLink
                to="/playground"
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-all"
              >
                <span>{{ t('home.openInPlayground') }}</span>
                <span>→</span>
              </RouterLink>
              <RouterLink
                to="/doc/examples/form-modal"
                class="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 text-xs font-semibold transition-colors"
              >
                {{ t('home.exploreFormModal') }}
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
          <span>{{ t('footer.copyright', { version }) }}</span>
        </div>

        <div class="flex items-center gap-5 font-medium">
          <RouterLink to="/" class="hover:text-slate-900 dark:hover:text-white transition-colors">{{ t('footer.home') }}</RouterLink>
          <RouterLink to="/doc" class="hover:text-slate-900 dark:hover:text-white transition-colors">{{ t('footer.docs') }}</RouterLink>
          <RouterLink to="/playground" class="hover:text-slate-900 dark:hover:text-white transition-colors">{{ t('footer.playground') }}</RouterLink>
          <RouterLink to="/doc/sponsor" class="text-pink-600 dark:text-pink-400 hover:underline">{{ t('footer.sponsor') }}</RouterLink>
          <a href="https://github.com/zyvnox/vue-pack" target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 dark:hover:text-white transition-colors">{{ t('footer.github') }}</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { SponsorButton, SponsorCard } from '@zyvnox/vue-pack/components'
import { useDark } from '@/composables/useDark'
import { useSiteI18n } from '@/i18n'
import pkg from '../../../package.json'

const version = pkg.version || '0.1.4'
const { isDark, toggleDark } = useDark()
const { t } = useSiteI18n()

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

const features = computed(() => [
  {
    icon: '🧩',
    title: t('home.features.schema.title'),
    desc: t('home.features.schema.desc'),
  },
  {
    icon: '🎨',
    title: t('home.features.unocss.title'),
    desc: t('home.features.unocss.desc'),
  },
  {
    icon: '🛡️',
    title: t('home.features.validation.title'),
    desc: t('home.features.validation.desc'),
  },
  {
    icon: '💾',
    title: t('home.features.offline.title'),
    desc: t('home.features.offline.desc'),
  },
  {
    icon: '📦',
    title: t('home.features.treeshaking.title'),
    desc: t('home.features.treeshaking.desc'),
  },
  {
    icon: '🌐',
    title: t('home.features.i18n.title'),
    desc: t('home.features.i18n.desc'),
  },
])

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
