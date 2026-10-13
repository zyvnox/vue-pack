import { describe, it, expect } from 'vitest'
import { calculateSeo } from '../seo'
import type { SeoFieldMapping } from '../../configs/types/seo.types'

describe('calculateSeo', () => {
  it('returns score 0 and empty details if options.seo or formData is missing', () => {
    expect(calculateSeo({}, {} as any)).toEqual({ score: 0, details: [] })
    expect(calculateSeo(null as any, { seo: { contentType: 'article', meta: {} } })).toEqual({
      score: 0,
      details: [],
    })
  })

  it('accurately evaluates meta title, description, and slug bounds', () => {
    const seoMapping: SeoFieldMapping = {
      contentType: 'article',
      meta: {
        title: 'metaTitle',
        description: 'metaDesc',
        slug: 'slug',
      },
    }

    const testData = {
      metaTitle: 'Vue 3 Schema Component Library Production Ready Guide', // 54 chars -> optimal (30-60)
      metaDesc:
        'A comprehensive enterprise-ready Vue 3 schema-driven library built with Vite, TypeScript, and UnoCSS for reactive forms and advanced datatable dashboards.', // 156 chars -> optimal (120-160)
      slug: 'vue-3-schema-component-library',
    }

    const result = calculateSeo(testData, { seo: seoMapping })
    const titleCheck = result.details.find((d) => d.label === 'Meta Title')
    const descCheck = result.details.find((d) => d.label === 'Meta Description')
    const slugCheck = result.details.find((d) => d.label === 'URL Slug')

    expect(titleCheck?.passed).toBe(true)
    expect(descCheck?.passed).toBe(true)
    expect(slugCheck?.passed).toBe(true)
  })

  it('prevents false-positive keyword density matching using word boundaries', () => {
    const seoMapping: SeoFieldMapping = {
      contentType: 'article',
      meta: {
        title: 'title',
        focusKeyword: 'kw',
      },
      content: {
        body: 'content',
      },
    }

    // "education", "indicate", "scatter", "syndicate" contain "cat" as a substring,
    // but the standalone word "cat" appears exactly 3 times in a ~150-word body.
    const fillerWords = new Array(140).fill('word').join(' ')
    const content = `We discuss education and indicate scatter findings. The cat is here. Another cat plays outside. A cat sleeps peacefully. ${fillerWords}`

    const testData = {
      title: 'Guide to Understanding Your Pet Cat and Behavior',
      kw: 'cat',
      content,
    }

    const result = calculateSeo(testData, { seo: seoMapping })
    const densityCheck = result.details.find((d) => d.label === 'Keyword Density')

    // It should count exactly 3 occurrences of 'cat', not including 'education' (1) or 'indicate' (1) or 'scatter' (1)
    expect(densityCheck?.message).toContain('muncul 3x')
    expect(densityCheck?.passed).toBe(true)
  })

  it('strips <script> and <style> tags and decodes HTML entities without polluting word count', () => {
    const seoMapping: SeoFieldMapping = {
      contentType: 'article',
      content: {
        body: 'body',
      },
      meta: {},
    }

    const bodyWithScript = `
      <style>body { background: red; font-family: sans-serif; }</style>
      <script>console.log("script code that should not be counted as article content");</script>
      <!-- HTML comment -->
      <p>Hello &amp; welcome to our &quot;modern&quot; Vue framework article.</p>
    `

    const result = calculateSeo({ body: bodyWithScript }, { seo: seoMapping })
    const wordCountCheck = result.details.find((d) => d.label === 'Word Count')

    // Only text inside <p> ("Hello & welcome to our "modern" Vue framework article." = 9 words)
    // Should be significantly less than 300 words without counting CSS/JS tokens
    expect(wordCountCheck?.passed).toBe(false)
    expect(wordCountCheck?.message).toContain('9/300 kata')
  })

  it('detects keyword in Meta Description, First 100 Words, and Subheadings', () => {
    const seoMapping: SeoFieldMapping = {
      contentType: 'article',
      meta: {
        title: 'metaTitle',
        description: 'metaDesc',
        focusKeyword: 'keyword',
        slug: 'slug',
      },
      content: {
        title: 'h1Title',
        body: 'body',
      },
    }

    const filler = new Array(350).fill('lorem').join(' ')
    const body = `
      <h2>Introduction to Vue Pack Features</h2>
      <p>Welcome! In this tutorial, the vue pack component engine enables schema validation seamlessly.</p>
      ${filler}
    `

    const testData = {
      metaTitle: 'Getting Started with Vue Pack in 2026',
      metaDesc:
        'Learn how to leverage vue pack to build enterprise-grade form interfaces and reactive tables with full TypeScript support.',
      keyword: 'vue pack',
      slug: 'getting-started-with-vue-pack',
      h1Title: 'Complete Guide to Vue Pack Architecture',
      body,
    }

    const result = calculateSeo(testData, { seo: seoMapping })

    const descKw = result.details.find((d) => d.label === 'Description Keyword')
    const leadKw = result.details.find((d) => d.label === 'Lead Keyword')
    const subKw = result.details.find((d) => d.label === 'Subheading Keyword')
    const h1Kw = result.details.find((d) => d.label === 'Content Title Keyword')

    expect(descKw?.passed).toBe(true)
    expect(leadKw?.passed).toBe(true)
    expect(subKw?.passed).toBe(true)
    expect(h1Kw?.passed).toBe(true)
  })

  it('handles image ALT tag keyword and content link detection', () => {
    const seoMapping: SeoFieldMapping = {
      contentType: 'article',
      meta: {
        focusKeyword: 'keyword',
      },
      content: {
        body: 'body',
      },
    }

    const bodyWithMedia = `
      <p>Here is an illustration of our dashboard.</p>
      <img src="/img/sample.jpg" alt="Interactive dashboard analytics screenshot" />
      <p>Read more on our <a href="https://example.com/docs">documentation portal</a>.</p>
      ${new Array(320).fill('word').join(' ')}
    `

    const testData = {
      keyword: 'dashboard',
      body: bodyWithMedia,
    }

    const result = calculateSeo(testData, { seo: seoMapping })

    const altKw = result.details.find((d) => d.label === 'Image Alt Keyword')
    const linksCheck = result.details.find((d) => d.label === 'Links')

    expect(altKw?.passed).toBe(true)
    expect(linksCheck?.passed).toBe(true)
  })

  it('adapts minimum word count requirements according to contentType', () => {
    const articleResult = calculateSeo(
      { body: new Array(120).fill('word').join(' ') },
      { seo: { contentType: 'article', meta: {}, content: { body: 'body' } } },
    )
    const productResult = calculateSeo(
      { body: new Array(120).fill('word').join(' ') },
      { seo: { contentType: 'product', meta: {}, content: { body: 'body' } } },
    )
    const promoResult = calculateSeo(
      { body: new Array(60).fill('word').join(' ') },
      { seo: { contentType: 'promo', meta: {}, content: { body: 'body' } } },
    )

    // 120 words fails article (min 300)
    expect(articleResult.details.find((d) => d.label === 'Word Count')?.passed).toBe(false)
    // 120 words passes product (min 100)
    expect(productResult.details.find((d) => d.label === 'Word Count')?.passed).toBe(true)
    // 60 words passes promo (min 50)
    expect(promoResult.details.find((d) => d.label === 'Word Count')?.passed).toBe(true)
  })

  it('safely extracts string values from multilingual objects', () => {
    const testData = {
      title: { id: 'Judul Artikel Bahasa Indonesia', en: 'English Article Title' },
    }

    const result = calculateSeo(testData, {
      seo: {
        contentType: 'article',
        meta: { title: 'title' },
      },
    })

    const titleCheck = result.details.find((d) => d.label === 'Meta Title')
    expect(titleCheck?.passed).toBe(true)
    expect(titleCheck?.message).not.toContain('[object Object]')
  })
})
