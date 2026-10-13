import{At as e,Mt as t,Ot as n,T as r,Tt as i,_t as a,bt as o,gt as s,kt as c,pt as l,ut as u}from"./index-Dtl-Gxe1.js";import{t as d}from"./CodeBlock-B1_NttD9.js";import{n as f,t as p}from"./PropsTable-B0Jg45bu.js";import{t as m}from"./EventsTable-CCaWn8Vs.js";var h={class:`space-y-8`},g={class:`flex items-center justify-between max-w-md`},_={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},v={class:`space-y-4`},y={class:`space-y-4`},b=`<template>
  <ToggleInput
    v-model="enabled"
    label="Enable Push Notifications"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ToggleInput } from '@zyvnox/vue-pack/components'

const enabled = ref(true)
<\/script>`,x=`<ToggleInput
  v-model="twoFactor"
  label="Strict Two-Factor Authentication (2FA)"
  tooltip="Requires hardware security key or TOTP app"
  tooltip-position="right"
/>`,S=`<ToggleInput
  v-model="sslMandatory"
  label="Mandatory SSL Enforcement"
  disabled
/>`,C=a({__name:`ToggleInputExample`,setup(a){let C=n(!0),w=n(!1),T=n(!0),E=n(!1),D=[{name:`modelValue`,type:`boolean`,required:!0,description:`Reactive boolean v-model`},{name:`label`,type:`string`,required:!0,description:`Label text beside switch`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`disabled`,type:`boolean`,default:`false`,description:`Disables user interactions and locks switch`},{name:`tooltip`,type:`string`,description:`Custom tooltip text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code`}],O=[{name:`update:modelValue`,type:`(value: boolean, id: string) => void`,description:`Emitted upon toggle switch click`}];return(n,a)=>(o(),l(`div`,h,[a[6]||=u(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[u(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` ToggleInput (Switch) `),u(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Accessible boolean switch toggle component with smooth sliding animation, tooltip support, i18n support, and disabled state styling. `)],-1),s(f,{title:`Basic Boolean Switch`,description:`Toggles a true/false boolean state.`},{code:i(()=>[s(d,{code:b,language:`vue`})]),default:i(()=>[u(`div`,g,[s(c(r),{modelValue:C.value,"onUpdate:modelValue":a[0]||=e=>C.value=e,label:`Enable Push Notifications`},null,8,[`modelValue`]),u(`span`,{class:e([`text-xs font-mono`,C.value?`text-emerald-500`:`text-slate-400`])},t(C.value?`ACTIVE`:`DISABLED`),3)])]),_:1}),s(f,{title:`With Schema Tooltip`,description:`Explains feature implications beside the toggle switch.`},{code:i(()=>[s(d,{code:x,language:`vue`})]),default:i(()=>[s(c(r),{modelValue:w.value,"onUpdate:modelValue":a[1]||=e=>w.value=e,label:`Strict Two-Factor Authentication (2FA)`,tooltip:`Requires hardware security key or TOTP app on every new browser session`,"tooltip-position":`right`},null,8,[`modelValue`])]),_:1}),s(f,{title:`Disabled Toggle States`,description:`Locked on or off switch states.`},{code:i(()=>[s(d,{code:S,language:`vue`})]),default:i(()=>[u(`div`,_,[s(c(r),{modelValue:T.value,"onUpdate:modelValue":a[2]||=e=>T.value=e,label:`Mandatory SSL Enforcement`,disabled:``},null,8,[`modelValue`]),s(c(r),{modelValue:E.value,"onUpdate:modelValue":a[3]||=e=>E.value=e,label:`Beta Feature Flag (Locked)`,disabled:``},null,8,[`modelValue`])])]),_:1}),u(`section`,v,[a[4]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),s(p,{props:D})]),u(`section`,y,[a[5]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),s(m,{events:O})])]))}});export{C as default};