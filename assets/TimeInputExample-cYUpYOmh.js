import{M as e,O as t,U as n,c as r,d as i,g as a,h as o,m as s,mt as c,q as l,t as u,z as d}from"./i18n-CQHTY6ci.js";import{t as f}from"./TimeInput-CxkuAyub.js";import{t as p}from"./CodeBlock-Cjmxf9F4.js";import{n as m,t as h}from"./PropsTable-Dv1x2aJC.js";import{t as g}from"./EventsTable-D-LMtD8H.js";var _={class:`space-y-8`},v={class:`text-xs text-slate-500`},y={class:`font-mono font-bold`},b={class:`text-xs text-slate-500 space-y-1`},x={class:`font-mono font-bold`},S={class:`text-slate-400 dark:text-slate-500`},C={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},w={class:`space-y-4`},T={class:`space-y-4`},E=`<template>
  <TimeInput
    v-model="startTime"
    label="Shift Start Time"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimeInput } from '@zyvnox/vue-pack/components'

const startTime = ref('09:00')
<\/script>`,D=`<TimeInput
  v-model="deliveryTime"
  label="Delivery Window Schedule"
  :validate="{
    minTime: '08:00',
    maxTime: '17:00',
  }"
/>`,O=`<TimeInput
  v-model="openingTime"
  label="Hotline Opens"
  tooltip="Standard operating business hours are 09:00 to 17:00"
  tooltip-position="right"
/>`,k=`<TimeInput
  v-model="departure"
  label="Departure Schedule"
  error="Departure cannot fall during maintenance"
/>
<TimeInput
  v-model="checkIn"
  label="Standard Check-in Time"
  disabled
/>`,A=a({__name:`TimeInputExample`,setup(a){let{isIndonesian:A,currentLocale:j}=u(),M=n(`09:00`),N=n(`06:30`),P=n(`08:30`),F=n(`03:00`),I=n(`14:00`),L=[{name:`modelValue`,type:`TimeOnly | string`,required:!0,description:`Reactive time string v-model (HH:mm format)`},{name:`label`,type:`string`,required:!0,description:`Field label title displayed above the time picker`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`placeholder`,type:`string`,description:`Placeholder hint text (defaults to HH:mm)`},{name:`validate`,type:`{ minTime?: TimeOnly, maxTime?: TimeOnly }`,description:`Client-side time boundary constraints. Emits localized errors if selected time is before minTime or after maxTime.`},{name:`disabled`,type:`boolean`,default:`false`,description:`Disabled time picker state`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for validation error notices`}],R=[{name:`update:modelValue`,type:`(value: string, id: string) => void`,description:`Emitted upon time change`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when time violates minTime/maxTime rules`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when selected time passes validation`}];return(n,a)=>{let u=e(`DocHeader`);return t(),i(`div`,_,[o(u),o(m,{title:`Basic Time Selection`,description:`Selects hours and minutes formatted as HH:mm.`},{code:d(()=>[o(p,{code:E,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:M.value,"onUpdate:modelValue":a[0]||=e=>M.value=e,label:l(A)?`Waktu Mulai Shift`:`Shift Start Time`,lang:l(j)},null,8,[`modelValue`,`label`,`lang`]),r(`div`,v,[s(c(l(A)?`Waktu Terpilih:`:`Selected Time:`)+` `,1),r(`code`,y,c(M.value||(l(A)?`(tidak ada)`:`(none)`)),1)])]),_:1}),o(m,{title:`Real-Time Validation (MinTime & MaxTime)`,description:`Validates that the selected time is within standard business hours (08:00 to 17:00).`},{code:d(()=>[o(p,{code:D,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:N.value,"onUpdate:modelValue":a[1]||=e=>N.value=e,label:l(A)?`Jadwal Jendela Pengiriman`:`Delivery Window Schedule`,lang:l(j),validate:{minTime:`08:00`,maxTime:`17:00`}},null,8,[`modelValue`,`label`,`lang`]),r(`div`,b,[r(`div`,null,[s(c(l(A)?`Waktu Saat Ini:`:`Current Time:`)+` `,1),r(`code`,x,c(N.value||(l(A)?`(tidak ada)`:`(none)`)),1)]),r(`div`,S,c(l(A)?`Jendela operasional yang diizinkan: 08:00 hingga 17:00.`:`Allowed operating window: 08:00 through 17:00.`),1)])]),_:1}),o(m,{title:`With Schema Tooltip`,description:`Displays operating hours via tooltip.`},{code:d(()=>[o(p,{code:O,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:P.value,"onUpdate:modelValue":a[2]||=e=>P.value=e,label:l(A)?`Jam Buka Layanan Pelanggan`:`Customer Service Hotline Opens`,tooltip:l(A)?`Jam kerja operasional standar adalah 09:00 hingga 17:00 WIB`:`Standard operating business hours are 09:00 to 17:00 WIB`,"tooltip-position":`right`,lang:l(j)},null,8,[`modelValue`,`label`,`tooltip`,`lang`])]),_:1}),o(m,{title:`External Error & Disabled States`,description:`Visual invalid time alerts and locked clock inputs.`},{code:d(()=>[o(p,{code:k,language:`vue`})]),default:d(()=>[r(`div`,C,[o(l(f),{modelValue:F.value,"onUpdate:modelValue":a[3]||=e=>F.value=e,label:l(A)?`Jadwal Keberangkatan`:`Departure Schedule`,error:l(A)?`Keberangkatan tidak dapat dijadwalkan selama jendela pemeliharaan`:`Departure cannot be scheduled during maintenance window`,lang:l(j)},null,8,[`modelValue`,`label`,`error`,`lang`]),o(l(f),{modelValue:I.value,"onUpdate:modelValue":a[4]||=e=>I.value=e,label:l(A)?`Waktu Check-in Standar (Hanya-Baca)`:`Standard Check-in Time (Read-Only)`,disabled:``,lang:l(j)},null,8,[`modelValue`,`label`,`lang`])])]),_:1}),r(`section`,w,[o(h,{props:L})]),r(`section`,T,[o(g,{events:R})])])}}});export{A as default};