<template>
  <RouterView />
</template>

<script setup lang="ts">
import { provide, computed, watch, onMounted } from 'vue'
import { useSiteI18n } from '@/i18n'
import { defaultTextLabelsMap } from '@zyvnox/vue-pack'

const { currentLocale } = useSiteI18n()

// Provide reactive labels to all @zyvnox/vue-pack components in the site demo
const currentLabels = computed(() => {
  return defaultTextLabelsMap[currentLocale.value] || defaultTextLabelsMap.en
})

provide('TableComponents', {
  labels: currentLabels,
})
provide('tableComponents', {
  labels: currentLabels,
})

// Sync document html lang attribute
watch(
  currentLocale,
  (lang) => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
  },
  { immediate: true },
)

onMounted(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = currentLocale.value
  }
})
</script>
