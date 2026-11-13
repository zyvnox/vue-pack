<template>
  <div class="space-y-8">
    <DocHeader />

    <!-- Mount Loader instance -->
    <Loader ref="loaderRef" />

    <!-- Demo 1: Trigger Loaders -->
    <DemoSection title="Trigger Fullscreen Overlays" description="Click to simulate async processing states.">
      <div class="flex flex-wrap items-center gap-3">
        <button
          type="button"
          @click="showLoading"
          class="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors"
        >
          {{ isIndonesian ? '⏳ Tampilkan Spinner (Otomatis tutup 2d)' : '⏳ Show Spinner (Auto-closes in 2s)' }}
        </button>
        <button
          type="button"
          @click="showSuccess"
          class="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
        >
          {{ isIndonesian ? '✓ Tampilkan Layar Sukses' : '✓ Show Success Screen' }}
        </button>
        <button
          type="button"
          @click="showWarning"
          class="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold transition-colors"
        >
          {{ isIndonesian ? '⚠️ Tampilkan Layar Peringatan' : '⚠️ Show Warning Screen' }}
        </button>
        <button
          type="button"
          @click="showError"
          class="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold transition-colors"
        >
          {{ isIndonesian ? '✕ Tampilkan Layar Error' : '✕ Show Error Screen' }}
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
import CodeBlock from '@/components/CodeBlock.vue'
import DemoSection from '@/components/DemoSection.vue'
import PropsTable from '@/components/PropsTable.vue'
import { useSiteI18n } from '@/i18n'
import { Loader } from '@zyvnox/vue-pack/components'
import { ref } from 'vue'

const { isIndonesian } = useSiteI18n()
const loaderRef = ref<InstanceType<typeof Loader> | null>(null)

const showLoading = () => {
  loaderRef.value?.show('loading', isIndonesian.value ? 'Menyinkronkan data...' : 'Synchronizing data...')
  setTimeout(() => {
    loaderRef.value?.hide()
  }, 2000)
}

const showSuccess = () => {
  loaderRef.value?.show('success', isIndonesian.value ? 'Pesanan Berhasil Dibuat!' : 'Order Placed Successfully!')
}

const showWarning = () => {
  loaderRef.value?.show('warning', isIndonesian.value ? 'Latensi jaringan tinggi. Beroperasi dalam mode fallback.' : 'Network latency high. Operating in fallback mode.')
}

const showError = () => {
  loaderRef.value?.show('error', isIndonesian.value ? 'Otorisasi Pembayaran Gagal' : 'Payment Authorization Failed')
}

const triggerCode = `<template>
  <Loader ref="loader" />
  <button @click="processPayment">Submit</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Loader } from '@zyvnox/vue-pack/components'

const loader = ref()
const processPayment = async () => {
  loader.value?.show('loading', 'Processing transaction...')
  try {
    await api.pay()
    loader.value?.show('success', 'Payment Complete!')
  } catch {
    loader.value?.show('error', 'Payment Failed')
  }
}
<\/script>`

const exposedMethods = [
  { name: 'show', type: '(type: "loading" | "success" | "warning" | "error", message?: string) => void', description: 'Opens the overlay with the chosen animation and message' },
  { name: 'hide', type: '() => void', description: 'Dismisses the overlay' },
]
</script>

