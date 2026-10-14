import{Mt as e,Ot as t,Tt as n,_t as r,a as i,bt as a,gt as o,ht as s,kt as c,pt as l,ut as u}from"./index-DnYmOVzH.js";import{t as d}from"./CodeBlock-DwBCo2Nh.js";import{n as f,t as p}from"./PropsTable-UA4HlyP4.js";import{t as m}from"./EventsTable-BFB74qr4.js";var h={class:`space-y-8`},g={class:`text-xs text-slate-500`},_={class:`font-mono font-bold`},v={class:`text-xs text-slate-500 space-y-1`},y={class:`font-mono font-bold`},b={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},x={class:`space-y-4`},S={class:`space-y-4`},C=`<template>
  <EmailInput
    v-model="email"
    label="Work Email"
    placeholder="alex@company.com"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { EmailInput } from '@zyvnox/vue-pack/components'

const email = ref('')
<\/script>`,w=`<EmailInput
  v-model="accountEmail"
  label="Registered Account Email"
  :validate="{
    duplicate: ['admin@company.com', 'support@company.com', 'billing@company.com'],
  }"
/>`,T=`<EmailInput
  v-model="recoveryEmail"
  label="Recovery Email"
  tooltip="Used solely for password resets"
  tooltip-position="right"
/>`,E=`<EmailInput
  v-model="billingEmail"
  label="Billing Contact"
  required
  error="Mail exchanger unreachable for domain"
/>
<EmailInput
  v-model="accountEmail"
  label="Primary Account Email"
  disabled
/>`,D=r({__name:`EmailInputExample`,setup(r){let D=t(``),O=t(`admin@company.com`),k=t(``),A=t(`invalid-user@offline-host`),j=t(`admin@enterprise.org`),M=[{name:`modelValue`,type:`string | number`,required:!0,description:`Reactive email string v-model`},{name:`label`,type:`string`,required:!0,description:`Field label title displayed above the input`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`placeholder`,type:`string`,description:`Placeholder hint text (defaults to i18n label)`},{name:`validate`,type:`{ duplicate?: (string | number)[] }`,description:`Blacklist of forbidden or already registered emails. Also automatically enforces standard email regex validation.`},{name:`required`,type:`boolean`,default:`false`,description:`Displays required asterisk indicator`},{name:`disabled`,type:`boolean`,default:`false`,description:`Disabled input state`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for validation error notices`}],N=[{name:`update:modelValue`,type:`(value: string | number, id: string) => void`,description:`Emitted upon typing`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when email format is invalid or duplicate is detected`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when email is valid`}];return(t,r)=>(a(),l(`div`,h,[r[10]||=u(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[u(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` EmailInput `),u(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Email address input component with automatic RFC-compliant regex validation, duplicate checks, custom tooltip guidance, and i18n support. `)],-1),o(f,{title:`Basic Email Input`,description:`Email field with standard email keyboard hints and reactive binding.`},{code:n(()=>[o(d,{code:C,language:`vue`})]),default:n(()=>[o(c(i),{modelValue:D.value,"onUpdate:modelValue":r[0]||=e=>D.value=e,label:`Work Email`,placeholder:`alex@company.com`},null,8,[`modelValue`]),u(`div`,g,[r[5]||=s(` Bound Value: `,-1),u(`code`,_,e(D.value||`(empty)`),1)])]),_:1}),o(f,{title:`Real-Time Validation (Format & Duplicate Check)`,description:`Validates RFC email syntax and prevents registering existing emails (e.g. admin@company.com, support@company.com).`},{code:n(()=>[o(d,{code:w,language:`vue`})]),default:n(()=>[o(c(i),{modelValue:O.value,"onUpdate:modelValue":r[1]||=e=>O.value=e,label:`Registered Account Email`,placeholder:`user@domain.com`,validate:{duplicate:[`admin@company.com`,`support@company.com`,`billing@company.com`]}},null,8,[`modelValue`]),u(`div`,v,[u(`div`,null,[r[6]||=s(`Current Email: `,-1),u(`code`,y,e(O.value||`(empty)`),1)]),r[7]||=u(`div`,{class:`text-slate-400 dark:text-slate-500`},[s(` Reserved/Taken list: `),u(`code`,{class:`font-mono`},`['admin@company.com', 'support@company.com', 'billing@company.com']`),s(`. `)],-1)])]),_:1}),o(f,{title:`With Custom Schema Tooltip`,description:`Clear instruction tooltip displayed beside the email label.`},{code:n(()=>[o(d,{code:T,language:`vue`})]),default:n(()=>[o(c(i),{modelValue:k.value,"onUpdate:modelValue":r[2]||=e=>k.value=e,label:`Recovery Email`,tooltip:`Used solely for password resets and critical security notices`,"tooltip-position":`right`,placeholder:`recovery@personal.net`},null,8,[`modelValue`])]),_:1}),o(f,{title:`External Error & Disabled States`,description:`Visual invalid format feedback and read-only email view.`},{code:n(()=>[o(d,{code:E,language:`vue`})]),default:n(()=>[u(`div`,b,[o(c(i),{modelValue:A.value,"onUpdate:modelValue":r[3]||=e=>A.value=e,label:`Billing Contact`,required:``,error:`Mail exchanger unreachable for specified domain`},null,8,[`modelValue`]),o(c(i),{modelValue:j.value,"onUpdate:modelValue":r[4]||=e=>j.value=e,label:`Primary Account Email (Read-Only)`,disabled:``},null,8,[`modelValue`])])]),_:1}),u(`section`,x,[r[8]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),o(p,{props:M})]),u(`section`,S,[r[9]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),o(m,{events:N})])]))}});export{D as default};