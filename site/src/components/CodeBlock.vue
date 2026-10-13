<template>
  <div class="relative rounded-lg overflow-hidden my-3 border border-slate-800">
    <div class="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
      <span class="text-xs font-mono text-slate-400">{{ language || 'vue' }}</span>
      <button
        type="button"
        @click="copy"
        class="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium
               bg-slate-800 hover:bg-slate-700 text-slate-200 rounded transition-colors"
      >
        <span v-if="copied" class="text-emerald-400">✓ Copied!</span>
        <span v-else>📋 Copy</span>
      </button>
    </div>
    <pre class="bg-slate-950 text-slate-100 p-4 overflow-x-auto text-xs font-mono leading-relaxed"><code ref="codeEl"><slot>{{ code }}</slot></code></pre>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  code?: string
  language?: string
}>()

const copied = ref(false)
const codeEl = ref<HTMLElement | null>(null)

const copy = async () => {
  const textToCopy = props.code || codeEl.value?.textContent || ''
  if (!textToCopy) return

  try {
    await navigator.clipboard.writeText(textToCopy.trim())
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 1500)
  } catch (err) {
    console.error('Failed to copy to clipboard', err)
  }
}
</script>

