<template>
  <div class="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
    <table class="w-full min-w-[540px] text-sm border-collapse">
      <thead>
        <tr class="bg-slate-50 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300">
          <th class="px-4 py-2.5 text-left font-semibold border-b border-slate-200 dark:border-slate-800">Prop</th>
          <th class="px-4 py-2.5 text-left font-semibold border-b border-slate-200 dark:border-slate-800">Type</th>
          <th class="px-4 py-2.5 text-left font-semibold border-b border-slate-200 dark:border-slate-800">Default</th>
          <th class="px-4 py-2.5 text-left font-semibold border-b border-slate-200 dark:border-slate-800">Description</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
        <tr
          v-for="prop in props"
          :key="prop.name"
          class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors"
        >
          <td class="px-4 py-2.5 font-mono text-xs font-semibold text-slate-900 dark:text-slate-100">
            {{ prop.name }}
            <span v-if="prop.required" class="text-rose-500 ml-0.5" title="Required">*</span>
          </td>
          <td class="px-4 py-2.5 font-mono text-xs text-blue-600 dark:text-blue-400">
            {{ prop.type }}
          </td>
          <td class="px-4 py-2.5 font-mono text-xs text-slate-500 dark:text-slate-400">
            {{ prop.default ?? '—' }}
          </td>
          <td class="px-4 py-2.5 text-xs text-slate-600 dark:text-slate-300">
            {{ prop.description }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
export interface PropDef {
  name: string
  type: string
  default?: string
  description: string
  required?: boolean
}

defineProps<{
  props: PropDef[]
}>()
</script>

