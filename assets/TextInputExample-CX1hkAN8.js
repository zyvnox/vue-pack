import{M as e,Mt as t,Ot as n,Tt as r,_t as i,bt as a,gt as o,ht as s,kt as c,pt as l,ut as u}from"./index-EUDlBqHA.js";import{t as d}from"./CodeBlock-DWWJlQgm.js";import{n as f,t as p}from"./PropsTable-C27FNX9a.js";import{t as m}from"./EventsTable-Bt6E4k0S.js";var h={class:`space-y-8`},g={class:`text-xs text-slate-500`},_={class:`font-mono font-bold`},v={class:`text-xs text-slate-500 space-y-1`},y={class:`font-mono font-bold`},b={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},x={class:`space-y-4`},S={class:`space-y-4`},C=`<template>
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
/>`,D=i({__name:`TextInputExample`,setup(i){let D=n(``),O=n(`admin`),k=n(``),A=n(`db-node-01`),j=n(`UUID-7718-4421-B`),M=[{name:`modelValue`,type:`string | number`,required:!0,description:`Reactive v-model binding value`},{name:`label`,type:`string`,required:!0,description:`Label title displayed above the input field`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID for input and label pairing`},{name:`placeholder`,type:`string`,description:`Placeholder hint text (falls back to i18n dictionary default)`},{name:`validate`,type:`{ minLength?: number, maxLength?: number, pattern?: string, duplicate?: (string | number)[] }`,description:`Client-side validation rules. Automatically checks min/max length, regex pattern, and duplicate list with localized error messages.`},{name:`required`,type:`boolean`,default:`false`,description:`Displays required asterisk indicator`},{name:`disabled`,type:`boolean`,default:`false`,description:`Disables user input interactions`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip text shown when hovering the help icon`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Preferred tooltip popover placement`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or glyph displayed for the tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for internal validation error messages`}],N=[{name:`update:modelValue`,type:`(value: string | number, id: string) => void`,description:`Emitted upon input text changes with field ID`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when a validation rule check fails with error messages array`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when all validation errors are resolved`}];return(n,i)=>(a(),l(`div`,h,[i[11]||=u(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[u(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` TextInput `),u(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Single-line text input component with custom tooltip support, dark-mode UnoCSS prefix styling, client-side duplicate & regex validation, and i18n support. `)],-1),o(f,{title:`Basic Usage`,description:`Standard text input with reactive v-model binding.`},{code:r(()=>[o(d,{code:C,language:`vue`})]),default:r(()=>[o(c(e),{modelValue:D.value,"onUpdate:modelValue":i[0]||=e=>D.value=e,label:`Full Name`,placeholder:`e.g. Sarah Connor`},null,8,[`modelValue`]),u(`div`,g,[i[5]||=s(` Bound Value: `,-1),u(`code`,_,t(D.value||`(empty)`),1)])]),_:1}),o(f,{title:`Real-Time Validation (Pattern, Length & Duplicates)`,description:`Validates min/max length, regex pattern (alphanumeric only), and blacklisted duplicate values with localized error alerts.`},{code:r(()=>[o(d,{code:w,language:`vue`})]),default:r(()=>[o(c(e),{modelValue:O.value,"onUpdate:modelValue":i[1]||=e=>O.value=e,label:`Unique Username`,placeholder:`Enter 3-12 alphanumeric characters`,validate:{minLength:3,maxLength:12,pattern:`^[a-zA-Z0-9_]+$`,duplicate:[`admin`,`root`,`superuser`,`owner`]}},null,8,[`modelValue`]),u(`div`,v,[u(`div`,null,[i[6]||=s(`Value: `,-1),u(`code`,y,t(O.value||`(empty)`),1)]),i[7]||=u(`div`,{class:`text-slate-400 dark:text-slate-500`},[s(` Rules: Min 3, Max 12 chars, regex `),u(`code`,{class:`font-mono`},`^[a-zA-Z0-9_]+$`),s(`, forbidden: `),u(`code`,{class:`font-mono`},`['admin', 'root', 'superuser', 'owner']`),s(`. `)],-1)])]),_:1}),o(f,{title:`Custom Schema Tooltip`,description:`Displays a help icon with interactive tooltip text beside the label.`},{code:r(()=>[o(d,{code:T,language:`vue`})]),default:r(()=>[o(c(e),{modelValue:k.value,"onUpdate:modelValue":i[2]||=e=>k.value=e,label:`National Identity / Passport ID`,tooltip:`Enter 16-digit ID number as printed on your national identity card`,"tooltip-position":`right`,placeholder:`320102...`},null,8,[`modelValue`]),i[8]||=u(`div`,{class:`text-xs text-slate-500`},[s(` Hover over the `),u(`span`,{class:`font-semibold`},`❓`),s(` icon above to reveal the tooltip. `)],-1)]),_:1}),o(f,{title:`Manual Error & Disabled States`,description:`Supports parent schema error strings and disabled states.`},{code:r(()=>[o(d,{code:E,language:`vue`})]),default:r(()=>[u(`div`,b,[o(c(e),{modelValue:A.value,"onUpdate:modelValue":i[3]||=e=>A.value=e,label:`Server Hostname`,placeholder:`primary.node.local`,required:``,error:`Host unreachable on specified port`},null,8,[`modelValue`]),o(c(e),{modelValue:j.value,"onUpdate:modelValue":i[4]||=e=>j.value=e,label:`System Node UUID (Read-Only)`,disabled:``},null,8,[`modelValue`])])]),_:1}),u(`section`,x,[i[9]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),o(p,{props:M})]),u(`section`,S,[i[10]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),o(m,{events:N})])]))}});export{D as default};