import { describe, it, expect } from 'vitest'
import TextInput from '../TextInput.vue'

describe('TextInput Component with Custom Tooltip', () => {
  it('is defined with expected component setup', () => {
    expect(TextInput).toBeDefined()
    expect(typeof TextInput.setup).toBe('function')
  })

  it('declares tooltip props with correct defaults', () => {
    const props = (TextInput as any).props
    expect(props).toBeDefined()
    expect(props.tooltipPosition.default).toBe('top')
    expect(props.tooltipIcon.default).toBe('❓')
  })
})
