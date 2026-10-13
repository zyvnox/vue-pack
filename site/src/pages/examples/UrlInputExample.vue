<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        UrlInput
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Web URL address input component with real-time protocol & URI parsing validation, custom tooltips, and i18n support.
      </p>
    </header>

    <!-- Demo 1: Basic URL -->
    <DemoSection title="Basic URL Input" description="Input with web address validation and link icon indicator.">
      <UrlInput
        v-model="basic"
        label="Company Homepage"
        placeholder="https://zyvnox.com"
      />
      <div class="text-xs text-slate-500">
        Bound Value: <code class="font-mono font-bold">{{ basic || '(empty)' }}</code>
      </div>

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Real-time URL RFC Validation -->
    <DemoSection
      title="Real-Time URI Protocol Validation"
      description="Validates valid internet URL format (requires valid protocol e.g. https:// and hostname)."
    >
      <UrlInput
        v-model="validatedVal"
        label="Webhook Endpoint Target"
        placeholder="https://api.zyvnox.com/v1/webhook"
        :validate="true"
      />
      <div class="text-xs text-slate-500 space-y-1">
        <div>Current Value: <code class="font-mono font-bold">{{ validatedVal || '(empty)' }}</code></div>
        <div class="text-slate-400 dark:text-slate-500">
          Enforces standard web URI format (valid protocol, host domain, path).
        </div>
      </div>

      <template #code>
        <CodeBlock :code="validatedCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: With Tooltip -->
    <DemoSection title="With Schema Tooltip" description="Displays URL protocol requirement hints via tooltip.">
      <UrlInput
        v-model="withTooltip"
        label="Public Documentation Repo"
        tooltip="Must begin with https:// and point to public repository"
        tooltip-position="right"
        placeholder="https://github.com/..."
      />

      <template #code>
        <CodeBlock :code="tooltipCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 4: Error & Disabled States -->
    <DemoSection title="External Error & Disabled States" description="Visual invalid URL alerts and read-only links.">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <UrlInput
          v-model="errorVal"
          label="Callback URL"
          :error="'Callback URL must use secure HTTPS protocol'"
        />
        <UrlInput
          v-model="disabledVal"
          label="Canonical Base URL (Read-Only)"
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
import { UrlInput } from '@zyvnox/vue-pack/components'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const basic = ref('https://zyvnox.com')
const validatedVal = ref('not-a-valid-url')
const withTooltip = ref('https://github.com/zyvnox/vue-pack')
const errorVal = ref('http://insecure.internal')
const disabledVal = ref('https://api.zyvnox.com')

const basicCode = `<template>
  <UrlInput
    v-model="website"
    label="Company Homepage"
    placeholder="https://zyvnox.com"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UrlInput } from '@zyvnox/vue-pack/components'

const website = ref('https://zyvnox.com')
<\/script>`

const validatedCode = `<UrlInput
  v-model="webhookUrl"
  label="Webhook Endpoint Target"
  placeholder="https://api.zyvnox.com/v1/webhook"
  :validate="true"
/>`

const tooltipCode = `<UrlInput
  v-model="repoUrl"
  label="Documentation Repo"
  tooltip="Must begin with https://"
  tooltip-position="right"
/>`

const errorCode = `<UrlInput
  v-model="callback"
  label="Callback URL"
  error="Callback URL must use HTTPS"
/>
<UrlInput
  v-model="baseUrl"
  label="Canonical Base URL"
  disabled
/>`

const propsList: PropDef[] = [
  { name: 'modelValue', type: 'string', required: true, description: 'Reactive URL string v-model' },
  { name: 'label', type: 'string', required: true, description: 'Input label title' },
  { name: 'id', type: 'string', default: 'setUID()', description: 'Unique DOM element ID' },
  { name: 'placeholder', type: 'string', description: 'Placeholder hint text (defaults to i18n label)' },
  { name: 'validate', type: 'boolean', default: 'true', description: 'Enables automatic URL URI parser validation' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Locks URL input' },
  { name: 'error', type: 'string', description: 'External validation error message from parent form/schema' },
  { name: 'tooltip', type: 'string', description: 'Custom tooltip guidance text' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Tooltip popup location' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon character or emoji displayed for tooltip trigger' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Language code' },
]

const eventsList: EventDef[] = [
  { name: 'update:modelValue', type: '(value: string, id: string) => void', description: 'Emitted upon typing' },
  { name: 'push:error', type: '(message: string, id: string) => void', description: 'Emitted when URL fails format verification' },
  { name: 'remove:error', type: '(id: string) => void', description: 'Emitted when URL is valid' },
]
</script>
