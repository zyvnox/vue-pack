<template>
  <component :is="as || 'div'" v-if="html" v-html="cleanHtml"></component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Config } from 'dompurify'
import { sanitizeHtml } from '../../../untils/sanitize'

interface Props {
  html: string
  as?: string
  config?: Config
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
})

const cleanHtml = computed(() => sanitizeHtml(props.html, props.config))
</script>
