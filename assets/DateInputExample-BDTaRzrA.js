import{L as e,Mt as t,Ot as n,Tt as r,_t as i,bt as a,gt as o,ht as s,kt as c,pt as l,ut as u}from"./index-BhghGzgp.js";import{t as d}from"./CodeBlock-CSGfp_x-.js";import{n as f,t as p}from"./PropsTable-rw53ZQEs.js";import{t as m}from"./EventsTable-BlxUYD03.js";var h={class:`space-y-8`},g={class:`text-xs text-slate-500`},_={class:`font-mono font-bold`},v={class:`text-xs text-slate-500 space-y-1`},y={class:`font-mono font-bold`},b={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},x={class:`space-y-4`},S={class:`space-y-4`},C=`<template>
  <DateInput
    v-model="startDate"
    label="Event Start Date"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DateInput } from '@zyvnox/vue-pack/components'

const startDate = ref('2026-12-31')
<\/script>`,w=`<DateInput
  v-model="bookingDate"
  label="Booking Schedule Range"
  :validate="{
    minDate: '2026-06-01',
    maxDate: '2026-12-31',
  }"
/>`,T=`<DateInput
  v-model="closingDate"
  label="Fiscal Year Closing Date"
  tooltip="Must fall on the final working day"
  tooltip-position="right"
/>`,E=`<DateInput
  v-model="deadline"
  label="Required Deadline"
  error="Deadline date must be in the future"
/>
<DateInput
  v-model="signDate"
  label="Contract Signing Date"
  disabled
/>`,D=i({__name:`DateInputExample`,setup(i){let D=n(`2026-12-31`),O=n(`2026-05-15`),k=n(`2026-10-15`),A=n(`2020-01-01`),j=n(`2026-01-01`),M=[{name:`modelValue`,type:`DateOnly | string`,required:!0,description:`Reactive date string v-model in ISO YYYY-MM-DD format`},{name:`label`,type:`string`,required:!0,description:`Field label title displayed above the date picker`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`placeholder`,type:`string`,description:`Placeholder hint text (defaults to YYYY-MM-DD)`},{name:`validate`,type:`{ minDate?: DateOnly, maxDate?: DateOnly }`,description:`Client-side calendar date boundary validator. Emits localized errors if selected date precedes minDate or exceeds maxDate.`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks picker interactions and disables date selection`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup orientation`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for validation error notices`}],N=[{name:`update:modelValue`,type:`(value: string, id: string) => void`,description:`Emitted upon date selection with ISO formatted string`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when date fails minDate/maxDate boundaries`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when selected date passes all validation checks`}];return(n,i)=>(a(),l(`div`,h,[i[10]||=u(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[u(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` DateInput `),u(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Calendar date selection component with ISO date format validation, minDate & maxDate bounds, custom tooltips, and i18n support. `)],-1),o(f,{title:`Basic Date Selection`,description:`Selects a calendar date bound to an ISO format string (YYYY-MM-DD).`},{code:r(()=>[o(d,{code:C,language:`vue`})]),default:r(()=>[o(c(e),{modelValue:D.value,"onUpdate:modelValue":i[0]||=e=>D.value=e,label:`Event Start Date`,placeholder:`YYYY-MM-DD`},null,8,[`modelValue`]),u(`div`,g,[i[5]||=s(` Selected Date: `,-1),u(`code`,_,t(D.value||`(none)`),1)])]),_:1}),o(f,{title:`Real-Time Validation (MinDate & MaxDate)`,description:`Validates calendar date bounds between minDate (2026-06-01) and maxDate (2026-12-31).`},{code:r(()=>[o(d,{code:w,language:`vue`})]),default:r(()=>[o(c(e),{modelValue:O.value,"onUpdate:modelValue":i[1]||=e=>O.value=e,label:`Booking Schedule Range`,validate:{minDate:`2026-06-01`,maxDate:`2026-12-31`}},null,8,[`modelValue`]),u(`div`,v,[u(`div`,null,[i[6]||=s(`Current Date: `,-1),u(`code`,y,t(O.value||`(none)`),1)]),i[7]||=u(`div`,{class:`text-slate-400 dark:text-slate-500`},` Allowed window: 2026-06-01 through 2026-12-31. `,-1)])]),_:1}),o(f,{title:`With Schema Tooltip`,description:`Displays date constraints and format hints via tooltip.`},{code:r(()=>[o(d,{code:T,language:`vue`})]),default:r(()=>[o(c(e),{modelValue:k.value,"onUpdate:modelValue":i[2]||=e=>k.value=e,label:`Fiscal Year Closing Date`,tooltip:`Must fall on the final working day of the accounting period`,"tooltip-position":`right`},null,8,[`modelValue`])]),_:1}),o(f,{title:`External Error & Disabled States`,description:`Visual invalid date alerts and read-only dates.`},{code:r(()=>[o(d,{code:E,language:`vue`})]),default:r(()=>[u(`div`,b,[o(c(e),{modelValue:A.value,"onUpdate:modelValue":i[3]||=e=>A.value=e,label:`Required Deadline`,error:`Deadline date must be scheduled in the future`},null,8,[`modelValue`]),o(c(e),{modelValue:j.value,"onUpdate:modelValue":i[4]||=e=>j.value=e,label:`Contract Signing Date (Read-Only)`,disabled:``},null,8,[`modelValue`])])]),_:1}),u(`section`,x,[i[8]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),o(p,{props:M})]),u(`section`,S,[i[9]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),o(m,{events:N})])]))}});export{D as default};