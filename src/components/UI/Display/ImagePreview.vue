<template>
  <div
    v-if="isLoading"
    class="zyvnox-w-full zyvnox-h-48 zyvnox-bg-slate-200 dark:zyvnox-bg-slate-700 zyvnox-rounded-lg zyvnox-animate-pulse"
    v-bind="$attrs"
  ></div>

  <img
    loading="lazy"
    v-if="!isLoading && watermarkedImage"
    :src="watermarkedImage"
    :alt="props.alt"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
  imageUrl: string
  watermarkUrl?: string
  watermarkSize?: number
  alt?: string
}

const props = withDefaults(defineProps<Props>(), {
  watermarkUrl:
    'https://res.cloudinary.com/doyufai9q/image/upload/v1754227461/Logo_transparent_b6qrek.png',
  watermarkSize: 4,
  alt: '',
})

const watermarkedImage = ref<string | null>(null)
// [BARU] State untuk melacak status loading
const isLoading = ref(true)

// Fungsi untuk memuat gambar
const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => resolve(img)
    img.onerror = (err) => reject(err)
    img.src = src
  })
}

const applyWatermark = (image: HTMLImageElement, watermark: HTMLImageElement): string => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    console.error('Gagal mendapatkan konteks canvas 2D.')
    return image.src // Fallback to original image if context fails
  }

  canvas.width = image.width
  canvas.height = image.height

  ctx.drawImage(image, 0, 0)

  const watermarkWidth = image.width / props.watermarkSize
  const watermarkHeight = (watermark.height / watermark.width) * watermarkWidth

  const x = image.width - watermarkWidth - 10
  const y = image.height - watermarkHeight - 10
  ctx.globalAlpha = 0.8
  ctx.drawImage(watermark, x, y, watermarkWidth, watermarkHeight)
  ctx.globalAlpha = 1
  return canvas.toDataURL('image/png')
}

onMounted(async () => {
  // [MODIFIKASI] Gunakan try...finally agar isLoading selalu di-set false
  try {
    const image = await loadImage(props.imageUrl)
    const watermark = await loadImage(props.watermarkUrl)
    watermarkedImage.value = applyWatermark(image, watermark)
  } catch (error) {
    console.error('Gagal menerapkan watermark, menampilkan gambar asli:', error)
    watermarkedImage.value = props.imageUrl // Fallback ke gambar asli jika error
  } finally {
    isLoading.value = false // Apapun hasilnya, loading selesai
  }
})
</script>
