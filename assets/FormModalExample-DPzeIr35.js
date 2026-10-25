import{Mt as e,N as t,Ot as n,Tt as r,_t as i,bt as a,dt as o,ft as s,gt as c,kt as l,mt as u,pt as d,ut as f}from"./index-BhghGzgp.js";import{t as p}from"./CodeBlock-CSGfp_x-.js";import{n as m,t as h}from"./PropsTable-rw53ZQEs.js";import{t as g}from"./EventsTable-BlxUYD03.js";var _={class:`space-y-8`},v={class:`flex items-center gap-4`},y={key:0,class:`text-xs text-emerald-600 dark:text-emerald-400 font-medium`},b={class:`flex items-center gap-4`},x={key:0,class:`text-xs text-amber-600 dark:text-amber-400 font-medium`},S={class:`flex items-center gap-4`},C={key:0,class:`text-xs text-indigo-600 dark:text-indigo-400 font-medium`},w={class:`space-y-4`},T={class:`space-y-4`},E=`<template>
  <button @click="show = true">Open Validated Form Modal</button>

  <FormModal
    v-if="show"
    :schema="formSchema"
    :is-update="false"
    lang="en"
    @cancel="show = false"
    @submit="handleSubmit"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FormModal } from '@zyvnox/vue-pack/components'
import type { Schema } from '@zyvnox/vue-pack/type'

const show = ref(false)

const formSchema: Schema = {
  fullName: {
    type: 'text',
    label: 'Full Name',
    required: true,
    validate: { minLength: 3, maxLength: 50 },
  },
  email: {
    type: 'email',
    label: 'Corporate Email',
    required: true,
    validate: { duplicate: ['admin@zyvnox.com'] },
  },
  salary: {
    type: 'currency',
    label: 'Monthly Salary',
    required: true,
    validate: { min: 3000000 },
  },
}

const handleSubmit = (data: any) => {
  console.log('Valid Form Data:', data)
  show.value = false
}
<\/script>`,D=`<FormModal
  :id="101"
  :schema="formSchema"
  :initial-data="{ fullName: 'Sarah Connor', salary: 15000000 }"
  :is-update="true"
  @cancel="show = false"
  @submit="onUpdate"
/>`,O=`<FormModal
  :schema="seoSchema"
  :seo="{ content: { title: 'title', slug: 'slug', description: 'metaDescription' } }"
  @submit="onSave"
/>`,k=i({__name:`FormModalExample`,setup(i){let k=n(!1),A=n(!1),j=n(!1),M=n(null),N=n(null),P=n(null),F={fullName:{type:`text`,label:`Employee Full Name`,placeholder:`Min. 3 characters`,required:!0,tooltip:`Enter full legal name as per ID card`,tooltipPosition:`right`,validate:{minLength:3,maxLength:50}},email:{type:`email`,label:`Corporate Email`,placeholder:`name@zyvnox.com`,required:!0,validate:{duplicate:[`admin@zyvnox.com`,`root@zyvnox.com`]}},role:{type:`select`,label:`Department Role`,options:[`Software Engineer`,`UI/UX Designer`,`Product Manager`,`QA Specialist`],required:!0},salary:{type:`currency`,label:`Monthly Salary`,required:!0,validate:{min:3e6}}},I={fullName:`Sarah Connor`,email:`sarah.c@zyvnox.com`,role:`Software Engineer`,salary:15e6},L={title:{type:`text`,label:`Article Title`,required:!0,placeholder:`e.g. Modern Frontend Architecture with Vue Pack`,validate:{minLength:10,maxLength:70}},slug:{type:`text`,label:`URL Slug`,required:!0,placeholder:`e.g. modern-frontend-architecture`,validate:{pattern:`^[a-z0-9-]+$`}},metaDescription:{type:`textArea`,label:`Meta Description`,required:!0,placeholder:`Recommended 120-160 characters for SEO search snippets`,validate:{minLength:50,maxLength:160}}},R={contentType:`article`,meta:{title:`title`,slug:`slug`,description:`metaDescription`}},z=e=>{M.value=e,k.value=!1},B=e=>{N.value=e,A.value=!1},V=e=>{P.value=e,j.value=!1},H=[{name:`schema`,type:`Schema`,required:!0,description:`Declarative schema object specifying fields, types, and input validation rules`},{name:`isUpdate`,type:`boolean`,default:`false`,description:`Toggles between Create and Update modal headers, icons, and submit button labels`},{name:`initialData`,type:`Partial<T>`,default:`{}`,description:`Pre-populated initial values used to populate fields when editing records`},{name:`id`,type:`number | string | null`,description:`ID of the record currently being updated`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Active language code for buttons, labels, and validation error messages`},{name:`seo`,type:`SeoFieldMapping`,description:`Mapping configuration that activates real-time SEO score calculation and audit reports`},{name:`demo`,type:`boolean`,default:`false`,description:`Offline demo mode flag passed down to child inputs and image uploaders`}],U=[{name:`submit`,type:`(value: Record<string, any>) => void`,description:`Emitted when all fields pass validation and the user clicks Submit/Save`},{name:`cancel`,type:`() => void`,description:`Emitted when the modal is closed or user clicks Cancel`},{name:`DataChildRemove`,type:`(value: number[]) => void`,description:`Emitted when child array records are marked for deletion`},{name:`create:Options`,type:`(key: string, options: string | number, view: string) => void`,description:`Emitted when a new option is dynamically created in a child Combobox`}];return(n,i)=>(a(),d(`div`,_,[i[8]||=u(`<header class="border-b border-slate-200 dark:border-slate-800 pb-4"><h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2"> FormModal </h1><p class="text-sm text-slate-600 dark:text-slate-400"> Enterprise schema-driven modal form generator featuring real-time input validation, required field enforcement, automatic SEO scoring, and seamless integration with TabelData CRUD operations. </p></header><div class="p-4 rounded-xl border border-blue-200 bg-blue-50/70 dark:border-blue-800 dark:bg-blue-900/20 text-xs text-blue-800 dark:text-blue-200 space-y-2"><div class="flex items-center gap-2 font-bold text-sm text-blue-900 dark:text-blue-100"><span>🔗 Architecture: How FormModal &amp; TabelData Connect via Validation</span></div><p><code class="font-bold">FormModal</code> acts as the interactive dialog engine inside <code class="font-bold">TabelData</code>. Validation operates in two collaborative layers: </p><ul class="list-disc list-inside space-y-1 ml-2"><li><strong>Layer 1 (FormModal &amp; Inputs):</strong> When editing or adding records, <code class="font-bold">FormModal</code> renders fields via <code class="font-bold">FormFieldRenderer</code>, passing each field&#39;s <code class="font-mono">:validate</code> configuration (e.g. <code class="font-mono">minLength</code>, <code class="font-mono">pattern</code>, <code class="font-mono">min</code>, <code class="font-mono">max</code>). Child inputs emit real-time validation errors to block invalid submissions. </li><li><strong>Layer 2 (TabelData &amp; Zod Schema):</strong> Upon clicking Submit in <code class="font-bold">FormModal</code>, valid data is emitted via <code class="font-mono">@submit</code> to <code class="font-bold">TabelData</code>&#39;s <code class="font-mono">submitFormData</code> pipeline. <code class="font-bold">TabelData</code> runs final type-safe pipeline validation against <code class="font-mono">props.validation.create</code> or <code class="font-mono">props.validation.update</code> (Zod schemas) before persisting to IndexedDB or transmitting to remote endpoints. </li></ul></div>`,2),c(m,{title:`Interactive Form with Real-Time Field Validation`,description:`Opens a modal generated from a schema with active validation constraints (minLength, email blacklist, currency min, integer bounds).`},{code:r(()=>[c(p,{code:E,language:`vue`})]),default:r(()=>[f(`div`,v,[f(`button`,{type:`button`,onClick:i[0]||=e=>k.value=!0,class:`px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors`},` Open Validated Form Modal `),M.value?(a(),d(`span`,y,` ✓ Submitted: `+e(M.value.fullName)+` (`+e(M.value.role)+`) - `+e(M.value.email),1)):s(``,!0)]),k.value?(a(),o(l(t),{key:0,schema:F,"is-update":!1,lang:`en`,onCancel:i[1]||=e=>k.value=!1,onSubmit:z})):s(``,!0)]),_:1}),c(m,{title:`Update Mode (Pre-populated Data)`,description:`Pre-populates fields with existing record data and switches title/buttons to update mode.`},{code:r(()=>[c(p,{code:D,language:`vue`})]),default:r(()=>[f(`div`,b,[f(`button`,{type:`button`,onClick:i[2]||=e=>A.value=!0,class:`px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors`},` Edit Existing Employee Record `),N.value?(a(),d(`span`,x,` ✓ Updated: `+e(N.value.fullName)+` - \\$`+e(N.value.salary),1)):s(``,!0)]),A.value?(a(),o(l(t),{key:0,id:101,schema:F,"initial-data":I,"is-update":!0,lang:`en`,onCancel:i[3]||=e=>A.value=!1,onSubmit:B})):s(``,!0)]),_:1}),c(m,{title:`Form with Real-Time SEO Audit`,description:`Enables automated SEO score calculation as users type titles, slugs, and body content.`},{code:r(()=>[c(p,{code:O,language:`vue`})]),default:r(()=>[f(`div`,S,[f(`button`,{type:`button`,onClick:i[4]||=e=>j.value=!0,class:`px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors`},` Open SEO Article Form `),P.value?(a(),d(`span`,C,` ✓ Saved Article: `+e(P.value.title),1)):s(``,!0)]),j.value?(a(),o(l(t),{key:0,schema:L,seo:R,"is-update":!1,lang:`en`,onCancel:i[5]||=e=>j.value=!1,onSubmit:V})):s(``,!0)]),_:1}),f(`section`,w,[i[6]||=f(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),c(h,{props:H})]),f(`section`,T,[i[7]||=f(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),c(g,{events:U})])]))}});export{k as default};