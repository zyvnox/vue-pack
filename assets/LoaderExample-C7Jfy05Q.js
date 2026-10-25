import{Ot as e,R as t,Tt as n,_t as r,bt as i,gt as a,kt as o,pt as s,ut as c}from"./index-BhghGzgp.js";import{t as l}from"./CodeBlock-CSGfp_x-.js";import{n as u,t as d}from"./PropsTable-rw53ZQEs.js";var f={class:`space-y-8`},p={class:`space-y-4`},m=`<template>
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
<\/script>`,h=r({__name:`LoaderExample`,setup(r){let h=e(null),g=()=>{h.value?.show(`loading`,`Synchronizing data...`),setTimeout(()=>{h.value?.hide()},2e3)},_=()=>{h.value?.show(`success`,`Order Placed Successfully!`)},v=()=>{h.value?.show(`warning`,`Network latency high. Operating in fallback mode.`)},y=()=>{h.value?.show(`error`,`Payment Authorization Failed`)},b=[{name:`show`,type:`(type: "loading" | "success" | "warning" | "error", message?: string) => void`,description:`Opens the overlay with the chosen animation and message`},{name:`hide`,type:`() => void`,description:`Dismisses the overlay`}];return(e,r)=>(i(),s(`div`,f,[r[1]||=c(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[c(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` Loader (Fullscreen Status Overlay) `),c(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Imperative fullscreen loading and feedback overlay supporting loading spinner, success checkmark, and error cross animations. `)],-1),a(o(t),{ref_key:`loaderRef`,ref:h},null,512),a(u,{title:`Trigger Fullscreen Overlays`,description:`Click to simulate async processing states.`},{code:n(()=>[a(l,{code:m,language:`vue`})]),default:n(()=>[c(`div`,{class:`flex flex-wrap items-center gap-3`},[c(`button`,{type:`button`,onClick:g,class:`px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors`},` ⏳ Show Spinner (Auto-closes in 2s) `),c(`button`,{type:`button`,onClick:_,class:`px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors`},` ✓ Show Success Screen `),c(`button`,{type:`button`,onClick:v,class:`px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold transition-colors`},` ⚠️ Show Warning Screen `),c(`button`,{type:`button`,onClick:y,class:`px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold transition-colors`},` ✕ Show Error Screen `)])]),_:1}),c(`section`,p,[r[0]||=c(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Exposed Methods`,-1),a(d,{props:b})])]))}});export{h as default};