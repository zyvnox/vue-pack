import{A as e,Et as t,St as n,Tt as r,ft as i,gt as a,ht as o,kt as s,lt as c,mt as l,vt as u}from"./index-jB9TdKXO.js";import{t as d}from"./CodeBlock-BYwXs7eI.js";import{n as f,t as p}from"./PropsTable-Cmdmv644.js";import{t as m}from"./EventsTable-CbC4IuxC.js";var h={class:`space-y-8`},g={class:`space-y-4`},_={class:`text-xs text-slate-500`},v={class:`p-3 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono mt-1 overflow-x-auto`},y={class:`space-y-4`},b={class:`space-y-4`},x=`<template>
  <ArrayObjectInput
    v-model="items"
    label="Purchase Order Items"
    :schema="itemSchema"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrayObjectInput } from '@zyvnox/vue-pack/components'
import type { Schema } from '@zyvnox/vue-pack/type'

const items = ref([
  { title: 'Server CPU Unit', quantity: 2, price: 4500000 },
])

const itemSchema: Schema = {
  title: {
    type: 'text',
    label: 'Item Name',
    required: true,
    validate: { minLength: 3 },
  },
  quantity: {
    type: 'number',
    label: 'Quantity',
    required: true,
    validate: { min: 1, max: 500, integer: true },
  },
  price: {
    type: 'currency',
    label: 'Unit Price',
    required: true,
    validate: { min: 1000 },
  },
}
<\/script>`,S=`<ArrayObjectInput
  v-model="variants"
  label="Product Variations"
  tooltip="Define SKU variants with stock allocation"
  tooltip-position="right"
  tooltip-icon="📦"
  :schema="variantSchema"
/>`,C=`<ArrayObjectInput
  v-model="items"
  label="Locked Order Items"
  :schema="itemSchema"
  disabled
/>`,w=a({__name:`ArrayObjectExample`,setup(a){let w=r([{title:`Server CPU Unit Xeon`,quantity:2,price:45e5},{title:`DDR5 32GB ECC RAM`,quantity:4,price:12e5}]),T=r([{sku:`SKU-RED-M`,color:`Crimson Red`,size:`M`}]),E={title:{type:`text`,label:`Item Name`,required:!0,placeholder:`Min. 3 characters`,validate:{minLength:3,maxLength:50}},quantity:{type:`number`,label:`Quantity`,required:!0,validate:{min:1,max:500,integer:!0}},price:{type:`currency`,label:`Unit Price`,required:!0,validate:{min:1e3}}},D={sku:{type:`text`,label:`SKU Code`,required:!0,validate:{minLength:4}},color:{type:`text`,label:`Colorway`,required:!0},size:{type:`select`,label:`Size`,options:[`S`,`M`,`L`,`XL`],required:!0}},O=[{name:`modelValue`,type:`any[]`,default:`[]`,description:`v-model array of row records`},{name:`schema`,type:`Schema`,required:!0,description:`Declarative schema for fields rendered inside each row modal`},{name:`label`,type:`string`,description:`Repeater section title header`},{name:`id`,type:`string`,default:`auto UID`,description:`Unique identifier for the repeater element`},{name:`isUpdate`,type:`boolean`,default:`false`,description:`Whether the parent form is in update/edit mode`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks the list and disables add, edit, and remove buttons`},{name:`error`,type:`string`,description:`Error message banner displayed below the repeater`},{name:`tooltip`,type:`string`,description:`Guidance text displayed beside the label on hover`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Position of the tooltip popover`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon symbol rendered beside the label when tooltip is set`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Active language code for buttons and modal dialogs`}],k=[{name:`update:modelValue`,type:`(value: any[], key: string) => void`,description:`Emitted when rows are added, edited, or removed`},{name:`create:Options`,type:`(key: string, options: string | number, view: string) => void`,description:`Emitted when dynamically creating options inside select fields in row modals`}];return(r,a)=>(u(),i(`div`,h,[a[5]||=c(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[c(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` ArrayObject (Dynamic Repeater List) `),c(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Schema-driven repeatable list engine for managing dynamic arrays of complex objects (e.g. order items, SKU variants) with built-in FormModal item editing and field-level validation. `)],-1),o(f,{title:`Dynamic Row Repeater with Item Validation`,description:`Add, edit, and delete structured objects. Clicking 'Add' or 'Edit' opens a FormModal that validates each field according to the item schema before updating the array.`},{code:n(()=>[o(d,{code:x,language:`vue`})]),default:n(()=>[c(`div`,g,[o(t(e),{modelValue:w.value,"onUpdate:modelValue":a[0]||=e=>w.value=e,label:`Purchase Order Line Items`,schema:E},null,8,[`modelValue`]),c(`div`,_,[l(` Active Rows (`+s(w.value.length)+`): `,1),c(`pre`,v,s(JSON.stringify(w.value,null,2)),1)])])]),_:1}),o(f,{title:`With Schema Tooltip & Icon`,description:`Displays guidance beside the repeater collection label.`},{code:n(()=>[o(d,{code:S,language:`vue`})]),default:n(()=>[o(t(e),{modelValue:T.value,"onUpdate:modelValue":a[1]||=e=>T.value=e,label:`Product Variations`,tooltip:`Define all SKU variants with verified colorway and stock allocation`,"tooltip-position":`right`,"tooltip-icon":`📦`,schema:D},null,8,[`modelValue`])]),_:1}),o(f,{title:`Disabled State`,description:`Read-only repeater display with row additions and edits locked.`},{code:n(()=>[o(d,{code:C,language:`vue`})]),default:n(()=>[o(t(e),{modelValue:w.value,"onUpdate:modelValue":a[2]||=e=>w.value=e,label:`Locked Order Items (Read-Only)`,schema:E,disabled:``},null,8,[`modelValue`])]),_:1}),c(`section`,y,[a[3]||=c(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),o(p,{props:O})]),c(`section`,b,[a[4]||=c(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),o(m,{events:k})])]))}});export{w as default};