import{O as e,Ot as t,Tt as n,_t as r,bt as i,dt as a,ft as o,gt as s,kt as c,pt as l,ut as u}from"./index-EUDlBqHA.js";import{t as d}from"./CodeBlock-DWWJlQgm.js";import{n as f,t as p}from"./PropsTable-C27FNX9a.js";import{t as m}from"./EventsTable-Bt6E4k0S.js";var h={class:`space-y-8`},g={class:`flex items-center gap-4`},_={key:0,class:`text-xs text-rose-600 dark:text-rose-400`},v={class:`flex items-center gap-4`},y={key:0,class:`text-xs text-emerald-600 dark:text-emerald-400`},b={class:`space-y-4`},x={class:`space-y-4`},S=`<template>
  <button @click="show = true">Delete</button>

  <WarningForm
    v-if="show"
    title="Delete Item?"
    message="This cannot be undone."
    confirm-text="Delete"
    :is-green="false"
    @confirm="onDelete"
    @cancel="show = false"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { WarningForm } from '@zyvnox/vue-pack/components'

const show = ref(false)
const onDelete = () => {
  // perform delete
  show.value = false
}
<\/script>`,C=`<WarningForm
  v-if="show"
  title="Approve Budget?"
  message="Are you sure you want to approve?"
  confirm-text="Approve"
  :is-green="true"
  @confirm="onApprove"
  @cancel="show = false"
/>`,w=r({__name:`WarningFormExample`,setup(r){let w=t(!1),T=t(!1),E=t(!1),D=t(!1),O=()=>{T.value=!0,w.value=!1},k=()=>{D.value=!0,E.value=!1},A=[{name:`title`,type:`string`,description:`Dialog header title`},{name:`message`,type:`string`,description:`Detailed warning message explanation`},{name:`isGreen`,type:`boolean`,default:`false`,description:`If true, renders with emerald confirmation theme instead of red danger theme`},{name:`confirmText`,type:`string`,description:`Label for confirmation button`},{name:`cancelText`,type:`string`,description:`Label for cancellation button`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Active language code`}],j=[{name:`confirm`,type:`() => void`,description:`Emitted when user clicks confirm`},{name:`cancel`,type:`() => void`,description:`Emitted when user cancels or dismisses`}];return(t,r)=>(i(),l(`div`,h,[r[6]||=u(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[u(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` WarningForm (Confirmation Modal) `),u(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Confirmation modal dialog for destructive actions (delete/archive) or positive verification prompts with custom buttons and i18n support. `)],-1),s(f,{title:`Destructive Deletion Confirmation`,description:`Alerts the user before permanently removing records.`},{code:n(()=>[s(d,{code:S,language:`vue`})]),default:n(()=>[u(`div`,g,[u(`button`,{type:`button`,onClick:r[0]||=e=>w.value=!0,class:`px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold transition-colors`},` 🗑️ Delete Project `),T.value?(i(),l(`span`,_,` Project was deleted! `)):o(``,!0)]),w.value?(i(),a(c(e),{key:0,title:`Permanently Delete Project?`,message:`This action cannot be undone. All database records and uploaded assets will be purged.`,"confirm-text":`Yes, Delete`,"cancel-text":`Cancel`,"is-green":!1,onConfirm:O,onCancel:r[1]||=e=>w.value=!1})):o(``,!0)]),_:1}),s(f,{title:`Positive Action Confirmation`,description:`Green-themed modal for approving or activating records.`},{code:n(()=>[s(d,{code:C,language:`vue`})]),default:n(()=>[u(`div`,v,[u(`button`,{type:`button`,onClick:r[2]||=e=>E.value=!0,class:`px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors`},` ✓ Approve Budget `),D.value?(i(),l(`span`,y,` Budget was approved! `)):o(``,!0)]),E.value?(i(),a(c(e),{key:0,title:`Approve Quarterly Budget?`,message:`Are you sure you want to approve this budget request of $120,000?`,"confirm-text":`Approve`,"cancel-text":`Go Back`,"is-green":!0,onConfirm:k,onCancel:r[3]||=e=>E.value=!1})):o(``,!0)]),_:1}),u(`section`,b,[r[4]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),s(p,{props:A})]),u(`section`,x,[r[5]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),s(m,{events:j})])]))}});export{w as default};