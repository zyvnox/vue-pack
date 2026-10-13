<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        Loader (Fullscreen Status Overlay)
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Imperative fullscreen loading and feedback overlay supporting loading spinner, success checkmark, and error cross animations.
      </p>
    </header>

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
          ⏳ Show Spinner (Auto-closes in 2s)
        </button>
        <button
          type="button"
          @click="showSuccess"
          class="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
        >
          ✓ Show Success Screen
        </button>
        <button
          type="button"
          @click="showError"
          class="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold transition-colors"
        >
          ✕ Show Error Screen
        </button>
      </div>

      <template #code>
        <CodeBlock :code="triggerCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Expose API Table -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">Exposed Methods</h2>
      <PropsTable :props="exposedMethods" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Loader } from '@zyvnox/vue-pack/components'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable from '@/components/PropsTable.vue'

const loaderRef = ref<InstanceType<typeof Loader> | null>(null)

const showLoading = () => {
  loaderRef.value?.show('loading', 'Synchronizing data...')
  setTimeout(() => {
    loaderRef.value?.hide()
  }, 2000)
}

const showSuccess = () => {
  loaderRef.value?.show('success', 'Order Placed Successfully!')
}

const showError = () => {
  loaderRef.value?.show('error', 'Payment Authorization Failed')
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
  { name: 'show', type: '(type: "loading" | "success" | "error", message?: string) => void', description: 'Opens the overlay with the chosen animation and message' },
  { name: 'hide', type: '() => void', description: 'Dismisses the overlay' },
]
</script>

