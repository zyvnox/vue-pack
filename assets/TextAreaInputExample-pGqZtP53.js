import{Mt as e,N as t,Ot as n,Tt as r,_t as i,bt as a,gt as o,ht as s,kt as c,pt as l,ut as u}from"./index-Dtl-Gxe1.js";import{t as d}from"./CodeBlock-B1_NttD9.js";import{n as f,t as p}from"./PropsTable-B0Jg45bu.js";import{t as m}from"./EventsTable-CCaWn8Vs.js";var h={class:`space-y-8`},g={class:`text-xs text-slate-500`},_={class:`font-mono font-bold`},v={class:`text-xs text-slate-500 space-y-1`},y={class:`font-mono font-bold`},b={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},x={class:`space-y-4`},S={class:`space-y-4`},C=`<template>
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
/>`,D=i({__name:`TextAreaInputExample`,setup(i){let D=n(``),O=n(`Too short`),k=n(``),A=n(`Secret key: AKIAIOSFODNN7EXAMPLE`),j=n(`System log snapshot: 2026-01-01 00:00 UTC - Normal operations.`),M=[{name:`modelValue`,type:`string`,required:!0,description:`Reactive multi-line string v-model`},{name:`label`,type:`string`,required:!0,description:`Field label title`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`placeholder`,type:`string`,description:`Placeholder hint text (defaults to i18n label)`},{name:`validate`,type:`{ minLength?: number, maxLength?: number }`,description:`Client-side character length bounds. Emits localized validation errors if text is too short or exceeds maxLength.`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks text area`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code`}],N=[{name:`update:modelValue`,type:`(value: string, id: string) => void`,description:`Emitted upon typing`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when text violates minLength or maxLength`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when text satisfies all validation rules`}];return(n,i)=>(a(),l(`div`,h,[i[10]||=u(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[u(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` TextAreaInput `),u(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Multi-line text area component with reactive auto-expand, minLength & maxLength validation guards, custom tooltips, and i18n support. `)],-1),o(f,{title:`Basic Text Area`,description:`Standard multi-line text input with reactive v-model binding.`},{code:r(()=>[o(d,{code:C,language:`vue`})]),default:r(()=>[o(c(t),{modelValue:D.value,"onUpdate:modelValue":i[0]||=e=>D.value=e,label:`Project Overview`,placeholder:`Describe project deliverables...`},null,8,[`modelValue`]),u(`div`,g,[i[5]||=s(` Character Count: `,-1),u(`code`,_,e(D.value.length)+` characters`,1)])]),_:1}),o(f,{title:`Real-Time Validation (Min & Max Length)`,description:`Validates that summary has at least 20 characters and at most 200 characters with live localized feedback.`},{code:r(()=>[o(d,{code:w,language:`vue`})]),default:r(()=>[o(c(t),{modelValue:O.value,"onUpdate:modelValue":i[1]||=e=>O.value=e,label:`Executive Summary`,placeholder:`Enter at least 20 characters...`,validate:{minLength:20,maxLength:200}},null,8,[`modelValue`]),u(`div`,v,[u(`div`,null,[i[6]||=s(`Current Length: `,-1),u(`code`,y,e(O.value.length)+` / 200 chars`,1)]),i[7]||=u(`div`,{class:`text-slate-400 dark:text-slate-500`},` Enforces minLength: 20, maxLength: 200. `,-1)])]),_:1}),o(f,{title:`With Schema Tooltip`,description:`Displays detailed submission guidance via tooltip.`},{code:r(()=>[o(d,{code:T,language:`vue`})]),default:r(()=>[o(c(t),{modelValue:k.value,"onUpdate:modelValue":i[2]||=e=>k.value=e,label:`Technical Bug Reproduction Steps`,tooltip:`Provide step-by-step numbers, expected vs actual behavior, and environment details`,"tooltip-position":`right`,placeholder:`1. Navigate to /dashboard...`},null,8,[`modelValue`])]),_:1}),o(f,{title:`External Error & Disabled States`,description:`Visual invalid review alerts and read-only text areas.`},{code:r(()=>[o(d,{code:E,language:`vue`})]),default:r(()=>[u(`div`,b,[o(c(t),{modelValue:A.value,"onUpdate:modelValue":i[3]||=e=>A.value=e,label:`Internal Notes`,error:`Notes must not contain sensitive internal access credentials`},null,8,[`modelValue`]),o(c(t),{modelValue:j.value,"onUpdate:modelValue":i[4]||=e=>j.value=e,label:`Archived Compliance Log (Read-Only)`,disabled:``},null,8,[`modelValue`])])]),_:1}),u(`section`,x,[i[8]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),o(p,{props:M})]),u(`section`,S,[i[9]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),o(m,{events:N})])]))}});export{D as default};