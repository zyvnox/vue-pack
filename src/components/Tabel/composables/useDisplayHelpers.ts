import type { Item } from '../../../configs/types'

const imageExtensions = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/i
const fileExtensions = /\.(pdf|doc|docx|xls|xlsx|ppt|pptx|txt|zip|rar)$/i

/**
 * Memeriksa apakah nilai adalah URL gambar atau objek File gambar.
 */
export function isImage(value: any): boolean {
  if (!value) return false
  if (typeof value === 'string') {
    return (
      /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(value.toLowerCase()) ||
      value.startsWith('data:image/') ||
      value.startsWith('blob:')
    )
  }
  if (value instanceof File) {
    return value.type.startsWith('image/')
  }
  return value instanceof File || (typeof value === 'object' && value.type?.startsWith('image/'))
}

/**
 * Memeriksa apakah nilai adalah URL file (non-gambar) atau objek File.
 */
export function isFile(value: any): boolean {
  if (!value || isImage(value)) return false
  if (typeof value === 'string') {
    return fileExtensions.test(value) || value.startsWith('blob:')
  }
  return value instanceof File
}

/**
 * Mendapatkan sumber URL yang valid untuk gambar, baik dari string maupun objek File.
 */
export function getImageSource(value: any): string {
  if (typeof value === 'string') return value
  if (value instanceof File) {
    return URL.createObjectURL(value)
  }
  if (typeof value === 'object' && value.url) {
    return value.url
  }
  return ''
}

/**
 * Mendapatkan nama file dari URL atau objek File.
 */
export function getFileName(value: string | File): string {
  if (typeof value === 'string') {
    try {
      const url = new URL(value)
      const pathname = url.pathname
      return pathname.substring(pathname.lastIndexOf('/') + 1)
    } catch (e) {
      // Fallback untuk string yang bukan URL valid (misal: nama file saja)
      return value.substring(value.lastIndexOf('/') + 1)
    }
  }
  return value.name
}

/**
 * Memeriksa apakah nilai adalah array yang berisi gambar.
 */
export function isImageArray(value: any): boolean {
  return Array.isArray(value) && value.every((v) => isImage(v))
}

export function isColorArray(value: any): boolean {
  if (!Array.isArray(value)) return false
  return value.every((item) => isColor(item))
}

/**
 * Memeriksa apakah nilai adalah array yang berisi file.
 */
export function isFileArray(value: any): boolean {
  return Array.isArray(value) && value.length > 0 && value.every((v) => isFile(v) || isImage(v))
}

export function isColor(value: any): boolean {
  if (typeof value !== 'string') return false

  // Check hex color
  if (/^#([0-9A-F]{3}){1,2}$/i.test(value)) return true

  // Check rgb/rgba color
  if (/^rgb(a?)\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d\.]+\s*)?\)$/i.test(value)) return true

  // Check hsl/hsla color
  if (/^hsl(a?)\(\s*\d+\s*,\s*[\d\.]+%\s*,\s*[\d\.]+%\s*(,\s*[\d\.]+\s*)?\)$/i.test(value))
    return true

  // Check named colors
  const namedColors = [
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'purple',
    'pink',
    'brown',
    'black',
    'white',
    'gray',
    'cyan',
    'magenta',
    'lime',
    'maroon',
    'navy',
    'olive',
    'teal',
    'silver',
    'aqua',
  ]
  return namedColors.includes(value.toLowerCase())
}

export function isHtml(value: string) {
  const htmlRegex = /<\/?[a-z][\s\S]*>/i
  return htmlRegex.test(value)
}

export function displayItem(item: Item, IdKey?: string) {
  let id: string = IdKey ?? 'id'
  return Object.keys(item).reduce<Record<string, any>>((acc, key) => {
    if (key !== id) acc[key] = item[key]
    return acc
  }, {})
}
