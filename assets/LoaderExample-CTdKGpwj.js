import{M as e,O as t,U as n,c as r,d as i,g as a,h as o,mt as s,q as c,t as l,z as u}from"./i18n-CQHTY6ci.js";import{t as d}from"./LoaderSuccessError-DjEx8mEl.js";import{t as f}from"./CodeBlock-Cjmxf9F4.js";import{n as p,t as m}from"./PropsTable-Dv1x2aJC.js";var h={class:`space-y-8`},g={class:`flex flex-wrap items-center gap-3`},_={class:`space-y-4`},v=`<template>
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
<\/script>`,y=a({__name:`LoaderExample`,setup(a){let{isIndonesian:y}=l(),b=n(null),x=()=>{b.value?.show(`loading`,y.value?`Menyinkronkan data...`:`Synchronizing data...`),setTimeout(()=>{b.value?.hide()},2e3)},S=()=>{b.value?.show(`success`,y.value?`Pesanan Berhasil Dibuat!`:`Order Placed Successfully!`)},C=()=>{b.value?.show(`warning`,y.value?`Latensi jaringan tinggi. Beroperasi dalam mode fallback.`:`Network latency high. Operating in fallback mode.`)},w=()=>{b.value?.show(`error`,y.value?`Otorisasi Pembayaran Gagal`:`Payment Authorization Failed`)},T=[{name:`show`,type:`(type: "loading" | "success" | "warning" | "error", message?: string) => void`,description:`Opens the overlay with the chosen animation and message`},{name:`hide`,type:`() => void`,description:`Dismisses the overlay`}];return(n,a)=>{let l=e(`DocHeader`);return t(),i(`div`,h,[o(l),o(c(d),{ref_key:`loaderRef`,ref:b},null,512),o(p,{title:`Trigger Fullscreen Overlays`,description:`Click to simulate async processing states.`},{code:u(()=>[o(f,{code:v,language:`vue`})]),default:u(()=>[r(`div`,g,[r(`button`,{type:`button`,onClick:x,class:`px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors`},s(c(y)?`⏳ Tampilkan Spinner (Otomatis tutup 2d)`:`⏳ Show Spinner (Auto-closes in 2s)`),1),r(`button`,{type:`button`,onClick:S,class:`px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors`},s(c(y)?`✓ Tampilkan Layar Sukses`:`✓ Show Success Screen`),1),r(`button`,{type:`button`,onClick:C,class:`px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold transition-colors`},s(c(y)?`⚠️ Tampilkan Layar Peringatan`:`⚠️ Show Warning Screen`),1),r(`button`,{type:`button`,onClick:w,class:`px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold transition-colors`},s(c(y)?`✕ Tampilkan Layar Error`:`✕ Show Error Screen`),1)])]),_:1}),r(`section`,_,[o(m,{props:T,title:`Exposed Methods`})])])}}});export{y as default};