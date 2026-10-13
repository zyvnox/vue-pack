<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        DateTimeInput
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Combined date and time timestamp selector supporting ISO-8601 formatting, UTC / local-offset output, minDateTime & maxDateTime boundary checks, and tooltip guidance.
      </p>
    </header>

    <!-- Demo 1: Basic DateTime -->
    <DemoSection title="Basic Date & Time Selection" description="Combined picker outputting timestamp formatted values.">
      <DateTimeInput
        v-model="basic"
        label="Webinar Scheduled Time"
      />
      <div class="text-xs text-slate-500">
        Selected Timestamp: <code class="font-mono font-bold">{{ basic || '(none)' }}</code>
      </div>

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Real-time Min & Max Timestamp Validation -->
    <DemoSection
      title="Real-Time Validation (MinDateTime & MaxDateTime)"
      description="Validates that scheduled downtime falls within allowed window (2026-11-01T00:00 to 2026-11-30T23:59)."
    >
      <DateTimeInput
        v-model="validatedVal"
        label="Scheduled Maintenance Window"
        output-format="utc"
        :validate="{
          minDateTime: '2026-11-01T00:00:00Z' as any,
          maxDateTime: '2026-11-30T23:59:59Z' as any,
        }"
      />
      <div class="text-xs text-slate-500 space-y-1">
        <div>Current Timestamp (UTC output): <code class="font-mono font-bold">{{ validatedVal || '(none)' }}</code></div>
        <div class="text-slate-400 dark:text-slate-500">
          Allowed range: Nov 1, 2026 00:00 through Nov 30, 2026 23:59.
        </div>
      </div>

      <template #code>
        <CodeBlock :code="validatedCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: With Tooltip -->
    <DemoSection title="With Schema Tooltip" description="Displays timezone and timestamp guidance via tooltip.">
      <DateTimeInput
        v-model="withTooltip"
        label="System Maintenance Downtime"
        tooltip="Select beginning of maintenance window in local timezone"
        tooltip-position="right"
      />

      <template #code>
        <CodeBlock :code="tooltipCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 4: Error & Disabled States -->
    <DemoSection title="External Error & Disabled States" description="Visual invalid timestamp alerts and locked records.">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DateTimeInput
          v-model="errorVal"
          label="Auction Closing Moment"
          :error="'Closing time must be at least 24 hours in advance'"
        />
        <DateTimeInput
          v-model="disabledVal"
          label="Server Creation Timestamp (Read-Only)"
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
import { DateTimeInput } from '@zyvnox/vue-pack/components'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const basic = ref('2026-10-31T18:00')
const validatedVal = ref('2026-10-25T14:30')
const withTooltip = ref('2026-11-01T02:00')
const errorVal = ref('2026-10-11T13:00')
const disabledVal = ref('2026-01-01T00:00')

const basicCode = `<template>
  <DateTimeInput
    v-model="timestamp"
    label="Webinar Scheduled Time"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DateTimeInput } from '@zyvnox/vue-pack/components'

const timestamp = ref('2026-10-31T18:00')
<\/script>`

const validatedCode = `<DateTimeInput
  v-model="maintenanceWindow"
  label="Scheduled Maintenance Window"
  output-format="utc"
  :validate="{
    minDateTime: '2026-11-01T00:00',
    maxDateTime: '2026-11-30T23:59',
  }"
/>`

const tooltipCode = `<DateTimeInput
  v-model="maintenance"
  label="System Maintenance Downtime"
  tooltip="Select beginning of maintenance window"
  tooltip-position="right"
/>`

const errorCode = `<DateTimeInput
  v-model="closingTime"
  label="Auction Closing Moment"
  error="Closing time must be at least 24 hours in advance"
/>
<DateTimeInput
  v-model="serverCreated"
  label="Server Creation Timestamp"
  disabled
/>`

const propsList: PropDef[] = [
  { name: 'modelValue', type: 'DateTimeString | string', required: true, description: 'Reactive datetime string v-model (ISO format)' },
  { name: 'label', type: 'string', required: true, description: 'Field label title displayed above picker' },
  { name: 'id', type: 'string', default: 'setUID()', description: 'Unique DOM element ID' },
  { name: 'placeholder', type: 'string', description: 'Placeholder hint' },
  {
    name: 'outputFormat',
    type: "'local-offset' | 'utc'",
    default: "'local-offset'",
    description: 'Output string formatting mode: "local-offset" (preserves local timezone) or "utc" (converts to UTC with trailing Z).',
  },
  {
    name: 'validate',
    type: '{ minDateTime?: DateTimeString, maxDateTime?: DateTimeString }',
    description: 'Client-side boundary validation for timestamp range.',
  },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Locks picker interactions' },
  { name: 'error', type: 'string | string[]', description: 'External validation error message(s) from parent form/schema' },
  { name: 'tooltip', type: 'string', description: 'Custom tooltip guidance text' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Tooltip popup location' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon character or emoji displayed for tooltip trigger' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Language code used for validation error notices' },
]

const eventsList: EventDef[] = [
  { name: 'update:modelValue', type: '(value: string, id: string) => void', description: 'Emitted upon datetime change with formatted timestamp' },
  { name: 'push:error', type: '(errors: string[], id: string) => void', description: 'Emitted when timestamp violates min/max boundaries' },
  { name: 'remove:error', type: '(id: string) => void', description: 'Emitted when selected timestamp passes validation' },
]
</script>
