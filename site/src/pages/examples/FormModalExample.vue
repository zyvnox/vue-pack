<template>
  <div class="space-y-8">
    <DocHeader />

    <!-- Architecture Callout: Connection between TabelData and FormModal -->
    <div class="p-4 rounded-xl border border-blue-200 bg-blue-50/70 dark:border-blue-800 dark:bg-blue-900/20 text-xs text-blue-800 dark:text-blue-200 space-y-2">
      <div class="flex items-center gap-2 font-bold text-sm text-blue-900 dark:text-blue-100">
        <span>🔗</span>
        <span>
          {{ isIndonesian ? 'Arsitektur: Bagaimana FormModal & TabelData Terhubung melalui Validasi' : 'Architecture: How FormModal & TabelData Connect via Validation' }}
        </span>
      </div>
      <p class="leading-relaxed">
        <template v-if="isIndonesian">
          <code class="font-bold">FormModal</code> berperan sebagai engine dialog interaktif di dalam <code class="font-bold">TabelData</code>. Proses validasi bekerja dalam dua lapisan terintegrasi:
        </template>
        <template v-else>
          <code class="font-bold">FormModal</code> acts as the interactive dialog engine inside <code class="font-bold">TabelData</code>. Validation operates in two collaborative layers:
        </template>
      </p>
      <ul class="list-disc list-inside space-y-1 ml-2 leading-relaxed">
        <li>
          <strong>{{ isIndonesian ? 'Lapisan 1 (FormModal & Komponen Input):' : 'Layer 1 (FormModal & Inputs):' }}</strong>
          {{ isIndonesian
            ? 'Saat mengedit atau menambah data, FormModal merender kolom input via FormFieldRenderer dengan meneruskan konfigurasi :validate (misal minLength, pattern, min, max). Komponen anak memancarkan error validasi realtime untuk mencegah pengiriman data tidak valid.'
            : "When editing or adding records, FormModal renders fields via FormFieldRenderer, passing each field's :validate configuration (e.g. minLength, pattern, min, max). Child inputs emit real-time validation errors to block invalid submissions." }}
        </li>
        <li>
          <strong>{{ isIndonesian ? 'Lapisan 2 (TabelData & Skema Zod):' : 'Layer 2 (TabelData & Zod Schema):' }}</strong>
          {{ isIndonesian
            ? 'Ketika tombol Simpan ditekan, FormModal memancarkan event @submit ke pipeline submitFormData TabelData. TabelData menjalankan validasi pipa skema Zod (validation.create/update) dengan type safety sebelum menyimpannya ke IndexedDB atau API remote.'
            : "Upon clicking Submit in FormModal, valid data is emitted via @submit to TabelData's submitFormData pipeline. TabelData runs final type-safe pipeline validation against props.validation.create or props.validation.update (Zod schemas) before persisting." }}
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
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
        >
          {{ isIndonesian ? 'Buka Formulir Modal Tervalidasi' : 'Open Validated Form Modal' }}
        </button>
        <span v-if="validatedResult" class="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
          {{ isIndonesian ? '✓ Terkirim:' : '✓ Submitted:' }} {{ validatedResult.fullName }} ({{ validatedResult.role }}) - {{ validatedResult.email }}
        </span>
      </div>

      <FormModal
        v-if="showValidatedModal"
        :schema="validatedSchema"
        :is-update="false"
        :lang="currentLocale"
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
          class="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
        >
          {{ isIndonesian ? 'Edit Data Karyawan Tersimpan' : 'Edit Existing Employee Record' }}
        </button>
        <span v-if="updateResult" class="text-xs text-amber-600 dark:text-amber-400 font-medium">
          {{ isIndonesian ? '✓ Diperbarui:' : '✓ Updated:' }} {{ updateResult.fullName }} - \${{ updateResult.salary }}
        </span>
      </div>

      <FormModal
        v-if="showUpdateModal"
        :id="101"
        :schema="validatedSchema"
        :initial-data="initialEmployeeData"
        :is-update="true"
        :lang="currentLocale"
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
          class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
        >
          {{ isIndonesian ? 'Buka Formulir Artikel SEO' : 'Open SEO Article Form' }}
        </button>
        <span v-if="seoResult" class="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
          {{ isIndonesian ? '✓ Artikel Tersimpan:' : '✓ Saved Article:' }} {{ seoResult.title }}
        </span>
      </div>

      <FormModal
        v-if="showSeoModal"
        :schema="seoSchema"
        :seo="seoMapping"
        :is-update="false"
        :lang="currentLocale"
        @cancel="showSeoModal = false"
        @submit="handleSeoSubmit"
      />

      <template #code>
        <CodeBlock :code="seoCode" language="vue" />
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
import { ref, computed } from 'vue'
import { FormModal } from '@zyvnox/vue-pack/components'
import type { Schema, SeoFieldMapping } from '@zyvnox/vue-pack/type'
import { useSiteI18n } from '@/i18n'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const { isIndonesian, currentLocale } = useSiteI18n()

const showValidatedModal = ref(false)
const showUpdateModal = ref(false)
const showSeoModal = ref(false)

const validatedResult = ref<any>(null)
const updateResult = ref<any>(null)
const seoResult = ref<any>(null)

const validatedSchema = computed<Schema>(() => ({
  fullName: {
    type: 'text',
    label: isIndonesian.value ? 'Nama Lengkap Karyawan' : 'Employee Full Name',
    placeholder: isIndonesian.value ? 'Min. 3 karakter' : 'Min. 3 characters',
    required: true,
    tooltip: isIndonesian.value ? 'Masukkan nama lengkap resmi sesuai KTP' : 'Enter full legal name as per ID card',
    tooltipPosition: 'right',
    validate: { minLength: 3, maxLength: 50 },
  },
  email: {
    type: 'email',
    label: isIndonesian.value ? 'Email Perusahaan' : 'Corporate Email',
    placeholder: 'name@zyvnox.com',
    required: true,
    validate: {
      duplicate: ['admin@zyvnox.com', 'root@zyvnox.com'],
    },
  },
  role: {
    type: 'select',
    label: isIndonesian.value ? 'Jabatan Departemen' : 'Department Role',
    options: isIndonesian.value
      ? ['Software Engineer', 'Desainer UI/UX', 'Product Manager', 'Spesialis QA']
      : ['Software Engineer', 'UI/UX Designer', 'Product Manager', 'QA Specialist'],
    required: true,
  },
  salary: {
    type: 'currency',
    label: isIndonesian.value ? 'Gaji Bulanan' : 'Monthly Salary',
    required: true,
    validate: { min: 3000000 },
  },
}))

const initialEmployeeData = {
  fullName: 'Sarah Connor',
  email: 'sarah.c@zyvnox.com',
  role: 'Software Engineer',
  salary: 15000000,
}

const seoSchema = computed<Schema>(() => ({
  title: {
    type: 'text',
    label: isIndonesian.value ? 'Judul Artikel' : 'Article Title',
    required: true,
    placeholder: isIndonesian.value ? 'cth. Arsitektur Frontend Modern dengan Vue Pack' : 'e.g. Modern Frontend Architecture with Vue Pack',
    validate: { minLength: 10, maxLength: 70 },
  },
  slug: {
    type: 'text',
    label: isIndonesian.value ? 'Slug URL' : 'URL Slug',
    required: true,
    placeholder: 'e.g. modern-frontend-architecture',
    validate: { pattern: '^[a-z0-9-]+$' },
  },
  metaDescription: {
    type: 'textArea',
    label: isIndonesian.value ? 'Deskripsi Meta' : 'Meta Description',
    required: true,
    placeholder: isIndonesian.value ? 'Disarankan 120-160 karakter untuk cuplikan pencarian SEO' : 'Recommended 120-160 characters for SEO search snippets',
    validate: { minLength: 50, maxLength: 160 },
  },
}))

const seoMapping: SeoFieldMapping = {
  contentType: 'article',
  meta: {
    title: 'title',
    slug: 'slug',
    description: 'metaDescription',
  },
}

const handleValidatedSubmit = (data: any) => {
  validatedResult.value = data
  showValidatedModal.value = false
}

const handleUpdateSubmit = (data: any) => {
  updateResult.value = data
  showUpdateModal.value = false
}

const handleSeoSubmit = (data: any) => {
  seoResult.value = data
  showSeoModal.value = false
}

const validatedCode = `<FormModal
  :schema="schema"
  :is-update="false"
  :lang="currentLocale"
  @cancel="showModal = false"
  @submit="handleSubmit"
/>`

const updateCode = `<FormModal
  :id="employeeId"
  :schema="schema"
  :initial-data="existingRecord"
  :is-update="true"
  :lang="currentLocale"
  @cancel="showModal = false"
  @submit="handleUpdate"
/>`

const seoCode = `<FormModal
  :schema="articleSchema"
  :seo="{
    contentType: 'article',
    meta: { title: 'title', slug: 'slug', description: 'metaDescription' }
  }"
  :lang="currentLocale"
  @submit="handleSeoSubmit"
/>`

const propsList: PropDef[] = [
  { name: 'schema', type: 'Schema', required: true, description: 'Declarative field schema definition configuring field types, labels, tooltips, and validation constraints' },
  { name: 'isUpdate', type: 'boolean', default: 'false', description: 'Toggles between Add/Create and Edit/Update modal headers and button styles' },
  { name: 'id', type: 'string | number', description: 'Unique entity record ID passed to update handlers and lifecycle hooks' },
  { name: 'initialData', type: 'Record<string, any>', description: 'Pre-populated field values to populate inputs when opening in update mode' },
  { name: 'seo', type: 'SeoFieldMapping', description: 'Optional SEO audit mapping configuration linking field names to SEO scoring rules' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Active language code controlling button labels and validation error messages' },
  { name: 'width', type: 'string', default: "'max-w-2xl'", description: 'Tailwind CSS max-width constraint for the modal container' },
]

const eventsList: EventDef[] = [
  { name: 'submit', type: '(data: Record<string, any>, id?: string | number) => void', description: 'Emitted when user submits the form with fully validated payload' },
  { name: 'cancel', type: '() => void', description: 'Emitted when user cancels or closes the dialog' },
  { name: 'error', type: '(errors: Record<string, string[]>) => void', description: 'Emitted when submission is blocked by validation failures' },
]
</script>
