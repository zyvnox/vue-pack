<template>
  <div class="space-y-8">
    <DocHeader />

    <!-- Demo 1: Basic Telephone -->
    <DemoSection title="Basic Telephone Input" description="Phone number input with mobile dialpad assistance.">
      <TelInput
        v-model="basic"
        :label="isIndonesian ? 'Nomor Ponsel Utama' : 'Primary Mobile Phone'"
        placeholder="0812-3456-7890"
        :lang="currentLocale"
      />
      <div class="text-xs text-slate-500">
        {{ isIndonesian ? 'Nilai Terikat:' : 'Bound Value:' }} <code class="font-mono font-bold">{{ basic || (isIndonesian ? '(kosong)' : '(empty)') }}</code>
      </div>

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Real-time Phone Format Validation -->
    <DemoSection
      title="Real-Time Telephone Validation"
      description="Validates international / domestic phone format (digits, plus prefix, hyphens, min 7 - max 20 chars)."
    >
      <TelInput
        v-model="validatedVal"
        :label="isIndonesian ? 'WhatsApp Kontak Darurat' : 'Emergency Contact WhatsApp'"
        placeholder="+62 812-3456-7890"
        :lang="currentLocale"
      />
      <div class="text-xs text-slate-500 space-y-1">
        <div>{{ isIndonesian ? 'Nilai Saat Ini:' : 'Current Value:' }} <code class="font-mono font-bold">{{ validatedVal || (isIndonesian ? '(kosong)' : '(empty)') }}</code></div>
        <div class="text-slate-400 dark:text-slate-500">
          {{ isIndonesian ? 'Menerapkan skema penomoran telekomunikasi standar:' : 'Enforces standard telecom numbering schema:' }} <code class="font-mono">[0-9+\-\s()]{7,20}</code>.
        </div>
      </div>

      <template #code>
        <CodeBlock :code="validatedCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: With Tooltip -->
    <DemoSection title="With Schema Tooltip" description="Displays country code calling guidance via tooltip.">
      <TelInput
        v-model="withTooltip"
        :label="isIndonesian ? 'Hotline Sentral Perusahaan' : 'Corporate Switchboard Hotline'"
        :tooltip="isIndonesian ? 'Sertakan kode awalan panggilan negara (misal +62 untuk Indonesia)' : 'Include country dialing prefix code (e.g. +62 for Indonesia)'"
        tooltip-position="right"
        placeholder="+62 21 555-0199"
        :lang="currentLocale"
      />

      <template #code>
        <CodeBlock :code="tooltipCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 4: Error & Disabled States -->
    <DemoSection title="External Error & Disabled States" description="Visual invalid carrier alerts and read-only telephone views.">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TelInput
          v-model="errorVal"
          :label="isIndonesian ? 'Ekstensi Saluran Langsung' : 'Direct Line Extension'"
          :error="isIndonesian ? 'Kode area harus cocok dengan registrasi kantor regional' : 'Area code must match regional office registration'"
          :lang="currentLocale"
        />
        <TelInput
          v-model="disabledVal"
          :label="isIndonesian ? 'Layanan Bebas Pulsa (Hanya-Baca)' : 'Toll-Free Support Line (Read-Only)'"
          disabled
          :lang="currentLocale"
        />
      </div>

      <template #code>
        <CodeBlock :code="errorCode" language="vue" />
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
import { TelInput } from '@zyvnox/vue-pack/components'
import { ref } from 'vue'

const { isIndonesian, currentLocale } = useSiteI18n()

const basic = ref('0812-3456-7890')
const validatedVal = ref('123')
const withTooltip = ref('+62 21 555-0199')
const errorVal = ref('+1 800 555-0100')
const disabledVal = ref('0800-1-SUPPORT')

const basicCode = `<template>
  <TelInput
    v-model="phone"
    label="Primary Mobile Phone"
    placeholder="0812-3456-7890"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TelInput } from '@zyvnox/vue-pack/components'

const phone = ref('0812-3456-7890')
<\/script>`

const validatedCode = `<TelInput
  v-model="phone"
  label="Emergency Contact WhatsApp"
  placeholder="+62 812-3456-7890"
/>`

const tooltipCode = `<TelInput
  v-model="hotline"
  label="Corporate Switchboard Hotline"
  tooltip="Include country dialing prefix code"
  tooltip-position="right"
/>`

const errorCode = `<TelInput
  v-model="extension"
  label="Direct Line Extension"
  error="Area code must match regional office"
/>
<TelInput
  v-model="supportLine"
  label="Toll-Free Support Line"
  disabled
/>`

const propsList: PropDef[] = [
  { name: 'modelValue', type: 'string', required: true, description: 'Reactive telephone string v-model' },
  { name: 'label', type: 'string', required: true, description: 'Input label title' },
  { name: 'id', type: 'string', default: 'setUID()', description: 'Unique DOM element ID' },
  { name: 'placeholder', type: 'string', default: "'0812-3456-7890'", description: 'Placeholder hint text' },
  { name: 'validate', type: 'Record<string, any>', description: 'Client-side validation rules (regex format checking)' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Locks phone input' },
  { name: 'error', type: 'string | string[]', description: 'External validation error message(s) from parent form/schema' },
  { name: 'tooltip', type: 'string', description: 'Custom tooltip guidance text' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Tooltip popup position' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon character or emoji displayed for tooltip trigger' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Language code' },
]

const eventsList: EventDef[] = [
  { name: 'update:modelValue', type: '(value: string, id: string) => void', description: 'Emitted upon phone number typing' },
  { name: 'push:error', type: '(errors: string[], id: string) => void', description: 'Emitted when phone number format violates regex' },
  { name: 'remove:error', type: '(id: string) => void', description: 'Emitted when phone number format is valid' },
]
</script>
