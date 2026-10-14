import{Ot as e,Tt as t,_t as n,bt as r,gt as i,j as a,kt as o,pt as s,ut as c}from"./index-DnYmOVzH.js";import{t as l}from"./CodeBlock-DwBCo2Nh.js";import{n as u,t as d}from"./PropsTable-UA4HlyP4.js";var f={class:`space-y-8`},p={class:`space-y-4`},m=`<template>
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
<\/script>`,h=n({__name:`AlertAppExample`,setup(n){let h=e(null),g=()=>{h.value?.addAlert({type:`success`,title:`Changes Saved Successfully`,messages:[`Customer profile record has been synchronized with the database.`]})},_=()=>{h.value?.addAlert({type:`error`,title:`Network Synchronization Failed`,messages:[`Failed to connect to gateway endpoint.`,`Check your internet connection and retry.`]})},v=[{name:`addAlert`,type:`(alert: { type: "success" | "error", title: string, messages: string[] }) => void`,description:`Dispatches a new stacked toast alert to the screen`}];return(e,n)=>(r(),s(`div`,f,[n[1]||=c(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[c(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` AlertApp (Toast Notification Manager) `),c(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Global floating toast notification manager with stacked animation, auto-dismiss timers, and success/error status styles. `)],-1),i(o(a),{ref_key:`alertRef`,ref:h},null,512),i(u,{title:`Trigger Floating Toast Alerts`,description:`Click the buttons below to dispatch stacked toast notifications.`},{code:t(()=>[i(l,{code:m,language:`vue`})]),default:t(()=>[c(`div`,{class:`flex flex-wrap items-center gap-3`},[c(`button`,{type:`button`,onClick:g,class:`px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors`},` ✓ Trigger Success Toast `),c(`button`,{type:`button`,onClick:_,class:`px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold transition-colors`},` ✕ Trigger Error Toast `)])]),_:1}),c(`section`,p,[n[0]||=c(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Exposed Methods`,-1),i(d,{props:v})])]))}});export{h as default};