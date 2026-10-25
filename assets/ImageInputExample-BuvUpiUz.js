import{Mt as e,Ot as t,Tt as n,_t as r,bt as i,gt as a,ht as o,kt as s,l as c,pt as l,ut as u}from"./index-BhghGzgp.js";import{t as d}from"./CodeBlock-CSGfp_x-.js";import{n as f,t as p}from"./PropsTable-rw53ZQEs.js";import{t as m}from"./EventsTable-BlxUYD03.js";var h={class:`space-y-8`},g={class:`text-xs text-slate-500`},_={class:`font-mono font-bold`},v={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},y={class:`space-y-4`},b={class:`space-y-4`},x=`<template>
  <ImageInput
    v-model="heroBanner"
    label="Store Hero Banner"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ImageInput } from '@zyvnox/vue-pack/components'

const heroBanner = ref(null)
<\/script>`,S=`<ImageInput
  v-model="productPhoto"
  label="Featured Product Showcase"
  :validate="{
    maxSize: 2048,
    allowedTypes: ['jpeg', 'png', 'webp'],
    ratio: { Width: 16, Height: 9 },
    pixel: {
      maxWidth: 1920,
      maxHeight: 1080,
    },
  }"
/>`,C=`<ImageInput
  v-model="asset"
  label="Watermarked Corporate Asset"
  :watermark="{
    url: '/favicon.svg',
    position: 'bottom-right',
    opacity: 0.7,
  }"
/>`,w=`<ImageInput
  v-model="avatar"
  label="Profile Avatar"
  error="Avatar dimensions must not exceed 500x500 pixels"
/>
<ImageInput
  v-model="logo"
  label="System Default Logo"
  disabled
/>`,T=r({__name:`ImageInputExample`,setup(r){let T=t(`https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600`),E=t(null),D=t(null),O=t(null),k=t(`/favicon.svg`),A=[{name:`modelValue`,type:`File | string | null`,required:!0,description:`Reactive file object or remote image URL string`},{name:`label`,type:`string`,description:`Label title displayed above upload area`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`previewImage`,type:`string`,description:`Fallback preview image URL displayed before selection`},{name:`previewAlt`,type:`string`,description:`Alt text for image accessibility`},{name:`validate`,type:`{ maxSize?: number, ratio?: { Width: number, Height: number }, pixel?: { maxWidth?: number, maxHeight?: number, minWidth?: number, minHeight?: number }, allowedTypes?: ImageType[] }`,description:`Client-side image validation. Checks file size (KB), aspect ratio, pixel boundaries, and allowed file formats.`},{name:`watermark`,type:`{ url: string, position?: string, opacity?: number, rotate?: number, size?: any }`,description:`Automatic client-side canvas watermarking configuration stamped on uploaded image.`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks image input and prevents modifications`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code`}],j=[{name:`update:modelValue`,type:`(value: File | string | null, id: string) => void`,description:`Emitted upon image selection, URL prompt, or removal`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when image violates size, aspect ratio, or pixel limits`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when image passes all validation checks`}];return(t,r)=>(i(),l(`div`,h,[r[9]||=u(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[u(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` ImageInput `),u(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Single image upload component with live canvas preview, pixel dimensions (min/max), aspect ratio enforcement, watermark overlay, and i18n support. `)],-1),a(f,{title:`Basic Image Upload`,description:`Selects an image file or enters a remote image URL with instant preview.`},{code:n(()=>[a(d,{code:x,language:`vue`})]),default:n(()=>[a(s(c),{modelValue:T.value,"onUpdate:modelValue":r[0]||=e=>T.value=e,label:`Store Hero Banner`},null,8,[`modelValue`]),u(`div`,g,[r[5]||=o(` Selection: `,-1),u(`code`,_,e(typeof T.value==`string`?T.value:T.value?.name??`(none)`),1)])]),_:1}),a(f,{title:`Real-Time Validation (Dimensions, Ratio & Max Size)`,description:`Enforces strict image constraints: max 2048 KB, allowed types (JPEG/PNG/WEBP), aspect ratio 16:9, and max resolution 1920x1080.`},{code:n(()=>[a(d,{code:S,language:`vue`})]),default:n(()=>[a(s(c),{modelValue:E.value,"onUpdate:modelValue":r[1]||=e=>E.value=e,label:`Featured Product Showcase`,tooltip:`Must be 16:9 aspect ratio and maximum 1920x1080 pixels`,"tooltip-position":`right`,validate:{maxSize:2048,allowedTypes:[`jpeg`,`png`,`webp`],ratio:{Width:16,Height:9},pixel:{maxWidth:1920,maxHeight:1080}}},null,8,[`modelValue`]),r[6]||=u(`div`,{class:`text-xs text-slate-500 space-y-1 mt-2`},[u(`div`,{class:`text-slate-400 dark:text-slate-500`},[o(` Constraints: max 2048 KB, allowed: `),u(`code`,{class:`font-mono`},`['jpeg', 'png', 'webp']`),o(`, ratio: 16:9, max dimensions: 1920x1080px. `)])],-1)]),_:1}),a(f,{title:`Image with Branding Watermark`,description:`Applies a semi-transparent branding watermark stamp on uploaded imagery.`},{code:n(()=>[a(d,{code:C,language:`vue`})]),default:n(()=>[a(s(c),{modelValue:D.value,"onUpdate:modelValue":r[2]||=e=>D.value=e,label:`Watermarked Corporate Asset`,watermark:{url:`/favicon.svg`,position:`bottom-right`,opacity:.7}},null,8,[`modelValue`])]),_:1}),a(f,{title:`External Error & Disabled States`,description:`Visual invalid format alerts and read-only image previews.`},{code:n(()=>[a(d,{code:w,language:`vue`})]),default:n(()=>[u(`div`,v,[a(s(c),{modelValue:O.value,"onUpdate:modelValue":r[3]||=e=>O.value=e,label:`Profile Avatar`,error:`Avatar dimensions must not exceed 500x500 pixels`},null,8,[`modelValue`]),a(s(c),{modelValue:k.value,"onUpdate:modelValue":r[4]||=e=>k.value=e,label:`System Default Logo (Read-Only)`,disabled:``},null,8,[`modelValue`])])]),_:1}),u(`section`,y,[r[7]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),a(p,{props:A})]),u(`section`,b,[r[8]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),a(m,{events:j})])]))}});export{T as default};