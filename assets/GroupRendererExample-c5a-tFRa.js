import{H as e,M as t,O as n,c as r,d as i,g as a,h as o,m as s,mt as c,q as l,s as u,t as d,z as f}from"./i18n-CQHTY6ci.js";import{o as p}from"./indexedDB-DBV1IhUh.js";import{t as m}from"./CodeBlock-Cjmxf9F4.js";import{n as h,t as g}from"./PropsTable-Dv1x2aJC.js";import{t as _}from"./EventsTable-D-LMtD8H.js";var v={class:`space-y-8`},y={class:`space-y-4`},b={class:`text-xs text-slate-500`},x={class:`p-3 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono mt-1 overflow-x-auto`},S={class:`space-y-4`},C={class:`text-xs text-slate-500`},w={class:`p-3 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono mt-1 overflow-x-auto`},T={class:`space-y-4`},E={class:`space-y-4`},D=`<template>
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
<\/script>`,O=`<GroupRendererInput
  id="extensions-group"
  :form-data="extensionData"
  label="Optional Service Add-ons"
  type-design="cekbox"
  :options="addonSchemas"
  :errors="errors"
/>`,k=`<GroupRendererInput
  id="compliance-group"
  :form-data="formData"
  label="Compliance Regulatory Protocol"
  tooltip="Select legal regulatory framework for automated audits"
  tooltip-position="right"
  tooltip-icon="📋"
  type-design="select"
  :options="accountSchemas"
  :errors="{}"
/>`,A=a({__name:`GroupRendererExample`,setup(a){let{isIndonesian:A,currentLocale:j}=d(),M=e({nik:`3578012345678901`,fullName:`Budi Santoso`,companyName:`PT Zyvnox Teknologi Nusantara`,taxId:`01.234.567.8-012.000`}),N=e({vatNumber:`ID-991204`,warehouseCode:`WH-SUB-01`}),P=e({}),F=(e,t)=>{P[t]=e},I=e=>{delete P[e]},L=(e,t)=>{M[t]=e},R=(e,t)=>{N[t]=e},z=u(()=>({individual:{fullName:{type:`text`,label:A.value?`Nama Lengkap`:`Full Name`,required:!0,placeholder:A.value?`cth. Budi Santoso`:`e.g. Budi Santoso`,validate:{minLength:3}},nik:{type:`text`,label:A.value?`NIK (16 Digit)`:`NIK (16 Digits)`,required:!0,placeholder:A.value?`16 digit NIK kependudukan`:`16 digit national ID`,validate:{pattern:`^\\d{16}$`}}},corporate:{companyName:{type:`text`,label:A.value?`Nama Perusahaan Terdaftar`:`Registered Company Name`,required:!0,placeholder:`PT Zyvnox Teknologi Nusantara`,validate:{minLength:3}},taxId:{type:`text`,label:A.value?`Nomor Pokok Wajib Pajak (NPWP)`:`Tax Identification Number (NPWP)`,required:!0,placeholder:A.value?`cth. 01.234.567.8-012.000`:`e.g. 01.234.567.8-012.000`}}})),B=u(()=>({billing:{vatNumber:{type:`text`,label:A.value?`Nomor Pajak / PPN`:`Tax / VAT Number`,required:!0,placeholder:A.value?`cth. ID-991204`:`e.g. ID-991204`,validate:{minLength:4}}},logistics:{warehouseCode:{type:`text`,label:A.value?`Kode Node Gudang`:`Warehouse Node Code`,required:!0,placeholder:A.value?`cth. WH-SUB-01`:`e.g. WH-SUB-01`,validate:{minLength:3}}}})),V=[{name:`id`,type:`string`,required:!0,description:`Unique identifier for the group renderer component`},{name:`formData`,type:`Record<string, any>`,required:!0,description:`Reactive form data dictionary bound to active sub-schema fields`},{name:`typeDesign`,type:`'select' | 'dropdown' | 'cekbox'`,required:!0,description:`Display style: single select dropdown or multiple checkbox sections`},{name:`options`,type:`Record<string, Schema>`,required:!0,description:`Dictionary of selectable schema configurations mapped by option keys`},{name:`errors`,type:`Errors`,required:!0,description:`Reactive error dictionary for tracking child field validation errors`},{name:`label`,type:`string`,description:`Group label rendered above the selector`},{name:`optionsLabels`,type:`Record<string, string>`,description:`Display labels mapping option keys to human-readable names`},{name:`defaultValue`,type:`string | [string, string]`,description:`Default pre-selected option key(s)`},{name:`isUpdate`,type:`boolean`,default:`false`,description:`Whether the parent form is in edit/update mode`},{name:`required`,type:`boolean`,default:`false`,description:`Requires at least one option to be selected`},{name:`disabled`,type:`boolean`,default:`false`,description:`Disables option selection and locks child fields`},{name:`error`,type:`string`,description:`Group-level error message banner`},{name:`tooltip`,type:`string`,description:`Guidance text displayed beside the label on hover`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Position of the tooltip popover`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon symbol rendered beside the label when tooltip is set`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Active language code`}],H=[{name:`update:model-value`,type:`(value: any, key: string) => void`,description:`Emitted when a child field within an active schema updates`},{name:`push:errors`,type:`(message: string | string[], key: string) => void`,description:`Emitted when a child input fails validation`},{name:`remove:errors`,type:`(key: string) => void`,description:`Emitted when a child input error is resolved`},{name:`selected-option-change`,type:`(val: string | null, key: string) => void`,description:`Emitted when single dropdown option changes`},{name:`multi-selected-change`,type:`(val: string[], key: string) => void`,description:`Emitted when checkbox multi-selection changes`},{name:`create:Options`,type:`(key: string, options: string | number, view: string) => void`,description:`Emitted when creating options inside child select inputs`}];return(e,a)=>{let u=t(`DocHeader`);return n(),i(`div`,v,[o(u),o(h,{title:`Conditional Schema Dispatcher (Select Mode)`,description:`Select an account type to dynamically reveal and validate specialized sub-schemas with custom pattern validation.`},{code:f(()=>[o(m,{code:D,language:`vue`})]),default:f(()=>[r(`div`,y,[o(l(p),{id:`account-type-group`,"form-data":M,label:l(A)?`Klasifikasi Entitas`:`Entity Classification`,"type-design":`select`,options:z.value,"options-labels":l(A)?{individual:`Individu / Perorangan`,corporate:`Entitas Perusahaan`}:{individual:`Individual Person`,corporate:`Corporate Entity`},errors:P,lang:l(j),"onPush:errors":F,"onRemove:errors":I,"onUpdate:modelValue":L},null,8,[`form-data`,`label`,`options`,`options-labels`,`errors`,`lang`]),r(`div`,b,[s(c(l(A)?`Status Formulir Terikat:`:`Bound Form State:`)+` `,1),r(`pre`,x,c(JSON.stringify(M,null,2)),1)])])]),_:1}),o(h,{title:`Multi-Section Expansion (Checkbox Mode)`,description:`Check one or more sections to activate and validate distinct sub-schemas in parallel.`},{code:f(()=>[o(m,{code:O,language:`vue`})]),default:f(()=>[r(`div`,S,[o(l(p),{id:`extensions-group`,"form-data":N,label:l(A)?`Layanan Tambahan Opsional`:`Optional Service Add-ons`,"type-design":`cekbox`,options:B.value,"options-labels":l(A)?{billing:`Rincian Faktur Pajak`,logistics:`Gudang Logistik`}:{billing:`Tax Invoice Details`,logistics:`Logistics Warehouse`},errors:P,lang:l(j),"onPush:errors":F,"onRemove:errors":I,"onUpdate:modelValue":R},null,8,[`form-data`,`label`,`options`,`options-labels`,`errors`,`lang`]),r(`div`,C,[s(c(l(A)?`Status Ekstensi Terikat:`:`Bound Extension State:`)+` `,1),r(`pre`,w,c(JSON.stringify(N,null,2)),1)])])]),_:1}),o(h,{title:`With Schema Tooltip`,description:`Displays guidance beside the section selector label.`},{code:f(()=>[o(m,{code:k,language:`vue`})]),default:f(()=>[o(l(p),{id:`compliance-group`,"form-data":M,label:l(A)?`Protokol Kepatuhan Regulasi`:`Compliance Regulatory Protocol`,tooltip:l(A)?`Pilih kerangka regulasi hukum Anda untuk audit ISO/SOC2 otomatis`:`Select your legal regulatory framework for automated ISO/SOC2 audits`,"tooltip-position":`right`,"tooltip-icon":`📋`,"type-design":`select`,options:z.value,"options-labels":l(A)?{individual:`Individu / Perorangan`,corporate:`Entitas Perusahaan`}:{individual:`Individual Person`,corporate:`Corporate Entity`},errors:{},lang:l(j)},null,8,[`form-data`,`label`,`tooltip`,`options`,`options-labels`,`lang`])]),_:1}),r(`section`,T,[o(g,{props:V})]),r(`section`,E,[o(_,{events:H})])])}}});export{A as default};