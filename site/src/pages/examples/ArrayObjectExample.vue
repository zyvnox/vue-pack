<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        ArrayObject (Dynamic Repeater List)
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Schema-driven repeatable list engine for managing dynamic arrays of complex objects (e.g. order items, SKU variants) with built-in FormModal item editing and field-level validation.
      </p>
    </header>

    <!-- Demo 1: Basic Array Repeater with FormModal Validation -->
    <DemoSection
      title="Dynamic Row Repeater with Item Validation"
      description="Add, edit, and delete structured objects. Clicking 'Add' or 'Edit' opens a FormModal that validates each field according to the item schema before updating the array."
    >
      <div class="space-y-4">
        <ArrayObjectInput
          v-model="basicRows"
          label="Purchase Order Line Items"
          :schema="itemSchema"
        />

        <div class="text-xs text-slate-500">
          Active Rows ({{ basicRows.length }}):
          <pre class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono mt-1 overflow-x-auto">{{ JSON.stringify(basicRows, null, 2) }}</pre>
        </div>
      </div>

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: With Tooltip & Custom Icon -->
    <DemoSection
      title="With Schema Tooltip & Icon"
      description="Displays guidance beside the repeater collection label."
    >
      <ArrayObjectInput
        v-model="variantRows"
        label="Product Variations"
        tooltip="Define all SKU variants with verified colorway and stock allocation"
        tooltip-position="right"
        tooltip-icon="📦"
        :schema="variantSchema"
      />

      <template #code>
        <CodeBlock :code="tooltipCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: Disabled Repeater -->
    <DemoSection
      title="Disabled State"
      description="Read-only repeater display with row additions and edits locked."
    >
      <ArrayObjectInput
        v-model="basicRows"
        label="Locked Order Items (Read-Only)"
        :schema="itemSchema"
        disabled
      />

      <template #code>
        <CodeBlock :code="disabledCode" language="vue" />
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
import { ArrayObjectInput } from '@zyvnox/vue-pack/components'
import type { Schema } from '@zyvnox/vue-pack/type'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const basicRows = ref([
  { title: 'Server CPU Unit Xeon', quantity: 2, price: 4500000 },
  { title: 'DDR5 32GB ECC RAM', quantity: 4, price: 1200000 },
])

const variantRows = ref([
  { sku: 'SKU-RED-M', color: 'Crimson Red', size: 'M' },
])

const itemSchema: Schema = {
  title: {
    type: 'text',
    label: 'Item Name',
    required: true,
    placeholder: 'Min. 3 characters',
    validate: { minLength: 3, maxLength: 50 },
  },
  quantity: {
    type: 'number',
    label: 'Quantity',
    required: true,
    validate: { min: 1, max: 500, integer: true },
  },
  price: {
    type: 'currency',
    label: 'Unit Price',
    required: true,
    validate: { min: 1000 },
  },
}

const variantSchema: Schema = {
  sku: {
    type: 'text',
    label: 'SKU Code',
    required: true,
    validate: { minLength: 4 },
  },
  color: {
    type: 'text',
    label: 'Colorway',
    required: true,
  },
  size: {
    type: 'select',
    label: 'Size',
    options: ['S', 'M', 'L', 'XL'],
    required: true,
  },
}

const basicCode = `<template>
  <ArrayObjectInput
    v-model="items"
    label="Purchase Order Items"
    :schema="itemSchema"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrayObjectInput } from '@zyvnox/vue-pack/components'
import type { Schema } from '@zyvnox/vue-pack/type'

const items = ref([
  { title: 'Server CPU Unit', quantity: 2, price: 4500000 },
])

const itemSchema: Schema = {
  title: {
    type: 'text',
    label: 'Item Name',
    required: true,
    validate: { minLength: 3 },
  },
  quantity: {
    type: 'number',
    label: 'Quantity',
    required: true,
    validate: { min: 1, max: 500, integer: true },
  },
  price: {
    type: 'currency',
    label: 'Unit Price',
    required: true,
    validate: { min: 1000 },
  },
}
<\/script>`

const tooltipCode = `<ArrayObjectInput
  v-model="variants"
  label="Product Variations"
  tooltip="Define SKU variants with stock allocation"
  tooltip-position="right"
  tooltip-icon="📦"
  :schema="variantSchema"
/>`

const disabledCode = `<ArrayObjectInput
  v-model="items"
  label="Locked Order Items"
  :schema="itemSchema"
  disabled
/>`

const propsList: PropDef[] = [
  { name: 'modelValue', type: 'any[]', default: '[]', description: 'v-model array of row records' },
  { name: 'schema', type: 'Schema', required: true, description: 'Declarative schema for fields rendered inside each row modal' },
  { name: 'label', type: 'string', description: 'Repeater section title header' },
  { name: 'id', type: 'string', default: 'auto UID', description: 'Unique identifier for the repeater element' },
  { name: 'isUpdate', type: 'boolean', default: 'false', description: 'Whether the parent form is in update/edit mode' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Locks the list and disables add, edit, and remove buttons' },
  { name: 'error', type: 'string', description: 'Error message banner displayed below the repeater' },
  { name: 'tooltip', type: 'string', description: 'Guidance text displayed beside the label on hover' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Position of the tooltip popover' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon symbol rendered beside the label when tooltip is set' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Active language code for buttons and modal dialogs' },
]

const eventsList: EventDef[] = [
  { name: 'update:modelValue', type: '(value: any[], key: string) => void', description: 'Emitted when rows are added, edited, or removed' },
  { name: 'create:Options', type: '(key: string, options: string | number, view: string) => void', description: 'Emitted when dynamically creating options inside select fields in row modals' },
]
</script>
