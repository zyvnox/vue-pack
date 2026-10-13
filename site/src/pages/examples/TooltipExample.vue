<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        Tooltip
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Reusable floating tooltip trigger component supporting multiple placements (top, bottom, left, right), custom icons, and hotkey hints.
      </p>
    </header>

    <!-- Demo 1: Placement Positions -->
    <DemoSection title="Tooltip Placements" description="Hover over any of the four trigger icons to test positioning.">
      <div class="flex flex-wrap items-center gap-8 py-4">
        <div class="flex items-center gap-2">
          <span class="text-xs">Top:</span>
          <Tooltip text="Tooltip positioned on top" position="top" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs">Bottom:</span>
          <Tooltip text="Tooltip positioned below" position="bottom" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs">Left:</span>
          <Tooltip text="Tooltip positioned on the left" position="left" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs">Right:</span>
          <Tooltip text="Tooltip positioned on the right" position="right" />
        </div>
      </div>

      <template #code>
        <CodeBlock :code="positionsCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Custom Icons & Hotkeys -->
    <DemoSection title="Custom Trigger Icons & Hotkeys" description="Provide custom glyphs or keyboard shortcut labels.">
      <div class="flex items-center gap-8 py-2">
        <div class="flex items-center gap-2">
          <span class="text-xs">Info Glyph (ℹ️):</span>
          <Tooltip text="Detailed information note" icon="ℹ️" position="right" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs">Warning Glyph (⚠️):</span>
          <Tooltip text="Critical security advisory" icon="⚠️" position="right" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs">Hotkey Badge:</span>
          <Tooltip text="Save changes" hotkey="Ctrl+S" position="top" />
        </div>
      </div>

      <template #code>
        <CodeBlock :code="customIconCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Props Table -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">Props</h2>
      <PropsTable :props="propsList" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { Tooltip } from '@zyvnox/vue-pack/components'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable from '@/components/PropsTable.vue'

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

