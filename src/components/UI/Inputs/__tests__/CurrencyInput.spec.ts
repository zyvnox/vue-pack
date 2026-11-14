import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CurrencyInput from '../CurrencyInput.vue'
import { resolveCurrency } from '../../../../helpers/currency'

describe('CurrencyInput.vue - Multi-Currency Support ($ , Rp. , yen, etc.)', () => {
  it('renders default currency symbol according to lang ($ for en, Rp for id)', () => {
    const wrapperEn = mount(CurrencyInput, {
      props: {
        label: 'Price',
        modelValue: 50000,
        lang: 'en',
      },
    })
    expect(wrapperEn.text()).toContain('$')

    const wrapperId = mount(CurrencyInput, {
      props: {
        label: 'Harga',
        modelValue: 50000,
        lang: 'id',
      },
    })
    expect(wrapperId.text()).toContain('Rp')
  })

  it('renders explicit USD ($) symbol and formats numbers', () => {
    const wrapper = mount(CurrencyInput, {
      props: {
        label: 'Price in USD',
        modelValue: 1250000,
        currency: '$',
      },
    })
    expect(wrapper.text()).toContain('$')
    const input = wrapper.find('input')
    expect(input.element.value).toBe('1,250,000')
  })

  it('renders explicit Rupiah (Rp.) symbol', () => {
    const wrapper = mount(CurrencyInput, {
      props: {
        label: 'Harga',
        modelValue: 2500000,
        currency: 'Rp.',
      },
    })
    expect(wrapper.text()).toContain('Rp.')
  })

  it('renders explicit Japanese Yen (yen / ¥) symbol', () => {
    const wrapper = mount(CurrencyInput, {
      props: {
        label: 'Price in Yen',
        modelValue: 30000,
        currency: 'yen',
      },
    })
    expect(wrapper.text()).toContain('¥')
  })

  it('renders Euro (€) and British Pound (£)', () => {
    const wrapperEur = mount(CurrencyInput, {
      props: {
        label: 'Price in Euro',
        currency: 'EUR',
        modelValue: 100,
      },
    })
    expect(wrapperEur.text()).toContain('€')

    const wrapperGbp = mount(CurrencyInput, {
      props: {
        label: 'Price in GBP',
        currency: '£',
        modelValue: 100,
      },
    })
    expect(wrapperGbp.text()).toContain('£')
  })

  it('supports suffix currency position', () => {
    const wrapper = mount(CurrencyInput, {
      props: {
        label: 'Suffix Price',
        currency: 'USD',
        currencyPosition: 'suffix',
        modelValue: 100,
      },
    })
    const input = wrapper.find('input')
    expect(input.attributes('style')).toContain('padding-left: 16px')
    expect(wrapper.text()).toContain('$')
  })

  it('supports interactive currency selector and emits update:currency', async () => {
    const wrapper = mount(CurrencyInput, {
      props: {
        label: 'Select Payment Currency',
        currency: 'USD',
        allowCurrencySelect: true,
        currencies: ['USD', 'IDR', 'JPY', 'EUR'],
        modelValue: 1000,
      },
    })

    const select = wrapper.find('select')
    expect(select.exists()).toBe(true)

    await select.setValue('IDR')
    expect(wrapper.emitted('update:currency')).toBeTruthy()
    expect(wrapper.emitted('update:currency')?.[0]?.[0]).toBe('IDR')
  })

  it('emits clean numeric integer on user typing', async () => {
    const wrapper = mount(CurrencyInput, {
      props: {
        label: 'Amount',
        currency: 'Rp.',
        modelValue: 0,
      },
    })

    const input = wrapper.find('input')
    await input.setValue('750000')
    await input.trigger('input')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]?.[0]).toBe(750000)
  })

  it('supports fallback to attrs when props are passed via non-declared attributes', () => {
    const wrapperAttrCurrency = mount(CurrencyInput, {
      props: {
        label: 'Price in Rp',
        modelValue: 1000,
      },
      attrs: {
        currency: 'Rp.',
        'currency-position': 'suffix',
      },
    })
    expect(wrapperAttrCurrency.text()).toContain('Rp.')
    const input = wrapperAttrCurrency.find('input')
    expect(input.attributes('style')).toContain('padding-left: 16px')
  })
})

describe('resolveCurrency helper', () => {
  it('correctly resolves symbols, codes and locales for global currencies', () => {
    expect(resolveCurrency('$').code).toBe('USD')
    expect(resolveCurrency('usd').symbol).toBe('$')

    expect(resolveCurrency('Rp.').symbol).toBe('Rp.')
    expect(resolveCurrency('idr').code).toBe('IDR')

    expect(resolveCurrency('yen').symbol).toBe('¥')
    expect(resolveCurrency('jpy').code).toBe('JPY')

    expect(resolveCurrency('eur').symbol).toBe('€')
    expect(resolveCurrency('gbp').symbol).toBe('£')
    expect(resolveCurrency('sar').symbol).toBe('SAR')
  })
})
