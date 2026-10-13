import{Mt as e,Ot as t,Tt as n,_t as r,bt as i,gt as a,ht as o,i as s,jt as c,kt as l,pt as u,ut as d}from"./index-Dtl-Gxe1.js";import{t as f}from"./CodeBlock-B1_NttD9.js";import{n as p,t as m}from"./PropsTable-B0Jg45bu.js";import{t as h}from"./EventsTable-CCaWn8Vs.js";var g={class:`space-y-8`},_={class:`text-xs text-slate-500 flex items-center gap-2`},v={class:`font-mono font-bold`},y={class:`text-xs text-slate-500 space-y-1`},b={class:`font-mono font-bold`},x={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},S={class:`space-y-4`},C={class:`space-y-4`},w=`<template>
  <ColorInput
    v-model="themeColor"
    label="Theme Primary Color"
    :single="true"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ColorInput } from '@zyvnox/vue-pack/components'

const themeColor = ref('#3b82f6')
<\/script>`,T=`<ColorInput
  v-model="palette"
  label="Brand Color Palette"
  :single="false"
  :validate="{
    min: 2,
    max: 4,
  }"
/>`,E=`<ColorInput
  v-model="accent"
  label="Accent Highlight"
  :single="true"
  :error="['Color violates WCAG contrast guidelines']"
/>
<ColorInput
  v-model="neutral"
  label="System Neutral"
  :single="true"
  disabled
/>`,D=r({__name:`ColorPickerExample`,setup(r){let D=t(`#3b82f6`),O=t([`#3b82f6`]),k=t(`#ffff00`),A=t(`#64748b`),j=[{name:`modelValue`,type:`string[] | string`,required:!0,description:`Reactive hex color string (single mode) or array of hex strings (palette mode)`},{name:`label`,type:`string`,description:`Label title displayed above the color picker`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`single`,type:`boolean`,default:`false`,description:`When true, selects a single hex color string instead of an array of colors`},{name:`selectedColors`,type:`string[]`,description:`Initial preset palette of hex colors`},{name:`validate`,type:`{ min?: number, max?: number }`,description:`Palette count validation boundaries enforcing minimum and maximum number of selected colors in palette mode.`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks color input and disables adding/removing colors`},{name:`error`,type:`string[] | string`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for button labels and error notices`}],M=[{name:`update:modelValue`,type:`(value: string[] | string, id: string) => void`,description:`Emitted upon color addition, removal, or change`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when palette violates min or max color counts`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when palette count is valid`}];return(t,r)=>(i(),u(`div`,g,[r[9]||=d(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[d(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` ColorInput (Color Selector) `),d(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Color selection component supporting both single hex color and multi-color palette array modes, palette item count validation (min/max), custom tooltips, and i18n support. `)],-1),a(p,{title:`Single Color Picker`,description:`Picks a single HEX color code.`},{code:n(()=>[a(f,{code:w,language:`vue`})]),default:n(()=>[a(l(s),{modelValue:D.value,"onUpdate:modelValue":r[0]||=e=>D.value=e,label:`Theme Primary Color`,single:!0},null,8,[`modelValue`]),d(`div`,_,[r[4]||=d(`span`,null,`Selected Color:`,-1),d(`span`,{class:`inline-block w-4 h-4 rounded border border-slate-300 dark:border-slate-600`,style:c({backgroundColor:D.value})},null,4),d(`code`,v,e(D.value),1)])]),_:1}),a(p,{title:`Multi-Color Palette (Min & Max Validation)`,description:`Select multiple colors to compose a theme palette with validation enforcing min 2 and max 4 colors.`},{code:n(()=>[a(f,{code:T,language:`vue`})]),default:n(()=>[a(l(s),{modelValue:O.value,"onUpdate:modelValue":r[1]||=e=>O.value=e,label:`Brand Color Palette`,tooltip:`Select between 2 and 4 brand identity colors`,"tooltip-position":`right`,single:!1,validate:{min:2,max:4}},null,8,[`modelValue`]),d(`div`,y,[d(`div`,null,[r[5]||=o(`Current Palette: `,-1),d(`code`,b,e(JSON.stringify(O.value)),1)]),r[6]||=d(`div`,{class:`text-slate-400 dark:text-slate-500`},` Enforces min: 2, max: 4 colors. `,-1)])]),_:1}),a(p,{title:`External Error & Disabled States`,description:`Visual invalid palette warnings and read-only color displays.`},{code:n(()=>[a(f,{code:E,language:`vue`})]),default:n(()=>[d(`div`,x,[a(l(s),{modelValue:k.value,"onUpdate:modelValue":r[2]||=e=>k.value=e,label:`Accent Highlight`,single:!0,error:[`Selected color violates WCAG contrast guidelines against white`]},null,8,[`modelValue`]),a(l(s),{modelValue:A.value,"onUpdate:modelValue":r[3]||=e=>A.value=e,label:`Locked System Neutral (Read-Only)`,single:!0,disabled:``},null,8,[`modelValue`])])]),_:1}),d(`section`,S,[r[7]||=d(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),a(m,{props:j})]),d(`section`,C,[r[8]||=d(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),a(h,{events:M})])]))}});export{D as default};