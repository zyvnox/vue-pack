import{M as e,Mt as t,Ot as n,Tt as r,_t as i,bt as a,gt as o,ht as s,kt as c,pt as l,ut as u}from"./index-BhghGzgp.js";import{t as d}from"./CodeBlock-CSGfp_x-.js";import{n as f,t as p}from"./PropsTable-rw53ZQEs.js";import{t as m}from"./EventsTable-BlxUYD03.js";var h={class:`space-y-8`},g={class:`text-xs text-slate-500`},_={class:`font-mono font-bold`},v={class:`text-xs text-slate-500`},y={class:`font-mono font-bold`},b={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},x={class:`space-y-4`},S={class:`space-y-4`},C=`<template>
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
<\/script>`,w=`<SelectedOptions
  v-model="clearance"
  label="Access Level"
  tooltip="Select minimum security clearance"
  tooltip-position="right"
  :options="['read', 'write', 'admin', 'owner']"
  :options-view="['Read-Only (Viewer)', 'Standard Write (Editor)', 'Administrator', 'Organization Owner']"
/>`,T=`<SelectedOptions
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
/>`,E=i({__name:`ComboboxExample`,setup(i){let E=n(``),D=n(`read`),O=n(``),k=n(`USD`),A=[`Engineering`,`Product Design`,`Marketing`,`Human Resources`,`Finance & Legal`,`Customer Support`],j=[{name:`modelValue`,type:`string | number | null`,required:!0,description:`Reactive selected value v-model`},{name:`label`,type:`string`,required:!0,description:`Dropdown title label`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`options`,type:`(string | number)[]`,required:!0,description:`Array of option keys or stored values`},{name:`optionsView`,type:`(string | number)[]`,required:!0,description:`Array of human-readable display labels mapped index-to-index with options`},{name:`optionsIsNumber`,type:`boolean`,default:`false`,description:`Casts option values to numeric types`},{name:`placeholder`,type:`string`,description:`Placeholder search hint text`},{name:`withCreate`,type:`{ DB_NAME?: string, schema: Schema, endPoint: string, validation?: Record<string, any>, submitOption?: SubmitAuthOptionMap<Item>, keys?: { optionsKey: string, optionsViewKey: string } }`,description:`Enables dynamic item creation dialog modal directly inside dropdown menu.`},{name:`demo`,type:`boolean`,default:`false`,description:`Enables client-side mock creation using IndexedDB storage`},{name:`required`,type:`boolean`,default:`false`,description:`Displays required asterisk indicator`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks combobox menu and disables selection`},{name:`error`,type:`string`,description:`External validation error message from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code`}],M=[{name:`update:modelValue`,type:`(value: string | number | null, id: string) => void`,description:`Emitted upon option selection`},{name:`create:Options`,type:`(key: string, option: string | number, view: string) => void`,description:`Emitted when a new option item is dynamically created via withCreate modal`}];return(n,i)=>(a(),l(`div`,h,[i[8]||=u(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[u(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` SelectedOptions (Searchable Combobox) `),u(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`}," Searchable dropdown selection component with custom key/label option mapping, dynamic inline modal item creation (`withCreate`), custom tooltips, and i18n support. ")],-1),o(f,{title:`Basic Searchable Select`,description:`Select from a list of predefined options with instant filtering.`},{code:r(()=>[o(d,{code:C,language:`vue`})]),default:r(()=>[o(c(e),{modelValue:E.value,"onUpdate:modelValue":i[0]||=e=>E.value=e,label:`Department`,options:A,"options-view":A,placeholder:`Select department...`},null,8,[`modelValue`]),u(`div`,g,[i[4]||=s(` Selected Value: `,-1),u(`code`,_,t(E.value||`(none)`),1)])]),_:1}),o(f,{title:`With Tooltip & Custom Key/Label Mappings`,description:`Maps internal keys to user-friendly display labels with tooltip guidance.`},{code:r(()=>[o(d,{code:w,language:`vue`})]),default:r(()=>[o(c(e),{modelValue:D.value,"onUpdate:modelValue":i[1]||=e=>D.value=e,label:`Access Level`,tooltip:`Select minimum security clearance required for this role`,"tooltip-position":`right`,options:[`read`,`write`,`admin`,`owner`],"options-view":[`Read-Only (Viewer)`,`Standard Write (Editor)`,`Administrator`,`Organization Owner`],placeholder:`Choose clearance...`},null,8,[`modelValue`]),u(`div`,v,[i[5]||=s(` Selected Key: `,-1),u(`code`,y,t(D.value||`(none)`),1)])]),_:1}),o(f,{title:`External Error & Disabled States`,description:`Visual invalid feedback and locked selection menus.`},{code:r(()=>[o(d,{code:T,language:`vue`})]),default:r(()=>[u(`div`,b,[o(c(e),{modelValue:O.value,"onUpdate:modelValue":i[2]||=e=>O.value=e,label:`Server Region`,options:[`us-east-1`,`eu-west-1`,`ap-southeast-1`],"options-view":[`us-east-1`,`eu-west-1`,`ap-southeast-1`],required:``,error:`Please select a hosting region`},null,8,[`modelValue`]),o(c(e),{modelValue:k.value,"onUpdate:modelValue":i[3]||=e=>k.value=e,label:`Default Billing Currency (Read-Only)`,options:[`USD`,`EUR`,`IDR`],"options-view":[`USD`,`EUR`,`IDR`],disabled:``},null,8,[`modelValue`])])]),_:1}),u(`section`,x,[i[6]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),o(p,{props:j})]),u(`section`,S,[i[7]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),o(m,{events:M})])]))}});export{E as default};