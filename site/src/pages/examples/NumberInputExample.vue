<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        NumberInput
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Numeric input component with type safety, integer enforcement, min/max range validation, duplicate checks, and custom tooltip support.
      </p>
    </header>

    <!-- Demo 1: Basic Usage -->
    <DemoSection title="Basic Numeric Input" description="Binds a numerical value with automatic number type casting.">
      <NumberInput
        v-model="basic"
        label="Quantity / Units"
        placeholder="Enter quantity"
      />
      <div class="text-xs text-slate-500">
        Bound Value: <code class="font-mono font-bold">{{ basic ?? '(empty)' }}</code> (Type: {{ typeof basic }})
      </div>

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Validation with Min, Max & Integer -->
    <DemoSection
      title="Real-Time Validation (Min, Max, Integer & Duplicates)"
      description="Validates numeric boundary [0 to 100], enforces integers, and rejects blacklisted duplicate numbers (e.g. 13, 42)."
    >
      <NumberInput
        v-model="validatedVal"
        label="Discount Percentage (%)"
        tooltip="Enter an integer percentage between 0 and 100 (13 and 42 are reserved)"
        tooltip-position="right"
        :validate="{
          min: 0,
          max: 100,
          integer: true,
          duplicate: [13, 42],
        }"
        placeholder="e.g. 25"
      />
      <div class="text-xs text-slate-500 space-y-1">
        <div>Current Value: <code class="font-mono font-bold">{{ validatedVal ?? '(empty)' }}</code></div>
        <div class="text-slate-400 dark:text-slate-500">
          Rules: Min 0, Max 100, Integer only, Blacklist: <code class="font-mono">[13, 42]</code>.
        </div>
      </div>

      <template #code>
        <CodeBlock :code="validatedCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: Error & Disabled States -->
    <DemoSection title="External Error & Disabled States" description="Visual feedback when numeric limits are violated or input is disabled.">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <NumberInput
          v-model="errorVal"
          label="Inventory Stock Level"
          required
          :error="'Stock quantity cannot fall below safety threshold (10)'"
        />
        <NumberInput
          v-model="disabledVal"
          label="Fixed Minimum Order (Read-Only)"
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
import { NumberInput } from '@zyvnox/vue-pack/components'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const basic = ref<number>(5)
const validatedVal = ref<number>(13)
const errorVal = ref<number>(3)
const disabledVal = ref<number>(100)

const basicCode = `<template>
  <NumberInput
    v-model="quantity"
    label="Quantity / Units"
    placeholder="Enter quantity"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NumberInput } from '@zyvnox/vue-pack/components'

const quantity = ref(5)
<\/script>`

const validatedCode = `<NumberInput
  v-model="discount"
  label="Discount Percentage (%)"
  tooltip="Enter integer between 0 and 100"
  :validate="{
    min: 0,
    max: 100,
    integer: true,
    duplicate: [13, 42],
  }"
  placeholder="e.g. 25"
/>`

const errorCode = `<NumberInput
  v-model="stock"
  label="Inventory Stock Level"
  required
  error="Stock quantity cannot fall below safety threshold (10)"
/>
<NumberInput
  v-model="minOrder"
  label="Fixed Minimum Order"
  disabled
/>`

const propsList: PropDef[] = [
  { name: 'modelValue', type: 'number | string', required: true, description: 'Reactive numeric v-model value' },
  { name: 'label', type: 'string', required: true, description: 'Input label title displayed above numeric field' },
  { name: 'id', type: 'string', default: 'setUID()', description: 'Unique DOM element ID for label and input binding' },
  { name: 'placeholder', type: 'string', description: 'Placeholder hint text (falls back to i18n default)' },
  {
    name: 'validate',
    type: '{ min?: number, max?: number, integer?: boolean, duplicate?: (string | number)[] }',
    description: 'Client-side numeric validation rules. Checks min, max, integer type, and duplicate list with localized messages.',
  },
  { name: 'required', type: 'boolean', default: 'false', description: 'Displays required asterisk indicator' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Locks numeric input and disables all interactions' },
  { name: 'error', type: 'string | string[]', description: 'External validation error message(s) from parent form/schema' },
  { name: 'tooltip', type: 'string', description: 'Custom guidance text shown when hovering help icon' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Preferred tooltip popover placement' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon character or emoji displayed for tooltip trigger' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Language code used for internal validation error messages' },
]

const eventsList: EventDef[] = [
  { name: 'update:modelValue', type: '(value: number | string, id: string) => void', description: 'Emitted upon numeric value change' },
  { name: 'push:error', type: '(errors: string[], id: string) => void', description: 'Emitted when a numeric validation rule fails' },
  { name: 'remove:error', type: '(id: string) => void', description: 'Emitted when numeric validation passes' },
]
</script>
