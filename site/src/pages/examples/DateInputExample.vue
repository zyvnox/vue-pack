<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        DateInput
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Calendar date selection component with ISO date format validation, minDate & maxDate bounds, custom tooltips, and i18n support.
      </p>
    </header>

    <!-- Demo 1: Basic Date -->
    <DemoSection title="Basic Date Selection" description="Selects a calendar date bound to an ISO format string (YYYY-MM-DD).">
      <DateInput
        v-model="basic"
        label="Event Start Date"
        placeholder="YYYY-MM-DD"
      />
      <div class="text-xs text-slate-500">
        Selected Date: <code class="font-mono font-bold">{{ basic || '(none)' }}</code>
      </div>

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Real-time Date Boundary Validation -->
    <DemoSection
      title="Real-Time Validation (MinDate & MaxDate)"
      description="Validates calendar date bounds between minDate (2026-06-01) and maxDate (2026-12-31)."
    >
      <DateInput
        v-model="validatedVal"
        label="Booking Schedule Range"
        :validate="{
          minDate: '2026-06-01' as DateOnly,
          maxDate: '2026-12-31' as DateOnly,
        }"
      />
      <div class="text-xs text-slate-500 space-y-1">
        <div>Current Date: <code class="font-mono font-bold">{{ validatedVal || '(none)' }}</code></div>
        <div class="text-slate-400 dark:text-slate-500">
          Allowed window: 2026-06-01 through 2026-12-31.
        </div>
      </div>

      <template #code>
        <CodeBlock :code="validatedCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: With Tooltip -->
    <DemoSection title="With Schema Tooltip" description="Displays date constraints and format hints via tooltip.">
      <DateInput
        v-model="withTooltip"
        label="Fiscal Year Closing Date"
        tooltip="Must fall on the final working day of the accounting period"
        tooltip-position="right"
      />

      <template #code>
        <CodeBlock :code="tooltipCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 4: Error & Disabled States -->
    <DemoSection title="External Error & Disabled States" description="Visual invalid date alerts and read-only dates.">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DateInput
          v-model="errorVal"
          label="Required Deadline"
          :error="'Deadline date must be scheduled in the future'"
        />
        <DateInput
          v-model="disabledVal"
          label="Contract Signing Date (Read-Only)"
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
import { DateInput } from '@zyvnox/vue-pack/components'
import type { DateOnly } from '@zyvnox/vue-pack'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const basic = ref<DateOnly>('2026-12-31' as DateOnly)
const validatedVal = ref<DateOnly>('2026-05-15' as DateOnly)
const withTooltip = ref<DateOnly>('2026-10-15' as DateOnly)
const errorVal = ref<DateOnly>('2020-01-01' as DateOnly)
const disabledVal = ref<DateOnly>('2026-01-01' as DateOnly)

const basicCode = `<template>
  <DateInput
    v-model="startDate"
    label="Event Start Date"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DateInput } from '@zyvnox/vue-pack/components'

const startDate = ref('2026-12-31')
<\/script>`

const validatedCode = `<DateInput
  v-model="bookingDate"
  label="Booking Schedule Range"
  :validate="{
    minDate: '2026-06-01',
    maxDate: '2026-12-31',
  }"
/>`

const tooltipCode = `<DateInput
  v-model="closingDate"
  label="Fiscal Year Closing Date"
  tooltip="Must fall on the final working day"
  tooltip-position="right"
/>`

const errorCode = `<DateInput
  v-model="deadline"
  label="Required Deadline"
  error="Deadline date must be in the future"
/>
<DateInput
  v-model="signDate"
  label="Contract Signing Date"
  disabled
/>`

const propsList: PropDef[] = [
  { name: 'modelValue', type: 'DateOnly | string', required: true, description: 'Reactive date string v-model in ISO YYYY-MM-DD format' },
  { name: 'label', type: 'string', required: true, description: 'Field label title displayed above the date picker' },
  { name: 'id', type: 'string', default: 'setUID()', description: 'Unique DOM element ID' },
  { name: 'placeholder', type: 'string', description: 'Placeholder hint text (defaults to YYYY-MM-DD)' },
  {
    name: 'validate',
    type: '{ minDate?: DateOnly, maxDate?: DateOnly }',
    description: 'Client-side calendar date boundary validator. Emits localized errors if selected date precedes minDate or exceeds maxDate.',
  },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Locks picker interactions and disables date selection' },
  { name: 'error', type: 'string | string[]', description: 'External validation error message(s) from parent form/schema' },
  { name: 'tooltip', type: 'string', description: 'Custom tooltip guidance text' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Tooltip popup orientation' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon character or emoji displayed for tooltip trigger' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Language code used for validation error notices' },
]

const eventsList: EventDef[] = [
  { name: 'update:modelValue', type: '(value: string, id: string) => void', description: 'Emitted upon date selection with ISO formatted string' },
  { name: 'push:error', type: '(errors: string[], id: string) => void', description: 'Emitted when date fails minDate/maxDate boundaries' },
  { name: 'remove:error', type: '(id: string) => void', description: 'Emitted when selected date passes all validation checks' },
]
</script>
