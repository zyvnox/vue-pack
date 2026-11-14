import{M as e,O as t,U as n,c as r,d as i,g as a,h as o,m as s,mt as c,q as l,t as u,z as d}from"./i18n-CQHTY6ci.js";import{t as f}from"./FileArrayInput-D50RzN7H.js";import{t as p}from"./CodeBlock-Cjmxf9F4.js";import{n as m,t as h}from"./PropsTable-Dv1x2aJC.js";import{t as g}from"./EventsTable-D-LMtD8H.js";var _={class:`space-y-8`},v={class:`text-xs text-slate-500`},y={class:`font-mono font-bold`},b={class:`text-xs text-slate-500 space-y-1 mt-2`},x={class:`text-slate-400 dark:text-slate-500`},S={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},C={class:`space-y-4`},w={class:`space-y-4`},T=`<template>
  <FileArrayInput
    v-model="files"
    label="Project Supporting Documents"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FileArrayInput } from '@zyvnox/vue-pack/components'

const files = ref(['https://company.internal/specs.pdf'])
<\/script>`,E=`<FileArrayInput
  v-model="tenderFiles"
  label="Tender Submission Package"
  tooltip="Submit max 3 files in PDF or ZIP format"
  tooltip-position="right"
  :validate="{
    maxFiles: 3,
    maxSize: 4096,
    allowedTypes: ['pdf', 'zip'],
  }"
/>`,D=`<FileArrayInput
  v-model="evidences"
  label="Mandatory Audit Evidences"
  error="At least one notarized document is required"
/>
<FileArrayInput
  v-model="lockedEvidences"
  label="Locked Case Evidences"
  disabled
/>`,O=a({__name:`FileArrayInputExample`,setup(a){let{isIndonesian:O,currentLocale:k}=u(),A=n([`https://company.internal/specs.pdf`,`https://company.internal/diagram.png`]),j=n([]),M=n([]),N=n([`evidence-01.pdf`,`evidence-02.zip`]),P=[{name:`modelValue`,type:`(File | string)[]`,required:!0,description:`Reactive array of File objects or remote URL strings`},{name:`label`,type:`string`,description:`Field label title displayed above attachments container`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`validate`,type:`{ maxFiles?: number, maxSize?: number, allowedTypes?: string[] }`,description:`Multi-file validation constraints. "maxFiles" caps total item count; "maxSize" is in KB per file; "allowedTypes" lists permitted file extensions without dot.`},{name:`disabled`,type:`boolean`,default:`false`,description:`Disables adding new files or removing existing attachments`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for button labels and error notices`}],F=[{name:`update:modelValue`,type:`(value: (File | string)[]) => void`,description:`Emitted upon file additions or removals`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when file list violates maxFiles, maxSize, or allowedTypes rules`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when all attachments pass validation`}];return(n,a)=>{let u=e(`DocHeader`);return t(),i(`div`,_,[o(u),o(m,{title:`Basic Multi-File Attachments`,description:`Manage a list of files or remote links with add/remove actions.`},{code:d(()=>[o(p,{code:T,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:A.value,"onUpdate:modelValue":a[0]||=e=>A.value=e,label:l(O)?`Dokumen Pendukung Proyek`:`Project Supporting Documents`,lang:l(k)},null,8,[`modelValue`,`label`,`lang`]),r(`div`,v,[s(c(l(O)?`Total Berkas Terlampir:`:`Total Attached Files:`)+` `,1),r(`code`,y,c(A.value.length)+` `+c(l(O)?`berkas`:`files`),1)])]),_:1}),o(m,{title:`Real-Time Validation (Max Files & Allowed Types)`,description:`Limits attachment pool to a maximum of 3 files, restricts types to PDF/ZIP, and limits each file to 4096 KB (4MB).`},{code:d(()=>[o(p,{code:E,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:j.value,"onUpdate:modelValue":a[1]||=e=>j.value=e,label:l(O)?`Paket Pengajuan Tender`:`Tender Submission Package`,tooltip:l(O)?`Kirim maksimal 3 berkas dalam format PDF atau ZIP`:`Submit max 3 files in PDF or ZIP format`,"tooltip-position":`right`,lang:l(k),validate:{maxFiles:3,maxSize:4096,allowedTypes:[`pdf`,`zip`]}},null,8,[`modelValue`,`label`,`tooltip`,`lang`]),r(`div`,b,[r(`div`,x,[s(c(l(O)?`Batasan: maxFiles: 3, maxSize: 4096 KB per berkas, format:`:`Constraints: maxFiles: 3, maxSize: 4096 KB per file, allowed:`)+` `,1),a[4]||=r(`code`,{class:`font-mono`},`['pdf', 'zip']`,-1),a[5]||=s(`. `,-1)])])]),_:1}),o(m,{title:`External Error & Disabled States`,description:`Visual invalid count feedback and read-only file lists.`},{code:d(()=>[o(p,{code:D,language:`vue`})]),default:d(()=>[r(`div`,S,[o(l(f),{modelValue:M.value,"onUpdate:modelValue":a[2]||=e=>M.value=e,label:l(O)?`Bukti Audit Wajib`:`Mandatory Audit Evidences`,error:l(O)?`Setidaknya satu dokumen bukti tersahkan diperlukan`:`At least one notarized evidence document is required`,lang:l(k)},null,8,[`modelValue`,`label`,`error`,`lang`]),o(l(f),{modelValue:N.value,"onUpdate:modelValue":a[3]||=e=>N.value=e,label:l(O)?`Bukti Kasus Terkunci (Hanya-Baca)`:`Locked Case Evidences (Read-Only)`,disabled:``,lang:l(k)},null,8,[`modelValue`,`label`,`lang`])])]),_:1}),r(`section`,C,[o(h,{props:P})]),r(`section`,w,[o(g,{events:F})])])}}});export{O as default};