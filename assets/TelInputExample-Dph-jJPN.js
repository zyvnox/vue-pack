import{Et as e,O as t,St as n,Tt as r,ft as i,gt as a,ht as o,kt as s,lt as c,mt as l,vt as u}from"./index-jB9TdKXO.js";import{t as d}from"./CodeBlock-BYwXs7eI.js";import{n as f,t as p}from"./PropsTable-Cmdmv644.js";import{t as m}from"./EventsTable-CbC4IuxC.js";var h={class:`space-y-8`},g={class:`text-xs text-slate-500`},_={class:`font-mono font-bold`},v={class:`text-xs text-slate-500 space-y-1`},y={class:`font-mono font-bold`},b={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},x={class:`space-y-4`},S={class:`space-y-4`},C=`<template>
  <TelInput
    v-model="phone"
    label="Primary Mobile Phone"
    placeholder="0812-3456-7890"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TelInput } from '@zyvnox/vue-pack/components'

const phone = ref('0812-3456-7890')
<\/script>`,w=`<TelInput
  v-model="phone"
  label="Emergency Contact WhatsApp"
  placeholder="+62 812-3456-7890"
/>`,T=`<TelInput
  v-model="hotline"
  label="Corporate Switchboard Hotline"
  tooltip="Include country dialing prefix code"
  tooltip-position="right"
/>`,E=`<TelInput
  v-model="extension"
  label="Direct Line Extension"
  error="Area code must match regional office"
/>
<TelInput
  v-model="supportLine"
  label="Toll-Free Support Line"
  disabled
/>`,D=a({__name:`TelInputExample`,setup(a){let D=r(`0812-3456-7890`),O=r(`123`),k=r(`+62 21 555-0199`),A=r(`+1 800 555-0100`),j=r(`0800-1-SUPPORT`),M=[{name:`modelValue`,type:`string`,required:!0,description:`Reactive telephone string v-model`},{name:`label`,type:`string`,required:!0,description:`Input label title`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`placeholder`,type:`string`,default:`'0812-3456-7890'`,description:`Placeholder hint text`},{name:`validate`,type:`Record<string, any>`,description:`Client-side validation rules (regex format checking)`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks phone input`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup position`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code`}],N=[{name:`update:modelValue`,type:`(value: string, id: string) => void`,description:`Emitted upon phone number typing`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when phone number format violates regex`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when phone number format is valid`}];return(r,a)=>(u(),i(`div`,h,[a[10]||=c(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[c(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` TelInput `),c(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Telephone / mobile phone number input component with telephone regex formatting (+62 / 08xx), custom tooltips, and validation feedback. `)],-1),o(f,{title:`Basic Telephone Input`,description:`Phone number input with mobile dialpad assistance.`},{code:n(()=>[o(d,{code:C,language:`vue`})]),default:n(()=>[o(e(t),{modelValue:D.value,"onUpdate:modelValue":a[0]||=e=>D.value=e,label:`Primary Mobile Phone`,placeholder:`0812-3456-7890`},null,8,[`modelValue`]),c(`div`,g,[a[5]||=l(` Bound Value: `,-1),c(`code`,_,s(D.value||`(empty)`),1)])]),_:1}),o(f,{title:`Real-Time Telephone Validation`,description:`Validates international / domestic phone format (digits, plus prefix, hyphens, min 7 - max 20 chars).`},{code:n(()=>[o(d,{code:w,language:`vue`})]),default:n(()=>[o(e(t),{modelValue:O.value,"onUpdate:modelValue":a[1]||=e=>O.value=e,label:`Emergency Contact WhatsApp`,placeholder:`+62 812-3456-7890`},null,8,[`modelValue`]),c(`div`,v,[c(`div`,null,[a[6]||=l(`Current Value: `,-1),c(`code`,y,s(O.value||`(empty)`),1)]),a[7]||=c(`div`,{class:`text-slate-400 dark:text-slate-500`},` Enforces standard telecom numbering schema: [0-9+\\-\\s()]{7,20}. `,-1)])]),_:1}),o(f,{title:`With Schema Tooltip`,description:`Displays country code calling guidance via tooltip.`},{code:n(()=>[o(d,{code:T,language:`vue`})]),default:n(()=>[o(e(t),{modelValue:k.value,"onUpdate:modelValue":a[2]||=e=>k.value=e,label:`Corporate Switchboard Hotline`,tooltip:`Include country dialing prefix code (e.g. +62 for Indonesia)`,"tooltip-position":`right`,placeholder:`+62 21 555-0199`},null,8,[`modelValue`])]),_:1}),o(f,{title:`External Error & Disabled States`,description:`Visual invalid carrier alerts and read-only telephone views.`},{code:n(()=>[o(d,{code:E,language:`vue`})]),default:n(()=>[c(`div`,b,[o(e(t),{modelValue:A.value,"onUpdate:modelValue":a[3]||=e=>A.value=e,label:`Direct Line Extension`,error:`Area code must match regional office registration`},null,8,[`modelValue`]),o(e(t),{modelValue:j.value,"onUpdate:modelValue":a[4]||=e=>j.value=e,label:`Toll-Free Support Line (Read-Only)`,disabled:``},null,8,[`modelValue`])])]),_:1}),c(`section`,x,[a[8]||=c(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),o(p,{props:M})]),c(`section`,S,[a[9]||=c(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),o(m,{events:N})])]))}});export{D as default};