import{M as e,O as t,U as n,c as r,d as i,g as a,h as o,m as s,mt as c,q as l,t as u,z as d}from"./i18n-CQHTY6ci.js";import{t as f}from"./DateTimeInput-BrUjOg7Y.js";import{t as p}from"./CodeBlock-Cjmxf9F4.js";import{n as m,t as h}from"./PropsTable-Dv1x2aJC.js";import{t as g}from"./EventsTable-D-LMtD8H.js";var _={class:`space-y-8`},v={class:`text-xs text-slate-500`},y={class:`font-mono font-bold`},b={class:`text-xs text-slate-500 space-y-1`},x={class:`font-mono font-bold`},S={class:`text-slate-400 dark:text-slate-500`},C={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},w={class:`space-y-4`},T={class:`space-y-4`},E=`<template>
  <DateTimeInput
    v-model="timestamp"
    label="Webinar Scheduled Time"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DateTimeInput } from '@zyvnox/vue-pack/components'

const timestamp = ref('2026-10-31T18:00')
<\/script>`,D=`<DateTimeInput
  v-model="maintenanceWindow"
  label="Scheduled Maintenance Window"
  output-format="utc"
  :validate="{
    minDateTime: '2026-11-01T00:00',
    maxDateTime: '2026-11-30T23:59',
  }"
/>`,O=`<DateTimeInput
  v-model="maintenance"
  label="System Maintenance Downtime"
  tooltip="Select beginning of maintenance window"
  tooltip-position="right"
/>`,k=`<DateTimeInput
  v-model="closingTime"
  label="Auction Closing Moment"
  error="Closing time must be at least 24 hours in advance"
/>
<DateTimeInput
  v-model="serverCreated"
  label="Server Creation Timestamp"
  disabled
/>`,A=a({__name:`DateTimeInputExample`,setup(a){let{isIndonesian:A,currentLocale:j}=u(),M=n(`2026-10-31T18:00`),N=n(`2026-10-25T14:30`),P=n(`2026-11-01T02:00`),F=n(`2026-10-11T13:00`),I=n(`2026-01-01T00:00`),L=[{name:`modelValue`,type:`DateTimeString | string`,required:!0,description:`Reactive datetime string v-model (ISO format)`},{name:`label`,type:`string`,required:!0,description:`Field label title displayed above picker`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`placeholder`,type:`string`,description:`Placeholder hint`},{name:`outputFormat`,type:`'local-offset' | 'utc'`,default:`'local-offset'`,description:`Output string formatting mode: "local-offset" (preserves local timezone) or "utc" (converts to UTC with trailing Z).`},{name:`validate`,type:`{ minDateTime?: DateTimeString, maxDateTime?: DateTimeString }`,description:`Client-side boundary validation for timestamp range.`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks picker interactions`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for validation error notices`}],R=[{name:`update:modelValue`,type:`(value: string, id: string) => void`,description:`Emitted upon datetime change with formatted timestamp`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when timestamp violates min/max boundaries`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when selected timestamp passes validation`}];return(n,a)=>{let u=e(`DocHeader`);return t(),i(`div`,_,[o(u),o(m,{title:`Basic Date & Time Selection`,description:`Combined picker outputting timestamp formatted values.`},{code:d(()=>[o(p,{code:E,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:M.value,"onUpdate:modelValue":a[0]||=e=>M.value=e,label:l(A)?`Jadwal Waktu Webinar`:`Webinar Scheduled Time`,lang:l(j)},null,8,[`modelValue`,`label`,`lang`]),r(`div`,v,[s(c(l(A)?`Timestamp Terpilih:`:`Selected Timestamp:`)+` `,1),r(`code`,y,c(M.value||(l(A)?`(tidak ada)`:`(none)`)),1)])]),_:1}),o(m,{title:`Real-Time Validation (MinDateTime & MaxDateTime)`,description:`Validates that scheduled downtime falls within allowed window (2026-11-01T00:00 to 2026-11-30T23:59).`},{code:d(()=>[o(p,{code:D,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:N.value,"onUpdate:modelValue":a[1]||=e=>N.value=e,label:l(A)?`Jendela Waktu Pemeliharaan Terjadwal`:`Scheduled Maintenance Window`,"output-format":`utc`,lang:l(j),validate:{minDateTime:`2026-11-01T00:00:00Z`,maxDateTime:`2026-11-30T23:59:59Z`}},null,8,[`modelValue`,`label`,`lang`]),r(`div`,b,[r(`div`,null,[s(c(l(A)?`Timestamp Saat Ini (output UTC):`:`Current Timestamp (UTC output):`)+` `,1),r(`code`,x,c(N.value||(l(A)?`(tidak ada)`:`(none)`)),1)]),r(`div`,S,c(l(A)?`Rentang diizinkan: 1 Nov 2026 00:00 hingga 30 Nov 2026 23:59.`:`Allowed range: Nov 1, 2026 00:00 through Nov 30, 2026 23:59.`),1)])]),_:1}),o(m,{title:`With Schema Tooltip`,description:`Displays timezone and timestamp guidance via tooltip.`},{code:d(()=>[o(p,{code:O,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:P.value,"onUpdate:modelValue":a[2]||=e=>P.value=e,label:l(A)?`Downtime Pemeliharaan Sistem`:`System Maintenance Downtime`,tooltip:l(A)?`Pilih awal jendela pemeliharaan dalam zona waktu lokal`:`Select beginning of maintenance window in local timezone`,"tooltip-position":`right`,lang:l(j)},null,8,[`modelValue`,`label`,`tooltip`,`lang`])]),_:1}),o(m,{title:`External Error & Disabled States`,description:`Visual invalid timestamp alerts and locked records.`},{code:d(()=>[o(p,{code:k,language:`vue`})]),default:d(()=>[r(`div`,C,[o(l(f),{modelValue:F.value,"onUpdate:modelValue":a[3]||=e=>F.value=e,label:l(A)?`Waktu Penutupan Lelang`:`Auction Closing Moment`,error:l(A)?`Waktu penutupan harus setidaknya 24 jam sebelumnya`:`Closing time must be at least 24 hours in advance`,lang:l(j)},null,8,[`modelValue`,`label`,`error`,`lang`]),o(l(f),{modelValue:I.value,"onUpdate:modelValue":a[4]||=e=>I.value=e,label:l(A)?`Timestamp Pembuatan Server (Hanya-Baca)`:`Server Creation Timestamp (Read-Only)`,disabled:``,lang:l(j)},null,8,[`modelValue`,`label`,`lang`])])]),_:1}),r(`section`,w,[o(h,{props:L})]),r(`section`,T,[o(g,{events:R})])])}}});export{A as default};