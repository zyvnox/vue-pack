<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        CurrencyInput
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Currency formatting input component with formatted visual display (e.g. Rupiah/Dollar), min/max threshold validation, raw numerical model binding, and i18n support.
      </p>
    </header>

    <!-- Demo 1: Basic Currency -->
    <DemoSection title="Basic Currency Input" description="Formats money values while storing clean numbers.">
      <CurrencyInput
        v-model="basic"
        label="Product Price"
        placeholder="0"
      />
      <div class="text-xs text-slate-500">
        Raw Numeric Value: <code class="font-mono font-bold">{{ basic ?? 0 }}</code>
      </div>

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Validation with Min & Max -->
    <DemoSection
      title="Real-Time Validation (Min & Max Limits)"
      description="Enforces transaction limits between min (10,000) and max (5,000,000) with automatic error emission."
    >
      <CurrencyInput
        v-model="validatedVal"
        label="Funding Contribution"
        placeholder="Min 10.000, Max 5.000.000"
        :validate="{
          min: 10000,
          max: 5000000,
        }"
      />
      <div class="text-xs text-slate-500 space-y-1">
        <div>Current Value: <code class="font-mono font-bold">{{ validatedVal ?? 0 }}</code></div>
        <div class="text-slate-400 dark:text-slate-500">
          Allowed range: 10,000 to 5,000,000.
        </div>
      </div>

      <template #code>
        <CodeBlock :code="validatedCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: With Tooltip -->
    <DemoSection title="Custom Schema Tooltip" description="Displays currency guidelines using custom tooltips.">
      <CurrencyInput
        v-model="withTooltip"
        label="Subscription Annual Fee"
        tooltip="Enter cost excluding VAT/GST"
        tooltip-position="right"
        placeholder="120000"
      />

      <template #code>
        <CodeBlock :code="tooltipCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 4: Error & Disabled -->
    <DemoSection title="External Error & Disabled States" description="Visual warnings and read-only displays for currency.">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CurrencyInput
          v-model="errorVal"
          label="Single Transfer Limit"
          required
          :error="'Amount exceeds maximum allowed single transfer limit'"
        />
        <CurrencyInput
          v-model="disabledVal"
          label="Fixed Administrative Fee (Read-Only)"
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
import { CurrencyInput } from '@zyvnox/vue-pack/components'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const basic = ref<number>(75000)
const validatedVal = ref<number>(5000)
const withTooltip = ref<number>(250000)
const errorVal = ref<number>(150000000)
const disabledVal = ref<number>(5000)

const basicCode = `<template>
  <CurrencyInput
    v-model="price"
    label="Product Price"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CurrencyInput } from '@zyvnox/vue-pack/components'

const price = ref(75000)
<\/script>`

const validatedCode = `<CurrencyInput
  v-model="amount"
  label="Funding Contribution"
  :validate="{
    min: 10000,
    max: 5000000,
  }"
/>`

const tooltipCode = `<CurrencyInput
  v-model="fee"
  label="Subscription Annual Fee"
  tooltip="Enter cost excluding VAT/GST"
  tooltip-position="right"
  placeholder="120000"
/>`

const errorCode = `<CurrencyInput
  v-model="amount"
  label="Single Transfer Limit"
  required
  error="Amount exceeds maximum allowed limit"
/>
<CurrencyInput
  v-model="adminFee"
  label="Fixed Administrative Fee"
  disabled
/>`

const propsList: PropDef[] = [
  { name: 'modelValue', type: 'number | null', required: true, description: 'Reactive numeric value v-model' },
  { name: 'label', type: 'string', required: true, description: 'Input label title displayed above the field' },
  { name: 'id', type: 'string', default: 'setUID()', description: 'Unique DOM element ID' },
  { name: 'placeholder', type: 'string', description: 'Placeholder hint text' },
  {
    name: 'validate',
    type: '{ min?: number, max?: number }',
    description: 'Client-side min and max currency value validation boundaries with localized warning messages.',
  },
  { name: 'required', type: 'boolean', default: 'false', description: 'Displays required asterisk indicator' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables user input and locking controls' },
  { name: 'error', type: 'string | string[]', description: 'External validation error message(s) from parent form/schema' },
  { name: 'tooltip', type: 'string', description: 'Custom tooltip guidance text' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Tooltip popup orientation' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon character or glyph displayed for tooltip trigger' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Language code used for currency formatting symbols and error messages' },
]

const eventsList: EventDef[] = [
  { name: 'update:modelValue', type: '(value: number | null, id: string) => void', description: 'Emitted upon currency amount changes' },
  { name: 'push:error', type: '(errors: string[], id: string) => void', description: 'Emitted when min or max validation check fails' },
  { name: 'remove:error', type: '(id: string) => void', description: 'Emitted when currency validation check passes' },
]
</script>
