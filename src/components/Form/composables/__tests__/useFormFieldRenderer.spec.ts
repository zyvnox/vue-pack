import { describe, it, expect, vi } from 'vitest'
import { useFormFieldRenderer } from '../useFormFieldRenderer'
import type { Field } from '../../../../configs'

describe('useFormFieldRenderer', () => {
  it('should compute label without TableComponents injected (standalone usage)', () => {
    const field: Field = { type: 'text', label: 'User Name', required: true }
    const emit = vi.fn()

    const { label, labels } = useFormFieldRenderer(
      {
        field,
        fieldKey: 'userName',
        formData: {},
        errors: {},
        lang: 'en',
      },
      emit,
    )

    expect(labels.value).toBeDefined()
    expect(labels.value.required).toBe('(Required)')
    expect(label.value).toBe('User Name (Required)')
  })

  it('should handle optional fields and fallback when lang is missing or null', () => {
    const field: Field = { type: 'text', label: 'Nick Name', required: false }
    const emit = vi.fn()

    const { label, labels } = useFormFieldRenderer(
      {
        field,
        fieldKey: 'nickName',
        formData: {},
        errors: {},
        lang: undefined,
      },
      emit,
    )

    expect(labels.value).toBeDefined()
    expect(label.value).toContain('Nick Name')
    expect(label.value).toContain('(Optional)')
  })

  it('should handle custom/unknown language with fallback to en', () => {
    const field: Field = { type: 'text', label: 'Custom Field', required: true }
    const emit = vi.fn()

    const { label, labels } = useFormFieldRenderer(
      {
        field,
        fieldKey: 'customField',
        formData: {},
        errors: {},
        lang: 'unknown-lang',
      },
      emit,
    )

    expect(labels.value).toBeDefined()
    expect(label.value).toContain('Custom Field')
  })

  it('should merge removed item arrays correctly', () => {
    const field: Field = { type: 'text', label: 'Test' }
    const emit = vi.fn()

    const { mergeNumberArrays, handlers, removedItems } = useFormFieldRenderer(
      {
        field,
        fieldKey: 'test',
        formData: {},
        errors: {},
      },
      emit,
    )

    expect(mergeNumberArrays([1, 2], [2, 3])).toEqual([1, 2, 3])

    handlers.removeChildData([10, 20])
    expect(removedItems.value).toEqual([10, 20])
    expect(emit).toHaveBeenCalledWith('remove-items', [10, 20])
  })
})
