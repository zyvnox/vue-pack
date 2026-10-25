<template>
  <div class="max-w-4xl mx-auto space-y-10 py-6">
    <!-- Header -->
    <header class="border-b border-slate-200 dark:border-slate-800 pb-6">
      <div class="flex flex-wrap items-center gap-3 mb-2">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">What's New in v0.1.2</h1>
        <span
          class="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-400 border border-amber-300/60 dark:border-amber-800/60"
        >
          Early Release
        </span>
      </div>
      <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
        Version <strong>0.1.2</strong> introduces a major visual redesign for all feedback components (Loader, WarningForm, AlertApp), dev server stylesheet synchronization fixes, automatic validation and HTTP 400 error handling in cautionary warning mode, and a simplified <code>type</code> prop API for <code>WarningForm</code>.
      </p>

      <!-- Quick Summary Pills -->
      <div class="flex flex-wrap gap-2 mt-4">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
          ✓ Feedback UI Polish
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60">
          ⚠️ HTTP 400 & Validation in Warning Mode
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
          ⚙️ Unified WarningForm type API
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60">
          ⚡ Dev Server Style Sync Resolved
        </span>
      </div>
    </header>

    <!-- Section 1: Feedback Components Modernization -->
    <section class="space-y-6">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-base">
          1
        </div>
        <div>
          <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">Feedback Components Modernization</h2>
          <p class="text-xs text-slate-500 dark:text-slate-400">Visual refinement, crisp vector icons, and smooth animations across Loader, AlertApp, and WarningForm.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Card 1: Loader -->
        <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>⏳</span> Loader
            </span>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-semibold">Improved</span>
          </div>
          <ul class="text-xs text-slate-600 dark:text-slate-400 space-y-1.5 list-disc pl-4">
            <li><strong>Smooth Dual-Ring Spinner:</strong> Replaced jagged SVG arcs with fluid 60fps CSS keyframe animation.</li>
            <li><strong>Official Warning Status:</strong> Added full support for the <code>'warning'</code> state featuring an amber alert triangle badge on a soft rounded pill.</li>
            <li><strong>Zero Double-Ring Artifacts:</strong> Eliminated heavy borders on the icon wrapper that previously produced double white outline circles in dark mode.</li>
          </ul>
          <RouterLink to="/doc/examples/loader" class="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline pt-1">
            View Loader Documentation →
          </RouterLink>
        </div>

        <!-- Card 2: WarningForm -->
        <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>🛡️</span> WarningForm
            </span>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-semibold">API Simplified</span>
          </div>
          <ul class="text-xs text-slate-600 dark:text-slate-400 space-y-1.5 list-disc pl-4">
            <li><strong>Single <code>type</code> Prop:</strong> Deprecated legacy flags (<code>:is-green</code>, <code>isWarning</code>) in favor of <code>type="danger | warning | success | info"</code>.</li>
            <li><strong>Solid Confirm Buttons:</strong> Fixed transparent button background bug in dark mode by applying reliable static UnoCSS utilities.</li>
            <li><strong>Sharp Vector Outline Icons:</strong> Replaced inverted solid decagrams with high-contrast, scalable SVG icons.</li>
          </ul>
          <RouterLink to="/doc/examples/warning-form" class="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline pt-1">
            View WarningForm Documentation →
          </RouterLink>
        </div>

        <!-- Card 3: AlertApp -->
        <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>🔔</span> AlertApp
            </span>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 font-semibold">Themed Dark Mode</span>
          </div>
          <ul class="text-xs text-slate-600 dark:text-slate-400 space-y-1.5 list-disc pl-4">
            <li><strong>Yellow / Amber Warning Theme:</strong> Added dedicated amber toast styling (light: <code>amber-50</code>, dark: <code>amber-950/85</code>) for validation & cautionary alerts.</li>
            <li><strong>Semantic Dark Mode Cards:</strong> Replaced generic dark cards with vibrant translucent backgrounds and colored borders matching each status.</li>
            <li><strong>Themed List Markers:</strong> Message bullet markers now adopt their corresponding status colors via <code>[&::marker]</code>.</li>
          </ul>
          <RouterLink to="/doc/examples/alert-app" class="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline pt-1">
            View AlertApp Documentation →
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Section 2: Validation & HTTP 400 in Warning Mode -->
    <section class="space-y-4">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-base">
          2
        </div>
        <div>
          <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">Validation & HTTP 400 in Warning Mode</h2>
          <p class="text-xs text-slate-500 dark:text-slate-400">Clear semantic distinction between client input corrections and fatal server exceptions.</p>
        </div>
      </div>

      <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          Previously, form validation failures (such as missing required fields, regex mismatches, or unmodified records) triggered harsh red <code>'error'</code> alerts, leading users to believe an unrecoverable system crash occurred. In v0.1.2, these now route cleanly to cautionary <code>'warning'</code> mode:
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div class="p-3.5 rounded-lg bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-1.5">
            <div class="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
              <span>⚠️</span> Warning Mode (Yellow / Amber)
            </div>
            <ul class="list-disc pl-4 text-amber-900/90 dark:text-amber-200/90 space-y-1">
              <li>Form validation errors (empty required fields, format mismatches, range limits).</li>
              <li>HTTP 400 Bad Request responses from backend REST APIs.</li>
              <li>"No data has changed" notifications when updating unmodified records.</li>
              <li>Empty AI context warnings when triggering SEO Studio keyword generation.</li>
            </ul>
          </div>

          <div class="p-3.5 rounded-lg bg-rose-50/80 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 space-y-1.5">
            <div class="font-bold text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
              <span>✕</span> Error Mode (Red / Rose)
            </div>
            <ul class="list-disc pl-4 text-rose-900/90 dark:text-rose-200/90 space-y-1">
              <li>HTTP 500 Internal Server Errors.</li>
              <li>Network dropouts & gateway connection failures.</li>
              <li>Authentication & permission rejections (HTTP 401 / 403).</li>
              <li>Fatal unhandled runtime exceptions.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Dev Server Style Bug Resolution -->
    <section class="space-y-4">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-base">
          3
        </div>
        <div>
          <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">Dev Server Stylesheet Synchronization Fix</h2>
          <p class="text-xs text-slate-500 dark:text-slate-400">Automated stylesheet mirroring and absolute path resolution for UnoCSS.</p>
        </div>
      </div>

      <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
        <p>
          In prior versions, running <code>npm run site:preview</code> rendered styles normally, but <code>npm run dev</code> produced missing or broken styles. This discrepancy has been permanently resolved:
        </p>
        <ul class="list-disc pl-4 space-y-1.5">
          <li>
            <strong>Root Cause:</strong> Preview mode loaded the complete 205 kB <code>dist/style.css</code> bundle, whereas <code>npm run dev</code> aliased <code>@zyvnox/vue-pack/style.css</code> to an outdated <code>src/style.css</code> that was not updated during builds.
          </li>
          <li>
            <strong>Solution:</strong> <code>vite.config.ts</code> now directs the <code>@zyvnox/vue-pack/style.css</code> alias to <code>dist/style.css</code> and automatically mirrors <code>dist/style.css</code> to <code>src/style.css</code> via the new <code>sync-style-to-src</code> plugin upon every build completion.
          </li>
          <li>
            <strong>UnoCSS Absolute Paths:</strong> Template scanning in <code>site/uno.config.ts</code> now uses <code>path.resolve</code>, guaranteeing accurate utility class extraction regardless of whether the dev server is launched from root or the <code>site/</code> subdirectory.
          </li>
        </ul>
      </div>
    </section>

    <!-- Section 4: Migration Guide -->
    <section class="space-y-4">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-base">
          4
        </div>
        <div>
          <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">Migration Guide (v0.1.1 ➔ v0.1.2)</h2>
          <p class="text-xs text-slate-500 dark:text-slate-400">Straightforward upgrade steps when updating your <code>WarningForm</code> component invocations.</p>
        </div>
      </div>

      <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
        <p class="text-xs text-slate-600 dark:text-slate-400">
          Replace legacy boolean flags with the single standardized <code>type</code> prop:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <span class="text-[11px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider block mb-1">
              ✕ Before (v0.1.1)
            </span>
            <CodeBlock :code="migrationBeforeCode" language="html" />
          </div>
          <div>
            <span class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
              ✓ Now (v0.1.2)
            </span>
            <CodeBlock :code="migrationAfterCode" language="html" />
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Interactive Feedback Demo -->
    <section class="space-y-4">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">Try the Updated Components</h2>
        <span class="text-xs text-slate-500">Live Interactive Demo</span>
      </div>

      <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
        <p class="text-xs text-slate-600 dark:text-slate-400">
          Click the buttons below to preview the refreshed Loader, WarningForm, and AlertApp designs in real time:
        </p>

        <!-- Loader Mount & Trigger -->
        <Loader ref="loaderRef" />
        <AlertApp ref="alertRef" />

        <div class="flex flex-wrap items-center gap-3">
          <button
            type="button"
            @click="triggerLoaderWarning"
            class="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold transition-colors shadow-xs"
          >
            ⚠️ Test Loader Warning
          </button>
          <button
            type="button"
            @click="triggerLoaderSpinner"
            class="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-xs"
          >
            ⏳ Test Smooth Spinner
          </button>
          <button
            type="button"
            @click="triggerAlertWarning"
            class="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold transition-colors shadow-xs"
          >
            🔔 Test Warning Toast
          </button>
          <button
            type="button"
            @click="showWarningForm = true"
            class="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold transition-colors shadow-xs"
          >
            🛡️ Test WarningForm Modal
          </button>
        </div>

        <WarningForm
          v-if="showWarningForm"
          type="warning"
          title="Verify Sensitive Operation"
          message="Example WarningForm dialog using the newly standardized type='warning' prop in v0.1.2."
          confirm-text="Proceed"
          cancel-text="Cancel"
          @confirm="showWarningForm = false"
          @cancel="showWarningForm = false"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Loader, WarningForm, AlertApp } from '@zyvnox/vue-pack/components'
import CodeBlock from '@/components/CodeBlock.vue'

const loaderRef = ref<InstanceType<typeof Loader> | null>(null)
const alertRef = ref<InstanceType<typeof AlertApp> | null>(null)
const showWarningForm = ref(false)

const triggerLoaderWarning = () => {
  loaderRef.value?.show('warning', 'Warning: High network latency detected')
}

const triggerLoaderSpinner = () => {
  loaderRef.value?.show('loading', 'Synchronizing data with server...')
  setTimeout(() => {
    loaderRef.value?.hide()
  }, 2000)
}

const triggerAlertWarning = () => {
  alertRef.value?.addAlert({
    type: 'warning',
    title: 'Input Validation Required',
    messages: [
      'Project Name is a required field.',
      'Contact email format is invalid.',
    ],
  })
}

const migrationBeforeCode = `<!-- Danger / Delete -->
<WarningForm :is-green="false" title="Delete?" />

<!-- Success / Approve -->
<WarningForm :is-green="true" title="Approve?" />

<!-- Warning -->
<WarningForm :is-warning="true" title="Caution?" />`

const migrationAfterCode = `<!-- Danger / Delete (Default) -->
<WarningForm type="danger" title="Delete?" />

<!-- Success / Approve -->
<WarningForm type="success" title="Approve?" />

<!-- Warning (Yellow / Amber) -->
<WarningForm type="warning" title="Caution?" />

<!-- Info (Blue) -->
<WarningForm type="info" title="Information?" />`
</script>
