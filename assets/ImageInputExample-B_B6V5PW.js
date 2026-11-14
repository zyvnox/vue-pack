import{M as e,O as t,U as n,c as r,d as i,g as a,h as o,m as s,mt as c,q as l,t as u,z as d}from"./i18n-CQHTY6ci.js";import{t as f}from"./ImageInput-DAJDqxdz.js";import{t as p}from"./CodeBlock-Cjmxf9F4.js";import{n as m,t as h}from"./PropsTable-Dv1x2aJC.js";import{t as g}from"./EventsTable-D-LMtD8H.js";var _={class:`space-y-8`},v={class:`text-xs text-slate-500`},y={class:`font-mono font-bold`},b={class:`text-xs text-slate-500 space-y-1 mt-2`},x={class:`text-slate-400 dark:text-slate-500`},S={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},C={class:`space-y-4`},w={class:`space-y-4`},T=`<template>
  <ImageInput
    v-model="heroBanner"
    label="Store Hero Banner"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ImageInput } from '@zyvnox/vue-pack/components'

const heroBanner = ref(null)
<\/script>`,E=`<ImageInput
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
/>`,D=`<ImageInput
  v-model="asset"
  label="Watermarked Corporate Asset"
  :watermark="{
    url: '/favicon.svg',
    position: 'bottom-right',
    opacity: 0.7,
  }"
/>`,O=`<ImageInput
  v-model="avatar"
  label="Profile Avatar"
  error="Avatar dimensions must not exceed 500x500 pixels"
/>
<ImageInput
  v-model="logo"
  label="System Default Logo"
  disabled
/>`,k=a({__name:`ImageInputExample`,setup(a){let{isIndonesian:k,currentLocale:A}=u(),j=n(`https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600`),M=n(null),N=n(null),P=n(null),F=n(`/favicon.svg`),I=[{name:`modelValue`,type:`File | string | null`,required:!0,description:`Reactive file object or remote image URL string`},{name:`label`,type:`string`,description:`Label title displayed above upload area`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`previewImage`,type:`string`,description:`Fallback preview image URL displayed before selection`},{name:`previewAlt`,type:`string`,description:`Alt text for image accessibility`},{name:`validate`,type:`{ maxSize?: number, ratio?: { Width: number, Height: number }, pixel?: { maxWidth?: number, maxHeight?: number, minWidth?: number, minHeight?: number }, allowedTypes?: ImageType[] }`,description:`Client-side image validation. Checks file size (KB), aspect ratio, pixel boundaries, and allowed file formats.`},{name:`watermark`,type:`{ url: string, position?: string, opacity?: number, rotate?: number, size?: any }`,description:`Automatic client-side canvas watermarking configuration stamped on uploaded image.`},{name:`disabled`,type:`boolean`,default:`false`,description:`Locks image input and prevents modifications`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup location`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or emoji displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code`}],L=[{name:`update:modelValue`,type:`(value: File | string | null, id: string) => void`,description:`Emitted upon image selection, URL prompt, or removal`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when image violates size, aspect ratio, or pixel limits`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when image passes all validation checks`}];return(n,a)=>{let u=e(`DocHeader`);return t(),i(`div`,_,[o(u),o(m,{title:`Basic Image Upload`,description:`Selects an image file or enters a remote image URL with instant preview.`},{code:d(()=>[o(p,{code:T,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:j.value,"onUpdate:modelValue":a[0]||=e=>j.value=e,label:l(k)?`Banner Utama Toko`:`Store Hero Banner`,lang:l(A)},null,8,[`modelValue`,`label`,`lang`]),r(`div`,v,[s(c(l(k)?`Pilihan Saat Ini:`:`Current Selection:`)+` `,1),r(`code`,y,c(typeof j.value==`string`?j.value:j.value?.name??(l(k)?`(tidak ada)`:`(none)`)),1)])]),_:1}),o(m,{title:`Real-Time Validation (Dimensions, Ratio & Max Size)`,description:`Enforces strict image constraints: max 2048 KB, allowed types (JPEG/PNG/WEBP), aspect ratio 16:9, and max resolution 1920x1080.`},{code:d(()=>[o(p,{code:E,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:M.value,"onUpdate:modelValue":a[1]||=e=>M.value=e,label:l(k)?`Etalase Produk Unggulan`:`Featured Product Showcase`,tooltip:l(k)?`Harus rasio 16:9 dan resolusi maksimal 1920x1080 piksel`:`Must be 16:9 aspect ratio and maximum 1920x1080 pixels`,"tooltip-position":`right`,lang:l(A),validate:{maxSize:2048,allowedTypes:[`jpeg`,`png`,`webp`],ratio:{Width:16,Height:9},pixel:{maxWidth:1920,maxHeight:1080}}},null,8,[`modelValue`,`label`,`tooltip`,`lang`]),r(`div`,b,[r(`div`,x,[s(c(l(k)?`Batasan: maksimal 2048 KB, format yang diizinkan:`:`Constraints: max 2048 KB, allowed:`)+` `,1),a[5]||=r(`code`,{class:`font-mono`},`['jpeg', 'png', 'webp']`,-1),s(c(l(k)?`, rasio: 16:9, resolusi maksimal: 1920x1080px.`:`, ratio: 16:9, max dimensions: 1920x1080px.`),1)])])]),_:1}),o(m,{title:`Image with Branding Watermark`,description:`Applies a semi-transparent branding watermark stamp on uploaded imagery.`},{code:d(()=>[o(p,{code:D,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:N.value,"onUpdate:modelValue":a[2]||=e=>N.value=e,label:l(k)?`Aset Perusahaan Ber-Watermark`:`Watermarked Corporate Asset`,lang:l(A),watermark:{url:`/favicon.svg`,position:`bottom-right`,opacity:.7}},null,8,[`modelValue`,`label`,`lang`])]),_:1}),o(m,{title:`External Error & Disabled States`,description:`Visual invalid format alerts and read-only image previews.`},{code:d(()=>[o(p,{code:O,language:`vue`})]),default:d(()=>[r(`div`,S,[o(l(f),{modelValue:P.value,"onUpdate:modelValue":a[3]||=e=>P.value=e,label:l(k)?`Foto Profil Avatar`:`Profile Avatar`,error:l(k)?`Dimensi avatar tidak boleh melebihi 500x500 piksel`:`Avatar dimensions must not exceed 500x500 pixels`,lang:l(A)},null,8,[`modelValue`,`label`,`error`,`lang`]),o(l(f),{modelValue:F.value,"onUpdate:modelValue":a[4]||=e=>F.value=e,label:l(k)?`Logo Bawaan Sistem (Hanya-Baca)`:`System Default Logo (Read-Only)`,disabled:``,lang:l(A)},null,8,[`modelValue`,`label`,`lang`])])]),_:1}),r(`section`,C,[o(h,{props:I})]),r(`section`,w,[o(g,{events:L})])])}}});export{k as default};