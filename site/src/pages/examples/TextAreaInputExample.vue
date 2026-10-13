<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        TextAreaInput
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Multi-line text area component with reactive auto-expand, minLength & maxLength validation guards, custom tooltips, and i18n support.
      </p>
    </header>

    <!-- Demo 1: Basic Usage -->
    <DemoSection title="Basic Text Area" description="Standard multi-line text input with reactive v-model binding.">
      <TextAreaInput
        v-model="basic"
        label="Project Overview"
        placeholder="Describe project deliverables..."
      />
      <div class="text-xs text-slate-500">
        Character Count: <code class="font-mono font-bold">{{ basic.length }} characters</code>
      </div>

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Real-time Min & Max Length Validation -->
    <DemoSection
      title="Real-Time Validation (Min & Max Length)"
      description="Validates that summary has at least 20 characters and at most 200 characters with live localized feedback."
    >
      <TextAreaInput
        v-model="validatedVal"
        label="Executive Summary"
        placeholder="Enter at least 20 characters..."
        :validate="{
          minLength: 20,
          maxLength: 200,
        }"
      />
      <div class="text-xs text-slate-500 space-y-1">
        <div>Current Length: <code class="font-mono font-bold">{{ validatedVal.length }} / 200 chars</code></div>
        <div class="text-slate-400 dark:text-slate-500">
          Enforces minLength: 20, maxLength: 200.
        </div>
      </div>

      <template #code>
        <CodeBlock :code="validatedCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: With Tooltip -->
    <DemoSection title="With Schema Tooltip" description="Displays detailed submission guidance via tooltip.">
      <TextAreaInput
        v-model="withTooltip"
        label="Technical Bug Reproduction Steps"
        tooltip="Provide step-by-step numbers, expected vs actual behavior, and environment details"
        tooltip-position="right"
        placeholder="1. Navigate to /dashboard..."
      />

      <template #code>
        <CodeBlock :code="tooltipCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 4: Error & Disabled States -->
    <DemoSection title="External Error & Disabled States" description="Visual invalid review alerts and read-only text areas.">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextAreaInput
          v-model="errorVal"
          label="Internal Notes"
          :error="'Notes must not contain sensitive internal access credentials'"
        />
        <TextAreaInput
          v-model="disabledVal"
          label="Archived Compliance Log (Read-Only)"
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
import { TextAreaInput } from '@zyvnox/vue-pack/components'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const basic = ref('')
const validatedVal = ref('Too short')
const withTooltip = ref('')
const errorVal = ref('Secret key: AKIAIOSFODNN7EXAMPLE')
const disabledVal = ref('System log snapshot: 2026-01-01 00:00 UTC - Normal operations.')

const basicCode = `<template>
  <TextAreaInput
    v-model="overview"
    label="Project Overview"
    placeholder="Describe project deliverables..."
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TextAreaInput } from '@zyvnox/vue-pack/components'

const overview = ref('')
<\/script>`

const validatedCode = `<TextAreaInput
  v-model="summary"
  label="Executive Summary"
  placeholder="Enter at least 20 characters..."
  :validate="{
    minLength: 20,
    maxLength: 200,
  }"
/>`

const tooltipCode = `<TextAreaInput
  v-model="bugSteps"
  label="Technical Bug Reproduction Steps"
  tooltip="Provide step-by-step numbers"
  tooltip-position="right"
/>`

const errorCode = `<TextAreaInput
  v-model="notes"
  label="Internal Notes"
  error="Notes must not contain credentials"
/>
<TextAreaInput
  v-model="archived"
  label="Archived Log"
  disabled
/>`

const propsList: PropDef[] = [
  { name: 'modelValue', type: 'string', required: true, description: 'Reactive multi-line string v-model' },
  { name: 'label', type: 'string', required: true, description: 'Field label title' },
  { name: 'id', type: 'string', default: 'setUID()', description: 'Unique DOM element ID' },
  { name: 'placeholder', type: 'string', description: 'Placeholder hint text (defaults to i18n label)' },
  {
    name: 'validate',
    type: '{ minLength?: number, maxLength?: number }',
    description: 'Client-side character length bounds. Emits localized validation errors if text is too short or exceeds maxLength.',
  },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Locks text area' },
  { name: 'error', type: 'string | string[]', description: 'External validation error message(s) from parent form/schema' },
  { name: 'tooltip', type: 'string', description: 'Custom tooltip guidance text' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Tooltip popup location' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon character or emoji displayed for tooltip trigger' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Language code' },
]

const eventsList: EventDef[] = [
  { name: 'update:modelValue', type: '(value: string, id: string) => void', description: 'Emitted upon typing' },
  { name: 'push:error', type: '(errors: string[], id: string) => void', description: 'Emitted when text violates minLength or maxLength' },
  { name: 'remove:error', type: '(id: string) => void', description: 'Emitted when text satisfies all validation rules' },
]
</script>
