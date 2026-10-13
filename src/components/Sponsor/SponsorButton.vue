<template>
  <div class="zyvnox-sponsor-btn-group zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2">
    <!-- Saweria Button -->
    <a
      v-if="variant === 'both' || variant === 'saweria'"
      href="https://saweria.co/zyvnox"
      target="_blank"
      rel="noopener noreferrer"
      class="zyvnox-sponsor-btn zyvnox-sponsor-saweria zyvnox-inline-flex zyvnox-items-center zyvnox-gap-1.5 zyvnox-px-3 zyvnox-py-1.5 zyvnox-rounded-full zyvnox-text-white zyvnox-font-medium zyvnox-text-xs zyvnox-shadow-sm zyvnox-transition-all hover:zyvnox-opacity-95 hover:zyvnox-scale-[1.02] active:zyvnox-scale-[0.98] zyvnox-no-underline"
      style="background-color: #FF7A00;"
      title="Support on Saweria (QRIS, GoPay, OVO, Dana)"
    >
      <!-- Heart Icon -->
      <svg
        class="zyvnox-w-3.5 zyvnox-h-3.5 zyvnox-fill-current zyvnox-shrink-0"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>
      <span>Saweria</span>
      <!-- QRIS Badge -->
      <span
        class="zyvnox-text-[9px] zyvnox-bg-black/25 zyvnox-px-1.5 zyvnox-py-0.5 zyvnox-rounded-full zyvnox-font-bold zyvnox-tracking-wider zyvnox-uppercase"
      >
        QRIS
      </span>
    </a>

    <!-- Ko-fi Button -->
    <a
      v-if="variant === 'both' || variant === 'kofi'"
      href="https://ko-fi.com/zyvnox"
      target="_blank"
      rel="noopener noreferrer"
      class="zyvnox-sponsor-btn zyvnox-sponsor-kofi zyvnox-inline-flex zyvnox-items-center zyvnox-gap-1.5 zyvnox-px-3 zyvnox-py-1.5 zyvnox-rounded-full zyvnox-text-white zyvnox-font-medium zyvnox-text-xs zyvnox-shadow-sm zyvnox-transition-all hover:zyvnox-opacity-95 hover:zyvnox-scale-[1.02] active:zyvnox-scale-[0.98] zyvnox-no-underline"
      style="background-color: #29ABE0;"
      title="Support on Ko-fi"
    >
      <!-- Heart Icon -->
      <svg
        class="zyvnox-w-3.5 zyvnox-h-3.5 zyvnox-fill-current zyvnox-shrink-0"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>
      <span>Ko-fi</span>
    </a>
  </div>
</template>

<script setup lang="ts">
export interface SponsorButtonProps {
  variant?: 'both' | 'saweria' | 'kofi'
}

withDefaults(defineProps<SponsorButtonProps>(), {
  variant: 'both',
})
</script>

