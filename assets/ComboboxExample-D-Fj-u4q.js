import{M as e,O as t,U as n,c as r,d as i,g as a,h as o,m as s,mt as c,q as l,t as u,z as d}from"./i18n-CQHTY6ci.js";import{s as f}from"./indexedDB-DBV1IhUh.js";import{t as p}from"./CodeBlock-Cjmxf9F4.js";import{n as m,t as h}from"./PropsTable-Dv1x2aJC.js";import{t as g}from"./EventsTable-D-LMtD8H.js";var _={class:`space-y-8`},v={class:`text-xs text-slate-500`},y={class:`font-mono font-bold`},b={class:`text-xs text-slate-500`},x={class:`font-mono font-bold`},S={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},C={class:`space-y-4`},w={class:`space-y-4`},T=`<template>
  <SelectedOptions
    v-model="dept"
    label="Department"
    :options="['Engineering', 'Design', 'Marketing']"
    :options-view="['Engineering', 'Design', 'Marketing']"
    placeholder="Select department..."
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SelectedOptions } from '@zyvnox/vue-pack/components'

const dept = ref('')
<\/script>`,E=`<SelectedOptions
  v-model="clearance"
  label="Access Level"
  tooltip="Select minimum security clearance"
  tooltip-position="right"
  :options="['read', 'write', 'admin', 'owner']"
  :options-view="['Read-Only (Viewer)', 'Standard Write (Editor)', 'Administrator', 'Organization Owner']"
/>`,D=`<SelectedOptions
  v-model="region"
  label="Server Region"
  :options="['us-east-1', 'eu-west-1']"
  :options-view="['us-east-1', 'eu-west-1']"
  required
  error="Please select a hosting region"
/>
<SelectedOptions
  v-model="currency"
  label="Default Billing Currency"
  :options="['USD', 'EUR']"
  :options-view="['USD', 'EUR']"
  disabled
/>`,O=a({__name:`ComboboxExample`,setup(a){let{isIndonesian:O,currentLocale:k}=u(),A=n(``),j=n(`read`),M=n(``),N=n(`USD`),P=[`Engineering`,`Product Design`,`Marketing`,`Human Resources`,`Finance & Legal`,`Customer Support`],F=[{name:`modelValue`,type:`string | number | null`,required:!0,description:`Reactive selected value v-model`},{name:`label`,type:`string`,required:!0,description:`Dropdown title label`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`options`,type:`(string | number)[]`,required:!0,description:`Array of option keys or stored values`},{name:`optionsView`,type:`(string | number)[]`,required:!0,description:`Array of human-readable display labels mapped index-to-index with options`},{name:`optionsIsNumber`,type:`boolean`,default:`false`,description:`Casts option values to numeric types`},{name:`placeholder`,type:`string`,description:`Placeholder search hint text`},{name:`withCreate`,type:`{ DB_NAME?: string, schema: Schema, endPoint: string, validation?: Record<string, any>, submitOption?: SubmitAuthOptionMap<Item>, keys?: { optionsKey: string, optionsViewKey: string } }`,description:`Enables dynamic item creation dialog modal directly inside dropdown menu.`},{name:`demo`,type:`boolean`,default:`false`,description:`Enables client-side mock creation using IndexedDB storage`},{name:`required`,type:`boolean`,default:`false`,description:`Displays required asterisk indicator`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks combobox menu and disables selection`},{name:`error`,type:`string`,description:`External validation error message from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code`}],I=[{name:`update:modelValue`,type:`(value: string | number | null, id: string) => void`,description:`Emitted upon option selection`},{name:`create:Options`,type:`(key: string, option: string | number, view: string) => void`,description:`Emitted when a new option item is dynamically created via withCreate modal`}];return(n,a)=>{let u=e(`DocHeader`);return t(),i(`div`,_,[o(u),o(m,{title:`Basic Searchable Select`,description:`Select from a list of predefined options with instant filtering.`},{code:d(()=>[o(p,{code:T,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:A.value,"onUpdate:modelValue":a[0]||=e=>A.value=e,label:l(O)?`Departemen`:`Department`,options:P,"options-view":P,placeholder:l(O)?`Pilih departemen...`:`Select department...`,lang:l(k)},null,8,[`modelValue`,`label`,`placeholder`,`lang`]),r(`div`,v,[s(c(l(O)?`Nilai Terpilih:`:`Selected Value:`)+` `,1),r(`code`,y,c(A.value||(l(O)?`(tidak ada)`:`(none)`)),1)])]),_:1}),o(m,{title:`With Tooltip & Custom Key/Label Mappings`,description:`Maps internal keys to user-friendly display labels with tooltip guidance.`},{code:d(()=>[o(p,{code:E,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:j.value,"onUpdate:modelValue":a[1]||=e=>j.value=e,label:l(O)?`Tingkat Akses`:`Access Level`,tooltip:l(O)?`Pilih izin keamanan minimal yang diperlukan untuk peran ini`:`Select minimum security clearance required for this role`,"tooltip-position":`right`,options:[`read`,`write`,`admin`,`owner`],"options-view":l(O)?[`Hanya-Baca (Viewer)`,`Tulis Standar (Editor)`,`Administrator`,`Pemilik Organisasi`]:[`Read-Only (Viewer)`,`Standard Write (Editor)`,`Administrator`,`Organization Owner`],placeholder:l(O)?`Pilih izin akses...`:`Choose clearance...`,lang:l(k)},null,8,[`modelValue`,`label`,`tooltip`,`options-view`,`placeholder`,`lang`]),r(`div`,b,[s(c(l(O)?`Kunci Terpilih:`:`Selected Key:`)+` `,1),r(`code`,x,c(j.value||(l(O)?`(tidak ada)`:`(none)`)),1)])]),_:1}),o(m,{title:`External Error & Disabled States`,description:`Visual invalid feedback and locked selection menus.`},{code:d(()=>[o(p,{code:D,language:`vue`})]),default:d(()=>[r(`div`,S,[o(l(f),{modelValue:M.value,"onUpdate:modelValue":a[2]||=e=>M.value=e,label:l(O)?`Wilayah Server`:`Server Region`,options:[`us-east-1`,`eu-west-1`,`ap-southeast-1`],"options-view":[`us-east-1`,`eu-west-1`,`ap-southeast-1`],required:``,error:l(O)?`Silakan pilih wilayah hosting`:`Please select a hosting region`,lang:l(k)},null,8,[`modelValue`,`label`,`error`,`lang`]),o(l(f),{modelValue:N.value,"onUpdate:modelValue":a[3]||=e=>N.value=e,label:l(O)?`Mata Uang Penagihan Default (Hanya-Baca)`:`Default Billing Currency (Read-Only)`,options:[`USD`,`EUR`,`IDR`],"options-view":[`USD`,`EUR`,`IDR`],disabled:``,lang:l(k)},null,8,[`modelValue`,`label`,`lang`])])]),_:1}),r(`section`,C,[o(h,{props:F})]),r(`section`,w,[o(g,{events:I})])])}}});export{O as default};