import{Mt as e,Ot as t,Tt as n,_t as r,bt as i,gt as a,ht as o,kt as s,o as c,pt as l,ut as u}from"./index-EUDlBqHA.js";import{t as d}from"./CodeBlock-DWWJlQgm.js";import{n as f,t as p}from"./PropsTable-C27FNX9a.js";import{t as m}from"./EventsTable-Bt6E4k0S.js";var h={class:`space-y-8`},g={class:`text-xs text-slate-500`},_={class:`font-mono font-bold`},v={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},y={class:`space-y-4`},b={class:`space-y-4`},x=`<template>
  <FileArrayInput
    v-model="files"
    label="Project Supporting Documents"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FileArrayInput } from '@zyvnox/vue-pack/components'

const files = ref(['https://company.internal/specs.pdf'])
<\/script>`,S=`<FileArrayInput
  v-model="tenderFiles"
  label="Tender Submission Package"
  tooltip="Submit max 3 files in PDF or ZIP format"
  tooltip-position="right"
  :validate="{
    maxFiles: 3,
    maxSize: 4096,
    allowedTypes: ['pdf', 'zip'],
  }"
/>`,C=`<FileArrayInput
  v-model="evidences"
  label="Mandatory Audit Evidences"
  error="At least one notarized document is required"
/>
<FileArrayInput
  v-model="lockedEvidences"
  label="Locked Case Evidences"
  disabled
/>`,w=r({__name:`FileArrayInputExample`,setup(r){let w=t([`https://company.internal/specs.pdf`,`https://company.internal/diagram.png`]),T=t([]),E=t([]),D=t([`evidence-01.pdf`,`evidence-02.zip`]),O=[{name:`modelValue`,type:`(File | string)[]`,required:!0,description:`Reactive array of File objects or remote URL strings`},{name:`label`,type:`string`,description:`Field label title displayed above attachments container`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`validate`,type:`{ maxFiles?: number, maxSize?: number, allowedTypes?: string[] }`,description:`Multi-file validation constraints. "maxFiles" caps total item count; "maxSize" is in KB per file; "allowedTypes" lists permitted file extensions without dot.`},{name:`disabled`,type:`boolean`,default:`false`,description:`Disables adding new files or removing existing attachments`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for button labels and error notices`}],k=[{name:`update:modelValue`,type:`(value: (File | string)[]) => void`,description:`Emitted upon file additions or removals`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when file list violates maxFiles, maxSize, or allowedTypes rules`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when all attachments pass validation`}];return(t,r)=>(i(),l(`div`,h,[r[8]||=u(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[u(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` FileArrayInput `),u(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`}," Multi-file attachments manager with list preview, max file count limits (`maxFiles`), file type & size constraints, custom tooltips, and i18n support. ")],-1),a(f,{title:`Basic Multi-File Attachments`,description:`Manage a list of files or remote links with add/remove actions.`},{code:n(()=>[a(d,{code:x,language:`vue`})]),default:n(()=>[a(s(c),{modelValue:w.value,"onUpdate:modelValue":r[0]||=e=>w.value=e,label:`Project Supporting Documents`},null,8,[`modelValue`]),u(`div`,g,[r[4]||=o(` Total Attached Files: `,-1),u(`code`,_,e(w.value.length)+` files`,1)])]),_:1}),a(f,{title:`Real-Time Validation (Max Files & Allowed Types)`,description:`Limits attachment pool to a maximum of 3 files, restricts types to PDF/ZIP, and limits each file to 4096 KB (4MB).`},{code:n(()=>[a(d,{code:S,language:`vue`})]),default:n(()=>[a(s(c),{modelValue:T.value,"onUpdate:modelValue":r[1]||=e=>T.value=e,label:`Tender Submission Package`,tooltip:`Submit max 3 files in PDF or ZIP format`,"tooltip-position":`right`,validate:{maxFiles:3,maxSize:4096,allowedTypes:[`pdf`,`zip`]}},null,8,[`modelValue`]),r[5]||=u(`div`,{class:`text-xs text-slate-500 space-y-1 mt-2`},[u(`div`,{class:`text-slate-400 dark:text-slate-500`},[o(` Constraints: maxFiles: 3, maxSize: 4096 KB per file, allowed: `),u(`code`,{class:`font-mono`},`['pdf', 'zip']`),o(`. `)])],-1)]),_:1}),a(f,{title:`External Error & Disabled States`,description:`Visual invalid count feedback and read-only file lists.`},{code:n(()=>[a(d,{code:C,language:`vue`})]),default:n(()=>[u(`div`,v,[a(s(c),{modelValue:E.value,"onUpdate:modelValue":r[2]||=e=>E.value=e,label:`Mandatory Audit Evidences`,error:`At least one notarized evidence document is required`},null,8,[`modelValue`]),a(s(c),{modelValue:D.value,"onUpdate:modelValue":r[3]||=e=>D.value=e,label:`Locked Case Evidences (Read-Only)`,disabled:``},null,8,[`modelValue`])])]),_:1}),u(`section`,y,[r[6]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),a(p,{props:O})]),u(`section`,b,[r[7]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),a(m,{events:k})])]))}});export{w as default};