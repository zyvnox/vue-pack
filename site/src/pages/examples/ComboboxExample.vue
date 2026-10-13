<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        SelectedOptions (Searchable Combobox)
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Searchable dropdown selection component with custom key/label option mapping, dynamic inline modal item creation (`withCreate`), custom tooltips, and i18n support.
      </p>
    </header>

    <!-- Demo 1: Basic Combobox -->
    <DemoSection title="Basic Searchable Select" description="Select from a list of predefined options with instant filtering.">
      <SelectedOptions
        v-model="basic"
        label="Department"
        :options="departments"
        :options-view="departments"
        placeholder="Select department..."
      />
      <div class="text-xs text-slate-500">
        Selected Value: <code class="font-mono font-bold">{{ basic || '(none)' }}</code>
      </div>

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: With Tooltip & Custom Option Views -->
    <DemoSection title="With Tooltip & Custom Key/Label Mappings" description="Maps internal keys to user-friendly display labels with tooltip guidance.">
      <SelectedOptions
        v-model="withTooltip"
        label="Access Level"
        tooltip="Select minimum security clearance required for this role"
        tooltip-position="right"
        :options="['read', 'write', 'admin', 'owner']"
        :options-view="['Read-Only (Viewer)', 'Standard Write (Editor)', 'Administrator', 'Organization Owner']"
        placeholder="Choose clearance..."
      />
      <div class="text-xs text-slate-500">
        Selected Key: <code class="font-mono font-bold">{{ withTooltip || '(none)' }}</code>
      </div>

      <template #code>
        <CodeBlock :code="tooltipCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: Error & Disabled States -->
    <DemoSection title="External Error & Disabled States" description="Visual invalid feedback and locked selection menus.">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectedOptions
          v-model="errorVal"
          label="Server Region"
          :options="['us-east-1', 'eu-west-1', 'ap-southeast-1']"
          :options-view="['us-east-1', 'eu-west-1', 'ap-southeast-1']"
          required
          :error="'Please select a hosting region'"
        />
        <SelectedOptions
          v-model="disabledVal"
          label="Default Billing Currency (Read-Only)"
          :options="['USD', 'EUR', 'IDR']"
          :options-view="['USD', 'EUR', 'IDR']"
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
import { SelectedOptions } from '@zyvnox/vue-pack/components'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const basic = ref('')
const withTooltip = ref('read')
const errorVal = ref('')
const disabledVal = ref('USD')

const departments = [
  'Engineering',
  'Product Design',
  'Marketing',
  'Human Resources',
  'Finance & Legal',
  'Customer Support',
]

const basicCode = `<template>
  <SelectedOptions
    v-model="dept"
    label="Department"
    :options="['Engineering', 'Design', 'Marketing']"
    :options-view="['Engineering', 'Design', 'Marketing']"
    placeholder="Select department..."
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SelectedOptions } from '@zyvnox/vue-pack/components'

const dept = ref('')
<\/script>`

const tooltipCode = `<SelectedOptions
  v-model="clearance"
  label="Access Level"
  tooltip="Select minimum security clearance"
  tooltip-position="right"
  :options="['read', 'write', 'admin', 'owner']"
  :options-view="['Read-Only (Viewer)', 'Standard Write (Editor)', 'Administrator', 'Organization Owner']"
/>`

const errorCode = `<SelectedOptions
  v-model="region"
  label="Server Region"
  :options="['us-east-1', 'eu-west-1']"
  :options-view="['us-east-1', 'eu-west-1']"
  required
  error="Please select a hosting region"
/>
<SelectedOptions
  v-model="currency"
  label="Default Billing Currency"
  :options="['USD', 'EUR']"
  :options-view="['USD', 'EUR']"
  disabled
/>`

const propsList: PropDef[] = [
  { name: 'modelValue', type: 'string | number | null', required: true, description: 'Reactive selected value v-model' },
  { name: 'label', type: 'string', required: true, description: 'Dropdown title label' },
  { name: 'id', type: 'string', default: 'setUID()', description: 'Unique DOM element ID' },
  { name: 'options', type: '(string | number)[]', required: true, description: 'Array of option keys or stored values' },
  { name: 'optionsView', type: '(string | number)[]', required: true, description: 'Array of human-readable display labels mapped index-to-index with options' },
  { name: 'optionsIsNumber', type: 'boolean', default: 'false', description: 'Casts option values to numeric types' },
  { name: 'placeholder', type: 'string', description: 'Placeholder search hint text' },
  {
    name: 'withCreate',
    type: '{ DB_NAME?: string, schema: Schema, endPoint: string, validation?: Record<string, any>, submitOption?: SubmitAuthOptionMap<Item>, keys?: { optionsKey: string, optionsViewKey: string } }',
    description: 'Enables dynamic item creation dialog modal directly inside dropdown menu.',
  },
  { name: 'demo', type: 'boolean', default: 'false', description: 'Enables client-side mock creation using IndexedDB storage' },
  { name: 'required', type: 'boolean', default: 'false', description: 'Displays required asterisk indicator' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Locks combobox menu and disables selection' },
  { name: 'error', type: 'string', description: 'External validation error message from parent form/schema' },
  { name: 'tooltip', type: 'string', description: 'Custom tooltip guidance text' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Tooltip popup location' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon character or emoji displayed for tooltip trigger' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Language code' },
]

const eventsList: EventDef[] = [
  { name: 'update:modelValue', type: '(value: string | number | null, id: string) => void', description: 'Emitted upon option selection' },
  { name: 'create:Options', type: '(key: string, option: string | number, view: string) => void', description: 'Emitted when a new option item is dynamically created via withCreate modal' },
]
</script>
