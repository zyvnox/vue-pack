<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        FileArrayInput
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Multi-file attachments manager with list preview, max file count limits (`maxFiles`), file type & size constraints, custom tooltips, and i18n support.
      </p>
    </header>

    <!-- Demo 1: Basic Multi-File -->
    <DemoSection title="Basic Multi-File Attachments" description="Manage a list of files or remote links with add/remove actions.">
      <FileArrayInput
        v-model="basic"
        label="Project Supporting Documents"
      />
      <div class="text-xs text-slate-500">
        Total Attached Files: <code class="font-mono font-bold">{{ basic.length }} files</code>
      </div>

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Real-time Max Files & Extension Validation -->
    <DemoSection
      title="Real-Time Validation (Max Files & Allowed Types)"
      description="Limits attachment pool to a maximum of 3 files, restricts types to PDF/ZIP, and limits each file to 4096 KB (4MB)."
    >
      <FileArrayInput
        v-model="validatedFiles"
        label="Tender Submission Package"
        tooltip="Submit max 3 files in PDF or ZIP format"
        tooltip-position="right"
        :validate="{
          maxFiles: 3,
          maxSize: 4096,
          allowedTypes: ['pdf', 'zip'],
        }"
      />
      <div class="text-xs text-slate-500 space-y-1 mt-2">
        <div class="text-slate-400 dark:text-slate-500">
          Constraints: maxFiles: 3, maxSize: 4096 KB per file, allowed: <code class="font-mono">['pdf', 'zip']</code>.
        </div>
      </div>

      <template #code>
        <CodeBlock :code="validatedCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: Error & Disabled States -->
    <DemoSection title="External Error & Disabled States" description="Visual invalid count feedback and read-only file lists.">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FileArrayInput
          v-model="errorVal"
          label="Mandatory Audit Evidences"
          :error="'At least one notarized evidence document is required'"
        />
        <FileArrayInput
          v-model="disabledVal"
          label="Locked Case Evidences (Read-Only)"
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
import { FileArrayInput } from '@zyvnox/vue-pack/components'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const basic = ref<(File | string)[]>([
  'https://company.internal/specs.pdf',
  'https://company.internal/diagram.png',
])
const validatedFiles = ref<(File | string)[]>([])
const errorVal = ref<(File | string)[]>([])
const disabledVal = ref<(File | string)[]>([
  'evidence-01.pdf',
  'evidence-02.zip',
])

const basicCode = `<template>
  <FileArrayInput
    v-model="files"
    label="Project Supporting Documents"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FileArrayInput } from '@zyvnox/vue-pack/components'

const files = ref(['https://company.internal/specs.pdf'])
<\/script>`

const validatedCode = `<FileArrayInput
  v-model="tenderFiles"
  label="Tender Submission Package"
  tooltip="Submit max 3 files in PDF or ZIP format"
  tooltip-position="right"
  :validate="{
    maxFiles: 3,
    maxSize: 4096,
    allowedTypes: ['pdf', 'zip'],
  }"
/>`

const errorCode = `<FileArrayInput
  v-model="evidences"
  label="Mandatory Audit Evidences"
  error="At least one notarized document is required"
/>
<FileArrayInput
  v-model="lockedEvidences"
  label="Locked Case Evidences"
  disabled
/>`

const propsList: PropDef[] = [
  { name: 'modelValue', type: '(File | string)[]', required: true, description: 'Reactive array of File objects or remote URL strings' },
  { name: 'label', type: 'string', description: 'Field label title displayed above attachments container' },
  { name: 'id', type: 'string', default: 'setUID()', description: 'Unique DOM element ID' },
  {
    name: 'validate',
    type: '{ maxFiles?: number, maxSize?: number, allowedTypes?: string[] }',
    description: 'Multi-file validation constraints. "maxFiles" caps total item count; "maxSize" is in KB per file; "allowedTypes" lists permitted file extensions without dot.',
  },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables adding new files or removing existing attachments' },
  { name: 'error', type: 'string | string[]', description: 'External validation error message(s) from parent form/schema' },
  { name: 'tooltip', type: 'string', description: 'Custom tooltip guidance text' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Tooltip popup location' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon character or emoji displayed for tooltip trigger' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Language code used for button labels and error notices' },
]

const eventsList: EventDef[] = [
  { name: 'update:modelValue', type: '(value: (File | string)[]) => void', description: 'Emitted upon file additions or removals' },
  { name: 'push:error', type: '(errors: string[], id: string) => void', description: 'Emitted when file list violates maxFiles, maxSize, or allowedTypes rules' },
  { name: 'remove:error', type: '(id: string) => void', description: 'Emitted when all attachments pass validation' },
]
</script>
