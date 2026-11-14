import{M as e,O as t,U as n,c as r,d as i,g as a,h as o,m as s,mt as c,q as l,t as u,z as d}from"./i18n-CQHTY6ci.js";import{t as f}from"./NumberInput-DN7BzsGu.js";import{t as p}from"./CodeBlock-Cjmxf9F4.js";import{n as m,t as h}from"./PropsTable-Dv1x2aJC.js";import{t as g}from"./EventsTable-D-LMtD8H.js";var _={class:`space-y-8`},v={class:`text-xs text-slate-500`},y={class:`font-mono font-bold`},b={class:`text-xs text-slate-500 space-y-1`},x={class:`font-mono font-bold`},S={class:`text-slate-400 dark:text-slate-500`},C={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},w={class:`space-y-4`},T={class:`space-y-4`},E=`<template>
  <NumberInput
    v-model="quantity"
    label="Quantity / Units"
    placeholder="Enter quantity"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NumberInput } from '@zyvnox/vue-pack/components'

const quantity = ref(5)
<\/script>`,D=`<NumberInput
  v-model="discount"
  label="Discount Percentage (%)"
  tooltip="Enter integer between 0 and 100"
  :validate="{
    min: 0,
    max: 100,
    integer: true,
    duplicate: [13, 42],
  }"
  placeholder="e.g. 25"
/>`,O=`<NumberInput
  v-model="stock"
  label="Inventory Stock Level"
  required
  error="Stock quantity cannot fall below safety threshold (10)"
/>
<NumberInput
  v-model="minOrder"
  label="Fixed Minimum Order"
  disabled
/>`,k=a({__name:`NumberInputExample`,setup(a){let{isIndonesian:k,currentLocale:A}=u(),j=n(5),M=n(13),N=n(3),P=n(100),F=[{name:`modelValue`,type:`number | string`,required:!0,description:`Reactive numeric v-model value`},{name:`label`,type:`string`,required:!0,description:`Input label title displayed above numeric field`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID for label and input binding`},{name:`placeholder`,type:`string`,description:`Placeholder hint text (falls back to i18n default)`},{name:`validate`,type:`{ min?: number, max?: number, integer?: boolean, duplicate?: (string | number)[] }`,description:`Client-side numeric validation rules. Checks min, max, integer type, and duplicate list with localized messages.`},{name:`required`,type:`boolean`,default:`false`,description:`Displays required asterisk indicator`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks numeric input and disables all interactions`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom guidance text shown when hovering help icon`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Preferred tooltip popover placement`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for internal validation error messages`}],I=[{name:`update:modelValue`,type:`(value: number | string, id: string) => void`,description:`Emitted upon numeric value change`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when a numeric validation rule fails`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when numeric validation passes`}];return(n,a)=>{let u=e(`DocHeader`);return t(),i(`div`,_,[o(u),o(m,{title:`Basic Numeric Input`,description:`Binds a numerical value with automatic number type casting.`},{code:d(()=>[o(p,{code:E,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:j.value,"onUpdate:modelValue":a[0]||=e=>j.value=e,label:l(k)?`Jumlah / Kuantitas`:`Quantity / Units`,placeholder:l(k)?`Masukkan jumlah kuantitas`:`Enter quantity`,lang:l(A)},null,8,[`modelValue`,`label`,`placeholder`,`lang`]),r(`div`,v,[s(c(l(k)?`Nilai Terikat:`:`Bound Value:`)+` `,1),r(`code`,y,c(j.value??(l(k)?`(kosong)`:`(empty)`)),1),s(` (`+c(l(k)?`Tipe:`:`Type:`)+` `+c(typeof j.value)+`) `,1)])]),_:1}),o(m,{title:`Real-Time Validation (Min, Max, Integer & Duplicates)`,description:`Validates numeric boundary [0 to 100], enforces integers, and rejects blacklisted duplicate numbers (e.g. 13, 42).`},{code:d(()=>[o(p,{code:D,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:M.value,"onUpdate:modelValue":a[1]||=e=>M.value=e,label:l(k)?`Persentase Diskon (%)`:`Discount Percentage (%)`,tooltip:l(k)?`Masukkan persentase bilangan bulat antara 0 dan 100 (13 dan 42 dicadangkan)`:`Enter an integer percentage between 0 and 100 (13 and 42 are reserved)`,"tooltip-position":`right`,lang:l(A),validate:{min:0,max:100,integer:!0,duplicate:[13,42]},placeholder:l(k)?`cth. 25`:`e.g. 25`},null,8,[`modelValue`,`label`,`tooltip`,`lang`,`placeholder`]),r(`div`,b,[r(`div`,null,[s(c(l(k)?`Nilai Saat Ini:`:`Current Value:`)+` `,1),r(`code`,x,c(M.value??(l(k)?`(kosong)`:`(empty)`)),1)]),r(`div`,S,[s(c(l(k)?`Aturan: Min 0, Max 100, Hanya bilangan bulat, Daftar hitam:`:`Rules: Min 0, Max 100, Integer only, Blacklist:`)+` `,1),a[4]||=r(`code`,{class:`font-mono`},`[13, 42]`,-1),a[5]||=s(`. `,-1)])])]),_:1}),o(m,{title:`External Error & Disabled States`,description:`Visual feedback when numeric limits are violated or input is disabled.`},{code:d(()=>[o(p,{code:O,language:`vue`})]),default:d(()=>[r(`div`,C,[o(l(f),{modelValue:N.value,"onUpdate:modelValue":a[2]||=e=>N.value=e,label:l(k)?`Tingkat Stok Inventaris`:`Inventory Stock Level`,required:``,error:l(k)?`Jumlah stok tidak boleh berada di bawah batas aman (10)`:`Stock quantity cannot fall below safety threshold (10)`,lang:l(A)},null,8,[`modelValue`,`label`,`error`,`lang`]),o(l(f),{modelValue:P.value,"onUpdate:modelValue":a[3]||=e=>P.value=e,label:l(k)?`Pesanan Minimal Tetap (Hanya-Baca)`:`Fixed Minimum Order (Read-Only)`,disabled:``,lang:l(A)},null,8,[`modelValue`,`label`,`lang`])])]),_:1}),r(`section`,w,[o(h,{props:F})]),r(`section`,T,[o(g,{events:I})])])}}});export{k as default};