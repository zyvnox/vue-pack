// src/configs/types/seo.types.ts
import type { SecureFetchOptions } from '../../lib/secureFetch'
export type SeoContentType = 'article' | 'product' | 'promo' | 'page'

export interface SeoFieldMapping {
  apiAI?: {
    api: string
    options?: SecureFetchOptions
  }
  contentType: SeoContentType
  scorePath?: string
  analysisPath?: string

  meta: {
    title?: string
    description?: string
    slug?: string
    focusKeyword?: string
    canonical?: string
  }

  content?: {
    body?: string
    image?: string
    tags?: string
    author?: string
    title?: string
  }

  social?: {
    ogTitle?: string
    ogDescription?: string
    ogImage?: string
    ogType?: string // Tambahan untuk response AI
    ogSiteName?: string // Tambahan untuk response AI
    twitterTitle?: string
    twitterDescription?: string
    twitterImage?: string
    twitterCard?: string // Tambahan untuk response AI
  }
}

export interface SeoAnalysisResult {
  score: number
  details: {
    passed: boolean
    score: number
    message: string
    label: string
    group: 'meta' | 'content' | 'social' | 'keyword'
  }[]
}
