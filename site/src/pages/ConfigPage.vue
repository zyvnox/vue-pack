<template>
  <div class="max-w-4xl mx-auto space-y-10 py-6">
    <!-- Header -->
    <header class="border-b border-slate-200 dark:border-slate-800 pb-6">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">Configuration Engine</h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Learn how to customize global library behavior using <code>defineConfig</code> and subpath
        configurations.
      </p>
    </header>

    <!-- Overview -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">Central Configuration</h2>
      <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
        <code>defineConfig</code> allows fine-tuning offline IndexedDB databases, default locale
        behavior, and validation defaults in one place.
      </p>
      <CodeBlock :code="fullConfigCode" language="ts" />
    </section>

    <!-- IndexedDB Options -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">IndexedDB Options</h2>
      <div class="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
        <table class="w-full text-xs">
          <thead class="bg-slate-50 dark:bg-slate-900">
            <tr>
              <th class="p-3 text-left font-semibold">Property</th>
              <th class="p-3 text-left font-semibold">Type</th>
              <th class="p-3 text-left font-semibold">Default</th>
              <th class="p-3 text-left font-semibold">Description</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
            <tr>
              <td class="p-3 font-mono font-bold">dbName</td>
              <td class="p-3 font-mono text-blue-500">string</td>
              <td class="p-3 font-mono">'zyvnox-db'</td>
              <td class="p-3">The browser IndexedDB database name.</td>
            </tr>
            <tr>
              <td class="p-3 font-mono font-bold">version</td>
              <td class="p-3 font-mono text-blue-500">number</td>
              <td class="p-3 font-mono">1</td>
              <td class="p-3">Database schema migration version.</td>
            </tr>
            <tr>
              <td class="p-3 font-mono font-bold">stores</td>
              <td class="p-3 font-mono text-blue-500">Record&lt;string, string&gt;</td>
              <td class="p-3 font-mono">{}</td>
              <td class="p-3">Mapping of object store names to key paths.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

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
