import{C as e,Ot as t,Tt as n,_t as r,bt as i,gt as a,kt as o,pt as s,ut as c}from"./index-CrXSRddH.js";import{t as l}from"./CodeBlock-BTTdjRwt.js";import{n as u,t as d}from"./PropsTable-eGS096RT.js";var f={class:`space-y-8`},p={class:`space-y-4`},m=`<template>
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
<\/script>`,h=r({__name:`AlertAppExample`,setup(r){let h=t(null),g=()=>{h.value?.addAlert({type:`success`,title:`Changes Saved Successfully`,messages:[`Customer profile record has been synchronized with the database.`]})},_=()=>{h.value?.addAlert({type:`warning`,title:`Storage Capacity Alert`,messages:[`Cloud storage utilization is currently at 88%.`,`Consider archiving older log files or upgrading your plan.`]})},v=()=>{h.value?.addAlert({type:`error`,title:`Network Synchronization Failed`,messages:[`Failed to connect to gateway endpoint.`,`Check your internet connection and retry.`]})},y=[{name:`addAlert`,type:`(alert: { type: "success" | "error" | "warning" | "info", title: string, messages: string[] }) => void`,description:`Dispatches a new stacked toast alert to the screen`}];return(t,r)=>(i(),s(`div`,f,[r[1]||=c(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[c(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` AlertApp (Toast Notification Manager) `),c(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Global floating toast notification manager with stacked animation, auto-dismiss timers, and success/error status styles. `)],-1),a(o(e),{ref_key:`alertRef`,ref:h},null,512),a(u,{title:`Trigger Floating Toast Alerts`,description:`Click the buttons below to dispatch stacked toast notifications.`},{code:n(()=>[a(l,{code:m,language:`vue`})]),default:n(()=>[c(`div`,{class:`flex flex-wrap items-center gap-3`},[c(`button`,{type:`button`,onClick:g,class:`px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors`},` ✓ Trigger Success Toast `),c(`button`,{type:`button`,onClick:_,class:`px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold transition-colors`},` ⚠️ Trigger Warning Toast `),c(`button`,{type:`button`,onClick:v,class:`px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold transition-colors`},` ✕ Trigger Error Toast `)])]),_:1}),c(`section`,p,[r[0]||=c(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Exposed Methods`,-1),a(d,{props:y})])]))}});export{h as default};