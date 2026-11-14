import{M as e,O as t,U as n,c as r,d as i,g as a,h as o,m as s,mt as c,q as l,t as u,z as d}from"./i18n-CQHTY6ci.js";import{t as f}from"./RateInput-DZZHsFMZ.js";import{t as p}from"./CodeBlock-Cjmxf9F4.js";import{n as m,t as h}from"./PropsTable-Dv1x2aJC.js";import{t as g}from"./EventsTable-D-LMtD8H.js";var _={class:`space-y-8`},v={class:`text-xs text-slate-500`},y={class:`font-mono font-bold`},b={class:`text-xs text-slate-500`},x={class:`font-mono font-bold`},S={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},C={class:`space-y-4`},w={class:`space-y-4`},T=`<template>
  <RateInput
    v-model="rating"
    label="Product Satisfaction"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RateInput } from '@zyvnox/vue-pack/components'

const rating = ref(4)
<\/script>`,E=`<RateInput
  v-model="npsScore"
  label="Net Promoter Score"
  :validate="{
    max: 10,
  }"
/>`,D=`<RateInput
  v-model="vendorRating"
  label="Vendor Assessment"
  required
  error="Assessment rating is mandatory"
/>
<RateInput
  v-model="avgRating"
  label="Historical Rating"
  disabled
/>`,O=a({__name:`RateInputExample`,setup(a){let{isIndonesian:O,currentLocale:k}=u(),A=n(4),j=n(8),M=n(0),N=n(5),P=[{name:`modelValue`,type:`number`,required:!0,description:`Reactive numeric rating score v-model`},{name:`label`,type:`string`,required:!0,description:`Label title displayed above stars`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`validate`,type:`{ min?: number, max?: number }`,description:`Rating scale boundary. "max" controls total number of rendered stars (defaults to 5, can be set to 10).`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks star rating and enters read-only display mode`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code`}],F=[{name:`update:modelValue`,type:`(value: number | null, id: string) => void`,description:`Emitted upon star click (clicking active star resets to 0)`}];return(n,a)=>{let u=e(`DocHeader`);return t(),i(`div`,_,[o(u),o(m,{title:`Standard 5-Star Rating`,description:`Interactive 5-star rating widget with toggle reset.`},{code:d(()=>[o(p,{code:T,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:A.value,"onUpdate:modelValue":a[0]||=e=>A.value=e,label:l(O)?`Kepuasan Produk`:`Product Satisfaction`,lang:l(k)},null,8,[`modelValue`,`label`,`lang`]),r(`div`,v,[s(c(l(O)?`Skor Penilaian:`:`Rating Score:`)+` `,1),r(`code`,y,c(A.value)+` / 5 `+c(l(O)?`bintang`:`stars`),1)])]),_:1}),o(m,{title:"Extended 10-Star Scale (`validate.max: 10`)",description:`Configures an extended 10-point satisfaction evaluation scale using the validate configuration.`},{code:d(()=>[o(p,{code:E,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:j.value,"onUpdate:modelValue":a[1]||=e=>j.value=e,label:l(O)?`Skor Rekomendasi (NPS)`:`Net Promoter Score (NPS)`,tooltip:l(O)?`Nilai kemungkinan untuk merekomendasikan pada skala 1 hingga 10`:`Rate likelihood to recommend on a scale from 1 to 10`,"tooltip-position":`right`,lang:l(k),validate:{max:10}},null,8,[`modelValue`,`label`,`tooltip`,`lang`]),r(`div`,b,[s(c(l(O)?`Skor Terpilih:`:`Selected Score:`)+` `,1),r(`code`,x,c(j.value)+` / 10 `+c(l(O)?`bintang`:`stars`),1)])]),_:1}),o(m,{title:`External Error & Disabled States`,description:`Visual invalid review alerts and read-only ratings.`},{code:d(()=>[o(p,{code:D,language:`vue`})]),default:d(()=>[r(`div`,S,[o(l(f),{modelValue:M.value,"onUpdate:modelValue":a[2]||=e=>M.value=e,label:l(O)?`Penilaian Vendor Wajib`:`Required Vendor Assessment`,required:``,error:l(O)?`Penilaian kepuasan wajib diisi sebelum finalisasi kontrak`:`Assessment rating is mandatory before finalizing contract`,lang:l(k)},null,8,[`modelValue`,`label`,`error`,`lang`]),o(l(f),{modelValue:N.value,"onUpdate:modelValue":a[3]||=e=>N.value=e,label:l(O)?`Rata-rata Rating Historis (Hanya-Baca)`:`Historical Average Rating (Read-Only)`,disabled:``,lang:l(k)},null,8,[`modelValue`,`label`,`lang`])])]),_:1}),r(`section`,C,[o(h,{props:P})]),r(`section`,w,[o(g,{events:F})])])}}});export{O as default};