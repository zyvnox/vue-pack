<template>
  <div class="zyvnox-w-full zyvnox-relative zyvnox-mb-4">
    <label
      :for="id"
      class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-text-sm zyvnox-font-medium zyvnox-mb-2 zyvnox-text-slate-900 zyvnox-transition-colors zyvnox-duration-200 dark:zyvnox-text-slate-100"
      :class="{ 'zyvnox-text-red-500 dark:zyvnox-text-red-400': error }"
    >
      {{ label }}

      <Tooltip v-if="tooltip" :text="tooltip" :position="tooltipPosition ?? 'top'">
        <span class="zyvnox-text-slate-400 dark:zyvnox-text-slate-500 zyvnox-text-xs">
          {{ tooltipIcon ?? '❓' }}
        </span>
      </Tooltip>
    </label>

    <div class="zyvnox-flex zyvnox-items-center zyvnox-gap-1">
      <template v-for="star in maxStars" :key="star">
        <span
          :class="[
            'zyvnox-i-mdi-star',
            'zyvnox-w-7 zyvnox-h-7 zyvnox-transition-all zyvnox-duration-200',
            {
              'zyvnox-text-yellow-400 hover:zyvnox-text-yellow-300 zyvnox-cursor-pointer':
                star <= (hoverRating || localValue),
              'zyvnox-text-slate-300 hover:zyvnox-text-yellow-300 zyvnox-cursor-pointer dark:zyvnox-text-slate-600':
                star > (hoverRating || localValue),
              'zyvnox-transform zyvnox-scale-110': star === hoverRating,
              'zyvnox-opacity-60 zyvnox-cursor-not-allowed': disabled,
            },
          ]"
          @click="!disabled && setRating(star)"
          @mouseenter="!disabled && (hoverRating = star)"
          @mouseleave="!disabled && (hoverRating = 0)"
        ></span>
      </template>
    </div>

    <p
      v-if="typeof props.error === 'string'"
      class="zyvnox-text-sm zyvnox-text-red-500 zyvnox-mt-2 zyvnox-animate-[fadeIn_300ms_ease-out] dark:zyvnox-text-red-400"
    >
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { RateInputProps } from '../../../configs/types'
import { setUID } from '../../../untils'
import { Tooltip } from '../Display'

const props = withDefaults(defineProps<RateInputProps>(), {
  id: setUID(),
  tooltipPosition: 'top',
  tooltipIcon: '❓',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | null, key: string): void
}>()

const localValue = ref(props.modelValue ?? 0)
const hoverRating = ref(0)

const maxStars = computed(() => props.validate?.max ?? 5)

watch(
  () => props.modelValue,
  (newValue) => {
    localValue.value = newValue ?? 0
  },
)

function setRating(rating: number) {
  if (props.disabled) return
  // Jika bintang yang sama diklik lagi, reset rating
  const newRating = localValue.value === rating ? 0 : rating
  localValue.value = newRating
  emit('update:modelValue', newRating, props.id)
}
</script>
