import{M as e,O as t,U as n,c as r,d as i,g as a,h as o,m as s,mt as c,q as l,t as u,z as d}from"./i18n-CQHTY6ci.js";import{t as f}from"./TextAreaInput-BZlhvX3k.js";import{t as p}from"./CodeBlock-Cjmxf9F4.js";import{n as m,t as h}from"./PropsTable-Dv1x2aJC.js";import{t as g}from"./EventsTable-D-LMtD8H.js";var _={class:`space-y-8`},v={class:`text-xs text-slate-500`},y={class:`font-mono font-bold`},b={class:`text-xs text-slate-500 space-y-1`},x={class:`font-mono font-bold`},S={class:`text-slate-400 dark:text-slate-500`},C={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},w={class:`space-y-4`},T={class:`space-y-4`},E=`<template>
  <TextAreaInput
    v-model="overview"
    label="Project Overview"
    placeholder="Describe project deliverables..."
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TextAreaInput } from '@zyvnox/vue-pack/components'

const overview = ref('')
<\/script>`,D=`<TextAreaInput
  v-model="summary"
  label="Executive Summary"
  placeholder="Enter at least 20 characters..."
  :validate="{
    minLength: 20,
    maxLength: 200,
  }"
/>`,O=`<TextAreaInput
  v-model="bugSteps"
  label="Technical Bug Reproduction Steps"
  tooltip="Provide step-by-step numbers"
  tooltip-position="right"
/>`,k=`<TextAreaInput
  v-model="notes"
  label="Internal Notes"
  error="Notes must not contain credentials"
/>
<TextAreaInput
  v-model="archived"
  label="Archived Log"
  disabled
/>`,A=a({__name:`TextAreaInputExample`,setup(a){let{isIndonesian:A,currentLocale:j}=u(),M=n(``),N=n(`Too short`),P=n(``),F=n(`Secret key: AKIAIOSFODNN7EXAMPLE`),I=n(`System log snapshot: 2026-01-01 00:00 UTC - Normal operations.`),L=[{name:`modelValue`,type:`string`,required:!0,description:`Reactive multi-line string v-model`},{name:`label`,type:`string`,required:!0,description:`Field label title`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`placeholder`,type:`string`,description:`Placeholder hint text (defaults to i18n label)`},{name:`validate`,type:`{ minLength?: number, maxLength?: number }`,description:`Client-side character length bounds. Emits localized validation errors if text is too short or exceeds maxLength.`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks text area`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code`}],R=[{name:`update:modelValue`,type:`(value: string, id: string) => void`,description:`Emitted upon typing`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when text violates minLength or maxLength`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when text satisfies all validation rules`}];return(n,a)=>{let u=e(`DocHeader`);return t(),i(`div`,_,[o(u),o(m,{title:`Basic Text Area`,description:`Standard multi-line text input with reactive v-model binding.`},{code:d(()=>[o(p,{code:E,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:M.value,"onUpdate:modelValue":a[0]||=e=>M.value=e,label:l(A)?`Ikhtisar Proyek`:`Project Overview`,placeholder:l(A)?`Jelaskan deliverable proyek...`:`Describe project deliverables...`,lang:l(j)},null,8,[`modelValue`,`label`,`placeholder`,`lang`]),r(`div`,v,[s(c(l(A)?`Jumlah Karakter:`:`Character Count:`)+` `,1),r(`code`,y,c(M.value.length)+` `+c(l(A)?`karakter`:`characters`),1)])]),_:1}),o(m,{title:`Real-Time Validation (Min & Max Length)`,description:`Validates that summary has at least 20 characters and at most 200 characters with live localized feedback.`},{code:d(()=>[o(p,{code:D,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:N.value,"onUpdate:modelValue":a[1]||=e=>N.value=e,label:l(A)?`Ringkasan Eksekutif`:`Executive Summary`,placeholder:l(A)?`Masukkan setidaknya 20 karakter...`:`Enter at least 20 characters...`,lang:l(j),validate:{minLength:20,maxLength:200}},null,8,[`modelValue`,`label`,`placeholder`,`lang`]),r(`div`,b,[r(`div`,null,[s(c(l(A)?`Panjang Saat Ini:`:`Current Length:`)+` `,1),r(`code`,x,c(N.value.length)+` / 200 `+c(l(A)?`karakter`:`chars`),1)]),r(`div`,S,c(l(A)?`Menerapkan batas minLength: 20, maxLength: 200.`:`Enforces minLength: 20, maxLength: 200.`),1)])]),_:1}),o(m,{title:`With Schema Tooltip`,description:`Displays detailed submission guidance via tooltip.`},{code:d(()=>[o(p,{code:O,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:P.value,"onUpdate:modelValue":a[2]||=e=>P.value=e,label:l(A)?`Langkah Reproduksi Bug Teknis`:`Technical Bug Reproduction Steps`,tooltip:l(A)?`Berikan nomor langkah-demi-langkah, perilaku yang diharapkan vs aktual, dan detail lingkungan`:`Provide step-by-step numbers, expected vs actual behavior, and environment details`,"tooltip-position":`right`,placeholder:`1. Navigate to /dashboard...`,lang:l(j)},null,8,[`modelValue`,`label`,`tooltip`,`lang`])]),_:1}),o(m,{title:`External Error & Disabled States`,description:`Visual invalid review alerts and read-only text areas.`},{code:d(()=>[o(p,{code:k,language:`vue`})]),default:d(()=>[r(`div`,C,[o(l(f),{modelValue:F.value,"onUpdate:modelValue":a[3]||=e=>F.value=e,label:l(A)?`Catatan Internal`:`Internal Notes`,error:l(A)?`Catatan tidak boleh berisi kredensial akses internal yang sensitif`:`Notes must not contain sensitive internal access credentials`,lang:l(j)},null,8,[`modelValue`,`label`,`error`,`lang`]),o(l(f),{modelValue:I.value,"onUpdate:modelValue":a[4]||=e=>I.value=e,label:l(A)?`Log Kepatuhan Terarsip (Hanya-Baca)`:`Archived Compliance Log (Read-Only)`,disabled:``,lang:l(j)},null,8,[`modelValue`,`label`,`lang`])])]),_:1}),r(`section`,w,[o(h,{props:L})]),r(`section`,T,[o(g,{events:R})])])}}});export{A as default};