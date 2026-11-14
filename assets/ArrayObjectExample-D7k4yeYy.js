import{M as e,O as t,U as n,c as r,d as i,g as a,h as o,m as s,mt as c,q as l,s as u,t as d,z as f}from"./i18n-CQHTY6ci.js";import{l as p}from"./indexedDB-DBV1IhUh.js";import{t as m}from"./CodeBlock-Cjmxf9F4.js";import{n as h,t as g}from"./PropsTable-Dv1x2aJC.js";import{t as _}from"./EventsTable-D-LMtD8H.js";var v={class:`space-y-8`},y={class:`space-y-4`},b={class:`text-xs text-slate-500`},x={class:`p-3 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono mt-1 overflow-x-auto`},S={class:`space-y-6`},C={class:`p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3`},w={class:`flex items-center justify-between`},T={class:`text-sm font-bold text-slate-800 dark:text-slate-200`},E={class:`p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3`},D={class:`flex items-center justify-between`},O={class:`text-sm font-bold text-slate-800 dark:text-slate-200`},k={class:`p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3`},A={class:`flex items-center justify-between`},j={class:`text-sm font-bold text-slate-800 dark:text-slate-200`},M={class:`space-y-4`},N={class:`space-y-4`},P=`<template>
  <ArrayObjectInput
    v-model="items"
    label="Purchase Order Items"
    :schema="itemSchema"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrayObjectInput } from '@zyvnox/vue-pack/components'
import type { Schema } from '@zyvnox/vue-pack/type'

const items = ref([
  { title: 'Server CPU Unit', quantity: 2, price: 4500000 },
])

const itemSchema: Schema = {
  title: {
    type: 'text',
    label: 'Item Name',
    required: true,
    validate: { minLength: 3 },
  },
  quantity: {
    type: 'number',
    label: 'Quantity',
    required: true,
    validate: { min: 1, max: 500, integer: true },
  },
  price: {
    type: 'currency',
    label: 'Unit Price',
    required: true,
    validate: { min: 1000 },
  },
}
<\/script>`,F=`<ArrayObjectInput
  v-model="variants"
  label="Product Variations"
  tooltip="Define SKU variants with stock allocation"
  tooltip-position="right"
  tooltip-icon="📦"
  :schema="variantSchema"
/>`,I=`<ArrayObjectInput
  v-model="items"
  label="Locked Order Items"
  :schema="itemSchema"
  disabled
/>`,L=`<!-- 1. Judul dulu baru Gambar (Title first, then image) -->
<ArrayObjectInput
  v-model="items"
  label="Portfolio Items"
  :schema="mediaSchema"
  :display="{
    titleKey: 'title',
    imageKey: 'image',
  }"
/>

<!-- 2. Gambar dulu baru Judul (Image first, then title) -->
<ArrayObjectInput
  v-model="items"
  label="Product Catalog"
  :schema="mediaSchema"
  :display="{
    imageKey: 'image',
    titleKey: 'title',
  }"
/>

<!-- 3. Dokumen (PDF) & Catatan Berformat HTML (Document & HTML notes) -->
<ArrayObjectInput
  v-model="contracts"
  label="Project Contracts"
  :schema="contractSchema"
  :display="{
    titleKey: 'title',
    docKey: 'document',
    notesKey: 'notesHtml',
  }"
/>`,R=a({__name:`ArrayObjectExample`,setup(a){let{isIndonesian:R,currentLocale:z}=d(),B=n([{title:`Server CPU Unit Xeon`,quantity:2,price:45e5},{title:`DDR5 32GB ECC RAM`,quantity:4,price:12e5}]),V=n([{title:`Design System Figma Asset`,image:`https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=150`,category:`UI/UX`}]),H=n([{title:`Enterprise High-End Workstation`,image:`https://images.unsplash.com/photo-1518770660439-4636190af475?w=150`,stock:12}]),U=n([{title:`Master Service Agreement 2026`,document:`https://example.com/files/contract_v2.pdf`,notesHtml:`<p><span class="zyvnox-text-emerald-500 font-bold">✓ Approved</span> by Legal Dept</p>`}]),W=n([{sku:`SKU-RED-M`,color:`Crimson Red`,size:`M`}]),G=u(()=>({title:{type:`text`,label:R.value?`Judul Item`:`Item Title`,required:!0},image:{type:`image`,label:R.value?`Foto / Thumbnail`:`Photo / Thumbnail`,required:!0}})),K=u(()=>({title:{type:`text`,label:R.value?`Nama Berkas`:`File Name`,required:!0},document:{type:`text`,label:R.value?`URL Dokumen / File (PDF, DOCX)`:`Document URL (PDF, DOCX)`,required:!0},notesHtml:{type:`text`,label:R.value?`Catatan Format HTML`:`HTML Formatted Notes`}})),q=u(()=>({title:{type:`text`,label:R.value?`Nama Item`:`Item Name`,required:!0,placeholder:R.value?`Min. 3 karakter`:`Min. 3 characters`,validate:{minLength:3,maxLength:50}},quantity:{type:`number`,label:R.value?`Kuantitas`:`Quantity`,required:!0,validate:{min:1,max:500,integer:!0}},price:{type:`currency`,label:R.value?`Harga Satuan (IDR)`:`Unit Price`,required:!0,validate:{min:1e3}}})),J=u(()=>({sku:{type:`text`,label:R.value?`Kode SKU`:`SKU Code`,required:!0,validate:{minLength:4}},color:{type:`text`,label:R.value?`Pilihan Warna`:`Colorway`,required:!0},size:{type:`select`,label:R.value?`Ukuran`:`Size`,options:[`S`,`M`,`L`,`XL`],required:!0}})),Y=[{name:`modelValue`,type:`any[]`,default:`[]`,description:`v-model array of row records`},{name:`schema`,type:`Schema`,required:!0,description:`Declarative schema for fields rendered inside each row modal`},{name:`label`,type:`string`,description:`Repeater section title header`},{name:`display`,type:`ArrayObjectDisplayConfig`,description:`Konfigurasi urutan dan format maksimal 3 slot tampilan baris (contoh: { titleKey: "title", imageKey: "image" } atau { imageKey: "image", titleKey: "title" }). Mendukung gambar, berkas/dokumen (PDF, DOCX, TXT), HTML tersanitasi, lencana harga/kuantitas, dan teks biasa.`},{name:`id`,type:`string`,default:`auto UID`,description:`Unique identifier for the repeater element`},{name:`isUpdate`,type:`boolean`,default:`false`,description:`Whether the parent form is in update/edit mode`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks the list and disables add, edit, and remove buttons`},{name:`error`,type:`string`,description:`Error message banner displayed below the repeater`},{name:`tooltip`,type:`string`,description:`Guidance text displayed beside the label on hover`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Position of the tooltip popover`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon symbol rendered beside the label when tooltip is set`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Active language code for buttons and modal dialogs`}],X=[{name:`update:modelValue`,type:`(value: any[], key: string) => void`,description:`Emitted when rows are added, edited, or removed`},{name:`create:Options`,type:`(key: string, options: string | number, view: string) => void`,description:`Emitted when dynamically creating options inside select fields in row modals`}];return(n,a)=>{let u=e(`DocHeader`);return t(),i(`div`,v,[o(u),o(h,{title:`Dynamic Row Repeater with Item Validation`,description:`Add, edit, and delete structured objects. Clicking 'Add' or 'Edit' opens a FormModal that validates each field according to the item schema before updating the array.`},{code:f(()=>[o(m,{code:P,language:`vue`})]),default:f(()=>[r(`div`,y,[o(l(p),{modelValue:B.value,"onUpdate:modelValue":a[0]||=e=>B.value=e,label:l(R)?`Daftar Item Pesanan Pembelian`:`Purchase Order Line Items`,schema:q.value,display:{titleKey:`title`,priceKey:`price`,quantityKey:`quantity`},lang:l(z)},null,8,[`modelValue`,`label`,`schema`,`lang`]),r(`div`,b,[s(c(l(R)?`Baris Aktif (`:`Active Rows (`)+c(B.value.length)+`): `,1),r(`pre`,x,c(JSON.stringify(B.value,null,2)),1)])])]),_:1}),o(h,{title:`Ordered Multi-Field Display (Images, Files, HTML, Badges)`,description:`Configure up to 3 visible fields per row. Display strictly follows the key insertion order (e.g. titleKey then imageKey vs imageKey then titleKey) and supports images, documents, badges, and sanitized HTML.`},{code:f(()=>[o(m,{code:L,language:`vue`})]),default:f(()=>[r(`div`,S,[r(`div`,C,[r(`div`,w,[r(`h4`,T,c(l(R)?`Urutan 1: Judul Dulu Lalu Gambar`:`Order A: Title First, Then Image`),1),a[6]||=r(`code`,{class:`text-xs font-mono bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-800`},` { titleKey: 'title', imageKey: 'image' } `,-1)]),o(l(p),{modelValue:V.value,"onUpdate:modelValue":a[1]||=e=>V.value=e,label:l(R)?`Katalog Portofolio (Judul -> Gambar)`:`Portfolio Showcase (Title -> Image)`,schema:G.value,display:{titleKey:`title`,imageKey:`image`},lang:l(z)},null,8,[`modelValue`,`label`,`schema`,`lang`])]),r(`div`,E,[r(`div`,D,[r(`h4`,O,c(l(R)?`Urutan 2: Gambar Dulu Lalu Judul`:`Order B: Image First, Then Title`),1),a[7]||=r(`code`,{class:`text-xs font-mono bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800`},` { imageKey: 'image', titleKey: 'title' } `,-1)]),o(l(p),{modelValue:H.value,"onUpdate:modelValue":a[2]||=e=>H.value=e,label:l(R)?`Katalog Produk (Gambar -> Judul)`:`Product Items (Image -> Title)`,schema:G.value,display:{imageKey:`image`,titleKey:`title`},lang:l(z)},null,8,[`modelValue`,`label`,`schema`,`lang`])]),r(`div`,k,[r(`div`,A,[r(`h4`,j,c(l(R)?`Urutan 3: Dokumen (PDF) & Kode HTML`:`Order C: Document (PDF) & HTML Code`),1),a[8]||=r(`code`,{class:`text-xs font-mono bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded border border-purple-200 dark:border-purple-800`},` { titleKey: 'title', docKey: 'document', notesKey: 'notesHtml' } `,-1)]),o(l(p),{modelValue:U.value,"onUpdate:modelValue":a[3]||=e=>U.value=e,label:l(R)?`Dokumen & Kontrak Proyek`:`Project Documents & Contracts`,schema:K.value,display:{titleKey:`title`,docKey:`document`,notesKey:`notesHtml`},lang:l(z)},null,8,[`modelValue`,`label`,`schema`,`lang`])])])]),_:1}),o(h,{title:`With Schema Tooltip & Icon`,description:`Displays guidance beside the repeater collection label.`},{code:f(()=>[o(m,{code:F,language:`vue`})]),default:f(()=>[o(l(p),{modelValue:W.value,"onUpdate:modelValue":a[4]||=e=>W.value=e,label:l(R)?`Variasi Produk`:`Product Variations`,tooltip:l(R)?`Tentukan semua varian SKU dengan pilihan warna dan alokasi stok terverifikasi`:`Define all SKU variants with verified colorway and stock allocation`,"tooltip-position":`right`,"tooltip-icon":`📦`,schema:J.value,lang:l(z)},null,8,[`modelValue`,`label`,`tooltip`,`schema`,`lang`])]),_:1}),o(h,{title:`Disabled State`,description:`Read-only repeater display with row additions and edits locked.`},{code:f(()=>[o(m,{code:I,language:`vue`})]),default:f(()=>[o(l(p),{modelValue:B.value,"onUpdate:modelValue":a[5]||=e=>B.value=e,label:l(R)?`Item Pesanan Terkunci (Hanya-Baca)`:`Locked Order Items (Read-Only)`,schema:q.value,disabled:``,lang:l(z)},null,8,[`modelValue`,`label`,`schema`,`lang`])]),_:1}),r(`section`,M,[o(g,{props:Y})]),r(`section`,N,[o(_,{events:X})])])}}});export{R as default};