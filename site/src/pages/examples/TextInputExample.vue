<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        TextInput
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Single-line text input component with custom tooltip support, dark-mode UnoCSS prefix styling, client-side duplicate & regex validation, and i18n support.
      </p>
    </header>

    <!-- Demo 1: Basic Usage -->
    <DemoSection title="Basic Usage" description="Standard text input with reactive v-model binding.">
      <TextInput
        v-model="basic"
        label="Full Name"
        placeholder="e.g. Sarah Connor"
      />
      <div class="text-xs text-slate-500">
        Bound Value: <code class="font-mono font-bold">{{ basic || '(empty)' }}</code>
      </div>

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Real-time Client Validation -->
    <DemoSection
      title="Real-Time Validation (Pattern, Length & Duplicates)"
      description="Validates min/max length, regex pattern (alphanumeric only), and blacklisted duplicate values with localized error alerts."
    >
      <TextInput
        v-model="validatedVal"
        label="Unique Username"
        placeholder="Enter 3-12 alphanumeric characters"
        :validate="{
          minLength: 3,
          maxLength: 12,
          pattern: '^[a-zA-Z0-9_]+$',
          duplicate: ['admin', 'root', 'superuser', 'owner'],
        }"
      />
      <div class="text-xs text-slate-500 space-y-1">
        <div>Value: <code class="font-mono font-bold">{{ validatedVal || '(empty)' }}</code></div>
        <div class="text-slate-400 dark:text-slate-500">
          Rules: Min 3, Max 12 chars, regex <code class="font-mono">^[a-zA-Z0-9_]+$</code>, forbidden: <code class="font-mono">['admin', 'root', 'superuser', 'owner']</code>.
        </div>
      </div>

      <template #code>
        <CodeBlock :code="validatedCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: With Custom Tooltip -->
    <DemoSection title="Custom Schema Tooltip" description="Displays a help icon with interactive tooltip text beside the label.">
      <TextInput
        v-model="withTooltip"
        label="National Identity / Passport ID"
        tooltip="Enter 16-digit ID number as printed on your national identity card"
        tooltip-position="right"
        placeholder="320102..."
      />
      <div class="text-xs text-slate-500">
        Hover over the <span class="font-semibold">❓</span> icon above to reveal the tooltip.
      </div>

      <template #code>
        <CodeBlock :code="tooltipCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 4: Manual Error & Disabled States -->
    <DemoSection title="Manual Error & Disabled States" description="Supports parent schema error strings and disabled states.">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextInput
          v-model="withError"
          label="Server Hostname"
          placeholder="primary.node.local"
          required
          :error="'Host unreachable on specified port'"
        />
        <TextInput
          v-model="disabledVal"
          label="System Node UUID (Read-Only)"
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
import { TextInput } from '@zyvnox/vue-pack/components'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const basic = ref('')
const validatedVal = ref('admin')
const withTooltip = ref('')
const withError = ref('db-node-01')
const disabledVal = ref('UUID-7718-4421-B')

const basicCode = `<template>
  <TextInput
    v-model="name"
    label="Full Name"
    placeholder="e.g. Sarah Connor"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TextInput } from '@zyvnox/vue-pack/components'

const name = ref('')
<\/script>`

const validatedCode = `<TextInput
  v-model="username"
  label="Unique Username"
  placeholder="Enter 3-12 alphanumeric characters"
  :validate="{
    minLength: 3,
    maxLength: 12,
    pattern: '^[a-zA-Z0-9_]+$',
    duplicate: ['admin', 'root', 'superuser', 'owner'],
  }"
/>`

const tooltipCode = `<TextInput
  v-model="idNumber"
  label="National Identity / Passport ID"
  tooltip="Enter 16-digit ID number as printed on your card"
  tooltip-position="right"
  placeholder="320102..."
/>`

const errorCode = `<TextInput
  v-model="hostname"
  label="Server Hostname"
  required
  error="Host unreachable on specified port"
/>
<TextInput
  v-model="nodeUuid"
  label="System Node UUID"
  disabled
/>`

const propsList: PropDef[] = [
  { name: 'modelValue', type: 'string | number', required: true, description: 'Reactive v-model binding value' },
  { name: 'label', type: 'string', required: true, description: 'Label title displayed above the input field' },
  { name: 'id', type: 'string', default: 'setUID()', description: 'Unique DOM element ID for input and label pairing' },
  { name: 'placeholder', type: 'string', description: 'Placeholder hint text (falls back to i18n dictionary default)' },
  {
    name: 'validate',
    type: '{ minLength?: number, maxLength?: number, pattern?: string, duplicate?: (string | number)[] }',
    description: 'Client-side validation rules. Automatically checks min/max length, regex pattern, and duplicate list with localized error messages.',
  },
  { name: 'required', type: 'boolean', default: 'false', description: 'Displays required asterisk indicator' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables user input interactions' },
  { name: 'error', type: 'string | string[]', description: 'External validation error message(s) from parent form/schema' },
  { name: 'tooltip', type: 'string', description: 'Custom tooltip text shown when hovering the help icon' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Preferred tooltip popover placement' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon character or glyph displayed for the tooltip trigger' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Language code used for internal validation error messages' },
]

const eventsList: EventDef[] = [
  { name: 'update:modelValue', type: '(value: string | number, id: string) => void', description: 'Emitted upon input text changes with field ID' },
  { name: 'push:error', type: '(errors: string[], id: string) => void', description: 'Emitted when a validation rule check fails with error messages array' },
  { name: 'remove:error', type: '(id: string) => void', description: 'Emitted when all validation errors are resolved' },
]
</script>

