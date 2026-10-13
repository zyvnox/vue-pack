// src/utils/seo.ts
import type { SeoFieldMapping, SeoAnalysisResult } from '../configs/types/seo.types'
import { getNested } from './objectPath'

/**
 * Helper: Ambil data string secara aman, menangani nested path,
 * tipe primitif, serta objek multibahasa (mis. { id: '...', en: '...' }).
 */
function extractSafeString(data: Record<string, any>, path?: string): string {
  if (!path) return ''
  const val = getNested(data, path)
  if (val === null || val === undefined) return ''
  if (typeof val === 'string') return val.trim()
  if (typeof val === 'number' || typeof val === 'boolean') return String(val).trim()
  if (typeof val === 'object' && !Array.isArray(val)) {
    // Dukungan objek multibahasa
    if (typeof val.id === 'string' && val.id) return val.id.trim()
    if (typeof val.en === 'string' && val.en) return val.en.trim()
    const firstStr = Object.values(val).find((v) => typeof v === 'string' && v.trim())
    if (firstStr) return String(firstStr).trim()
    return ''
  }
  return ''
}

/**
 * Helper: Ambil array string secara aman dari array, string dengan pemisah koma, atau nilai tunggal.
 */
function extractSafeArray(data: Record<string, any>, path?: string): string[] {
  if (!path) return []
  const val = getNested(data, path)
  if (!val) return []
  if (Array.isArray(val)) {
    return val
      .map((item) => {
        if (typeof item === 'object' && item !== null) {
          return extractSafeString(item, 'name') || extractSafeString(item, 'title') || ''
        }
        return String(item).trim()
      })
      .filter(Boolean)
  }
  if (typeof val === 'string') {
    if (val.includes(','))
      return val
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
    return val.trim() ? [val.trim()] : []
  }
  return [String(val).trim()]
}

/**
 * Helper: Hitung kemunculan kata kunci dengan aman menggunakan boundary kata
 * untuk mencegah false-positive (misal keyword "cat" terhitung di "education").
 */
function countKeywordOccurrences(text: string, keyword: string): number {
  if (!text || !keyword) return 0
  const lowerText = text.toLowerCase()
  const lowerKw = keyword.toLowerCase().trim()
  const escaped = lowerKw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  try {
    // Unicode letter property boundary: cocok di awal/akhir kata tanpa terikat spasi ASCII saja
    const regex = new RegExp(`(^|\\P{L})${escaped}(?=\\P{L}|$)`, 'gui')
    const matches = lowerText.match(regex)
    return matches ? matches.length : 0
  } catch {
    // Fallback regex boundary
    const fallbackRegex = new RegExp(
      `(?:^|\\s|[.,!?;:()"\'-])${escaped}(?=$|\\s|[.,!?;:()"\'-])`,
      'gi',
    )
    const matches = lowerText.match(fallbackRegex)
    return matches ? matches.length : 0
  }
}

/**
 * Kalkulator Analisis SEO On-Page yang komprehensif dan akurat.
 * Menilai Meta tags, Relevansi Keyword, Kualitas Konten, dan Social Share (Open Graph).
 */
export function calculateSeo(
  formData: Record<string, any>,
  options: { seo?: SeoFieldMapping },
): SeoAnalysisResult {
  const defaultResult: SeoAnalysisResult = { score: 0, details: [] }
  if (!options?.seo || !formData) return defaultResult

  const mapping = options.seo
  const data = formData

  // --- 1. EKSTRAKSI FIELD ---
  const metaTitle = extractSafeString(data, mapping.meta?.title)
  const desc = extractSafeString(data, mapping.meta?.description)
  const slug = extractSafeString(data, mapping.meta?.slug)
  const keyword = extractSafeString(data, mapping.meta?.focusKeyword)
  const canonical = extractSafeString(data, mapping.meta?.canonical)

  const contentTitle = extractSafeString(data, mapping.content?.title)
  const rawContent = extractSafeString(data, mapping.content?.body)
  const mainImage = extractSafeString(data, mapping.content?.image)
  const author = extractSafeString(data, mapping.content?.author)
  const tags = extractSafeArray(data, mapping.content?.tags)

  const ogTitle = extractSafeString(data, mapping.social?.ogTitle)
  const ogDesc = extractSafeString(data, mapping.social?.ogDescription)
  const ogImgPath = mapping.social?.ogImage
  const ogImg = ogImgPath ? extractSafeString(data, ogImgPath) : mainImage
  const twitterTitle = extractSafeString(data, mapping.social?.twitterTitle)
  const twitterDesc = extractSafeString(data, mapping.social?.twitterDescription)

  // --- 2. PARSING & SANITASI KONTEN HTML (SSR-Safe) ---
  let plainText = ''
  let wordCount = 0
  let hasSubheadings = false
  let hasLinks = false
  let first100Words = ''
  const subheadings: string[] = []
  const imgAltTexts: string[] = []
  let hasImagesInBody = false

  if (rawContent) {
    // A. Bersihkan script, style, dan komentar HTML agar tidak mencemari kata konten
    const cleanHtml = rawContent
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ')
      .replace(/<!--[\s\S]*?-->/g, ' ')

    // B. Deteksi gambar di body & ekstrak teks ALT
    const imgTags = cleanHtml.match(/<img\b[^>]*>/gi) || []
    hasImagesInBody = imgTags.length > 0
    for (const img of imgTags) {
      const altMatch = img.match(/\balt=(?:["']([^"']*)["']|([^\s>]+))/i)
      if (altMatch) {
        const altVal = (altMatch[1] || altMatch[2] || '').trim().toLowerCase()
        if (altVal) imgAltTexts.push(altVal)
      }
    }

    // C. Deteksi Heading H2 & H3
    const headingMatches = cleanHtml.matchAll(/<h[23]\b[^>]*>([\s\S]*?)<\/h[23]>/gi)
    for (const match of headingMatches) {
      const text = match[1]
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
      if (text) subheadings.push(text.toLowerCase())
    }
    hasSubheadings = subheadings.length > 0

    // D. Deteksi Tautan (Links)
    hasLinks = /<a\b[^>]*\bhref=["'][^"']+["'][^>]*>/gi.test(cleanHtml)

    // E. Konversi ke Plain Text & Decode Entitas HTML
    plainText = cleanHtml
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;|&apos;/g, "'")
      .replace(/\s+/g, ' ')
      .trim()

    const words = plainText ? plainText.split(/\s+/).filter(Boolean) : []
    wordCount = words.length
    first100Words = words.slice(0, 100).join(' ').toLowerCase()
  }

  // --- 3. RUNTIME SCORING SETUP ---
  let totalWeight = 0
  let earnedScore = 0
  const details: SeoAnalysisResult['details'] = []

  const addCheck = (
    passed: boolean,
    message: string,
    label: string,
    group: SeoAnalysisResult['details'][0]['group'],
    weight = 1,
  ) => {
    totalWeight += weight
    if (passed) earnedScore += weight
    details.push({ passed, score: weight, message, label, group })
  }

  // =========================================================
  // ANALISIS GRUP: META TAGS
  // =========================================================
  if (mapping.meta?.title) {
    const len = metaTitle.length
    const isOptimal = len >= 30 && len <= 60
    let msg = `Panjang Meta Title optimal (${len} karakter)`
    if (len === 0) msg = 'Meta Title belum diisi (Ideal: 30-60 karakter)'
    else if (len < 30) msg = `Meta Title terlalu singkat (${len}/30 karakter)`
    else if (len > 60)
      msg = `Meta Title terlalu panjang (${len}/60 karakter - berisiko terpotong di SERP)`

    addCheck(isOptimal, msg, 'Meta Title', 'meta', 4)
  }

  if (mapping.meta?.description) {
    const len = desc.length
    const isOptimal = len >= 120 && len <= 160
    let msg = `Panjang Meta Description optimal (${len} karakter)`
    if (len === 0) msg = 'Meta Description belum diisi (Ideal: 120-160 karakter)'
    else if (len < 120) msg = `Meta Description terlalu singkat (${len}/120 karakter)`
    else if (len > 160) msg = `Meta Description terlalu panjang (${len}/160 karakter)`

    addCheck(isOptimal, msg, 'Meta Description', 'meta', 4)
  }

  if (mapping.meta?.slug) {
    const isSlugFormatValid = /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
    const isLengthOk = slug.length > 0 && slug.length <= 75
    const isSlugValid = isSlugFormatValid && isLengthOk

    let msg = `URL Slug valid (${slug.length} karakter)`
    if (slug.length === 0) msg = 'URL Slug belum diisi'
    else if (!isSlugFormatValid)
      msg = 'URL Slug tidak valid (gunakan huruf kecil, angka, dan strip -)'
    else if (slug.length > 75) msg = `URL Slug terlalu panjang (${slug.length}/75 karakter)`

    addCheck(isSlugValid, msg, 'URL Slug', 'meta', 3)
  }

  if (mapping.meta?.canonical) {
    const isCanonicalValid =
      canonical.length > 0 &&
      (canonical.startsWith('http://') ||
        canonical.startsWith('https://') ||
        canonical.startsWith('/'))
    addCheck(
      isCanonicalValid,
      isCanonicalValid ? 'Canonical URL terpasang' : 'Canonical URL tidak valid',
      'Canonical URL',
      'meta',
      1,
    )
  }

  // =========================================================
  // ANALISIS GRUP: FOCUS KEYWORD RELEVANCE
  // =========================================================
  if (keyword && keyword.length >= 2) {
    const lowerKw = keyword.toLowerCase().trim()

    // 1. Keyword di Meta Title
    if (mapping.meta?.title) {
      const inTitle = metaTitle.toLowerCase().includes(lowerKw)
      addCheck(
        inTitle,
        inTitle ? 'Keyword ditemukan di Meta Title' : 'Sertakan keyword di dalam Meta Title',
        'Title Keyword',
        'keyword',
        5,
      )
    }

    // 2. Keyword di Content Title (H1)
    if (mapping.content?.title) {
      const inContentTitle = contentTitle.toLowerCase().includes(lowerKw)
      addCheck(
        inContentTitle,
        inContentTitle
          ? 'Keyword ditemukan di Judul Konten (H1)'
          : 'Tambahkan keyword ke Judul Konten (H1)',
        'Content Title Keyword',
        'keyword',
        4,
      )
    }

    // 3. Keyword di Meta Description (Krusial untuk CTR SERP)
    if (mapping.meta?.description) {
      const inDesc = desc.toLowerCase().includes(lowerKw)
      addCheck(
        inDesc,
        inDesc
          ? 'Keyword ditemukan di Meta Description'
          : 'Keyword tidak ditemukan di Meta Description (Penting untuk CTR di SERP)',
        'Description Keyword',
        'keyword',
        4,
      )
    }

    // 4. Keyword di URL Slug
    if (mapping.meta?.slug) {
      const slugKw = lowerKw.replace(/\s+/g, '-')
      const inSlug = slug.toLowerCase().includes(slugKw)
      addCheck(
        inSlug,
        inSlug ? 'Keyword ditemukan di URL Slug' : 'Tambahkan keyword ke URL Slug',
        'Slug Keyword',
        'keyword',
        3,
      )
    }

    // 5. Keyword di Paragraf Pertama (Lead Paragraph / 100 Kata Pertama)
    if (mapping.content?.body && wordCount > 0) {
      const inLead = first100Words.includes(lowerKw)
      addCheck(
        inLead,
        inLead
          ? 'Keyword ditemukan di paragraf awal (100 kata pertama)'
          : 'Sertakan keyword di paragraf pembuka konten (100 kata pertama)',
        'Lead Keyword',
        'keyword',
        3,
      )
    }

    // 6. Keyword di Subheadings (H2/H3)
    if (mapping.content?.body && hasSubheadings) {
      const inHeading = subheadings.some((h) => h.includes(lowerKw))
      addCheck(
        inHeading,
        inHeading
          ? 'Keyword ditemukan di Subheading (H2/H3)'
          : 'Gunakan keyword di minimal satu Subheading (H2/H3)',
        'Subheading Keyword',
        'keyword',
        3,
      )
    }

    // 7. Keyword Density di Isi Konten
    if (mapping.content?.body && wordCount > 0) {
      const count = countKeywordOccurrences(plainText, keyword)
      const density = (count / wordCount) * 100

      if (count === 0) {
        addCheck(
          false,
          'Keyword tidak ditemukan di dalam teks body artikel',
          'Body Keyword',
          'keyword',
          3,
        )
      } else if (density < 0.5) {
        addCheck(
          false,
          `Keyword density rendah (${density.toFixed(1)}% - muncul ${count}x). Minimal 0.8%`,
          'Keyword Density',
          'keyword',
          2,
        )
      } else if (density > 3.0) {
        addCheck(
          false,
          `Keyword stuffing terdeteksi (${density.toFixed(1)}% - muncul ${count}x). Maksimal 2.5%`,
          'Keyword Density',
          'keyword',
          2,
        )
      } else {
        addCheck(
          true,
          `Keyword density optimal (${density.toFixed(1)}% - muncul ${count}x)`,
          'Keyword Density',
          'keyword',
          3,
        )
      }
    }

    // 8. Keyword di Alt Tag Gambar (Jika ada gambar di body)
    if (hasImagesInBody) {
      const inImageAlt = imgAltTexts.some((alt) => alt.includes(lowerKw))
      addCheck(
        inImageAlt,
        inImageAlt
          ? 'Keyword ditemukan pada atribut Alt gambar artikel'
          : 'Tambahkan keyword ke atribut Alt gambar artikel',
        'Image Alt Keyword',
        'keyword',
        2,
      )
    }
  } else {
    addCheck(
      false,
      'Isi Focus Keyword untuk analisis relevansi kata kunci',
      'Focus Keyword',
      'keyword',
      5,
    )
  }

  // =========================================================
  // ANALISIS GRUP: CONTENT QUALITY & STRUCTURE
  // =========================================================
  if (mapping.content?.body) {
    const cType = mapping.contentType || 'article'
    let minWords = 300
    if (cType === 'article') minWords = 300
    else if (cType === 'product') minWords = 100
    else if (cType === 'page') minWords = 150
    else if (cType === 'promo') minWords = 50

    const isLengthPassed = wordCount >= minWords
    addCheck(
      isLengthPassed,
      isLengthPassed
        ? `Panjang konten memadai (${wordCount} kata, target min. ${minWords})`
        : `Konten terlalu singkat (${wordCount}/${minWords} kata)`,
      'Word Count',
      'content',
      4,
    )

    // Subheading check untuk artikel dan halaman
    if (cType === 'article' || cType === 'page') {
      addCheck(
        hasSubheadings,
        hasSubheadings
          ? 'Struktur konten rapi (Memiliki Subheading H2/H3)'
          : 'Tambahkan Subheading (H2/H3) untuk memecah teks artikel',
        'Content Structure',
        'content',
        3,
      )

      addCheck(
        hasLinks,
        hasLinks
          ? 'Memiliki tautan referensi/navigasi di konten'
          : 'Tambahkan internal atau external links di dalam konten',
        'Links',
        'content',
        2,
      )
    }

    if (mapping.content?.author) {
      addCheck(
        !!author,
        author
          ? `Penulis terdata (${author})`
          : 'Cantumkan nama penulis untuk kredibilitas E-E-A-T',
        'Author Credibility',
        'content',
        1,
      )
    }
  }

  // =========================================================
  // ANALISIS GRUP: SOCIAL MEDIA & OPEN GRAPH
  // =========================================================
  if (mapping.content?.image || mapping.social?.ogImage) {
    const hasImage = !!ogImg && ogImg.length > 0
    addCheck(
      hasImage,
      hasImage
        ? 'Gambar unggulan/Social Share tersedia'
        : 'Gunakan gambar untuk Social Share Preview',
      'Social Image',
      'social',
      4,
    )
  }

  if (mapping.social?.ogTitle || mapping.social?.twitterTitle) {
    const hasSocialTitle = !!(ogTitle || twitterTitle)
    addCheck(
      hasSocialTitle,
      hasSocialTitle
        ? 'Judul Social Share (OG/Twitter) terisi'
        : 'Lengkapi judul khusus Social Share (Open Graph)',
      'Social Title',
      'social',
      2,
    )
  }

  if (mapping.social?.ogDescription || mapping.social?.twitterDescription) {
    const hasSocialDesc = !!(ogDesc || twitterDesc)
    addCheck(
      hasSocialDesc,
      hasSocialDesc
        ? 'Deskripsi Social Share (OG/Twitter) terisi'
        : 'Lengkapi deskripsi khusus Social Share (Open Graph)',
      'Social Description',
      'social',
      2,
    )
  }

  if (mapping.content?.tags && mapping.contentType !== 'promo') {
    const hasTags = tags.length > 0
    addCheck(
      hasTags,
      hasTags ? `${tags.length} Tag/Kategori terpasang` : 'Tambahkan Tag untuk pengelompokan topik',
      'Taxonomy Tags',
      'social',
      1,
    )
  }

  // --- FINAL SCORE PERHITUNGAN ---
  const finalScore = totalWeight > 0 ? Math.round((earnedScore / totalWeight) * 100) : 0

  return { score: finalScore, details }
}
