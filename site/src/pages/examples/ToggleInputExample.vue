<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        ToggleInput (Switch)
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Accessible boolean switch toggle component with smooth sliding animation, tooltip support, i18n support, and disabled state styling.
      </p>
    </header>

    <!-- Demo 1: Basic Toggle -->
    <DemoSection title="Basic Boolean Switch" description="Toggles a true/false boolean state.">
      <div class="flex items-center justify-between max-w-md">
        <ToggleInput
          v-model="basic"
          label="Enable Push Notifications"
        />
        <span class="text-xs font-mono" :class="basic ? 'text-emerald-500' : 'text-slate-400'">
          {{ basic ? 'ACTIVE' : 'DISABLED' }}
        </span>
      </div>

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: With Tooltip -->
    <DemoSection title="With Schema Tooltip" description="Explains feature implications beside the toggle switch.">
      <ToggleInput
        v-model="withTooltip"
        label="Strict Two-Factor Authentication (2FA)"
        tooltip="Requires hardware security key or TOTP app on every new browser session"
        tooltip-position="right"
      />

      <template #code>
        <CodeBlock :code="tooltipCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: Disabled State -->
    <DemoSection title="Disabled Toggle States" description="Locked on or off switch states.">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ToggleInput
          v-model="disabledOn"
          label="Mandatory SSL Enforcement"
          disabled
        />
        <ToggleInput
          v-model="disabledOff"
          label="Beta Feature Flag (Locked)"
          disabled
        />
      </div>

      <template #code>
        <CodeBlock :code="disabledCode" language="vue" />
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
import { ToggleInput } from '@zyvnox/vue-pack/components'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const basic = ref(true)
const withTooltip = ref(false)
const disabledOn = ref(true)
const disabledOff = ref(false)

const basicCode = `<template>
  <ToggleInput
    v-model="enabled"
    label="Enable Push Notifications"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ToggleInput } from '@zyvnox/vue-pack/components'

const enabled = ref(true)
<\/script>`

const tooltipCode = `<ToggleInput
  v-model="twoFactor"
  label="Strict Two-Factor Authentication (2FA)"
  tooltip="Requires hardware security key or TOTP app"
  tooltip-position="right"
/>`

const disabledCode = `<ToggleInput
  v-model="sslMandatory"
  label="Mandatory SSL Enforcement"
  disabled
/>`

const propsList: PropDef[] = [
  { name: 'modelValue', type: 'boolean', required: true, description: 'Reactive boolean v-model' },
  { name: 'label', type: 'string', required: true, description: 'Label text beside switch' },
  { name: 'id', type: 'string', default: 'setUID()', description: 'Unique DOM element ID' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables user interactions and locks switch' },
  { name: 'tooltip', type: 'string', description: 'Custom tooltip text' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Tooltip popup location' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon character or emoji displayed for tooltip trigger' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Language code' },
]

const eventsList: EventDef[] = [
  { name: 'update:modelValue', type: '(value: boolean, id: string) => void', description: 'Emitted upon toggle switch click' },
]
</script>
