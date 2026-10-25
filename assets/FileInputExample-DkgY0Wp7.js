import{Mt as e,Ot as t,Tt as n,_t as r,bt as i,gt as a,ht as o,kt as s,pt as c,ut as l,v as u}from"./index-BhghGzgp.js";import{t as d}from"./CodeBlock-CSGfp_x-.js";import{n as f,t as p}from"./PropsTable-rw53ZQEs.js";import{t as m}from"./EventsTable-BlxUYD03.js";var h={class:`space-y-8`},g={class:`text-xs text-slate-500`},_={class:`font-mono font-bold`},v={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},y={class:`space-y-4`},b={class:`space-y-4`},x=`<template>
  <FileInput
    v-model="document"
    label="Signed NDA Document"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FileInput } from '@zyvnox/vue-pack/components'

const document = ref(null)
<\/script>`,S=`<FileInput
  v-model="resume"
  label="Resume / Curriculum Vitae"
  tooltip="Only PDF or DOCX format permitted (max 2MB)"
  tooltip-position="right"
  :validate="{
    maxSize: 2048,
    allowedTypes: ['pdf', 'docx'],
  }"
/>`,C=`<FileInput
  v-model="taxDoc"
  label="Tax Return Filing"
  error="Tax verification rejected corrupted checksum"
/>
<FileInput
  v-model="archived"
  label="Archived Receipt"
  disabled
/>`,w=r({__name:`FileInputExample`,setup(r){let w=t(`https://example.com/docs/nda-2026.pdf`),T=t(null),E=t(null),D=t(`https://enterprise.internal/receipts/2026-01.pdf`),O=[{name:`modelValue`,type:`File | string | null`,required:!0,description:`Reactive file object or remote URL string v-model`},{name:`label`,type:`string`,description:`Field label title displayed above upload box`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`validate`,type:`{ maxSize?: number, allowedTypes?: string[] }`,description:`Client-side file validator. "maxSize" is in KB, and "allowedTypes" is an array of lowercase extension strings without dot (e.g. ["pdf", "docx"]).`},{name:`disabled`,type:`boolean`,default:`false`,description:`Disables file selection, URL prompt, and delete button`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for button labels and error notices`}],k=[{name:`update:modelValue`,type:`(value: File | string | null, id: string) => void`,description:`Emitted upon file selection, URL entry, or file deletion`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when file violates maxSize or allowedTypes rules`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when file is valid or cleared`}];return(t,r)=>(i(),c(`div`,h,[r[8]||=l(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[l(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` FileInput `),l(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Single document upload component with remote URL entry, file type & size constraint validation, file inspection metadata, and tooltip guidance. `)],-1),a(f,{title:`Basic File Upload`,description:`Selects a single file or URL link with reactive binding.`},{code:n(()=>[a(d,{code:x,language:`vue`})]),default:n(()=>[a(s(u),{modelValue:w.value,"onUpdate:modelValue":r[0]||=e=>w.value=e,label:`Signed NDA Document`},null,8,[`modelValue`]),l(`div`,g,[r[4]||=o(` Current Selection: `,-1),l(`code`,_,e(typeof w.value==`string`?w.value:w.value?.name??`(none)`),1)])]),_:1}),a(f,{title:`Real-Time Validation (Allowed Types & Max Size)`,description:`Restricts uploaded files to PDF/DOCX and enforces a 2048 KB (2MB) maximum file size.`},{code:n(()=>[a(d,{code:S,language:`vue`})]),default:n(()=>[a(s(u),{modelValue:T.value,"onUpdate:modelValue":r[1]||=e=>T.value=e,label:`Resume / Curriculum Vitae`,tooltip:`Only PDF or DOCX format permitted (max 2MB)`,"tooltip-position":`right`,validate:{maxSize:2048,allowedTypes:[`pdf`,`docx`]}},null,8,[`modelValue`]),r[5]||=l(`div`,{class:`text-xs text-slate-500 space-y-1 mt-2`},[l(`div`,{class:`text-slate-400 dark:text-slate-500`},[o(` Constraints: max 2048 KB, allowed extensions: `),l(`code`,{class:`font-mono`},`['pdf', 'docx']`),o(`. `)])],-1)]),_:1}),a(f,{title:`External Error & Disabled States`,description:`Visual invalid upload warnings and read-only file states.`},{code:n(()=>[a(d,{code:C,language:`vue`})]),default:n(()=>[l(`div`,v,[a(s(u),{modelValue:E.value,"onUpdate:modelValue":r[2]||=e=>E.value=e,label:`Tax Return Filing`,error:`Tax verification server rejected corrupted checksum`},null,8,[`modelValue`]),a(s(u),{modelValue:D.value,"onUpdate:modelValue":r[3]||=e=>D.value=e,label:`Archived Payroll Receipt (Read-Only)`,disabled:``},null,8,[`modelValue`])])]),_:1}),l(`section`,y,[r[6]||=l(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),a(p,{props:O})]),l(`section`,b,[r[7]||=l(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),a(m,{events:k})])]))}});export{w as default};