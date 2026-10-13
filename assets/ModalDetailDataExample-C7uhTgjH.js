import{Et as e,St as t,Tt as n,dt as r,ft as i,gt as a,ht as o,l as s,lt as c,ut as l,vt as u}from"./index-BQNesRql.js";import{t as d}from"./CodeBlock-BDBDmQfe.js";import{n as f,t as p}from"./PropsTable-CIH-RclG.js";import{t as m}from"./EventsTable-6XlwCFJn.js";var h={class:`space-y-8`},g={class:`flex items-center gap-4`},_={class:`space-y-4`},v={class:`space-y-4`},y=`<template>
  <button @click="show = true">Inspect Details</button>

  <ModalDetailData
    v-if="show"
    :schema="schema"
    :form-data="customer"
    title="Customer Record #123"
    @close="show = false"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ModalDetailData } from '@zyvnox/vue-pack/components'
import type { Schema } from '@zyvnox/vue-pack/type'

const show = ref(false)
const customer = { name: 'Eleanor', email: 'eleanor@example.com' }
const schema: Schema = {
  name: { type: 'text', label: 'Name' },
  email: { type: 'text', label: 'Email' },
}
<\/script>`,b=a({__name:`ModalDetailDataExample`,setup(a){let b=n(!1),x={name:`Eleanor Vance`,company:`Hill House Architecture Ltd.`,email:`eleanor@hillhouse.design`,tier:`Enterprise Platinum`,registeredAt:`2025-04-12`},S={name:{type:`text`,label:`Full Legal Name`},company:{type:`text`,label:`Organization / Company`},email:{type:`text`,label:`Primary Contact Email`},tier:{type:`text`,label:`Subscription Plan`},registeredAt:{type:`date`,label:`Member Since`}},C=[{name:`schema`,type:`Schema`,required:!0,description:`Schema mapping defining how fields are formatted`},{name:`formData`,type:`Record<string, any>`,required:!0,description:`Record data object to display`},{name:`title`,type:`string`,default:`'Detail Data'`,description:`Dialog title text`},{name:`closeText`,type:`string`,default:`'Close'`,description:`Label for close action button`},{name:`valueNullView`,type:`string`,default:`'-'`,description:`Placeholder symbol for null or empty values`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Active language code`}],w=[{name:`close`,type:`() => void`,description:`Emitted when user dismisses the dialog`}];return(n,a)=>(u(),i(`div`,h,[a[4]||=c(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[c(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` ModalDetailData `),c(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Schema-driven read-only data detail dialog component for inspecting complete record contents formatted cleanly. `)],-1),o(f,{title:`Read-Only Record Detail Dialog`,description:`Click the button to open a detailed view of a customer account.`},{code:t(()=>[o(d,{code:y,language:`vue`})]),default:t(()=>[c(`div`,g,[c(`button`,{type:`button`,onClick:a[0]||=e=>b.value=!0,class:`px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors`},` Inspect Customer Details `)]),b.value?(u(),l(e(s),{key:0,schema:S,"form-data":x,"value-null-view":!0,title:`Customer Record #CUST-982`,onClose:a[1]||=e=>b.value=!1})):r(``,!0)]),_:1}),c(`section`,_,[a[2]||=c(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),o(p,{props:C})]),c(`section`,v,[a[3]||=c(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),o(m,{events:w})])]))}});export{b as default};