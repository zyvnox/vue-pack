import{M as e,O as t,U as n,c as r,d as i,g as a,h as o,m as s,mt as c,q as l,t as u,z as d}from"./i18n-CQHTY6ci.js";import{t as f}from"./TelInput-DWPyyDLP.js";import{t as p}from"./CodeBlock-Cjmxf9F4.js";import{n as m,t as h}from"./PropsTable-Dv1x2aJC.js";import{t as g}from"./EventsTable-D-LMtD8H.js";var _={class:`space-y-8`},v={class:`text-xs text-slate-500`},y={class:`font-mono font-bold`},b={class:`text-xs text-slate-500 space-y-1`},x={class:`font-mono font-bold`},S={class:`text-slate-400 dark:text-slate-500`},C={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},w={class:`space-y-4`},T={class:`space-y-4`},E=`<template>
  <TelInput
    v-model="phone"
    label="Primary Mobile Phone"
    placeholder="0812-3456-7890"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TelInput } from '@zyvnox/vue-pack/components'

const phone = ref('0812-3456-7890')
<\/script>`,D=`<TelInput
  v-model="phone"
  label="Emergency Contact WhatsApp"
  placeholder="+62 812-3456-7890"
/>`,O=`<TelInput
  v-model="hotline"
  label="Corporate Switchboard Hotline"
  tooltip="Include country dialing prefix code"
  tooltip-position="right"
/>`,k=`<TelInput
  v-model="extension"
  label="Direct Line Extension"
  error="Area code must match regional office"
/>
<TelInput
  v-model="supportLine"
  label="Toll-Free Support Line"
  disabled
/>`,A=a({__name:`TelInputExample`,setup(a){let{isIndonesian:A,currentLocale:j}=u(),M=n(`0812-3456-7890`),N=n(`123`),P=n(`+62 21 555-0199`),F=n(`+1 800 555-0100`),I=n(`0800-1-SUPPORT`),L=[{name:`modelValue`,type:`string`,required:!0,description:`Reactive telephone string v-model`},{name:`label`,type:`string`,required:!0,description:`Input label title`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`placeholder`,type:`string`,default:`'0812-3456-7890'`,description:`Placeholder hint text`},{name:`validate`,type:`Record<string, any>`,description:`Client-side validation rules (regex format checking)`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks phone input`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup position`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code`}],R=[{name:`update:modelValue`,type:`(value: string, id: string) => void`,description:`Emitted upon phone number typing`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when phone number format violates regex`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when phone number format is valid`}];return(n,a)=>{let u=e(`DocHeader`);return t(),i(`div`,_,[o(u),o(m,{title:`Basic Telephone Input`,description:`Phone number input with mobile dialpad assistance.`},{code:d(()=>[o(p,{code:E,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:M.value,"onUpdate:modelValue":a[0]||=e=>M.value=e,label:l(A)?`Nomor Ponsel Utama`:`Primary Mobile Phone`,placeholder:`0812-3456-7890`,lang:l(j)},null,8,[`modelValue`,`label`,`lang`]),r(`div`,v,[s(c(l(A)?`Nilai Terikat:`:`Bound Value:`)+` `,1),r(`code`,y,c(M.value||(l(A)?`(kosong)`:`(empty)`)),1)])]),_:1}),o(m,{title:`Real-Time Telephone Validation`,description:`Validates international / domestic phone format (digits, plus prefix, hyphens, min 7 - max 20 chars).`},{code:d(()=>[o(p,{code:D,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:N.value,"onUpdate:modelValue":a[1]||=e=>N.value=e,label:l(A)?`WhatsApp Kontak Darurat`:`Emergency Contact WhatsApp`,placeholder:`+62 812-3456-7890`,lang:l(j)},null,8,[`modelValue`,`label`,`lang`]),r(`div`,b,[r(`div`,null,[s(c(l(A)?`Nilai Saat Ini:`:`Current Value:`)+` `,1),r(`code`,x,c(N.value||(l(A)?`(kosong)`:`(empty)`)),1)]),r(`div`,S,[s(c(l(A)?`Menerapkan skema penomoran telekomunikasi standar:`:`Enforces standard telecom numbering schema:`)+` `,1),a[5]||=r(`code`,{class:`font-mono`},`[0-9+\\-\\s()]{7,20}`,-1),a[6]||=s(`. `,-1)])])]),_:1}),o(m,{title:`With Schema Tooltip`,description:`Displays country code calling guidance via tooltip.`},{code:d(()=>[o(p,{code:O,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:P.value,"onUpdate:modelValue":a[2]||=e=>P.value=e,label:l(A)?`Hotline Sentral Perusahaan`:`Corporate Switchboard Hotline`,tooltip:l(A)?`Sertakan kode awalan panggilan negara (misal +62 untuk Indonesia)`:`Include country dialing prefix code (e.g. +62 for Indonesia)`,"tooltip-position":`right`,placeholder:`+62 21 555-0199`,lang:l(j)},null,8,[`modelValue`,`label`,`tooltip`,`lang`])]),_:1}),o(m,{title:`External Error & Disabled States`,description:`Visual invalid carrier alerts and read-only telephone views.`},{code:d(()=>[o(p,{code:k,language:`vue`})]),default:d(()=>[r(`div`,C,[o(l(f),{modelValue:F.value,"onUpdate:modelValue":a[3]||=e=>F.value=e,label:l(A)?`Ekstensi Saluran Langsung`:`Direct Line Extension`,error:l(A)?`Kode area harus cocok dengan registrasi kantor regional`:`Area code must match regional office registration`,lang:l(j)},null,8,[`modelValue`,`label`,`error`,`lang`]),o(l(f),{modelValue:I.value,"onUpdate:modelValue":a[4]||=e=>I.value=e,label:l(A)?`Layanan Bebas Pulsa (Hanya-Baca)`:`Toll-Free Support Line (Read-Only)`,disabled:``,lang:l(j)},null,8,[`modelValue`,`label`,`lang`])])]),_:1}),r(`section`,w,[o(h,{props:L})]),r(`section`,T,[o(g,{events:R})])])}}});export{A as default};