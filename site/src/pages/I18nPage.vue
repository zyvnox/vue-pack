<template>
  <div class="max-w-4xl mx-auto space-y-10 py-6">
    <!-- Header -->
    <header class="border-b border-slate-200 dark:border-slate-800 pb-6">
      <div class="flex items-center gap-3 mb-2">
        <h1 class="text-3xl font-bold text-slate-900 dark:text-white">
          {{ isIndonesian ? 'Internasionalisasi & Lokalisasi (i18n)' : 'Internationalization (i18n)' }}
        </h1>
        <span
          class="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-400 border border-amber-300/60 dark:border-amber-800/60"
        >
          v0.1.4 Early Release
        </span>
      </div>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        {{ isIndonesian
          ? 'Arsitektur lokalisasi multi-bahasa, pendaftaran bahasa dinamis saat runtime, dan override pesan kustom.'
          : 'Multi-language localization architecture, dynamic language registration, and custom text overrides.' }}
      </p>
    </header>

    <!-- Built-in Languages -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">
        {{ isIndonesian ? 'Bahasa Bawaan Library' : 'Built-in Locales' }}
      </h2>
      <p class="text-xs text-slate-600 dark:text-slate-400">
        {{ isIndonesian
          ? 'Secara bawaan, @zyvnox/vue-pack menyertakan terjemahan lengkap untuk:'
          : 'Out of the box, @zyvnox/vue-pack ships with complete translations for:' }}
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          class="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
        >
          <div class="flex items-center gap-2 mb-1">
            <span class="text-lg">🇺🇸</span>
            <span class="font-bold text-sm">English (<code class="font-mono">en</code>)</span>
          </div>
          <p class="text-xs text-slate-500">
            {{ isIndonesian
              ? 'Bahasa cadangan (fallback) bawaan untuk semua label UI dan pesan validasi.'
              : 'Default fallback locale for all UI labels and validation messages.' }}
          </p>
        </div>
        <div
          class="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
        >
          <div class="flex items-center gap-2 mb-1">
            <span class="text-lg">🇮🇩</span>
            <span class="font-bold text-sm"
              >Bahasa Indonesia (<code class="font-mono">id</code>)</span
            >
          </div>
          <p class="text-xs text-slate-500">
            {{ isIndonesian
              ? 'Terjemahan Bahasa Indonesia asli dan lengkap untuk alur kerja back-office enterprise.'
              : 'Full native Indonesian translation for enterprise workflows.' }}
          </p>
        </div>
      </div>

      <!-- Smart Location Detection Callout -->
      <div class="p-4 rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/60 dark:bg-emerald-950/20 text-xs space-y-2">
        <div class="flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-300">
          <span>📍</span>
          <span>{{ isIndonesian ? 'Deteksi Otomatis Bahasa Berbasis Lokasi Cerdas' : 'Smart Location-Based Auto Language Detection' }}</span>
        </div>
        <p class="text-emerald-700 dark:text-emerald-400 leading-relaxed">
          <template v-if="isIndonesian">
            Situs dokumentasi otomatis memeriksa lokasi pengunjung melalui zona waktu browser (<code>Asia/Jakarta</code>, <code>Asia/Makassar</code>, <code>Asia/Jayapura</code>) dan bahasa sistem. Pengunjung dari Indonesia otomatis disambut dalam <strong>Bahasa Indonesia (ID)</strong>, sedangkan pengunjung internasional diarahkan ke <strong>English (EN)</strong>.
          </template>
          <template v-else>
            The documentation site automatically checks the user's location via browser timezone (<code>Asia/Jakarta</code>, <code>Asia/Makassar</code>, <code>Asia/Jayapura</code>) and system locale. Users accessing from Indonesia are automatically greeted in <strong>Bahasa Indonesia (ID)</strong>, while international visitors default to <strong>English (EN)</strong>.
          </template>
        </p>
      </div>
    </section>

    <!-- Live Interactive Switcher Demo -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">
        {{ isIndonesian ? 'Demo Pengalih Bahasa Interaktif' : 'Live Locale Switcher Demo' }}
      </h2>
      <div
        class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-4"
      >
        <div class="flex items-center gap-3">
          <span class="text-xs font-semibold text-slate-500">{{ isIndonesian ? 'Bahasa Aktif:' : 'Active Language:' }}</span>
          <button
            type="button"
            @click="changeLang('en')"
            class="px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer"
            :class="
              currentLang === 'en'
                ? 'bg-blue-600 text-white font-bold'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
            "
          >
            🇺🇸 English (en)
          </button>
          <button
            type="button"
            @click="changeLang('id')"
            class="px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer"
            :class="
              currentLang === 'id'
                ? 'bg-blue-600 text-white font-bold'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
            "
          >
            🇮🇩 Indonesia (id)
          </button>
        </div>

        <div
          class="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-2"
        >
          <div class="text-xs text-slate-500">{{ isIndonesian ? 'Hasil Resolusi String i18n dari Composable:' : 'Resolved i18n Strings from Hook:' }}</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <strong>Search:</strong>
              <span class="font-mono text-blue-600 dark:text-blue-400 ml-1">{{ t('search') }}</span>
            </div>
            <div>
              <strong>Filter:</strong>
              <span class="font-mono text-blue-600 dark:text-blue-400 ml-1">{{ t('filter') }}</span>
            </div>
            <div>
              <strong>Reset:</strong>
              <span class="font-mono text-blue-600 dark:text-blue-400 ml-1">{{ t('reset') }}</span>
            </div>
            <div>
              <strong>Save:</strong>
              <span class="font-mono text-blue-600 dark:text-blue-400 ml-1">{{ t('save') }}</span>
            </div>
          </div>
        </div>

        <!-- Sample Input showcasing live error translation -->
        <div>
          <TextInput
            v-model="demoText"
            :label="isIndonesian ? 'Uji Kolom Input Wajib' : 'Required Input Test'"
            :tooltip="isIndonesian ? 'Perhatikan bagaimana pesan validasi menyesuaikan bahasa yang dipilih' : 'Notice how validation messages adapt to the chosen locale'"
            :placeholder="currentLang === 'id' ? 'Masukkan teks di sini...' : 'Enter text here...'"
            required
            :error="demoText ? '' : currentLang === 'id' ? 'Kolom ini wajib diisi' : 'This field is required'"
          />
        </div>
      </div>
    </section>

    <!-- Registering Custom Languages -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">
        {{ isIndonesian ? 'Mendaftarkan Bahasa Kustom' : 'Registering Custom Languages' }}
      </h2>
      <p class="text-xs text-slate-600 dark:text-slate-400">
        {{ isIndonesian
          ? 'Anda dapat mendaftarkan bahasa ketiga (seperti Jepang, Spanyol, Perancis, dll.) menggunakan registerLanguage:'
          : 'You can register third languages (such as Japanese, Spanish, French, etc.) using registerLanguage:' }}
      </p>
      <CodeBlock :code="registerCode" language="ts" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { TextInput, useI18n } from '@zyvnox/vue-pack/components'
import { useSiteI18n } from '@/i18n'
import CodeBlock from '@/components/CodeBlock.vue'

const { t, setLang } = useI18n()
const { currentLocale, setLocale, isIndonesian } = useSiteI18n()
const currentLang = computed(() => currentLocale.value)
const demoText = ref('')

const changeLang = (newLang: 'en' | 'id') => {
  setLang(newLang)
  setLocale(newLang)
}

const registerCode = `import { registerLanguage } from '@zyvnox/vue-pack'

registerLanguage('ja', {
  labels: {
    search: '検索',
    filter: 'フィルター',
    reset: 'リセット',
    save: '保存',
    cancel: 'キャンセル',
  },
  inputs: {
    required: '{label}は必須項目です',
  },
})`
</script>
