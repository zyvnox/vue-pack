import{Ot as e,Tt as t,_t as n,bt as r,dt as i,ft as a,gt as o,h as s,kt as c,pt as l,ut as u}from"./index-BhghGzgp.js";import{t as d}from"./CodeBlock-CSGfp_x-.js";import{n as f,t as p}from"./PropsTable-rw53ZQEs.js";import{t as m}from"./EventsTable-BlxUYD03.js";var h={class:`space-y-8`},g={class:`flex items-center gap-4`},_={key:0,class:`text-xs text-rose-600 dark:text-rose-400`},v={class:`flex items-center gap-4`},y={key:0,class:`text-xs text-emerald-600 dark:text-emerald-400`},b={class:`flex items-center gap-4`},x={key:0,class:`text-xs text-amber-600 dark:text-amber-400`},S={class:`space-y-4`},C={class:`space-y-4`},w=`<template>
  <button @click="show = true">Delete</button>

  <WarningForm
    v-if="show"
    title="Delete Item?"
    message="This cannot be undone."
    confirm-text="Delete"
    type="danger"
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
<\/script>`,T=`<WarningForm
  v-if="show"
  title="Approve Budget?"
  message="Are you sure you want to approve?"
  confirm-text="Approve"
  type="success"
  @confirm="onApprove"
  @cancel="show = false"
/>`,E=`<WarningForm
  v-if="show"
  title="Restart Service?"
  message="This will briefly interrupt workers."
  confirm-text="Restart"
  type="warning"
  @confirm="onRestart"
  @cancel="show = false"
/>`,D=n({__name:`WarningFormExample`,setup(n){let D=e(!1),O=e(!1),k=e(!1),A=e(!1),j=e(!1),M=e(!1),N=()=>{O.value=!0,D.value=!1},P=()=>{A.value=!0,k.value=!1},F=()=>{M.value=!0,j.value=!1},I=[{name:`type`,type:`'danger' | 'warning' | 'success' | 'info'`,default:`'danger'`,description:`Color theme and icon mode of the confirmation dialog`},{name:`title`,type:`string`,description:`Dialog header title`},{name:`message`,type:`string`,description:`Detailed warning message explanation`},{name:`confirmText`,type:`string`,description:`Label for confirmation button`},{name:`cancelText`,type:`string`,description:`Label for cancellation button`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Active language code`}],L=[{name:`confirm`,type:`() => void`,description:`Emitted when user clicks confirm`},{name:`cancel`,type:`() => void`,description:`Emitted when user cancels or dismisses`}];return(e,n)=>(r(),l(`div`,h,[n[8]||=u(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[u(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` WarningForm (Confirmation Modal) `),u(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Confirmation modal dialog for destructive actions (delete/archive) or positive verification prompts with custom buttons and i18n support. `)],-1),o(f,{title:`Destructive Deletion Confirmation`,description:`Alerts the user before permanently removing records.`},{code:t(()=>[o(d,{code:w,language:`vue`})]),default:t(()=>[u(`div`,g,[u(`button`,{type:`button`,onClick:n[0]||=e=>D.value=!0,class:`px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold transition-colors`},` 🗑️ Delete Project `),O.value?(r(),l(`span`,_,` Project was deleted! `)):a(``,!0)]),D.value?(r(),i(c(s),{key:0,title:`Permanently Delete Project?`,message:`This action cannot be undone. All database records and uploaded assets will be purged.`,"confirm-text":`Yes, Delete`,"cancel-text":`Cancel`,type:`danger`,onConfirm:N,onCancel:n[1]||=e=>D.value=!1})):a(``,!0)]),_:1}),o(f,{title:`Positive Action Confirmation`,description:`Green-themed modal for approving or activating records.`},{code:t(()=>[o(d,{code:T,language:`vue`})]),default:t(()=>[u(`div`,v,[u(`button`,{type:`button`,onClick:n[2]||=e=>k.value=!0,class:`px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors`},` ✓ Approve Budget `),A.value?(r(),l(`span`,y,` Budget was approved! `)):a(``,!0)]),k.value?(r(),i(c(s),{key:0,title:`Approve Quarterly Budget?`,message:`Are you sure you want to approve this budget request of $120,000?`,"confirm-text":`Approve`,"cancel-text":`Go Back`,type:`success`,onConfirm:P,onCancel:n[3]||=e=>k.value=!1})):a(``,!0)]),_:1}),o(f,{title:`Cautionary Warning Confirmation`,description:`Yellow/amber-themed modal for sensitive or caution-level operations.`},{code:t(()=>[o(d,{code:E,language:`vue`})]),default:t(()=>[u(`div`,b,[u(`button`,{type:`button`,onClick:n[4]||=e=>j.value=!0,class:`px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold transition-colors`},` ⚠️ Restart Service `),M.value?(r(),l(`span`,x,` Service restarted! `)):a(``,!0)]),j.value?(r(),i(c(s),{key:0,title:`Restart Production Service?`,message:`Restarting this service will briefly interrupt live background worker queues for approximately 30 seconds.`,"confirm-text":`Yes, Restart`,"cancel-text":`Keep Running`,type:`warning`,onConfirm:F,onCancel:n[5]||=e=>j.value=!1})):a(``,!0)]),_:1}),u(`section`,S,[n[6]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),o(p,{props:I})]),u(`section`,C,[n[7]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),o(m,{events:L})])]))}});export{D as default};