import{Mt as e,Ot as t,Tt as n,_t as r,bt as i,gt as a,ht as o,kt as s,p as c,pt as l,ut as u}from"./index-BhghGzgp.js";import{t as d}from"./CodeBlock-CSGfp_x-.js";import{n as f,t as p}from"./PropsTable-rw53ZQEs.js";import{t as m}from"./EventsTable-BlxUYD03.js";var h={class:`space-y-8`},g={class:`text-xs text-slate-500`},_={class:`font-mono font-bold`},v={class:`text-xs text-slate-500 space-y-1`},y={class:`font-mono font-bold`},b={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},x={class:`space-y-4`},S={class:`space-y-4`},C=`<template>
  <TimeInput
    v-model="startTime"
    label="Shift Start Time"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimeInput } from '@zyvnox/vue-pack/components'

const startTime = ref('09:00')
<\/script>`,w=`<TimeInput
  v-model="deliveryTime"
  label="Delivery Window Schedule"
  :validate="{
    minTime: '08:00',
    maxTime: '17:00',
  }"
/>`,T=`<TimeInput
  v-model="openingTime"
  label="Hotline Opens"
  tooltip="Standard operating business hours are 09:00 to 17:00"
  tooltip-position="right"
/>`,E=`<TimeInput
  v-model="departure"
  label="Departure Schedule"
  error="Departure cannot fall during maintenance"
/>
<TimeInput
  v-model="checkIn"
  label="Standard Check-in Time"
  disabled
/>`,D=r({__name:`TimeInputExample`,setup(r){let D=t(`09:00`),O=t(`06:30`),k=t(`08:30`),A=t(`03:00`),j=t(`14:00`),M=[{name:`modelValue`,type:`TimeOnly | string`,required:!0,description:`Reactive time string v-model (HH:mm format)`},{name:`label`,type:`string`,required:!0,description:`Field label title displayed above the time picker`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`placeholder`,type:`string`,description:`Placeholder hint text (defaults to HH:mm)`},{name:`validate`,type:`{ minTime?: TimeOnly, maxTime?: TimeOnly }`,description:`Client-side time boundary constraints. Emits localized errors if selected time is before minTime or after maxTime.`},{name:`disabled`,type:`boolean`,default:`false`,description:`Disabled time picker state`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for validation error notices`}],N=[{name:`update:modelValue`,type:`(value: string, id: string) => void`,description:`Emitted upon time change`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when time violates minTime/maxTime rules`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when selected time passes validation`}];return(t,r)=>(i(),l(`div`,h,[r[10]||=u(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[u(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` TimeInput `),u(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Time selection component with 24-hour formatting, minTime & maxTime boundary validation, tooltip support, and i18n support. `)],-1),a(f,{title:`Basic Time Selection`,description:`Selects hours and minutes formatted as HH:mm.`},{code:n(()=>[a(d,{code:C,language:`vue`})]),default:n(()=>[a(s(c),{modelValue:D.value,"onUpdate:modelValue":r[0]||=e=>D.value=e,label:`Shift Start Time`},null,8,[`modelValue`]),u(`div`,g,[r[5]||=o(` Selected Time: `,-1),u(`code`,_,e(D.value||`(none)`),1)])]),_:1}),a(f,{title:`Real-Time Validation (MinTime & MaxTime)`,description:`Validates that the selected time is within standard business hours (08:00 to 17:00).`},{code:n(()=>[a(d,{code:w,language:`vue`})]),default:n(()=>[a(s(c),{modelValue:O.value,"onUpdate:modelValue":r[1]||=e=>O.value=e,label:`Delivery Window Schedule`,validate:{minTime:`08:00`,maxTime:`17:00`}},null,8,[`modelValue`]),u(`div`,v,[u(`div`,null,[r[6]||=o(`Current Time: `,-1),u(`code`,y,e(O.value||`(none)`),1)]),r[7]||=u(`div`,{class:`text-slate-400 dark:text-slate-500`},` Allowed operating window: 08:00 through 17:00. `,-1)])]),_:1}),a(f,{title:`With Schema Tooltip`,description:`Displays operating hours via tooltip.`},{code:n(()=>[a(d,{code:T,language:`vue`})]),default:n(()=>[a(s(c),{modelValue:k.value,"onUpdate:modelValue":r[2]||=e=>k.value=e,label:`Customer Service Hotline Opens`,tooltip:`Standard operating business hours are 09:00 to 17:00 WIB`,"tooltip-position":`right`},null,8,[`modelValue`])]),_:1}),a(f,{title:`External Error & Disabled States`,description:`Visual invalid time alerts and locked clock inputs.`},{code:n(()=>[a(d,{code:E,language:`vue`})]),default:n(()=>[u(`div`,b,[a(s(c),{modelValue:A.value,"onUpdate:modelValue":r[3]||=e=>A.value=e,label:`Departure Schedule`,error:`Departure cannot be scheduled during maintenance window`},null,8,[`modelValue`]),a(s(c),{modelValue:j.value,"onUpdate:modelValue":r[4]||=e=>j.value=e,label:`Standard Check-in Time (Read-Only)`,disabled:``},null,8,[`modelValue`])])]),_:1}),u(`section`,x,[r[8]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),a(p,{props:M})]),u(`section`,S,[r[9]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),a(m,{events:N})])]))}});export{D as default};