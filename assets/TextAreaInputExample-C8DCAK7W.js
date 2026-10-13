import{Et as e,M as t,St as n,Tt as r,ft as i,gt as a,ht as o,kt as s,lt as c,mt as l,vt as u}from"./index-BQNesRql.js";import{t as d}from"./CodeBlock-BDBDmQfe.js";import{n as f,t as p}from"./PropsTable-CIH-RclG.js";import{t as m}from"./EventsTable-6XlwCFJn.js";var h={class:`space-y-8`},g={class:`text-xs text-slate-500`},_={class:`font-mono font-bold`},v={class:`text-xs text-slate-500 space-y-1`},y={class:`font-mono font-bold`},b={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},x={class:`space-y-4`},S={class:`space-y-4`},C=`<template>
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
<\/script>`,w=`<TextAreaInput
  v-model="summary"
  label="Executive Summary"
  placeholder="Enter at least 20 characters..."
  :validate="{
    minLength: 20,
    maxLength: 200,
  }"
/>`,T=`<TextAreaInput
  v-model="bugSteps"
  label="Technical Bug Reproduction Steps"
  tooltip="Provide step-by-step numbers"
  tooltip-position="right"
/>`,E=`<TextAreaInput
  v-model="notes"
  label="Internal Notes"
  error="Notes must not contain credentials"
/>
<TextAreaInput
  v-model="archived"
  label="Archived Log"
  disabled
/>`,D=a({__name:`TextAreaInputExample`,setup(a){let D=r(``),O=r(`Too short`),k=r(``),A=r(`Secret key: AKIAIOSFODNN7EXAMPLE`),j=r(`System log snapshot: 2026-01-01 00:00 UTC - Normal operations.`),M=[{name:`modelValue`,type:`string`,required:!0,description:`Reactive multi-line string v-model`},{name:`label`,type:`string`,required:!0,description:`Field label title`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`placeholder`,type:`string`,description:`Placeholder hint text (defaults to i18n label)`},{name:`validate`,type:`{ minLength?: number, maxLength?: number }`,description:`Client-side character length bounds. Emits localized validation errors if text is too short or exceeds maxLength.`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks text area`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code`}],N=[{name:`update:modelValue`,type:`(value: string, id: string) => void`,description:`Emitted upon typing`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when text violates minLength or maxLength`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when text satisfies all validation rules`}];return(r,a)=>(u(),i(`div`,h,[a[10]||=c(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[c(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` TextAreaInput `),c(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Multi-line text area component with reactive auto-expand, minLength & maxLength validation guards, custom tooltips, and i18n support. `)],-1),o(f,{title:`Basic Text Area`,description:`Standard multi-line text input with reactive v-model binding.`},{code:n(()=>[o(d,{code:C,language:`vue`})]),default:n(()=>[o(e(t),{modelValue:D.value,"onUpdate:modelValue":a[0]||=e=>D.value=e,label:`Project Overview`,placeholder:`Describe project deliverables...`},null,8,[`modelValue`]),c(`div`,g,[a[5]||=l(` Character Count: `,-1),c(`code`,_,s(D.value.length)+` characters`,1)])]),_:1}),o(f,{title:`Real-Time Validation (Min & Max Length)`,description:`Validates that summary has at least 20 characters and at most 200 characters with live localized feedback.`},{code:n(()=>[o(d,{code:w,language:`vue`})]),default:n(()=>[o(e(t),{modelValue:O.value,"onUpdate:modelValue":a[1]||=e=>O.value=e,label:`Executive Summary`,placeholder:`Enter at least 20 characters...`,validate:{minLength:20,maxLength:200}},null,8,[`modelValue`]),c(`div`,v,[c(`div`,null,[a[6]||=l(`Current Length: `,-1),c(`code`,y,s(O.value.length)+` / 200 chars`,1)]),a[7]||=c(`div`,{class:`text-slate-400 dark:text-slate-500`},` Enforces minLength: 20, maxLength: 200. `,-1)])]),_:1}),o(f,{title:`With Schema Tooltip`,description:`Displays detailed submission guidance via tooltip.`},{code:n(()=>[o(d,{code:T,language:`vue`})]),default:n(()=>[o(e(t),{modelValue:k.value,"onUpdate:modelValue":a[2]||=e=>k.value=e,label:`Technical Bug Reproduction Steps`,tooltip:`Provide step-by-step numbers, expected vs actual behavior, and environment details`,"tooltip-position":`right`,placeholder:`1. Navigate to /dashboard...`},null,8,[`modelValue`])]),_:1}),o(f,{title:`External Error & Disabled States`,description:`Visual invalid review alerts and read-only text areas.`},{code:n(()=>[o(d,{code:E,language:`vue`})]),default:n(()=>[c(`div`,b,[o(e(t),{modelValue:A.value,"onUpdate:modelValue":a[3]||=e=>A.value=e,label:`Internal Notes`,error:`Notes must not contain sensitive internal access credentials`},null,8,[`modelValue`]),o(e(t),{modelValue:j.value,"onUpdate:modelValue":a[4]||=e=>j.value=e,label:`Archived Compliance Log (Read-Only)`,disabled:``},null,8,[`modelValue`])])]),_:1}),c(`section`,x,[a[8]||=c(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),o(p,{props:M})]),c(`section`,S,[a[9]||=c(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),o(m,{events:N})])]))}});export{D as default};