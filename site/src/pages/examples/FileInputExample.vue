<template>
  <div class="space-y-8">
    <DocHeader />

    <!-- Demo 1: Basic File -->
    <DemoSection title="Basic File Upload" description="Selects a single file or URL link with reactive binding.">
      <FileInput
        v-model="basic"
        :label="isIndonesian ? 'Dokumen NDA Bertanda Tangan' : 'Signed NDA Document'"
        :lang="currentLocale"
      />
      <div class="text-xs text-slate-500">
        {{ isIndonesian ? 'Pilihan Saat Ini:' : 'Current Selection:' }} <code class="font-mono font-bold">{{ typeof basic === 'string' ? basic : (basic?.name ?? (isIndonesian ? '(tidak ada)' : '(none)')) }}</code>
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
        :label="isIndonesian ? 'Resume / Riwayat Hidup' : 'Resume / Curriculum Vitae'"
        :tooltip="isIndonesian ? 'Hanya format PDF atau DOCX yang diizinkan (maksimal 2MB)' : 'Only PDF or DOCX format permitted (max 2MB)'"
        tooltip-position="right"
        :lang="currentLocale"
        :validate="{
          maxSize: 2048,
          allowedTypes: ['pdf', 'docx'],
        }"
      />
      <div class="text-xs text-slate-500 space-y-1 mt-2">
        <div class="text-slate-400 dark:text-slate-500">
          {{ isIndonesian ? 'Batasan: maksimal 2048 KB, ekstensi yang diizinkan:' : 'Constraints: max 2048 KB, allowed extensions:' }} <code class="font-mono">['pdf', 'docx']</code>.
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
          :label="isIndonesian ? 'Pelaporan SPT Pajak' : 'Tax Return Filing'"
          :error="isIndonesian ? 'Server verifikasi pajak menolak berkas karena checksum rusak' : 'Tax verification server rejected corrupted checksum'"
          :lang="currentLocale"
        />
        <FileInput
          v-model="disabledVal"
          :label="isIndonesian ? 'Tanda Terima Penggajian Terarsip (Hanya-Baca)' : 'Archived Payroll Receipt (Read-Only)'"
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
import { FileInput } from '@zyvnox/vue-pack/components'
import { useSiteI18n } from '@/i18n'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const { isIndonesian, currentLocale } = useSiteI18n()

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
