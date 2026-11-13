<template>
  <div class="max-w-4xl mx-auto space-y-10 py-6">
    <!-- Header -->
    <header class="border-b border-slate-200 dark:border-slate-800 pb-6">
      <div class="flex items-center gap-3 mb-2">
        <h1 class="text-3xl font-bold text-slate-900 dark:text-white">
          {{ isIndonesian ? 'Engine Konfigurasi' : 'Configuration Engine' }}
        </h1>
        <span
          class="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-400 border border-amber-300/60 dark:border-amber-800/60"
        >
          v0.1.4 Early Release
        </span>
      </div>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        {{ isIndonesian
          ? 'Pelajari cara menyesuaikan perilaku global library menggunakan defineConfig dan subpath konfigurasi.'
          : 'Learn how to customize global library behavior using defineConfig and subpath configurations.' }}
      </p>
    </header>

    <!-- Overview -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">
        {{ isIndonesian ? 'Konfigurasi Terpusat' : 'Central Configuration' }}
      </h2>
      <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
        {{ isIndonesian
          ? 'defineConfig memungkinkan penyesuaian database IndexedDB offline, perilaku bahasa bawaan, dan konfigurasi validasi dalam satu berkas terpadu.'
          : 'defineConfig allows fine-tuning offline IndexedDB databases, default locale behavior, and validation defaults in one place.' }}
      </p>
      <CodeBlock :code="fullConfigCode" language="ts" />
    </section>

    <!-- IndexedDB Options -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">
        {{ isIndonesian ? 'Opsi IndexedDB' : 'IndexedDB Options' }}
      </h2>
      <div class="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
        <table class="w-full text-xs">
          <thead class="bg-slate-50 dark:bg-slate-900">
            <tr>
              <th class="p-3 text-left font-semibold">{{ isIndonesian ? 'Properti' : 'Property' }}</th>
              <th class="p-3 text-left font-semibold">{{ isIndonesian ? 'Tipe' : 'Type' }}</th>
              <th class="p-3 text-left font-semibold">Default</th>
              <th class="p-3 text-left font-semibold">{{ isIndonesian ? 'Deskripsi' : 'Description' }}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
            <tr>
              <td class="p-3 font-mono font-bold">dbName</td>
              <td class="p-3 font-mono text-blue-500">string</td>
              <td class="p-3 font-mono">'zyvnox-db'</td>
              <td class="p-3">{{ isIndonesian ? 'Nama database IndexedDB peramban.' : 'The browser IndexedDB database name.' }}</td>
            </tr>
            <tr>
              <td class="p-3 font-mono font-bold">version</td>
              <td class="p-3 font-mono text-blue-500">number</td>
              <td class="p-3 font-mono">1</td>
              <td class="p-3">{{ isIndonesian ? 'Versi migrasi skema database.' : 'Database schema migration version.' }}</td>
            </tr>
            <tr>
              <td class="p-3 font-mono font-bold">stores</td>
              <td class="p-3 font-mono text-blue-500">Record&lt;string, string&gt;</td>
              <td class="p-3 font-mono">{}</td>
              <td class="p-3">{{ isIndonesian ? 'Pemetaan nama object store terhadap key path.' : 'Mapping of object store names to key paths.' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import { useSiteI18n } from '@/i18n'

const { isIndonesian } = useSiteI18n()

const fullConfigCode = `import { defineConfig } from '@zyvnox/vue-pack/config'

export default defineConfig({
  indexedDB: {
    dbName: 'enterprise_app_db',
    version: 2,
    stores: {
      users: 'id',
      drafts: 'slug',
      auditLogs: 'timestamp',
    },
  },
  i18n: {
    defaultLocale: 'id',
    fallbackLocale: 'en',
  },
})`
</script>
