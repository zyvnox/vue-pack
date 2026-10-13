<template>
  <div class="space-y-6">
    <!-- Header Banner -->
    <div
      class="p-6 rounded-2xl bg-gradient-to-r from-emerald-600/10 via-teal-600/10 to-cyan-600/10 border border-emerald-200/50 dark:border-emerald-900/30"
    >
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span
            class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider"
          >
            Subpath: @zyvnox/vue-pack (SEO Optimization Engine)
          </span>
          <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            Real-Time SEO Studio & On-Page Auditor
          </h2>
          <p class="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
            Test and verify real-time on-page SEO algorithm calculations: Meta Title/Description
            limits, Focus Keyword relevance (Headings, Lead paragraph, Alt Text, Links),
            false-positive density elimination, and live Google SERP snippet preview.
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-2">
          <button
            type="button"
            @click="loadSample('optimal')"
            class="px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5"
            title="Load sample article with optimal SEO (score 90-100%)"
          >
            <span>🌟</span>
            <span>Load Optimal Article</span>
          </button>
          <button
            type="button"
            @click="loadSample('suboptimal')"
            class="px-3.5 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/60 text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5"
            title="Load suboptimal draft sample"
          >
            <span>⚠️</span>
            <span>Load Suboptimal</span>
          </button>
          <button
            type="button"
            @click="openModalTest"
            class="px-3.5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 text-xs sm:text-sm font-semibold shadow-sm transition-all flex items-center gap-1.5"
            title="Test SEO pill interaction directly inside FormModal"
          >
            <span>🪟</span>
            <span>Test in FormModal</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Quick Stats Cards -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div
        class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4"
      >
        <div
          class="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg"
          :class="scoreBadgeClass"
        >
          {{ seoAnalysis.score }}
        </div>
        <div>
          <span class="text-xs font-semibold text-slate-500 dark:text-slate-400"> SEO Score </span>
          <div class="text-sm font-bold mt-0.5" :class="scoreTextClass">
            {{ scoreVerdict }}
          </div>
        </div>
      </div>

      <div
        class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
      >
        <span class="text-xs font-semibold text-slate-500 dark:text-slate-400"> Word Count </span>
        <div class="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
          {{ wordCount }}
          <span class="text-xs font-normal text-slate-400">words</span>
        </div>
      </div>

      <div
        class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
      >
        <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">
          Keyword Density
        </span>
        <div class="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
          {{ keywordDensity }}%
          <span class="text-xs font-normal text-slate-400">({{ keywordHits }}x)</span>
        </div>
      </div>

      <div
        class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
      >
        <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">
          Passed Checks
        </span>
        <div class="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
          <span class="text-emerald-600 dark:text-emerald-400">{{ passedChecksCount }}</span>
          <span class="text-slate-400 text-sm font-normal">
            / {{ seoAnalysis.details.length }}</span
          >
        </div>
      </div>
    </div>

    <!-- Main Workspace: Form & Content on Left, SERP Preview & Checklist on Right -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- Left Column: Content & SEO Inputs -->
      <div class="lg:col-span-7 space-y-6">
        <div
          class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5"
        >
          <div
            class="border-b border-slate-100 dark:border-slate-800 pb-4 flex items-center justify-between"
          >
            <h3 class="font-bold text-slate-900 dark:text-white text-base">
              Metadata & Article Content
            </h3>
            <div class="flex items-center gap-2">
              <label class="text-xs text-slate-500 dark:text-slate-400">Type:</label>
              <select
                v-model="seoForm.contentType"
                class="text-xs px-2.5 py-1 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              >
                <option value="article">Article (Min 300 words)</option>
                <option value="product">Product (Min 100 words)</option>
                <option value="page">Page (Min 150 words)</option>
                <option value="promo">Promo (Min 50 words)</option>
              </select>
            </div>
          </div>

          <!-- Focus Keyword -->
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-200">
                🎯 Focus Keyword *
              </label>
              <span class="text-[11px] text-slate-400">Primary Google search target</span>
            </div>
            <input
              v-model="seoForm.focusKeyword"
              type="text"
              placeholder="e.g. vue 3 component library"
              class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-sm"
            />
          </div>

          <!-- Meta Title -->
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-200">
                🏷️ Meta Title *
              </label>
              <span
                class="text-[11px] font-mono"
                :class="
                  seoForm.metaTitle.length >= 30 && seoForm.metaTitle.length <= 60
                    ? 'text-emerald-500'
                    : 'text-amber-500'
                "
              >
                {{ seoForm.metaTitle.length }} / 60 characters (Ideal: 30-60)
              </span>
            </div>
            <input
              v-model="seoForm.metaTitle"
              type="text"
              placeholder="Page title for search engines..."
              class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-sm"
            />
          </div>

          <!-- Meta Description -->
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-200">
                📄 Meta Description *
              </label>
              <span
                class="text-[11px] font-mono"
                :class="
                  seoForm.metaDescription.length >= 120 && seoForm.metaDescription.length <= 160
                    ? 'text-emerald-500'
                    : 'text-amber-500'
                "
              >
                {{ seoForm.metaDescription.length }} / 160 characters (Ideal: 120-160)
              </span>
            </div>
            <textarea
              v-model="seoForm.metaDescription"
              rows="3"
              placeholder="Concise, compelling snippet for search engine users..."
              class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-sm"
            ></textarea>
          </div>

          <!-- URL Slug & Content Title -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div class="flex items-center justify-between mb-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-200">
                  🔗 URL Slug
                </label>
                <button
                  type="button"
                  @click="generateSlug"
                  class="text-[11px] text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  Auto from Title
                </button>
              </div>
              <input
                v-model="seoForm.slug"
                type="text"
                placeholder="example-url-slug"
                class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-sm font-mono"
              />
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1.5">
                📰 Content Title (H1)
              </label>
              <input
                v-model="seoForm.contentTitle"
                type="text"
                placeholder="Main article headline..."
                class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-sm"
              />
            </div>
          </div>

          <!-- Body Content (HTML / Rich Text) -->
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-200">
                📝 Body Content (HTML / Markdown)
              </label>
              <div class="flex items-center gap-1.5">
                <button
                  type="button"
                  @click="insertHeading"
                  class="px-2 py-0.5 text-[11px] rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                  title="Insert H2 tag"
                >
                  + H2
                </button>
                <button
                  type="button"
                  @click="insertImageAlt"
                  class="px-2 py-0.5 text-[11px] rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                  title="Insert image with alt text"
                >
                  + Img Alt
                </button>
                <button
                  type="button"
                  @click="insertLink"
                  class="px-2 py-0.5 text-[11px] rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                  title="Insert hyperlink"
                >
                  + Link
                </button>
              </div>
            </div>
            <textarea
              v-model="seoForm.bodyContent"
              rows="9"
              placeholder="Write article using HTML tags like <h2>, <p>, <img>, <a>..."
              class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs sm:text-sm font-mono"
            ></textarea>
          </div>

          <!-- Extra Fields: Image, Author, Tags -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1.5">
                🖼️ Featured Image URL
              </label>
              <input
                v-model="seoForm.featuredImage"
                type="text"
                placeholder="https://example.com/banner.jpg"
                class="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500/20 outline-none text-xs"
              />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1.5">
                ✍️ Author (E-E-A-T)
              </label>
              <input
                v-model="seoForm.author"
                type="text"
                placeholder="Author name..."
                class="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500/20 outline-none text-xs"
              />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1.5">
                🏷️ Tags (Comma-separated)
              </label>
              <input
                v-model="seoForm.tags"
                type="text"
                placeholder="vue, typescript, seo"
                class="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500/20 outline-none text-xs"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: SERP Google Preview & SEO Checklist Details -->
      <div class="lg:col-span-5 space-y-6">
        <!-- Google SERP Snippet Preview -->
        <div
          class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
        >
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Google SERP Preview
            </span>
            <span class="text-[11px] text-slate-400">Desktop Snippet</span>
          </div>

          <div
            class="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 space-y-1"
          >
            <!-- URL / Breadcrumb -->
            <div class="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
              <img
                src="/favicon.ico"
                alt="favicon"
                class="w-4 h-4 rounded-full object-contain"
              />
              <span class="truncate"
                >https://example.com › {{ seoForm.slug || 'article-slug' }}</span
              >
            </div>

            <!-- SERP Title -->
            <h4
              class="text-base sm:text-lg font-medium text-blue-700 dark:text-blue-400 hover:underline cursor-pointer leading-snug line-clamp-2"
            >
              {{ seoForm.metaTitle || 'Page Title Not Provided' }}
            </h4>

            <!-- SERP Snippet Description -->
            <p
              class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed"
            >
              {{
                seoForm.metaDescription ||
                'Page description not provided. Google will extract a snippet from the content when left blank.'
              }}
            </p>
          </div>
        </div>

        <!-- SEO Checklist Breakdown -->
        <div
          class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
        >
          <div
            class="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between"
          >
            <div>
              <h3 class="font-bold text-slate-900 dark:text-white text-sm">
                Audit Analysis Checklist
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                Real-time updates from <code>calculateSeo</code> engine
              </p>
            </div>

            <!-- Group Filter Tabs -->
            <div class="flex items-center gap-1">
              <button
                type="button"
                v-for="grp in groupFilters"
                :key="grp.id"
                @click="activeGroupFilter = grp.id"
                class="px-2 py-1 rounded-lg text-[11px] font-medium transition-colors"
                :class="
                  activeGroupFilter === grp.id
                    ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-semibold'
                    : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                "
              >
                {{ grp.label }}
              </button>
            </div>
          </div>

          <!-- Items List -->
          <div class="p-4 space-y-2.5 max-h-[460px] overflow-y-auto zyvnox-modal-scrollbar">
            <div
              v-for="(item, idx) in filteredDetails"
              :key="idx"
              class="p-3 rounded-xl border transition-all"
              :class="
                item.passed
                  ? 'bg-emerald-50/40 border-emerald-100 dark:bg-emerald-950/20 dark:border-emerald-900/40'
                  : 'bg-red-50/40 border-red-100 dark:bg-red-950/20 dark:border-red-900/40'
              "
            >
              <div class="flex items-start gap-2.5">
                <span
                  class="w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5"
                  :class="item.passed ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'"
                >
                  {{ item.passed ? '✓' : '✕' }}
                </span>

                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between gap-2">
                    <span class="text-xs font-bold text-slate-900 dark:text-white">
                      {{ item.label }}
                    </span>
                    <span
                      class="text-[10px] px-1.5 py-0.5 rounded font-mono uppercase font-semibold"
                      :class="groupBadgeClass(item.group)"
                    >
                      {{ item.group }} (+{{ item.score }})
                    </span>
                  </div>
                  <p
                    class="text-xs mt-0.5"
                    :class="
                      item.passed
                        ? 'text-emerald-700 dark:text-emerald-300'
                        : 'text-red-700 dark:text-red-300'
                    "
                  >
                    {{ item.message }}
                  </p>
                </div>
              </div>
            </div>

            <div
              v-if="filteredDetails.length === 0"
              class="py-8 text-center text-xs text-slate-400"
            >
              No criteria found in this group.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Interactive Test -->
    <FormModal
      v-if="showModal"
      :schema="modalSchema"
      :initial-data="modalFormData"
      :is-update="false"
      lang="en"
      :seo="seoMapping"
      @cancel="showModal = false"
      @submit="handleModalSubmit"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { calculateSeo } from '@zyvnox/vue-pack'
import { FormModal } from '@zyvnox/vue-pack/components'
import type { SeoFieldMapping, Schema } from '@zyvnox/vue-pack/type'

const origin = window.location.origin;
// 1. Reactive Input Form State
const seoForm = reactive({
  contentType: 'article' as 'article' | 'product' | 'page' | 'promo',
  focusKeyword: 'vue 3 component library',
  metaTitle: 'Vue 3 Schema Component Library - Enterprise UI Pack',
  metaDescription:
    'A high-performance vue 3 component library built with TypeScript and UnoCSS. Includes schema-driven forms, interactive datatable suite, and SEO engine.',
  slug: 'vue-3-schema-component-library',
  contentTitle: 'Complete Guide to Using Vue 3 Component Library',
  bodyContent: `<h2>1. What is a Vue 3 Component Library?</h2>
<p>In modern enterprise web development, adopting a vue 3 component library is crucial to accelerate building dashboards and schema-driven form generators.</p>
<p>This library is modularly designed to support subpath exports and efficient tree-shaking.</p>

<h2>2. Benefits of Schema-Driven Architecture</h2>
<p>With Zod validation schema integration, all inputs are safely validated on both client and server tiers.</p>
<p>Visit the <a href="https://example.com/docs">official documentation</a> for a complete installation guide.</p>
<img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" alt="Coding illustration for vue 3 component library" />

<h2>3. Conclusion</h2>
<p>Adopting a vue 3 component library delivers high stability and seamless long-term maintenance.</p>`,
  featuredImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
  author: 'Zyvnox Development Team',
  tags: 'vue3, typescript, component-library, unocss',
})

// 2. SEO Mapping Configuration
const seoMapping = computed<SeoFieldMapping>(() => ({
  contentType: seoForm.contentType,
  meta: {
    title: 'metaTitle',
    description: 'metaDescription',
    slug: 'slug',
    focusKeyword: 'focusKeyword',
  },
  content: {
    title: 'contentTitle',
    body: 'bodyContent',
    image: 'featuredImage',
    author: 'author',
    tags: 'tags',
  },
  social: {
    ogImage: 'featuredImage',
    ogTitle: 'metaTitle',
    ogDescription: 'metaDescription',
  },
}))

// 3. Live SEO Analysis Evaluation
const seoAnalysis = computed(() => {
  return calculateSeo(seoForm, { seo: seoMapping.value })
})

// 4. Helper Metrics
const wordCount = computed(() => {
  if (!seoForm.bodyContent) return 0
  const clean = seoForm.bodyContent
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  return clean ? clean.split(/\s+/).length : 0
})

const keywordHits = computed(() => {
  if (!seoForm.bodyContent || !seoForm.focusKeyword) return 0
  const kw = seoForm.focusKeyword.toLowerCase().trim()
  const clean = seoForm.bodyContent.replace(/<[^>]+>/g, ' ').toLowerCase()
  const matches = clean.match(
    new RegExp(`(^|\\P{L})${kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?=\\P{L}|$)`, 'gui'),
  )
  return matches ? matches.length : 0
})

const keywordDensity = computed(() => {
  if (wordCount.value === 0 || keywordHits.value === 0) return '0.0'
  return ((keywordHits.value / wordCount.value) * 100).toFixed(1)
})

const passedChecksCount = computed(() => {
  return seoAnalysis.value.details.filter((d: any) => d.passed).length
})

const scoreVerdict = computed(() => {
  const score = seoAnalysis.value.score
  if (score >= 85) return 'Optimal (Excellent)'
  if (score >= 70) return 'Good (Meets Standards)'
  if (score >= 50) return 'Average (Needs Optimization)'
  return 'Low (Needs Improvement)'
})

const scoreBadgeClass = computed(() => {
  const score = seoAnalysis.value.score
  if (score >= 80)
    return 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300'
  if (score >= 50) return 'bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300'
  return 'bg-red-100 dark:bg-red-900/60 text-red-700 dark:text-red-300'
})

const scoreTextClass = computed(() => {
  const score = seoAnalysis.value.score
  if (score >= 80) return 'text-emerald-600 dark:text-emerald-400'
  if (score >= 50) return 'text-amber-600 dark:text-amber-400'
  return 'text-red-600 dark:text-red-400'
})

// 5. Checklist Filtering
const activeGroupFilter = ref<'all' | 'meta' | 'keyword' | 'content' | 'social'>('all')

const groupFilters = [
  { id: 'all' as const, label: 'All' },
  { id: 'meta' as const, label: 'Meta' },
  { id: 'keyword' as const, label: 'Keyword' },
  { id: 'content' as const, label: 'Content' },
  { id: 'social' as const, label: 'Social' },
]

const filteredDetails = computed(() => {
  if (activeGroupFilter.value === 'all') return seoAnalysis.value.details
  return seoAnalysis.value.details.filter((d: any) => d.group === activeGroupFilter.value)
})

const groupBadgeClass = (group: string) => {
  switch (group) {
    case 'meta':
      return 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
    case 'keyword':
      return 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300'
    case 'content':
      return 'bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300'
    case 'social':
      return 'bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300'
    default:
      return 'bg-slate-100 dark:bg-slate-800 text-slate-600'
  }
}

// 6. Action Helpers
const generateSlug = () => {
  if (!seoForm.contentTitle && !seoForm.metaTitle) return
  const src = seoForm.contentTitle || seoForm.metaTitle
  seoForm.slug = src
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const insertHeading = () => {
  seoForm.bodyContent += `\n<h2>New Subheading with ${seoForm.focusKeyword || 'Keyword'}</h2>\n<p>Explanatory paragraph...</p>\n`
}

const insertImageAlt = () => {
  seoForm.bodyContent += `\n<img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" alt="Guide to ${seoForm.focusKeyword || 'article'}" />\n`
}

const insertLink = () => {
  seoForm.bodyContent += `\n<p>Visit this <a href="https://example.com">reference link</a>.</p>\n`
}

// 7. Preset Loaders
const loadSample = (type: 'optimal' | 'suboptimal') => {
  if (type === 'optimal') {
    seoForm.contentType = 'article'
    seoForm.focusKeyword = 'vue 3 component library'
    seoForm.metaTitle = 'Vue 3 Schema Component Library - Enterprise UI Pack'
    seoForm.metaDescription =
      'A high-performance vue 3 component library built with TypeScript and UnoCSS. Includes schema-driven forms, interactive datatable suite, and SEO engine.'
    seoForm.slug = 'vue-3-schema-component-library'
    seoForm.contentTitle = 'Complete Guide to Using Vue 3 Component Library'
    seoForm.featuredImage = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c'
    seoForm.author = 'Zyvnox Development Team'
    seoForm.tags = 'vue3, typescript, component-library, unocss'
    seoForm.bodyContent = `<h2>1. What is a Vue 3 Component Library?</h2>
<p>In modern enterprise web development, adopting a vue 3 component library is crucial to accelerate building dashboards and schema-driven form generators.</p>
<p>This library is modularly designed to support subpath exports and efficient tree-shaking.</p>

<h2>2. Benefits of Schema-Driven Architecture</h2>
<p>With Zod validation schema integration, all inputs are safely validated on both client and server tiers.</p>
<p>Visit the <a href="https://example.com/docs">official documentation</a> for a complete installation guide.</p>
<img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" alt="Coding illustration for vue 3 component library" />

<h2>3. Conclusion</h2>
<p>Adopting a vue 3 component library delivers high stability and seamless long-term maintenance.</p>`
  } else {
    seoForm.contentType = 'article'
    seoForm.focusKeyword = 'javascript'
    seoForm.metaTitle = 'Quick Notes' // Too short (< 30)
    seoForm.metaDescription = 'This is a very short description.' // Too short (< 120), missing focus keyword
    seoForm.slug = 'Today_Notes!!' // Invalid slug format (has uppercase and exclamation)
    seoForm.contentTitle = 'Title Without Keyword'
    seoForm.featuredImage = ''
    seoForm.author = ''
    seoForm.tags = ''
    seoForm.bodyContent = `<p>Today we learn something new. There are no headings and no links whatsoever.</p>`
  }
}

// 8. FormModal Interactive Test
const showModal = ref(false)
const modalFormData = ref<Record<string, any>>({})

const modalSchema: Schema = {
  contentTitle: {
    type: 'text',
    label: 'Content Title (H1)',
    required: true,
  },
  author: {
    type: 'text',
    label: 'Author',
    tooltip: 'Author name for E-E-A-T credentials',
  },
  metaTitle: {
    type: 'text',
    label: 'Meta Title',
    required: true,
  },
  metaDescription: {
    type: 'textArea',
    label: 'Meta Description',
    required: true,
  },
  slug: {
    type: 'text',
    label: 'URL Slug',
    required: true,
  },
  focusKeyword: {
    type: 'text',
    label: 'Focus Keyword',
    required: true,
  },
  bodyContent: {
    type: 'quillEditor',
    label: 'Article Body Content',
  },
  featuredImage: {
    type: 'image',
    label: 'Upload Image',
  },
  tags:{
    type: 'tag',
    value:['vue3', 'typescript', 'component-library', 'unocss'],
    label: 'Tags (Comma-separated)',
  }
}

const openModalTest = () => {
  modalFormData.value = { ...seoForm, tags:['vue3', 'typescript', 'component-library', 'unocss'] }
  showModal.value = true
}

const handleModalSubmit = (payload: Record<string, any>) => {
  Object.assign(seoForm, payload)
  showModal.value = false
}
</script>
