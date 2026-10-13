<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        EmailInput
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Email address input component with automatic RFC-compliant regex validation, duplicate checks, custom tooltip guidance, and i18n support.
      </p>
    </header>

    <!-- Demo 1: Basic Usage -->
    <DemoSection title="Basic Email Input" description="Email field with standard email keyboard hints and reactive binding.">
      <EmailInput
        v-model="basic"
        label="Work Email"
        placeholder="alex@company.com"
      />
      <div class="text-xs text-slate-500">
        Bound Value: <code class="font-mono font-bold">{{ basic || '(empty)' }}</code>
      </div>

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Real-time Email Format & Duplicate Validation -->
    <DemoSection
      title="Real-Time Validation (Format & Duplicate Check)"
      description="Validates RFC email syntax and prevents registering existing emails (e.g. admin@company.com, support@company.com)."
    >
      <EmailInput
        v-model="validatedVal"
        label="Registered Account Email"
        placeholder="user@domain.com"
        :validate="{
          duplicate: ['admin@company.com', 'support@company.com', 'billing@company.com'],
        }"
      />
      <div class="text-xs text-slate-500 space-y-1">
        <div>Current Email: <code class="font-mono font-bold">{{ validatedVal || '(empty)' }}</code></div>
        <div class="text-slate-400 dark:text-slate-500">
          Reserved/Taken list: <code class="font-mono">['admin@company.com', 'support@company.com', 'billing@company.com']</code>.
        </div>
      </div>

      <template #code>
        <CodeBlock :code="validatedCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: With Tooltip -->
    <DemoSection title="With Custom Schema Tooltip" description="Clear instruction tooltip displayed beside the email label.">
      <EmailInput
        v-model="withTooltip"
        label="Recovery Email"
        tooltip="Used solely for password resets and critical security notices"
        tooltip-position="right"
        placeholder="recovery@personal.net"
      />

      <template #code>
        <CodeBlock :code="tooltipCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 4: Error & Disabled States -->
    <DemoSection title="External Error & Disabled States" description="Visual invalid format feedback and read-only email view.">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <EmailInput
          v-model="errorVal"
          label="Billing Contact"
          required
          :error="'Mail exchanger unreachable for specified domain'"
        />
        <EmailInput
          v-model="disabledVal"
          label="Primary Account Email (Read-Only)"
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
import { EmailInput } from '@zyvnox/vue-pack/components'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const basic = ref('')
const validatedVal = ref('admin@company.com')
const withTooltip = ref('')
const errorVal = ref('invalid-user@offline-host')
const disabledVal = ref('admin@enterprise.org')

const basicCode = `<template>
  <EmailInput
    v-model="email"
    label="Work Email"
    placeholder="alex@company.com"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { EmailInput } from '@zyvnox/vue-pack/components'

const email = ref('')
<\/script>`

const validatedCode = `<EmailInput
  v-model="accountEmail"
  label="Registered Account Email"
  :validate="{
    duplicate: ['admin@company.com', 'support@company.com', 'billing@company.com'],
  }"
/>`

const tooltipCode = `<EmailInput
  v-model="recoveryEmail"
  label="Recovery Email"
  tooltip="Used solely for password resets"
  tooltip-position="right"
/>`

const errorCode = `<EmailInput
  v-model="billingEmail"
  label="Billing Contact"
  required
  error="Mail exchanger unreachable for domain"
/>
<EmailInput
  v-model="accountEmail"
  label="Primary Account Email"
  disabled
/>`

const propsList: PropDef[] = [
  { name: 'modelValue', type: 'string | number', required: true, description: 'Reactive email string v-model' },
  { name: 'label', type: 'string', required: true, description: 'Field label title displayed above the input' },
  { name: 'id', type: 'string', default: 'setUID()', description: 'Unique DOM element ID' },
  { name: 'placeholder', type: 'string', description: 'Placeholder hint text (defaults to i18n label)' },
  {
    name: 'validate',
    type: '{ duplicate?: (string | number)[] }',
    description: 'Blacklist of forbidden or already registered emails. Also automatically enforces standard email regex validation.',
  },
  { name: 'required', type: 'boolean', default: 'false', description: 'Displays required asterisk indicator' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled input state' },
  { name: 'error', type: 'string | string[]', description: 'External validation error message(s) from parent form/schema' },
  { name: 'tooltip', type: 'string', description: 'Custom tooltip guidance text' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Tooltip popup location' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon character or emoji displayed for tooltip trigger' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Language code used for validation error notices' },
]

const eventsList: EventDef[] = [
  { name: 'update:modelValue', type: '(value: string | number, id: string) => void', description: 'Emitted upon typing' },
  { name: 'push:error', type: '(errors: string[], id: string) => void', description: 'Emitted when email format is invalid or duplicate is detected' },
  { name: 'remove:error', type: '(id: string) => void', description: 'Emitted when email is valid' },
]
</script>
