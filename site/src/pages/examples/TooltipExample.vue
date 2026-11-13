<template>
  <div class="space-y-8">
    <DocHeader />

    <!-- Demo 1: Placement Positions -->
    <DemoSection title="Tooltip Placements" description="Hover over any of the four trigger icons to test positioning.">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-2 text-center min-h-[90px]">
          <span class="text-xs font-semibold text-slate-600 dark:text-slate-400">{{ isIndonesian ? 'Posisi Atas' : 'Top Placement' }}</span>
          <Tooltip :text="isIndonesian ? 'Tooltip diposisikan di atas' : 'Tooltip positioned on top'" position="top" />
        </div>
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-2 text-center min-h-[90px]">
          <span class="text-xs font-semibold text-slate-600 dark:text-slate-400">{{ isIndonesian ? 'Posisi Bawah' : 'Bottom Placement' }}</span>
          <Tooltip :text="isIndonesian ? 'Tooltip diposisikan di bawah' : 'Tooltip positioned below'" position="bottom" />
        </div>
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-2 text-center min-h-[90px]">
          <span class="text-xs font-semibold text-slate-600 dark:text-slate-400">{{ isIndonesian ? 'Posisi Kiri' : 'Left Placement' }}</span>
          <Tooltip :text="isIndonesian ? 'Tooltip diposisikan di sebelah kiri' : 'Tooltip positioned on the left'" position="left" />
        </div>
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-2 text-center min-h-[90px]">
          <span class="text-xs font-semibold text-slate-600 dark:text-slate-400">{{ isIndonesian ? 'Posisi Kanan' : 'Right Placement' }}</span>
          <Tooltip :text="isIndonesian ? 'Tooltip diposisikan di sebelah kanan' : 'Tooltip positioned on the right'" position="right" />
        </div>
      </div>

      <template #code>
        <CodeBlock :code="positionsCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Custom Icons & Hotkeys -->
    <DemoSection title="Custom Trigger Icons & Hotkeys" description="Provide custom glyphs or keyboard shortcut labels.">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2">
        <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
          <span class="text-xs font-medium text-slate-600 dark:text-slate-400">{{ isIndonesian ? 'Simbol Info (ℹ️):' : 'Info Glyph (ℹ️):' }}</span>
          <Tooltip :text="isIndonesian ? 'Catatan informasi terperinci' : 'Detailed information note'" icon="ℹ️" position="top" />
        </div>
        <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
          <span class="text-xs font-medium text-slate-600 dark:text-slate-400">{{ isIndonesian ? 'Simbol Peringatan (⚠️):' : 'Warning Glyph (⚠️):' }}</span>
          <Tooltip :text="isIndonesian ? 'Pemberitahuan keamanan kritis' : 'Critical security advisory'" icon="⚠️" position="top" />
        </div>
        <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
          <span class="text-xs font-medium text-slate-600 dark:text-slate-400">{{ isIndonesian ? 'Lencana Pintasan Tombol:' : 'Hotkey Badge:' }}</span>
          <Tooltip :text="isIndonesian ? 'Simpan perubahan' : 'Save changes'" hotkey="Ctrl+S" position="top" />
        </div>
      </div>

      <template #code>
        <CodeBlock :code="customIconCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Props Table -->
    <section class="space-y-4">
      <PropsTable :props="propsList" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { Tooltip } from '@zyvnox/vue-pack/components'
import { useSiteI18n } from '@/i18n'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable from '@/components/PropsTable.vue'

const { isIndonesian } = useSiteI18n()

const positionsCode = `<template>
  <Tooltip text="Top Tooltip" position="top" />
  <Tooltip text="Bottom Tooltip" position="bottom" />
  <Tooltip text="Left Tooltip" position="left" />
  <Tooltip text="Right Tooltip" position="right" />
</template>

<script setup lang="ts">
import { Tooltip } from '@zyvnox/vue-pack/components'
<\/script>`

const customIconCode = `<Tooltip text="Info notice" icon="ℹ️" position="right" />
<Tooltip text="Save changes" hotkey="Ctrl+S" position="top" />`

const propsList = [
  { name: 'text', type: 'string', required: true, description: 'Message displayed inside tooltip balloon' },
  { name: 'position', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Popover placement relative to trigger' },
  { name: 'icon', type: 'string', default: "'❓'", description: 'Trigger icon symbol or character' },
  { name: 'hotkey', type: 'string', description: 'Optional keyboard shortcut tag displayed in tooltip' },
  { name: 'as', type: 'string', default: "'span'", description: 'Wrapper element tag' },
]
</script>

