<template>
  <div class="space-y-8">
    <DocHeader />

    <!-- Demo 1: Basic Toggle -->
    <DemoSection title="Basic Boolean Switch" description="Toggles a true/false boolean state.">
      <div class="flex items-center justify-between max-w-md">
        <ToggleInput
          v-model="basic"
          :label="isIndonesian ? 'Aktifkan Notifikasi Push' : 'Enable Push Notifications'"
          :lang="currentLocale"
        />
        <span class="text-xs font-mono font-semibold" :class="basic ? 'text-emerald-500' : 'text-slate-400'">
          {{ basic ? (isIndonesian ? 'AKTIF' : 'ACTIVE') : (isIndonesian ? 'NONAKTIF' : 'DISABLED') }}
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
        :label="isIndonesian ? 'Autentikasi Dua Faktor Ketat (2FA)' : 'Strict Two-Factor Authentication (2FA)'"
        :tooltip="isIndonesian ? 'Memerlukan kunci keamanan perangkat keras atau aplikasi TOTP pada setiap sesi browser baru' : 'Requires hardware security key or TOTP app on every new browser session'"
        tooltip-position="right"
        :lang="currentLocale"
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
          :label="isIndonesian ? 'Penerapan Wajib SSL' : 'Mandatory SSL Enforcement'"
          disabled
          :lang="currentLocale"
        />
        <ToggleInput
          v-model="disabledOff"
          :label="isIndonesian ? 'Fitur Eksperimental Beta (Terkunci)' : 'Beta Feature Flag (Locked)'"
          disabled
          :lang="currentLocale"
        />
      </div>

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
import CodeBlock from '@/components/CodeBlock.vue'
import DemoSection from '@/components/DemoSection.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import { useSiteI18n } from '@/i18n'
import { ToggleInput } from '@zyvnox/vue-pack/components'
import { ref } from 'vue'

const { isIndonesian, currentLocale } = useSiteI18n()

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
