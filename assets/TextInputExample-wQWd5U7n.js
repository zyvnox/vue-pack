import{M as e,O as t,U as n,c as r,d as i,g as a,h as o,m as s,mt as c,q as l,t as u,z as d}from"./i18n-CQHTY6ci.js";import{t as f}from"./TextInput-BwP8LIVq.js";import{t as p}from"./CodeBlock-Cjmxf9F4.js";import{n as m,t as h}from"./PropsTable-Dv1x2aJC.js";import{t as g}from"./EventsTable-D-LMtD8H.js";var _={class:`space-y-8`},v={class:`text-xs text-slate-500`},y={class:`font-mono font-bold`},b={class:`text-xs text-slate-500 space-y-1`},x={class:`font-mono font-bold`},S={class:`text-slate-400 dark:text-slate-500`},C={key:0},w={key:1},T={class:`text-xs text-slate-500`},E={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},D={class:`space-y-4`},O={class:`space-y-4`},k=`<template>
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
<\/script>`,A=`<TextInput
  v-model="username"
  label="Unique Username"
  placeholder="Enter 3-12 alphanumeric characters"
  :validate="{
    minLength: 3,
    maxLength: 12,
    pattern: '^[a-zA-Z0-9_]+$',
    duplicate: ['admin', 'root', 'superuser', 'owner'],
  }"
/>`,j=`<TextInput
  v-model="idNumber"
  label="National Identity / Passport ID"
  tooltip="Enter 16-digit ID number as printed on your card"
  tooltip-position="right"
  placeholder="320102..."
/>`,M=`<TextInput
  v-model="hostname"
  label="Server Hostname"
  required
  error="Host unreachable on specified port"
/>
<TextInput
  v-model="nodeUuid"
  label="System Node UUID"
  disabled
/>`,N=a({__name:`TextInputExample`,setup(a){let{isIndonesian:N,currentLocale:P}=u(),F=n(``),I=n(`admin`),L=n(``),R=n(`db-node-01`),z=n(`UUID-7718-4421-B`),B=[{name:`modelValue`,type:`string | number`,required:!0,description:`Reactive v-model binding value`},{name:`label`,type:`string`,required:!0,description:`Label title displayed above the input field`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID for input and label pairing`},{name:`placeholder`,type:`string`,description:`Placeholder hint text (falls back to i18n dictionary default)`},{name:`validate`,type:`{ minLength?: number, maxLength?: number, pattern?: string, duplicate?: (string | number)[] }`,description:`Client-side validation rules. Automatically checks min/max length, regex pattern, and duplicate list with localized error messages.`},{name:`required`,type:`boolean`,default:`false`,description:`Displays required asterisk indicator`},{name:`disabled`,type:`boolean`,default:`false`,description:`Disables user input interactions`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip text shown when hovering the help icon`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Preferred tooltip popover placement`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or glyph displayed for the tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for internal validation error messages`}],V=[{name:`update:modelValue`,type:`(value: string | number, id: string) => void`,description:`Emitted upon input text changes with field ID`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when a validation rule check fails with error messages array`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when all validation errors are resolved`}];return(n,a)=>{let u=e(`DocHeader`);return t(),i(`div`,_,[o(u),o(m,{title:`Basic Usage`,description:`Standard text input with reactive v-model binding.`},{code:d(()=>[o(p,{code:k,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:F.value,"onUpdate:modelValue":a[0]||=e=>F.value=e,label:l(N)?`Nama Lengkap`:`Full Name`,placeholder:l(N)?`cth. Sarah Connor`:`e.g. Sarah Connor`,lang:l(P)},null,8,[`modelValue`,`label`,`placeholder`,`lang`]),r(`div`,v,[s(c(l(N)?`Nilai Terikat:`:`Bound Value:`)+` `,1),r(`code`,y,c(F.value||(l(N)?`(kosong)`:`(empty)`)),1)])]),_:1}),o(m,{title:`Real-Time Validation (Pattern, Length & Duplicates)`,description:`Validates min/max length, regex pattern (alphanumeric only), and blacklisted duplicate values with localized error alerts.`},{code:d(()=>[o(p,{code:A,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:I.value,"onUpdate:modelValue":a[1]||=e=>I.value=e,label:l(N)?`Nama Pengguna Unik`:`Unique Username`,placeholder:l(N)?`Masukkan 3-12 karakter alfanumerik`:`Enter 3-12 alphanumeric characters`,lang:l(P),validate:{minLength:3,maxLength:12,pattern:`^[a-zA-Z0-9_]+$`,duplicate:[`admin`,`root`,`superuser`,`owner`]}},null,8,[`modelValue`,`label`,`placeholder`,`lang`]),r(`div`,b,[r(`div`,null,[s(c(l(N)?`Nilai:`:`Value:`)+` `,1),r(`code`,x,c(I.value||(l(N)?`(kosong)`:`(empty)`)),1)]),r(`div`,S,[l(N)?(t(),i(`span`,C,[...a[5]||=[s(` Aturan: Min 3, Maks 12 karakter, regex `,-1),r(`code`,{class:`font-mono`},`^[a-zA-Z0-9_]+$`,-1),s(`, dilarang: `,-1),r(`code`,{class:`font-mono`},`['admin', 'root', 'superuser', 'owner']`,-1),s(`. `,-1)]])):(t(),i(`span`,w,[...a[6]||=[s(` Rules: Min 3, Max 12 chars, regex `,-1),r(`code`,{class:`font-mono`},`^[a-zA-Z0-9_]+$`,-1),s(`, forbidden: `,-1),r(`code`,{class:`font-mono`},`['admin', 'root', 'superuser', 'owner']`,-1),s(`. `,-1)]]))])])]),_:1}),o(m,{title:`Custom Schema Tooltip`,description:`Displays a help icon with interactive tooltip text beside the label.`},{code:d(()=>[o(p,{code:j,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:L.value,"onUpdate:modelValue":a[2]||=e=>L.value=e,label:l(N)?`Nomor KTP / Paspor`:`National Identity / Passport ID`,tooltip:l(N)?`Masukkan 16 digit NIK sesuai e-KTP`:`Enter 16-digit ID number as printed on your national identity card`,"tooltip-position":`right`,placeholder:`320102...`,lang:l(P)},null,8,[`modelValue`,`label`,`tooltip`,`lang`]),r(`div`,T,c(l(N)?`Arahkan kursor ke ikon ❓ di atas untuk melihat tooltip.`:`Hover over the ❓ icon above to reveal the tooltip.`),1)]),_:1}),o(m,{title:`Manual Error & Disabled States`,description:`Supports parent schema error strings and disabled states.`},{code:d(()=>[o(p,{code:M,language:`vue`})]),default:d(()=>[r(`div`,E,[o(l(f),{modelValue:R.value,"onUpdate:modelValue":a[3]||=e=>R.value=e,label:l(N)?`Nama Host Server`:`Server Hostname`,placeholder:`primary.node.local`,required:``,error:l(N)?`Host tidak dapat dijangkau pada port yang ditentukan`:`Host unreachable on specified port`,lang:l(P)},null,8,[`modelValue`,`label`,`error`,`lang`]),o(l(f),{modelValue:z.value,"onUpdate:modelValue":a[4]||=e=>z.value=e,label:l(N)?`UUID Node Sistem (Hanya-Baca)`:`System Node UUID (Read-Only)`,disabled:``,lang:l(P)},null,8,[`modelValue`,`label`,`lang`])])]),_:1}),r(`section`,D,[o(h,{props:B})]),r(`section`,O,[o(g,{events:V})])])}}});export{N as default};