<template>
  <div class="space-y-8">
    <DocHeader />

    <!-- Demo 1: Basic Rich Text Editor -->
    <DemoSection
      title="Full-Featured WYSIWYG Editor"
      description="Interactive rich text editor with extended toolbar formats, maximize mode, and HTML source toggle."
    >
      <TextAreaQuillInput
        v-model="basicHtml"
        :label="isIndonesian ? 'Konten Utama Artikel' : 'Article Body Content'"
        :placeholder="isIndonesian ? 'Mulai menulis dokumen kaya Anda...' : 'Start composing your rich document...'"
        :lang="currentLocale"
      />

      <div
        class="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60"
      >
        <div class="text-xs font-bold text-slate-500 mb-1">
          {{ isIndonesian ? 'Output HTML Langsung:' : 'Live HTML Output:' }}
        </div>
        <pre
          class="font-mono text-xs text-slate-700 dark:text-slate-300 overflow-x-auto max-h-32"
          >{{ basicHtml }}</pre
        >
      </div>

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Real-time Min & Max Character Validation -->
    <DemoSection
      title="Real-Time Length Validation"
      description="Validates that authored article content contains at least 30 characters and at most 500 characters."
    >
      <TextAreaQuillInput
        v-model="validatedHtml"
        :label="isIndonesian ? 'Ringkasan Tinjauan Redaksi' : 'Editorial Review Summary'"
        :placeholder="isIndonesian ? 'Tulis ringkasan redaksi dengan setidaknya 30 karakter...' : 'Write editorial summary with at least 30 characters...'"
        :lang="currentLocale"
        :validate="{
          minLength: 30,
          maxLength: 500,
        }"
      />
      <div class="text-xs text-slate-500 space-y-1 mt-2">
        <div class="text-slate-400 dark:text-slate-500">
          {{ isIndonesian ? 'Menerapkan batas minLength: 30 karakter, maxLength: 500 karakter dengan penghitung realtime bawaan.' : 'Enforces minLength: 30 chars, maxLength: 500 chars with built-in live counters.' }}
        </div>
      </div>

      <template #code>
        <CodeBlock :code="validatedCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: With Tooltip -->
    <DemoSection
      title="With Schema Tooltip"
      description="Displays content authoring guidelines beside the editor label."
    >
      <TextAreaQuillInput
        v-model="withTooltipHtml"
        :label="isIndonesian ? 'Syarat & Perjanjian Layanan' : 'Terms of Service & Agreement'"
        :tooltip="isIndonesian ? 'Gunakan heading H2 dan H3 untuk menstrukturkan klausul hukum secara logis' : 'Use heading levels H2 and H3 to structure legal clauses logically'"
        tooltip-position="right"
        :lang="currentLocale"
      />

      <template #code>
        <CodeBlock :code="tooltipCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 4: Error & Disabled States -->
    <DemoSection
      title="External Error & Disabled States"
      description="Visual invalid validation feedback and read-only rich view."
    >
      <div class="space-y-4">
        <TextAreaQuillInput
          v-model="errorHtml"
          :label="isIndonesian ? 'Ringkasan Redaksi Wajib' : 'Required Editorial Summary'"
          required
          :error="isIndonesian ? 'Konten utama artikel wajib diisi dan tidak boleh kosong' : 'Article body content is required and cannot be empty'"
          :lang="currentLocale"
        />
        <TextAreaQuillInput
          id="2"
          v-model="disabledHtml"
          :label="isIndonesian ? 'Versi Terbit Terkunci (Hanya-Baca)' : 'Locked Published Version (Read-Only)'"
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
import { TextAreaQuillInput } from '@zyvnox/vue-pack/components'
import { useSiteI18n } from '@/i18n'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const { isIndonesian, currentLocale } = useSiteI18n()

const basicHtml = ref(
  '<h2>Heading 2 Title</h2><p>This is a rich text editor supporting <strong>bold</strong>, <em>italics</em>, and custom typography.</p>',
)
const validatedHtml = ref('<p>Too short</p>')
const withTooltipHtml = ref(
  '<h3>1. Acceptance of Terms</h3><p>By registering, you agree to comply with our terms...</p>',
)
const errorHtml = ref('')
const disabledHtml = ref('<p>This content is locked and in read-only mode.</p>')

const basicCode = `<template>
  <TextAreaQuillInput
    v-model="content"
    label="Article Content"
    placeholder="Start composing..."
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TextAreaQuillInput } from '@zyvnox/vue-pack/components'

const content = ref('<p>Rich text...</p>')
<\/script>`

const validatedCode = `<TextAreaQuillInput
  v-model="reviewContent"
  label="Editorial Review Summary"
  :validate="{
    minLength: 30,
    maxLength: 500,
  }"
/>`

const tooltipCode = `<TextAreaQuillInput
  v-model="terms"
  label="Terms of Service"
  tooltip="Use H2 and H3 to structure clauses"
  tooltip-position="right"
/>`

const errorCode = `<TextAreaQuillInput
  v-model="content"
  label="Editorial Summary"
  required
  error="Article body content is required"
/>
<TextAreaQuillInput
  v-model="lockedDoc"
  label="Locked Published Version"
  disabled
/>`

const propsList: PropDef[] = [
  { name: 'modelValue', type: 'string', required: true, description: 'Reactive HTML string v-model generated by Quill' },
  { name: 'label', type: 'string', description: 'Label title displayed above editor toolbar' },
  { name: 'id', type: 'string', default: 'setUID()', description: 'Unique DOM element ID' },
  { name: 'placeholder', type: 'string', description: 'Placeholder hint text' },
  {
    name: 'validate',
    type: '{ minLength?: number, maxLength?: number }',
    description: 'Client-side text character length boundaries with automatic warning alerts.',
  },
  {
    name: 'api',
    type: 'Record<string, any>',
    description: 'API configuration object for remote media handling (uploadImage, listImages, uploadVideo, listVideos, aiContentGeneration).',
  },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables editing, toolbar controls, and enters read-only view' },
  { name: 'required', type: 'boolean', default: 'false', description: 'Required indicator marker' },
  { name: 'error', type: 'string | string[]', description: 'External validation error message(s) from parent form/schema' },
  { name: 'tooltip', type: 'string', description: 'Custom tooltip guidance text' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Tooltip popup location' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon character or emoji displayed for tooltip trigger' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Language code' },
]

const eventsList: EventDef[] = [
  { name: 'update:modelValue', type: '(value: string, id: string) => void', description: 'Emitted upon content updates with raw HTML string' },
  { name: 'update:title', type: '(title: string) => void', description: 'Emitted when title changes within editor' },
  { name: 'push:error', type: '(errors: string[], id: string) => void', description: 'Emitted when content fails minLength/maxLength rules' },
  { name: 'remove:error', type: '(id: string) => void', description: 'Emitted when content satisfies all validation criteria' },
]
</script>
