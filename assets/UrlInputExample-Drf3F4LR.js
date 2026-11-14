import{M as e,O as t,U as n,c as r,d as i,g as a,h as o,m as s,mt as c,q as l,t as u,z as d}from"./i18n-CQHTY6ci.js";import{t as f}from"./UrlInput-B1eI3jMc.js";import{t as p}from"./CodeBlock-Cjmxf9F4.js";import{n as m,t as h}from"./PropsTable-Dv1x2aJC.js";import{t as g}from"./EventsTable-D-LMtD8H.js";var _={class:`space-y-8`},v={class:`text-xs text-slate-500`},y={class:`font-mono font-bold`},b={class:`text-xs text-slate-500 space-y-1`},x={class:`font-mono font-bold`},S={class:`text-slate-400 dark:text-slate-500`},C={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},w={class:`space-y-4`},T={class:`space-y-4`},E=`<template>
  <UrlInput
    v-model="website"
    label="Company Homepage"
    placeholder="https://zyvnox.com"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UrlInput } from '@zyvnox/vue-pack/components'

const website = ref('https://zyvnox.com')
<\/script>`,D=`<UrlInput
  v-model="webhookUrl"
  label="Webhook Endpoint Target"
  placeholder="https://api.zyvnox.com/v1/webhook"
  :validate="true"
/>`,O=`<UrlInput
  v-model="repoUrl"
  label="Documentation Repo"
  tooltip="Must begin with https://"
  tooltip-position="right"
/>`,k=`<UrlInput
  v-model="callback"
  label="Callback URL"
  error="Callback URL must use HTTPS"
/>
<UrlInput
  v-model="baseUrl"
  label="Canonical Base URL"
  disabled
/>`,A=a({__name:`UrlInputExample`,setup(a){let{isIndonesian:A,currentLocale:j}=u(),M=n(`https://zyvnox.com`),N=n(`not-a-valid-url`),P=n(`https://github.com/zyvnox/vue-pack`),F=n(`http://insecure.internal`),I=n(`https://api.zyvnox.com`),L=[{name:`modelValue`,type:`string`,required:!0,description:`Reactive URL string v-model`},{name:`label`,type:`string`,required:!0,description:`Input label title`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`placeholder`,type:`string`,description:`Placeholder hint text (defaults to i18n label)`},{name:`validate`,type:`boolean`,default:`true`,description:`Enables automatic URL URI parser validation`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks URL input`},{name:`error`,type:`string`,description:`External validation error message from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code`}],R=[{name:`update:modelValue`,type:`(value: string, id: string) => void`,description:`Emitted upon typing`},{name:`push:error`,type:`(message: string, id: string) => void`,description:`Emitted when URL fails format verification`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when URL is valid`}];return(n,a)=>{let u=e(`DocHeader`);return t(),i(`div`,_,[o(u),o(m,{title:`Basic URL Input`,description:`Input with web address validation and link icon indicator.`},{code:d(()=>[o(p,{code:E,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:M.value,"onUpdate:modelValue":a[0]||=e=>M.value=e,label:l(A)?`Beranda Perusahaan`:`Company Homepage`,placeholder:`https://zyvnox.com`,lang:l(j)},null,8,[`modelValue`,`label`,`lang`]),r(`div`,v,[s(c(l(A)?`Nilai Terikat:`:`Bound Value:`)+` `,1),r(`code`,y,c(M.value||(l(A)?`(kosong)`:`(empty)`)),1)])]),_:1}),o(m,{title:`Real-Time URI Protocol Validation`,description:`Validates valid internet URL format (requires valid protocol e.g. https:// and hostname).`},{code:d(()=>[o(p,{code:D,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:N.value,"onUpdate:modelValue":a[1]||=e=>N.value=e,label:l(A)?`Target Endpoint Webhook`:`Webhook Endpoint Target`,placeholder:`https://api.zyvnox.com/v1/webhook`,validate:!0,lang:l(j)},null,8,[`modelValue`,`label`,`lang`]),r(`div`,b,[r(`div`,null,[s(c(l(A)?`Nilai Saat Ini:`:`Current Value:`)+` `,1),r(`code`,x,c(N.value||(l(A)?`(kosong)`:`(empty)`)),1)]),r(`div`,S,c(l(A)?`Menerapkan format URI web standar (protokol valid, domain host, jalur).`:`Enforces standard web URI format (valid protocol, host domain, path).`),1)])]),_:1}),o(m,{title:`With Schema Tooltip`,description:`Displays URL protocol requirement hints via tooltip.`},{code:d(()=>[o(p,{code:O,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:P.value,"onUpdate:modelValue":a[2]||=e=>P.value=e,label:l(A)?`Repositori Dokumentasi Publik`:`Public Documentation Repo`,tooltip:l(A)?`Harus diawali https:// dan mengarah ke repositori publik`:`Must begin with https:// and point to public repository`,"tooltip-position":`right`,placeholder:`https://github.com/...`,lang:l(j)},null,8,[`modelValue`,`label`,`tooltip`,`lang`])]),_:1}),o(m,{title:`External Error & Disabled States`,description:`Visual invalid URL alerts and read-only links.`},{code:d(()=>[o(p,{code:k,language:`vue`})]),default:d(()=>[r(`div`,C,[o(l(f),{modelValue:F.value,"onUpdate:modelValue":a[3]||=e=>F.value=e,label:l(A)?`URL Callback`:`Callback URL`,error:l(A)?`URL Callback harus menggunakan protokol HTTPS yang aman`:`Callback URL must use secure HTTPS protocol`,lang:l(j)},null,8,[`modelValue`,`label`,`error`,`lang`]),o(l(f),{modelValue:I.value,"onUpdate:modelValue":a[4]||=e=>I.value=e,label:l(A)?`URL Basis Kanonis (Hanya-Baca)`:`Canonical Base URL (Read-Only)`,disabled:``,lang:l(j)},null,8,[`modelValue`,`label`,`lang`])])]),_:1}),r(`section`,w,[o(h,{props:L})]),r(`section`,T,[o(g,{events:R})])])}}});export{A as default};