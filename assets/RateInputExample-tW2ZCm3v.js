import{Et as e,St as t,T as n,Tt as r,ft as i,gt as a,ht as o,kt as s,lt as c,mt as l,vt as u}from"./index-BQNesRql.js";import{t as d}from"./CodeBlock-BDBDmQfe.js";import{n as f,t as p}from"./PropsTable-CIH-RclG.js";import{t as m}from"./EventsTable-6XlwCFJn.js";var h={class:`space-y-8`},g={class:`text-xs text-slate-500`},_={class:`font-mono font-bold`},v={class:`text-xs text-slate-500`},y={class:`font-mono font-bold`},b={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},x={class:`space-y-4`},S={class:`space-y-4`},C=`<template>
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
/>`,E=a({__name:`RateInputExample`,setup(a){let E=r(4),D=r(8),O=r(0),k=r(5),A=[{name:`modelValue`,type:`number`,required:!0,description:`Reactive numeric rating score v-model`},{name:`label`,type:`string`,required:!0,description:`Label title displayed above stars`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`validate`,type:`{ min?: number, max?: number }`,description:`Rating scale boundary. "max" controls total number of rendered stars (defaults to 5, can be set to 10).`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks star rating and enters read-only display mode`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code`}],j=[{name:`update:modelValue`,type:`(value: number | null, id: string) => void`,description:`Emitted upon star click (clicking active star resets to 0)`}];return(r,a)=>(u(),i(`div`,h,[a[8]||=c(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[c(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` RateInput `),c(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`}," Interactive star rating component with hover previews, customizable max scale via `validate.max`, custom tooltips, and responsive sizing. ")],-1),o(f,{title:`Standard 5-Star Rating`,description:`Interactive 5-star rating widget with toggle reset.`},{code:t(()=>[o(d,{code:C,language:`vue`})]),default:t(()=>[o(e(n),{modelValue:E.value,"onUpdate:modelValue":a[0]||=e=>E.value=e,label:`Product Satisfaction`},null,8,[`modelValue`]),c(`div`,g,[a[4]||=l(` Rating Score: `,-1),c(`code`,_,s(E.value)+` / 5 stars`,1)])]),_:1}),o(f,{title:"Extended 10-Star Scale (`validate.max: 10`)",description:`Configures an extended 10-point satisfaction evaluation scale using the validate configuration.`},{code:t(()=>[o(d,{code:w,language:`vue`})]),default:t(()=>[o(e(n),{modelValue:D.value,"onUpdate:modelValue":a[1]||=e=>D.value=e,label:`Net Promoter Score (NPS)`,tooltip:`Rate likelihood to recommend on a scale from 1 to 10`,"tooltip-position":`right`,validate:{max:10}},null,8,[`modelValue`]),c(`div`,v,[a[5]||=l(` Selected Score: `,-1),c(`code`,y,s(D.value)+` / 10 stars`,1)])]),_:1}),o(f,{title:`External Error & Disabled States`,description:`Visual invalid review alerts and read-only ratings.`},{code:t(()=>[o(d,{code:T,language:`vue`})]),default:t(()=>[c(`div`,b,[o(e(n),{modelValue:O.value,"onUpdate:modelValue":a[2]||=e=>O.value=e,label:`Required Vendor Assessment`,required:``,error:`Assessment rating is mandatory before finalizing contract`},null,8,[`modelValue`]),o(e(n),{modelValue:k.value,"onUpdate:modelValue":a[3]||=e=>k.value=e,label:`Historical Average Rating (Read-Only)`,disabled:``},null,8,[`modelValue`])])]),_:1}),c(`section`,x,[a[6]||=c(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),o(p,{props:A})]),c(`section`,S,[a[7]||=c(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),o(m,{events:j})])]))}});export{E as default};