<!-- BaseLabel.vue -->
<template>
  <label
    class="zyvnox-block zyvnox-mb-2 zyvnox-cursor-default zyvnox-transition-colors zyvnox-duration-200 zyvnox-text-slate-700 dark:zyvnox-text-slate-300 zyvnox-text-sm md:zyvnox-text-base zyvnox-font-medium"
  >
    <h4 class="zyvnox-font-bold">⬜ {{ label }}</h4>
  </label>
</template>
<script setup lang="ts">
defineProps<{ label: string }>()
</script>
