import{Et as e,St as t,Tt as n,ft as r,gt as i,ht as a,kt as o,lt as s,mt as c,vt as l,w as u}from"./index-BQNesRql.js";import{t as d}from"./CodeBlock-BDBDmQfe.js";import{n as f,t as p}from"./PropsTable-CIH-RclG.js";import{t as m}from"./EventsTable-6XlwCFJn.js";var h={class:`space-y-8`},g={class:`text-xs text-slate-500`},_={class:`font-mono font-bold`},v={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},y={class:`space-y-4`},b={class:`space-y-4`},x=`<template>
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
/>`,w=i({__name:`FileInputExample`,setup(i){let w=n(`https://example.com/docs/nda-2026.pdf`),T=n(null),E=n(null),D=n(`https://enterprise.internal/receipts/2026-01.pdf`),O=[{name:`modelValue`,type:`File | string | null`,required:!0,description:`Reactive file object or remote URL string v-model`},{name:`label`,type:`string`,description:`Field label title displayed above upload box`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`validate`,type:`{ maxSize?: number, allowedTypes?: string[] }`,description:`Client-side file validator. "maxSize" is in KB, and "allowedTypes" is an array of lowercase extension strings without dot (e.g. ["pdf", "docx"]).`},{name:`disabled`,type:`boolean`,default:`false`,description:`Disables file selection, URL prompt, and delete button`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for button labels and error notices`}],k=[{name:`update:modelValue`,type:`(value: File | string | null, id: string) => void`,description:`Emitted upon file selection, URL entry, or file deletion`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when file violates maxSize or allowedTypes rules`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when file is valid or cleared`}];return(n,i)=>(l(),r(`div`,h,[i[8]||=s(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[s(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` FileInput `),s(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Single document upload component with remote URL entry, file type & size constraint validation, file inspection metadata, and tooltip guidance. `)],-1),a(f,{title:`Basic File Upload`,description:`Selects a single file or URL link with reactive binding.`},{code:t(()=>[a(d,{code:x,language:`vue`})]),default:t(()=>[a(e(u),{modelValue:w.value,"onUpdate:modelValue":i[0]||=e=>w.value=e,label:`Signed NDA Document`},null,8,[`modelValue`]),s(`div`,g,[i[4]||=c(` Current Selection: `,-1),s(`code`,_,o(typeof w.value==`string`?w.value:w.value?.name??`(none)`),1)])]),_:1}),a(f,{title:`Real-Time Validation (Allowed Types & Max Size)`,description:`Restricts uploaded files to PDF/DOCX and enforces a 2048 KB (2MB) maximum file size.`},{code:t(()=>[a(d,{code:S,language:`vue`})]),default:t(()=>[a(e(u),{modelValue:T.value,"onUpdate:modelValue":i[1]||=e=>T.value=e,label:`Resume / Curriculum Vitae`,tooltip:`Only PDF or DOCX format permitted (max 2MB)`,"tooltip-position":`right`,validate:{maxSize:2048,allowedTypes:[`pdf`,`docx`]}},null,8,[`modelValue`]),i[5]||=s(`div`,{class:`text-xs text-slate-500 space-y-1 mt-2`},[s(`div`,{class:`text-slate-400 dark:text-slate-500`},[c(` Constraints: max 2048 KB, allowed extensions: `),s(`code`,{class:`font-mono`},`['pdf', 'docx']`),c(`. `)])],-1)]),_:1}),a(f,{title:`External Error & Disabled States`,description:`Visual invalid upload warnings and read-only file states.`},{code:t(()=>[a(d,{code:C,language:`vue`})]),default:t(()=>[s(`div`,v,[a(e(u),{modelValue:E.value,"onUpdate:modelValue":i[2]||=e=>E.value=e,label:`Tax Return Filing`,error:`Tax verification server rejected corrupted checksum`},null,8,[`modelValue`]),a(e(u),{modelValue:D.value,"onUpdate:modelValue":i[3]||=e=>D.value=e,label:`Archived Payroll Receipt (Read-Only)`,disabled:``},null,8,[`modelValue`])])]),_:1}),s(`section`,y,[i[6]||=s(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),a(p,{props:O})]),s(`section`,b,[i[7]||=s(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),a(m,{events:k})])]))}});export{w as default};