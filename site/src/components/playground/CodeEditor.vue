<template>
  <div
    class="h-full flex flex-col bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 transition-colors duration-200"
  >
    <div
      class="px-4 py-2 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 select-none transition-colors duration-200"
    >
      <div class="flex items-center gap-2 font-mono">
        <span class="text-amber-500 dark:text-amber-400">⚡</span>
        <span class="font-semibold text-slate-800 dark:text-slate-200">App.vue</span>
        <span
          class="text-[10px] text-slate-600 dark:text-slate-400 bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono"
        >
          SFC
        </span>
      </div>
      <div class="text-[11px] text-slate-400 dark:text-slate-500 font-mono">
        Tab: 2 spaces • Simple Editor
      </div>
    </div>

    <div class="flex-1 relative flex overflow-hidden">
      <!-- Line Number Column -->
      <div
        class="w-12 py-3 bg-slate-50 dark:bg-slate-950/80 text-right pr-3 select-none text-xs font-mono text-slate-400 dark:text-slate-600 border-r border-slate-200 dark:border-slate-900 overflow-hidden leading-6 transition-colors duration-200"
      >
        <div v-for="n in lines" :key="n">{{ n }}</div>
      </div>

      <!-- Code Area -->
      <textarea
        ref="textareaEl"
        :value="modelValue"
        @input="onInput"
        @keydown.tab.prevent="onTab"
        class="flex-1 p-3 bg-transparent text-slate-900 dark:text-slate-100 font-mono text-xs leading-6 resize-none outline-none selection:bg-blue-500/20 dark:selection:bg-blue-600/30 whitespace-pre overflow-auto font-normal focus:ring-0 border-none transition-colors duration-200"
        placeholder="Type or paste Vue SFC code here..."
        spellcheck="false"
      ></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const textareaEl = ref<HTMLTextAreaElement | null>(null)

const lines = computed(() => {
  const count = (props.modelValue || '').split('\n').length
  return Math.max(count, 1)
})

const onInput = (e: Event) => {
  const val = (e.target as HTMLTextAreaElement).value
  emit('update:modelValue', val)
}

const onTab = (e: KeyboardEvent) => {
  const target = e.target as HTMLTextAreaElement
  const start = target.selectionStart
  const end = target.selectionEnd
  const value = target.value

  // Insert 2 spaces
  const updated = value.substring(0, start) + '  ' + value.substring(end)
  emit('update:modelValue', updated)

  // Preserve cursor position
  setTimeout(() => {
    target.selectionStart = target.selectionEnd = start + 2
  }, 0)
}
</script>
