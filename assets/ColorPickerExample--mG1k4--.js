import{M as e,O as t,U as n,c as r,d as i,g as a,h as o,m as s,mt as c,pt as l,q as u,t as d,z as f}from"./i18n-CQHTY6ci.js";import{t as p}from"./ColorPicker-BwavQaeB.js";import{t as m}from"./CodeBlock-Cjmxf9F4.js";import{n as h,t as g}from"./PropsTable-Dv1x2aJC.js";import{t as _}from"./EventsTable-D-LMtD8H.js";var v={class:`space-y-8`},y={class:`text-xs text-slate-500 flex items-center gap-2`},b={class:`font-mono font-bold`},x={class:`text-xs text-slate-500 space-y-1`},S={class:`font-mono font-bold`},C={class:`text-slate-400 dark:text-slate-500`},w={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},T={class:`space-y-4`},E={class:`space-y-4`},D=`<template>
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
<\/script>`,O=`<ColorInput
  v-model="palette"
  label="Brand Color Palette"
  :single="false"
  :validate="{
    min: 2,
    max: 4,
  }"
/>`,k=`<ColorInput
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
/>`,A=a({__name:`ColorPickerExample`,setup(a){let{isIndonesian:A,currentLocale:j}=d(),M=n(`#3b82f6`),N=n([`#3b82f6`]),P=n(`#ffff00`),F=n(`#64748b`),I=[{name:`modelValue`,type:`string[] | string`,required:!0,description:`Reactive hex color string (single mode) or array of hex strings (palette mode)`},{name:`label`,type:`string`,description:`Label title displayed above the color picker`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`single`,type:`boolean`,default:`false`,description:`When true, selects a single hex color string instead of an array of colors`},{name:`selectedColors`,type:`string[]`,description:`Initial preset palette of hex colors`},{name:`validate`,type:`{ min?: number, max?: number }`,description:`Palette count validation boundaries enforcing minimum and maximum number of selected colors in palette mode.`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks color input and disables adding/removing colors`},{name:`error`,type:`string[] | string`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for button labels and error notices`}],L=[{name:`update:modelValue`,type:`(value: string[] | string, id: string) => void`,description:`Emitted upon color addition, removal, or change`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when palette violates min or max color counts`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when palette count is valid`}];return(n,a)=>{let d=e(`DocHeader`);return t(),i(`div`,v,[o(d),o(h,{title:`Single Color Picker`,description:`Picks a single HEX color code.`},{code:f(()=>[o(m,{code:D,language:`vue`})]),default:f(()=>[o(u(p),{modelValue:M.value,"onUpdate:modelValue":a[0]||=e=>M.value=e,label:u(A)?`Warna Utama Tema`:`Theme Primary Color`,single:!0,selectedColors:[`#ef4444`,`#f97316`,`#f59e0b`,`#10b981`,`#06b6d4`,`#3b82f6`,`#8b5cf6`,`#ec4899`],lang:u(j)},null,8,[`modelValue`,`label`,`lang`]),r(`div`,y,[r(`span`,null,c(u(A)?`Warna Terpilih:`:`Selected Color:`),1),r(`span`,{class:`inline-block w-4 h-4 rounded border border-slate-300 dark:border-slate-600`,style:l({backgroundColor:M.value})},null,4),r(`code`,b,c(M.value),1)])]),_:1}),o(h,{title:`Multi-Color Palette (Min & Max Validation)`,description:`Select multiple colors to compose a theme palette with validation enforcing min 2 and max 4 colors.`},{code:f(()=>[o(m,{code:O,language:`vue`})]),default:f(()=>[o(u(p),{modelValue:N.value,"onUpdate:modelValue":a[1]||=e=>N.value=e,label:u(A)?`Palet Warna Merek`:`Brand Color Palette`,tooltip:u(A)?`Pilih antara 2 hingga 4 warna identitas merek`:`Select between 2 and 4 brand identity colors`,"tooltip-position":`right`,single:!1,lang:u(j),validate:{min:2,max:4}},null,8,[`modelValue`,`label`,`tooltip`,`lang`]),r(`div`,x,[r(`div`,null,[s(c(u(A)?`Palet Saat Ini:`:`Current Palette:`)+` `,1),r(`code`,S,c(JSON.stringify(N.value)),1)]),r(`div`,C,c(u(A)?`Menerapkan batas min: 2, max: 4 warna.`:`Enforces min: 2, max: 4 colors.`),1)])]),_:1}),o(h,{title:`External Error & Disabled States`,description:`Visual invalid palette warnings and read-only color displays.`},{code:f(()=>[o(m,{code:k,language:`vue`})]),default:f(()=>[r(`div`,w,[o(u(p),{modelValue:P.value,"onUpdate:modelValue":a[2]||=e=>P.value=e,label:u(A)?`Sorotan Aksen`:`Accent Highlight`,single:!0,error:u(A)?[`Warna yang dipilih melanggar pedoman kontras WCAG terhadap putih`]:[`Selected color violates WCAG contrast guidelines against white`],lang:u(j)},null,8,[`modelValue`,`label`,`error`,`lang`]),o(u(p),{modelValue:F.value,"onUpdate:modelValue":a[3]||=e=>F.value=e,label:u(A)?`Netral Sistem Terkunci (Hanya-Baca)`:`Locked System Neutral (Read-Only)`,single:!0,disabled:``,lang:u(j)},null,8,[`modelValue`,`label`,`lang`])])]),_:1}),r(`section`,T,[o(g,{props:I})]),r(`section`,E,[o(_,{events:L})])])}}});export{A as default};