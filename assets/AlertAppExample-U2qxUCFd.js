import{M as e,O as t,U as n,c as r,d as i,g as a,h as o,mt as s,q as c,t as l,z as u}from"./i18n-CQHTY6ci.js";import{t as d}from"./AlertApp-Dw6vE-mN.js";import{t as f}from"./CodeBlock-Cjmxf9F4.js";import{n as p,t as m}from"./PropsTable-Dv1x2aJC.js";var h={class:`space-y-8`},g={class:`flex flex-wrap items-center gap-3`},_={class:`space-y-4`},v=`<template>
  <AlertApp ref="alerts" />
  <button @click="notify">Show Toast</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AlertApp } from '@zyvnox/vue-pack/components'

const alerts = ref()
const notify = () => {
  alerts.value?.addAlert({
    type: 'success',
    title: 'Operation Completed',
    messages: ['Item added to cart.'],
  })
}
<\/script>`,y=a({__name:`AlertAppExample`,setup(a){let{isIndonesian:y}=l(),b=n(null),x=()=>{b.value?.addAlert({type:`success`,title:y.value?`Perubahan Berhasil Disimpan`:`Changes Saved Successfully`,messages:[y.value?`Data profil pelanggan telah disinkronkan ke database.`:`Customer profile record has been synchronized with the database.`]})},S=()=>{b.value?.addAlert({type:`warning`,title:y.value?`Peringatan Kapasitas Penyimpanan`:`Storage Capacity Alert`,messages:[y.value?`Kapasitas penyimpanan cloud telah mencapai 88%.`:`Cloud storage utilization is currently at 88%.`,y.value?`Pertimbangkan untuk mengarsipkan log lama atau meningkatkan paket langganan.`:`Consider archiving older log files or upgrading your plan.`]})},C=()=>{b.value?.addAlert({type:`error`,title:y.value?`Sinkronisasi Jaringan Gagal`:`Network Synchronization Failed`,messages:[y.value?`Gagal menghubungkan ke gateway endpoint.`:`Failed to connect to gateway endpoint.`,y.value?`Periksa koneksi internet Anda dan coba lagi.`:`Check your internet connection and retry.`]})},w=[{name:`addAlert`,type:`(alert: { type: "success" | "error" | "warning" | "info", title: string, messages: string[] }) => void`,description:`Dispatches a new stacked toast alert to the screen`}];return(n,a)=>{let l=e(`DocHeader`);return t(),i(`div`,h,[o(l),o(c(d),{ref_key:`alertRef`,ref:b},null,512),o(p,{title:`Trigger Floating Toast Alerts`,description:`Click the buttons below to dispatch stacked toast notifications.`},{code:u(()=>[o(f,{code:v,language:`vue`})]),default:u(()=>[r(`div`,g,[r(`button`,{type:`button`,onClick:x,class:`px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors`},s(c(y)?`✓ Picu Toast Sukses`:`✓ Trigger Success Toast`),1),r(`button`,{type:`button`,onClick:S,class:`px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold transition-colors`},s(c(y)?`⚠️ Picu Toast Peringatan`:`⚠️ Trigger Warning Toast`),1),r(`button`,{type:`button`,onClick:C,class:`px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold transition-colors`},s(c(y)?`✕ Picu Toast Error`:`✕ Trigger Error Toast`),1)])]),_:1}),r(`section`,_,[o(m,{props:w,title:`Exposed Methods`})])])}}});export{y as default};