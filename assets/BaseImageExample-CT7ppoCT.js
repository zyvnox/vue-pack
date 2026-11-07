import{Tt as e,_t as t,bt as n,gt as r,kt as i,pt as a,ut as o,w as s}from"./index-CrXSRddH.js";import{t as c}from"./CodeBlock-BTTdjRwt.js";import{n as l,t as u}from"./PropsTable-eGS096RT.js";var d={class:`space-y-8`},f={class:`max-w-xs`},p={class:`max-w-xs`},m={class:`space-y-4`},h=`<template>
  <BaseImage
    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
    alt="Coding workspace"
  />
</template>

<script setup lang="ts">
import { BaseImage } from '@zyvnox/vue-pack/components'
<\/script>`,g=`<template>
  <!-- Gracefully falls back to placeholder when image fails to load -->
  <BaseImage
    src="https://example.com/non-existent-404.jpg"
    alt="Missing photo"
  />
</template>`,_=t({__name:`BaseImageExample`,setup(t){let _=[{name:`src`,type:`string`,required:!0,description:`Image asset source URL`},{name:`alt`,type:`string`,description:`Accessible alternative description text`}];return(t,v)=>(n(),a(`div`,d,[v[1]||=o(`header`,{class:`border-b border-slate-200 dark:border-slate-800 pb-4`},[o(`h1`,{class:`text-3xl font-bold text-slate-900 dark:text-white mb-2`},` BaseImage `),o(`p`,{class:`text-sm text-slate-600 dark:text-slate-400`},` Resilient image display component with broken image fallback, lazy loading support, and smooth load transitions. `)],-1),r(l,{title:`Valid Image Display`,description:`Renders a valid image with proper aspect ratio and alt text.`},{code:e(()=>[r(c,{code:h,language:`vue`})]),default:e(()=>[o(`div`,f,[r(i(s),{src:`https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500`,alt:`Coding workspace setup`})])]),_:1}),r(l,{title:`Automatic Broken Image Fallback`,description:`Gracefully replaces 404 links or invalid URLs with an aesthetic placeholder.`},{code:e(()=>[r(c,{code:g,language:`vue`})]),default:e(()=>[o(`div`,p,[r(i(s),{src:`https://example.com/non-existent-image-404.png`,alt:`Missing asset illustration`})])]),_:1}),o(`section`,m,[v[0]||=o(`h2`,{class:`text-xl font-bold text-slate-900 dark:text-slate-100`},`Props`,-1),r(u,{props:_})])]))}});export{_ as default};