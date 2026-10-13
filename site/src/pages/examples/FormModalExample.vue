<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        FormModal
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Enterprise schema-driven modal form generator featuring real-time input validation, required field enforcement, automatic SEO scoring, and seamless integration with TabelData CRUD operations.
      </p>
    </header>

    <!-- Architecture Callout: Connection between TabelData and FormModal -->
    <div class="p-4 rounded-xl border border-blue-200 bg-blue-50/70 dark:border-blue-800 dark:bg-blue-900/20 text-xs text-blue-800 dark:text-blue-200 space-y-2">
      <div class="flex items-center gap-2 font-bold text-sm text-blue-900 dark:text-blue-100">
        <span>🔗 Architecture: How FormModal & TabelData Connect via Validation</span>
      </div>
      <p>
        <code class="font-bold">FormModal</code> acts as the interactive dialog engine inside <code class="font-bold">TabelData</code>. Validation operates in two collaborative layers:
      </p>
      <ul class="list-disc list-inside space-y-1 ml-2">
        <li>
          <strong>Layer 1 (FormModal & Inputs):</strong> When editing or adding records, <code class="font-bold">FormModal</code> renders fields via <code class="font-bold">FormFieldRenderer</code>, passing each field's <code class="font-mono">:validate</code> configuration (e.g. <code class="font-mono">minLength</code>, <code class="font-mono">pattern</code>, <code class="font-mono">min</code>, <code class="font-mono">max</code>). Child inputs emit real-time validation errors to block invalid submissions.
        </li>
        <li>
          <strong>Layer 2 (TabelData & Zod Schema):</strong> Upon clicking Submit in <code class="font-bold">FormModal</code>, valid data is emitted via <code class="font-mono">@submit</code> to <code class="font-bold">TabelData</code>'s <code class="font-mono">submitFormData</code> pipeline. <code class="font-bold">TabelData</code> runs final type-safe pipeline validation against <code class="font-mono">props.validation.create</code> or <code class="font-mono">props.validation.update</code> (Zod schemas) before persisting to IndexedDB or transmitting to remote endpoints.
        </li>
      </ul>
    </div>

    <!-- Demo 1: Form with Real-time Field Validation -->
    <DemoSection
      title="Interactive Form with Real-Time Field Validation"
      description="Opens a modal generated from a schema with active validation constraints (minLength, email blacklist, currency min, integer bounds)."
    >
      <div class="flex items-center gap-4">
        <button
          type="button"
          @click="showValidatedModal = true"
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
        >
          Open Validated Form Modal
        </button>
        <span v-if="validatedResult" class="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
          ✓ Submitted: {{ validatedResult.fullName }} ({{ validatedResult.role }}) - {{ validatedResult.email }}
        </span>
      </div>

      <FormModal
        v-if="showValidatedModal"
        :schema="validatedSchema"
        :is-update="false"
        lang="en"
        @cancel="showValidatedModal = false"
        @submit="handleValidatedSubmit"
      />

      <template #code>
        <CodeBlock :code="validatedCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Update Mode with Pre-populated Data -->
    <DemoSection
      title="Update Mode (Pre-populated Data)"
      description="Pre-populates fields with existing record data and switches title/buttons to update mode."
    >
      <div class="flex items-center gap-4">
        <button
          type="button"
          @click="showUpdateModal = true"
          class="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
        >
          Edit Existing Employee Record
        </button>
        <span v-if="updateResult" class="text-xs text-amber-600 dark:text-amber-400 font-medium">
          ✓ Updated: {{ updateResult.fullName }} - \${{ updateResult.salary }}
        </span>
      </div>

      <FormModal
        v-if="showUpdateModal"
        :id="101"
        :schema="validatedSchema"
        :initial-data="initialEmployeeData"
        :is-update="true"
        lang="en"
        @cancel="showUpdateModal = false"
        @submit="handleUpdateSubmit"
      />

      <template #code>
        <CodeBlock :code="updateCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: SEO Audit Integration -->
    <DemoSection
      title="Form with Real-Time SEO Audit"
      description="Enables automated SEO score calculation as users type titles, slugs, and body content."
    >
      <div class="flex items-center gap-4">
        <button
          type="button"
          @click="showSeoModal = true"
          class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
        >
          Open SEO Article Form
        </button>
        <span v-if="seoResult" class="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
          ✓ Saved Article: {{ seoResult.title }}
        </span>
      </div>

      <FormModal
        v-if="showSeoModal"
        :schema="seoSchema"
        :seo="seoMapping"
        :is-update="false"
        lang="en"
        @cancel="showSeoModal = false"
        @submit="handleSeoSubmit"
      />

      <template #code>
        <CodeBlock :code="seoCode" language="vue" />
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
import { FormModal } from '@zyvnox/vue-pack/components'
import type { Schema, SeoFieldMapping } from '@zyvnox/vue-pack/type'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const showValidatedModal = ref(false)
const showUpdateModal = ref(false)
const showSeoModal = ref(false)

const validatedResult = ref<any>(null)
const updateResult = ref<any>(null)
const seoResult = ref<any>(null)

const validatedSchema: Schema = {
  fullName: {
    type: 'text',
    label: 'Employee Full Name',
    placeholder: 'Min. 3 characters',
    required: true,
    tooltip: 'Enter full legal name as per ID card',
    tooltipPosition: 'right',
    validate: { minLength: 3, maxLength: 50 },
  },
  email: {
    type: 'email',
    label: 'Corporate Email',
    placeholder: 'name@zyvnox.com',
    required: true,
    validate: {
      duplicate: ['admin@zyvnox.com', 'root@zyvnox.com'],
    },
  },
  role: {
    type: 'select',
    label: 'Department Role',
    options: ['Software Engineer', 'UI/UX Designer', 'Product Manager', 'QA Specialist'],
    required: true,
  },
  salary: {
    type: 'currency',
    label: 'Monthly Salary',
    required: true,
    validate: { min: 3000000 },
  },
}

const initialEmployeeData = {
  fullName: 'Sarah Connor',
  email: 'sarah.c@zyvnox.com',
  role: 'Software Engineer',
  salary: 15000000,
}

const seoSchema: Schema = {
  title: {
    type: 'text',
    label: 'Article Title',
    required: true,
    placeholder: 'e.g. Modern Frontend Architecture with Vue Pack',
    validate: { minLength: 10, maxLength: 70 },
  },
  slug: {
    type: 'text',
    label: 'URL Slug',
    required: true,
    placeholder: 'e.g. modern-frontend-architecture',
    validate: { pattern: '^[a-z0-9-]+$' },
  },
  metaDescription: {
    type: 'textArea',
    label: 'Meta Description',
    required: true,
    placeholder: 'Recommended 120-160 characters for SEO search snippets',
    validate: { minLength: 50, maxLength: 160 },
  },
}

const seoMapping: SeoFieldMapping = {
  contentType: 'article',
  meta: {
    title: 'title',
    slug: 'slug',
    description: 'metaDescription',
  },
}

const handleValidatedSubmit = (payload: any) => {
  validatedResult.value = payload
  showValidatedModal.value = false
}

const handleUpdateSubmit = (payload: any) => {
  updateResult.value = payload
  showUpdateModal.value = false
}

const handleSeoSubmit = (payload: any) => {
  seoResult.value = payload
  showSeoModal.value = false
}

const validatedCode = `<template>
  <button @click="show = true">Open Validated Form Modal</button>

  <FormModal
    v-if="show"
    :schema="formSchema"
    :is-update="false"
    lang="en"
    @cancel="show = false"
    @submit="handleSubmit"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FormModal } from '@zyvnox/vue-pack/components'
import type { Schema } from '@zyvnox/vue-pack/type'

const show = ref(false)

const formSchema: Schema = {
  fullName: {
    type: 'text',
    label: 'Full Name',
    required: true,
    validate: { minLength: 3, maxLength: 50 },
  },
  email: {
    type: 'email',
    label: 'Corporate Email',
    required: true,
    validate: { duplicate: ['admin@zyvnox.com'] },
  },
  salary: {
    type: 'currency',
    label: 'Monthly Salary',
    required: true,
    validate: { min: 3000000 },
  },
}

const handleSubmit = (data: any) => {
  console.log('Valid Form Data:', data)
  show.value = false
}
<\/script>`

const updateCode = `<FormModal
  :id="101"
  :schema="formSchema"
  :initial-data="{ fullName: 'Sarah Connor', salary: 15000000 }"
  :is-update="true"
  @cancel="show = false"
  @submit="onUpdate"
/>`

const seoCode = `<FormModal
  :schema="seoSchema"
  :seo="{ content: { title: 'title', slug: 'slug', description: 'metaDescription' } }"
  @submit="onSave"
/>`

const propsList: PropDef[] = [
  { name: 'schema', type: 'Schema', required: true, description: 'Declarative schema object specifying fields, types, and input validation rules' },
  { name: 'isUpdate', type: 'boolean', default: 'false', description: 'Toggles between Create and Update modal headers, icons, and submit button labels' },
  { name: 'initialData', type: 'Partial<T>', default: '{}', description: 'Pre-populated initial values used to populate fields when editing records' },
  { name: 'id', type: 'number | string | null', description: 'ID of the record currently being updated' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Active language code for buttons, labels, and validation error messages' },
  { name: 'seo', type: 'SeoFieldMapping', description: 'Mapping configuration that activates real-time SEO score calculation and audit reports' },
  { name: 'demo', type: 'boolean', default: 'false', description: 'Offline demo mode flag passed down to child inputs and image uploaders' },
]

const eventsList: EventDef[] = [
  { name: 'submit', type: '(value: Record<string, any>) => void', description: 'Emitted when all fields pass validation and the user clicks Submit/Save' },
  { name: 'cancel', type: '() => void', description: 'Emitted when the modal is closed or user clicks Cancel' },
  { name: 'DataChildRemove', type: '(value: number[]) => void', description: 'Emitted when child array records are marked for deletion' },
  { name: 'create:Options', type: '(key: string, options: string | number, view: string) => void', description: 'Emitted when a new option is dynamically created in a child Combobox' },
]
</script>
