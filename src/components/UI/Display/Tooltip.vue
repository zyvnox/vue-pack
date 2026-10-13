<template>
  <component
    :is="as"
    ref="triggerRef"
    class="zyvnox-relative zyvnox-inline-flex zyvnox-items-center zyvnox-cursor-help focus:zyvnox-outline-none"
    :aria-describedby="show && text ? tooltipId : undefined"
    tabindex="0"
    @mouseenter="openTooltip"
    @mouseleave="closeTooltip"
    @focusin="openTooltip"
    @focusout="closeTooltip"
    @keydown.escape="closeTooltip"
  >
    <slot>
      <span class="zyvnox-text-slate-400 dark:zyvnox-text-slate-500 zyvnox-text-xs">
        {{ icon }}
      </span>
    </slot>

    <Teleport to="body">
      <Transition
        enter-active-class="zyvnox-transition zyvnox-duration-150 zyvnox-ease-out"
        enter-from-class="zyvnox-opacity-0 zyvnox-scale-95"
        enter-to-class="zyvnox-opacity-100 zyvnox-scale-100"
        leave-active-class="zyvnox-transition zyvnox-duration-100 zyvnox-ease-in"
        leave-from-class="zyvnox-opacity-100 zyvnox-scale-100"
        leave-to-class="zyvnox-opacity-0 zyvnox-scale-95"
      >
        <div
          v-if="show && text"
          :id="tooltipId"
          ref="tooltipRef"
          :class="[
            'zyvnox-fixed zyvnox-z-[99999] zyvnox-px-3 zyvnox-py-2 zyvnox-rounded-md',
            'zyvnox-text-xs zyvnox-font-normal zyvnox-leading-snug',
            'zyvnox-bg-slate-900 zyvnox-text-white',
            'dark:zyvnox-bg-slate-100 dark:zyvnox-text-slate-900',
            'zyvnox-shadow-lg zyvnox-max-w-xs zyvnox-pointer-events-none',
          ]"
          :style="tooltipStyle"
          role="tooltip"
        >
          <div class="zyvnox-whitespace-pre-wrap">{{ text }}</div>
          <span
            v-if="hotkey"
            class="zyvnox-inline-block zyvnox-mt-1 zyvnox-px-1.5 zyvnox-py-0.5 zyvnox-bg-slate-700 zyvnox-text-slate-200 dark:zyvnox-bg-slate-200 dark:zyvnox-text-slate-800 zyvnox-text-[10px] zyvnox-rounded"
          >
            {{ hotkey }}
          </span>
          <span
            :class="[
              'zyvnox-absolute zyvnox-w-2 zyvnox-h-2 zyvnox-rotate-45',
              'zyvnox-bg-slate-900 dark:zyvnox-bg-slate-100',
              arrowClass,
            ]"
          />
        </div>
      </Transition>
    </Teleport>
  </component>
</template>

<script setup lang="ts">
import { computed, nextTick, onUnmounted, ref, watch } from 'vue'
import { setUID } from '../../../untils'

interface Props {
  text: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  icon?: string
  hotkey?: string
  as?: string
}

const props = withDefaults(defineProps<Props>(), {
  position: 'top',
  icon: '❓',
  hotkey: '',
  as: 'span',
})

const tooltipId = `tooltip-${setUID()}`
const show = ref(false)
const tooltipRef = ref<HTMLElement | null>(null)
const triggerRef = ref<HTMLElement | null>(null)
const coords = ref<{
  top: number
  left: number
  position: 'top' | 'bottom' | 'left' | 'right'
}>({
  top: 0,
  left: 0,
  position: 'top',
})

const openTooltip = () => {
  if (!props.text) return
  show.value = true
}

const closeTooltip = () => {
  show.value = false
}

const updatePosition = async () => {
  if (!triggerRef.value || typeof window === 'undefined') return
  await nextTick()

  const rect = triggerRef.value.getBoundingClientRect()
  const tooltipEl = tooltipRef.value
  const tooltipWidth = tooltipEl?.offsetWidth || 160
  const tooltipHeight = tooltipEl?.offsetHeight || 32
  const padding = 8

  let effectivePos = props.position

  // Flip vertically if outside viewport
  if (effectivePos === 'top' && rect.top - tooltipHeight - padding < 0) {
    effectivePos = 'bottom'
  } else if (
    effectivePos === 'bottom' &&
    rect.bottom + tooltipHeight + padding > window.innerHeight
  ) {
    effectivePos = 'top'
  }

  // Flip horizontally if outside viewport
  if (effectivePos === 'left' && rect.left - tooltipWidth - padding < 0) {
    effectivePos = 'right'
  } else if (effectivePos === 'right' && rect.right + tooltipWidth + padding > window.innerWidth) {
    effectivePos = 'left'
  }

  let top = 0
  let left = 0

  switch (effectivePos) {
    case 'top':
      top = rect.top - padding
      left = rect.left + rect.width / 2
      break
    case 'bottom':
      top = rect.bottom + padding
      left = rect.left + rect.width / 2
      break
    case 'left':
      top = rect.top + rect.height / 2
      left = rect.left - padding
      break
    case 'right':
      top = rect.top + rect.height / 2
      left = rect.right + padding
      break
  }

  // Clamp horizontal position so tooltip doesn't bleed out of viewport
  const halfWidth = tooltipWidth / 2
  if (effectivePos === 'top' || effectivePos === 'bottom') {
    if (left - halfWidth < padding) {
      left = halfWidth + padding
    } else if (left + halfWidth > window.innerWidth - padding) {
      left = window.innerWidth - halfWidth - padding
    }
  }

  coords.value = {
    top,
    left,
    position: effectivePos,
  }
}

const tooltipStyle = computed(() => {
  const { top, left, position } = coords.value
  let transform = 'translate(-50%, -100%)'
  if (position === 'bottom') {
    transform = 'translate(-50%, 0)'
  } else if (position === 'left') {
    transform = 'translate(-100%, -50%)'
  } else if (position === 'right') {
    transform = 'translate(0, -50%)'
  }

  return {
    top: `${top}px`,
    left: `${left}px`,
    transform,
  }
})

const arrowClass = computed(() => {
  switch (coords.value.position) {
    case 'top':
      return 'zyvnox--bottom-1 zyvnox-left-1/2 zyvnox--translate-x-1/2'
    case 'bottom':
      return 'zyvnox--top-1 zyvnox-left-1/2 zyvnox--translate-x-1/2'
    case 'left':
      return 'zyvnox--right-1 zyvnox-top-1/2 zyvnox--translate-y-1/2'
    case 'right':
      return 'zyvnox--left-1 zyvnox-top-1/2 zyvnox--translate-y-1/2'
    default:
      return 'zyvnox--bottom-1 zyvnox-left-1/2 zyvnox--translate-x-1/2'
  }
})

watch(show, (v) => {
  if (v) {
    updatePosition()
  }
})

onUnmounted(() => {
  show.value = false
})
</script>
