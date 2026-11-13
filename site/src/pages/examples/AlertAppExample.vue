<template>
  <div class="space-y-8">
    <DocHeader />

    <!-- Mount AlertApp instance -->
    <AlertApp ref="alertRef" />

    <!-- Demo 1: Trigger Toasts -->
    <DemoSection title="Trigger Floating Toast Alerts" description="Click the buttons below to dispatch stacked toast notifications.">
      <div class="flex flex-wrap items-center gap-3">
        <button
          type="button"
          @click="triggerSuccess"
          class="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
        >
          {{ isIndonesian ? '✓ Picu Toast Sukses' : '✓ Trigger Success Toast' }}
        </button>
        <button
          type="button"
          @click="triggerWarning"
          class="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold transition-colors"
        >
          {{ isIndonesian ? '⚠️ Picu Toast Peringatan' : '⚠️ Trigger Warning Toast' }}
        </button>
        <button
          type="button"
          @click="triggerError"
          class="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold transition-colors"
        >
          {{ isIndonesian ? '✕ Picu Toast Error' : '✕ Trigger Error Toast' }}
        </button>
      </div>

      <template #code>
        <CodeBlock :code="triggerCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Expose API Table -->
    <section class="space-y-4">
      <PropsTable :props="exposedMethods" title="Exposed Methods" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AlertApp } from '@zyvnox/vue-pack/components'
import { useSiteI18n } from '@/i18n'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable from '@/components/PropsTable.vue'

const { isIndonesian } = useSiteI18n()
const alertRef = ref<InstanceType<typeof AlertApp> | null>(null)

const triggerSuccess = () => {
  alertRef.value?.addAlert({
    type: 'success',
    title: isIndonesian.value ? 'Perubahan Berhasil Disimpan' : 'Changes Saved Successfully',
    messages: [isIndonesian.value ? 'Data profil pelanggan telah disinkronkan ke database.' : 'Customer profile record has been synchronized with the database.'],
  })
}

const triggerWarning = () => {
  alertRef.value?.addAlert({
    type: 'warning',
    title: isIndonesian.value ? 'Peringatan Kapasitas Penyimpanan' : 'Storage Capacity Alert',
    messages: [
      isIndonesian.value ? 'Kapasitas penyimpanan cloud telah mencapai 88%.' : 'Cloud storage utilization is currently at 88%.',
      isIndonesian.value ? 'Pertimbangkan untuk mengarsipkan log lama atau meningkatkan paket langganan.' : 'Consider archiving older log files or upgrading your plan.',
    ],
  })
}

const triggerError = () => {
  alertRef.value?.addAlert({
    type: 'error',
    title: isIndonesian.value ? 'Sinkronisasi Jaringan Gagal' : 'Network Synchronization Failed',
    messages: [
      isIndonesian.value ? 'Gagal menghubungkan ke gateway endpoint.' : 'Failed to connect to gateway endpoint.',
      isIndonesian.value ? 'Periksa koneksi internet Anda dan coba lagi.' : 'Check your internet connection and retry.',
    ],
  })
}

const triggerCode = `<template>
  <AlertApp ref="alerts" />
  <button @click="notify">Show Toast</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AlertApp } from '@zyvnox/vue-pack/components'

const alerts = ref()
const notify = () => {
  alerts.value?.addAlert({
    type: 'success',
    title: 'Operation Completed',
    messages: ['Item added to cart.'],
  })
}
<\/script>`

const exposedMethods = [
  { name: 'addAlert', type: '(alert: { type: "success" | "error" | "warning" | "info", title: string, messages: string[] }) => void', description: 'Dispatches a new stacked toast alert to the screen' },
]
</script>

