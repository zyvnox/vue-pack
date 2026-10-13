import{Et as e,St as t,Tt as n,c as r,ft as i,gt as a,ht as o,kt as s,lt as c,mt as l,vt as u}from"./index-BQNesRql.js";import{t as d}from"./CodeBlock-BDBDmQfe.js";import{n as f,t as p}from"./PropsTable-CIH-RclG.js";import{t as m}from"./EventsTable-6XlwCFJn.js";var h={class:`space-y-8`},g={class:`text-xs text-slate-500`},_={class:`font-mono font-bold`},v={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},y={class:`space-y-4`},b={class:`space-y-4`},x=`<template>
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
<\/script>`,S=`<PasswordInput
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
/>`,C=`<PasswordInput
  v-model="newPassword"
  label="New Account Password"
  tooltip="Must include min 8 chars, uppercase, and symbols"
  tooltip-position="right"
/>`,w=`<PasswordInput
  v-model="confirmPassword"
  label="Confirm Password"
  required
  error="Passwords do not match"
/>
<PasswordInput
  v-model="appSecret"
  label="Stored App Secret"
  disabled
/>`,T=a({__name:`PasswordInputExample`,setup(a){let T=n(``),E=n(`weakpass`),D=n(``),O=n(`mismatched123`),k=n(`SuperSecretLockedKey`),A=[{name:`modelValue`,type:`string | number`,required:!0,description:`Reactive password string v-model`},{name:`label`,type:`string`,required:!0,description:`Field label title displayed above password input`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`placeholder`,type:`string`,description:`Placeholder hint text (defaults to i18n label)`},{name:`validate`,type:`{ minLength?: number, maxLength?: number, requireUppercase?: boolean, requireLowercase?: boolean, requireNumber?: boolean, requireSpecialChar?: boolean }`,description:`Client-side password complexity requirements. Automatically runs checks against all enabled policy rules with localized messages.`},{name:`required`,type:`boolean`,default:`false`,description:`Displays required asterisk indicator`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks password input and hides reveal toggle`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popover position`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for validation error notices`}],j=[{name:`update:modelValue`,type:`(value: string | number, id: string) => void`,description:`Emitted upon password typing with input ID`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when password violates complexity requirements`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when password meets all complexity rules`}];return(n,a)=>(u(),i(`div`,h,[a[9]||=c(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[c(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` PasswordInput `),c(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Secure password field with visibility toggle button (show/hide), strict security policy validation (min/max length, uppercase, lowercase, numbers, special characters), and i18n support. `)],-1),o(f,{title:`Basic Password Input`,description:`Masked input with built-in show/hide eye toggle button.`},{code:t(()=>[o(d,{code:x,language:`vue`})]),default:t(()=>[o(e(r),{modelValue:T.value,"onUpdate:modelValue":a[0]||=e=>T.value=e,label:`Account Password`,placeholder:`Enter secret password`},null,8,[`modelValue`]),c(`div`,g,[a[5]||=l(` Bound Length: `,-1),c(`code`,_,s(T.value.length)+` chars`,1)])]),_:1}),o(f,{title:`Real-Time Security Policy Validation`,description:`Enforces strict password rules: min 8 chars, uppercase, lowercase, numeric digit, and special symbol with instant localized alerts.`},{code:t(()=>[o(d,{code:S,language:`vue`})]),default:t(()=>[o(e(r),{modelValue:E.value,"onUpdate:modelValue":a[1]||=e=>E.value=e,label:`Create Master Key`,placeholder:`Enter complex password`,validate:{minLength:8,maxLength:32,requireUppercase:!0,requireLowercase:!0,requireNumber:!0,requireSpecialChar:!0}},null,8,[`modelValue`]),a[6]||=c(`div`,{class:`text-xs text-slate-500 space-y-1`},[c(`div`,{class:`text-slate-400 dark:text-slate-500`},` Required: >= 8 chars, 1 uppercase, 1 lowercase, 1 number, and 1 special symbol (!@#\\$%^&*). `)],-1)]),_:1}),o(f,{title:`With Password Requirements Tooltip`,description:`Explains complexity rules via schema tooltip.`},{code:t(()=>[o(d,{code:C,language:`vue`})]),default:t(()=>[o(e(r),{modelValue:D.value,"onUpdate:modelValue":a[2]||=e=>D.value=e,label:`New Account Password`,tooltip:`Must include minimum 8 characters, 1 uppercase letter, and 1 special symbol`,"tooltip-position":`right`,placeholder:`••••••••••••`},null,8,[`modelValue`])]),_:1}),o(f,{title:`External Error & Disabled States`,description:`Visual invalid strength feedback and locked inputs.`},{code:t(()=>[o(d,{code:w,language:`vue`})]),default:t(()=>[c(`div`,v,[o(e(r),{modelValue:O.value,"onUpdate:modelValue":a[3]||=e=>O.value=e,label:`Confirm Password`,required:``,error:`Passwords do not match`},null,8,[`modelValue`]),o(e(r),{modelValue:k.value,"onUpdate:modelValue":a[4]||=e=>k.value=e,label:`Stored App Secret (Read-Only)`,disabled:``},null,8,[`modelValue`])])]),_:1}),c(`section`,y,[a[7]||=c(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),o(p,{props:A})]),c(`section`,b,[a[8]||=c(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),o(m,{events:j})])]))}});export{T as default};