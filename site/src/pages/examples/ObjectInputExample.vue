<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        ObjectInput (Nested Schema Object)
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Sub-schema form container that renders a structured nested object with real-time field validation, schema binding, and custom tooltips.
      </p>
    </header>

    <!-- Demo 1: Basic Object Group with Real-time Field Validation -->
    <DemoSection
      title="Nested Object with Live Field Validation"
      description="Renders child fields defined in a sub-schema with real-time input validation (minLength, pattern, and required constraints)."
    >
      <div class="space-y-4">
        <ObjectInput
          :form-data="addressData"
          label="Primary Billing Address"
          :schema="addressSchema"
          :errors="objectErrors"
          @push:errors="handlePushError"
          @remove:errors="handleRemoveError"
          @update:model-value="handleUpdateModelValue"
        />

        <div class="flex flex-wrap items-center gap-3 text-xs">
          <span class="font-semibold text-slate-600 dark:text-slate-400">Validation Status:</span>
          <span
            v-if="Object.keys(objectErrors).length === 0"
            class="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-medium"
          >
            ✓ All nested fields valid
          </span>
          <span
            v-else
            class="px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 font-medium"
          >
            ✕ Errors: {{ Object.keys(objectErrors).join(', ') }}
          </span>
        </div>

        <div class="text-xs text-slate-500">
          Bound Object Data:
          <pre class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono mt-1 overflow-x-auto">{{ JSON.stringify(addressData, null, 2) }}</pre>
        </div>
      </div>

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: With Tooltip & Custom Icon -->
    <DemoSection
      title="With Schema Tooltip & Icon"
      description="Displays contextual guidance beside the group header label."
    >
      <ObjectInput
        :form-data="metadataData"
        label="Cloud Infrastructure Metadata"
        tooltip="Enter AWS VPC network segmentation details"
        tooltip-position="right"
        tooltip-icon="🌐"
        :schema="metadataSchema"
        :errors="{}"
      />

      <template #code>
        <CodeBlock :code="tooltipCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: Disabled Nested Form -->
    <DemoSection
      title="Disabled Nested Object"
      description="All child fields within the nested group are locked in read-only mode."
    >
      <ObjectInput
        :form-data="addressData"
        label="Archived Address (Read-Only)"
        :schema="addressSchema"
        :errors="{}"
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
import { reactive } from 'vue'
import { ObjectInput } from '@zyvnox/vue-pack/components'
import type { Schema, Errors } from '@zyvnox/vue-pack/type'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const addressData = reactive<Record<string, any>>({
  street: '123 Enterprise Blvd',
  city: 'Surabaya',
  postalCode: '60175',
})

const objectErrors = reactive<Errors>({})

const handlePushError = (msg: string | string[], key: string) => {
  objectErrors[key] = msg
}

const handleRemoveError = (key: string) => {
  delete objectErrors[key]
}

const handleUpdateModelValue = (val: any, key: string) => {
  const parts = key.split('.')
  const fieldKey = parts[parts.length - 1]
  addressData[fieldKey] = val
}

const metadataData = reactive<Record<string, any>>({
  vpcId: 'vpc-0a8b9c',
  subnet: '10.0.1.0/24',
})

const addressSchema: Schema = {
  street: {
    type: 'text',
    label: 'Street Address',
    required: true,
    placeholder: 'Min. 5 characters',
    validate: { minLength: 5, maxLength: 60 },
  },
  city: {
    type: 'text',
    label: 'City',
    required: true,
    placeholder: 'e.g. Surabaya',
  },
  postalCode: {
    type: 'text',
    label: 'Postal Code (5 Digits)',
    required: true,
    placeholder: '60175',
    validate: { pattern: '^\\d{5}$' },
  },
}

const metadataSchema: Schema = {
  vpcId: { type: 'text', label: 'VPC ID', required: true },
  subnet: { type: 'text', label: 'Subnet CIDR', required: true },
}

const basicCode = `<template>
  <ObjectInput
    :form-data="address"
    label="Billing Address"
    :schema="addressSchema"
    :errors="errors"
    @push:errors="(msg, key) => errors[key] = msg"
    @remove:errors="(key) => delete errors[key]"
  />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { ObjectInput } from '@zyvnox/vue-pack/components'
import type { Schema, Errors } from '@zyvnox/vue-pack/type'

const address = reactive({
  street: '123 Enterprise Blvd',
  city: 'Surabaya',
  postalCode: '60175',
})
const errors = reactive<Errors>({})

const addressSchema: Schema = {
  street: {
    type: 'text',
    label: 'Street Address',
    required: true,
    validate: { minLength: 5, maxLength: 60 },
  },
  city: {
    type: 'text',
    label: 'City',
    required: true,
  },
  postalCode: {
    type: 'text',
    label: 'Postal Code',
    required: true,
    validate: { pattern: '^\\\\d{5}$' },
  },
}
<\/script>`

const tooltipCode = `<ObjectInput
  :form-data="metadata"
  label="Cloud Infrastructure Metadata"
  tooltip="Enter AWS VPC network segmentation details"
  tooltip-position="right"
  tooltip-icon="🌐"
  :schema="metadataSchema"
  :errors="{}"
/>`

const disabledCode = `<ObjectInput
  :form-data="address"
  label="Archived Address (Read-Only)"
  :schema="addressSchema"
  :errors="{}"
  disabled
/>`

const propsList: PropDef[] = [
  { name: 'formData', type: 'Record<string, any>', required: true, description: 'Reactive state object storing bound values for the nested fields' },
  { name: 'schema', type: 'Schema', required: true, description: 'Sub-schema dictionary defining child field types, labels, and validation rules' },
  { name: 'errors', type: 'Errors', required: true, description: 'Reactive error dictionary mapping field paths to validation error messages' },
  { name: 'id', type: 'string', default: 'auto UID', description: 'Unique identifier for the object container' },
  { name: 'label', type: 'string', description: 'Group title displayed above the nested container' },
  { name: 'isUpdate', type: 'boolean', default: 'false', description: 'Whether the parent form is currently in edit/update mode' },
  { name: 'required', type: 'boolean', default: 'false', description: 'Marks the entire sub-object block as mandatory' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Locks all nested fields in read-only mode' },
  { name: 'tooltip', type: 'string', description: 'Custom guidance text displayed on hover beside the group label' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Placement of the tooltip popover' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon symbol rendered beside the label when tooltip is set' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Active language code for child field messages' },
]

const eventsList: EventDef[] = [
  { name: 'update:model-value', type: '(val: any, key: string) => void', description: 'Emitted when any nested child input value changes' },
  { name: 'push:errors', type: '(msg: string | string[], key: string) => void', description: 'Emitted when a child field fails validation' },
  { name: 'remove:errors', type: '(key: string) => void', description: 'Emitted when a child field passes validation and error is cleared' },
  { name: 'selected-option-change', type: '(val: string | null, key: string) => void', description: 'Emitted when a nested select/dropdown changes single selection' },
  { name: 'multi-selected-change', type: '(val: string[], key: string) => void', description: 'Emitted when a nested multi-select changes selection' },
  { name: 'create:Options', type: '(key: string, options: string | number, view: string) => void', description: 'Emitted when dynamically creating a new option within a nested select' },
]
</script>
