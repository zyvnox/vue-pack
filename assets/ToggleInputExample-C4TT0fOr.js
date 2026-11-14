import{M as e,O as t,U as n,c as r,d as i,ft as a,g as o,h as s,mt as c,q as l,t as u,z as d}from"./i18n-CQHTY6ci.js";import{t as f}from"./ToggleInput-DbK8hzsK.js";import{t as p}from"./CodeBlock-Cjmxf9F4.js";import{n as m,t as h}from"./PropsTable-Dv1x2aJC.js";import{t as g}from"./EventsTable-D-LMtD8H.js";var _={class:`space-y-8`},v={class:`flex items-center justify-between max-w-md`},y={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},b={class:`space-y-4`},x={class:`space-y-4`},S=`<template>
  <ToggleInput
    v-model="enabled"
    label="Enable Push Notifications"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ToggleInput } from '@zyvnox/vue-pack/components'

const enabled = ref(true)
<\/script>`,C=`<ToggleInput
  v-model="twoFactor"
  label="Strict Two-Factor Authentication (2FA)"
  tooltip="Requires hardware security key or TOTP app"
  tooltip-position="right"
/>`,w=`<ToggleInput
  v-model="sslMandatory"
  label="Mandatory SSL Enforcement"
  disabled
/>`,T=o({__name:`ToggleInputExample`,setup(o){let{isIndonesian:T,currentLocale:E}=u(),D=n(!0),O=n(!1),k=n(!0),A=n(!1),j=[{name:`modelValue`,type:`boolean`,required:!0,description:`Reactive boolean v-model`},{name:`label`,type:`string`,required:!0,description:`Label text beside switch`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`disabled`,type:`boolean`,default:`false`,description:`Disables user interactions and locks switch`},{name:`tooltip`,type:`string`,description:`Custom tooltip text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code`}],M=[{name:`update:modelValue`,type:`(value: boolean, id: string) => void`,description:`Emitted upon toggle switch click`}];return(n,o)=>{let u=e(`DocHeader`);return t(),i(`div`,_,[s(u),s(m,{title:`Basic Boolean Switch`,description:`Toggles a true/false boolean state.`},{code:d(()=>[s(p,{code:S,language:`vue`})]),default:d(()=>[r(`div`,v,[s(l(f),{modelValue:D.value,"onUpdate:modelValue":o[0]||=e=>D.value=e,label:l(T)?`Aktifkan Notifikasi Push`:`Enable Push Notifications`,lang:l(E)},null,8,[`modelValue`,`label`,`lang`]),r(`span`,{class:a([`text-xs font-mono font-semibold`,D.value?`text-emerald-500`:`text-slate-400`])},c(D.value?l(T)?`AKTIF`:`ACTIVE`:l(T)?`NONAKTIF`:`DISABLED`),3)])]),_:1}),s(m,{title:`With Schema Tooltip`,description:`Explains feature implications beside the toggle switch.`},{code:d(()=>[s(p,{code:C,language:`vue`})]),default:d(()=>[s(l(f),{modelValue:O.value,"onUpdate:modelValue":o[1]||=e=>O.value=e,label:l(T)?`Autentikasi Dua Faktor Ketat (2FA)`:`Strict Two-Factor Authentication (2FA)`,tooltip:l(T)?`Memerlukan kunci keamanan perangkat keras atau aplikasi TOTP pada setiap sesi browser baru`:`Requires hardware security key or TOTP app on every new browser session`,"tooltip-position":`right`,lang:l(E)},null,8,[`modelValue`,`label`,`tooltip`,`lang`])]),_:1}),s(m,{title:`Disabled Toggle States`,description:`Locked on or off switch states.`},{code:d(()=>[s(p,{code:w,language:`vue`})]),default:d(()=>[r(`div`,y,[s(l(f),{modelValue:k.value,"onUpdate:modelValue":o[2]||=e=>k.value=e,label:l(T)?`Penerapan Wajib SSL`:`Mandatory SSL Enforcement`,disabled:``,lang:l(E)},null,8,[`modelValue`,`label`,`lang`]),s(l(f),{modelValue:A.value,"onUpdate:modelValue":o[3]||=e=>A.value=e,label:l(T)?`Fitur Eksperimental Beta (Terkunci)`:`Beta Feature Flag (Locked)`,disabled:``,lang:l(E)},null,8,[`modelValue`,`label`,`lang`])])]),_:1}),r(`section`,b,[s(h,{props:j})]),r(`section`,x,[s(g,{events:M})])])}}});export{T as default};