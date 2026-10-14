import{Dt as e,Mt as t,Tt as n,_t as r,bt as i,gt as a,ht as o,kt as s,pt as c,s as l,ut as u}from"./index-DnYmOVzH.js";import{t as d}from"./CodeBlock-DwBCo2Nh.js";import{n as f,t as p}from"./PropsTable-UA4HlyP4.js";import{t as m}from"./EventsTable-BFB74qr4.js";var h={class:`space-y-8`},g={class:`space-y-4`},_={class:`flex flex-wrap items-center gap-3 text-xs`},v={key:0,class:`px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-medium`},y={key:1,class:`px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 font-medium`},b={class:`text-xs text-slate-500`},x={class:`p-3 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono mt-1 overflow-x-auto`},S={class:`space-y-4`},C={class:`space-y-4`},w=`<template>
  <ObjectInput
    :form-data="address"
    label="Billing Address"
    :schema="addressSchema"
    :errors="errors"
    @push:errors="(msg, key) => errors[key] = msg"
    @remove:errors="(key) => delete errors[key]"
  />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { ObjectInput } from '@zyvnox/vue-pack/components'
import type { Schema, Errors } from '@zyvnox/vue-pack/type'

const address = reactive({
  street: '123 Enterprise Blvd',
  city: 'Surabaya',
  postalCode: '60175',
})
const errors = reactive<Errors>({})

const addressSchema: Schema = {
  street: {
    type: 'text',
    label: 'Street Address',
    required: true,
    validate: { minLength: 5, maxLength: 60 },
  },
  city: {
    type: 'text',
    label: 'City',
    required: true,
  },
  postalCode: {
    type: 'text',
    label: 'Postal Code',
    required: true,
    validate: { pattern: '^\\\\d{5}$' },
  },
}
<\/script>`,T=`<ObjectInput
  :form-data="metadata"
  label="Cloud Infrastructure Metadata"
  tooltip="Enter AWS VPC network segmentation details"
  tooltip-position="right"
  tooltip-icon="🌐"
  :schema="metadataSchema"
  :errors="{}"
/>`,E=`<ObjectInput
  :form-data="address"
  label="Archived Address (Read-Only)"
  :schema="addressSchema"
  :errors="{}"
  disabled
/>`,D=r({__name:`ObjectInputExample`,setup(r){let D=e({street:`123 Enterprise Blvd`,city:`Surabaya`,postalCode:`60175`}),O=e({}),k=(e,t)=>{O[t]=e},A=e=>{delete O[e]},j=(e,t)=>{let n=t.split(`.`),r=n[n.length-1];D[r]=e},M=e({vpcId:`vpc-0a8b9c`,subnet:`10.0.1.0/24`}),N={street:{type:`text`,label:`Street Address`,required:!0,placeholder:`Min. 5 characters`,validate:{minLength:5,maxLength:60}},city:{type:`text`,label:`City`,required:!0,placeholder:`e.g. Surabaya`},postalCode:{type:`text`,label:`Postal Code (5 Digits)`,required:!0,placeholder:`60175`,validate:{pattern:`^\\d{5}$`}}},P={vpcId:{type:`text`,label:`VPC ID`,required:!0},subnet:{type:`text`,label:`Subnet CIDR`,required:!0}},F=[{name:`formData`,type:`Record<string, any>`,required:!0,description:`Reactive state object storing bound values for the nested fields`},{name:`schema`,type:`Schema`,required:!0,description:`Sub-schema dictionary defining child field types, labels, and validation rules`},{name:`errors`,type:`Errors`,required:!0,description:`Reactive error dictionary mapping field paths to validation error messages`},{name:`id`,type:`string`,default:`auto UID`,description:`Unique identifier for the object container`},{name:`label`,type:`string`,description:`Group title displayed above the nested container`},{name:`isUpdate`,type:`boolean`,default:`false`,description:`Whether the parent form is currently in edit/update mode`},{name:`required`,type:`boolean`,default:`false`,description:`Marks the entire sub-object block as mandatory`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks all nested fields in read-only mode`},{name:`tooltip`,type:`string`,description:`Custom guidance text displayed on hover beside the group label`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Placement of the tooltip popover`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon symbol rendered beside the label when tooltip is set`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Active language code for child field messages`}],I=[{name:`update:model-value`,type:`(val: any, key: string) => void`,description:`Emitted when any nested child input value changes`},{name:`push:errors`,type:`(msg: string | string[], key: string) => void`,description:`Emitted when a child field fails validation`},{name:`remove:errors`,type:`(key: string) => void`,description:`Emitted when a child field passes validation and error is cleared`},{name:`selected-option-change`,type:`(val: string | null, key: string) => void`,description:`Emitted when a nested select/dropdown changes single selection`},{name:`multi-selected-change`,type:`(val: string[], key: string) => void`,description:`Emitted when a nested multi-select changes selection`},{name:`create:Options`,type:`(key: string, options: string | number, view: string) => void`,description:`Emitted when dynamically creating a new option within a nested select`}];return(e,r)=>(i(),c(`div`,h,[r[4]||=u(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[u(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` ObjectInput (Nested Schema Object) `),u(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Sub-schema form container that renders a structured nested object with real-time field validation, schema binding, and custom tooltips. `)],-1),a(f,{title:`Nested Object with Live Field Validation`,description:`Renders child fields defined in a sub-schema with real-time input validation (minLength, pattern, and required constraints).`},{code:n(()=>[a(d,{code:w,language:`vue`})]),default:n(()=>[u(`div`,g,[a(s(l),{"form-data":D,label:`Primary Billing Address`,schema:N,errors:O,"onPush:errors":k,"onRemove:errors":A,"onUpdate:modelValue":j},null,8,[`form-data`,`errors`]),u(`div`,_,[r[0]||=u(`span`,{class:`font-semibold text-slate-600 dark:text-slate-400`},`Validation Status:`,-1),Object.keys(O).length===0?(i(),c(`span`,v,` ✓ All nested fields valid `)):(i(),c(`span`,y,` ✕ Errors: `+t(Object.keys(O).join(`, `)),1))]),u(`div`,b,[r[1]||=o(` Bound Object Data: `,-1),u(`pre`,x,t(JSON.stringify(D,null,2)),1)])])]),_:1}),a(f,{title:`With Schema Tooltip & Icon`,description:`Displays contextual guidance beside the group header label.`},{code:n(()=>[a(d,{code:T,language:`vue`})]),default:n(()=>[a(s(l),{"form-data":M,label:`Cloud Infrastructure Metadata`,tooltip:`Enter AWS VPC network segmentation details`,"tooltip-position":`right`,"tooltip-icon":`🌐`,schema:P,errors:{}},null,8,[`form-data`])]),_:1}),a(f,{title:`Disabled Nested Object`,description:`All child fields within the nested group are locked in read-only mode.`},{code:n(()=>[a(d,{code:E,language:`vue`})]),default:n(()=>[a(s(l),{"form-data":D,label:`Archived Address (Read-Only)`,schema:N,errors:{},disabled:``},null,8,[`form-data`])]),_:1}),u(`section`,S,[r[2]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),a(p,{props:F})]),u(`section`,C,[r[3]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),a(m,{events:I})])]))}});export{D as default};