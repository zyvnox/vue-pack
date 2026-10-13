import{Et as e,L as t,St as n,Tt as r,ft as i,gt as a,ht as o,kt as s,lt as c,mt as l,vt as u}from"./index-jB9TdKXO.js";import{t as d}from"./CodeBlock-BYwXs7eI.js";import{n as f,t as p}from"./PropsTable-Cmdmv644.js";import{t as m}from"./EventsTable-CbC4IuxC.js";var h={class:`space-y-8`},g={class:`text-xs text-slate-500`},_={class:`font-mono font-bold`},v={class:`text-xs text-slate-500 space-y-1`},y={class:`font-mono font-bold`},b={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},x={class:`space-y-4`},S={class:`space-y-4`},C=`<template>
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
<\/script>`,w=`<UrlInput
  v-model="webhookUrl"
  label="Webhook Endpoint Target"
  placeholder="https://api.zyvnox.com/v1/webhook"
  :validate="true"
/>`,T=`<UrlInput
  v-model="repoUrl"
  label="Documentation Repo"
  tooltip="Must begin with https://"
  tooltip-position="right"
/>`,E=`<UrlInput
  v-model="callback"
  label="Callback URL"
  error="Callback URL must use HTTPS"
/>
<UrlInput
  v-model="baseUrl"
  label="Canonical Base URL"
  disabled
/>`,D=a({__name:`UrlInputExample`,setup(a){let D=r(`https://zyvnox.com`),O=r(`not-a-valid-url`),k=r(`https://github.com/zyvnox/vue-pack`),A=r(`http://insecure.internal`),j=r(`https://api.zyvnox.com`),M=[{name:`modelValue`,type:`string`,required:!0,description:`Reactive URL string v-model`},{name:`label`,type:`string`,required:!0,description:`Input label title`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`placeholder`,type:`string`,description:`Placeholder hint text (defaults to i18n label)`},{name:`validate`,type:`boolean`,default:`true`,description:`Enables automatic URL URI parser validation`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks URL input`},{name:`error`,type:`string`,description:`External validation error message from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code`}],N=[{name:`update:modelValue`,type:`(value: string, id: string) => void`,description:`Emitted upon typing`},{name:`push:error`,type:`(message: string, id: string) => void`,description:`Emitted when URL fails format verification`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when URL is valid`}];return(r,a)=>(u(),i(`div`,h,[a[10]||=c(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[c(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` UrlInput `),c(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Web URL address input component with real-time protocol & URI parsing validation, custom tooltips, and i18n support. `)],-1),o(f,{title:`Basic URL Input`,description:`Input with web address validation and link icon indicator.`},{code:n(()=>[o(d,{code:C,language:`vue`})]),default:n(()=>[o(e(t),{modelValue:D.value,"onUpdate:modelValue":a[0]||=e=>D.value=e,label:`Company Homepage`,placeholder:`https://zyvnox.com`},null,8,[`modelValue`]),c(`div`,g,[a[5]||=l(` Bound Value: `,-1),c(`code`,_,s(D.value||`(empty)`),1)])]),_:1}),o(f,{title:`Real-Time URI Protocol Validation`,description:`Validates valid internet URL format (requires valid protocol e.g. https:// and hostname).`},{code:n(()=>[o(d,{code:w,language:`vue`})]),default:n(()=>[o(e(t),{modelValue:O.value,"onUpdate:modelValue":a[1]||=e=>O.value=e,label:`Webhook Endpoint Target`,placeholder:`https://api.zyvnox.com/v1/webhook`,validate:!0},null,8,[`modelValue`]),c(`div`,v,[c(`div`,null,[a[6]||=l(`Current Value: `,-1),c(`code`,y,s(O.value||`(empty)`),1)]),a[7]||=c(`div`,{class:`text-slate-400 dark:text-slate-500`},` Enforces standard web URI format (valid protocol, host domain, path). `,-1)])]),_:1}),o(f,{title:`With Schema Tooltip`,description:`Displays URL protocol requirement hints via tooltip.`},{code:n(()=>[o(d,{code:T,language:`vue`})]),default:n(()=>[o(e(t),{modelValue:k.value,"onUpdate:modelValue":a[2]||=e=>k.value=e,label:`Public Documentation Repo`,tooltip:`Must begin with https:// and point to public repository`,"tooltip-position":`right`,placeholder:`https://github.com/...`},null,8,[`modelValue`])]),_:1}),o(f,{title:`External Error & Disabled States`,description:`Visual invalid URL alerts and read-only links.`},{code:n(()=>[o(d,{code:E,language:`vue`})]),default:n(()=>[c(`div`,b,[o(e(t),{modelValue:A.value,"onUpdate:modelValue":a[3]||=e=>A.value=e,label:`Callback URL`,error:`Callback URL must use secure HTTPS protocol`},null,8,[`modelValue`]),o(e(t),{modelValue:j.value,"onUpdate:modelValue":a[4]||=e=>j.value=e,label:`Canonical Base URL (Read-Only)`,disabled:``},null,8,[`modelValue`])])]),_:1}),c(`section`,x,[a[8]||=c(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),o(p,{props:M})]),c(`section`,S,[a[9]||=c(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),o(m,{events:N})])]))}});export{D as default};