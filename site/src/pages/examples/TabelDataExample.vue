<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        TabelData (Enterprise CRUD Datatable)
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Enterprise schema-driven datatable suite with multi-column sorting, text search, pagination, custom actions, and seamless FormModal CRUD integration backed by dual-layer validation.
      </p>
    </header>

    <!-- Architecture Explanation: How TabelData & FormModal Connect via Validation -->
    <div class="p-5 rounded-2xl border border-indigo-200 bg-indigo-50/70 dark:border-indigo-800 dark:bg-indigo-950/30 text-xs text-indigo-900 dark:text-indigo-200 space-y-3 shadow-sm">
      <div class="flex items-center gap-2 font-bold text-sm text-indigo-950 dark:text-indigo-100">
        <span class="text-base">🔄</span>
        <span>How TabelData, FormModal, and Validation Connect</span>
      </div>
      <p class="leading-relaxed">
        <code class="font-bold">TabelData</code> does not manage forms directly in table cells. Instead, it delegates all record creation and editing to <code class="font-bold">FormModal</code>, using a connected two-layer validation architecture:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
        <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/60 shadow-xs">
          <div class="font-bold text-indigo-600 dark:text-indigo-400 mb-1 flex items-center gap-1.5">
            <span>1️⃣</span> Layer 1: Client-Side Field Validation (FormModal)
          </div>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
            When clicking <code class="font-semibold">+ Tambah Data</code> or <code class="font-semibold">Edit</code>, <code class="font-bold">TabelData</code> passes <code class="font-mono">base.schema.create / update</code> to <code class="font-bold">FormModal</code>. Each field's <code class="font-mono">:validate</code> rules (<code class="font-mono">minLength</code>, <code class="font-mono">min</code>, <code class="font-mono">integer</code>, etc.) run in real time, displaying immediate visual error cues and preventing modal submission if invalid.
          </p>
        </div>

        <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:indigo-900/60 shadow-xs">
          <div class="font-bold text-purple-600 dark:text-purple-400 mb-1 flex items-center gap-1.5">
            <span>2️⃣</span> Layer 2: Pipeline Schema Validation (Zod)
          </div>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
            When the user clicks Submit, <code class="font-bold">FormModal</code> emits <code class="font-mono">@submit(formData)</code> to <code class="font-bold">TabelData</code>. <code class="font-bold">TabelData</code>'s <code class="font-mono">submitFormData</code> then validates the payload against <code class="font-mono">validation.create</code> or <code class="font-mono">validation.update</code> (Zod schema). If valid, it persists to IndexedDB (or sends to backend) and refreshes the table.
          </p>
        </div>
      </div>
    </div>

    <!-- Demo 1: Interactive Datatable -->
    <DemoSection
      title="Live Interactive Datatable with FormModal CRUD"
      description="Click '+ Tambah Data' or 'Edit' on any row to open FormModal with real-time field validation and Zod schema validation."
    >
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div class="text-xs text-slate-500">
            Source: IndexedDB Store (<code class="font-mono">"products"</code>) | Mode: Demo
          </div>
          <button
            type="button"
            @click="reloadTable"
            class="px-3 py-1.5 text-xs font-semibold rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
          >
            🔄 Refresh Table
          </button>
        </div>

        <div class="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <TabelData
            :key="tableKey"
            :base="tableBaseConfig"
            :validation="tableValidation"
            :pagination="paginationConfig"
            :custom-actions="customActions"
            :demo="true"
            :end-points="demoEndpoints"
            @customAction="handleCustomAction"
          />
        </div>

        <!-- Raw Inspector Modal -->
        <div
          v-if="inspectedItem"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          @click.self="inspectedItem = null"
        >
          <div class="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 class="font-bold text-slate-900 dark:text-white text-sm">
                🔍 Row Inspector: #{{ inspectedItem.id }}
              </h3>
              <button
                type="button"
                @click="inspectedItem = null"
                class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm"
              >
                ✕
              </button>
            </div>
            <pre class="p-4 rounded-xl bg-slate-950 text-emerald-400 font-mono text-xs overflow-x-auto max-h-72">{{ JSON.stringify(inspectedItem, null, 2) }}</pre>
            <div class="flex justify-end">
              <button
                type="button"
                @click="inspectedItem = null"
                class="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <template #code>
        <CodeBlock :code="datatableCode" language="vue" />
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
import { ref, onMounted } from 'vue'
import { z } from 'zod'
import { TabelData } from '@zyvnox/vue-pack/components'
import { saveToIndexedDB } from '@zyvnox/vue-pack/indexedDB'
import type { BaseConfig, TabelValidationSchema, TabelPagination, CustomAction } from '@zyvnox/vue-pack/type'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const tableKey = ref(0)
const inspectedItem = ref<any>(null)

const reloadTable = () => {
  tableKey.value++
}

// Seed initial mock records into IndexedDB if needed
onMounted(async () => {
  const seedRecords = [
    { id: 1, name: 'DHT22 Temperature Sensor', category: 'Sensors', price: 45000, stock: 120, rating: 5 },
    { id: 2, name: 'ESP32 Microcontroller V4', category: 'Controllers', price: 85000, stock: 85, rating: 5 },
    { id: 3, name: 'SG90 Micro Servo 9g', category: 'Actuators', price: 18000, stock: 240, rating: 4 },
    { id: 4, name: 'HC-SR04 Ultrasonic Distance', category: 'Sensors', price: 15000, stock: 95, rating: 4 },
    { id: 5, name: 'Raspberry Pi 4 4GB RAM', category: 'Controllers', price: 950000, stock: 14, rating: 5 },
    { id: 6, name: 'Relay 4-Channel 5V Module', category: 'Actuators', price: 32000, stock: 65, rating: 4 },
    { id: 7, name: 'NRF24L01 Wireless Transceiver', category: 'Network', price: 21000, stock: 150, rating: 3 },
  ]
  try {
    await saveToIndexedDB({ products: seedRecords })
  } catch (err) {
    console.debug('IndexedDB seed notice:', err)
  }
})

// Configuration with both Field Validation (Layer 1) and Zod Schema Validation (Layer 2)
const tableBaseConfig: BaseConfig<any> = {
  source: {
    DB_NAME: 'products',
  },
  schema: {
    global: {
      name: {
        type: 'text',
        label: 'Device Name',
        required: true,
        placeholder: 'Min. 3 characters',
        validate: { minLength: 3, maxLength: 60 },
      },
      category: {
        type: 'select',
        label: 'Category',
        options: ['Sensors', 'Controllers', 'Actuators', 'Network'],
        required: true,
      },
      price: {
        type: 'currency',
        label: 'Unit Price',
        required: true,
        placeholder: 'Min. 1,000 IDR',
        validate: { min: 1000 },
      },
      stock: {
        type: 'number',
        label: 'Stock Inventory',
        required: true,
        placeholder: '0 - 10,000 units',
        validate: { min: 0, max: 10000, integer: true },
      },
      rating: {
        type: 'rate',
        label: 'Quality Rating',
        required: true,
        validate: { min: 1, max: 5 },
      },
    },
  },
  headersTabelDisplay: ['name', 'category', 'price', 'stock', 'rating'],
  dataTabelDisplay: {
    name: { type: 'text', valueKey: 'name' },
    category: { type: 'text', valueKey: 'category' },
    price: { type: 'currency', valueKey: 'price' },
    stock: { type: 'number', valueKey: 'stock' },
    rating: { type: 'rate', valueKey: 'rating' },
  },
  lang: 'en',
}

const tableValidation: TabelValidationSchema<any> = {
  create: z.object({
    name: z.string().min(3, 'Device Name must be at least 3 characters'),
    category: z.string().min(1, 'Category is required'),
    price: z.number().min(1000, 'Price must be at least 1,000'),
    stock: z.number().int().min(0, 'Stock cannot be negative').max(10000),
    rating: z.number().min(1).max(5),
  }) as any,
  update: z.object({
    id: z.union([z.string(), z.number()]).optional(),
    name: z.string().min(3).optional(),
    category: z.string().optional(),
    price: z.number().min(1000).optional(),
    stock: z.number().int().min(0).max(10000).optional(),
    rating: z.number().min(1).max(5).optional(),
  }) as any,
  delete: z.object({ id: z.union([z.string(), z.number()]) }) as any,
  deleteMany: z.object({ ids: z.array(z.union([z.string(), z.number()])) }) as any,
}

const paginationConfig: TabelPagination = {
  itemsPerPage: 5,
  maxVisiblePages: 5,
}

const customActions: CustomAction[] = [
  {
    key: 'inspect',
    label: 'Inspect',
    icon: '🔍',
    class: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200',
  },
]

const demoEndpoints = {
  create: '/api/mock/create',
  update: '/api/mock/update',
  delete: '/api/mock/delete',
  deleteMany: '/api/mock/delete-many',
}

const handleCustomAction = (payload: { key: string; item: any }) => {
  if (payload.key === 'inspect') {
    inspectedItem.value = payload.item
  }
}

const datatableCode = `<template>
  <TabelData
    :base="tableBaseConfig"
    :validation="tableValidation"
    :pagination="{ itemsPerPage: 5 }"
    :demo="true"
    :end-points="demoEndpoints"
    @customAction="onAction"
  />
</template>

<script setup lang="ts">
import { z } from 'zod'
import { TabelData } from '@zyvnox/vue-pack/components'
import type { BaseConfig, TabelValidationSchema } from '@zyvnox/vue-pack/type'

// Layer 1: Schema definition passed to FormModal with field-level validate rules
const tableBaseConfig: BaseConfig<any> = {
  source: { DB_NAME: 'products' },
  schema: {
    global: {
      name: {
        type: 'text',
        label: 'Device Name',
        required: true,
        validate: { minLength: 3, maxLength: 60 },
      },
      price: {
        type: 'currency',
        label: 'Unit Price',
        required: true,
        validate: { min: 1000 },
      },
      stock: {
        type: 'number',
        label: 'Stock',
        required: true,
        validate: { min: 0, integer: true },
      },
      rating: {
        type: 'rate',
        label: 'Rating',
        required: true,
        validate: { min: 1, max: 5 },
      },
    },
  },
  headersTabelDisplay: ['name', 'price', 'stock', 'rating'],
  dataTabelDisplay: {
    name: { type: 'text', valueKey: 'name' },
    price: { type: 'currency', valueKey: 'price' },
    stock: { type: 'number', valueKey: 'stock' },
    rating: { type: 'rate', valueKey: 'rating' },
  },
}

// Layer 2: Final submit pipeline validation evaluated with Zod
const tableValidation: TabelValidationSchema<any> = {
  create: z.object({
    name: z.string().min(3),
    price: z.number().min(1000),
    stock: z.number().int().min(0),
    rating: z.number().min(1).max(5),
  }),
  update: z.object({
    id: z.union([z.string(), z.number()]).optional(),
    name: z.string().min(3).optional(),
    price: z.number().min(1000).optional(),
  }),
}
<\/script>`

const propsList: PropDef[] = [
  { name: 'base', type: 'BaseConfig<T>', required: true, description: 'Table configuration: DB_NAME source, schema definitions (create/update/display/global), table headers, and data mappings' },
  { name: 'validation', type: 'TabelValidationSchema<T>', required: true, description: 'Zod schemas for create, update, delete, and deleteMany submit pipelines' },
  { name: 'pagination', type: 'TabelPagination', default: '{ itemsPerPage: 10 }', description: 'Items per page and visible pagination controls' },
  { name: 'customActions', type: 'CustomAction[]', default: '[]', description: 'Array of custom action buttons injected into row actions' },
  { name: 'demo', type: 'boolean', default: 'false', description: 'Enables client-side mock CRUD simulation persisting to IndexedDB' },
  { name: 'endPoints', type: 'Record<string, string>', description: 'API endpoints for remote server-side CRUD requests' },
  { name: 'submitOption', type: 'SubmitAuthOptionMap<T>', description: 'Authentication credentials (bearer, cookie, custom headers) for submit requests' },
  { name: 'manual', type: '{ create?: boolean, update?: boolean, delete?: boolean, display?: boolean }', description: 'Disables internal FormModal/handlers to emit custom manual events instead' },
  { name: 'keys', type: '{ idKey?: string, nameKey?: string, idsKey?: string }', description: 'Custom key names for record identification' },
]

const eventsList: EventDef[] = [
  { name: 'refreshData', type: '() => void', description: 'Emitted when datatable data is refetched or updated' },
  { name: 'customAction', type: '(payload: { key: string, item: T }) => void', description: 'Emitted when a custom action button is clicked on a row' },
  { name: 'create', type: '() => void', description: 'Emitted when manual.create is true and user clicks Tambah Data' },
  { name: 'edit', type: '(item: T, id: string | number) => void', description: 'Emitted when manual.update is true and user clicks Edit on a row' },
  { name: 'delete', type: '(id: string | number) => void', description: 'Emitted when manual.delete is true and user confirms deletion' },
  { name: 'show', type: '(item: T, id: string | number) => void', description: 'Emitted when manual.display is true and user clicks view detail' },
]
</script>
