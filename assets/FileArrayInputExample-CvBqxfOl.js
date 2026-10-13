import{Et as e,St as t,Tt as n,ft as r,gt as i,ht as a,kt as o,lt as s,m as c,mt as l,vt as u}from"./index-BQNesRql.js";import{t as d}from"./CodeBlock-BDBDmQfe.js";import{n as f,t as p}from"./PropsTable-CIH-RclG.js";import{t as m}from"./EventsTable-6XlwCFJn.js";var h={class:`space-y-8`},g={class:`text-xs text-slate-500`},_={class:`font-mono font-bold`},v={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},y={class:`space-y-4`},b={class:`space-y-4`},x=`<template>
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
/>`,w=i({__name:`FileArrayInputExample`,setup(i){let w=n([`https://company.internal/specs.pdf`,`https://company.internal/diagram.png`]),T=n([]),E=n([]),D=n([`evidence-01.pdf`,`evidence-02.zip`]),O=[{name:`modelValue`,type:`(File | string)[]`,required:!0,description:`Reactive array of File objects or remote URL strings`},{name:`label`,type:`string`,description:`Field label title displayed above attachments container`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`validate`,type:`{ maxFiles?: number, maxSize?: number, allowedTypes?: string[] }`,description:`Multi-file validation constraints. "maxFiles" caps total item count; "maxSize" is in KB per file; "allowedTypes" lists permitted file extensions without dot.`},{name:`disabled`,type:`boolean`,default:`false`,description:`Disables adding new files or removing existing attachments`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for button labels and error notices`}],k=[{name:`update:modelValue`,type:`(value: (File | string)[]) => void`,description:`Emitted upon file additions or removals`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when file list violates maxFiles, maxSize, or allowedTypes rules`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when all attachments pass validation`}];return(n,i)=>(u(),r(`div`,h,[i[8]||=s(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[s(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` FileArrayInput `),s(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`}," Multi-file attachments manager with list preview, max file count limits (`maxFiles`), file type & size constraints, custom tooltips, and i18n support. ")],-1),a(f,{title:`Basic Multi-File Attachments`,description:`Manage a list of files or remote links with add/remove actions.`},{code:t(()=>[a(d,{code:x,language:`vue`})]),default:t(()=>[a(e(c),{modelValue:w.value,"onUpdate:modelValue":i[0]||=e=>w.value=e,label:`Project Supporting Documents`},null,8,[`modelValue`]),s(`div`,g,[i[4]||=l(` Total Attached Files: `,-1),s(`code`,_,o(w.value.length)+` files`,1)])]),_:1}),a(f,{title:`Real-Time Validation (Max Files & Allowed Types)`,description:`Limits attachment pool to a maximum of 3 files, restricts types to PDF/ZIP, and limits each file to 4096 KB (4MB).`},{code:t(()=>[a(d,{code:S,language:`vue`})]),default:t(()=>[a(e(c),{modelValue:T.value,"onUpdate:modelValue":i[1]||=e=>T.value=e,label:`Tender Submission Package`,tooltip:`Submit max 3 files in PDF or ZIP format`,"tooltip-position":`right`,validate:{maxFiles:3,maxSize:4096,allowedTypes:[`pdf`,`zip`]}},null,8,[`modelValue`]),i[5]||=s(`div`,{class:`text-xs text-slate-500 space-y-1 mt-2`},[s(`div`,{class:`text-slate-400 dark:text-slate-500`},[l(` Constraints: maxFiles: 3, maxSize: 4096 KB per file, allowed: `),s(`code`,{class:`font-mono`},`['pdf', 'zip']`),l(`. `)])],-1)]),_:1}),a(f,{title:`External Error & Disabled States`,description:`Visual invalid count feedback and read-only file lists.`},{code:t(()=>[a(d,{code:C,language:`vue`})]),default:t(()=>[s(`div`,v,[a(e(c),{modelValue:E.value,"onUpdate:modelValue":i[2]||=e=>E.value=e,label:`Mandatory Audit Evidences`,error:`At least one notarized evidence document is required`},null,8,[`modelValue`]),a(e(c),{modelValue:D.value,"onUpdate:modelValue":i[3]||=e=>D.value=e,label:`Locked Case Evidences (Read-Only)`,disabled:``},null,8,[`modelValue`])])]),_:1}),s(`section`,y,[i[6]||=s(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),a(p,{props:O})]),s(`section`,b,[i[7]||=s(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),a(m,{events:k})])]))}});export{w as default};