import DOMPurify, { type Config } from 'dompurify'

export type SanitizeConfig = Config

/**
 * Default secure DOMPurify configuration
 */
export const DEFAULT_DOMPURIFY_CONFIG: Config = {
  USE_PROFILES: { html: true },
  ADD_TAGS: ['hr'],
  ADD_ATTR: ['target', 'rel', 'style', 'class', 'data-checked'],
  FORBID_TAGS: ['style', 'script', 'frame', 'object', 'embed'],
  FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover'],
}

/**
 * Basic server-side sanitization fallback when DOMPurify has no DOM environment (Node/Nuxt SSR)
 */
function fallbackSsrSanitize(html: string): string {
  if (!html || typeof html !== 'string') return ''
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+\s*=\s*(["'])[\s\S]*?\1/gi, '')
    .replace(/on\w+\s*=\s*[^\s>]+/gi, '')
    .replace(/javascript:\s*/gi, '')
}

/**
 * Isomorphic HTML sanitization safe for both Client and SSR (Nuxt 3 / Node.js)
 * @param dirty Raw HTML string
 * @param config Optional DOMPurify configuration
 * @returns Clean, XSS-safe HTML string
 */
export function sanitizeHtml(dirty: string, config?: Config): string {
  if (!dirty || typeof dirty !== 'string') return ''

  const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined'

  if (isBrowser && DOMPurify && typeof DOMPurify.sanitize === 'function') {
    const mergedConfig = { ...DEFAULT_DOMPURIFY_CONFIG, ...(config || {}) }
    const cleaned = DOMPurify.sanitize(dirty, mergedConfig) as string

    // Ensure all target="_blank" links have rel="noopener noreferrer" for security
    return typeof cleaned === 'string'
      ? cleaned.replace(
          /<a\s+(?:[^>]*?\s+)?target="_blank"(?![^>]*?rel=)[^>]*?>/gi,
          (match: string) => match.replace('>', ' rel="noopener noreferrer">'),
        )
      : String(cleaned)
  }

  // Server-side / SSR fallback
  return fallbackSsrSanitize(dirty)
}

/**
 * Strips all HTML tags and returns plain text
 * @param html HTML string
 */
export function stripHtml(html: string): string {
  if (!html || typeof html !== 'string') return ''
  return html.replace(/<[^>]*>/g, '').trim()
}
