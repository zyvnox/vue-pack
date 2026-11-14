import{M as e,O as t,U as n,c as r,d as i,g as a,h as o,l as s,mt as c,q as l,t as u,u as d,z as f}from"./i18n-CQHTY6ci.js";import{t as p}from"./WarningForm-B-rmGsUT.js";import{t as m}from"./CodeBlock-Cjmxf9F4.js";import{n as h,t as g}from"./PropsTable-Dv1x2aJC.js";import{t as _}from"./EventsTable-D-LMtD8H.js";var v={class:`space-y-8`},y={class:`flex items-center gap-4`},b={key:0,class:`text-xs text-rose-600 dark:text-rose-400`},x={class:`flex items-center gap-4`},S={key:0,class:`text-xs text-emerald-600 dark:text-emerald-400`},C={class:`flex items-center gap-4`},w={key:0,class:`text-xs text-amber-600 dark:text-amber-400`},T={class:`space-y-4`},E={class:`space-y-4`},D=`<template>
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
<\/script>`,O=`<WarningForm
  v-if="show"
  title="Approve Budget?"
  message="Are you sure you want to approve?"
  confirm-text="Approve"
  type="success"
  @confirm="onApprove"
  @cancel="show = false"
/>`,k=`<WarningForm
  v-if="show"
  title="Restart Service?"
  message="This will briefly interrupt workers."
  confirm-text="Restart"
  type="warning"
  @confirm="onRestart"
  @cancel="show = false"
/>`,A=a({__name:`WarningFormExample`,setup(a){let{isIndonesian:A}=u(),j=n(!1),M=n(!1),N=n(!1),P=n(!1),F=n(!1),I=n(!1),L=()=>{M.value=!0,j.value=!1},R=()=>{P.value=!0,N.value=!1},z=()=>{I.value=!0,F.value=!1},B=[{name:`type`,type:`'danger' | 'warning' | 'success' | 'info'`,default:`'danger'`,description:`Color theme and icon mode of the confirmation dialog`},{name:`title`,type:`string`,description:`Dialog header title`},{name:`message`,type:`string`,description:`Detailed warning message explanation`},{name:`confirmText`,type:`string`,description:`Label for confirmation button`},{name:`cancelText`,type:`string`,description:`Label for cancellation button`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Active language code`}],V=[{name:`confirm`,type:`() => void`,description:`Emitted when user clicks confirm`},{name:`cancel`,type:`() => void`,description:`Emitted when user cancels or dismisses`}];return(n,a)=>{let u=e(`DocHeader`);return t(),i(`div`,v,[o(u),o(h,{title:`Destructive Deletion Confirmation`,description:`Alerts the user before permanently removing records.`},{code:f(()=>[o(m,{code:D,language:`vue`})]),default:f(()=>[r(`div`,y,[r(`button`,{type:`button`,onClick:a[0]||=e=>j.value=!0,class:`px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold transition-colors`},c(l(A)?`🗑️ Hapus Proyek`:`🗑️ Delete Project`),1),M.value?(t(),i(`span`,b,c(l(A)?`Proyek berhasil dihapus!`:`Project was deleted!`),1)):d(``,!0)]),j.value?(t(),s(l(p),{key:0,title:l(A)?`Hapus Proyek Secara Permanen?`:`Permanently Delete Project?`,message:l(A)?`Tindakan ini tidak dapat dibatalkan. Semua data rekaman dan aset yang diunggah akan dihapus permanen.`:`This action cannot be undone. All database records and uploaded assets will be purged.`,"confirm-text":l(A)?`Ya, Hapus`:`Yes, Delete`,"cancel-text":l(A)?`Batal`:`Cancel`,type:`danger`,onConfirm:L,onCancel:a[1]||=e=>j.value=!1},null,8,[`title`,`message`,`confirm-text`,`cancel-text`])):d(``,!0)]),_:1}),o(h,{title:`Positive Action Confirmation`,description:`Green-themed modal for approving or activating records.`},{code:f(()=>[o(m,{code:O,language:`vue`})]),default:f(()=>[r(`div`,x,[r(`button`,{type:`button`,onClick:a[2]||=e=>N.value=!0,class:`px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors`},c(l(A)?`✓ Setujui Anggaran`:`✓ Approve Budget`),1),P.value?(t(),i(`span`,S,c(l(A)?`Anggaran telah disetujui!`:`Budget was approved!`),1)):d(``,!0)]),N.value?(t(),s(l(p),{key:0,title:l(A)?`Setujui Anggaran Kuartalan?`:`Approve Quarterly Budget?`,message:l(A)?`Apakah Anda yakin ingin menyetujui pengajuan anggaran sebesar $120.000 ini?`:`Are you sure you want to approve this budget request of $120,000?`,"confirm-text":l(A)?`Setujui`:`Approve`,"cancel-text":l(A)?`Kembali`:`Go Back`,type:`success`,onConfirm:R,onCancel:a[3]||=e=>N.value=!1},null,8,[`title`,`message`,`confirm-text`,`cancel-text`])):d(``,!0)]),_:1}),o(h,{title:`Cautionary Warning Confirmation`,description:`Yellow/amber-themed modal for sensitive or caution-level operations.`},{code:f(()=>[o(m,{code:k,language:`vue`})]),default:f(()=>[r(`div`,C,[r(`button`,{type:`button`,onClick:a[4]||=e=>F.value=!0,class:`px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold transition-colors`},c(l(A)?`⚠️ Mulai Ulang Layanan`:`⚠️ Restart Service`),1),I.value?(t(),i(`span`,w,c(l(A)?`Layanan berhasil dimulai ulang!`:`Service restarted!`),1)):d(``,!0)]),F.value?(t(),s(l(p),{key:0,title:l(A)?`Mulai Ulang Layanan Produksi?`:`Restart Production Service?`,message:l(A)?`Memulai ulang layanan ini akan menghentikan sejenak antrean worker aktif selama kurang lebih 30 detik.`:`Restarting this service will briefly interrupt live background worker queues for approximately 30 seconds.`,"confirm-text":l(A)?`Ya, Mulai Ulang`:`Yes, Restart`,"cancel-text":l(A)?`Tetap Jalankan`:`Keep Running`,type:`warning`,onConfirm:z,onCancel:a[5]||=e=>F.value=!1},null,8,[`title`,`message`,`confirm-text`,`cancel-text`])):d(``,!0)]),_:1}),r(`section`,T,[o(g,{props:B})]),r(`section`,E,[o(_,{events:V})])])}}});export{A as default};