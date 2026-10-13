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
    <span
      class="zyvnox-shrink-0 zyvnox-w-5 zyvnox-h-5"
      :class="[
        alert.type === 'error' ? 'zyvnox-i-mdi-alert-circle' : 'zyvnox-i-mdi-check-circle',
        alert.type === 'error'
          ? 'zyvnox-text-red-500 dark:zyvnox-text-red-400'
          : 'zyvnox-text-green-500 dark:zyvnox-text-green-400',
      ]"
    ></span>
    <span class="zyvnox-sr-only">{{
      alert.type === 'error' ? t('status.error') : t('status.success')
    }}</span>
    <div>
      <span class="zyvnox-font-semibold">{{ alert.title }}</span>
      <ul
        class="zyvnox-mt-1 zyvnox-pl-5 zyvnox-text-sm zyvnox-list-disc zyvnox-list-inside"
        :class="
          alert.type === 'error'
            ? '[&::marker]:zyvnox-text-red-500'
            : '[&::marker]:zyvnox-text-green-500'
        "
      >
        <li v-for="(message, i) in alert.messages" :key="i">{{ message }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, computed } from 'vue'
import { useI18n } from '../../composables/useI18n'

const { t } = useI18n()

export interface Alert {
  id?: number
  type: 'success' | 'error'
  title: string
  messages: string[]
  show?: boolean
}
const alerts = ref<Alert[]>([])
const alertRefs = ref<HTMLElement[]>([])
const alertPositions = ref<number[]>([])
let alertCounter = 0

const alertClasses = (type: 'success' | 'error') => {
  const base =
    'zyvnox-fixed zyvnox-top-4 zyvnox-right-4 zyvnox-z-100 zyvnox-flex zyvnox-items-start zyvnox-gap-3 zyvnox-w-full zyvnox-max-w-sm zyvnox-p-4 zyvnox-mb-4 zyvnox-rounded-lg zyvnox-shadow-lg zyvnox-transition-all zyvnox-duration-300 zyvnox-ease-[cubic-bezier(0.4,0,0.2,1)] sm:zyvnox-max-w-md max-sm:zyvnox-left-4'
  if (type === 'success') {
    return `${base} zyvnox-border-1 zyvnox-border-solid zyvnox-border-green-200 zyvnox-bg-green-50 zyvnox-text-green-800 dark:zyvnox-bg-green-800/30 dark:zyvnox-border-green-700 dark:zyvnox-text-green-200`
  }
  if (type === 'error') {
    return `${base} zyvnox-border-1 zyvnox-border-solid zyvnox-border-red-200 zyvnox-bg-red-50 zyvnox-text-red-800 dark:zyvnox-bg-red-800/30 dark:zyvnox-border-red-700 dark:zyvnox-text-red-200`
  }
  return base
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
