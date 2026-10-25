import{Mt as e,Ot as t,Tt as n,_t as r,bt as i,gt as a,ht as o,kt as s,pt as c,ut as l,y as u}from"./index-BhghGzgp.js";import{t as d}from"./CodeBlock-CSGfp_x-.js";import{n as f,t as p}from"./PropsTable-rw53ZQEs.js";import{t as m}from"./EventsTable-BlxUYD03.js";var h={class:`space-y-8`},g={class:`text-xs text-slate-500`},_={class:`font-mono font-bold`},v={class:`text-xs text-slate-500`},y={class:`font-mono font-bold`},b={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},x={class:`space-y-4`},S={class:`space-y-4`},C=`<template>
  <RateInput
    v-model="rating"
    label="Product Satisfaction"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RateInput } from '@zyvnox/vue-pack/components'

const rating = ref(4)
<\/script>`,w=`<RateInput
  v-model="npsScore"
  label="Net Promoter Score"
  :validate="{
    max: 10,
  }"
/>`,T=`<RateInput
  v-model="vendorRating"
  label="Vendor Assessment"
  required
  error="Assessment rating is mandatory"
/>
<RateInput
  v-model="avgRating"
  label="Historical Rating"
  disabled
/>`,E=r({__name:`RateInputExample`,setup(r){let E=t(4),D=t(8),O=t(0),k=t(5),A=[{name:`modelValue`,type:`number`,required:!0,description:`Reactive numeric rating score v-model`},{name:`label`,type:`string`,required:!0,description:`Label title displayed above stars`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`validate`,type:`{ min?: number, max?: number }`,description:`Rating scale boundary. "max" controls total number of rendered stars (defaults to 5, can be set to 10).`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks star rating and enters read-only display mode`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code`}],j=[{name:`update:modelValue`,type:`(value: number | null, id: string) => void`,description:`Emitted upon star click (clicking active star resets to 0)`}];return(t,r)=>(i(),c(`div`,h,[r[8]||=l(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[l(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` RateInput `),l(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`}," Interactive star rating component with hover previews, customizable max scale via `validate.max`, custom tooltips, and responsive sizing. ")],-1),a(f,{title:`Standard 5-Star Rating`,description:`Interactive 5-star rating widget with toggle reset.`},{code:n(()=>[a(d,{code:C,language:`vue`})]),default:n(()=>[a(s(u),{modelValue:E.value,"onUpdate:modelValue":r[0]||=e=>E.value=e,label:`Product Satisfaction`},null,8,[`modelValue`]),l(`div`,g,[r[4]||=o(` Rating Score: `,-1),l(`code`,_,e(E.value)+` / 5 stars`,1)])]),_:1}),a(f,{title:"Extended 10-Star Scale (`validate.max: 10`)",description:`Configures an extended 10-point satisfaction evaluation scale using the validate configuration.`},{code:n(()=>[a(d,{code:w,language:`vue`})]),default:n(()=>[a(s(u),{modelValue:D.value,"onUpdate:modelValue":r[1]||=e=>D.value=e,label:`Net Promoter Score (NPS)`,tooltip:`Rate likelihood to recommend on a scale from 1 to 10`,"tooltip-position":`right`,validate:{max:10}},null,8,[`modelValue`]),l(`div`,v,[r[5]||=o(` Selected Score: `,-1),l(`code`,y,e(D.value)+` / 10 stars`,1)])]),_:1}),a(f,{title:`External Error & Disabled States`,description:`Visual invalid review alerts and read-only ratings.`},{code:n(()=>[a(d,{code:T,language:`vue`})]),default:n(()=>[l(`div`,b,[a(s(u),{modelValue:O.value,"onUpdate:modelValue":r[2]||=e=>O.value=e,label:`Required Vendor Assessment`,required:``,error:`Assessment rating is mandatory before finalizing contract`},null,8,[`modelValue`]),a(s(u),{modelValue:k.value,"onUpdate:modelValue":r[3]||=e=>k.value=e,label:`Historical Average Rating (Read-Only)`,disabled:``},null,8,[`modelValue`])])]),_:1}),l(`section`,x,[r[6]||=l(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),a(p,{props:A})]),l(`section`,S,[r[7]||=l(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),a(m,{events:j})])]))}});export{E as default};