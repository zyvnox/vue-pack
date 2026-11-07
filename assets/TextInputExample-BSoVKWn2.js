import{Mt as e,Ot as t,Tt as n,_t as r,bt as i,gt as a,ht as o,i as s,kt as c,pt as l,ut as u}from"./index-CrXSRddH.js";import{t as d}from"./CodeBlock-BTTdjRwt.js";import{n as f,t as p}from"./PropsTable-eGS096RT.js";import{t as m}from"./EventsTable-DNC5r9Wy.js";var h={class:`space-y-8`},g={class:`text-xs text-slate-500`},_={class:`font-mono font-bold`},v={class:`text-xs text-slate-500 space-y-1`},y={class:`font-mono font-bold`},b={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},x={class:`space-y-4`},S={class:`space-y-4`},C=`<template>
  <TextInput
    v-model="name"
    label="Full Name"
    placeholder="e.g. Sarah Connor"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TextInput } from '@zyvnox/vue-pack/components'

const name = ref('')
<\/script>`,w=`<TextInput
  v-model="username"
  label="Unique Username"
  placeholder="Enter 3-12 alphanumeric characters"
  :validate="{
    minLength: 3,
    maxLength: 12,
    pattern: '^[a-zA-Z0-9_]+$',
    duplicate: ['admin', 'root', 'superuser', 'owner'],
  }"
/>`,T=`<TextInput
  v-model="idNumber"
  label="National Identity / Passport ID"
  tooltip="Enter 16-digit ID number as printed on your card"
  tooltip-position="right"
  placeholder="320102..."
/>`,E=`<TextInput
  v-model="hostname"
  label="Server Hostname"
  required
  error="Host unreachable on specified port"
/>
<TextInput
  v-model="nodeUuid"
  label="System Node UUID"
  disabled
/>`,D=r({__name:`TextInputExample`,setup(r){let D=t(``),O=t(`admin`),k=t(``),A=t(`db-node-01`),j=t(`UUID-7718-4421-B`),M=[{name:`modelValue`,type:`string | number`,required:!0,description:`Reactive v-model binding value`},{name:`label`,type:`string`,required:!0,description:`Label title displayed above the input field`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID for input and label pairing`},{name:`placeholder`,type:`string`,description:`Placeholder hint text (falls back to i18n dictionary default)`},{name:`validate`,type:`{ minLength?: number, maxLength?: number, pattern?: string, duplicate?: (string | number)[] }`,description:`Client-side validation rules. Automatically checks min/max length, regex pattern, and duplicate list with localized error messages.`},{name:`required`,type:`boolean`,default:`false`,description:`Displays required asterisk indicator`},{name:`disabled`,type:`boolean`,default:`false`,description:`Disables user input interactions`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip text shown when hovering the help icon`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Preferred tooltip popover placement`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or glyph displayed for the tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for internal validation error messages`}],N=[{name:`update:modelValue`,type:`(value: string | number, id: string) => void`,description:`Emitted upon input text changes with field ID`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when a validation rule check fails with error messages array`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when all validation errors are resolved`}];return(t,r)=>(i(),l(`div`,h,[r[11]||=u(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[u(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` TextInput `),u(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Single-line text input component with custom tooltip support, dark-mode UnoCSS prefix styling, client-side duplicate & regex validation, and i18n support. `)],-1),a(f,{title:`Basic Usage`,description:`Standard text input with reactive v-model binding.`},{code:n(()=>[a(d,{code:C,language:`vue`})]),default:n(()=>[a(c(s),{modelValue:D.value,"onUpdate:modelValue":r[0]||=e=>D.value=e,label:`Full Name`,placeholder:`e.g. Sarah Connor`},null,8,[`modelValue`]),u(`div`,g,[r[5]||=o(` Bound Value: `,-1),u(`code`,_,e(D.value||`(empty)`),1)])]),_:1}),a(f,{title:`Real-Time Validation (Pattern, Length & Duplicates)`,description:`Validates min/max length, regex pattern (alphanumeric only), and blacklisted duplicate values with localized error alerts.`},{code:n(()=>[a(d,{code:w,language:`vue`})]),default:n(()=>[a(c(s),{modelValue:O.value,"onUpdate:modelValue":r[1]||=e=>O.value=e,label:`Unique Username`,placeholder:`Enter 3-12 alphanumeric characters`,validate:{minLength:3,maxLength:12,pattern:`^[a-zA-Z0-9_]+$`,duplicate:[`admin`,`root`,`superuser`,`owner`]}},null,8,[`modelValue`]),u(`div`,v,[u(`div`,null,[r[6]||=o(`Value: `,-1),u(`code`,y,e(O.value||`(empty)`),1)]),r[7]||=u(`div`,{class:`text-slate-400 dark:text-slate-500`},[o(` Rules: Min 3, Max 12 chars, regex `),u(`code`,{class:`font-mono`},`^[a-zA-Z0-9_]+$`),o(`, forbidden: `),u(`code`,{class:`font-mono`},`['admin', 'root', 'superuser', 'owner']`),o(`. `)],-1)])]),_:1}),a(f,{title:`Custom Schema Tooltip`,description:`Displays a help icon with interactive tooltip text beside the label.`},{code:n(()=>[a(d,{code:T,language:`vue`})]),default:n(()=>[a(c(s),{modelValue:k.value,"onUpdate:modelValue":r[2]||=e=>k.value=e,label:`National Identity / Passport ID`,tooltip:`Enter 16-digit ID number as printed on your national identity card`,"tooltip-position":`right`,placeholder:`320102...`},null,8,[`modelValue`]),r[8]||=u(`div`,{class:`text-xs text-slate-500`},[o(` Hover over the `),u(`span`,{class:`font-semibold`},`❓`),o(` icon above to reveal the tooltip. `)],-1)]),_:1}),a(f,{title:`Manual Error & Disabled States`,description:`Supports parent schema error strings and disabled states.`},{code:n(()=>[a(d,{code:E,language:`vue`})]),default:n(()=>[u(`div`,b,[a(c(s),{modelValue:A.value,"onUpdate:modelValue":r[3]||=e=>A.value=e,label:`Server Hostname`,placeholder:`primary.node.local`,required:``,error:`Host unreachable on specified port`},null,8,[`modelValue`]),a(c(s),{modelValue:j.value,"onUpdate:modelValue":r[4]||=e=>j.value=e,label:`System Node UUID (Read-Only)`,disabled:``},null,8,[`modelValue`])])]),_:1}),u(`section`,x,[r[9]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),a(p,{props:M})]),u(`section`,S,[r[10]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),a(m,{events:N})])]))}});export{D as default};