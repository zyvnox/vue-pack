import { describe, expect, it } from 'vitest'
import { formatCurrencyValue } from '../currency'

describe('formatCurrencyValue', () => {
  it('formats the configured currency independently from the UI language', () => {
    expect(formatCurrencyValue(21000, 'IDR')).toBe(
      new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(21000),
    )
    expect(formatCurrencyValue(21000, 'USD')).toBe(
      new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(21000),
    )
  })

  it('defaults to IDR consistently when no currency is configured', () => {
    expect(formatCurrencyValue(21000)).toBe(
      new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(21000),
    )
  })
})
