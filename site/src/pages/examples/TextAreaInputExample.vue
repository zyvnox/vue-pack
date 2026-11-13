<template>
  <div class="space-y-8">
    <DocHeader />

    <!-- Demo 1: Basic Usage -->
    <DemoSection title="Basic Text Area" description="Standard multi-line text input with reactive v-model binding.">
      <TextAreaInput
        v-model="basic"
        :label="isIndonesian ? 'Ikhtisar Proyek' : 'Project Overview'"
        :placeholder="isIndonesian ? 'Jelaskan deliverable proyek...' : 'Describe project deliverables...'"
        :lang="currentLocale"
      />
      <div class="text-xs text-slate-500">
        {{ isIndonesian ? 'Jumlah Karakter:' : 'Character Count:' }} <code class="font-mono font-bold">{{ basic.length }} {{ isIndonesian ? 'karakter' : 'characters' }}</code>
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
        :label="isIndonesian ? 'Ringkasan Eksekutif' : 'Executive Summary'"
        :placeholder="isIndonesian ? 'Masukkan setidaknya 20 karakter...' : 'Enter at least 20 characters...'"
        :lang="currentLocale"
        :validate="{
          minLength: 20,
          maxLength: 200,
        }"
      />
      <div class="text-xs text-slate-500 space-y-1">
        <div>{{ isIndonesian ? 'Panjang Saat Ini:' : 'Current Length:' }} <code class="font-mono font-bold">{{ validatedVal.length }} / 200 {{ isIndonesian ? 'karakter' : 'chars' }}</code></div>
        <div class="text-slate-400 dark:text-slate-500">
          {{ isIndonesian ? 'Menerapkan batas minLength: 20, maxLength: 200.' : 'Enforces minLength: 20, maxLength: 200.' }}
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
        :label="isIndonesian ? 'Langkah Reproduksi Bug Teknis' : 'Technical Bug Reproduction Steps'"
        :tooltip="isIndonesian ? 'Berikan nomor langkah-demi-langkah, perilaku yang diharapkan vs aktual, dan detail lingkungan' : 'Provide step-by-step numbers, expected vs actual behavior, and environment details'"
        tooltip-position="right"
        placeholder="1. Navigate to /dashboard..."
        :lang="currentLocale"
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
          :label="isIndonesian ? 'Catatan Internal' : 'Internal Notes'"
          :error="isIndonesian ? 'Catatan tidak boleh berisi kredensial akses internal yang sensitif' : 'Notes must not contain sensitive internal access credentials'"
          :lang="currentLocale"
        />
        <TextAreaInput
          v-model="disabledVal"
          :label="isIndonesian ? 'Log Kepatuhan Terarsip (Hanya-Baca)' : 'Archived Compliance Log (Read-Only)'"
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
import { TextAreaInput } from '@zyvnox/vue-pack/components'
import { useSiteI18n } from '@/i18n'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const { isIndonesian, currentLocale } = useSiteI18n()

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
