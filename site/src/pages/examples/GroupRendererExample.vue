<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        GroupRenderer (Conditional Schema Branching)
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Dynamic schema dispatcher that conditionally renders different form sub-schemas based on a selection dropdown or multi-section checkboxes, complete with real-time field-level validation.
      </p>
    </header>

    <!-- Demo 1: Dropdown / Select Mode -->
    <DemoSection
      title="Conditional Schema Dispatcher (Select Mode)"
      description="Select an account type to dynamically reveal and validate specialized sub-schemas with custom pattern validation."
    >
      <div class="space-y-4">
        <GroupRendererInput
          id="account-type-group"
          :form-data="groupData"
          label="Entity Classification"
          type-design="select"
          :options="accountSchemas"
          :options-labels="{ individual: 'Individual Person', corporate: 'Corporate Entity' }"
          :errors="groupErrors"
          @push:errors="handlePushError"
          @remove:errors="handleRemoveError"
          @update:model-value="handleUpdateModelValue"
        />

        <div class="text-xs text-slate-500">
          Bound Form State:
          <pre class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono mt-1 overflow-x-auto">{{ JSON.stringify(groupData, null, 2) }}</pre>
        </div>
      </div>

      <template #code>
        <CodeBlock :code="selectCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Checkbox Mode -->
    <DemoSection
      title="Multi-Section Expansion (Checkbox Mode)"
      description="Check one or more sections to activate and validate distinct sub-schemas in parallel."
    >
      <div class="space-y-4">
        <GroupRendererInput
          id="extensions-group"
          :form-data="extensionData"
          label="Optional Service Add-ons"
          type-design="cekbox"
          :options="addonSchemas"
          :options-labels="{ billing: 'Tax Invoice Details', logistics: 'Logistics Warehouse' }"
          :errors="groupErrors"
          @push:errors="handlePushError"
          @remove:errors="handleRemoveError"
          @update:model-value="handleUpdateExtensionValue"
        />

        <div class="text-xs text-slate-500">
          Bound Extension State:
          <pre class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono mt-1 overflow-x-auto">{{ JSON.stringify(extensionData, null, 2) }}</pre>
        </div>
      </div>

      <template #code>
        <CodeBlock :code="checkboxCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: With Tooltip & Disabled State -->
    <DemoSection
      title="With Schema Tooltip"
      description="Displays guidance beside the section selector label."
    >
      <GroupRendererInput
        id="compliance-group"
        :form-data="groupData"
        label="Compliance Regulatory Protocol"
        tooltip="Select your legal regulatory framework for automated ISO/SOC2 audits"
        tooltip-position="right"
        tooltip-icon="📋"
        type-design="select"
        :options="accountSchemas"
        :errors="{}"
      />

      <template #code>
        <CodeBlock :code="tooltipCode" language="vue" />
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
import { GroupRendererInput } from '@zyvnox/vue-pack/components'
import type { Schema, Errors } from '@zyvnox/vue-pack/type'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const groupData = reactive<Record<string, any>>({
  nik: '3578012345678901',
  fullName: 'Budi Santoso',
  companyName: 'PT Zyvnox Teknologi Nusantara',
  taxId: '01.234.567.8-012.000',
})

const extensionData = reactive<Record<string, any>>({
  vatNumber: 'ID-991204',
  warehouseCode: 'WH-SUB-01',
})

const groupErrors = reactive<Errors>({})

const handlePushError = (msg: string | string[], key: string) => {
  groupErrors[key] = msg
}

const handleRemoveError = (key: string) => {
  delete groupErrors[key]
}

const handleUpdateModelValue = (val: any, key: string) => {
  groupData[key] = val
}

const handleUpdateExtensionValue = (val: any, key: string) => {
  extensionData[key] = val
}

const accountSchemas: Record<string, Schema> = {
  individual: {
    fullName: {
      type: 'text',
      label: 'Full Name',
      required: true,
      placeholder: 'e.g. Budi Santoso',
      validate: { minLength: 3 },
    },
    nik: {
      type: 'text',
      label: 'NIK (16 Digits)',
      required: true,
      placeholder: '16 digit national ID',
      validate: { pattern: '^\\d{16}$' },
    },
  },
  corporate: {
    companyName: {
      type: 'text',
      label: 'Registered Company Name',
      required: true,
      placeholder: 'PT Zyvnox Teknologi Nusantara',
      validate: { minLength: 3 },
    },
    taxId: {
      type: 'text',
      label: 'Tax Identification Number (NPWP)',
      required: true,
      placeholder: 'e.g. 01.234.567.8-012.000',
    },
  },
}

const addonSchemas: Record<string, Schema> = {
  billing: {
    vatNumber: {
      type: 'text',
      label: 'Tax / VAT Number',
      required: true,
      placeholder: 'e.g. ID-991204',
      validate: { minLength: 4 },
    },
  },
  logistics: {
    warehouseCode: {
      type: 'text',
      label: 'Warehouse Node Code',
      required: true,
      placeholder: 'e.g. WH-SUB-01',
      validate: { minLength: 3 },
    },
  },
}

const selectCode = `<template>
  <GroupRendererInput
    id="account-type-group"
    :form-data="formData"
    label="Entity Classification"
    type-design="select"
    :options="accountSchemas"
    :options-labels="{ individual: 'Individual Person', corporate: 'Corporate Entity' }"
    :errors="errors"
  />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { GroupRendererInput } from '@zyvnox/vue-pack/components'
import type { Schema } from '@zyvnox/vue-pack/type'

const formData = reactive({ fullName: '', nik: '' })
const errors = reactive({})

const accountSchemas: Record<string, Schema> = {
  individual: {
    fullName: { type: 'text', label: 'Full Name', required: true, validate: { minLength: 3 } },
    nik: { type: 'text', label: 'NIK (16 Digits)', required: true, validate: { pattern: '^\\\\d{16}$' } },
  },
  corporate: {
    companyName: { type: 'text', label: 'Company Name', required: true },
    taxId: { type: 'text', label: 'Tax ID', required: true },
  },
}
<\/script>`

const checkboxCode = `<GroupRendererInput
  id="extensions-group"
  :form-data="extensionData"
  label="Optional Service Add-ons"
  type-design="cekbox"
  :options="addonSchemas"
  :errors="errors"
/>`

const tooltipCode = `<GroupRendererInput
  id="compliance-group"
  :form-data="formData"
  label="Compliance Regulatory Protocol"
  tooltip="Select legal regulatory framework for automated audits"
  tooltip-position="right"
  tooltip-icon="📋"
  type-design="select"
  :options="accountSchemas"
  :errors="{}"
/>`

const propsList: PropDef[] = [
  { name: 'id', type: 'string', required: true, description: 'Unique identifier for the group renderer component' },
  { name: 'formData', type: 'Record<string, any>', required: true, description: 'Reactive form data dictionary bound to active sub-schema fields' },
  { name: 'typeDesign', type: "'select' | 'dropdown' | 'cekbox'", required: true, description: 'Display style: single select dropdown or multiple checkbox sections' },
  { name: 'options', type: 'Record<string, Schema>', required: true, description: 'Dictionary of selectable schema configurations mapped by option keys' },
  { name: 'errors', type: 'Errors', required: true, description: 'Reactive error dictionary for tracking child field validation errors' },
  { name: 'label', type: 'string', description: 'Group label rendered above the selector' },
  { name: 'optionsLabels', type: 'Record<string, string>', description: 'Display labels mapping option keys to human-readable names' },
  { name: 'defaultValue', type: 'string | [string, string]', description: 'Default pre-selected option key(s)' },
  { name: 'isUpdate', type: 'boolean', default: 'false', description: 'Whether the parent form is in edit/update mode' },
  { name: 'required', type: 'boolean', default: 'false', description: 'Requires at least one option to be selected' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables option selection and locks child fields' },
  { name: 'error', type: 'string', description: 'Group-level error message banner' },
  { name: 'tooltip', type: 'string', description: 'Guidance text displayed beside the label on hover' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Position of the tooltip popover' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon symbol rendered beside the label when tooltip is set' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Active language code' },
]

const eventsList: EventDef[] = [
  { name: 'update:model-value', type: '(value: any, key: string) => void', description: 'Emitted when a child field within an active schema updates' },
  { name: 'push:errors', type: '(message: string | string[], key: string) => void', description: 'Emitted when a child input fails validation' },
  { name: 'remove:errors', type: '(key: string) => void', description: 'Emitted when a child input error is resolved' },
  { name: 'selected-option-change', type: '(val: string | null, key: string) => void', description: 'Emitted when single dropdown option changes' },
  { name: 'multi-selected-change', type: '(val: string[], key: string) => void', description: 'Emitted when checkbox multi-selection changes' },
  { name: 'create:Options', type: '(key: string, options: string | number, view: string) => void', description: 'Emitted when creating options inside child select inputs' },
]
</script>
