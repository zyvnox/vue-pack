import{M as e,O as t,U as n,c as r,d as i,g as a,h as o,m as s,mt as c,q as l,t as u,z as d}from"./i18n-CQHTY6ci.js";import{t as f}from"./FileInput-BPTS0wru.js";import{t as p}from"./CodeBlock-Cjmxf9F4.js";import{n as m,t as h}from"./PropsTable-Dv1x2aJC.js";import{t as g}from"./EventsTable-D-LMtD8H.js";var _={class:`space-y-8`},v={class:`text-xs text-slate-500`},y={class:`font-mono font-bold`},b={class:`text-xs text-slate-500 space-y-1 mt-2`},x={class:`text-slate-400 dark:text-slate-500`},S={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},C={class:`space-y-4`},w={class:`space-y-4`},T=`<template>
  <FileInput
    v-model="document"
    label="Signed NDA Document"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FileInput } from '@zyvnox/vue-pack/components'

const document = ref(null)
<\/script>`,E=`<FileInput
  v-model="resume"
  label="Resume / Curriculum Vitae"
  tooltip="Only PDF or DOCX format permitted (max 2MB)"
  tooltip-position="right"
  :validate="{
    maxSize: 2048,
    allowedTypes: ['pdf', 'docx'],
  }"
/>`,D=`<FileInput
  v-model="taxDoc"
  label="Tax Return Filing"
  error="Tax verification rejected corrupted checksum"
/>
<FileInput
  v-model="archived"
  label="Archived Receipt"
  disabled
/>`,O=a({__name:`FileInputExample`,setup(a){let{isIndonesian:O,currentLocale:k}=u(),A=n(`https://example.com/docs/nda-2026.pdf`),j=n(null),M=n(null),N=n(`https://enterprise.internal/receipts/2026-01.pdf`),P=[{name:`modelValue`,type:`File | string | null`,required:!0,description:`Reactive file object or remote URL string v-model`},{name:`label`,type:`string`,description:`Field label title displayed above upload box`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`validate`,type:`{ maxSize?: number, allowedTypes?: string[] }`,description:`Client-side file validator. "maxSize" is in KB, and "allowedTypes" is an array of lowercase extension strings without dot (e.g. ["pdf", "docx"]).`},{name:`disabled`,type:`boolean`,default:`false`,description:`Disables file selection, URL prompt, and delete button`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for button labels and error notices`}],F=[{name:`update:modelValue`,type:`(value: File | string | null, id: string) => void`,description:`Emitted upon file selection, URL entry, or file deletion`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when file violates maxSize or allowedTypes rules`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when file is valid or cleared`}];return(n,a)=>{let u=e(`DocHeader`);return t(),i(`div`,_,[o(u),o(m,{title:`Basic File Upload`,description:`Selects a single file or URL link with reactive binding.`},{code:d(()=>[o(p,{code:T,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:A.value,"onUpdate:modelValue":a[0]||=e=>A.value=e,label:l(O)?`Dokumen NDA Bertanda Tangan`:`Signed NDA Document`,lang:l(k)},null,8,[`modelValue`,`label`,`lang`]),r(`div`,v,[s(c(l(O)?`Pilihan Saat Ini:`:`Current Selection:`)+` `,1),r(`code`,y,c(typeof A.value==`string`?A.value:A.value?.name??(l(O)?`(tidak ada)`:`(none)`)),1)])]),_:1}),o(m,{title:`Real-Time Validation (Allowed Types & Max Size)`,description:`Restricts uploaded files to PDF/DOCX and enforces a 2048 KB (2MB) maximum file size.`},{code:d(()=>[o(p,{code:E,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:j.value,"onUpdate:modelValue":a[1]||=e=>j.value=e,label:l(O)?`Resume / Riwayat Hidup`:`Resume / Curriculum Vitae`,tooltip:l(O)?`Hanya format PDF atau DOCX yang diizinkan (maksimal 2MB)`:`Only PDF or DOCX format permitted (max 2MB)`,"tooltip-position":`right`,lang:l(k),validate:{maxSize:2048,allowedTypes:[`pdf`,`docx`]}},null,8,[`modelValue`,`label`,`tooltip`,`lang`]),r(`div`,b,[r(`div`,x,[s(c(l(O)?`Batasan: maksimal 2048 KB, ekstensi yang diizinkan:`:`Constraints: max 2048 KB, allowed extensions:`)+` `,1),a[4]||=r(`code`,{class:`font-mono`},`['pdf', 'docx']`,-1),a[5]||=s(`. `,-1)])])]),_:1}),o(m,{title:`External Error & Disabled States`,description:`Visual invalid upload warnings and read-only file states.`},{code:d(()=>[o(p,{code:D,language:`vue`})]),default:d(()=>[r(`div`,S,[o(l(f),{modelValue:M.value,"onUpdate:modelValue":a[2]||=e=>M.value=e,label:l(O)?`Pelaporan SPT Pajak`:`Tax Return Filing`,error:l(O)?`Server verifikasi pajak menolak berkas karena checksum rusak`:`Tax verification server rejected corrupted checksum`,lang:l(k)},null,8,[`modelValue`,`label`,`error`,`lang`]),o(l(f),{modelValue:N.value,"onUpdate:modelValue":a[3]||=e=>N.value=e,label:l(O)?`Tanda Terima Penggajian Terarsip (Hanya-Baca)`:`Archived Payroll Receipt (Read-Only)`,disabled:``,lang:l(k)},null,8,[`modelValue`,`label`,`lang`])])]),_:1}),r(`section`,C,[o(h,{props:P})]),r(`section`,w,[o(g,{events:F})])])}}});export{O as default};