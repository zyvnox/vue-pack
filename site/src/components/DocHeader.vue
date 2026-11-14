<template>
  <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
    <div class="flex flex-wrap items-center justify-between gap-3 mb-2">
      <div class="flex items-center gap-3">
        <h1 class="text-3xl font-bold text-slate-900 dark:text-white">
          {{ displayName }}
        </h1>
        <span
          class="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60"
        >
          v0.1.4
        </span>
      </div>

      <div class="flex items-center gap-2">
        <RouterLink
          to="/playground"
          class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors border border-emerald-200 dark:border-emerald-800/60"
        >
          ⚡ Playground ↗
        </RouterLink>
      </div>
    </div>
    <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
      {{ displayDescription }}
    </p>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSiteI18n } from '@/i18n'
import { getComponentMeta } from '@/i18n/dictionary'

const props = defineProps<{
  name?: string
  fallbackTitle?: string
  fallbackDesc?: string
}>()

const route = useRoute()
const { isIndonesian } = useSiteI18n()

const meta = computed(() => {
  const compKey = props.name || route.path.split('/').pop() || ''
  return getComponentMeta(compKey, props.fallbackTitle, props.fallbackDesc)
})

const displayName = computed(() => {
  if (isIndonesian.value && meta.value.nameId) {
    return meta.value.nameId
  }
  return meta.value.name
})

const displayDescription = computed(() => {
  return isIndonesian.value ? meta.value.descId : meta.value.descEn
})
</script>
