import{Mt as e,Ot as t,Tt as n,_t as r,bt as i,gt as a,ht as o,kt as s,pt as c,r as l,ut as u}from"./index-BhghGzgp.js";import{t as d}from"./CodeBlock-CSGfp_x-.js";import{n as f,t as p}from"./PropsTable-rw53ZQEs.js";import{t as m}from"./EventsTable-BlxUYD03.js";var h={class:`space-y-8`},g={class:`text-xs text-slate-500`},_={class:`font-mono font-bold`},v={class:`space-y-4`},y={class:`space-y-4`},b={class:`space-y-4`},x=`<template>
  <ImageArrayInput
    v-model="photos"
    label="Product Showcase Gallery"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ImageArrayInput } from '@zyvnox/vue-pack/components'

const photos = ref([])
<\/script>`,S=`<ImageArrayInput
  v-model="propertyPhotos"
  label="Property Portfolio Gallery"
  tooltip="Upload up to 4 high-res photos"
  tooltip-position="right"
  :validate="{
    maxFiles: 4,
    maxSize: 3000,
    allowedTypes: ['jpeg', 'png', 'webp'],
  }"
/>`,C=`<ImageArrayInput
  v-model="photos"
  label="Real Estate Showcase"
  :preview-images="existingUrls"
/>`,w=`<ImageArrayInput
  v-model="thumbnails"
  label="Catalog Thumbnail Set"
  error="You must provide at least 2 catalog images"
/>
<ImageArrayInput
  v-model="lockedGallery"
  label="Locked Archive Gallery"
  disabled
/>`,T=r({__name:`ImageArrayInputExample`,setup(r){let T=t([]),E=t([]),D=t([`https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300`,`https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=300`]),O=t([]),k=t([]),A=[`https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300`,`https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=300`,`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300`],j=[{name:`modelValue`,type:`(File | string)[]`,required:!0,description:`Reactive array of image files or remote URL strings`},{name:`label`,type:`string`,description:`Field label title displayed above gallery`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`previewImages`,type:`string[]`,description:`Array of image URLs for initial thumbnail gallery`},{name:`previewAlt`,type:`string`,description:`Alt accessibility text for gallery images`},{name:`validate`,type:`{ maxFiles?: number, maxSize?: number, ratio?: { Width: number, Height: number }, pixel?: any, allowedTypes?: ImageType[] }`,description:`Multi-image gallery validation rules: max total image count, file size (KB) per image, pixel resolution bounds, and allowed image types.`},{name:`watermark`,type:`{ url: string, position?: string, opacity?: number, rotate?: number, size?: any }`,description:`Automatic client-side canvas watermarking configuration applied to all uploaded photos.`},{name:`disabled`,type:`boolean`,default:`false`,description:`Disables photo uploads and deletion actions`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code`}],M=[{name:`update:modelValue`,type:`(value: (File | string)[]) => void`,description:`Emitted upon photo uploads or removals`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when gallery violates maxFiles, maxSize, or allowedTypes`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when gallery satisfies all validation rules`}];return(t,r)=>(i(),c(`div`,h,[r[9]||=u(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[u(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` ImageArrayInput (Photo Gallery Dropzone) `),u(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Multi-image gallery uploader featuring thumbnail grid preview, individual image deletion, max file count boundaries, format & dimension validation, and tooltip guidance. `)],-1),a(f,{title:`Multi-Image Gallery Dropzone`,description:`Upload multiple photos with grid previews and deletion controls.`},{code:n(()=>[a(d,{code:x,language:`vue`})]),default:n(()=>[a(s(l),{modelValue:T.value,"onUpdate:modelValue":r[0]||=e=>T.value=e,label:`Product Showcase Gallery`},null,8,[`modelValue`]),u(`div`,g,[r[5]||=o(` Images Uploaded: `,-1),u(`code`,_,e(T.value?.length||0),1)])]),_:1}),a(f,{title:`Real-Time Validation (Max Count, Allowed Types & Max Size)`,description:`Restricts gallery to max 4 photos, limits each file to 3000 KB (3MB), and requires JPEG/PNG/WEBP formats.`},{code:n(()=>[a(d,{code:S,language:`vue`})]),default:n(()=>[a(s(l),{modelValue:E.value,"onUpdate:modelValue":r[1]||=e=>E.value=e,label:`Property Portfolio Gallery`,tooltip:`Upload up to 4 high-resolution photos in JPG, PNG, or WEBP format`,"tooltip-position":`right`,validate:{maxFiles:4,maxSize:3e3,allowedTypes:[`jpeg`,`png`,`webp`]}},null,8,[`modelValue`]),r[6]||=u(`div`,{class:`text-xs text-slate-500 space-y-1 mt-2`},[u(`div`,{class:`text-slate-400 dark:text-slate-500`},[o(` Constraints: maxFiles: 4, maxSize: 3000 KB per photo, allowed: `),u(`code`,{class:`font-mono`},`['jpeg', 'png', 'webp']`),o(`. `)])],-1)]),_:1}),a(f,{title:`With Existing Photos Previews`,description:`Pre-populates existing image URLs in gallery.`},{code:n(()=>[a(d,{code:C,language:`vue`})]),default:n(()=>[a(s(l),{modelValue:D.value,"onUpdate:modelValue":r[2]||=e=>D.value=e,label:`Real Estate Property Showcase`,"preview-images":A},null,8,[`modelValue`])]),_:1}),a(f,{title:`External Error & Disabled States`,description:`Visual invalid photo count alerts and locked gallery views.`},{code:n(()=>[a(d,{code:w,language:`vue`})]),default:n(()=>[u(`div`,v,[a(s(l),{modelValue:O.value,"onUpdate:modelValue":r[3]||=e=>O.value=e,label:`Catalog Thumbnail Set`,error:`You must provide at least 2 catalog images`},null,8,[`modelValue`]),a(s(l),{modelValue:k.value,"onUpdate:modelValue":r[4]||=e=>k.value=e,label:`Locked Archive Gallery (Read-Only)`,disabled:``,"preview-images":A.slice(0,2)},null,8,[`modelValue`,`preview-images`])])]),_:1}),u(`section`,y,[r[7]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),a(p,{props:j})]),u(`section`,b,[r[8]||=u(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Events`,-1),a(m,{events:M})])]))}});export{T as default};