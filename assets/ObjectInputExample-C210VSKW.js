import{H as e,M as t,O as n,c as r,d as i,g as a,h as o,m as s,mt as c,q as l,s as u,t as d,z as f}from"./i18n-CQHTY6ci.js";import{a as p}from"./indexedDB-DBV1IhUh.js";import{t as m}from"./CodeBlock-Cjmxf9F4.js";import{n as h,t as g}from"./PropsTable-Dv1x2aJC.js";import{t as _}from"./EventsTable-D-LMtD8H.js";var v={class:`space-y-8`},y={class:`space-y-4`},b={class:`flex flex-wrap items-center gap-3 text-xs`},x={class:`font-semibold text-slate-600 dark:text-slate-400`},S={key:0,class:`px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-medium`},C={key:1,class:`px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 font-medium`},w={class:`text-xs text-slate-500`},T={class:`p-3 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono mt-1 overflow-x-auto`},E={class:`space-y-4`},D={class:`space-y-4`},O=`<template>
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
<\/script>`,k=`<ObjectInput
  :form-data="metadata"
  label="Cloud Infrastructure Metadata"
  tooltip="Enter AWS VPC network segmentation details"
  tooltip-position="right"
  tooltip-icon="🌐"
  :schema="metadataSchema"
  :errors="{}"
/>`,A=`<ObjectInput
  :form-data="address"
  label="Archived Address (Read-Only)"
  :schema="addressSchema"
  :errors="{}"
  disabled
/>`,j=a({__name:`ObjectInputExample`,setup(a){let{isIndonesian:j,currentLocale:M}=d(),N=e({street:`123 Enterprise Blvd`,city:`Surabaya`,postalCode:`60175`}),P=e({}),F=(e,t)=>{P[t]=e},I=e=>{delete P[e]},L=(e,t)=>{let n=t.split(`.`),r=n[n.length-1];N[r]=e},R=e({vpcId:`vpc-0a8b9c`,subnet:`10.0.1.0/24`}),z=u(()=>({street:{type:`text`,label:j.value?`Alamat Jalan`:`Street Address`,required:!0,placeholder:j.value?`Min. 5 karakter`:`Min. 5 characters`,validate:{minLength:5,maxLength:60}},city:{type:`text`,label:j.value?`Kota`:`City`,required:!0,placeholder:j.value?`contoh: Surabaya`:`e.g. Surabaya`},postalCode:{type:`text`,label:j.value?`Kode Pos (5 Digit)`:`Postal Code (5 Digits)`,required:!0,placeholder:`60175`,validate:{pattern:`^\\d{5}$`}}})),B=u(()=>({vpcId:{type:`text`,label:j.value?`ID VPC`:`VPC ID`,required:!0},subnet:{type:`text`,label:j.value?`Blok Subnet CIDR`:`Subnet CIDR`,required:!0}})),V=[{name:`formData`,type:`Record<string, any>`,required:!0,description:`Reactive state object storing bound values for the nested fields`},{name:`schema`,type:`Schema`,required:!0,description:`Sub-schema dictionary defining child field types, labels, and validation rules`},{name:`errors`,type:`Errors`,required:!0,description:`Reactive error dictionary mapping field paths to validation error messages`},{name:`id`,type:`string`,default:`auto UID`,description:`Unique identifier for the object container`},{name:`label`,type:`string`,description:`Group title displayed above the nested container`},{name:`isUpdate`,type:`boolean`,default:`false`,description:`Whether the parent form is currently in edit/update mode`},{name:`required`,type:`boolean`,default:`false`,description:`Marks the entire sub-object block as mandatory`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks all nested fields in read-only mode`},{name:`tooltip`,type:`string`,description:`Custom guidance text displayed on hover beside the group label`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Placement of the tooltip popover`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon symbol rendered beside the label when tooltip is set`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Active language code for child field messages`}],H=[{name:`update:model-value`,type:`(val: any, key: string) => void`,description:`Emitted when any nested child input value changes`},{name:`push:errors`,type:`(msg: string | string[], key: string) => void`,description:`Emitted when a child field fails validation`},{name:`remove:errors`,type:`(key: string) => void`,description:`Emitted when a child field passes validation and error is cleared`},{name:`selected-option-change`,type:`(val: string | null, key: string) => void`,description:`Emitted when a nested select/dropdown changes single selection`},{name:`multi-selected-change`,type:`(val: string[], key: string) => void`,description:`Emitted when a nested multi-select changes selection`},{name:`create:Options`,type:`(key: string, options: string | number, view: string) => void`,description:`Emitted when dynamically creating a new option within a nested select`}];return(e,a)=>{let u=t(`DocHeader`);return n(),i(`div`,v,[o(u),o(h,{title:`Nested Object with Live Field Validation`,description:`Renders child fields defined in a sub-schema with real-time input validation (minLength, pattern, and required constraints).`},{code:f(()=>[o(m,{code:O,language:`vue`})]),default:f(()=>[r(`div`,y,[o(l(p),{"form-data":N,label:l(j)?`Alamat Penagihan Utama`:`Primary Billing Address`,schema:z.value,errors:P,lang:l(M),"onPush:errors":F,"onRemove:errors":I,"onUpdate:modelValue":L},null,8,[`form-data`,`label`,`schema`,`errors`,`lang`]),r(`div`,b,[r(`span`,x,c(l(j)?`Status Validasi:`:`Validation Status:`),1),Object.keys(P).length===0?(n(),i(`span`,S,c(l(j)?`✓ Semua field bersarang valid`:`✓ All nested fields valid`),1)):(n(),i(`span`,C,c(l(j)?`✕ Kesalahan:`:`✕ Errors:`)+` `+c(Object.keys(P).join(`, `)),1))]),r(`div`,w,[s(c(l(j)?`Data Objek Terikat:`:`Bound Object Data:`)+` `,1),r(`pre`,T,c(JSON.stringify(N,null,2)),1)])])]),_:1}),o(h,{title:`With Schema Tooltip & Icon`,description:`Displays contextual guidance beside the group header label.`},{code:f(()=>[o(m,{code:k,language:`vue`})]),default:f(()=>[o(l(p),{"form-data":R,label:l(j)?`Metadata Infrastruktur Cloud`:`Cloud Infrastructure Metadata`,tooltip:l(j)?`Masukkan rincian segmentasi jaringan AWS VPC`:`Enter AWS VPC network segmentation details`,"tooltip-position":`right`,"tooltip-icon":`🌐`,schema:B.value,errors:{},lang:l(M)},null,8,[`form-data`,`label`,`tooltip`,`schema`,`lang`])]),_:1}),o(h,{title:`Disabled Nested Object`,description:`All child fields within the nested group are locked in read-only mode.`},{code:f(()=>[o(m,{code:A,language:`vue`})]),default:f(()=>[o(l(p),{"form-data":N,label:l(j)?`Alamat Terarsip (Hanya-Baca)`:`Archived Address (Read-Only)`,schema:z.value,errors:{},disabled:``,lang:l(M)},null,8,[`form-data`,`label`,`schema`,`lang`])]),_:1}),r(`section`,E,[o(g,{props:V})]),r(`section`,D,[o(_,{events:H})])])}}});export{j as default};