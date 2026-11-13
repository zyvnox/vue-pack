<template>
  <div class="space-y-8">
    <DocHeader />

    <!-- Demo 1: Basic Array Repeater with FormModal Validation -->
    <DemoSection
      title="Dynamic Row Repeater with Item Validation"
      description="Add, edit, and delete structured objects. Clicking 'Add' or 'Edit' opens a FormModal that validates each field according to the item schema before updating the array."
    >
      <div class="space-y-4">
        <ArrayObjectInput
          v-model="basicRows"
          :label="isIndonesian ? 'Daftar Item Pesanan Pembelian' : 'Purchase Order Line Items'"
          :schema="itemSchema"
          :display="{
            titleKey: 'title',
            priceKey: 'price',
            quantityKey: 'quantity',
          }"
          :lang="currentLocale"
        />

        <div class="text-xs text-slate-500">
          {{ isIndonesian ? 'Baris Aktif (' : 'Active Rows (' }}{{ basicRows.length }}):
          <pre class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono mt-1 overflow-x-auto">{{ JSON.stringify(basicRows, null, 2) }}</pre>
        </div>
      </div>

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Display Order Variations (Title-First vs Image-First, File, HTML) -->
    <DemoSection
      title="Ordered Multi-Field Display (Images, Files, HTML, Badges)"
      description="Configure up to 3 visible fields per row. Display strictly follows the key insertion order (e.g. titleKey then imageKey vs imageKey then titleKey) and supports images, documents, badges, and sanitized HTML."
    >
      <div class="space-y-6">
        <!-- Variant A: Title First, then Image -->
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
          <div class="flex items-center justify-between">
            <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200">
              {{ isIndonesian ? 'Urutan 1: Judul Dulu Lalu Gambar' : 'Order A: Title First, Then Image' }}
            </h4>
            <code class="text-xs font-mono bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-800">
              { titleKey: 'title', imageKey: 'image' }
            </code>
          </div>
          <ArrayObjectInput
            v-model="titleFirstItems"
            :label="isIndonesian ? 'Katalog Portofolio (Judul -> Gambar)' : 'Portfolio Showcase (Title -> Image)'"
            :schema="mediaSchema"
            :display="{
              titleKey: 'title',
              imageKey: 'image',
            }"
            :lang="currentLocale"
          />
        </div>

        <!-- Variant B: Image First, then Title -->
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
          <div class="flex items-center justify-between">
            <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200">
              {{ isIndonesian ? 'Urutan 2: Gambar Dulu Lalu Judul' : 'Order B: Image First, Then Title' }}
            </h4>
            <code class="text-xs font-mono bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
              { imageKey: 'image', titleKey: 'title' }
            </code>
          </div>
          <ArrayObjectInput
            v-model="imageFirstItems"
            :label="isIndonesian ? 'Katalog Produk (Gambar -> Judul)' : 'Product Items (Image -> Title)'"
            :schema="mediaSchema"
            :display="{
              imageKey: 'image',
              titleKey: 'title',
            }"
            :lang="currentLocale"
          />
        </div>

        <!-- Variant C: Document (PDF/File) & Sanitized HTML Code -->
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
          <div class="flex items-center justify-between">
            <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200">
              {{ isIndonesian ? 'Urutan 3: Dokumen (PDF) & Kode HTML' : 'Order C: Document (PDF) & HTML Code' }}
            </h4>
            <code class="text-xs font-mono bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded border border-purple-200 dark:border-purple-800">
              { titleKey: 'title', docKey: 'document', notesKey: 'notesHtml' }
            </code>
          </div>
          <ArrayObjectInput
            v-model="fileHtmlItems"
            :label="isIndonesian ? 'Dokumen & Kontrak Proyek' : 'Project Documents & Contracts'"
            :schema="docSchema"
            :display="{
              titleKey: 'title',
              docKey: 'document',
              notesKey: 'notesHtml',
            }"
            :lang="currentLocale"
          />
        </div>
      </div>

      <template #code>
        <CodeBlock :code="displayOrderCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: With Tooltip & Custom Icon -->
    <DemoSection
      title="With Schema Tooltip & Icon"
      description="Displays guidance beside the repeater collection label."
    >
      <ArrayObjectInput
        v-model="variantRows"
        :label="isIndonesian ? 'Variasi Produk' : 'Product Variations'"
        :tooltip="isIndonesian ? 'Tentukan semua varian SKU dengan pilihan warna dan alokasi stok terverifikasi' : 'Define all SKU variants with verified colorway and stock allocation'"
        tooltip-position="right"
        tooltip-icon="📦"
        :schema="variantSchema"
        :lang="currentLocale"
      />

      <template #code>
        <CodeBlock :code="tooltipCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: Disabled Repeater -->
    <DemoSection
      title="Disabled State"
      description="Read-only repeater display with row additions and edits locked."
    >
      <ArrayObjectInput
        v-model="basicRows"
        :label="isIndonesian ? 'Item Pesanan Terkunci (Hanya-Baca)' : 'Locked Order Items (Read-Only)'"
        :schema="itemSchema"
        disabled
        :lang="currentLocale"
      />

      <template #code>
        <CodeBlock :code="disabledCode" language="vue" />
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
import { ArrayObjectInput } from '@zyvnox/vue-pack/components'
import type { Schema } from '@zyvnox/vue-pack/type'
import { useSiteI18n } from '@/i18n'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const { isIndonesian, currentLocale } = useSiteI18n()

const basicRows = ref([
  { title: 'Server CPU Unit Xeon', quantity: 2, price: 4500000 },
  { title: 'DDR5 32GB ECC RAM', quantity: 4, price: 1200000 },
])

const titleFirstItems = ref([
  {
    title: 'Design System Figma Asset',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=150',
    category: 'UI/UX',
  },
])

const imageFirstItems = ref([
  {
    title: 'Enterprise High-End Workstation',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=150',
    stock: 12,
  },
])

const fileHtmlItems = ref([
  {
    title: 'Master Service Agreement 2026',
    document: 'https://example.com/files/contract_v2.pdf',
    notesHtml: '<p><span class="zyvnox-text-emerald-500 font-bold">✓ Approved</span> by Legal Dept</p>',
  },
])

const variantRows = ref([
  { sku: 'SKU-RED-M', color: 'Crimson Red', size: 'M' },
])

const mediaSchema = computed<Schema>(() => ({
  title: {
    type: 'text',
    label: isIndonesian.value ? 'Judul Item' : 'Item Title',
    required: true,
  },
  image: {
    type: 'image',
    label: isIndonesian.value ? 'Foto / Thumbnail' : 'Photo / Thumbnail',
    required: true,
  },
}))

const docSchema = computed<Schema>(() => ({
  title: {
    type: 'text',
    label: isIndonesian.value ? 'Nama Berkas' : 'File Name',
    required: true,
  },
  document: {
    type: 'text',
    label: isIndonesian.value ? 'URL Dokumen / File (PDF, DOCX)' : 'Document URL (PDF, DOCX)',
    required: true,
  },
  notesHtml: {
    type: 'text',
    label: isIndonesian.value ? 'Catatan Format HTML' : 'HTML Formatted Notes',
  },
}))

const itemSchema = computed<Schema>(() => ({
  title: {
    type: 'text',
    label: isIndonesian.value ? 'Nama Item' : 'Item Name',
    required: true,
    placeholder: isIndonesian.value ? 'Min. 3 karakter' : 'Min. 3 characters',
    validate: { minLength: 3, maxLength: 50 },
  },
  quantity: {
    type: 'number',
    label: isIndonesian.value ? 'Kuantitas' : 'Quantity',
    required: true,
    validate: { min: 1, max: 500, integer: true },
  },
  price: {
    type: 'currency',
    label: isIndonesian.value ? 'Harga Satuan (IDR)' : 'Unit Price',
    required: true,
    validate: { min: 1000 },
  },
}))

const variantSchema = computed<Schema>(() => ({
  sku: {
    type: 'text',
    label: isIndonesian.value ? 'Kode SKU' : 'SKU Code',
    required: true,
    validate: { minLength: 4 },
  },
  color: {
    type: 'text',
    label: isIndonesian.value ? 'Pilihan Warna' : 'Colorway',
    required: true,
  },
  size: {
    type: 'select',
    label: isIndonesian.value ? 'Ukuran' : 'Size',
    options: ['S', 'M', 'L', 'XL'],
    required: true,
  },
}))

const basicCode = `<template>
  <ArrayObjectInput
    v-model="items"
    label="Purchase Order Items"
    :schema="itemSchema"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrayObjectInput } from '@zyvnox/vue-pack/components'
import type { Schema } from '@zyvnox/vue-pack/type'

const items = ref([
  { title: 'Server CPU Unit', quantity: 2, price: 4500000 },
])

const itemSchema: Schema = {
  title: {
    type: 'text',
    label: 'Item Name',
    required: true,
    validate: { minLength: 3 },
  },
  quantity: {
    type: 'number',
    label: 'Quantity',
    required: true,
    validate: { min: 1, max: 500, integer: true },
  },
  price: {
    type: 'currency',
    label: 'Unit Price',
    required: true,
    validate: { min: 1000 },
  },
}
<\/script>`

const tooltipCode = `<ArrayObjectInput
  v-model="variants"
  label="Product Variations"
  tooltip="Define SKU variants with stock allocation"
  tooltip-position="right"
  tooltip-icon="📦"
  :schema="variantSchema"
/>`

const disabledCode = `<ArrayObjectInput
  v-model="items"
  label="Locked Order Items"
  :schema="itemSchema"
  disabled
/>`

const displayOrderCode = `<!-- 1. Judul dulu baru Gambar (Title first, then image) -->
<ArrayObjectInput
  v-model="items"
  label="Portfolio Items"
  :schema="mediaSchema"
  :display="{
    titleKey: 'title',
    imageKey: 'image',
  }"
/>

<!-- 2. Gambar dulu baru Judul (Image first, then title) -->
<ArrayObjectInput
  v-model="items"
  label="Product Catalog"
  :schema="mediaSchema"
  :display="{
    imageKey: 'image',
    titleKey: 'title',
  }"
/>

<!-- 3. Dokumen (PDF) & Catatan Berformat HTML (Document & HTML notes) -->
<ArrayObjectInput
  v-model="contracts"
  label="Project Contracts"
  :schema="contractSchema"
  :display="{
    titleKey: 'title',
    docKey: 'document',
    notesKey: 'notesHtml',
  }"
/>`

const propsList: PropDef[] = [
  { name: 'modelValue', type: 'any[]', default: '[]', description: 'v-model array of row records' },
  { name: 'schema', type: 'Schema', required: true, description: 'Declarative schema for fields rendered inside each row modal' },
  { name: 'label', type: 'string', description: 'Repeater section title header' },
  { name: 'display', type: 'ArrayObjectDisplayConfig', description: 'Konfigurasi urutan dan format maksimal 3 slot tampilan baris (contoh: { titleKey: "title", imageKey: "image" } atau { imageKey: "image", titleKey: "title" }). Mendukung gambar, berkas/dokumen (PDF, DOCX, TXT), HTML tersanitasi, lencana harga/kuantitas, dan teks biasa.' },
  { name: 'id', type: 'string', default: 'auto UID', description: 'Unique identifier for the repeater element' },
  { name: 'isUpdate', type: 'boolean', default: 'false', description: 'Whether the parent form is in update/edit mode' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Locks the list and disables add, edit, and remove buttons' },
  { name: 'error', type: 'string', description: 'Error message banner displayed below the repeater' },
  { name: 'tooltip', type: 'string', description: 'Guidance text displayed beside the label on hover' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Position of the tooltip popover' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon symbol rendered beside the label when tooltip is set' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Active language code for buttons and modal dialogs' },
]

const eventsList: EventDef[] = [
  { name: 'update:modelValue', type: '(value: any[], key: string) => void', description: 'Emitted when rows are added, edited, or removed' },
  { name: 'create:Options', type: '(key: string, options: string | number, view: string) => void', description: 'Emitted when dynamically creating options inside select fields in row modals' },
]
</script>
