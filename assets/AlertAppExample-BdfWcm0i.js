import{Ot as e,Tt as t,_t as n,bt as r,gt as i,kt as a,pt as o,ut as s,x as c}from"./index-BhghGzgp.js";import{t as l}from"./CodeBlock-CSGfp_x-.js";import{n as u,t as d}from"./PropsTable-rw53ZQEs.js";var f={class:`space-y-8`},p={class:`space-y-4`},m=`<template>
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
<\/script>`,h=n({__name:`AlertAppExample`,setup(n){let h=e(null),g=()=>{h.value?.addAlert({type:`success`,title:`Changes Saved Successfully`,messages:[`Customer profile record has been synchronized with the database.`]})},_=()=>{h.value?.addAlert({type:`warning`,title:`Storage Capacity Alert`,messages:[`Cloud storage utilization is currently at 88%.`,`Consider archiving older log files or upgrading your plan.`]})},v=()=>{h.value?.addAlert({type:`error`,title:`Network Synchronization Failed`,messages:[`Failed to connect to gateway endpoint.`,`Check your internet connection and retry.`]})},y=[{name:`addAlert`,type:`(alert: { type: "success" | "error" | "warning" | "info", title: string, messages: string[] }) => void`,description:`Dispatches a new stacked toast alert to the screen`}];return(e,n)=>(r(),o(`div`,f,[n[1]||=s(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[s(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` AlertApp (Toast Notification Manager) `),s(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Global floating toast notification manager with stacked animation, auto-dismiss timers, and success/error status styles. `)],-1),i(a(c),{ref_key:`alertRef`,ref:h},null,512),i(u,{title:`Trigger Floating Toast Alerts`,description:`Click the buttons below to dispatch stacked toast notifications.`},{code:t(()=>[i(l,{code:m,language:`vue`})]),default:t(()=>[s(`div`,{class:`flex flex-wrap items-center gap-3`},[s(`button`,{type:`button`,onClick:g,class:`px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors`},` ✓ Trigger Success Toast `),s(`button`,{type:`button`,onClick:_,class:`px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold transition-colors`},` ⚠️ Trigger Warning Toast `),s(`button`,{type:`button`,onClick:v,class:`px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold transition-colors`},` ✕ Trigger Error Toast `)])]),_:1}),s(`section`,p,[n[0]||=s(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Exposed Methods`,-1),i(d,{props:y})])]))}});export{h as default};