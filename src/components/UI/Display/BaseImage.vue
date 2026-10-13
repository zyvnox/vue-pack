<!-- src/components/BaseImage.vue -->
<template>
  <img
    :src="src"
    :alt="alt"
    loading="lazy"
    decoding="async"
    class="zyvnox-object-cover"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
interface Props {
  src: string
  alt?: string
}

defineProps<Props>()
</script>
