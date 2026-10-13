import { describe, it, expect } from 'vitest'
import { defaultTextLabelsMap } from '../labels'

describe('i18n Labels Structure', () => {
  const requiredKeys = [
    'lang',
    'required',
    'optional',
    'noSelection',
    'search',
    'counter',
    'upload',
    'status',
    'editor',
    'table',
    'common',
    'selection',
    'placeholder',
    'action',
    'message',
    'warning',
    'btn',
    'title',
  ]

  it('en should have all required top-level keys', () => {
    requiredKeys.forEach((key) => {
      expect(defaultTextLabelsMap.en).toHaveProperty(key)
    })
  })

  it('id should have all required top-level keys', () => {
    requiredKeys.forEach((key) => {
      expect(defaultTextLabelsMap.id).toHaveProperty(key)
    })
  })

  it('en and id should have matching structure', () => {
    const compareKeys = (a: any, b: any, path = ''): void => {
      Object.keys(a).forEach((key) => {
        const newPath = path ? `${path}.${key}` : key
        expect(b, `Missing key in id: ${newPath}`).toHaveProperty(key)
        if (typeof a[key] === 'object' && a[key] !== null) {
          compareKeys(a[key], b[key], newPath)
        } else {
          expect(typeof b[key], `Type mismatch at ${newPath}`).toBe(typeof a[key])
        }
      })
    }
    compareKeys(defaultTextLabelsMap.en, defaultTextLabelsMap.id)
  })

  it('no empty strings in en', () => {
    const check = (obj: any, path = ''): void => {
      Object.entries(obj).forEach(([key, val]) => {
        const newPath = path ? `${path}.${key}` : key
        if (typeof val === 'string') {
          expect(val.length, `Empty string at en.${newPath}`).toBeGreaterThan(0)
        } else if (typeof val === 'object' && val !== null) {
          check(val, newPath)
        }
      })
    }
    check(defaultTextLabelsMap.en)
  })

  it('no empty strings in id', () => {
    const check = (obj: any, path = ''): void => {
      Object.entries(obj).forEach(([key, val]) => {
        const newPath = path ? `${path}.${key}` : key
        if (typeof val === 'string') {
          expect(val.length, `Empty string at id.${newPath}`).toBeGreaterThan(0)
        } else if (typeof val === 'object' && val !== null) {
          check(val, newPath)
        }
      })
    }
    check(defaultTextLabelsMap.id)
  })
})
