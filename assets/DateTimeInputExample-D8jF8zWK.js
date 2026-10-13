import{Et as e,I as t,St as n,Tt as r,ft as i,gt as a,ht as o,kt as s,lt as c,mt as l,vt as u}from"./index-jB9TdKXO.js";import{t as d}from"./CodeBlock-BYwXs7eI.js";import{n as f,t as p}from"./PropsTable-Cmdmv644.js";import{t as m}from"./EventsTable-CbC4IuxC.js";var h={class:`space-y-8`},g={class:`text-xs text-slate-500`},_={class:`font-mono font-bold`},v={class:`text-xs text-slate-500 space-y-1`},y={class:`font-mono font-bold`},b={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},x={class:`space-y-4`},S={class:`space-y-4`},C=`<template>
  <DateTimeInput
    v-model="timestamp"
    label="Webinar Scheduled Time"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DateTimeInput } from '@zyvnox/vue-pack/components'

const timestamp = ref('2026-10-31T18:00')
<\/script>`,w=`<DateTimeInput
  v-model="maintenanceWindow"
  label="Scheduled Maintenance Window"
  output-format="utc"
  :validate="{
    minDateTime: '2026-11-01T00:00',
    maxDateTime: '2026-11-30T23:59',
  }"
/>`,T=`<DateTimeInput
  v-model="maintenance"
  label="System Maintenance Downtime"
  tooltip="Select beginning of maintenance window"
  tooltip-position="right"
/>`,E=`<DateTimeInput
  v-model="closingTime"
  label="Auction Closing Moment"
  error="Closing time must be at least 24 hours in advance"
/>
<DateTimeInput
  v-model="serverCreated"
  label="Server Creation Timestamp"
  disabled
/>`,D=a({__name:`DateTimeInputExample`,setup(a){let D=r(`2026-10-31T18:00`),O=r(`2026-10-25T14:30`),k=r(`2026-11-01T02:00`),A=r(`2026-10-11T13:00`),j=r(`2026-01-01T00:00`),M=[{name:`modelValue`,type:`DateTimeString | string`,required:!0,description:`Reactive datetime string v-model (ISO format)`},{name:`label`,type:`string`,required:!0,description:`Field label title displayed above picker`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`placeholder`,type:`string`,description:`Placeholder hint`},{name:`outputFormat`,type:`'local-offset' | 'utc'`,default:`'local-offset'`,description:`Output string formatting mode: "local-offset" (preserves local timezone) or "utc" (converts to UTC with trailing Z).`},{name:`validate`,type:`{ minDateTime?: DateTimeString, maxDateTime?: DateTimeString }`,description:`Client-side boundary validation for timestamp range.`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks picker interactions`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for validation error notices`}],N=[{name:`update:modelValue`,type:`(value: string, id: string) => void`,description:`Emitted upon datetime change with formatted timestamp`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when timestamp violates min/max boundaries`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when selected timestamp passes validation`}];return(r,a)=>(u(),i(`div`,h,[a[10]||=c(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[c(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` DateTimeInput `),c(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Combined date and time timestamp selector supporting ISO-8601 formatting, UTC / local-offset output, minDateTime & maxDateTime boundary checks, and tooltip guidance. `)],-1),o(f,{title:`Basic Date & Time Selection`,description:`Combined picker outputting timestamp formatted values.`},{code:n(()=>[o(d,{code:C,language:`vue`})]),default:n(()=>[o(e(t),{modelValue:D.value,"onUpdate:modelValue":a[0]||=e=>D.value=e,label:`Webinar Scheduled Time`},null,8,[`modelValue`]),c(`div`,g,[a[5]||=l(` Selected Timestamp: `,-1),c(`code`,_,s(D.value||`(none)`),1)])]),_:1}),o(f,{title:`Real-Time Validation (MinDateTime & MaxDateTime)`,description:`Validates that scheduled downtime falls within allowed window (2026-11-01T00:00 to 2026-11-30T23:59).`},{code:n(()=>[o(d,{code:w,language:`vue`})]),default:n(()=>[o(e(t),{modelValue:O.value,"onUpdate:modelValue":a[1]||=e=>O.value=e,label:`Scheduled Maintenance Window`,"output-format":`utc`,validate:{minDateTime:`2026-11-01T00:00:00Z`,maxDateTime:`2026-11-30T23:59:59Z`}},null,8,[`modelValue`]),c(`div`,v,[c(`div`,null,[a[6]||=l(`Current Timestamp (UTC output): `,-1),c(`code`,y,s(O.value||`(none)`),1)]),a[7]||=c(`div`,{class:`text-slate-400 dark:text-slate-500`},` Allowed range: Nov 1, 2026 00:00 through Nov 30, 2026 23:59. `,-1)])]),_:1}),o(f,{title:`With Schema Tooltip`,description:`Displays timezone and timestamp guidance via tooltip.`},{code:n(()=>[o(d,{code:T,language:`vue`})]),default:n(()=>[o(e(t),{modelValue:k.value,"onUpdate:modelValue":a[2]||=e=>k.value=e,label:`System Maintenance Downtime`,tooltip:`Select beginning of maintenance window in local timezone`,"tooltip-position":`right`},null,8,[`modelValue`])]),_:1}),o(f,{title:`External Error & Disabled States`,description:`Visual invalid timestamp alerts and locked records.`},{code:n(()=>[o(d,{code:E,language:`vue`})]),default:n(()=>[c(`div`,b,[o(e(t),{modelValue:A.value,"onUpdate:modelValue":a[3]||=e=>A.value=e,label:`Auction Closing Moment`,error:`Closing time must be at least 24 hours in advance`},null,8,[`modelValue`]),o(e(t),{modelValue:j.value,"onUpdate:modelValue":a[4]||=e=>j.value=e,label:`Server Creation Timestamp (Read-Only)`,disabled:``},null,8,[`modelValue`])])]),_:1}),c(`section`,x,[a[8]||=c(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),o(p,{props:M})]),c(`section`,S,[a[9]||=c(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),o(m,{events:N})])]))}});export{D as default};