import{Et as e,St as t,Tt as n,ft as r,gt as i,ht as a,kt as o,lt as s,mt as c,vt as l,y as u}from"./index-BQNesRql.js";import{t as d}from"./CodeBlock-BDBDmQfe.js";import{n as f,t as p}from"./PropsTable-CIH-RclG.js";import{t as m}from"./EventsTable-6XlwCFJn.js";var h={class:`space-y-8`},g={class:`text-xs text-slate-500`},_={class:`font-mono font-bold`},v={class:`text-xs text-slate-500 space-y-1`},y={class:`font-mono font-bold`},b={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},x={class:`space-y-4`},S={class:`space-y-4`},C=`<template>
  <CurrencyInput
    v-model="price"
    label="Product Price"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CurrencyInput } from '@zyvnox/vue-pack/components'

const price = ref(75000)
<\/script>`,w=`<CurrencyInput
  v-model="amount"
  label="Funding Contribution"
  :validate="{
    min: 10000,
    max: 5000000,
  }"
/>`,T=`<CurrencyInput
  v-model="fee"
  label="Subscription Annual Fee"
  tooltip="Enter cost excluding VAT/GST"
  tooltip-position="right"
  placeholder="120000"
/>`,E=`<CurrencyInput
  v-model="amount"
  label="Single Transfer Limit"
  required
  error="Amount exceeds maximum allowed limit"
/>
<CurrencyInput
  v-model="adminFee"
  label="Fixed Administrative Fee"
  disabled
/>`,D=i({__name:`CurrencyInputExample`,setup(i){let D=n(75e3),O=n(5e3),k=n(25e4),A=n(15e7),j=n(5e3),M=[{name:`modelValue`,type:`number | null`,required:!0,description:`Reactive numeric value v-model`},{name:`label`,type:`string`,required:!0,description:`Input label title displayed above the field`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`placeholder`,type:`string`,description:`Placeholder hint text`},{name:`validate`,type:`{ min?: number, max?: number }`,description:`Client-side min and max currency value validation boundaries with localized warning messages.`},{name:`required`,type:`boolean`,default:`false`,description:`Displays required asterisk indicator`},{name:`disabled`,type:`boolean`,default:`false`,description:`Disables user input and locking controls`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup orientation`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or glyph displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for currency formatting symbols and error messages`}],N=[{name:`update:modelValue`,type:`(value: number | null, id: string) => void`,description:`Emitted upon currency amount changes`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when min or max validation check fails`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when currency validation check passes`}];return(n,i)=>(l(),r(`div`,h,[i[10]||=s(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[s(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` CurrencyInput `),s(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Currency formatting input component with formatted visual display (e.g. Rupiah/Dollar), min/max threshold validation, raw numerical model binding, and i18n support. `)],-1),a(f,{title:`Basic Currency Input`,description:`Formats money values while storing clean numbers.`},{code:t(()=>[a(d,{code:C,language:`vue`})]),default:t(()=>[a(e(u),{modelValue:D.value,"onUpdate:modelValue":i[0]||=e=>D.value=e,label:`Product Price`,placeholder:`0`},null,8,[`modelValue`]),s(`div`,g,[i[5]||=c(` Raw Numeric Value: `,-1),s(`code`,_,o(D.value??0),1)])]),_:1}),a(f,{title:`Real-Time Validation (Min & Max Limits)`,description:`Enforces transaction limits between min (10,000) and max (5,000,000) with automatic error emission.`},{code:t(()=>[a(d,{code:w,language:`vue`})]),default:t(()=>[a(e(u),{modelValue:O.value,"onUpdate:modelValue":i[1]||=e=>O.value=e,label:`Funding Contribution`,placeholder:`Min 10.000, Max 5.000.000`,validate:{min:1e4,max:5e6}},null,8,[`modelValue`]),s(`div`,v,[s(`div`,null,[i[6]||=c(`Current Value: `,-1),s(`code`,y,o(O.value??0),1)]),i[7]||=s(`div`,{class:`text-slate-400 dark:text-slate-500`},` Allowed range: 10,000 to 5,000,000. `,-1)])]),_:1}),a(f,{title:`Custom Schema Tooltip`,description:`Displays currency guidelines using custom tooltips.`},{code:t(()=>[a(d,{code:T,language:`vue`})]),default:t(()=>[a(e(u),{modelValue:k.value,"onUpdate:modelValue":i[2]||=e=>k.value=e,label:`Subscription Annual Fee`,tooltip:`Enter cost excluding VAT/GST`,"tooltip-position":`right`,placeholder:`120000`},null,8,[`modelValue`])]),_:1}),a(f,{title:`External Error & Disabled States`,description:`Visual warnings and read-only displays for currency.`},{code:t(()=>[a(d,{code:E,language:`vue`})]),default:t(()=>[s(`div`,b,[a(e(u),{modelValue:A.value,"onUpdate:modelValue":i[3]||=e=>A.value=e,label:`Single Transfer Limit`,required:``,error:`Amount exceeds maximum allowed single transfer limit`},null,8,[`modelValue`]),a(e(u),{modelValue:j.value,"onUpdate:modelValue":i[4]||=e=>j.value=e,label:`Fixed Administrative Fee (Read-Only)`,disabled:``},null,8,[`modelValue`])])]),_:1}),s(`section`,x,[i[8]||=s(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),a(p,{props:M})]),s(`section`,S,[i[9]||=s(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),a(m,{events:N})])]))}});export{D as default};