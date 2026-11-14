import{M as e,O as t,U as n,c as r,d as i,g as a,h as o,m as s,mt as c,q as l,t as u,z as d}from"./i18n-CQHTY6ci.js";import{t as f}from"./ImageArrayInput-B5xRr0bU.js";import{t as p}from"./CodeBlock-Cjmxf9F4.js";import{n as m,t as h}from"./PropsTable-Dv1x2aJC.js";import{t as g}from"./EventsTable-D-LMtD8H.js";var _={class:`space-y-8`},v={class:`text-xs text-slate-500`},y={class:`font-mono font-bold`},b={class:`text-xs text-slate-500 space-y-1 mt-2`},x={class:`text-slate-400 dark:text-slate-500`},S={class:`space-y-4`},C={class:`space-y-4`},w={class:`space-y-4`},T=`<template>
  <ImageArrayInput
    v-model="photos"
    label="Product Showcase Gallery"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ImageArrayInput } from '@zyvnox/vue-pack/components'

const photos = ref([])
<\/script>`,E=`<ImageArrayInput
  v-model="propertyPhotos"
  label="Property Portfolio Gallery"
  tooltip="Upload up to 4 high-res photos"
  tooltip-position="right"
  :validate="{
    maxFiles: 4,
    maxSize: 3000,
    allowedTypes: ['jpeg', 'png', 'webp'],
  }"
/>`,D=`<ImageArrayInput
  v-model="photos"
  label="Real Estate Showcase"
  :preview-images="existingUrls"
/>`,O=`<ImageArrayInput
  v-model="thumbnails"
  label="Catalog Thumbnail Set"
  error="You must provide at least 2 catalog images"
/>
<ImageArrayInput
  v-model="lockedGallery"
  label="Locked Archive Gallery"
  disabled
/>`,k=a({__name:`ImageArrayInputExample`,setup(a){let{isIndonesian:k,currentLocale:A}=u(),j=n([]),M=n([]),N=n([`https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300`,`https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=300`]),P=n([]),F=n([]),I=[`https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300`,`https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=300`,`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300`],L=[{name:`modelValue`,type:`(File | string)[]`,required:!0,description:`Reactive array of image files or remote URL strings`},{name:`label`,type:`string`,description:`Field label title displayed above gallery`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`previewImages`,type:`string[]`,description:`Array of image URLs for initial thumbnail gallery`},{name:`previewAlt`,type:`string`,description:`Alt accessibility text for gallery images`},{name:`validate`,type:`{ maxFiles?: number, maxSize?: number, ratio?: { Width: number, Height: number }, pixel?: any, allowedTypes?: ImageType[] }`,description:`Multi-image gallery validation rules: max total image count, file size (KB) per image, pixel resolution bounds, and allowed image types.`},{name:`watermark`,type:`{ url: string, position?: string, opacity?: number, rotate?: number, size?: any }`,description:`Automatic client-side canvas watermarking configuration applied to all uploaded photos.`},{name:`disabled`,type:`boolean`,default:`false`,description:`Disables photo uploads and deletion actions`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code`}],R=[{name:`update:modelValue`,type:`(value: (File | string)[]) => void`,description:`Emitted upon photo uploads or removals`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when gallery violates maxFiles, maxSize, or allowedTypes`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when gallery satisfies all validation rules`}];return(n,a)=>{let u=e(`DocHeader`);return t(),i(`div`,_,[o(u),o(m,{title:`Multi-Image Gallery Dropzone`,description:`Upload multiple photos with grid previews and deletion controls.`},{code:d(()=>[o(p,{code:T,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:j.value,"onUpdate:modelValue":a[0]||=e=>j.value=e,label:l(k)?`Galeri Etalase Produk`:`Product Showcase Gallery`,lang:l(A)},null,8,[`modelValue`,`label`,`lang`]),r(`div`,v,[s(c(l(k)?`Jumlah Foto Diunggah:`:`Images Uploaded:`)+` `,1),r(`code`,y,c(j.value?.length||0),1)])]),_:1}),o(m,{title:`Real-Time Validation (Max Count, Allowed Types & Max Size)`,description:`Restricts gallery to max 4 photos, limits each file to 3000 KB (3MB), and requires JPEG/PNG/WEBP formats.`},{code:d(()=>[o(p,{code:E,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:M.value,"onUpdate:modelValue":a[1]||=e=>M.value=e,label:l(k)?`Galeri Portofolio Properti`:`Property Portfolio Gallery`,tooltip:l(k)?`Unggah hingga 4 foto resolusi tinggi dalam format JPG, PNG, atau WEBP`:`Upload up to 4 high-resolution photos in JPG, PNG, or WEBP format`,"tooltip-position":`right`,lang:l(A),validate:{maxFiles:4,maxSize:3e3,allowedTypes:[`jpeg`,`png`,`webp`]}},null,8,[`modelValue`,`label`,`tooltip`,`lang`]),r(`div`,b,[r(`div`,x,[s(c(l(k)?`Batasan: maxFiles: 4, maxSize: 3000 KB per foto, format diizinkan:`:`Constraints: maxFiles: 4, maxSize: 3000 KB per photo, allowed:`)+` `,1),a[5]||=r(`code`,{class:`font-mono`},`['jpeg', 'png', 'webp']`,-1),a[6]||=s(`. `,-1)])])]),_:1}),o(m,{title:`With Existing Photos Previews`,description:`Pre-populates existing image URLs in gallery.`},{code:d(()=>[o(p,{code:D,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:N.value,"onUpdate:modelValue":a[2]||=e=>N.value=e,label:l(k)?`Galeri Properti Real Estat`:`Real Estate Property Showcase`,"preview-images":I,lang:l(A)},null,8,[`modelValue`,`label`,`lang`])]),_:1}),o(m,{title:`External Error & Disabled States`,description:`Visual invalid photo count alerts and locked gallery views.`},{code:d(()=>[o(p,{code:O,language:`vue`})]),default:d(()=>[r(`div`,S,[o(l(f),{modelValue:P.value,"onUpdate:modelValue":a[3]||=e=>P.value=e,label:l(k)?`Koleksi Thumbnail Katalog`:`Catalog Thumbnail Set`,error:l(k)?`Anda harus menyertakan minimal 2 gambar katalog`:`You must provide at least 2 catalog images`,lang:l(A)},null,8,[`modelValue`,`label`,`error`,`lang`]),o(l(f),{modelValue:F.value,"onUpdate:modelValue":a[4]||=e=>F.value=e,label:l(k)?`Galeri Arsip Terkunci (Hanya-Baca)`:`Locked Archive Gallery (Read-Only)`,disabled:``,"preview-images":I.slice(0,2),lang:l(A)},null,8,[`modelValue`,`label`,`preview-images`,`lang`])])]),_:1}),r(`section`,C,[o(h,{props:L})]),r(`section`,w,[o(g,{events:R})])])}}});export{k as default};