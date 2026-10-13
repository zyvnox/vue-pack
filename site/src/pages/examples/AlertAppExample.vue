<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        AlertApp (Toast Notification Manager)
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Global floating toast notification manager with stacked animation, auto-dismiss timers, and success/error status styles.
      </p>
    </header>

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
          ✓ Trigger Success Toast
        </button>
        <button
          type="button"
          @click="triggerError"
          class="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold transition-colors"
        >
          ✕ Trigger Error Toast
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
import { AlertApp } from '@zyvnox/vue-pack/components'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable from '@/components/PropsTable.vue'

const alertRef = ref<InstanceType<typeof AlertApp> | null>(null)

const triggerSuccess = () => {
  alertRef.value?.addAlert({
    type: 'success',
    title: 'Changes Saved Successfully',
    messages: ['Customer profile record has been synchronized with the database.'],
  })
}

const triggerError = () => {
  alertRef.value?.addAlert({
    type: 'error',
    title: 'Network Synchronization Failed',
    messages: [
      'Failed to connect to gateway endpoint.',
      'Check your internet connection and retry.',
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
  { name: 'addAlert', type: '(alert: { type: "success" | "error", title: string, messages: string[] }) => void', description: 'Dispatches a new stacked toast alert to the screen' },
]
</script>

