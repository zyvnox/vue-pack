import{M as e,O as t,U as n,c as r,d as i,g as a,h as o,l as s,mt as c,q as l,s as u,t as d,u as f,z as p}from"./i18n-CQHTY6ci.js";import{t as m}from"./ModalDetailData-DuptovAY.js";import{t as h}from"./CodeBlock-Cjmxf9F4.js";import{n as g,t as _}from"./PropsTable-Dv1x2aJC.js";import{t as v}from"./EventsTable-D-LMtD8H.js";var y={class:`space-y-8`},b={class:`flex items-center gap-4`},x={class:`space-y-4`},S={class:`space-y-4`},C=`<template>
  <button @click="show = true">Inspect Details</button>

  <ModalDetailData
    v-if="show"
    :schema="schema"
    :form-data="customer"
    title="Customer Record #123"
    @close="show = false"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ModalDetailData } from '@zyvnox/vue-pack/components'
import type { Schema } from '@zyvnox/vue-pack/type'

const show = ref(false)
const customer = { name: 'Eleanor', email: 'eleanor@example.com' }
const schema: Schema = {
  name: { type: 'text', label: 'Name' },
  email: { type: 'text', label: 'Email' },
}
<\/script>`,w=a({__name:`ModalDetailDataExample`,setup(a){let{isIndonesian:w,currentLocale:T}=d(),E=n(!1),D={name:`Eleanor Vance`,company:`Hill House Architecture Ltd.`,email:`eleanor@hillhouse.design`,tier:`Enterprise Platinum`,registeredAt:`2025-04-12`},O=u(()=>({name:{type:`text`,label:w.value?`Nama Lengkap Sah`:`Full Legal Name`},company:{type:`text`,label:w.value?`Organisasi / Perusahaan`:`Organization / Company`},email:{type:`text`,label:w.value?`Email Kontak Utama`:`Primary Contact Email`},tier:{type:`text`,label:w.value?`Paket Langganan`:`Subscription Plan`},registeredAt:{type:`date`,label:w.value?`Terdaftar Sejak`:`Member Since`}})),k=[{name:`schema`,type:`Schema`,required:!0,description:`Schema mapping defining how fields are formatted`},{name:`formData`,type:`Record<string, any>`,required:!0,description:`Record data object to display`},{name:`title`,type:`string`,default:`'Detail Data'`,description:`Dialog title text`},{name:`closeText`,type:`string`,default:`'Close'`,description:`Label for close action button`},{name:`valueNullView`,type:`string`,default:`'-'`,description:`Placeholder symbol for null or empty values`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Active language code`}],A=[{name:`close`,type:`() => void`,description:`Emitted when user dismisses the dialog`}];return(n,a)=>{let u=e(`DocHeader`);return t(),i(`div`,y,[o(u),o(g,{title:`Read-Only Record Detail Dialog`,description:`Click the button to open a detailed view of a customer account.`},{code:p(()=>[o(h,{code:C,language:`vue`})]),default:p(()=>[r(`div`,b,[r(`button`,{type:`button`,onClick:a[0]||=e=>E.value=!0,class:`px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors`},c(l(w)?`Lihat Detail Pelanggan`:`Inspect Customer Details`),1)]),E.value?(t(),s(l(m),{key:0,schema:O.value,"form-data":D,"value-null-view":!0,title:l(w)?`Data Rekam Pelanggan #CUST-982`:`Customer Record #CUST-982`,"close-text":l(w)?`Tutup`:`Close`,lang:l(T),onClose:a[1]||=e=>E.value=!1},null,8,[`schema`,`title`,`close-text`,`lang`])):f(``,!0)]),_:1}),r(`section`,x,[o(_,{props:k})]),r(`section`,S,[o(v,{events:A})])])}}});export{w as default};