<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        ModalDetailData
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Schema-driven read-only data detail dialog component for inspecting complete record contents formatted cleanly.
      </p>
    </header>

    <!-- Demo 1: Basic Modal Detail -->
    <DemoSection title="Read-Only Record Detail Dialog" description="Click the button to open a detailed view of a customer account.">
      <div class="flex items-center gap-4">
        <button
          type="button"
          @click="showModal = true"
          class="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors"
        >
          Inspect Customer Details
        </button>
      </div>

      <ModalDetailData
        v-if="showModal"
        :schema="detailSchema"
        :form-data="customerRecord"
        :value-null-view="true"
        title="Customer Record #CUST-982"
        @close="showModal = false"
      />

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
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
import { ModalDetailData } from '@zyvnox/vue-pack/components'
import type { Schema } from '@zyvnox/vue-pack/type'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable from '@/components/PropsTable.vue'
import EventsTable from '@/components/EventsTable.vue'

const showModal = ref(false)

const customerRecord = {
  name: 'Eleanor Vance',
  company: 'Hill House Architecture Ltd.',
  email: 'eleanor@hillhouse.design',
  tier: 'Enterprise Platinum',
  registeredAt: '2025-04-12',
}

const detailSchema: Schema = {
  name: { type: 'text', label: 'Full Legal Name' },
  company: { type: 'text', label: 'Organization / Company' },
  email: { type: 'text', label: 'Primary Contact Email' },
  tier: { type: 'text', label: 'Subscription Plan' },
  registeredAt: { type: 'date', label: 'Member Since' },
}

const basicCode = `<template>
  <button @click="show = true">Inspect Details</button>

  <ModalDetailData
    v-if="show"
    :schema="schema"
    :form-data="customer"
    title="Customer Record #123"
    @close="show = false"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ModalDetailData } from '@zyvnox/vue-pack/components'
import type { Schema } from '@zyvnox/vue-pack/type'

const show = ref(false)
const customer = { name: 'Eleanor', email: 'eleanor@example.com' }
const schema: Schema = {
  name: { type: 'text', label: 'Name' },
  email: { type: 'text', label: 'Email' },
}
<\/script>`

const propsList = [
  { name: 'schema', type: 'Schema', required: true, description: 'Schema mapping defining how fields are formatted' },
  { name: 'formData', type: 'Record<string, any>', required: true, description: 'Record data object to display' },
  { name: 'title', type: 'string', default: "'Detail Data'", description: 'Dialog title text' },
  { name: 'closeText', type: 'string', default: "'Close'", description: 'Label for close action button' },
  { name: 'valueNullView', type: 'string', default: "'-'", description: 'Placeholder symbol for null or empty values' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Active language code' },
]

const eventsList = [
  { name: 'close', type: '() => void', description: 'Emitted when user dismisses the dialog' },
]
</script>

