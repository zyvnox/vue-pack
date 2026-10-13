<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        TimeInput
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Time selection component with 24-hour formatting, minTime & maxTime boundary validation, tooltip support, and i18n support.
      </p>
    </header>

    <!-- Demo 1: Basic Time -->
    <DemoSection title="Basic Time Selection" description="Selects hours and minutes formatted as HH:mm.">
      <TimeInput
        v-model="basic"
        label="Shift Start Time"
      />
      <div class="text-xs text-slate-500">
        Selected Time: <code class="font-mono font-bold">{{ basic || '(none)' }}</code>
      </div>

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Real-time Time Window Validation -->
    <DemoSection
      title="Real-Time Validation (MinTime & MaxTime)"
      description="Validates that the selected time is within standard business hours (08:00 to 17:00)."
    >
      <TimeInput
        v-model="validatedVal"
        label="Delivery Window Schedule"
        :validate="{
          minTime: '08:00' as TimeOnly,
          maxTime: '17:00' as TimeOnly,
        }"
      />
      <div class="text-xs text-slate-500 space-y-1">
        <div>Current Time: <code class="font-mono font-bold">{{ validatedVal || '(none)' }}</code></div>
        <div class="text-slate-400 dark:text-slate-500">
          Allowed operating window: 08:00 through 17:00.
        </div>
      </div>

      <template #code>
        <CodeBlock :code="validatedCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: With Tooltip -->
    <DemoSection title="With Schema Tooltip" description="Displays operating hours via tooltip.">
      <TimeInput
        v-model="withTooltip"
        label="Customer Service Hotline Opens"
        tooltip="Standard operating business hours are 09:00 to 17:00 WIB"
        tooltip-position="right"
      />

      <template #code>
        <CodeBlock :code="tooltipCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 4: Error & Disabled States -->
    <DemoSection title="External Error & Disabled States" description="Visual invalid time alerts and locked clock inputs.">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TimeInput
          v-model="errorVal"
          label="Departure Schedule"
          :error="'Departure cannot be scheduled during maintenance window'"
        />
        <TimeInput
          v-model="disabledVal"
          label="Standard Check-in Time (Read-Only)"
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
import { TimeInput } from '@zyvnox/vue-pack/components'
import type { TimeOnly } from '@zyvnox/vue-pack'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const basic = ref<TimeOnly>('09:00' as TimeOnly)
const validatedVal = ref<TimeOnly>('06:30' as TimeOnly)
const withTooltip = ref<TimeOnly>('08:30' as TimeOnly)
const errorVal = ref<TimeOnly>('03:00' as TimeOnly)
const disabledVal = ref<TimeOnly>('14:00' as TimeOnly)

const basicCode = `<template>
  <TimeInput
    v-model="startTime"
    label="Shift Start Time"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimeInput } from '@zyvnox/vue-pack/components'

const startTime = ref('09:00')
<\/script>`

const validatedCode = `<TimeInput
  v-model="deliveryTime"
  label="Delivery Window Schedule"
  :validate="{
    minTime: '08:00',
    maxTime: '17:00',
  }"
/>`

const tooltipCode = `<TimeInput
  v-model="openingTime"
  label="Hotline Opens"
  tooltip="Standard operating business hours are 09:00 to 17:00"
  tooltip-position="right"
/>`

const errorCode = `<TimeInput
  v-model="departure"
  label="Departure Schedule"
  error="Departure cannot fall during maintenance"
/>
<TimeInput
  v-model="checkIn"
  label="Standard Check-in Time"
  disabled
/>`

const propsList: PropDef[] = [
  { name: 'modelValue', type: 'TimeOnly | string', required: true, description: 'Reactive time string v-model (HH:mm format)' },
  { name: 'label', type: 'string', required: true, description: 'Field label title displayed above the time picker' },
  { name: 'id', type: 'string', default: 'setUID()', description: 'Unique DOM element ID' },
  { name: 'placeholder', type: 'string', description: 'Placeholder hint text (defaults to HH:mm)' },
  {
    name: 'validate',
    type: '{ minTime?: TimeOnly, maxTime?: TimeOnly }',
    description: 'Client-side time boundary constraints. Emits localized errors if selected time is before minTime or after maxTime.',
  },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled time picker state' },
  { name: 'error', type: 'string | string[]', description: 'External validation error message(s) from parent form/schema' },
  { name: 'tooltip', type: 'string', description: 'Custom tooltip guidance text' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Tooltip popup location' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon character or emoji displayed for tooltip trigger' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Language code used for validation error notices' },
]

const eventsList: EventDef[] = [
  { name: 'update:modelValue', type: '(value: string, id: string) => void', description: 'Emitted upon time change' },
  { name: 'push:error', type: '(errors: string[], id: string) => void', description: 'Emitted when time violates minTime/maxTime rules' },
  { name: 'remove:error', type: '(id: string) => void', description: 'Emitted when selected time passes validation' },
]
</script>
