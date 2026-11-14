import{M as e,O as t,U as n,c as r,d as i,g as a,h as o,m as s,mt as c,q as l,t as u,z as d}from"./i18n-CQHTY6ci.js";import{t as f}from"./DateInput-T5XHuJZI.js";import{t as p}from"./CodeBlock-Cjmxf9F4.js";import{n as m,t as h}from"./PropsTable-Dv1x2aJC.js";import{t as g}from"./EventsTable-D-LMtD8H.js";var _={class:`space-y-8`},v={class:`text-xs text-slate-500`},y={class:`font-mono font-bold`},b={class:`text-xs text-slate-500 space-y-1`},x={class:`font-mono font-bold`},S={class:`text-slate-400 dark:text-slate-500`},C={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},w={class:`space-y-4`},T={class:`space-y-4`},E=`<template>
  <DateInput
    v-model="startDate"
    label="Event Start Date"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DateInput } from '@zyvnox/vue-pack/components'

const startDate = ref('2026-12-31')
<\/script>`,D=`<DateInput
  v-model="bookingDate"
  label="Booking Schedule Range"
  :validate="{
    minDate: '2026-06-01',
    maxDate: '2026-12-31',
  }"
/>`,O=`<DateInput
  v-model="closingDate"
  label="Fiscal Year Closing Date"
  tooltip="Must fall on the final working day"
  tooltip-position="right"
/>`,k=`<DateInput
  v-model="deadline"
  label="Required Deadline"
  error="Deadline date must be in the future"
/>
<DateInput
  v-model="signDate"
  label="Contract Signing Date"
  disabled
/>`,A=a({__name:`DateInputExample`,setup(a){let{isIndonesian:A,currentLocale:j}=u(),M=n(`2026-12-31`),N=n(`2026-05-15`),P=n(`2026-10-15`),F=n(`2020-01-01`),I=n(`2026-01-01`),L=[{name:`modelValue`,type:`DateOnly | string`,required:!0,description:`Reactive date string v-model in ISO YYYY-MM-DD format`},{name:`label`,type:`string`,required:!0,description:`Field label title displayed above the date picker`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`placeholder`,type:`string`,description:`Placeholder hint text (defaults to YYYY-MM-DD)`},{name:`validate`,type:`{ minDate?: DateOnly, maxDate?: DateOnly }`,description:`Client-side calendar date boundary validator. Emits localized errors if selected date precedes minDate or exceeds maxDate.`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks picker interactions and disables date selection`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup orientation`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for validation error notices`}],R=[{name:`update:modelValue`,type:`(value: string, id: string) => void`,description:`Emitted upon date selection with ISO formatted string`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when date fails minDate/maxDate boundaries`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when selected date passes all validation checks`}];return(n,a)=>{let u=e(`DocHeader`);return t(),i(`div`,_,[o(u),o(m,{title:`Basic Date Selection`,description:`Selects a calendar date bound to an ISO format string (YYYY-MM-DD).`},{code:d(()=>[o(p,{code:E,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:M.value,"onUpdate:modelValue":a[0]||=e=>M.value=e,label:l(A)?`Tanggal Mulai Acara`:`Event Start Date`,placeholder:`YYYY-MM-DD`,lang:l(j)},null,8,[`modelValue`,`label`,`lang`]),r(`div`,v,[s(c(l(A)?`Tanggal Terpilih:`:`Selected Date:`)+` `,1),r(`code`,y,c(M.value||(l(A)?`(tidak ada)`:`(none)`)),1)])]),_:1}),o(m,{title:`Real-Time Validation (MinDate & MaxDate)`,description:`Validates calendar date bounds between minDate (2026-06-01) and maxDate (2026-12-31).`},{code:d(()=>[o(p,{code:D,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:N.value,"onUpdate:modelValue":a[1]||=e=>N.value=e,label:l(A)?`Rentang Jadwal Pemesanan`:`Booking Schedule Range`,lang:l(j),validate:{minDate:`2026-06-01`,maxDate:`2026-12-31`}},null,8,[`modelValue`,`label`,`lang`]),r(`div`,b,[r(`div`,null,[s(c(l(A)?`Tanggal Saat Ini:`:`Current Date:`)+` `,1),r(`code`,x,c(N.value||(l(A)?`(tidak ada)`:`(none)`)),1)]),r(`div`,S,c(l(A)?`Rentang yang diizinkan: 2026-06-01 hingga 2026-12-31.`:`Allowed window: 2026-06-01 through 2026-12-31.`),1)])]),_:1}),o(m,{title:`With Schema Tooltip`,description:`Displays date constraints and format hints via tooltip.`},{code:d(()=>[o(p,{code:O,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:P.value,"onUpdate:modelValue":a[2]||=e=>P.value=e,label:l(A)?`Tanggal Tutup Tahun Buku`:`Fiscal Year Closing Date`,tooltip:l(A)?`Harus jatuh pada hari kerja terakhir periode akuntansi`:`Must fall on the final working day of the accounting period`,"tooltip-position":`right`,lang:l(j)},null,8,[`modelValue`,`label`,`tooltip`,`lang`])]),_:1}),o(m,{title:`External Error & Disabled States`,description:`Visual invalid date alerts and read-only dates.`},{code:d(()=>[o(p,{code:k,language:`vue`})]),default:d(()=>[r(`div`,C,[o(l(f),{modelValue:F.value,"onUpdate:modelValue":a[3]||=e=>F.value=e,label:l(A)?`Batas Waktu Wajib`:`Required Deadline`,error:l(A)?`Tanggal tenggat waktu harus dijadwalkan di masa depan`:`Deadline date must be scheduled in the future`,lang:l(j)},null,8,[`modelValue`,`label`,`error`,`lang`]),o(l(f),{modelValue:I.value,"onUpdate:modelValue":a[4]||=e=>I.value=e,label:l(A)?`Tanggal Penandatanganan Kontrak (Hanya-Baca)`:`Contract Signing Date (Read-Only)`,disabled:``,lang:l(j)},null,8,[`modelValue`,`label`,`lang`])])]),_:1}),r(`section`,w,[o(h,{props:L})]),r(`section`,T,[o(g,{events:R})])])}}});export{A as default};