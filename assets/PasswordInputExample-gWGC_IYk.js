import{M as e,O as t,U as n,c as r,d as i,g as a,h as o,m as s,mt as c,q as l,t as u,z as d}from"./i18n-CQHTY6ci.js";import{t as f}from"./PasswordInput-f6S68mgX.js";import{t as p}from"./CodeBlock-Cjmxf9F4.js";import{n as m,t as h}from"./PropsTable-Dv1x2aJC.js";import{t as g}from"./EventsTable-D-LMtD8H.js";var _={class:`space-y-8`},v={class:`text-xs text-slate-500`},y={class:`font-mono font-bold`},b={class:`text-xs text-slate-500 space-y-1`},x={class:`text-slate-400 dark:text-slate-500`},S={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},C={class:`space-y-4`},w={class:`space-y-4`},T=`<template>
  <PasswordInput
    v-model="password"
    label="Account Password"
    placeholder="Enter secret"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PasswordInput } from '@zyvnox/vue-pack/components'

const password = ref('')
<\/script>`,E=`<PasswordInput
  v-model="masterPassword"
  label="Create Master Key"
  :validate="{
    minLength: 8,
    maxLength: 32,
    requireUppercase: true,
    requireLowercase: true,
    requireNumber: true,
    requireSpecialChar: true,
  }"
/>`,D=`<PasswordInput
  v-model="newPassword"
  label="New Account Password"
  tooltip="Must include min 8 chars, uppercase, and symbols"
  tooltip-position="right"
/>`,O=`<PasswordInput
  v-model="confirmPassword"
  label="Confirm Password"
  required
  error="Passwords do not match"
/>
<PasswordInput
  v-model="appSecret"
  label="Stored App Secret"
  disabled
/>`,k=a({__name:`PasswordInputExample`,setup(a){let{isIndonesian:k,currentLocale:A}=u(),j=n(``),M=n(`weakpass`),N=n(``),P=n(`mismatched123`),F=n(`SuperSecretLockedKey`),I=[{name:`modelValue`,type:`string | number`,required:!0,description:`Reactive password string v-model`},{name:`label`,type:`string`,required:!0,description:`Field label title displayed above password input`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`placeholder`,type:`string`,description:`Placeholder hint text (defaults to i18n label)`},{name:`validate`,type:`{ minLength?: number, maxLength?: number, requireUppercase?: boolean, requireLowercase?: boolean, requireNumber?: boolean, requireSpecialChar?: boolean }`,description:`Client-side password complexity requirements. Automatically runs checks against all enabled policy rules with localized messages.`},{name:`required`,type:`boolean`,default:`false`,description:`Displays required asterisk indicator`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks password input and hides reveal toggle`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popover position`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for validation error notices`}],L=[{name:`update:modelValue`,type:`(value: string | number, id: string) => void`,description:`Emitted upon password typing with input ID`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when password violates complexity requirements`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when password meets all complexity rules`}];return(n,a)=>{let u=e(`DocHeader`);return t(),i(`div`,_,[o(u),o(m,{title:`Basic Password Input`,description:`Masked input with built-in show/hide eye toggle button.`},{code:d(()=>[o(p,{code:T,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:j.value,"onUpdate:modelValue":a[0]||=e=>j.value=e,label:l(k)?`Kata Sandi Akun`:`Account Password`,placeholder:l(k)?`Masukkan kata sandi rahasia`:`Enter secret password`,lang:l(A)},null,8,[`modelValue`,`label`,`placeholder`,`lang`]),r(`div`,v,[s(c(l(k)?`Panjang Karakter:`:`Bound Length:`)+` `,1),r(`code`,y,c(j.value.length)+` `+c(l(k)?`karakter`:`chars`),1)])]),_:1}),o(m,{title:`Real-Time Security Policy Validation`,description:`Enforces strict password rules: min 8 chars, uppercase, lowercase, numeric digit, and special symbol with instant localized alerts.`},{code:d(()=>[o(p,{code:E,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:M.value,"onUpdate:modelValue":a[1]||=e=>M.value=e,label:l(k)?`Buat Kunci Master`:`Create Master Key`,placeholder:l(k)?`Masukkan kata sandi kompleks`:`Enter complex password`,lang:l(A),validate:{minLength:8,maxLength:32,requireUppercase:!0,requireLowercase:!0,requireNumber:!0,requireSpecialChar:!0}},null,8,[`modelValue`,`label`,`placeholder`,`lang`]),r(`div`,b,[r(`div`,x,c(l(k)?`Wajib: >= 8 karakter, 1 huruf besar, 1 huruf kecil, 1 angka, dan 1 simbol khusus (!@#$%^&*).`:`Required: >= 8 chars, 1 uppercase, 1 lowercase, 1 number, and 1 special symbol (!@#$%^&*).`),1)])]),_:1}),o(m,{title:`With Password Requirements Tooltip`,description:`Explains complexity rules via schema tooltip.`},{code:d(()=>[o(p,{code:D,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:N.value,"onUpdate:modelValue":a[2]||=e=>N.value=e,label:l(k)?`Kata Sandi Akun Baru`:`New Account Password`,tooltip:l(k)?`Harus mencakup minimal 8 karakter, 1 huruf besar, dan 1 simbol khusus`:`Must include minimum 8 characters, 1 uppercase letter, and 1 special symbol`,"tooltip-position":`right`,placeholder:`••••••••••••`,lang:l(A)},null,8,[`modelValue`,`label`,`tooltip`,`lang`])]),_:1}),o(m,{title:`External Error & Disabled States`,description:`Visual invalid strength feedback and locked inputs.`},{code:d(()=>[o(p,{code:O,language:`vue`})]),default:d(()=>[r(`div`,S,[o(l(f),{modelValue:P.value,"onUpdate:modelValue":a[3]||=e=>P.value=e,label:l(k)?`Konfirmasi Kata Sandi`:`Confirm Password`,required:``,error:l(k)?`Kata sandi tidak cocok`:`Passwords do not match`,lang:l(A)},null,8,[`modelValue`,`label`,`error`,`lang`]),o(l(f),{modelValue:F.value,"onUpdate:modelValue":a[4]||=e=>F.value=e,label:l(k)?`Kunci Rahasia Tersimpan (Hanya-Baca)`:`Stored App Secret (Read-Only)`,disabled:``,lang:l(A)},null,8,[`modelValue`,`label`,`lang`])])]),_:1}),r(`section`,C,[o(h,{props:I})]),r(`section`,w,[o(g,{events:L})])])}}});export{k as default};