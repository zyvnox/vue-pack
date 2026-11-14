import{M as e,O as t,U as n,c as r,d as i,g as a,h as o,m as s,mt as c,q as l,t as u,z as d}from"./i18n-CQHTY6ci.js";import{t as f}from"./EmailInput-BbJNFtRC.js";import{t as p}from"./CodeBlock-Cjmxf9F4.js";import{n as m,t as h}from"./PropsTable-Dv1x2aJC.js";import{t as g}from"./EventsTable-D-LMtD8H.js";var _={class:`space-y-8`},v={class:`text-xs text-slate-500`},y={class:`font-mono font-bold`},b={class:`text-xs text-slate-500 space-y-1`},x={class:`font-mono font-bold`},S={class:`text-slate-400 dark:text-slate-500`},C={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},w={class:`space-y-4`},T={class:`space-y-4`},E=`<template>
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
<\/script>`,D=`<EmailInput
  v-model="accountEmail"
  label="Registered Account Email"
  :validate="{
    duplicate: ['admin@company.com', 'support@company.com', 'billing@company.com'],
  }"
/>`,O=`<EmailInput
  v-model="recoveryEmail"
  label="Recovery Email"
  tooltip="Used solely for password resets"
  tooltip-position="right"
/>`,k=`<EmailInput
  v-model="billingEmail"
  label="Billing Contact"
  required
  error="Mail exchanger unreachable for domain"
/>
<EmailInput
  v-model="accountEmail"
  label="Primary Account Email"
  disabled
/>`,A=a({__name:`EmailInputExample`,setup(a){let{isIndonesian:A,currentLocale:j}=u(),M=n(``),N=n(`admin@company.com`),P=n(``),F=n(`invalid-user@offline-host`),I=n(`admin@enterprise.org`),L=[{name:`modelValue`,type:`string | number`,required:!0,description:`Reactive email string v-model`},{name:`label`,type:`string`,required:!0,description:`Field label title displayed above the input`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`placeholder`,type:`string`,description:`Placeholder hint text (defaults to i18n label)`},{name:`validate`,type:`{ duplicate?: (string | number)[] }`,description:`Blacklist of forbidden or already registered emails. Also automatically enforces standard email regex validation.`},{name:`required`,type:`boolean`,default:`false`,description:`Displays required asterisk indicator`},{name:`disabled`,type:`boolean`,default:`false`,description:`Disabled input state`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for validation error notices`}],R=[{name:`update:modelValue`,type:`(value: string | number, id: string) => void`,description:`Emitted upon typing`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when email format is invalid or duplicate is detected`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when email is valid`}];return(n,a)=>{let u=e(`DocHeader`);return t(),i(`div`,_,[o(u),o(m,{title:`Basic Email Input`,description:`Email field with standard email keyboard hints and reactive binding.`},{code:d(()=>[o(p,{code:E,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:M.value,"onUpdate:modelValue":a[0]||=e=>M.value=e,label:l(A)?`Email Kerja`:`Work Email`,placeholder:`alex@company.com`,lang:l(j)},null,8,[`modelValue`,`label`,`lang`]),r(`div`,v,[s(c(l(A)?`Nilai Terikat:`:`Bound Value:`)+` `,1),r(`code`,y,c(M.value||(l(A)?`(kosong)`:`(empty)`)),1)])]),_:1}),o(m,{title:`Real-Time Validation (Format & Duplicate Check)`,description:`Validates RFC email syntax and prevents registering existing emails (e.g. admin@company.com, support@company.com).`},{code:d(()=>[o(p,{code:D,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:N.value,"onUpdate:modelValue":a[1]||=e=>N.value=e,label:l(A)?`Email Akun Terdaftar`:`Registered Account Email`,placeholder:`user@domain.com`,lang:l(j),validate:{duplicate:[`admin@company.com`,`support@company.com`,`billing@company.com`]}},null,8,[`modelValue`,`label`,`lang`]),r(`div`,b,[r(`div`,null,[s(c(l(A)?`Email Saat Ini:`:`Current Email:`)+` `,1),r(`code`,x,c(N.value||(l(A)?`(kosong)`:`(empty)`)),1)]),r(`div`,S,[s(c(l(A)?`Daftar email terpakai/dicadangkan:`:`Reserved/Taken list:`)+` `,1),a[5]||=r(`code`,{class:`font-mono`},`['admin@company.com', 'support@company.com', 'billing@company.com']`,-1),a[6]||=s(`. `,-1)])])]),_:1}),o(m,{title:`With Custom Schema Tooltip`,description:`Clear instruction tooltip displayed beside the email label.`},{code:d(()=>[o(p,{code:O,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:P.value,"onUpdate:modelValue":a[2]||=e=>P.value=e,label:l(A)?`Email Pemulihan`:`Recovery Email`,tooltip:l(A)?`Hanya digunakan untuk reset kata sandi dan notifikasi keamanan penting`:`Used solely for password resets and critical security notices`,"tooltip-position":`right`,placeholder:`recovery@personal.net`,lang:l(j)},null,8,[`modelValue`,`label`,`tooltip`,`lang`])]),_:1}),o(m,{title:`External Error & Disabled States`,description:`Visual invalid format feedback and read-only email view.`},{code:d(()=>[o(p,{code:k,language:`vue`})]),default:d(()=>[r(`div`,C,[o(l(f),{modelValue:F.value,"onUpdate:modelValue":a[3]||=e=>F.value=e,label:l(A)?`Kontak Penagihan`:`Billing Contact`,required:``,error:l(A)?`Mail exchanger tidak dapat dihubungi untuk domain yang ditentukan`:`Mail exchanger unreachable for specified domain`,lang:l(j)},null,8,[`modelValue`,`label`,`error`,`lang`]),o(l(f),{modelValue:I.value,"onUpdate:modelValue":a[4]||=e=>I.value=e,label:l(A)?`Email Akun Utama (Hanya-Baca)`:`Primary Account Email (Read-Only)`,disabled:``,lang:l(j)},null,8,[`modelValue`,`label`,`lang`])])]),_:1}),r(`section`,w,[o(h,{props:L})]),r(`section`,T,[o(g,{events:R})])])}}});export{A as default};