<template>
  <div class="max-w-4xl mx-auto space-y-10 py-6">
    <!-- Header -->
    <header class="border-b border-slate-200 dark:border-slate-800 pb-6">
      <div class="flex flex-wrap items-center justify-between gap-4 mb-2">
        <div class="flex flex-wrap items-center gap-3">
          <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">What's New & Release Notes</h1>
          <span
            class="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-400 border border-amber-300/60 dark:border-amber-800/60"
          >
            v0.1.3 Early Release
          </span>
        </div>

        <!-- Version Selector Tabs -->
        <div class="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl text-xs font-semibold">
          <button
            type="button"
            v-for="ver in versions"
            :key="ver.id"
            @click="activeVersion = ver.id"
            class="px-3 py-1.5 rounded-lg transition-all cursor-pointer"
            :class="
              activeVersion === ver.id
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            "
          >
            {{ ver.label }}
          </button>
        </div>
      </div>

      <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
        Complete evolution and version release history of <code>@zyvnox/vue-pack</code>. Explore feature additions, UI redesigns, architectural cleanups, and migration guides across all versions.
      </p>
    </header>

    <!-- ========================================================================= -->
    <!-- VERSION 0.1.3 (LATEST) -->
    <!-- ========================================================================= -->
    <div v-if="activeVersion === 'v0.1.3' || activeVersion === 'all'" class="space-y-10">
      <div class="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60">
        <div>
          <span class="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase">Current Release</span>
          <h2 class="text-2xl font-extrabold text-slate-900 dark:text-white">v0.1.3 Early Release</h2>
          <p class="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Universal Drag & Drop, MapPicker routing with Start/Finish markers & GPS sync, FileInput redesign, Quill stability, and clean architecture.</p>
        </div>
        <div class="flex flex-wrap gap-1.5">
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">✨ Drag & Drop</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300">🗺️ MapPicker & GPS</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">📄 FileInput Polish</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300">🏛️ Clean Architecture</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300">📝 Quill Overhaul</span>
        </div>
      </div>

      <!-- Section: Universal Drag & Drop Engine -->
      <section class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-base">
            1
          </div>
          <div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100">Universal Drag & Drop Engine</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Native drag-and-drop file ingestion across all document and image components.</p>
          </div>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          <p>
            All document and photo uploaders now support seamless native OS drag and drop with instant client-side validation and visual drop feedback:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <h4 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <span>🎯</span> Anti-Flicker State Machine
              </h4>
              <p>Implemented depth-based <code>dragCounter</code> to completely prevent cursor flickering when hovering over nested child elements.</p>
            </div>
            <div class="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <h4 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <span>💫</span> Interactive Visual Overlay
              </h4>
              <p>Active drag states trigger a blue glowing dashed boundary and a floating animated bounce icon with clear drop guidance text.</p>
            </div>
          </div>
          <ul class="list-disc pl-4 space-y-1">
            <li><strong>Enabled Components:</strong> <code>FileInput</code>, <code>FileArrayInput</code>, <code>ImageInput</code>, and <code>ImageArrayInput</code>.</li>
            <li><strong>Automatic Pipeline:</strong> Uploaded images automatically pass through watermark generation and parallel canvas composition.</li>
          </ul>
        </div>
      </section>

      <!-- Section: FileInput Modernization -->
      <section class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-base">
            2
          </div>
          <div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100">FileInput Redesign & Visual Polish</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Eliminated icon collision, introduced sleek file preview cards, and refined disabled modes.</p>
          </div>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          <ul class="list-disc pl-4 space-y-1.5">
            <li><strong>Zero Overlapping Artifacts:</strong> Removed the legacy absolute-centered upload arrow SVG that previously bled under buttons.</li>
            <li><strong>File Preview Card:</strong> Selected files render as modern cards with document badges, truncated filenames, size/type metadata, and a quick-remove action.</li>
            <li><strong>Strict Read-Only Mode:</strong> When <code>disabled: true</code>, action buttons and delete controls are cleanly hidden.</li>
            <li><strong>External Error Propagation:</strong> Merged internal errors with external <code>:error</code> prop, placing error notices neatly outside the container.</li>
          </ul>
        </div>
      </section>

      <!-- Section: Quill Editor Overhaul -->
      <section class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-base">
            3
          </div>
          <div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100">Quill 2.0 Editor Stability & Performance</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Fixed browser freeze on image alignment, resolved dropdown text wrapping, and perfected dark mode.</p>
          </div>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          <ul class="list-disc pl-4 space-y-1.5">
            <li><strong>Zero-Lag Image Alignment:</strong> Removed heavy DOM style MutationObservers in <code>useQuillResizeToolbar.ts</code>, shifting toolbar positioning to pure hardware-accelerated CSS rules.</li>
            <li><strong>Legible Dark Mode Placeholder:</strong> Tuned placeholder text contrast in dark mode (crisp <code>#f8fafc</code> at 70% opacity).</li>
            <li><strong>Dropdown Alignment & Wrapping Fix:</strong> Eliminated awkward line-breaks on <code>Heading Level 2</code> and aligned select carets cleanly.</li>
            <li><strong>Console Warning Cleanup:</strong> Resolved Vue extraneous non-props warnings and Quill toolbar warnings for custom buttons.</li>
          </ul>
        </div>
      </section>

      <!-- Section: Clean Architecture -->
      <section class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-base">
            4
          </div>
          <div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100">Clean Architecture Refactoring</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Pure source code in <code>src/</code>, automated build outputs strictly in <code>dist/</code>.</p>
          </div>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          <ul class="list-disc pl-4 space-y-1.5">
            <li><strong>Deleted <code>src/style.css</code>:</strong> Removed 220 kB of generated CSS from <code>src/</code>, keeping git diffs completely clean.</li>
            <li><strong>Direct <code>dist/style.css</code> Resolution:</strong> Configured Vite and UnoCSS to resolve and emit stylesheets strictly within <code>dist/</code>.</li>
            <li><strong>Removed <code>sync-style-to-src</code> Plugin:</strong> Streamlined build pipeline and eliminated duplicate file I/O operations.</li>
          </ul>
        </div>
      </section>

      <!-- Section: MapPicker GIS Routing, Start/Finish Markers & GPS Sync -->
      <section class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-base">
            5
          </div>
          <div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100">MapPicker GIS Routing, Start/Finish Markers & GPS Sync</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Smart route endpoint extractor, 3D visual pin markers for Start and Finish, and native browser GPS sync.</p>
          </div>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <h4 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <span>📍</span> Smart Start &amp; Finish Pin Markers
              </h4>
              <p>
                Renders high-visibility 3D pin markers with precision needle tips directly on the map:
              </p>
              <ul class="list-disc pl-4 space-y-1">
                <li><strong class="text-emerald-600 dark:text-emerald-400">Titik Awal (Start / A):</strong> Vibrant green badge with uppercase "START" pill, circular "A" pin, and needle pointer.</li>
                <li><strong class="text-rose-600 dark:text-rose-400">Titik Selesai (Finish / B):</strong> Vibrant crimson badge with uppercase "FINISH" pill, circular "B" pin, and needle pointer.</li>
                <li><strong>Interactive Popups:</strong> Clicking either marker opens an informative card showing exact latitude and longitude coordinates.</li>
                <li><strong>Multi-Format Compatibility:</strong> Automatically extracts endpoints from OSRM routes, ORS GeoJSON, <code>LineString</code>, <code>MultiLineString</code>, and custom <code>waypoints</code> metadata.</li>
              </ul>
            </div>

            <div class="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <h4 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <span>🛰️</span> High-Accuracy GPS Synchronization
              </h4>
              <p>
                Integrated native browser Geolocation API with robust error recovery:
              </p>
              <ul class="list-disc pl-4 space-y-1">
                <li><strong>One-Click GPS Sync:</strong> Instant location detection with loading indicator and auto-zoom to current position.</li>
                <li><strong>Status Alerts:</strong> Clear user-friendly feedback for Permission Denied, Timeout, and Position Unavailable.</li>
                <li><strong>Configurable Options:</strong> Fine-tune accuracy via <code>gpsOptions: { enableHighAccuracy, timeout, maximumAge }</code>.</li>
                <li><strong>Reactive GeoJSON:</strong> Deep watcher on <code>props.geoJson</code> with automated bounds fitting and comfortable view padding.</li>
              </ul>
            </div>
          </div>

          <div class="p-3.5 rounded-lg bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200/70 dark:border-teal-800/50 flex flex-wrap items-center justify-between gap-3">
            <span class="text-slate-700 dark:text-slate-300">
              Want to see the interactive Surabaya route with Start &amp; Finish markers in action?
            </span>
            <RouterLink
              to="/doc/location-picker"
              class="px-3.5 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs transition-colors shrink-0"
            >
              View MapPicker Example &rarr;
            </RouterLink>
          </div>
        </div>
      </section>

      <!-- Section: Live Drag & Drop Demo -->
      <section class="space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100">Try Drag & Drop Live</h3>
          <span class="text-xs text-slate-500">v0.1.3 Interactive Preview</span>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-5">
          <p class="text-xs text-slate-600 dark:text-slate-400">
            Drag any document from your file explorer directly into the dropzones below:
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <span class="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">Single File Dropzone (FileInput)</span>
              <FileInput
                v-model="demoSingleFile"
                label="Sample Document Upload"
                :validate="{ maxSize: 5120 }"
              />
            </div>
            <div>
              <span class="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">Multiple Files Dropzone (FileArrayInput)</span>
              <FileArrayInput
                v-model="demoArrayFiles"
                label="Project Attachments"
                :validate="{ maxFiles: 5 }"
              />
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- ========================================================================= -->
    <!-- VERSION 0.1.2 -->
    <!-- ========================================================================= -->
    <div v-if="activeVersion === 'v0.1.2' || activeVersion === 'all'" class="space-y-10">
      <div class="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60">
        <div>
          <span class="text-xs font-bold text-amber-600 dark:text-amber-400 tracking-wider uppercase">Previous Release</span>
          <h2 class="text-2xl font-extrabold text-slate-900 dark:text-white">v0.1.2 Early Release</h2>
          <p class="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Feedback UI overhaul, smart validation routing, and dev style sync.</p>
        </div>
        <div class="flex flex-wrap gap-1.5">
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">✓ Feedback UI Polish</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300">⚠️ HTTP 400 in Warning Mode</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">⚙️ Unified type API</span>
        </div>
      </div>

      <!-- Feedback Components Modernization -->
      <section class="space-y-4">
        <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">Feedback Components Modernization</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2 text-xs">
            <span class="font-bold text-slate-900 dark:text-white block">⏳ Loader</span>
            <p class="text-slate-600 dark:text-slate-400">Smooth 60fps dual-ring CSS keyframe animation, official warning status with amber pill, zero double-circle artifacts in dark mode.</p>
          </div>
          <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2 text-xs">
            <span class="font-bold text-slate-900 dark:text-white block">🛡️ WarningForm</span>
            <p class="text-slate-600 dark:text-slate-400">Single unified <code>type="danger | warning | success | info"</code> prop, solid confirm buttons, and crisp vector outline icons.</p>
          </div>
          <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2 text-xs">
            <span class="font-bold text-slate-900 dark:text-white block">🔔 AlertApp</span>
            <p class="text-slate-600 dark:text-slate-400">Amber warning theme for validation alerts, semantic translucent dark mode styling, and themed list bullet markers.</p>
          </div>
        </div>
      </section>

      <!-- Smart Validation Routing -->
      <section class="space-y-4">
        <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">Smart Validation Routing (Warning vs Error)</h3>
        <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 text-xs text-slate-600 dark:text-slate-400">
          <p>
            Form validation failures (missing required fields, regex errors) and HTTP 400 Bad Request responses route to cautionary amber <code>'warning'</code> mode instead of harsh red <code>'error'</code> alerts. Red alerts are strictly reserved for server crashes (HTTP 500+) and fatal exceptions.
          </p>
        </div>
      </section>

      <!-- Migration Guide -->
      <section class="space-y-4">
        <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">Migration Guide (v0.1.1 ➔ v0.1.2)</h3>
        <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4 text-xs">
          <p class="text-slate-600 dark:text-slate-400">
            Replace legacy boolean flags with the single standardized <code>type</code> prop on <code>WarningForm</code>:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span class="text-[11px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider block mb-1">✕ Before (v0.1.1)</span>
              <CodeBlock :code="migrationBeforeCode" language="html" />
            </div>
            <div>
              <span class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">✓ Now (v0.1.2)</span>
              <CodeBlock :code="migrationAfterCode" language="html" />
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- ========================================================================= -->
    <!-- VERSION 0.1.1 -->
    <!-- ========================================================================= -->
    <div v-if="activeVersion === 'v0.1.1' || activeVersion === 'all'" class="space-y-6">
      <div class="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
        <div>
          <span class="text-xs font-bold text-slate-500 tracking-wider uppercase">Release</span>
          <h2 class="text-2xl font-extrabold text-slate-900 dark:text-white">v0.1.1 Early Release</h2>
          <p class="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Playground CDN integration, Monaco editor syntax highlighting, and Zod schema polish.</p>
        </div>
        <div class="flex flex-wrap gap-1.5">
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">⚡ CDN Ready</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">💻 Monaco Playground</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300">🛡️ Zod Types</span>
        </div>
      </div>

      <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
        <ul class="list-disc pl-4 space-y-1.5">
          <li><strong>Interactive Monaco Playground:</strong> Added full live SFC code execution with Monaco code editor, real-time syntax highlighting, and auto-complete snippets.</li>
          <li><strong>Zero-Install CDN Distribution:</strong> Standalone UMD and ESM bundles published to <code>dist/cdn/</code> for zero-build HTML usage via jsDelivr and unpkg.</li>
          <li><strong>Canonical Component Names:</strong> Standardized canonical naming for GIS maps (<code>MapPicker</code>) and rich-text editing (<code>TextAreaQuillInput</code>).</li>
          <li><strong>Extended i18n Language Pack:</strong> Expanded Indonesian (<code>id</code>) translations for comprehensive form validations and date/time pickers.</li>
        </ul>
      </div>
    </div>

    <!-- ========================================================================= -->
    <!-- VERSION 0.1.0 -->
    <!-- ========================================================================= -->
    <div v-if="activeVersion === 'v0.1.0' || activeVersion === 'all'" class="space-y-6">
      <div class="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
        <div>
          <span class="text-xs font-bold text-slate-500 tracking-wider uppercase">Initial Launch</span>
          <h2 class="text-2xl font-extrabold text-slate-900 dark:text-white">v0.1.0 Initial Early Release</h2>
          <p class="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Core engines, 25 form inputs, autonomous IndexedDB storage, and UnoCSS isolation.</p>
        </div>
        <div class="flex flex-wrap gap-1.5">
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">🚀 Initial Launch</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">🧩 Form & Table</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300">💾 IndexedDB</span>
        </div>
      </div>

      <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
        <ul class="list-disc pl-4 space-y-1.5">
          <li><strong>Schema-Driven Form Engine (<code>FormModal</code>):</strong> Declarative multi-step modal forms with dynamic field rendering, Zod validation, and responsive grid layouts.</li>
          <li><strong>Enterprise Datatable Suite (<code>TabelData</code>):</strong> Server-side & client-side paging, full-text searching, multi-column sorting, and batch record operations.</li>
          <li><strong>25 Production-Ready Input Components:</strong> Full spectrum of inputs ranging from basic text/number to complex GIS location maps, rich text WYSIWYG, and multi-file arrays.</li>
          <li><strong>Autonomous IndexedDB Manager:</strong> Reactive offline storage with on-demand store creation and Zod cache filtering.</li>
          <li><strong>Prefixed UnoCSS Isolation:</strong> Complete <code>zyvnox-</code> namespace prefixing to prevent stylesheet bleeding in host consumer applications.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FileInput, FileArrayInput } from '@zyvnox/vue-pack/components'
import CodeBlock from '@/components/CodeBlock.vue'

const versions = [
  { id: 'v0.1.3', label: 'v0.1.3 (Latest)' },
  { id: 'v0.1.2', label: 'v0.1.2' },
  { id: 'v0.1.1', label: 'v0.1.1' },
  { id: 'v0.1.0', label: 'v0.1.0' },
  { id: 'all', label: 'All History' },
]

const activeVersion = ref('v0.1.3')

// Live Demo State
const demoSingleFile = ref<File | string | null>('https://example.com/docs/sample-agreement.pdf')
const demoArrayFiles = ref<(File | string)[]>([])

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
