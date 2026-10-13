import { describe, it, expect } from 'vitest'
import { useI18n } from '../useI18n'

describe('useI18n', () => {
  it('returns correct translation for en', () => {
    const { t } = useI18n('en')
    expect(t('counter.word')).toBe('Word')
    expect(t('common.copy')).toBe('Copy')
  })

  it('returns correct translation for id', () => {
    const { t } = useI18n('id')
    expect(t('counter.word')).toBe('Kata')
    expect(t('common.copy')).toBe('Salin')
  })

  it('fallback to en for missing key in custom language', () => {
    const { t } = useI18n('unknown-lang')
    expect(t('counter.word')).toBe('Word')
  })

  it('replace params correctly', () => {
    const { t } = useI18n('en')
    expect(t('table.noResult', { query: 'test' })).toBe('No results for test')
  })

  it('returns key itself for invalid key', () => {
    const { t } = useI18n('en')
    expect(t('nonexistent.key')).toBe('nonexistent.key')
  })
})
