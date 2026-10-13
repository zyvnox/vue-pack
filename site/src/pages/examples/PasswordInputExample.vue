<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        PasswordInput
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Secure password field with visibility toggle button (show/hide), strict security policy validation (min/max length, uppercase, lowercase, numbers, special characters), and i18n support.
      </p>
    </header>

    <!-- Demo 1: Basic Password -->
    <DemoSection title="Basic Password Input" description="Masked input with built-in show/hide eye toggle button.">
      <PasswordInput
        v-model="basic"
        label="Account Password"
        placeholder="Enter secret password"
      />
      <div class="text-xs text-slate-500">
        Bound Length: <code class="font-mono font-bold">{{ basic.length }} chars</code>
      </div>

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Real-time Strict Complexity Policy -->
    <DemoSection
      title="Real-Time Security Policy Validation"
      description="Enforces strict password rules: min 8 chars, uppercase, lowercase, numeric digit, and special symbol with instant localized alerts."
    >
      <PasswordInput
        v-model="validatedVal"
        label="Create Master Key"
        placeholder="Enter complex password"
        :validate="{
          minLength: 8,
          maxLength: 32,
          requireUppercase: true,
          requireLowercase: true,
          requireNumber: true,
          requireSpecialChar: true,
        }"
      />
      <div class="text-xs text-slate-500 space-y-1">
        <div class="text-slate-400 dark:text-slate-500">
          Required: &gt;= 8 chars, 1 uppercase, 1 lowercase, 1 number, and 1 special symbol (!@#\$%^&*).
        </div>
      </div>

      <template #code>
        <CodeBlock :code="validatedCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: With Tooltip -->
    <DemoSection title="With Password Requirements Tooltip" description="Explains complexity rules via schema tooltip.">
      <PasswordInput
        v-model="withTooltip"
        label="New Account Password"
        tooltip="Must include minimum 8 characters, 1 uppercase letter, and 1 special symbol"
        tooltip-position="right"
        placeholder="••••••••••••"
      />

      <template #code>
        <CodeBlock :code="tooltipCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 4: Error & Disabled States -->
    <DemoSection title="External Error & Disabled States" description="Visual invalid strength feedback and locked inputs.">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PasswordInput
          v-model="errorVal"
          label="Confirm Password"
          required
          :error="'Passwords do not match'"
        />
        <PasswordInput
          v-model="disabledVal"
          label="Stored App Secret (Read-Only)"
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
import { PasswordInput } from '@zyvnox/vue-pack/components'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const basic = ref('')
const validatedVal = ref('weakpass')
const withTooltip = ref('')
const errorVal = ref('mismatched123')
const disabledVal = ref('SuperSecretLockedKey')

const basicCode = `<template>
  <PasswordInput
    v-model="password"
    label="Account Password"
    placeholder="Enter secret"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PasswordInput } from '@zyvnox/vue-pack/components'

const password = ref('')
<\/script>`

const validatedCode = `<PasswordInput
  v-model="masterPassword"
  label="Create Master Key"
  :validate="{
    minLength: 8,
    maxLength: 32,
    requireUppercase: true,
    requireLowercase: true,
    requireNumber: true,
    requireSpecialChar: true,
  }"
/>`

const tooltipCode = `<PasswordInput
  v-model="newPassword"
  label="New Account Password"
  tooltip="Must include min 8 chars, uppercase, and symbols"
  tooltip-position="right"
/>`

const errorCode = `<PasswordInput
  v-model="confirmPassword"
  label="Confirm Password"
  required
  error="Passwords do not match"
/>
<PasswordInput
  v-model="appSecret"
  label="Stored App Secret"
  disabled
/>`

const propsList: PropDef[] = [
  { name: 'modelValue', type: 'string | number', required: true, description: 'Reactive password string v-model' },
  { name: 'label', type: 'string', required: true, description: 'Field label title displayed above password input' },
  { name: 'id', type: 'string', default: 'setUID()', description: 'Unique DOM element ID' },
  { name: 'placeholder', type: 'string', description: 'Placeholder hint text (defaults to i18n label)' },
  {
    name: 'validate',
    type: '{ minLength?: number, maxLength?: number, requireUppercase?: boolean, requireLowercase?: boolean, requireNumber?: boolean, requireSpecialChar?: boolean }',
    description: 'Client-side password complexity requirements. Automatically runs checks against all enabled policy rules with localized messages.',
  },
  { name: 'required', type: 'boolean', default: 'false', description: 'Displays required asterisk indicator' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Locks password input and hides reveal toggle' },
  { name: 'error', type: 'string | string[]', description: 'External validation error message(s) from parent form/schema' },
  { name: 'tooltip', type: 'string', description: 'Custom tooltip guidance text' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Tooltip popover position' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon character or emoji displayed for tooltip trigger' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Language code used for validation error notices' },
]

const eventsList: EventDef[] = [
  { name: 'update:modelValue', type: '(value: string | number, id: string) => void', description: 'Emitted upon password typing with input ID' },
  { name: 'push:error', type: '(errors: string[], id: string) => void', description: 'Emitted when password violates complexity requirements' },
  { name: 'remove:error', type: '(id: string) => void', description: 'Emitted when password meets all complexity rules' },
]
</script>
