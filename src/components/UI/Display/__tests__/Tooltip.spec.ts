import { describe, it, expect } from 'vitest'
import Tooltip from '../Tooltip.vue'

describe('Tooltip Component', () => {
  it('is defined with setup and props schema', () => {
    expect(Tooltip).toBeDefined()
    expect(Tooltip.props).toBeDefined()
  })

  it('declares expected props with correct defaults', () => {
    const props = Tooltip.props as any
    expect(props.text).toBeDefined()
    expect(props.position.default).toBe('top')
    expect(props.icon.default).toBe('❓')
    expect(props.as.default).toBe('span')
  })

  it('has setup function and exports correctly', () => {
    expect(typeof Tooltip.setup).toBe('function')
  })
})
