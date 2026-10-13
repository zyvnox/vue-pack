<template>
  <div
    class="zyvnox-w-full zyvnox-mb-6 zyvnox-flex zyvnox-justify-between zyvnox-items-center zyvnox-gap-4"
  >
    <label
      :for="id"
      class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-text-base zyvnox-font-medium zyvnox-text-slate-900 zyvnox-transition-colors zyvnox-duration-200 zyvnox-flex-grow dark:zyvnox-text-slate-100"
    >
      {{ label }}
      <Tooltip v-if="tooltip" :text="tooltip" :position="tooltipPosition ?? 'top'">
        <span class="zyvnox-text-slate-400 dark:zyvnox-text-slate-500 zyvnox-text-xs">
          {{ tooltipIcon ?? '❓' }}
        </span>
      </Tooltip>
    </label>
    <button
      :id="id"
      type="button"
      role="switch"
      :aria-checked="val"
      @click="toggleValue"
      :disabled="disabled"
      class="zyvnox-relative zyvnox-inline-flex zyvnox-items-center zyvnox-w-24 zyvnox-h-8 zyvnox-rounded-full zyvnox-cursor-pointer zyvnox-shrink-0 zyvnox-transition-colors zyvnox-duration-300 zyvnox-ease-in-out zyvnox-border-2 zyvnox-border-transparent zyvnox-p-0 focus-visible:zyvnox-outline-none focus-visible:zyvnox-ring-4 focus-visible:zyvnox-ring-blue-500/30 disabled:zyvnox-bg-slate-200 disabled:zyvnox-cursor-not-allowed dark:disabled:zyvnox-bg-slate-800"
      :class="{
        'zyvnox-bg-green-500 dark:zyvnox-bg-blue-500': val,
        'zyvnox-bg-slate-300 dark:zyvnox-bg-slate-700': !val,
      }"
    >
      <!-- knob -->
      <span
        class="zyvnox-absolute zyvnox-top-1/2 zyvnox-w-6 zyvnox-h-6 zyvnox-rounded-full zyvnox-bg-white zyvnox-shadow-md zyvnox-transform -zyvnox-translate-y-1/2 zyvnox-transition-all zyvnox-duration-300 zyvnox-ease-in-out"
        :class="val ? 'zyvnox-left-[calc(100%-1.75rem)]' : 'zyvnox-left-1'"
      />
      <span
        class="zyvnox-absolute zyvnox-text-xs zyvnox-font-bold zyvnox-transition-opacity zyvnox-duration-200"
        :class="
          val
            ? 'zyvnox-left-3 zyvnox-text-white zyvnox-opacity-100'
            : 'zyvnox-right-3 zyvnox-text-slate-600 zyvnox-opacity-100 dark:zyvnox-text-slate-300'
        "
        >{{ val ? labels?.btn.toogle.active : labels?.btn.toogle.inactive }}</span
      >
    </button>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, type Ref, watch } from 'vue'
import type { ToggleInputProps, GlobalDefaultText } from '../../../configs/types'
import { defaultTextLabelsMap } from '../../../configs/i18n'
import { setUID } from '../../../untils'
import { Tooltip } from '../Display'

const props = withDefaults(defineProps<ToggleInputProps>(), {
  id: setUID(),
  tooltipPosition: 'top',
  tooltipIcon: '❓',
})

const emit = defineEmits<{ (e: 'update:modelValue', v: boolean, key?: string): void }>()

const oldValue = props.modelValue
const val = ref(oldValue)

const injected = inject<{ labels: Ref<GlobalDefaultText> }>('TableComponents', {
  labels: ref(defaultTextLabelsMap[props.lang ?? 'en']),
})

watch(
  () => val.value,
  () => {
    emit('update:modelValue', val.value, props.id)
  },
)
const labels = injected.labels

function toggleValue() {
  val.value = !val.value
}
</script>
