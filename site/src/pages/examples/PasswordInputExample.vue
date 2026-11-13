<template>
  <div class="space-y-8">
    <DocHeader />

    <!-- Demo 1: Basic Password -->
    <DemoSection title="Basic Password Input" description="Masked input with built-in show/hide eye toggle button.">
      <PasswordInput
        v-model="basic"
        :label="isIndonesian ? 'Kata Sandi Akun' : 'Account Password'"
        :placeholder="isIndonesian ? 'Masukkan kata sandi rahasia' : 'Enter secret password'"
        :lang="currentLocale"
      />
      <div class="text-xs text-slate-500">
        {{ isIndonesian ? 'Panjang Karakter:' : 'Bound Length:' }} <code class="font-mono font-bold">{{ basic.length }} {{ isIndonesian ? 'karakter' : 'chars' }}</code>
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
        :label="isIndonesian ? 'Buat Kunci Master' : 'Create Master Key'"
        :placeholder="isIndonesian ? 'Masukkan kata sandi kompleks' : 'Enter complex password'"
        :lang="currentLocale"
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
          {{ isIndonesian ? 'Wajib: >= 8 karakter, 1 huruf besar, 1 huruf kecil, 1 angka, dan 1 simbol khusus (!@#$%^&*).' : 'Required: >= 8 chars, 1 uppercase, 1 lowercase, 1 number, and 1 special symbol (!@#$%^&*).' }}
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
        :label="isIndonesian ? 'Kata Sandi Akun Baru' : 'New Account Password'"
        :tooltip="isIndonesian ? 'Harus mencakup minimal 8 karakter, 1 huruf besar, dan 1 simbol khusus' : 'Must include minimum 8 characters, 1 uppercase letter, and 1 special symbol'"
        tooltip-position="right"
        placeholder="••••••••••••"
        :lang="currentLocale"
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
          :label="isIndonesian ? 'Konfirmasi Kata Sandi' : 'Confirm Password'"
          required
          :error="isIndonesian ? 'Kata sandi tidak cocok' : 'Passwords do not match'"
          :lang="currentLocale"
        />
        <PasswordInput
          v-model="disabledVal"
          :label="isIndonesian ? 'Kunci Rahasia Tersimpan (Hanya-Baca)' : 'Stored App Secret (Read-Only)'"
          disabled
          :lang="currentLocale"
        />
      </div>

      <template #code>
        <CodeBlock :code="errorCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Props Table -->
    <section class="space-y-4">
      <PropsTable :props="propsList" />
    </section>

    <!-- Events Table -->
    <section class="space-y-4">
      <EventsTable :events="eventsList" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PasswordInput } from '@zyvnox/vue-pack/components'
import { useSiteI18n } from '@/i18n'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const { isIndonesian, currentLocale } = useSiteI18n()

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
