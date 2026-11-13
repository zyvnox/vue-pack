<template>
  <div class="max-w-4xl mx-auto space-y-10 py-6">
    <!-- Header -->
    <header class="border-b border-slate-200 dark:border-slate-800 pb-6">
      <div class="flex flex-wrap items-center justify-between gap-4 mb-2">
        <div class="flex flex-wrap items-center gap-3">
          <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">{{ t('whatsNew.title') }}</h1>
          <span
            class="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-400 border border-amber-300/60 dark:border-amber-800/60"
          >
            {{ t('whatsNew.badge') }}
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
        {{ t('whatsNew.subtitle') }}
      </p>
    </header>

    <!-- ========================================================================= -->
    <!-- VERSION 0.1.4 (LATEST) -->
    <!-- ========================================================================= -->
    <div v-if="activeVersion === 'v0.1.4' || activeVersion === 'all'" class="space-y-6">
      <div class="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60">
        <div>
          <span class="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase">{{ t('whatsNew.currentRelease') }}</span>
          <h2 class="text-2xl font-extrabold text-slate-900 dark:text-white">v0.1.4 Early Release</h2>
          <p class="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{{ t('whatsNew.v014Summary') }}</p>
        </div>
        <div class="flex flex-wrap gap-1.5">
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">💱 Multi-Currency</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300">🧱 ArrayObject Slots</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300">🎨 Input Polish</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300">🔎 SEO & Types</span>
        </div>
      </div>

      <section class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <article class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
          <h3 class="font-bold text-slate-900 dark:text-white">{{ t('whatsNew.v014.currencyTitle') }}</h3>
          <ul class="list-disc pl-4 space-y-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            <li>{{ t('whatsNew.v014.currencyItem1') }}</li>
            <li>{{ t('whatsNew.v014.currencyItem2') }}</li>
          </ul>
        </article>
        <article class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
          <h3 class="font-bold text-slate-900 dark:text-white">{{ t('whatsNew.v014.arrayTitle') }}</h3>
          <ul class="list-disc pl-4 space-y-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            <li>{{ t('whatsNew.v014.arrayItem1') }}</li>
            <li>{{ t('whatsNew.v014.arrayItem2') }}</li>
          </ul>
        </article>
        <article class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
          <h3 class="font-bold text-slate-900 dark:text-white">{{ t('whatsNew.v014.uiTitle') }}</h3>
          <ul class="list-disc pl-4 space-y-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            <li>{{ t('whatsNew.v014.uiItem1') }}</li>
            <li>{{ t('whatsNew.v014.uiItem2') }}</li>
          </ul>
        </article>
        <article class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
          <h3 class="font-bold text-slate-900 dark:text-white">{{ t('whatsNew.v014.maintenanceTitle') }}</h3>
          <ul class="list-disc pl-4 space-y-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            <li>{{ t('whatsNew.v014.maintenanceItem1') }}</li>
            <li>{{ t('whatsNew.v014.maintenanceItem2') }}</li>
          </ul>
        </article>
      </section>
    </div>

    <!-- ========================================================================= -->
    <!-- VERSION 0.1.3 -->
    <!-- ========================================================================= -->
    <div v-if="activeVersion === 'v0.1.3' || activeVersion === 'all'" class="space-y-10">
      <div class="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60">
        <div>
          <span class="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase">{{ t('whatsNew.previousRelease') }}</span>
          <h2 class="text-2xl font-extrabold text-slate-900 dark:text-white">v0.1.3 Early Release</h2>
          <p class="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{{ t('whatsNew.v013Summary') }}</p>
        </div>
        <div class="flex flex-wrap gap-1.5">
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">✨ Drag & Drop</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300">🗺️ MapPicker & GPS</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">📄 FileInput Polish</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300">🏛️ Clean Architecture</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300">📝 Quill Overhaul</span>
        </div>
      </div>

      <!-- Section 1: Universal Drag & Drop Engine -->
      <section class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-base">
            1
          </div>
          <div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100">{{ t('whatsNew.sec1Title') }}</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">{{ t('whatsNew.sec1Desc') }}</p>
          </div>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          <p>
            {{ t('whatsNew.sec1Intro') }}
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <h4 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <span>🎯</span> {{ t('whatsNew.sec1Card1Title') }}
              </h4>
              <p>{{ t('whatsNew.sec1Card1Desc') }}</p>
            </div>
            <div class="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <h4 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <span>💫</span> {{ t('whatsNew.sec1Card2Title') }}
              </h4>
              <p>{{ t('whatsNew.sec1Card2Desc') }}</p>
            </div>
          </div>
          <ul class="list-disc pl-4 space-y-1">
            <li>{{ t('whatsNew.sec1List1') }}</li>
            <li>{{ t('whatsNew.sec1List2') }}</li>
          </ul>
        </div>
      </section>

      <!-- Section 2: FileInput Modernization -->
      <section class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-base">
            2
          </div>
          <div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100">{{ t('whatsNew.sec2Title') }}</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">{{ t('whatsNew.sec2Desc') }}</p>
          </div>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          <ul class="list-disc pl-4 space-y-1.5">
            <li>{{ t('whatsNew.sec2Item1') }}</li>
            <li>{{ t('whatsNew.sec2Item2') }}</li>
            <li>{{ t('whatsNew.sec2Item3') }}</li>
            <li>{{ t('whatsNew.sec2Item4') }}</li>
          </ul>
        </div>
      </section>

      <!-- Section 3: Quill Editor Overhaul -->
      <section class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-base">
            3
          </div>
          <div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100">{{ t('whatsNew.sec3Title') }}</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">{{ t('whatsNew.sec3Desc') }}</p>
          </div>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          <ul class="list-disc pl-4 space-y-1.5">
            <li>{{ t('whatsNew.sec3Item1') }}</li>
            <li>{{ t('whatsNew.sec3Item2') }}</li>
            <li>{{ t('whatsNew.sec3Item3') }}</li>
            <li>{{ t('whatsNew.sec3Item4') }}</li>
          </ul>
        </div>
      </section>

      <!-- Section 4: Clean Architecture -->
      <section class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-base">
            4
          </div>
          <div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100">{{ t('whatsNew.sec4Title') }}</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">{{ t('whatsNew.sec4Desc') }}</p>
          </div>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          <ul class="list-disc pl-4 space-y-1.5">
            <li>{{ t('whatsNew.sec4Item1') }}</li>
            <li>{{ t('whatsNew.sec4Item2') }}</li>
            <li>{{ t('whatsNew.sec4Item3') }}</li>
          </ul>
        </div>
      </section>

      <!-- Section 5: MapPicker GIS Routing, Start/Finish Markers & GPS Sync -->
      <section class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-base">
            5
          </div>
          <div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100">{{ t('whatsNew.sec5Title') }}</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">{{ t('whatsNew.sec5Desc') }}</p>
          </div>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <h4 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <span>📍</span> {{ t('whatsNew.sec5Card1Title') }}
              </h4>
              <p>
                {{ t('whatsNew.sec5Card1Intro') }}
              </p>
              <ul class="list-disc pl-4 space-y-1">
                <li><strong class="text-emerald-600 dark:text-emerald-400">{{ t('whatsNew.sec5Card1Start') }}</strong></li>
                <li><strong class="text-rose-600 dark:text-rose-400">{{ t('whatsNew.sec5Card1Finish') }}</strong></li>
                <li>{{ t('whatsNew.sec5Card1Popup') }}</li>
                <li>{{ t('whatsNew.sec5Card1Formats') }}</li>
              </ul>
            </div>

            <div class="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <h4 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <span>🛰️</span> {{ t('whatsNew.sec5Card2Title') }}
              </h4>
              <p>
                {{ t('whatsNew.sec5Card2Intro') }}
              </p>
              <ul class="list-disc pl-4 space-y-1">
                <li>{{ t('whatsNew.sec5Card2Gps1') }}</li>
                <li>{{ t('whatsNew.sec5Card2Gps2') }}</li>
                <li>{{ t('whatsNew.sec5Card2Gps3') }}</li>
                <li>{{ t('whatsNew.sec5Card2Gps4') }}</li>
              </ul>
            </div>
          </div>

          <div class="p-3.5 rounded-lg bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200/70 dark:border-teal-800/50 flex flex-wrap items-center justify-between gap-3">
            <span class="text-slate-700 dark:text-slate-300">
              {{ t('whatsNew.sec5CtaQuestion') }}
            </span>
            <RouterLink
              to="/doc/location-picker"
              class="px-3.5 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs transition-colors shrink-0"
            >
              {{ t('whatsNew.sec5CtaButton') }}
            </RouterLink>
          </div>
        </div>
      </section>

      <!-- Section: Live Drag & Drop Demo -->
      <section class="space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100">{{ t('whatsNew.demoTitle') }}</h3>
          <span class="text-xs text-slate-500">{{ t('whatsNew.demoBadge') }}</span>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-5">
          <p class="text-xs text-slate-600 dark:text-slate-400">
            {{ t('whatsNew.demoDesc') }}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <span class="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">{{ t('whatsNew.demoSingleDrop') }}</span>
              <FileInput
                v-model="demoSingleFile"
                :label="t('whatsNew.demoSingleLabel')"
                :validate="{ maxSize: 5120 }"
              />
            </div>
            <div>
              <span class="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">{{ t('whatsNew.demoMultiDrop') }}</span>
              <FileArrayInput
                v-model="demoArrayFiles"
                :label="t('whatsNew.demoMultiLabel')"
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
          <span class="text-xs font-bold text-amber-600 dark:text-amber-400 tracking-wider uppercase">{{ t('whatsNew.v012.tag') }}</span>
          <h2 class="text-2xl font-extrabold text-slate-900 dark:text-white">{{ t('whatsNew.v012.title') }}</h2>
          <p class="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{{ t('whatsNew.v012.summary') }}</p>
        </div>
        <div class="flex flex-wrap gap-1.5">
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">✓ Feedback UI Polish</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300">⚠️ HTTP 400 in Warning Mode</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">⚙️ Unified type API</span>
        </div>
      </div>

      <!-- Feedback Components Modernization -->
      <section class="space-y-4">
        <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">{{ t('whatsNew.v012.feedbackTitle') }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2 text-xs">
            <span class="font-bold text-slate-900 dark:text-white block">⏳ Loader</span>
            <p class="text-slate-600 dark:text-slate-400">{{ t('whatsNew.v012.loaderDesc') }}</p>
          </div>
          <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2 text-xs">
            <span class="font-bold text-slate-900 dark:text-white block">🛡️ WarningForm</span>
            <p class="text-slate-600 dark:text-slate-400">{{ t('whatsNew.v012.warningFormDesc') }}</p>
          </div>
          <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2 text-xs">
            <span class="font-bold text-slate-900 dark:text-white block">🔔 AlertApp</span>
            <p class="text-slate-600 dark:text-slate-400">{{ t('whatsNew.v012.alertAppDesc') }}</p>
          </div>
        </div>
      </section>

      <!-- Smart Validation Routing -->
      <section class="space-y-4">
        <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">{{ t('whatsNew.v012.routingTitle') }}</h3>
        <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 text-xs text-slate-600 dark:text-slate-400">
          <p>
            {{ t('whatsNew.v012.routingDesc') }}
          </p>
        </div>
      </section>

      <!-- Migration Guide -->
      <section class="space-y-4">
        <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">{{ t('whatsNew.v012.migrationTitle') }}</h3>
        <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4 text-xs">
          <p class="text-slate-600 dark:text-slate-400">
            {{ t('whatsNew.v012.migrationDesc') }}
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span class="text-[11px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider block mb-1">{{ t('whatsNew.v012.before') }}</span>
              <CodeBlock :code="migrationBeforeCode" language="html" />
            </div>
            <div>
              <span class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">{{ t('whatsNew.v012.now') }}</span>
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
          <span class="text-xs font-bold text-slate-500 tracking-wider uppercase">{{ t('whatsNew.v011.tag') }}</span>
          <h2 class="text-2xl font-extrabold text-slate-900 dark:text-white">{{ t('whatsNew.v011.title') }}</h2>
          <p class="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{{ t('whatsNew.v011.summary') }}</p>
        </div>
        <div class="flex flex-wrap gap-1.5">
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">⚡ CDN Ready</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">💻 Monaco Playground</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300">🛡️ Zod Types</span>
        </div>
      </div>

      <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
        <ul class="list-disc pl-4 space-y-1.5">
          <li>{{ t('whatsNew.v011.item1') }}</li>
          <li>{{ t('whatsNew.v011.item2') }}</li>
          <li>{{ t('whatsNew.v011.item3') }}</li>
          <li>{{ t('whatsNew.v011.item4') }}</li>
        </ul>
      </div>
    </div>

    <!-- ========================================================================= -->
    <!-- VERSION 0.1.0 -->
    <!-- ========================================================================= -->
    <div v-if="activeVersion === 'v0.1.0' || activeVersion === 'all'" class="space-y-6">
      <div class="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
        <div>
          <span class="text-xs font-bold text-slate-500 tracking-wider uppercase">{{ t('whatsNew.v010.tag') }}</span>
          <h2 class="text-2xl font-extrabold text-slate-900 dark:text-white">{{ t('whatsNew.v010.title') }}</h2>
          <p class="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{{ t('whatsNew.v010.summary') }}</p>
        </div>
        <div class="flex flex-wrap gap-1.5">
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">🚀 Initial Launch</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">🧩 Form & Table</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300">💾 IndexedDB</span>
        </div>
      </div>

      <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
        <ul class="list-disc pl-4 space-y-1.5">
          <li>{{ t('whatsNew.v010.item1') }}</li>
          <li>{{ t('whatsNew.v010.item2') }}</li>
          <li>{{ t('whatsNew.v010.item3') }}</li>
          <li>{{ t('whatsNew.v010.item4') }}</li>
          <li>{{ t('whatsNew.v010.item5') }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { FileInput, FileArrayInput } from '@zyvnox/vue-pack/components'
import CodeBlock from '@/components/CodeBlock.vue'
import { useSiteI18n } from '@/i18n'

const { t } = useSiteI18n()

const versions = computed(() => [
  { id: 'v0.1.4', label: t('whatsNew.tabs.latest') },
  { id: 'v0.1.3', label: 'v0.1.3' },
  { id: 'v0.1.2', label: t('whatsNew.tabs.v012') },
  { id: 'v0.1.1', label: t('whatsNew.tabs.v011') },
  { id: 'v0.1.0', label: t('whatsNew.tabs.v010') },
  { id: 'all', label: t('whatsNew.tabs.all') },
])

const activeVersion = ref('v0.1.4')

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
