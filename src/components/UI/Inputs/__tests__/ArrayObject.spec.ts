import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ArrayObject from '../ArrayObject.vue'

describe('ArrayObject.vue - display prop and ordering', () => {
  const dummySchema = {
    title: { type: 'text' as const, label: 'Title' },
    image: { type: 'image' as const, label: 'Image' },
  }

  it('renders Title first, then Image when display={ titleKey: "title", imageKey: "image" }', () => {
    const wrapper = mount(ArrayObject, {
      props: {
        modelValue: [
          {
            title: 'Design System Figma Asset',
            image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=150',
          },
        ],
        schema: dummySchema,
        display: {
          titleKey: 'title',
          imageKey: 'image',
        },
      },
    })

    const slots = wrapper.findAll('.zyvnox-shrink-0.zyvnox-max-w-full')
    expect(slots.length).toBe(2)
    // First slot must be Title
    expect(slots[0].text()).toContain('Design System Figma Asset')
    expect(slots[0].find('img').exists()).toBe(false)
    // Second slot must be Image
    expect(slots[1].find('img').exists()).toBe(true)
    expect(slots[1].find('img').attributes('src')).toBe(
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=150',
    )
  })

  it('renders Image first, then Title when display={ imageKey: "image", titleKey: "title" }', () => {
    const wrapper = mount(ArrayObject, {
      props: {
        modelValue: [
          {
            title: 'Enterprise Workstation',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=150',
          },
        ],
        schema: dummySchema,
        display: {
          imageKey: 'image',
          titleKey: 'title',
        },
      },
    })

    const slots = wrapper.findAll('.zyvnox-shrink-0.zyvnox-max-w-full')
    expect(slots.length).toBe(2)
    // First slot must be Image
    expect(slots[0].find('img').exists()).toBe(true)
    expect(slots[0].find('img').attributes('src')).toBe(
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=150',
    )
    // Second slot must be Title
    expect(slots[1].text()).toContain('Enterprise Workstation')
    expect(slots[1].find('img').exists()).toBe(false)
  })

  it('renders Document (PDF) badge and sanitized HTML code', () => {
    const wrapper = mount(ArrayObject, {
      props: {
        modelValue: [
          {
            title: 'Master Service Agreement 2026',
            document: 'https://example.com/files/contract_v2.pdf',
            notesHtml: '<p><span class="test-approved">✓ Approved</span> by Legal</p>',
          },
        ],
        schema: dummySchema,
        display: {
          titleKey: 'title',
          docKey: 'document',
          notesKey: 'notesHtml',
        },
      },
    })

    const slots = wrapper.findAll('.zyvnox-shrink-0.zyvnox-max-w-full')
    expect(slots.length).toBe(3)
    // Slot 1: Title
    expect(slots[0].text()).toContain('Master Service Agreement 2026')
    // Slot 2: File badge with PDF
    expect(slots[1].text()).toContain('PDF')
    expect(slots[1].text()).toContain('contract_v2.pdf')
    // Slot 3: Sanitized HTML
    expect(slots[2].html()).toContain('✓ Approved')
    expect(slots[2].text()).toContain('by Legal')
  })

  it('renders fallback when display is omitted', () => {
    const wrapper = mount(ArrayObject, {
      props: {
        modelValue: [
          {
            title: 'Fallback Item',
            image: 'https://example.com/test.png',
          },
        ],
        schema: dummySchema,
      },
    })

    expect(wrapper.text()).toContain('Fallback Item')
    expect(wrapper.find('img').attributes('src')).toBe('https://example.com/test.png')
  })
})
