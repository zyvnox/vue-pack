import{Et as e,St as t,Tt as n,f as r,ft as i,gt as a,ht as o,kt as s,lt as c,mt as l,vt as u}from"./index-BQNesRql.js";import{t as d}from"./CodeBlock-BDBDmQfe.js";import{n as f,t as p}from"./PropsTable-CIH-RclG.js";import{t as m}from"./EventsTable-6XlwCFJn.js";var h={class:`space-y-8`},g={class:`text-xs text-slate-500`},_={class:`font-mono font-bold`},v={class:`text-xs text-slate-500 space-y-1`},y={class:`font-mono font-bold`},b={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},x={class:`space-y-4`},S={class:`space-y-4`},C=`<template>
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
/>`,D=a({__name:`EmailInputExample`,setup(a){let D=n(``),O=n(`admin@company.com`),k=n(``),A=n(`invalid-user@offline-host`),j=n(`admin@enterprise.org`),M=[{name:`modelValue`,type:`string | number`,required:!0,description:`Reactive email string v-model`},{name:`label`,type:`string`,required:!0,description:`Field label title displayed above the input`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`placeholder`,type:`string`,description:`Placeholder hint text (defaults to i18n label)`},{name:`validate`,type:`{ duplicate?: (string | number)[] }`,description:`Blacklist of forbidden or already registered emails. Also automatically enforces standard email regex validation.`},{name:`required`,type:`boolean`,default:`false`,description:`Displays required asterisk indicator`},{name:`disabled`,type:`boolean`,default:`false`,description:`Disabled input state`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for validation error notices`}],N=[{name:`update:modelValue`,type:`(value: string | number, id: string) => void`,description:`Emitted upon typing`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when email format is invalid or duplicate is detected`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when email is valid`}];return(n,a)=>(u(),i(`div`,h,[a[10]||=c(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[c(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` EmailInput `),c(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Email address input component with automatic RFC-compliant regex validation, duplicate checks, custom tooltip guidance, and i18n support. `)],-1),o(f,{title:`Basic Email Input`,description:`Email field with standard email keyboard hints and reactive binding.`},{code:t(()=>[o(d,{code:C,language:`vue`})]),default:t(()=>[o(e(r),{modelValue:D.value,"onUpdate:modelValue":a[0]||=e=>D.value=e,label:`Work Email`,placeholder:`alex@company.com`},null,8,[`modelValue`]),c(`div`,g,[a[5]||=l(` Bound Value: `,-1),c(`code`,_,s(D.value||`(empty)`),1)])]),_:1}),o(f,{title:`Real-Time Validation (Format & Duplicate Check)`,description:`Validates RFC email syntax and prevents registering existing emails (e.g. admin@company.com, support@company.com).`},{code:t(()=>[o(d,{code:w,language:`vue`})]),default:t(()=>[o(e(r),{modelValue:O.value,"onUpdate:modelValue":a[1]||=e=>O.value=e,label:`Registered Account Email`,placeholder:`user@domain.com`,validate:{duplicate:[`admin@company.com`,`support@company.com`,`billing@company.com`]}},null,8,[`modelValue`]),c(`div`,v,[c(`div`,null,[a[6]||=l(`Current Email: `,-1),c(`code`,y,s(O.value||`(empty)`),1)]),a[7]||=c(`div`,{class:`text-slate-400 dark:text-slate-500`},[l(` Reserved/Taken list: `),c(`code`,{class:`font-mono`},`['admin@company.com', 'support@company.com', 'billing@company.com']`),l(`. `)],-1)])]),_:1}),o(f,{title:`With Custom Schema Tooltip`,description:`Clear instruction tooltip displayed beside the email label.`},{code:t(()=>[o(d,{code:T,language:`vue`})]),default:t(()=>[o(e(r),{modelValue:k.value,"onUpdate:modelValue":a[2]||=e=>k.value=e,label:`Recovery Email`,tooltip:`Used solely for password resets and critical security notices`,"tooltip-position":`right`,placeholder:`recovery@personal.net`},null,8,[`modelValue`])]),_:1}),o(f,{title:`External Error & Disabled States`,description:`Visual invalid format feedback and read-only email view.`},{code:t(()=>[o(d,{code:E,language:`vue`})]),default:t(()=>[c(`div`,b,[o(e(r),{modelValue:A.value,"onUpdate:modelValue":a[3]||=e=>A.value=e,label:`Billing Contact`,required:``,error:`Mail exchanger unreachable for specified domain`},null,8,[`modelValue`]),o(e(r),{modelValue:j.value,"onUpdate:modelValue":a[4]||=e=>j.value=e,label:`Primary Account Email (Read-Only)`,disabled:``},null,8,[`modelValue`])])]),_:1}),c(`section`,x,[a[8]||=c(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),o(p,{props:M})]),c(`section`,S,[a[9]||=c(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),o(m,{events:N})])]))}});export{D as default};