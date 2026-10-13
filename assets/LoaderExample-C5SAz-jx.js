import{Et as e,F as t,St as n,Tt as r,ft as i,gt as a,ht as o,lt as s,vt as c}from"./index-jB9TdKXO.js";import{t as l}from"./CodeBlock-BYwXs7eI.js";import{n as u,t as d}from"./PropsTable-Cmdmv644.js";var f={class:`space-y-8`},p={class:`space-y-4`},m=`<template>
  <Loader ref="loader" />
  <button @click="processPayment">Submit</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Loader } from '@zyvnox/vue-pack/components'

const loader = ref()
const processPayment = async () => {
  loader.value?.show('loading', 'Processing transaction...')
  try {
    await api.pay()
    loader.value?.show('success', 'Payment Complete!')
  } catch {
    loader.value?.show('error', 'Payment Failed')
  }
}
<\/script>`,h=a({__name:`LoaderExample`,setup(a){let h=r(null),g=()=>{h.value?.show(`loading`,`Synchronizing data...`),setTimeout(()=>{h.value?.hide()},2e3)},_=()=>{h.value?.show(`success`,`Order Placed Successfully!`)},v=()=>{h.value?.show(`error`,`Payment Authorization Failed`)},y=[{name:`show`,type:`(type: "loading" | "success" | "error", message?: string) => void`,description:`Opens the overlay with the chosen animation and message`},{name:`hide`,type:`() => void`,description:`Dismisses the overlay`}];return(r,a)=>(c(),i(`div`,f,[a[1]||=s(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[s(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` Loader (Fullscreen Status Overlay) `),s(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Imperative fullscreen loading and feedback overlay supporting loading spinner, success checkmark, and error cross animations. `)],-1),o(e(t),{ref_key:`loaderRef`,ref:h},null,512),o(u,{title:`Trigger Fullscreen Overlays`,description:`Click to simulate async processing states.`},{code:n(()=>[o(l,{code:m,language:`vue`})]),default:n(()=>[s(`div`,{class:`flex flex-wrap items-center gap-3`},[s(`button`,{type:`button`,onClick:g,class:`px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors`},` ⏳ Show Spinner (Auto-closes in 2s) `),s(`button`,{type:`button`,onClick:_,class:`px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors`},` ✓ Show Success Screen `),s(`button`,{type:`button`,onClick:v,class:`px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold transition-colors`},` ✕ Show Error Screen `)])]),_:1}),s(`section`,p,[a[0]||=s(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Exposed Methods`,-1),o(d,{props:y})])]))}});export{h as default};