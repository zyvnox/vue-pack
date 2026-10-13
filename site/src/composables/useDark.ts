import { ref } from 'vue'

const isDark = ref(false)
let initialized = false

export function useDark() {
  if (!initialized && typeof window !== 'undefined') {
    initialized = true
    const saved = localStorage.getItem('zyvnox-theme')
    if (saved) {
      isDark.value = saved === 'dark'
    } else {
      isDark.value =
        document.documentElement.classList.contains('dark') ||
        window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const toggleDark = () => {
    isDark.value = !isDark.value
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('zyvnox-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('zyvnox-theme', 'light')
    }
  }

  return {
    isDark,
    toggleDark,
  }
}
