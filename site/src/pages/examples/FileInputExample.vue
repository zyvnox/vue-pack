<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        FileInput
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Single document upload component with remote URL entry, file type & size constraint validation, file inspection metadata, and tooltip guidance.
      </p>
    </header>

    <!-- Demo 1: Basic File -->
    <DemoSection title="Basic File Upload" description="Selects a single file or URL link with reactive binding.">
      <FileInput
        v-model="basic"
        label="Signed NDA Document"
      />
      <div class="text-xs text-slate-500">
        Current Selection: <code class="font-mono font-bold">{{ typeof basic === 'string' ? basic : (basic?.name ?? '(none)') }}</code>
      </div>

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Real-time Extension & Max Size Validation -->
    <DemoSection
      title="Real-Time Validation (Allowed Types & Max Size)"
      description="Restricts uploaded files to PDF/DOCX and enforces a 2048 KB (2MB) maximum file size."
    >
      <FileInput
        v-model="validatedFile"
        label="Resume / Curriculum Vitae"
        tooltip="Only PDF or DOCX format permitted (max 2MB)"
        tooltip-position="right"
        :validate="{
          maxSize: 2048,
          allowedTypes: ['pdf', 'docx'],
        }"
      />
      <div class="text-xs text-slate-500 space-y-1 mt-2">
        <div class="text-slate-400 dark:text-slate-500">
          Constraints: max 2048 KB, allowed extensions: <code class="font-mono">['pdf', 'docx']</code>.
        </div>
      </div>

      <template #code>
        <CodeBlock :code="validatedCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: Error & Disabled States -->
    <DemoSection title="External Error & Disabled States" description="Visual invalid upload warnings and read-only file states.">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FileInput
          v-model="errorVal"
          label="Tax Return Filing"
          :error="'Tax verification server rejected corrupted checksum'"
        />
        <FileInput
          v-model="disabledVal"
          label="Archived Payroll Receipt (Read-Only)"
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
import { FileInput } from '@zyvnox/vue-pack/components'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const basic = ref<File | string | null>('https://example.com/docs/nda-2026.pdf')
const validatedFile = ref<File | string | null>(null)
const errorVal = ref<File | string | null>(null)
const disabledVal = ref<File | string | null>('https://enterprise.internal/receipts/2026-01.pdf')

const basicCode = `<template>
  <FileInput
    v-model="document"
    label="Signed NDA Document"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FileInput } from '@zyvnox/vue-pack/components'

const document = ref(null)
<\/script>`

const validatedCode = `<FileInput
  v-model="resume"
  label="Resume / Curriculum Vitae"
  tooltip="Only PDF or DOCX format permitted (max 2MB)"
  tooltip-position="right"
  :validate="{
    maxSize: 2048,
    allowedTypes: ['pdf', 'docx'],
  }"
/>`

const errorCode = `<FileInput
  v-model="taxDoc"
  label="Tax Return Filing"
  error="Tax verification rejected corrupted checksum"
/>
<FileInput
  v-model="archived"
  label="Archived Receipt"
  disabled
/>`

const propsList: PropDef[] = [
  { name: 'modelValue', type: 'File | string | null', required: true, description: 'Reactive file object or remote URL string v-model' },
  { name: 'label', type: 'string', description: 'Field label title displayed above upload box' },
  { name: 'id', type: 'string', default: 'setUID()', description: 'Unique DOM element ID' },
  {
    name: 'validate',
    type: '{ maxSize?: number, allowedTypes?: string[] }',
    description: 'Client-side file validator. "maxSize" is in KB, and "allowedTypes" is an array of lowercase extension strings without dot (e.g. ["pdf", "docx"]).',
  },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables file selection, URL prompt, and delete button' },
  { name: 'error', type: 'string | string[]', description: 'External validation error message(s) from parent form/schema' },
  { name: 'tooltip', type: 'string', description: 'Custom tooltip guidance text' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Tooltip popup location' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon character or emoji displayed for tooltip trigger' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Language code used for button labels and error notices' },
]

const eventsList: EventDef[] = [
  { name: 'update:modelValue', type: '(value: File | string | null, id: string) => void', description: 'Emitted upon file selection, URL entry, or file deletion' },
  { name: 'push:error', type: '(errors: string[], id: string) => void', description: 'Emitted when file violates maxSize or allowedTypes rules' },
  { name: 'remove:error', type: '(id: string) => void', description: 'Emitted when file is valid or cleared' },
]
</script>
