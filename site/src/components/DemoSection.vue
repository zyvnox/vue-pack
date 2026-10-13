<template>
  <section class="mb-8 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900/60 shadow-sm">
    <header class="px-5 py-3.5 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800">
      <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-blue-500"></span>
        {{ title }}
      </h3>
      <p v-if="description" class="text-xs text-slate-600 dark:text-slate-400 mt-1">
        {{ description }}
      </p>
    </header>
    
    <div class="p-5 space-y-4">
      <slot />
    </div>
    
    <div v-if="$slots.code" class="border-t border-slate-200 dark:border-slate-800 p-3 bg-slate-900/40">
      <slot name="code" />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>

