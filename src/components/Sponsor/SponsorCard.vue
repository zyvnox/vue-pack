<template>
  <div
    class="zyvnox-sponsor-card zyvnox-relative zyvnox-overflow-hidden zyvnox-rounded-2xl zyvnox-border zyvnox-border-slate-200 dark:zyvnox-border-slate-800 zyvnox-bg-gradient-to-br zyvnox-from-white zyvnox-via-slate-50 zyvnox-to-amber-50/30 dark:zyvnox-from-slate-900 dark:zyvnox-via-slate-900/90 dark:zyvnox-to-amber-950/20 zyvnox-p-6 sm:zyvnox-p-8 zyvnox-shadow-sm zyvnox-space-y-4 space-y-4"
  >
    <!-- Background subtle glow -->
    <div
      class="zyvnox-absolute -zyvnox-right-12 -zyvnox-bottom-12 zyvnox-w-48 zyvnox-h-48 zyvnox-bg-amber-400/10 dark:zyvnox-bg-amber-500/10 zyvnox-rounded-full zyvnox-blur-3xl zyvnox-pointer-events-none"
    ></div>

    <div
      class="zyvnox-relative zyvnox-z-10 zyvnox-flex zyvnox-flex-col lg:zyvnox-flex-row zyvnox-items-start lg:zyvnox-items-center zyvnox-justify-between zyvnox-gap-6"
    >
      <div class="zyvnox-flex zyvnox-flex-col zyvnox-gap-3 zyvnox-space-y-3 space-y-3 zyvnox-max-w-2xl">
        <div class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2">
          <span
            class="zyvnox-px-2 zyvnox-py-1 zyvnox-rounded-full zyvnox-text-[11px] zyvnox-font-semibold zyvnox-bg-amber-100 dark:zyvnox-bg-amber-900/50 zyvnox-text-amber-700 dark:zyvnox-text-amber-300 zyvnox-border zyvnox-border-amber-200 dark:zyvnox-border-amber-800/60"
          >
            💖 Support Open Source
          </span>
          <span class="zyvnox-text-xs zyvnox-text-slate-500 dark:zyvnox-text-slate-400">
            Independent & Free
          </span>
        </div>

        <h3
          class="zyvnox-text-lg sm:zyvnox-text-xl zyvnox-font-bold zyvnox-text-slate-900 dark:zyvnox-text-white zyvnox-tracking-tight"
        >
          Support Early Release v0.1.0 &rarr; v1.0.0
        </h3>

        <p
          class="zyvnox-text-sm zyvnox-text-slate-600 dark:zyvnox-text-slate-300 zyvnox-leading-relaxed"
        >
          Help maintain free open-source docs, global CDN infrastructure, and expand 30+
          schema-driven Vue 3 components on our journey to v1.0.0 stable.
        </p>
      </div>

      <div class="zyvnox-flex zyvnox-flex-wrap zyvnox-items-center zyvnox-gap-3 zyvnox-shrink-0">
        <!-- Saweria CTA -->
        <a
          href="https://saweria.co/zyvnox"
          target="_blank"
          rel="noopener noreferrer"
          class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-px-4 zyvnox-py-2 zyvnox-rounded-xl zyvnox-text-white zyvnox-font-semibold zyvnox-text-xs zyvnox-shadow-sm zyvnox-transition-all hover:zyvnox-opacity-90 hover:zyvnox-shadow-md hover:zyvnox-scale-[1.02] active:zyvnox-scale-[0.98] zyvnox-no-underline"
          style="background-color: #FF7A00;"
        >
          <svg
            class="zyvnox-w-4 zyvnox-h-4 zyvnox-fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
          <span>Saweria</span>
          <span
            class="zyvnox-text-[9px] zyvnox-bg-black/25 zyvnox-px-1.5 zyvnox-py-0.5 zyvnox-rounded zyvnox-font-bold zyvnox-tracking-wider"
          >
            QRIS
          </span>
        </a>

        <!-- Ko-fi CTA -->
        <a
          href="https://ko-fi.com/zyvnox"
          target="_blank"
          rel="noopener noreferrer"
          class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-px-4 zyvnox-py-2 zyvnox-rounded-xl zyvnox-text-white zyvnox-font-semibold zyvnox-text-xs zyvnox-shadow-sm zyvnox-transition-all hover:zyvnox-opacity-90 hover:zyvnox-shadow-md hover:zyvnox-scale-[1.02] active:zyvnox-scale-[0.98] zyvnox-no-underline"
          style="background-color: #29ABE0;"
        >
          <svg
            class="zyvnox-w-4 zyvnox-h-4 zyvnox-fill-current"
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
    </div>
  </div>
</template>

<script setup lang="ts">
// SponsorCard component for site footer and sponsor documentation
</script>

