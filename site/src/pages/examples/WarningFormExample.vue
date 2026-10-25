<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        WarningForm (Confirmation Modal)
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Confirmation modal dialog for destructive actions (delete/archive) or positive verification prompts with custom buttons and i18n support.
      </p>
    </header>

    <!-- Demo 1: Destructive Confirmation -->
    <DemoSection title="Destructive Deletion Confirmation" description="Alerts the user before permanently removing records.">
      <div class="flex items-center gap-4">
        <button
          type="button"
          @click="showDelete = true"
          class="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold transition-colors"
        >
          🗑️ Delete Project
        </button>
        <span v-if="deleteConfirmed" class="text-xs text-rose-600 dark:text-rose-400">
          Project was deleted!
        </span>
      </div>

      <WarningForm
        v-if="showDelete"
        title="Permanently Delete Project?"
        message="This action cannot be undone. All database records and uploaded assets will be purged."
        confirm-text="Yes, Delete"
        cancel-text="Cancel"
        type="danger"
        @confirm="handleDeleteConfirm"
        @cancel="showDelete = false"
      />

      <template #code>
        <CodeBlock :code="deleteCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Positive Confirmation (Green) -->
    <DemoSection title="Positive Action Confirmation" description="Green-themed modal for approving or activating records.">
      <div class="flex items-center gap-4">
        <button
          type="button"
          @click="showApprove = true"
          class="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
        >
          ✓ Approve Budget
        </button>
        <span v-if="approveConfirmed" class="text-xs text-emerald-600 dark:text-emerald-400">
          Budget was approved!
        </span>
      </div>

      <WarningForm
        v-if="showApprove"
        title="Approve Quarterly Budget?"
        message="Are you sure you want to approve this budget request of $120,000?"
        confirm-text="Approve"
        cancel-text="Go Back"
        type="success"
        @confirm="handleApproveConfirm"
        @cancel="showApprove = false"
      />

      <template #code>
        <CodeBlock :code="approveCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: Cautionary Warning Confirmation (Yellow) -->
    <DemoSection title="Cautionary Warning Confirmation" description="Yellow/amber-themed modal for sensitive or caution-level operations.">
      <div class="flex items-center gap-4">
        <button
          type="button"
          @click="showWarning = true"
          class="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold transition-colors"
        >
          ⚠️ Restart Service
        </button>
        <span v-if="warningConfirmed" class="text-xs text-amber-600 dark:text-amber-400">
          Service restarted!
        </span>
      </div>

      <WarningForm
        v-if="showWarning"
        title="Restart Production Service?"
        message="Restarting this service will briefly interrupt live background worker queues for approximately 30 seconds."
        confirm-text="Yes, Restart"
        cancel-text="Keep Running"
        type="warning"
        @confirm="handleWarningConfirm"
        @cancel="showWarning = false"
      />

      <template #code>
        <CodeBlock :code="warningCode" language="vue" />
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
import { WarningForm } from '@zyvnox/vue-pack/components'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable from '@/components/PropsTable.vue'
import EventsTable from '@/components/EventsTable.vue'

const showDelete = ref(false)
const deleteConfirmed = ref(false)

const showApprove = ref(false)
const approveConfirmed = ref(false)

const showWarning = ref(false)
const warningConfirmed = ref(false)

const handleDeleteConfirm = () => {
  deleteConfirmed.value = true
  showDelete.value = false
}

const handleApproveConfirm = () => {
  approveConfirmed.value = true
  showApprove.value = false
}

const handleWarningConfirm = () => {
  warningConfirmed.value = true
  showWarning.value = false
}

const deleteCode = `<template>
  <button @click="show = true">Delete</button>

  <WarningForm
    v-if="show"
    title="Delete Item?"
    message="This cannot be undone."
    confirm-text="Delete"
    type="danger"
    @confirm="onDelete"
    @cancel="show = false"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { WarningForm } from '@zyvnox/vue-pack/components'

const show = ref(false)
const onDelete = () => {
  // perform delete
  show.value = false
}
<\/script>`

const approveCode = `<WarningForm
  v-if="show"
  title="Approve Budget?"
  message="Are you sure you want to approve?"
  confirm-text="Approve"
  type="success"
  @confirm="onApprove"
  @cancel="show = false"
/>`

const warningCode = `<WarningForm
  v-if="show"
  title="Restart Service?"
  message="This will briefly interrupt workers."
  confirm-text="Restart"
  type="warning"
  @confirm="onRestart"
  @cancel="show = false"
/>`

const propsList = [
  { name: 'type', type: "'danger' | 'warning' | 'success' | 'info'", default: "'danger'", description: 'Color theme and icon mode of the confirmation dialog' },
  { name: 'title', type: 'string', description: 'Dialog header title' },
  { name: 'message', type: 'string', description: 'Detailed warning message explanation' },
  { name: 'confirmText', type: 'string', description: 'Label for confirmation button' },
  { name: 'cancelText', type: 'string', description: 'Label for cancellation button' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Active language code' },
]

const eventsList = [
  { name: 'confirm', type: '() => void', description: 'Emitted when user clicks confirm' },
  { name: 'cancel', type: '() => void', description: 'Emitted when user cancels or dismisses' },
]
</script>

