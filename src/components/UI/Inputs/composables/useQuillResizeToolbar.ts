import { onMounted, onUnmounted } from 'vue'

export function useQuillResizeToolbar() {
  let observer: MutationObserver | null = null
  let themeObserver: MutationObserver | null = null
  const styledToolbars = new WeakSet<HTMLElement>()

  const isDarkMode = () =>
    document.documentElement.classList.contains('dark') || document.body.classList.contains('dark')

  /**
   * Cek apakah button dalam keadaan "active" berdasarkan
   * class atau aria-pressed.
   */
  const isButtonActive = (btn: HTMLElement): boolean => {
    return (
      btn.classList.contains('active') ||
      btn.classList.contains('ql-active') ||
      btn.classList.contains('is-active') ||
      btn.getAttribute('aria-pressed') === 'true'
    )
  }

  /**
   * Style 1 button — dipanggil saat apply dan saat toggle active.
   */
  const styleButton = (btn: HTMLButtonElement) => {
    const dark = isDarkMode()
    const isActive = isButtonActive(btn)

    // Base
    btn.style.setProperty('border', 'none', 'important')
    btn.style.setProperty('border-radius', '4px', 'important')
    btn.style.setProperty('padding', '4px', 'important')
    btn.style.setProperty('cursor', 'pointer', 'important')
    btn.style.setProperty('display', 'inline-flex', 'important')
    btn.style.setProperty('align-items', 'center', 'important')
    btn.style.setProperty('justify-content', 'center', 'important')
    btn.style.setProperty('width', '28px', 'important')
    btn.style.setProperty('height', '28px', 'important')
    btn.style.setProperty('font-size', '12px', 'important')
    btn.style.setProperty('font-weight', '500', 'important')
    btn.style.setProperty('box-sizing', 'border-box', 'important')
    btn.style.setProperty('transition', 'background-color 0.15s, color 0.15s', 'important')

    // === ACTIVE STATE ===
    if (isActive) {
      // Highlight: biru primary (#3b82f6)
      btn.style.setProperty('background', dark ? '#1e00ff' : '#1e00ff', 'important')
      btn.style.setProperty('color', '#ffffff', 'important')
      btn.style.setProperty('font-weight', '600', 'important')
      // Shadow biar keliatan "pressed"
      btn.style.setProperty('box-shadow', 'inset 0 2px 4px rgba(0,0,0,0.15)', 'important')
    } else {
      // Inactive (default)
      btn.style.setProperty('background', 'transparent', 'important')
      btn.style.setProperty('color', dark ? '#f3f4f6' : '#374151', 'important')
      btn.style.setProperty('font-weight', '500', 'important')
      btn.style.setProperty('box-shadow', 'none', 'important')
    }

    // SVG icon — ikut warna text
    btn.querySelectorAll('svg').forEach((svg) => {
      const s = svg as SVGElement
      s.style.setProperty('width', '16px', 'important')
      s.style.setProperty('height', '16px', 'important')
      s.style.setProperty('fill', 'currentColor', 'important')
      s.style.setProperty('color', 'currentColor', 'important')
    })
    btn
      .querySelectorAll(
        'svg path, svg rect, svg polygon, svg polyline, svg line, svg circle, .ql-fill',
      )
      .forEach((el) => {
        ;(el as SVGElement).style.setProperty('fill', 'currentColor', 'important')
      })
  }

  /**
   * Apply style ke toolbar & semua button di dalamnya.
   */
  const applyStyles = (toolbar: HTMLElement) => {
    const dark = isDarkMode()
    const bg = dark ? '#1f2937' : '#ffffff'
    const borderColor = dark ? '#374151' : '#e5e7eb'

    // === Container ===
    toolbar.style.setProperty('background', bg, 'important')
    toolbar.style.setProperty('border', `1px solid ${borderColor}`, 'important')
    toolbar.style.setProperty('border-radius', '6px', 'important')
    toolbar.style.setProperty(
      'box-shadow',
      `0 2px 8px rgba(0,0,0,${dark ? 0.4 : 0.15})`,
      'important',
    )
    toolbar.style.setProperty('padding', '4px', 'important')
    toolbar.style.setProperty('display', 'inline-flex', 'important')
    toolbar.style.setProperty('gap', '2px', 'important')
    toolbar.style.setProperty('align-items', 'center', 'important')
    toolbar.style.setProperty('height', 'auto', 'important') // ⬅️ yang kamu tambahin
    toolbar.style.setProperty('z-index', '9999', 'important')

    // === FORCE CENTER ===
    toolbar.style.setProperty('left', '50%', 'important')
    toolbar.style.setProperty('right', 'auto', 'important')
    toolbar.style.setProperty('transform', 'translateX(-50%)', 'important')
    toolbar.style.setProperty('margin-left', '0', 'important')
    toolbar.style.setProperty('margin-right', '0', 'important')

    // === Style semua button ===
    toolbar.querySelectorAll<HTMLButtonElement>('button').forEach(styleButton)

    // === Hover binding (sekali per toolbar) ===
    if (!toolbar.dataset.zyvnoxHoverBound) {
      toolbar.dataset.zyvnoxHoverBound = 'true'

      toolbar.addEventListener('mouseover', (e) => {
        const btn = (e.target as HTMLElement).closest('button') as HTMLButtonElement
        if (!btn) return
        // Jangan override kalau active
        if (isButtonActive(btn)) return
        const d = isDarkMode()
        btn.style.setProperty('background', d ? '#374151' : '#f3f4f6', 'important')
        btn.style.setProperty('color', d ? '#ffffff' : '#111827', 'important')
      })

      toolbar.addEventListener('mouseout', (e) => {
        const btn = (e.target as HTMLElement).closest('button') as HTMLButtonElement
        if (!btn) return
        if (isButtonActive(btn)) return
        const d = isDarkMode()
        btn.style.setProperty('background', 'transparent', 'important')
        btn.style.setProperty('color', d ? '#f3f4f6' : '#374151', 'important')
      })
    }

    // === WATCH: kalau module override style atau toggle active ===
    if (!styledToolbars.has(toolbar)) {
      styledToolbars.add(toolbar)

      // Watch attribute toolbar (module suka override style)
      const attrObserver = new MutationObserver(() => {
        requestAnimationFrame(() => applyStyles(toolbar))
      })
      attrObserver.observe(toolbar, {
        attributes: true,
        attributeFilter: ['style'],
      })

      // Watch class/aria di button (untuk toggle active state)
      const btnObserver = new MutationObserver(() => {
        requestAnimationFrame(() => {
          toolbar.querySelectorAll<HTMLButtonElement>('button').forEach(styleButton)
        })
      })
      btnObserver.observe(toolbar, {
        attributes: true,
        subtree: true,
        attributeFilter: ['class', 'aria-pressed', 'style'],
      })
    }
  }

  const scanAndApply = () => {
    document.querySelectorAll<HTMLElement>('.ql-resize-toolbar').forEach(applyStyles)
  }

  onMounted(() => {
    scanAndApply()

    // Watch toolbar baru muncul
    observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.classList.contains('ql-resize-toolbar')) {
              applyStyles(node)
            }
            node.querySelectorAll?.('.ql-resize-toolbar').forEach((el) => {
              applyStyles(el as HTMLElement)
            })
          }
        })
      })
    })
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    // Watch dark mode toggle
    themeObserver = new MutationObserver(() => scanAndApply())
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
    themeObserver?.disconnect()
    observer = null
    themeObserver = null
  })
}
