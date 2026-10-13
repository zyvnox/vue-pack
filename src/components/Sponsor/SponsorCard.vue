<template>
  <div
    class="zyvnox-sponsor-card zyvnox-relative zyvnox-overflow-hidden zyvnox-rounded-2xl zyvnox-p-6 sm:zyvnox-p-8 zyvnox-shadow-sm zyvnox-space-y-4 space-y-4"
  >
    <!-- Background subtle glow -->
    <div
      class="zyvnox-absolute -zyvnox-right-12 -zyvnox-bottom-12 zyvnox-w-48 zyvnox-h-48 zyvnox-bg-amber-400/10 dark:zyvnox-bg-amber-500/15 zyvnox-rounded-full zyvnox-blur-3xl zyvnox-pointer-events-none"
    ></div>

    <div
      class="zyvnox-relative zyvnox-z-10 zyvnox-flex zyvnox-flex-col lg:zyvnox-flex-row zyvnox-items-start lg:zyvnox-items-center zyvnox-justify-between zyvnox-gap-6"
    >
      <div class="zyvnox-flex zyvnox-flex-col zyvnox-gap-3 zyvnox-space-y-3 space-y-3 zyvnox-max-w-2xl">
        <div class="zyvnox-sponsor-badge-wrapper">
          <div class="zyvnox-sponsor-badge">
            <span class="zyvnox-badge-pulse-icon" aria-hidden="true">💖</span>
            <span class="zyvnox-badge-highlight">Support Open Source</span>
            <span class="zyvnox-badge-separator" aria-hidden="true">•</span>
            <span class="zyvnox-badge-subtext">100% Free &amp; Independent</span>
          </div>
        </div>

        <h3
          class="zyvnox-text-lg sm:zyvnox-text-xl zyvnox-font-bold zyvnox-text-slate-900 dark:zyvnox-text-white zyvnox-tracking-tight"
        >
          Support Early Release v0.1.1 &rarr; v1.0.0
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
          class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-px-4 zyvnox-py-2.5 zyvnox-rounded-xl zyvnox-text-white zyvnox-font-semibold zyvnox-text-xs zyvnox-shadow-sm zyvnox-transition-all hover:zyvnox-opacity-90 hover:zyvnox-shadow-md hover:zyvnox-scale-[1.02] active:zyvnox-scale-[0.98] zyvnox-no-underline"
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
            class="zyvnox-text-[9px] zyvnox-bg-black/25 zyvnox-px-1.5 zyvnox-py-0.5 zyvnox-rounded zyvnox-font-bold zyvnox-tracking-wider uppercase"
          >
            QRIS
          </span>
        </a>

        <!-- Ko-fi CTA -->
        <a
          href="https://ko-fi.com/zyvnox"
          target="_blank"
          rel="noopener noreferrer"
          class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-px-4 zyvnox-py-2.5 zyvnox-rounded-xl zyvnox-text-white zyvnox-font-semibold zyvnox-text-xs zyvnox-shadow-sm zyvnox-transition-all hover:zyvnox-opacity-90 hover:zyvnox-shadow-md hover:zyvnox-scale-[1.02] active:zyvnox-scale-[0.98] zyvnox-no-underline"
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

<style scoped>
.zyvnox-sponsor-card {
  position: relative;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 55%, rgba(254, 243, 199, 0.35) 100%);
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
}

.dark .zyvnox-sponsor-card,
html.dark .zyvnox-sponsor-card {
  background: linear-gradient(135deg, #0f172a 0%, #0b0f19 55%, rgba(69, 26, 3, 0.35) 100%) !important;
  border: 1px solid #1e293b !important;
  box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.5);
}

/* Unified Premium Sponsor Badge */
.zyvnox-sponsor-badge-wrapper {
  display: inline-flex;
}

.zyvnox-sponsor-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.325rem 0.85rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  line-height: 1rem;
  background: linear-gradient(135deg, rgba(244, 63, 94, 0.08) 0%, rgba(245, 158, 11, 0.08) 100%);
  border: 1px solid rgba(244, 63, 94, 0.22);
  box-shadow: 0 1px 2px rgba(244, 63, 94, 0.04);
  backdrop-filter: blur(8px);
  user-select: none;
}

.zyvnox-badge-pulse-icon {
  font-size: 0.875rem;
  line-height: 1;
  display: inline-block;
  transform-origin: center;
  animation: zyvnox-badge-pulse 2.4s infinite ease-in-out;
}

@keyframes zyvnox-badge-pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.18);
  }
}

.zyvnox-badge-highlight {
  font-weight: 700;
  color: #e11d48;
  letter-spacing: -0.01em;
}

.zyvnox-badge-separator {
  color: #cbd5e1;
  font-size: 0.65rem;
}

.zyvnox-badge-subtext {
  font-weight: 500;
  color: #64748b;
  font-size: 0.725rem;
}

/* Dark mode badge styles */
.dark .zyvnox-sponsor-badge,
html.dark .zyvnox-sponsor-badge {
  background: linear-gradient(135deg, rgba(244, 63, 94, 0.16) 0%, rgba(245, 158, 11, 0.12) 100%);
  border: 1px solid rgba(244, 63, 94, 0.38);
  box-shadow: 0 0 16px rgba(244, 63, 94, 0.14);
}

.dark .zyvnox-badge-highlight,
html.dark .zyvnox-badge-highlight {
  color: #fda4af;
  text-shadow: 0 0 10px rgba(253, 164, 175, 0.35);
}

.dark .zyvnox-badge-separator,
html.dark .zyvnox-badge-separator {
  color: #475569;
}

.dark .zyvnox-badge-subtext,
html.dark .zyvnox-badge-subtext {
  color: #94a3b8;
}
</style>

