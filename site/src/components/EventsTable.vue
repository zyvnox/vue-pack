<template>
  <div class="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
    <table class="w-full min-w-[480px] text-sm border-collapse">
      <thead>
        <tr class="bg-slate-50 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300">
          <th class="px-4 py-2.5 text-left font-semibold border-b border-slate-200 dark:border-slate-800">Event</th>
          <th class="px-4 py-2.5 text-left font-semibold border-b border-slate-200 dark:border-slate-800">Payload / Signature</th>
          <th class="px-4 py-2.5 text-left font-semibold border-b border-slate-200 dark:border-slate-800">Description</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
        <tr
          v-for="ev in events"
          :key="ev.name"
          class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors"
        >
          <td class="px-4 py-2.5 font-mono text-xs font-semibold text-amber-600 dark:text-amber-400">
            @{{ ev.name }}
          </td>
          <td class="px-4 py-2.5 font-mono text-xs text-blue-600 dark:text-blue-400">
            {{ ev.type || 'void' }}
          </td>
          <td class="px-4 py-2.5 text-xs text-slate-600 dark:text-slate-300">
            {{ ev.description }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
export interface EventDef {
  name: string
  type?: string
  description: string
}

defineProps<{
  events: EventDef[]
}>()
</script>

