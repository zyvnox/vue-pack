<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        TagInput
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Tag chip generator input with keyboard shortcuts (Enter / comma), tag count boundaries (min/max), custom tooltips, and i18n support.
      </p>
    </header>

    <!-- Demo 1: Basic Tags -->
    <DemoSection title="Basic Tag Input" description="Add tags by typing and pressing Enter or comma. Remove with backspace or close icon.">
      <TagInput
        v-model="basic"
        label="Skill Keywords"
        placeholder="Type skill and press Enter..."
      />
      <div class="text-xs text-slate-500">
        Selected Tags: <code class="font-mono font-bold">{{ JSON.stringify(basic) }}</code>
      </div>

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Real-time Min & Max Validation -->
    <DemoSection
      title="Real-Time Validation (Min & Max Tag Count)"
      description="Enforces tag count rules: requires at least 2 tags and at most 5 tags."
    >
      <TagInput
        v-model="validatedTags"
        label="Article Topics"
        placeholder="Add between 2 and 5 topics..."
        :validate="{
          min: 2,
          max: 5,
        }"
      />
      <div class="text-xs text-slate-500 space-y-1">
        <div>Current Tags ({{ validatedTags.length }}): <code class="font-mono font-bold">{{ JSON.stringify(validatedTags) }}</code></div>
        <div class="text-slate-400 dark:text-slate-500">
          Enforces min: 2 tags, max: 5 tags.
        </div>
      </div>

      <template #code>
        <CodeBlock :code="validatedCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: With Tooltip -->
    <DemoSection title="With Schema Tooltip" description="Displays SEO metadata guidelines via tooltip.">
      <TagInput
        v-model="withTooltip"
        label="SEO Meta Keywords"
        tooltip="Enter relevant search index keywords (e.g. vue, reactive, typescript)"
        tooltip-position="right"
      />

      <template #code>
        <CodeBlock :code="tooltipCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 4: Error & Disabled States -->
    <DemoSection title="External Error & Disabled States" description="Visual invalid tag alerts and locked tag chips.">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TagInput
          v-model="errorVal"
          label="Server Role Tags"
          :error="'Production roles must be assigned via IAM policies'"
        />
        <TagInput
          v-model="disabledVal"
          label="System Core Tags (Read-Only)"
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
import { TagInput } from '@zyvnox/vue-pack/components'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const basic = ref<string[]>(['Vue 3', 'TypeScript', 'UnoCSS'])
const validatedTags = ref<string[]>(['SingleTag'])
const withTooltip = ref<string[]>(['frontend', 'library', 'ui-kit'])
const errorVal = ref<string[]>(['root-access'])
const disabledVal = ref<string[]>(['system', 'immutable'])

const basicCode = `<template>
  <TagInput
    v-model="skills"
    label="Skill Keywords"
    placeholder="Type skill and press Enter..."
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TagInput } from '@zyvnox/vue-pack/components'

const skills = ref(['Vue 3', 'TypeScript'])
<\/script>`

const validatedCode = `<TagInput
  v-model="topics"
  label="Article Topics"
  :validate="{
    min: 2,
    max: 5,
  }"
/>`

const tooltipCode = `<TagInput
  v-model="keywords"
  label="SEO Meta Keywords"
  tooltip="Enter relevant search keywords"
  tooltip-position="right"
/>`

const errorCode = `<TagInput
  v-model="roles"
  label="Server Role Tags"
  error="Production roles must be assigned via IAM"
/>
<TagInput
  v-model="coreTags"
  label="System Core Tags"
  disabled
/>`

const propsList: PropDef[] = [
  { name: 'modelValue', type: 'string[]', required: true, description: 'Reactive array of string tag chips' },
  { name: 'label', type: 'string', required: true, description: 'Field label title displayed above tag input' },
  { name: 'id', type: 'string', default: 'setUID()', description: 'Unique DOM element ID' },
  { name: 'placeholder', type: 'string', description: 'Placeholder hint text' },
  {
    name: 'validate',
    type: '{ min?: number, max?: number }',
    description: 'Tag count constraints enforcing minimum and maximum number of allowed tags.',
  },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Locks tag list and disables adding or deleting tags' },
  { name: 'error', type: 'string | string[]', description: 'External validation error message(s) from parent form/schema' },
  { name: 'tooltip', type: 'string', description: 'Custom tooltip guidance text' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Tooltip popup location' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon character or emoji displayed for tooltip trigger' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Language code' },
]

const eventsList: EventDef[] = [
  { name: 'update:modelValue', type: '(value: string[], id: string) => void', description: 'Emitted upon tag addition or removal' },
  { name: 'push:error', type: '(errors: string[], id: string) => void', description: 'Emitted when tag count violates min or max rules' },
  { name: 'remove:error', type: '(id: string) => void', description: 'Emitted when tag count is within valid boundaries' },
]
</script>
