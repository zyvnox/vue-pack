<template>
  <div class="relative inline-block text-left" ref="containerRef">
    <!-- Trigger Button -->
    <button
      type="button"
      @click="open = !open"
      class="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700/80 bg-white/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold shadow-2xs transition-colors cursor-pointer select-none"
      :title="t('common.switchLang')"
      :aria-expanded="open"
      aria-haspopup="true"
    >
      <span class="text-sm leading-none">{{ currentOption.flag }}</span>
      <span class="uppercase font-bold tracking-wider text-[11px]">{{ currentLocale }}</span>
      <svg
        class="w-3.5 h-3.5 text-slate-400 transition-transform duration-200"
        :class="{ 'rotate-180': open }"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="open"
        class="absolute right-0 mt-1.5 w-48 rounded-xl shadow-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-1.5 z-50 text-xs focus:outline-none"
      >
        <div class="px-2 py-1 text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider border-b border-slate-100 dark:border-slate-700/60 mb-1">
          {{ t('nav.language') }}
        </div>

        <button
          v-for="opt in SUPPORTED_LOCALES"
          :key="opt.code"
          type="button"
          @click="selectLocale(opt.code)"
          class="w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-left transition-colors cursor-pointer"
          :class="
            currentLocale === opt.code
              ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-bold'
              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60'
          "
        >
          <div class="flex items-center gap-2">
            <span class="text-base leading-none">{{ opt.flag }}</span>
            <span class="text-xs">{{ opt.nativeName }}</span>
          </div>
          <span
            v-if="currentLocale === opt.code"
            class="text-blue-600 dark:text-blue-400 text-xs"
          >
            ✓
          </span>
        </button>

        <div v-if="currentLocale === 'id'" class="mt-1.5 pt-1.5 border-t border-slate-100 dark:border-slate-700/60 px-2 py-1 text-[10px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
          <span>🇮🇩</span>
          <span>Lokasi Indonesia terdeteksi</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useSiteI18n, SUPPORTED_LOCALES, type SiteLocale } from '@/i18n'

const { currentLocale, setLocale, t } = useSiteI18n()
const open = ref(false)
const containerRef = ref<HTMLElement | null>(null)

const currentOption = computed(() => {
  return SUPPORTED_LOCALES.find((l) => l.code === currentLocale.value) || SUPPORTED_LOCALES[0]
})

const selectLocale = (code: SiteLocale) => {
  setLocale(code)
  open.value = false
}

const handleClickOutside = (e: MouseEvent) => {
  if (containerRef.value && !containerRef.value.contains(e.target as Node)) {
    open.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>
