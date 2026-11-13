<template>
  <div class="space-y-8">
    <DocHeader />

    <!-- Demo 1: Basic 5-Star Rating -->
    <DemoSection title="Standard 5-Star Rating" description="Interactive 5-star rating widget with toggle reset.">
      <RateInput
        v-model="basic"
        :label="isIndonesian ? 'Kepuasan Produk' : 'Product Satisfaction'"
        :lang="currentLocale"
      />
      <div class="text-xs text-slate-500">
        {{ isIndonesian ? 'Skor Penilaian:' : 'Rating Score:' }} <code class="font-mono font-bold">{{ basic }} / 5 {{ isIndonesian ? 'bintang' : 'stars' }}</code>
      </div>

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: 10-Star Scale via validate.max -->
    <DemoSection
      title="Extended 10-Star Scale (`validate.max: 10`)"
      description="Configures an extended 10-point satisfaction evaluation scale using the validate configuration."
    >
      <RateInput
        v-model="tenStar"
        :label="isIndonesian ? 'Skor Rekomendasi (NPS)' : 'Net Promoter Score (NPS)'"
        :tooltip="isIndonesian ? 'Nilai kemungkinan untuk merekomendasikan pada skala 1 hingga 10' : 'Rate likelihood to recommend on a scale from 1 to 10'"
        tooltip-position="right"
        :lang="currentLocale"
        :validate="{
          max: 10,
        }"
      />
      <div class="text-xs text-slate-500">
        {{ isIndonesian ? 'Skor Terpilih:' : 'Selected Score:' }} <code class="font-mono font-bold">{{ tenStar }} / 10 {{ isIndonesian ? 'bintang' : 'stars' }}</code>
      </div>

      <template #code>
        <CodeBlock :code="tenStarCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: Error & Disabled States -->
    <DemoSection title="External Error & Disabled States" description="Visual invalid review alerts and read-only ratings.">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RateInput
          v-model="errorVal"
          :label="isIndonesian ? 'Penilaian Vendor Wajib' : 'Required Vendor Assessment'"
          required
          :error="isIndonesian ? 'Penilaian kepuasan wajib diisi sebelum finalisasi kontrak' : 'Assessment rating is mandatory before finalizing contract'"
          :lang="currentLocale"
        />
        <RateInput
          v-model="disabledVal"
          :label="isIndonesian ? 'Rata-rata Rating Historis (Hanya-Baca)' : 'Historical Average Rating (Read-Only)'"
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
import { ref } from 'vue'
import { RateInput } from '@zyvnox/vue-pack/components'
import { useSiteI18n } from '@/i18n'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const { isIndonesian, currentLocale } = useSiteI18n()

const basic = ref(4)
const tenStar = ref(8)
const errorVal = ref(0)
const disabledVal = ref(5)

const basicCode = `<template>
  <RateInput
    v-model="rating"
    label="Product Satisfaction"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RateInput } from '@zyvnox/vue-pack/components'

const rating = ref(4)
<\/script>`

const tenStarCode = `<RateInput
  v-model="npsScore"
  label="Net Promoter Score"
  :validate="{
    max: 10,
  }"
/>`

const errorCode = `<RateInput
  v-model="vendorRating"
  label="Vendor Assessment"
  required
  error="Assessment rating is mandatory"
/>
<RateInput
  v-model="avgRating"
  label="Historical Rating"
  disabled
/>`

const propsList: PropDef[] = [
  { name: 'modelValue', type: 'number', required: true, description: 'Reactive numeric rating score v-model' },
  { name: 'label', type: 'string', required: true, description: 'Label title displayed above stars' },
  { name: 'id', type: 'string', default: 'setUID()', description: 'Unique DOM element ID' },
  {
    name: 'validate',
    type: '{ min?: number, max?: number }',
    description: 'Rating scale boundary. "max" controls total number of rendered stars (defaults to 5, can be set to 10).',
  },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Locks star rating and enters read-only display mode' },
  { name: 'error', type: 'string | string[]', description: 'External validation error message(s) from parent form/schema' },
  { name: 'tooltip', type: 'string', description: 'Custom tooltip guidance text' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Tooltip popup location' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon character or emoji displayed for tooltip trigger' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Language code' },
]

const eventsList: EventDef[] = [
  { name: 'update:modelValue', type: '(value: number | null, id: string) => void', description: 'Emitted upon star click (clicking active star resets to 0)' },
]
</script>
