import{Dt as e,Mt as t,Tt as n,_t as r,bt as i,gt as a,ht as o,i as s,kt as c,pt as l,ut as u}from"./index-BhghGzgp.js";import{t as d}from"./CodeBlock-CSGfp_x-.js";import{n as f,t as p}from"./PropsTable-rw53ZQEs.js";import{t as m}from"./EventsTable-BlxUYD03.js";var h={class:`space-y-8`},g={class:`space-y-4`},_={class:`text-xs text-slate-500`},v={class:`p-3 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono mt-1 overflow-x-auto`},y={class:`space-y-4`},b={class:`text-xs text-slate-500`},x={class:`p-3 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono mt-1 overflow-x-auto`},S={class:`space-y-4`},C={class:`space-y-4`},w=`<template>
  <GroupRendererInput
    id="account-type-group"
    :form-data="formData"
    label="Entity Classification"
    type-design="select"
    :options="accountSchemas"
    :options-labels="{ individual: 'Individual Person', corporate: 'Corporate Entity' }"
    :errors="errors"
  />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { GroupRendererInput } from '@zyvnox/vue-pack/components'
import type { Schema } from '@zyvnox/vue-pack/type'

const formData = reactive({ fullName: '', nik: '' })
const errors = reactive({})

const accountSchemas: Record<string, Schema> = {
  individual: {
    fullName: { type: 'text', label: 'Full Name', required: true, validate: { minLength: 3 } },
    nik: { type: 'text', label: 'NIK (16 Digits)', required: true, validate: { pattern: '^\\\\d{16}$' } },
  },
  corporate: {
    companyName: { type: 'text', label: 'Company Name', required: true },
    taxId: { type: 'text', label: 'Tax ID', required: true },
  },
}
<\/script>`,T=`<GroupRendererInput
  id="extensions-group"
  :form-data="extensionData"
  label="Optional Service Add-ons"
  type-design="cekbox"
  :options="addonSchemas"
  :errors="errors"
/>`,E=`<GroupRendererInput
  id="compliance-group"
  :form-data="formData"
  label="Compliance Regulatory Protocol"
  tooltip="Select legal regulatory framework for automated audits"
  tooltip-position="right"
  tooltip-icon="📋"
  type-design="select"
  :options="accountSchemas"
  :errors="{}"
/>`,D=r({__name:`GroupRendererExample`,setup(r){let D=e({nik:`3578012345678901`,fullName:`Budi Santoso`,companyName:`PT Zyvnox Teknologi Nusantara`,taxId:`01.234.567.8-012.000`}),O=e({vatNumber:`ID-991204`,warehouseCode:`WH-SUB-01`}),k=e({}),A=(e,t)=>{k[t]=e},j=e=>{delete k[e]},M=(e,t)=>{D[t]=e},N=(e,t)=>{O[t]=e},P={individual:{fullName:{type:`text`,label:`Full Name`,required:!0,placeholder:`e.g. Budi Santoso`,validate:{minLength:3}},nik:{type:`text`,label:`NIK (16 Digits)`,required:!0,placeholder:`16 digit national ID`,validate:{pattern:`^\\d{16}$`}}},corporate:{companyName:{type:`text`,label:`Registered Company Name`,required:!0,placeholder:`PT Zyvnox Teknologi Nusantara`,validate:{minLength:3}},taxId:{type:`text`,label:`Tax Identification Number (NPWP)`,required:!0,placeholder:`e.g. 01.234.567.8-012.000`}}},F={billing:{vatNumber:{type:`text`,label:`Tax / VAT Number`,required:!0,placeholder:`e.g. ID-991204`,validate:{minLength:4}}},logistics:{warehouseCode:{type:`text`,label:`Warehouse Node Code`,required:!0,placeholder:`e.g. WH-SUB-01`,validate:{minLength:3}}}},I=[{name:`id`,type:`string`,required:!0,description:`Unique identifier for the group renderer component`},{name:`formData`,type:`Record<string, any>`,required:!0,description:`Reactive form data dictionary bound to active sub-schema fields`},{name:`typeDesign`,type:`'select' | 'dropdown' | 'cekbox'`,required:!0,description:`Display style: single select dropdown or multiple checkbox sections`},{name:`options`,type:`Record<string, Schema>`,required:!0,description:`Dictionary of selectable schema configurations mapped by option keys`},{name:`errors`,type:`Errors`,required:!0,description:`Reactive error dictionary for tracking child field validation errors`},{name:`label`,type:`string`,description:`Group label rendered above the selector`},{name:`optionsLabels`,type:`Record<string, string>`,description:`Display labels mapping option keys to human-readable names`},{name:`defaultValue`,type:`string | [string, string]`,description:`Default pre-selected option key(s)`},{name:`isUpdate`,type:`boolean`,default:`false`,description:`Whether the parent form is in edit/update mode`},{name:`required`,type:`boolean`,default:`false`,description:`Requires at least one option to be selected`},{name:`disabled`,type:`boolean`,default:`false`,description:`Disables option selection and locks child fields`},{name:`error`,type:`string`,description:`Group-level error message banner`},{name:`tooltip`,type:`string`,description:`Guidance text displayed beside the label on hover`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Position of the tooltip popover`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon symbol rendered beside the label when tooltip is set`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Active language code`}],L=[{name:`update:model-value`,type:`(value: any, key: string) => void`,description:`Emitted when a child field within an active schema updates`},{name:`push:errors`,type:`(message: string | string[], key: string) => void`,description:`Emitted when a child input fails validation`},{name:`remove:errors`,type:`(key: string) => void`,description:`Emitted when a child input error is resolved`},{name:`selected-option-change`,type:`(val: string | null, key: string) => void`,description:`Emitted when single dropdown option changes`},{name:`multi-selected-change`,type:`(val: string[], key: string) => void`,description:`Emitted when checkbox multi-selection changes`},{name:`create:Options`,type:`(key: string, options: string | number, view: string) => void`,description:`Emitted when creating options inside child select inputs`}];return(e,r)=>(i(),l(`div`,h,[r[4]||=u(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[u(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` GroupRenderer (Conditional Schema Branching) `),u(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Dynamic schema dispatcher that conditionally renders different form sub-schemas based on a selection dropdown or multi-section checkboxes, complete with real-time field-level validation. `)],-1),a(f,{title:`Conditional Schema Dispatcher (Select Mode)`,description:`Select an account type to dynamically reveal and validate specialized sub-schemas with custom pattern validation.`},{code:n(()=>[a(d,{code:w,language:`vue`})]),default:n(()=>[u(`div`,g,[a(c(s),{id:`account-type-group`,"form-data":D,label:`Entity Classification`,"type-design":`select`,options:P,"options-labels":{individual:`Individual Person`,corporate:`Corporate Entity`},errors:k,"onPush:errors":A,"onRemove:errors":j,"onUpdate:modelValue":M},null,8,[`form-data`,`errors`]),u(`div`,_,[r[0]||=o(` Bound Form State: `,-1),u(`pre`,v,t(JSON.stringify(D,null,2)),1)])])]),_:1}),a(f,{title:`Multi-Section Expansion (Checkbox Mode)`,description:`Check one or more sections to activate and validate distinct sub-schemas in parallel.`},{code:n(()=>[a(d,{code:T,language:`vue`})]),default:n(()=>[u(`div`,y,[a(c(s),{id:`extensions-group`,"form-data":O,label:`Optional Service Add-ons`,"type-design":`cekbox`,options:F,"options-labels":{billing:`Tax Invoice Details`,logistics:`Logistics Warehouse`},errors:k,"onPush:errors":A,"onRemove:errors":j,"onUpdate:modelValue":N},null,8,[`form-data`,`errors`]),u(`div`,b,[r[1]||=o(` Bound Extension State: `,-1),u(`pre`,x,t(JSON.stringify(O,null,2)),1)])])]),_:1}),a(f,{title:`With Schema Tooltip`,description:`Displays guidance beside the section selector label.`},{code:n(()=>[a(d,{code:E,language:`vue`})]),default:n(()=>[a(c(s),{id:`compliance-group`,"form-data":D,label:`Compliance Regulatory Protocol`,tooltip:`Select your legal regulatory framework for automated ISO/SOC2 audits`,"tooltip-position":`right`,"tooltip-icon":`📋`,"type-design":`select`,options:P,errors:{}},null,8,[`form-data`])]),_:1}),u(`section`,S,[r[2]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),a(p,{props:I})]),u(`section`,C,[r[3]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),a(m,{events:L})])]))}});export{D as default};