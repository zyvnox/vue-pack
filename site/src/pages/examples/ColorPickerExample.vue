<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        ColorInput (Color Selector)
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Color selection component supporting both single hex color and multi-color palette array modes, palette item count validation (min/max), custom tooltips, and i18n support.
      </p>
    </header>

    <!-- Demo 1: Single Color Selection -->
    <DemoSection title="Single Color Picker" description="Picks a single HEX color code.">
      <ColorInput
        v-model="singleColor"
        label="Theme Primary Color"
        :single="true"
      />
      <div class="text-xs text-slate-500 flex items-center gap-2">
        <span>Selected Color:</span>
        <span class="inline-block w-4 h-4 rounded border border-slate-300 dark:border-slate-600" :style="{ backgroundColor: singleColor }"></span>
        <code class="font-mono font-bold">{{ singleColor }}</code>
      </div>

      <template #code>
        <CodeBlock :code="singleCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Palette Multi-Color with Min & Max Validation -->
    <DemoSection
      title="Multi-Color Palette (Min & Max Validation)"
      description="Select multiple colors to compose a theme palette with validation enforcing min 2 and max 4 colors."
    >
      <ColorInput
        v-model="paletteColors"
        label="Brand Color Palette"
        tooltip="Select between 2 and 4 brand identity colors"
        tooltip-position="right"
        :single="false"
        :validate="{
          min: 2,
          max: 4,
        }"
      />
      <div class="text-xs text-slate-500 space-y-1">
        <div>Current Palette: <code class="font-mono font-bold">{{ JSON.stringify(paletteColors) }}</code></div>
        <div class="text-slate-400 dark:text-slate-500">
          Enforces min: 2, max: 4 colors.
        </div>
      </div>

      <template #code>
        <CodeBlock :code="paletteCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: Error & Disabled States -->
    <DemoSection title="External Error & Disabled States" description="Visual invalid palette warnings and read-only color displays.">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ColorInput
          v-model="errorColor"
          label="Accent Highlight"
          :single="true"
          :error="['Selected color violates WCAG contrast guidelines against white']"
        />
        <ColorInput
          v-model="disabledColor"
          label="Locked System Neutral (Read-Only)"
          :single="true"
          disabled
        />
      </div>

      <template #code>
        <CodeBlock :code="errorCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Props Table -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">Props</h2>
      <PropsTable :props="propsList" />
    </section>

    <!-- Events Table -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">Events</h2>
      <EventsTable :events="eventsList" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ColorInput } from '@zyvnox/vue-pack/components'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const singleColor = ref('#3b82f6')
const paletteColors = ref<string[]>(['#3b82f6'])
const errorColor = ref('#ffff00')
const disabledColor = ref('#64748b')

const singleCode = `<template>
  <ColorInput
    v-model="themeColor"
    label="Theme Primary Color"
    :single="true"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ColorInput } from '@zyvnox/vue-pack/components'

const themeColor = ref('#3b82f6')
<\/script>`

const paletteCode = `<ColorInput
  v-model="palette"
  label="Brand Color Palette"
  :single="false"
  :validate="{
    min: 2,
    max: 4,
  }"
/>`

const errorCode = `<ColorInput
  v-model="accent"
  label="Accent Highlight"
  :single="true"
  :error="['Color violates WCAG contrast guidelines']"
/>
<ColorInput
  v-model="neutral"
  label="System Neutral"
  :single="true"
  disabled
/>`

const propsList: PropDef[] = [
  { name: 'modelValue', type: 'string[] | string', required: true, description: 'Reactive hex color string (single mode) or array of hex strings (palette mode)' },
  { name: 'label', type: 'string', description: 'Label title displayed above the color picker' },
  { name: 'id', type: 'string', default: 'setUID()', description: 'Unique DOM element ID' },
  { name: 'single', type: 'boolean', default: 'false', description: 'When true, selects a single hex color string instead of an array of colors' },
  { name: 'selectedColors', type: 'string[]', description: 'Initial preset palette of hex colors' },
  {
    name: 'validate',
    type: '{ min?: number, max?: number }',
    description: 'Palette count validation boundaries enforcing minimum and maximum number of selected colors in palette mode.',
  },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Locks color input and disables adding/removing colors' },
  { name: 'error', type: 'string[] | string', description: 'External validation error message(s) from parent form/schema' },
  { name: 'tooltip', type: 'string', description: 'Custom tooltip guidance text' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Tooltip popup location' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon character or emoji displayed for tooltip trigger' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Language code used for button labels and error notices' },
]

const eventsList: EventDef[] = [
  { name: 'update:modelValue', type: '(value: string[] | string, id: string) => void', description: 'Emitted upon color addition, removal, or change' },
  { name: 'push:error', type: '(errors: string[], id: string) => void', description: 'Emitted when palette violates min or max color counts' },
  { name: 'remove:error', type: '(id: string) => void', description: 'Emitted when palette count is valid' },
]
</script>
