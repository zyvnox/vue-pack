import{M as e,O as t,c as n,d as r,g as i,h as a,q as o,t as s,z as c}from"./i18n-CQHTY6ci.js";import{t as l}from"./BaseImage-DU9oQv7P.js";import{t as u}from"./CodeBlock-Cjmxf9F4.js";import{n as d,t as f}from"./PropsTable-Dv1x2aJC.js";var p={class:`space-y-8`},m={class:`max-w-xs`},h={class:`max-w-xs`},g={class:`space-y-4`},_=`<template>
  <BaseImage
    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
    alt="Coding workspace"
  />
</template>

<script setup lang="ts">
import { BaseImage } from '@zyvnox/vue-pack/components'
<\/script>`,v=`<template>
  <!-- Gracefully falls back to placeholder when image fails to load -->
  <BaseImage
    src="https://example.com/non-existent-404.jpg"
    alt="Missing photo"
  />
</template>`,y=i({__name:`BaseImageExample`,setup(i){let{isIndonesian:y}=s(),b=[{name:`src`,type:`string`,required:!0,description:`Image asset source URL`},{name:`alt`,type:`string`,description:`Accessible alternative description text`}];return(i,s)=>{let x=e(`DocHeader`);return t(),r(`div`,p,[a(x),a(d,{title:`Valid Image Display`,description:`Renders a valid image with proper aspect ratio and alt text.`},{code:c(()=>[a(u,{code:_,language:`vue`})]),default:c(()=>[n(`div`,m,[a(o(l),{src:`https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500`,alt:o(y)?`Meja kerja pemrograman rapi`:`Coding workspace setup`},null,8,[`alt`])])]),_:1}),a(d,{title:`Automatic Broken Image Fallback`,description:`Gracefully replaces 404 links or invalid URLs with an aesthetic placeholder.`},{code:c(()=>[a(u,{code:v,language:`vue`})]),default:c(()=>[n(`div`,h,[a(o(l),{src:`https://example.com/non-existent-image-404.png`,alt:o(y)?`Ilustrasi gambar tidak ditemukan`:`Missing asset illustration`},null,8,[`alt`])])]),_:1}),n(`section`,g,[a(f,{props:b})])])}}});export{y as default};