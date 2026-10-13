import{Et as e,St as t,Tt as n,ft as r,gt as i,ht as a,kt as o,lt as s,mt as c,n as l,vt as u}from"./index-jB9TdKXO.js";import{t as d}from"./CodeBlock-BYwXs7eI.js";import{n as f,t as p}from"./PropsTable-Cmdmv644.js";import{t as m}from"./EventsTable-CbC4IuxC.js";var h={class:`space-y-8`},g={class:`text-xs text-slate-500`},_={class:`font-mono font-bold`},v={class:`text-xs text-slate-500 space-y-1`},y={class:`font-mono font-bold`},b={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},x={class:`space-y-4`},S={class:`space-y-4`},C=`<template>
  <NumberInput
    v-model="quantity"
    label="Quantity / Units"
    placeholder="Enter quantity"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NumberInput } from '@zyvnox/vue-pack/components'

const quantity = ref(5)
<\/script>`,w=`<NumberInput
  v-model="discount"
  label="Discount Percentage (%)"
  tooltip="Enter integer between 0 and 100"
  :validate="{
    min: 0,
    max: 100,
    integer: true,
    duplicate: [13, 42],
  }"
  placeholder="e.g. 25"
/>`,T=`<NumberInput
  v-model="stock"
  label="Inventory Stock Level"
  required
  error="Stock quantity cannot fall below safety threshold (10)"
/>
<NumberInput
  v-model="minOrder"
  label="Fixed Minimum Order"
  disabled
/>`,E=i({__name:`NumberInputExample`,setup(i){let E=n(5),D=n(13),O=n(3),k=n(100),A=[{name:`modelValue`,type:`number | string`,required:!0,description:`Reactive numeric v-model value`},{name:`label`,type:`string`,required:!0,description:`Input label title displayed above numeric field`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID for label and input binding`},{name:`placeholder`,type:`string`,description:`Placeholder hint text (falls back to i18n default)`},{name:`validate`,type:`{ min?: number, max?: number, integer?: boolean, duplicate?: (string | number)[] }`,description:`Client-side numeric validation rules. Checks min, max, integer type, and duplicate list with localized messages.`},{name:`required`,type:`boolean`,default:`false`,description:`Displays required asterisk indicator`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks numeric input and disables all interactions`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom guidance text shown when hovering help icon`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Preferred tooltip popover placement`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for internal validation error messages`}],j=[{name:`update:modelValue`,type:`(value: number | string, id: string) => void`,description:`Emitted upon numeric value change`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when a numeric validation rule fails`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when numeric validation passes`}];return(n,i)=>(u(),r(`div`,h,[i[9]||=s(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[s(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` NumberInput `),s(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Numeric input component with type safety, integer enforcement, min/max range validation, duplicate checks, and custom tooltip support. `)],-1),a(f,{title:`Basic Numeric Input`,description:`Binds a numerical value with automatic number type casting.`},{code:t(()=>[a(d,{code:C,language:`vue`})]),default:t(()=>[a(e(l),{modelValue:E.value,"onUpdate:modelValue":i[0]||=e=>E.value=e,label:`Quantity / Units`,placeholder:`Enter quantity`},null,8,[`modelValue`]),s(`div`,g,[i[4]||=c(` Bound Value: `,-1),s(`code`,_,o(E.value??`(empty)`),1),c(` (Type: `+o(typeof E.value)+`) `,1)])]),_:1}),a(f,{title:`Real-Time Validation (Min, Max, Integer & Duplicates)`,description:`Validates numeric boundary [0 to 100], enforces integers, and rejects blacklisted duplicate numbers (e.g. 13, 42).`},{code:t(()=>[a(d,{code:w,language:`vue`})]),default:t(()=>[a(e(l),{modelValue:D.value,"onUpdate:modelValue":i[1]||=e=>D.value=e,label:`Discount Percentage (%)`,tooltip:`Enter an integer percentage between 0 and 100 (13 and 42 are reserved)`,"tooltip-position":`right`,validate:{min:0,max:100,integer:!0,duplicate:[13,42]},placeholder:`e.g. 25`},null,8,[`modelValue`]),s(`div`,v,[s(`div`,null,[i[5]||=c(`Current Value: `,-1),s(`code`,y,o(D.value??`(empty)`),1)]),i[6]||=s(`div`,{class:`text-slate-400 dark:text-slate-500`},[c(` Rules: Min 0, Max 100, Integer only, Blacklist: `),s(`code`,{class:`font-mono`},`[13, 42]`),c(`. `)],-1)])]),_:1}),a(f,{title:`External Error & Disabled States`,description:`Visual feedback when numeric limits are violated or input is disabled.`},{code:t(()=>[a(d,{code:T,language:`vue`})]),default:t(()=>[s(`div`,b,[a(e(l),{modelValue:O.value,"onUpdate:modelValue":i[2]||=e=>O.value=e,label:`Inventory Stock Level`,required:``,error:`Stock quantity cannot fall below safety threshold (10)`},null,8,[`modelValue`]),a(e(l),{modelValue:k.value,"onUpdate:modelValue":i[3]||=e=>k.value=e,label:`Fixed Minimum Order (Read-Only)`,disabled:``},null,8,[`modelValue`])])]),_:1}),s(`section`,x,[i[7]||=s(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),a(p,{props:A})]),s(`section`,S,[i[8]||=s(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),a(m,{events:j})])]))}});export{E as default};