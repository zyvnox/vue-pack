import{M as e,O as t,U as n,c as r,d as i,g as a,h as o,m as s,mt as c,q as l,t as u,z as d}from"./i18n-CQHTY6ci.js";import{t as f}from"./TagInput-BrSga4yb.js";import{t as p}from"./CodeBlock-Cjmxf9F4.js";import{n as m,t as h}from"./PropsTable-Dv1x2aJC.js";import{t as g}from"./EventsTable-D-LMtD8H.js";var _={class:`space-y-8`},v={class:`text-xs text-slate-500`},y={class:`font-mono font-bold`},b={class:`text-xs text-slate-500 space-y-1`},x={class:`font-mono font-bold`},S={class:`text-slate-400 dark:text-slate-500`},C={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},w={class:`space-y-4`},T={class:`space-y-4`},E=`<template>
  <TagInput
    v-model="skills"
    label="Skill Keywords"
    placeholder="Type skill and press Enter..."
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TagInput } from '@zyvnox/vue-pack/components'

const skills = ref(['Vue 3', 'TypeScript'])
<\/script>`,D=`<TagInput
  v-model="topics"
  label="Article Topics"
  :validate="{
    min: 2,
    max: 5,
  }"
/>`,O=`<TagInput
  v-model="keywords"
  label="SEO Meta Keywords"
  tooltip="Enter relevant search keywords"
  tooltip-position="right"
/>`,k=`<TagInput
  v-model="roles"
  label="Server Role Tags"
  error="Production roles must be assigned via IAM"
/>
<TagInput
  v-model="coreTags"
  label="System Core Tags"
  disabled
/>`,A=a({__name:`TagInputExample`,setup(a){let{isIndonesian:A,currentLocale:j}=u(),M=n([`Vue 3`,`TypeScript`,`UnoCSS`]),N=n([`SingleTag`]),P=n([`frontend`,`library`,`ui-kit`]),F=n([`root-access`]),I=n([`system`,`immutable`]),L=[{name:`modelValue`,type:`string[]`,required:!0,description:`Reactive array of string tag chips`},{name:`label`,type:`string`,required:!0,description:`Field label title displayed above tag input`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`placeholder`,type:`string`,description:`Placeholder hint text`},{name:`validate`,type:`{ min?: number, max?: number }`,description:`Tag count constraints enforcing minimum and maximum number of allowed tags.`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks tag list and disables adding or deleting tags`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code`}],R=[{name:`update:modelValue`,type:`(value: string[], id: string) => void`,description:`Emitted upon tag addition or removal`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when tag count violates min or max rules`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when tag count is within valid boundaries`}];return(n,a)=>{let u=e(`DocHeader`);return t(),i(`div`,_,[o(u),o(m,{title:`Basic Tag Input`,description:`Add tags by typing and pressing Enter or comma. Remove with backspace or close icon.`},{code:d(()=>[o(p,{code:E,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:M.value,"onUpdate:modelValue":a[0]||=e=>M.value=e,label:l(A)?`Kata Kunci Keahlian`:`Skill Keywords`,placeholder:l(A)?`Ketik keahlian dan tekan Enter...`:`Type skill and press Enter...`,lang:l(j)},null,8,[`modelValue`,`label`,`placeholder`,`lang`]),r(`div`,v,[s(c(l(A)?`Tag Terpilih:`:`Selected Tags:`)+` `,1),r(`code`,y,c(JSON.stringify(M.value)),1)])]),_:1}),o(m,{title:`Real-Time Validation (Min & Max Tag Count)`,description:`Enforces tag count rules: requires at least 2 tags and at most 5 tags.`},{code:d(()=>[o(p,{code:D,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:N.value,"onUpdate:modelValue":a[1]||=e=>N.value=e,label:l(A)?`Topik Artikel`:`Article Topics`,placeholder:l(A)?`Tambahkan antara 2 hingga 5 topik...`:`Add between 2 and 5 topics...`,lang:l(j),validate:{min:2,max:5}},null,8,[`modelValue`,`label`,`placeholder`,`lang`]),r(`div`,b,[r(`div`,null,[s(c(l(A)?`Tag Saat Ini (`:`Current Tags (`)+c(N.value.length)+`): `,1),r(`code`,x,c(JSON.stringify(N.value)),1)]),r(`div`,S,c(l(A)?`Menerapkan batas min: 2 tag, max: 5 tag.`:`Enforces min: 2 tags, max: 5 tags.`),1)])]),_:1}),o(m,{title:`With Schema Tooltip`,description:`Displays SEO metadata guidelines via tooltip.`},{code:d(()=>[o(p,{code:O,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:P.value,"onUpdate:modelValue":a[2]||=e=>P.value=e,label:l(A)?`Kata Kunci Meta SEO`:`SEO Meta Keywords`,tooltip:l(A)?`Masukkan kata kunci indeks pencarian yang relevan (misal vue, reaktif, typescript)`:`Enter relevant search index keywords (e.g. vue, reactive, typescript)`,"tooltip-position":`right`,lang:l(j)},null,8,[`modelValue`,`label`,`tooltip`,`lang`])]),_:1}),o(m,{title:`External Error & Disabled States`,description:`Visual invalid tag alerts and locked tag chips.`},{code:d(()=>[o(p,{code:k,language:`vue`})]),default:d(()=>[r(`div`,C,[o(l(f),{modelValue:F.value,"onUpdate:modelValue":a[3]||=e=>F.value=e,label:l(A)?`Tag Peran Server`:`Server Role Tags`,error:l(A)?`Peran produksi harus ditetapkan melalui kebijakan IAM`:`Production roles must be assigned via IAM policies`,lang:l(j)},null,8,[`modelValue`,`label`,`error`,`lang`]),o(l(f),{modelValue:I.value,"onUpdate:modelValue":a[4]||=e=>I.value=e,label:l(A)?`Tag Inti Sistem (Hanya-Baca)`:`System Core Tags (Read-Only)`,disabled:``,lang:l(j)},null,8,[`modelValue`,`label`,`lang`])])]),_:1}),r(`section`,w,[o(h,{props:L})]),r(`section`,T,[o(g,{events:R})])])}}});export{A as default};