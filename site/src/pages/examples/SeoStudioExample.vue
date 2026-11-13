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
            {{ isIndonesian ? 'Studio SEO Realtime & Auditor On-Page' : 'Real-Time SEO Studio & On-Page Auditor' }}
          </h2>
          <p class="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
            {{ isIndonesian
              ? 'Uji dan verifikasi perhitungan algoritma SEO on-page realtime: batas Meta Title/Description, relevansi Focus Keyword (Judul H1-H6, paragraf pembuka, Alt Gambar, Tautan), eliminasi false-positive, dan pratinjau cuplikan Google SERP langsung.'
              : 'Test and verify real-time on-page SEO algorithm calculations: Meta Title/Description limits, Focus Keyword relevance (Headings, Lead paragraph, Alt Text, Links), false-positive density elimination, and live Google SERP snippet preview.' }}
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-2">
          <button
            type="button"
            @click="loadSample('optimal')"
            class="px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5"
            :title="isIndonesian ? 'Muat contoh artikel dengan SEO optimal (skor 90-100%)' : 'Load sample article with optimal SEO (score 90-100%)'"
          >
            <span>🌟</span>
            <span>{{ isIndonesian ? 'Muat Artikel Optimal' : 'Load Optimal Article' }}</span>
          </button>
          <button
            type="button"
            @click="loadSample('suboptimal')"
            class="px-3.5 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/60 text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5"
            :title="isIndonesian ? 'Muat draf sampel suboptimal' : 'Load suboptimal draft sample'"
          >
            <span>⚠️</span>
            <span>{{ isIndonesian ? 'Muat Sampel Suboptimal' : 'Load Suboptimal' }}</span>
          </button>
          <button
            type="button"
            @click="openModalTest"
            class="px-3.5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 text-xs sm:text-sm font-semibold shadow-sm transition-all flex items-center gap-1.5"
            :title="isIndonesian ? 'Uji interaksi pill SEO langsung di FormModal' : 'Test SEO pill interaction directly inside FormModal'"
          >
            <span>🪟</span>
            <span>{{ isIndonesian ? 'Uji di FormModal' : 'Test in FormModal' }}</span>
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
          <span class="text-xs font-semibold text-slate-500 dark:text-slate-400"> {{ isIndonesian ? 'Skor SEO' : 'SEO Score' }} </span>
          <div class="text-sm font-bold mt-0.5" :class="scoreTextClass">
            {{ scoreVerdict }}
          </div>
        </div>
      </div>

      <div
        class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
      >
        <span class="text-xs font-semibold text-slate-500 dark:text-slate-400"> {{ isIndonesian ? 'Jumlah Kata' : 'Word Count' }} </span>
        <div class="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
          {{ wordCount }}
          <span class="text-xs font-normal text-slate-400">{{ isIndonesian ? 'kata' : 'words' }}</span>
        </div>
      </div>

      <div
        class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
      >
        <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">
          {{ isIndonesian ? 'Kepadatan Keyword' : 'Keyword Density' }}
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
          {{ isIndonesian ? 'Kriteria Terpenuhi' : 'Passed Checks' }}
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
          class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6"
        >
          <!-- Card Header -->
          <div
            class="border-b border-slate-100 dark:border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
          >
            <div>
              <h3 class="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                {{ isIndonesian ? 'Editor Metadata & Konten' : 'Metadata & Content Editor' }}
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {{ isIndonesian
                  ? 'Sesuaikan parameter SEO, cuplikan SERP, dan isi konten untuk audit realtime.'
                  : 'Tune SEO parameters, SERP snippets, and article body for real-time audit.' }}
              </p>
            </div>
          </div>

          <!-- Section 1: Konfigurasi Target & Kata Kunci -->
          <div class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <SelectedOptions
                  v-model="seoForm.contentType"
                  :label="isIndonesian ? 'Tipe Konten' : 'Content Type'"
                  :options="contentTypeOptions"
                  :options-view="contentTypeOptionsView"
                  :lang="currentLocale"
                />
              </div>
              <div>
                <TextInput
                  v-model="seoForm.focusKeyword"
                  :label="isIndonesian ? 'Kata Kunci Utama (Focus Keyword)' : 'Focus Keyword'"
                  required
                  :placeholder="isIndonesian ? 'cth. pustaka komponen vue 3' : 'e.g. vue 3 component library'"
                  :lang="currentLocale"
                />
              </div>
            </div>

            <!-- Judul Konten (H1) & Slug URL -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <TextInput
                  v-model="seoForm.contentTitle"
                  :label="isIndonesian ? 'Judul Konten (H1)' : 'Content Title (H1)'"
                  required
                  :placeholder="isIndonesian ? 'Judul artikel utama...' : 'Main article headline...'"
                  :lang="currentLocale"
                />
              </div>

              <div class="relative">
                <div class="absolute right-0 top-0 z-10">
                  <button
                    type="button"
                    @click="generateSlug"
                    class="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 hover:underline cursor-pointer flex items-center gap-1 transition-colors"
                  >
                    <span>⚡</span>
                    <span>{{ isIndonesian ? 'Otomatis dari Judul' : 'Auto from Title' }}</span>
                  </button>
                </div>
                <TextInput
                  v-model="seoForm.slug"
                  :label="isIndonesian ? 'Slug URL' : 'URL Slug'"
                  required
                  placeholder="contoh-slug-url"
                  :lang="currentLocale"
                />
              </div>
            </div>
          </div>

          <!-- Section 2: Metadata Cuplikan SERP Google -->
          <div class="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
            <div class="flex items-center justify-between">
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {{ isIndonesian ? 'Metadata Cuplikan Google SERP' : 'Google SERP Snippet Metadata' }}
              </h4>
            </div>

            <!-- Meta Title -->
            <div class="relative">
              <div class="absolute right-0 top-0 text-[11px] font-mono flex items-center gap-1.5 z-10">
                <span
                  class="px-2 py-0.5 rounded text-[10px] font-semibold"
                  :class="
                    seoForm.metaTitle.length >= 30 && seoForm.metaTitle.length <= 60
                      ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300'
                      : 'bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300'
                  "
                >
                  {{ seoForm.metaTitle.length }} / 60 {{ isIndonesian ? 'karakter' : 'chars' }}
                </span>
                <span class="text-[10px] text-slate-400 hidden sm:inline">
                  ({{ isIndonesian ? 'Ideal 30–60' : 'Ideal 30–60' }})
                </span>
              </div>
              <TextInput
                v-model="seoForm.metaTitle"
                :label="isIndonesian ? 'Judul Meta (Meta Title)' : 'Meta Title'"
                required
                :placeholder="isIndonesian ? 'Judul halaman untuk mesin pencari...' : 'Page title for search engines...'"
                :lang="currentLocale"
              />
            </div>

            <!-- Meta Description -->
            <div class="relative">
              <div class="absolute right-0 top-0 text-[11px] font-mono flex items-center gap-1.5 z-10">
                <span
                  class="px-2 py-0.5 rounded text-[10px] font-semibold"
                  :class="
                    seoForm.metaDescription.length >= 120 && seoForm.metaDescription.length <= 160
                      ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300'
                      : 'bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300'
                  "
                >
                  {{ seoForm.metaDescription.length }} / 160 {{ isIndonesian ? 'karakter' : 'chars' }}
                </span>
                <span class="text-[10px] text-slate-400 hidden sm:inline">
                  ({{ isIndonesian ? 'Ideal 120–160' : 'Ideal 120–160' }})
                </span>
              </div>
              <TextAreaInput
                v-model="seoForm.metaDescription"
                :label="isIndonesian ? 'Deskripsi Meta (Meta Description)' : 'Meta Description'"
                required
                :rows="3"
                :placeholder="isIndonesian ? 'Ringkasan singkat dan menarik untuk calon pembaca di mesin pencari...' : 'Concise, compelling snippet for search engine users...'"
                :lang="currentLocale"
              />
            </div>
          </div>

          <!-- Section 3: Isi Konten Artikel (Rich HTML) -->
          <div class="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <div class="relative">
              <div class="absolute right-0 top-0 flex items-center gap-1.5 z-10">
                <span class="text-[11px] text-slate-400 mr-1 hidden sm:inline">
                  {{ isIndonesian ? 'Sisipkan format:' : 'Quick insert:' }}
                </span>
                <button
                  type="button"
                  @click="insertHeading"
                  class="px-2 py-0.5 text-[11px] rounded-md font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 cursor-pointer transition-colors shadow-xs"
                  title="Insert H2 tag"
                >
                  + H2
                </button>
                <button
                  type="button"
                  @click="insertImageAlt"
                  class="px-2 py-0.5 text-[11px] rounded-md font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 cursor-pointer transition-colors shadow-xs"
                  title="Insert image with alt text"
                >
                  + Img Alt
                </button>
                <button
                  type="button"
                  @click="insertLink"
                  class="px-2 py-0.5 text-[11px] rounded-md font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 cursor-pointer transition-colors shadow-xs"
                  title="Insert hyperlink"
                >
                  + Link
                </button>
              </div>
              <TextAreaInput
                v-model="seoForm.bodyContent"
                :label="isIndonesian ? 'Isi Konten Artikel (HTML / Markdown)' : 'Body Content (HTML / Markdown)'"
                :rows="8"
                :placeholder="isIndonesian ? 'Tulis artikel menggunakan tag HTML seperti <h2>, <p>, <img>, <a>...' : 'Write article using HTML tags like <h2>, <p>, <img>, <a>...'"
                :lang="currentLocale"
              />
            </div>
          </div>

          <!-- Section 4: Gambar, Penulis & Taksonomi -->
          <div class="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
            <div class="flex items-center justify-between">
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {{ isIndonesian ? 'Publikasi, Media & Taksonomi' : 'Publishing, Media & Taxonomy' }}
              </h4>
            </div>

            <div>
              <ImageInput
                v-model="seoForm.featuredImage"
                :label="isIndonesian ? 'Gambar Utama (Featured Image)' : 'Featured Image'"
                :lang="currentLocale"
              />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <TextInput
                  v-model="seoForm.author"
                  :label="isIndonesian ? 'Penulis Konten (E-E-A-T)' : 'Author (E-E-A-T)'"
                  :placeholder="isIndonesian ? 'Nama penulis artikel...' : 'Author name...'"
                  :lang="currentLocale"
                />
              </div>

              <div>
                <TagInput
                  v-model="tagsArray"
                  :label="isIndonesian ? 'Tag Taksonomi & Kategori' : 'Taxonomy Tags & Categories'"
                  :placeholder="isIndonesian ? 'Ketik tag lalu tekan Enter...' : 'Type tag & press Enter...'"
                  :lang="currentLocale"
                />
              </div>
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
              {{ isIndonesian ? 'Pratinjau SERP Google' : 'Google SERP Preview' }}
            </span>
            <span class="text-[11px] text-slate-400">{{ isIndonesian ? 'Cuplikan Desktop' : 'Desktop Snippet' }}</span>
          </div>

          <div
            class="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 space-y-1"
          >
            <!-- URL / Breadcrumb -->
            <div class="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
              <div class="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center shrink-0 p-0.5 overflow-hidden shadow-xs">
                <svg
                  viewBox="0 0 500 500"
                  class="w-full h-full text-slate-800 dark:text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="currentColor" d="m39.54647,355.96261l198.04917,0.84097l-20.60384,-40.7872l-100.91678,0l-76.52856,39.94622z"/>
                  <path fill="currentColor" d="m330.94366,236.12394l-60.97055,118.57721l60.97055,-76.94904l0,-41.62817z"/>
                  <path fill="currentColor" d="m353.64993,189.87041l-20.60384,41.62817l101.75775,124.88451l27.33163,0l-46.25352,-92.92753l-62.23201,-73.58515z"/>
                  <path fill="currentColor" d="m152.65735,189.87041l-19.76287,11.77362l-97.1324,150.53419l79.47196,-42.04866l54.24277,-85.77926l-16.81946,-34.4799z"/>
                  <path fill="currentColor" d="m421.76876,154.54954l-0.42049,108.90602l43.31012,83.25634l0.84097,-190.48042l-43.7306,-1.68195z"/>
                  <path fill="currentColor" d="m149.71395,154.12906l102.17824,199.73112l-1.26146,-99.65532l-52.56082,-100.0758l-48.35596,0z"/>
                  <path fill="currentColor" d="m34.50063,154.12906l32.79795,41.62817l65.17542,-0.42049l17.66044,-10.51216l-15.558,-30.69552l-100.0758,0z"/>
                  <path fill="currentColor" d="m317.0676,143.19641l-60.55007,113.53137l0.42049,97.55288l88.72267,-174.08144l-28.59309,-37.00282z"/>
                </svg>
              </div>
              <span class="truncate"
                >https://example.com › {{ seoForm.slug || 'article-slug' }}</span
              >
            </div>

            <!-- SERP Title -->
            <h4
              class="text-base sm:text-lg font-medium text-blue-700 dark:text-blue-400 hover:underline cursor-pointer leading-snug line-clamp-2"
            >
              {{ seoForm.metaTitle || (isIndonesian ? 'Judul Halaman Belum Diisi' : 'Page Title Not Provided') }}
            </h4>

            <!-- SERP Snippet Description -->
            <p
              class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed"
            >
              {{
                seoForm.metaDescription ||
                (isIndonesian
                  ? 'Deskripsi halaman belum diisi. Google akan mengambil cuplikan otomatis dari isi konten jika dikosongkan.'
                  : 'Page description not provided. Google will extract a snippet from the content when left blank.')
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
                {{ isIndonesian ? 'Daftar Audit Analisis SEO' : 'Audit Analysis Checklist' }}
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                {{ isIndonesian ? 'Pembaruan realtime dari engine calculateSeo' : 'Real-time updates from calculateSeo engine' }}
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
              {{ isIndonesian ? 'Tidak ada kriteria pada grup ini.' : 'No criteria found in this group.' }}
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
      :lang="currentLocale"
      :seo="seoMapping"
      @cancel="showModal = false"
      @submit="handleModalSubmit"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { calculateSeo } from '@zyvnox/vue-pack'
import {
  FormModal,
  TextInput,
  TextAreaInput,
  ImageInput,
  TagInput,
  SelectedOptions,
} from '@zyvnox/vue-pack/components'
import type { SeoFieldMapping, Schema } from '@zyvnox/vue-pack/type'
import { useSiteI18n } from '@/i18n'

const { isIndonesian, currentLocale } = useSiteI18n()
const origin = window.location.origin

const contentTypeOptions = ['article', 'product', 'page', 'promo']
const contentTypeOptionsView = computed(() => [
  isIndonesian.value ? 'Artikel (Min 300 kata)' : 'Article (Min 300 words)',
  isIndonesian.value ? 'Produk (Min 100 kata)' : 'Product (Min 100 words)',
  isIndonesian.value ? 'Halaman (Min 150 kata)' : 'Page (Min 150 words)',
  isIndonesian.value ? 'Promo (Min 50 kata)' : 'Promo (Min 50 words)',
])
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

// Reactive Tag Array for TagInput Component
const tagsArray = computed<string[]>({
  get() {
    if (!seoForm.tags) return []
    if (Array.isArray(seoForm.tags)) return seoForm.tags
    return String(seoForm.tags)
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
  },
  set(val) {
    seoForm.tags = Array.isArray(val) ? val.join(', ') : val
  },
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
  if (score >= 85) return isIndonesian.value ? 'Optimal (Sangat Baik)' : 'Optimal (Excellent)'
  if (score >= 70) return isIndonesian.value ? 'Baik (Memenuhi Standar)' : 'Good (Meets Standards)'
  if (score >= 50) return isIndonesian.value ? 'Cukup (Perlu Optimasi)' : 'Average (Needs Optimization)'
  return isIndonesian.value ? 'Rendah (Butuh Perbaikan)' : 'Low (Needs Improvement)'
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

const groupFilters = computed(() => [
  { id: 'all' as const, label: isIndonesian.value ? 'Semua' : 'All' },
  { id: 'meta' as const, label: 'Meta' },
  { id: 'keyword' as const, label: isIndonesian.value ? 'Kata Kunci' : 'Keyword' },
  { id: 'content' as const, label: isIndonesian.value ? 'Konten' : 'Content' },
  { id: 'social' as const, label: isIndonesian.value ? 'Sosial' : 'Social' },
])

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

const modalSchema = computed<Schema>(() => ({
  contentType: {
    type: 'select',
    label: isIndonesian.value ? 'Tipe Konten' : 'Content Type',
    options: ['article', 'product', 'page', 'promo'],
    optionsView: [
      isIndonesian.value ? 'Artikel (Min 300 kata)' : 'Article (Min 300 words)',
      isIndonesian.value ? 'Produk (Min 100 kata)' : 'Product (Min 100 words)',
      isIndonesian.value ? 'Halaman (Min 150 kata)' : 'Page (Min 150 words)',
      isIndonesian.value ? 'Promo (Min 50 kata)' : 'Promo (Min 50 words)',
    ],
    required: true,
  },
  focusKeyword: {
    type: 'text',
    label: isIndonesian.value ? 'Kata Kunci Utama (Focus Keyword)' : 'Focus Keyword',
    required: true,
    placeholder: isIndonesian.value ? 'cth. pustaka komponen vue 3' : 'e.g. vue 3 component library',
  },
  contentTitle: {
    type: 'text',
    label: isIndonesian.value ? 'Judul Konten (H1)' : 'Content Title (H1)',
    required: true,
    placeholder: isIndonesian.value ? 'Judul artikel utama...' : 'Main article headline...',
  },
  metaTitle: {
    type: 'text',
    label: isIndonesian.value ? 'Judul Meta (Meta Title)' : 'Meta Title',
    required: true,
    placeholder: isIndonesian.value ? 'Judul halaman untuk mesin pencari...' : 'Page title for search engines...',
  },
  metaDescription: {
    type: 'textArea',
    label: isIndonesian.value ? 'Deskripsi Meta (Meta Description)' : 'Meta Description',
    required: true,
    placeholder: isIndonesian.value ? 'Ringkasan singkat untuk hasil pencarian...' : 'Brief summary for search engine snippet...',
  },
  slug: {
    type: 'text',
    label: isIndonesian.value ? 'Slug URL' : 'URL Slug',
    required: true,
    placeholder: 'contoh-slug-url',
  },
  bodyContent: {
    type: 'quillEditor',
    label: isIndonesian.value ? 'Isi Konten Artikel (Rich Text)' : 'Article Body Content (Rich Text)',
  },
  featuredImage: {
    type: 'image',
    label: isIndonesian.value ? 'Gambar Utama (Featured Image)' : 'Featured Image',
  },
  author: {
    type: 'text',
    label: isIndonesian.value ? 'Penulis Konten (E-E-A-T)' : 'Author (E-E-A-T)',
    placeholder: 'Zyvnox Development Team',
  },
  tags: {
    type: 'tag',
    label: isIndonesian.value ? 'Tag Taksonomi & Kategori' : 'Taxonomy Tags & Categories',
    placeholder: isIndonesian.value ? 'Ketik tag lalu tekan Enter...' : 'Type tag and press Enter...',
  },
}))

const openModalTest = () => {
  const currentTags = Array.isArray(seoForm.tags)
    ? [...seoForm.tags]
    : typeof seoForm.tags === 'string'
      ? seoForm.tags.split(',').map((s) => s.trim()).filter(Boolean)
      : ['vue3', 'typescript', 'component-library', 'unocss']

  modalFormData.value = {
    ...seoForm,
    tags: currentTags,
  }
  showModal.value = true
}

const handleModalSubmit = (payload: Record<string, any>) => {
  const formattedTags = Array.isArray(payload.tags)
    ? payload.tags.join(', ')
    : payload.tags || ''

  Object.assign(seoForm, {
    ...payload,
    tags: formattedTags,
  })
  showModal.value = false
}
</script>
