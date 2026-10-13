import { describe, it, expect, beforeEach } from 'vitest'
import {
  registerLanguage,
  unregisterLanguage,
  isLanguageRegistered,
  getAvailableLanguages,
  defaultTextLabelsMap,
  defaultMessagesErrorRequired,
  inputMessages,
} from '../index'

describe('i18n Registration System', () => {
  beforeEach(() => {
    // Clean up test language if present
    unregisterLanguage('fr')
    unregisterLanguage('de')
  })

  it('should have default languages (en and id)', () => {
    expect(isLanguageRegistered('en')).toBe(true)
    expect(isLanguageRegistered('id')).toBe(true)
    const available = getAvailableLanguages()
    expect(available).toContain('en')
    expect(available).toContain('id')
  })

  it('should register a custom language pack and deep-merge missing labels with en baseline', () => {
    registerLanguage({
      lang: 'fr',
      labels: {
        search: 'Rechercher',
        btn: {
          close: 'Fermer',
        } as any,
      },
      errors: {
        required: '{label} est obligatoire',
      },
      inputs: {
        email: 'Email invalide',
      },
    })

    expect(isLanguageRegistered('fr')).toBe(true)
    const frLabels = defaultTextLabelsMap['fr']
    expect(frLabels).toBeDefined()
    // Overridden fields
    expect(frLabels.search).toBe('Rechercher')
    expect(frLabels.btn.close).toBe('Fermer')
    // Fallback fields from en
    expect(frLabels.required).toBe(defaultTextLabelsMap.en.required)
    expect(frLabels.btn.cancel).toBe(defaultTextLabelsMap.en.btn.cancel)
    expect(frLabels.message.notFound).toBe(defaultTextLabelsMap.en.message.notFound)

    // Error message
    expect(defaultMessagesErrorRequired['fr']).toBe('{label} est obligatoire')

    // Input messages
    expect(inputMessages.email['fr']).toBe('Email invalide')
  })

  it('should protect built-in languages (en, id) from being unregistered', () => {
    unregisterLanguage('en')
    unregisterLanguage('id')
    expect(isLanguageRegistered('en')).toBe(true)
    expect(isLanguageRegistered('id')).toBe(true)
  })

  it('should properly unregister custom languages', () => {
    registerLanguage({
      lang: 'de',
      labels: { search: 'Suchen' },
    })
    expect(isLanguageRegistered('de')).toBe(true)

    unregisterLanguage('de')
    expect(isLanguageRegistered('de')).toBe(false)
    expect(defaultTextLabelsMap['de']).toBeUndefined()
  })

  it('should support legacy registerLanguage signature', () => {
    const customConfig = { ...defaultTextLabelsMap.en, search: 'Buscar' }
    registerLanguage('es', customConfig)
    expect(isLanguageRegistered('es')).toBe(true)
    expect(defaultTextLabelsMap['es'].search).toBe('Buscar')
    unregisterLanguage('es')
  })
})
