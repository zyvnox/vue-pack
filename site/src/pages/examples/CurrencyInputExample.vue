<template>
  <div class="space-y-8">
    <DocHeader />

    <!-- Demo 1: Multi-Currency Support ($ , Rp. , yen, etc.) -->
    <DemoSection
      :title="isIndonesian ? 'Dukungan Mata Uang Lengkap ($, Rp., Yen, EUR, GBP)' : 'Global Multi-Currency Support ($, Rp., Yen, EUR, GBP)'"
      :description="isIndonesian ? 'Mendukung berbagai mata uang global (IDR, USD, JPY, EUR, GBP, SAR, dsb.) dengan format simbol dan pemisah ribuan otomatis.' : 'Supports worldwide currencies (IDR, USD, JPY, EUR, GBP, SAR, etc.) with automatic symbol positioning and locale thousands separators.'"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- USD ($) -->
        <CurrencyInput
          v-model="usdVal"
          currency="$"
          :label="isIndonesian ? 'Harga Global (USD - $)' : 'Global Price (USD - $)'"
          placeholder="50"
          :lang="currentLocale"
        />

        <!-- Rupiah (Rp.) -->
        <CurrencyInput
          v-model="idrVal"
          currency="Rp."
          :label="isIndonesian ? 'Harga Domestik (IDR - Rp.)' : 'Domestic Price (IDR - Rp.)'"
          placeholder="750000"
          :lang="currentLocale"
        />

        <!-- Yen (yen / ¥) -->
        <CurrencyInput
          v-model="jpyVal"
          currency="yen"
          :label="isIndonesian ? 'Harga Tokyo (JPY - Yen)' : 'Tokyo Price (JPY - Yen)'"
          placeholder="10000"
          :lang="currentLocale"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <!-- Euro (€) -->
        <CurrencyInput
          v-model="eurVal"
          currency="€"
          :label="isIndonesian ? 'Eropa (EUR - €)' : 'Europe (EUR - €)'"
          placeholder="120"
          :lang="currentLocale"
        />

        <!-- British Pound (£) with Suffix Position -->
        <CurrencyInput
          v-model="gbpVal"
          currency="£"
          currency-position="suffix"
          :label="isIndonesian ? 'Posisi Akhir (Suffix - £)' : 'Suffix Position (£)'"
          placeholder="85"
          :lang="currentLocale"
        />
      </div>

      <div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs font-mono grid grid-cols-2 sm:grid-cols-5 gap-2">
        <div>USD: <span class="text-blue-500 font-bold">${{ usdVal ?? 0 }}</span></div>
        <div>IDR: <span class="text-emerald-500 font-bold">Rp {{ idrVal ?? 0 }}</span></div>
        <div>JPY: <span class="text-amber-500 font-bold">¥{{ jpyVal ?? 0 }}</span></div>
        <div>EUR: <span class="text-purple-500 font-bold">€{{ eurVal ?? 0 }}</span></div>
        <div>GBP: <span class="text-rose-500 font-bold">£{{ gbpVal ?? 0 }}</span></div>
      </div>

      <template #code>
        <CodeBlock :code="multiCurrencyCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Interactive Currency Selector -->
    <DemoSection
      :title="isIndonesian ? 'Pilihan Mata Uang Interaktif (Selectable)' : 'Interactive Currency Selector'"
      :description="isIndonesian ? 'Memungkinkan pengguna memilih mata uang secara langsung lewat dropdown terintegrasi.' : 'Allows users to dynamically switch currencies directly via an integrated input dropdown selector.'"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CurrencyInput
          v-model="selectableVal"
          allow-currency-select
          :currencies="['IDR', 'USD', 'JPY', 'EUR', 'GBP', 'SGD', 'AUD', 'SAR']"
          :currency="activeCurrency"
          :label="isIndonesian ? 'Pilih Mata Uang Pembayaran' : 'Select Payment Currency'"
          :lang="currentLocale"
          @update:currency="(curr: string) => activeCurrency = curr"
        />
        <div class="flex flex-col justify-center text-xs text-slate-500 dark:text-slate-400 space-y-1 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/40">
          <div>{{ isIndonesian ? 'Mata uang aktif:' : 'Active Currency:' }} <code class="font-mono font-bold text-blue-500">{{ activeCurrency }}</code></div>
          <div>{{ isIndonesian ? 'Nilai tersimpan:' : 'Stored clean numeric value:' }} <code class="font-mono font-bold">{{ selectableVal ?? 0 }}</code></div>
          <p class="text-slate-400">{{ isIndonesian ? 'Lebar padding prefix/suffix otomatis disesuaikan agar tidak menimpa angka.' : 'Prefix/suffix padding adjusts automatically so numbers never overlap.' }}</p>
        </div>
      </div>

      <template #code>
        <CodeBlock :code="selectableCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: Validation with Min & Max -->
    <DemoSection
      :title="isIndonesian ? 'Validasi Batas Nilai (Min & Max)' : 'Real-Time Validation (Min & Max Limits)'"
      :description="isIndonesian ? 'Memvalidasi batas transaksi minimum dan maksimum secara real-time.' : 'Enforces transaction limits between min (10,000) and max (5,000,000) with automatic error emission.'"
    >
      <CurrencyInput
        v-model="validatedVal"
        currency="Rp."
        :label="isIndonesian ? 'Kontribusi Pendanaan' : 'Funding Contribution'"
        :placeholder="isIndonesian ? 'Min 10.000, Maks 5.000.000' : 'Min 10,000, Max 5,000,000'"
        :lang="currentLocale"
        :validate="{
          min: 10000,
          max: 5000000,
        }"
      />
      <div class="text-xs text-slate-500 space-y-1">
        <div>{{ isIndonesian ? 'Nilai Saat Ini:' : 'Current Value:' }} <code class="font-mono font-bold">{{ validatedVal ?? 0 }}</code></div>
        <div class="text-slate-400 dark:text-slate-500">
          {{ isIndonesian ? 'Rentang yang diizinkan: 10.000 s/d 5.000.000.' : 'Allowed range: 10,000 to 5,000,000.' }}
        </div>
      </div>

      <template #code>
        <CodeBlock :code="validatedCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 4: With Tooltip -->
    <DemoSection
      :title="isIndonesian ? 'Panduan Tooltip Kustom' : 'Custom Schema Tooltip'"
      :description="isIndonesian ? 'Menampilkan panduan pengisian mata uang dengan tooltip kustom.' : 'Displays currency guidelines using custom tooltips.'"
    >
      <CurrencyInput
        v-model="withTooltip"
        currency="USD"
        :label="isIndonesian ? 'Biaya Langganan Tahunan' : 'Subscription Annual Fee'"
        :tooltip="isIndonesian ? 'Masukkan biaya di luar PPN' : 'Enter cost excluding VAT/GST'"
        tooltip-position="right"
        placeholder="120"
        :lang="currentLocale"
      />

      <template #code>
        <CodeBlock :code="tooltipCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 5: Error & Disabled States -->
    <DemoSection
      :title="isIndonesian ? 'Status Error & Disabled' : 'External Error & Disabled States'"
      :description="isIndonesian ? 'Tampilan peringatan visual dan status hanya-baca untuk mata uang.' : 'Visual warnings and read-only displays for currency.'"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CurrencyInput
          v-model="errorVal"
          currency="Rp."
          :label="isIndonesian ? 'Batas Transfer Tunggal' : 'Single Transfer Limit'"
          required
          :error="isIndonesian ? 'Nominal melebihi batas transfer tunggal maksimal yang diizinkan' : 'Amount exceeds maximum allowed single transfer limit'"
          :lang="currentLocale"
        />
        <CurrencyInput
          v-model="disabledVal"
          currency="USD"
          :label="isIndonesian ? 'Biaya Administrasi Tetap (Hanya-Baca)' : 'Fixed Administrative Fee (Read-Only)'"
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
import { CurrencyInput } from '@zyvnox/vue-pack/components'
import { ref } from 'vue'

const { isIndonesian, currentLocale } = useSiteI18n()

const usdVal = ref<number>(50)
const idrVal = ref<number>(750000)
const jpyVal = ref<number>(10000)
const eurVal = ref<number>(120)
const gbpVal = ref<number>(85)

const selectableVal = ref<number>(250000)
const activeCurrency = ref<string>('IDR')

const validatedVal = ref<number>(5000)
const withTooltip = ref<number>(120)
const errorVal = ref<number>(150000000)
const disabledVal = ref<number>(50)

const multiCurrencyCode = `<template>
  <!-- US Dollar ($) -->
  <CurrencyInput
    v-model="usdPrice"
    currency="$"
    label="Price in USD"
  />

  <!-- Rupiah (Rp.) -->
  <CurrencyInput
    v-model="idrPrice"
    currency="Rp."
    label="Price in IDR"
  />

  <!-- Yen (yen / ¥) -->
  <CurrencyInput
    v-model="jpyPrice"
    currency="yen"
    label="Price in JPY"
  />

  <!-- Euro (€) -->
  <CurrencyInput
    v-model="eurPrice"
    currency="€"
    label="Price in EUR"
  />

  <!-- Suffix Currency Position -->
  <CurrencyInput
    v-model="gbpPrice"
    currency="£"
    currency-position="suffix"
    label="Suffix Currency"
  />
</template>`

const selectableCode = `<CurrencyInput
  v-model="amount"
  allow-currency-select
  :currencies="['IDR', 'USD', 'JPY', 'EUR', 'GBP', 'SGD', 'AUD', 'SAR']"
  label="Select Payment Currency"
  @update:currency="(curr) => console.log('Selected:', curr)"
/>`

const validatedCode = `<CurrencyInput
  v-model="amount"
  currency="Rp."
  label="Funding Contribution"
  :validate="{
    min: 10000,
    max: 5000000,
  }"
/>`

const tooltipCode = `<CurrencyInput
  v-model="fee"
  currency="USD"
  label="Subscription Annual Fee"
  tooltip="Enter cost excluding VAT/GST"
  tooltip-position="right"
  placeholder="120"
/>`

const errorCode = `<CurrencyInput
  v-model="amount"
  currency="Rp."
  label="Single Transfer Limit"
  required
  error="Amount exceeds maximum allowed limit"
/>
<CurrencyInput
  v-model="adminFee"
  currency="USD"
  label="Fixed Administrative Fee"
  disabled
/>`

const propsList: PropDef[] = [
  { name: 'modelValue', type: 'number | null', required: true, description: 'Reactive numeric value v-model' },
  { name: 'label', type: 'string', required: true, description: 'Input label title displayed above the field' },
  {
    name: 'currency',
    type: "SupportedCurrency | string",
    default: "lang === 'id' ? 'IDR' : 'USD'",
    description: "Currency code (IDR, USD, JPY, EUR, GBP), symbol ($, Rp., ¥, €, £), or name (yen, rupiah, dollar).",
  },
  {
    name: 'currencyPosition',
    type: "'prefix' | 'suffix'",
    default: "'prefix'",
    description: 'Placement of the currency symbol or selector (before or after the input value).',
  },
  {
    name: 'currencies',
    type: 'SupportedCurrency[]',
    description: 'Array of selectable currency codes/symbols for the integrated selector.',
  },
  {
    name: 'allowCurrencySelect',
    type: 'boolean',
    default: 'false',
    description: 'Enables interactive currency selector dropdown pill in the input.',
  },
  { name: 'id', type: 'string', default: 'setUID()', description: 'Unique DOM element ID' },
  { name: 'placeholder', type: 'string', description: 'Placeholder hint text' },
  {
    name: 'validate',
    type: '{ min?: number, max?: number }',
    description: 'Client-side min and max currency value validation boundaries with localized warning messages.',
  },
  { name: 'required', type: 'boolean', default: 'false', description: 'Displays required asterisk indicator' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables user input and locking controls' },
  { name: 'error', type: 'string | string[]', description: 'External validation error message(s) from parent form/schema' },
  { name: 'tooltip', type: 'string', description: 'Custom tooltip guidance text' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Tooltip popup orientation' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon character or glyph displayed for tooltip trigger' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Language code used for currency formatting symbols and error messages' },
]

const eventsList: EventDef[] = [
  { name: 'update:modelValue', type: '(value: number | null, id: string) => void', description: 'Emitted upon currency amount changes' },
  { name: 'update:currency', type: '(currency: string, id: string) => void', description: 'Emitted when user switches the currency' },
  { name: 'push:error', type: '(errors: string[], id: string) => void', description: 'Emitted when min or max validation check fails' },
  { name: 'remove:error', type: '(id: string) => void', description: 'Emitted when currency validation check passes' },
]
</script>
