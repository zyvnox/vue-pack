import{Mt as e,Ot as t,Tt as n,_t as r,bt as i,g as a,gt as o,ht as s,kt as c,pt as l,ut as u}from"./index-DnYmOVzH.js";import{t as d}from"./CodeBlock-DwBCo2Nh.js";import{n as f,t as p}from"./PropsTable-UA4HlyP4.js";import{t as m}from"./EventsTable-BFB74qr4.js";var h={class:`space-y-8`},g={class:`text-xs text-slate-500`},_={class:`font-mono font-bold`},v={class:`text-xs text-slate-500 space-y-1`},y={class:`font-mono font-bold`},b={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},x={class:`space-y-4`},S={class:`space-y-4`},C=`<template>
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
<\/script>`,w=`<TagInput
  v-model="topics"
  label="Article Topics"
  :validate="{
    min: 2,
    max: 5,
  }"
/>`,T=`<TagInput
  v-model="keywords"
  label="SEO Meta Keywords"
  tooltip="Enter relevant search keywords"
  tooltip-position="right"
/>`,E=`<TagInput
  v-model="roles"
  label="Server Role Tags"
  error="Production roles must be assigned via IAM"
/>
<TagInput
  v-model="coreTags"
  label="System Core Tags"
  disabled
/>`,D=r({__name:`TagInputExample`,setup(r){let D=t([`Vue 3`,`TypeScript`,`UnoCSS`]),O=t([`SingleTag`]),k=t([`frontend`,`library`,`ui-kit`]),A=t([`root-access`]),j=t([`system`,`immutable`]),M=[{name:`modelValue`,type:`string[]`,required:!0,description:`Reactive array of string tag chips`},{name:`label`,type:`string`,required:!0,description:`Field label title displayed above tag input`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`placeholder`,type:`string`,description:`Placeholder hint text`},{name:`validate`,type:`{ min?: number, max?: number }`,description:`Tag count constraints enforcing minimum and maximum number of allowed tags.`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks tag list and disables adding or deleting tags`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code`}],N=[{name:`update:modelValue`,type:`(value: string[], id: string) => void`,description:`Emitted upon tag addition or removal`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when tag count violates min or max rules`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when tag count is within valid boundaries`}];return(t,r)=>(i(),l(`div`,h,[r[9]||=u(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[u(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` TagInput `),u(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Tag chip generator input with keyboard shortcuts (Enter / comma), tag count boundaries (min/max), custom tooltips, and i18n support. `)],-1),o(f,{title:`Basic Tag Input`,description:`Add tags by typing and pressing Enter or comma. Remove with backspace or close icon.`},{code:n(()=>[o(d,{code:C,language:`vue`})]),default:n(()=>[o(c(a),{modelValue:D.value,"onUpdate:modelValue":r[0]||=e=>D.value=e,label:`Skill Keywords`,placeholder:`Type skill and press Enter...`},null,8,[`modelValue`]),u(`div`,g,[r[5]||=s(` Selected Tags: `,-1),u(`code`,_,e(JSON.stringify(D.value)),1)])]),_:1}),o(f,{title:`Real-Time Validation (Min & Max Tag Count)`,description:`Enforces tag count rules: requires at least 2 tags and at most 5 tags.`},{code:n(()=>[o(d,{code:w,language:`vue`})]),default:n(()=>[o(c(a),{modelValue:O.value,"onUpdate:modelValue":r[1]||=e=>O.value=e,label:`Article Topics`,placeholder:`Add between 2 and 5 topics...`,validate:{min:2,max:5}},null,8,[`modelValue`]),u(`div`,v,[u(`div`,null,[s(`Current Tags (`+e(O.value.length)+`): `,1),u(`code`,y,e(JSON.stringify(O.value)),1)]),r[6]||=u(`div`,{class:`text-slate-400 dark:text-slate-500`},` Enforces min: 2 tags, max: 5 tags. `,-1)])]),_:1}),o(f,{title:`With Schema Tooltip`,description:`Displays SEO metadata guidelines via tooltip.`},{code:n(()=>[o(d,{code:T,language:`vue`})]),default:n(()=>[o(c(a),{modelValue:k.value,"onUpdate:modelValue":r[2]||=e=>k.value=e,label:`SEO Meta Keywords`,tooltip:`Enter relevant search index keywords (e.g. vue, reactive, typescript)`,"tooltip-position":`right`},null,8,[`modelValue`])]),_:1}),o(f,{title:`External Error & Disabled States`,description:`Visual invalid tag alerts and locked tag chips.`},{code:n(()=>[o(d,{code:E,language:`vue`})]),default:n(()=>[u(`div`,b,[o(c(a),{modelValue:A.value,"onUpdate:modelValue":r[3]||=e=>A.value=e,label:`Server Role Tags`,error:`Production roles must be assigned via IAM policies`},null,8,[`modelValue`]),o(c(a),{modelValue:j.value,"onUpdate:modelValue":r[4]||=e=>j.value=e,label:`System Core Tags (Read-Only)`,disabled:``},null,8,[`modelValue`])])]),_:1}),u(`section`,x,[r[7]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),o(p,{props:M})]),u(`section`,S,[r[8]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),o(m,{events:N})])]))}});export{D as default};