<template>
  <div
    v-for="(alert, index) in alerts"
    :key="alert.id"
    ref="alertRefs"
    class="alert-container"
    :class="alertClasses(alert.type)"
    :style="{
      top: `${alertPositions[index] ?? 0}px`,
      transform: `translateX(${alert.show ? '0' : '200%'})`,
    }"
    role="alert"
  >
    <div class="zyvnox-shrink-0 zyvnox-w-5 zyvnox-h-5 zyvnox-flex zyvnox-items-center zyvnox-justify-center zyvnox-mt-0.5">
      <!-- Warning -->
      <svg
        v-if="alert.type === 'warning'"
        class="zyvnox-w-5 zyvnox-h-5 zyvnox-text-amber-500 dark:zyvnox-text-amber-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z" />
      </svg>
      <!-- Success -->
      <svg
        v-else-if="alert.type === 'success'"
        class="zyvnox-w-5 zyvnox-h-5 zyvnox-text-emerald-500 dark:zyvnox-text-emerald-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
      <!-- Info -->
      <svg
        v-else-if="alert.type === 'info'"
        class="zyvnox-w-5 zyvnox-h-5 zyvnox-text-blue-500 dark:zyvnox-text-blue-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
      <!-- Error / Default -->
      <svg
        v-else
        class="zyvnox-w-5 zyvnox-h-5 zyvnox-text-rose-500 dark:zyvnox-text-rose-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    </div>
    <span class="zyvnox-sr-only">{{ srOnlyText(alert.type) }}</span>
    <div class="zyvnox-flex-1 zyvnox-min-w-0">
      <span class="zyvnox-font-semibold zyvnox-block zyvnox-text-sm">{{ alert.title }}</span>
      <ul
        v-if="alert.messages && alert.messages.length > 0"
        class="zyvnox-mt-1 zyvnox-pl-4 zyvnox-text-xs zyvnox-list-disc zyvnox-space-y-0.5"
        :class="markerClasses(alert.type)"
      >
        <li v-for="(message, i) in alert.messages" :key="i" class="zyvnox-leading-snug">{{ message }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { useI18n } from '../../composables/useI18n'

const { t } = useI18n()

export type AlertType = 'success' | 'error' | 'warning' | 'info'

export interface Alert {
  id?: number
  type: AlertType
  title: string
  messages: string[]
  show?: boolean
}
const alerts = ref<Alert[]>([])
const alertRefs = ref<HTMLElement[]>([])
const alertPositions = ref<number[]>([])
let alertCounter = 0

const alertClasses = (type: AlertType) => {
  const base =
    'zyvnox-fixed zyvnox-top-4 zyvnox-right-4 zyvnox-z-100 zyvnox-flex zyvnox-items-start zyvnox-gap-3 zyvnox-w-full zyvnox-max-w-sm zyvnox-p-4 zyvnox-mb-4 zyvnox-rounded-xl zyvnox-shadow-2xl zyvnox-transition-all zyvnox-duration-300 zyvnox-ease-[cubic-bezier(0.4,0,0.2,1)] sm:zyvnox-max-w-md max-sm:zyvnox-left-4 zyvnox-backdrop-blur-sm'
  if (type === 'warning') {
    return `${base} zyvnox-border-1 zyvnox-border-solid zyvnox-border-amber-300 zyvnox-bg-amber-50 zyvnox-text-amber-950 dark:zyvnox-bg-amber-950/85 dark:zyvnox-border-amber-500/60 dark:zyvnox-text-amber-100 dark:zyvnox-shadow-amber-950/30`
  }
  if (type === 'success') {
    return `${base} zyvnox-border-1 zyvnox-border-solid zyvnox-border-emerald-300 zyvnox-bg-emerald-50 zyvnox-text-emerald-950 dark:zyvnox-bg-emerald-950/85 dark:zyvnox-border-emerald-500/60 dark:zyvnox-text-emerald-100 dark:zyvnox-shadow-emerald-950/30`
  }
  if (type === 'info') {
    return `${base} zyvnox-border-1 zyvnox-border-solid zyvnox-border-blue-300 zyvnox-bg-blue-50 zyvnox-text-blue-950 dark:zyvnox-bg-blue-950/85 dark:zyvnox-border-blue-500/60 dark:zyvnox-text-blue-100 dark:zyvnox-shadow-blue-950/30`
  }
  return `${base} zyvnox-border-1 zyvnox-border-solid zyvnox-border-rose-300 zyvnox-bg-rose-50 zyvnox-text-rose-950 dark:zyvnox-bg-rose-950/85 dark:zyvnox-border-rose-500/60 dark:zyvnox-text-rose-100 dark:zyvnox-shadow-rose-950/30`
}

const markerClasses = (type: AlertType) => {
  if (type === 'warning') {
    return '[&::marker]:zyvnox-text-amber-500 dark:[&::marker]:zyvnox-text-amber-400'
  }
  if (type === 'success') {
    return '[&::marker]:zyvnox-text-emerald-500 dark:[&::marker]:zyvnox-text-emerald-400'
  }
  if (type === 'info') {
    return '[&::marker]:zyvnox-text-blue-500 dark:[&::marker]:zyvnox-text-blue-400'
  }
  return '[&::marker]:zyvnox-text-rose-500 dark:[&::marker]:zyvnox-text-rose-400'
}

const srOnlyText = (type: AlertType) => {
  if (type === 'warning') return t('status.warning')
  if (type === 'success') return t('status.success')
  if (type === 'info') return t('status.info')
  return t('status.error')
}

function calculateAlertPositions() {
  let cumulativeHeight = 0
  alertPositions.value = alertRefs.value.map((alertRef) => {
    const height = alertRef?.offsetHeight || 0
    const position = cumulativeHeight
    cumulativeHeight += height + 10
    return position
  })
}

function addAlert(alert: Alert) {
  alert.id = alertCounter++
  alert.show = false
  alerts.value.push(alert)

  nextTick(() => {
    alert.show = true
    calculateAlertPositions()
  })

  setTimeout(() => {
    alert.show = false
    nextTick(() => {
      calculateAlertPositions()
      setTimeout(() => {
        alerts.value = alerts.value.filter((a) => a.id !== alert.id)
        nextTick(calculateAlertPositions)
      }, 200)
    })
  }, 5000)
}

watch(alerts, () => {
  nextTick(calculateAlertPositions)
})

defineExpose({
  addAlert,
})
</script>
