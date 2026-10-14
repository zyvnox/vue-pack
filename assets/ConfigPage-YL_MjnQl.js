import{_t as e,bt as t,gt as n,ht as r,mt as i,pt as a,ut as o}from"./index-DnYmOVzH.js";import{t as s}from"./CodeBlock-DwBCo2Nh.js";var c={class:`max-w-4xl mx-auto space-y-10 py-6`},l={class:`space-y-4`},u=`import { defineConfig } from '@zyvnox/vue-pack/config'

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
})`,d=e({__name:`ConfigPage`,setup(e){return(e,d)=>(t(),a(`div`,c,[d[2]||=o(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-6`},[o(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},`Configuration Engine`),o(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},[r(` Learn how to customize global library behavior using `),o(`code`,null,`defineConfig`),r(` and subpath configurations. `)])],-1),o(`section`,l,[d[0]||=o(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Central Configuration`,-1),d[1]||=o(`p`,{class:`text-xs text-slate-600 dark:text-slate-400 leading-relaxed`},[o(`code`,null,`defineConfig`),r(` allows fine-tuning offline IndexedDB databases, default locale behavior, and validation defaults in one place. `)],-1),n(s,{code:u,language:`ts`})]),d[3]||=i(`<section class="space-y-4"><h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">IndexedDB Options</h2><div class="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800"><table class="w-full text-xs"><thead class="bg-slate-50 dark:bg-slate-900"><tr><th class="p-3 text-left font-semibold">Property</th><th class="p-3 text-left font-semibold">Type</th><th class="p-3 text-left font-semibold">Default</th><th class="p-3 text-left font-semibold">Description</th></tr></thead><tbody class="divide-y divide-slate-200 dark:divide-slate-800"><tr><td class="p-3 font-mono font-bold">dbName</td><td class="p-3 font-mono text-blue-500">string</td><td class="p-3 font-mono">&#39;zyvnox-db&#39;</td><td class="p-3">The browser IndexedDB database name.</td></tr><tr><td class="p-3 font-mono font-bold">version</td><td class="p-3 font-mono text-blue-500">number</td><td class="p-3 font-mono">1</td><td class="p-3">Database schema migration version.</td></tr><tr><td class="p-3 font-mono font-bold">stores</td><td class="p-3 font-mono text-blue-500">Record&lt;string, string&gt;</td><td class="p-3 font-mono">{}</td><td class="p-3">Mapping of object store names to key paths.</td></tr></tbody></table></div></section>`,1)]))}});export{d as default};