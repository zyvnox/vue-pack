<template>
  <div class="shrink-0 w-0 lg:w-72">
    <!-- Desktop Fixed Sidebar (Permanently fixed to viewport, independent scroll) -->
    <aside
      class="hidden lg:flex fixed top-0 left-0 bottom-0 w-72 z-20 border-r border-slate-200 dark:border-slate-800 p-5 overflow-y-auto bg-white dark:bg-slate-900 flex-col"
    >
      <!-- Brand & Controls -->
      <div class="mb-5 pb-4 border-b border-slate-200 dark:border-slate-800 space-y-3">
        <!-- Row 1: Brand & Theme Toggle -->
        <div class="flex items-center justify-between">
          <RouterLink to="/" class="flex items-center gap-2.5 min-w-0">
            <img src="/zyvnox-black.svg" class="w-7 h-7 dark:hidden shrink-0" alt="Zyvnox Logo" />
            <img
              src="/zyvnox-white.svg"
              class="w-7 h-7 hidden dark:block shrink-0"
              alt="Zyvnox Logo"
            />
            <div class="flex items-center gap-1.5 min-w-0">
              <span
                class="font-bold text-sm tracking-tight text-slate-900 dark:text-white truncate"
                >@zyvnox</span
              >
              <span
                class="text-[10px] font-mono bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 px-1.5 py-0.5 rounded font-semibold shrink-0"
                >v0.1.4</span
              >
            </div>
          </RouterLink>

          <button
            type="button"
            @click="toggleDark"
            class="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
            :title="t('nav.toggleTheme')"
          >
            <span v-if="isDark">🌙</span>
            <span v-else>☀️</span>
          </button>
        </div>

        <!-- Row 2: Quick Search & Language Switcher -->
        <div class="flex items-center gap-2">
          <div class="relative flex-1 min-w-0">
            <input
              v-model="searchQuery"
              type="text"
              :placeholder="t('sidebar.filterPlaceholder')"
              class="w-full pl-2.5 pr-2 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400 dark:placeholder:text-slate-500"
            />
          </div>
          <LanguageSwitcher />
        </div>
      </div>

      <!-- Navigation Lists -->
      <nav class="space-y-6 flex-1 pr-1">
        <!-- Live Playground Banner Button -->
        <RouterLink
          to="/playground"
          class="flex items-center justify-between mb-3 px-3 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-sm transition-all group"
        >
          <div class="flex items-center gap-2">
            <span>⚡</span>
            <span>{{ t('nav.livePlayground') }}</span>
          </div>
          <span
            class="text-[10px] font-mono bg-emerald-950/40 px-1.5 py-0.5 rounded text-emerald-100"
            >CDN ↗</span
          >
        </RouterLink>

        <!-- Getting Started -->
        <section v-if="filterItems(guides).length">
          <h4
            class="text-[11px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-2"
          >
            {{ t('sidebar.gettingStarted') }}
          </h4>
          <div class="space-y-0.5">
            <RouterLink
              v-for="item in filterItems(guides)"
              :key="item.path"
              :to="item.path"
              class="flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors"
              :class="
                isActive(item.path)
                  ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200'
              "
            >
              <span>{{ item.name }}</span>
              <span
                v-if="item.badge"
                class="text-[10px] px-1.5 py-0.2 rounded font-mono"
                :class="item.badgeClass ?? 'bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400'"
              >
                {{ item.badge }}
              </span>
            </RouterLink>
          </div>
        </section>

        <!-- Main Engines -->
        <section v-if="filterItems(engines).length">
          <h4
            class="text-[11px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-2"
          >
            {{ t('sidebar.coreEngines') }}
          </h4>
          <div class="space-y-0.5">
            <RouterLink
              v-for="item in filterItems(engines)"
              :key="item.path"
              :to="item.path"
              class="flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors"
              :class="
                isActive(item.path)
                  ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200'
              "
            >
              <span>{{ item.name }}</span>
              <span
                class="text-[10px] px-1.5 py-0.2 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400"
                >Core</span
              >
            </RouterLink>
          </div>
        </section>

        <!-- Inputs -->
        <section v-if="filterItems(inputs).length">
          <h4
            class="text-[11px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-2"
          >
            {{ t('sidebar.inputs') }} ({{ inputs.length }})
          </h4>
          <div class="space-y-0.5">
            <RouterLink
              v-for="item in filterItems(inputs)"
              :key="item.path"
              :to="item.path"
              class="flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors"
              :class="
                isActive(item.path)
                  ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200'
              "
            >
              <span>{{ item.name }}</span>
            </RouterLink>
          </div>
        </section>

        <!-- Display -->
        <section v-if="filterItems(displays).length">
          <h4
            class="text-[11px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-2"
          >
            {{ t('sidebar.display') }} ({{ displays.length }})
          </h4>
          <div class="space-y-0.5">
            <RouterLink
              v-for="item in filterItems(displays)"
              :key="item.path"
              :to="item.path"
              class="flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors"
              :class="
                isActive(item.path)
                  ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200'
              "
            >
              <span>{{ item.name }}</span>
            </RouterLink>
          </div>
        </section>

        <!-- Feedback -->
        <section v-if="filterItems(feedbacks).length">
          <h4
            class="text-[11px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-2"
          >
            {{ t('sidebar.feedback') }} ({{ feedbacks.length }})
          </h4>
          <div class="space-y-0.5">
            <RouterLink
              v-for="item in filterItems(feedbacks)"
              :key="item.path"
              :to="item.path"
              class="flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors"
              :class="
                isActive(item.path)
                  ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200'
              "
            >
              <span>{{ item.name }}</span>
            </RouterLink>
          </div>
        </section>

        <!-- Utilities -->
        <section v-if="filterItems(utilities).length">
          <h4
            class="text-[11px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-2"
          >
            {{ t('sidebar.utilities') }}
          </h4>
          <div class="space-y-0.5">
            <RouterLink
              v-for="item in filterItems(utilities)"
              :key="item.path"
              :to="item.path"
              class="flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors"
              :class="
                isActive(item.path)
                  ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200'
              "
            >
              <span>{{ item.name }}</span>
              <span
                class="text-[10px] px-1.5 py-0.2 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400"
                >Tool</span
              >
            </RouterLink>
          </div>
        </section>
      </nav>
    </aside>

    <!-- Mobile Drawer Modal (Teleported to body, visible only on < lg when isOpen is true) -->
    <Teleport to="body">
      <div v-if="isOpen" class="lg:hidden fixed inset-0 z-50 flex">
        <!-- Backdrop Overlay -->
        <div
          @click="emit('close')"
          class="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          aria-hidden="true"
        />

        <!-- Sliding Drawer Panel -->
        <aside
          class="relative w-72 max-w-[85vw] bg-white dark:bg-slate-900 h-full p-5 overflow-y-auto flex flex-col z-10 shadow-2xl border-r border-slate-200 dark:border-slate-800"
        >
          <!-- Drawer Header -->
          <div class="mb-5 pb-4 border-b border-slate-200 dark:border-slate-800 space-y-3">
            <!-- Row 1: Brand & Actions -->
            <div class="flex items-center justify-between">
              <RouterLink to="/" @click="emit('close')" class="flex items-center gap-2.5 min-w-0">
                <img src="/zyvnox-black.svg" class="w-7 h-7 dark:hidden shrink-0" alt="Zyvnox Logo" />
                <img
                  src="/zyvnox-white.svg"
                  class="w-7 h-7 hidden dark:block shrink-0"
                  alt="Zyvnox Logo"
                />
                <div class="flex items-center gap-1.5 min-w-0">
                  <span
                    class="font-bold text-sm tracking-tight text-slate-900 dark:text-white truncate"
                    >@zyvnox</span
                  >
                  <span
                    class="text-[10px] font-mono bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 px-1.5 py-0.5 rounded font-semibold shrink-0"
                    >v0.1.4</span
                  >
                </div>
              </RouterLink>

              <div class="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  @click="toggleDark"
                  class="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  :title="t('nav.toggleTheme')"
                >
                  <span v-if="isDark">🌙</span>
                  <span v-else>☀️</span>
                </button>

                <button
                  type="button"
                  @click="emit('close')"
                  class="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  :aria-label="t('nav.closeNav')"
                >
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Row 2: Search & Language Switcher -->
            <div class="flex items-center gap-2">
              <div class="relative flex-1 min-w-0">
                <input
                  v-model="searchQuery"
                  type="text"
                  :placeholder="t('sidebar.filterPlaceholder')"
                  class="w-full pl-2.5 pr-2 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                />
              </div>
              <LanguageSwitcher />
            </div>
          </div>

          <!-- Navigation Lists -->
          <nav class="space-y-6 flex-1 pr-1">
            <!-- Live Playground Banner Button -->
            <RouterLink
              to="/playground"
              @click="emit('close')"
              class="flex items-center justify-between mb-3 px-3 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-sm transition-all group"
            >
              <div class="flex items-center gap-2">
                <span>⚡</span>
                <span>{{ t('nav.livePlayground') }}</span>
              </div>
              <span
                class="text-[10px] font-mono bg-emerald-950/40 px-1.5 py-0.5 rounded text-emerald-100"
                >CDN ↗</span
              >
            </RouterLink>

            <section v-if="filterItems(guides).length">
              <h4
                class="text-[11px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-2"
              >
                {{ t('sidebar.gettingStarted') }}
              </h4>
              <div class="space-y-0.5">
                <RouterLink
                  v-for="item in filterItems(guides)"
                  :key="item.path"
                  :to="item.path"
                  @click="emit('close')"
                  class="flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors"
                  :class="
                    isActive(item.path)
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200'
                  "
                >
                  <span>{{ item.name }}</span>
                  <span
                    v-if="item.badge"
                    class="text-[10px] px-1.5 py-0.2 rounded font-mono"
                    :class="item.badgeClass ?? 'bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400'"
                  >
                    {{ item.badge }}
                  </span>
                </RouterLink>
              </div>
            </section>

            <section v-if="filterItems(engines).length">
              <h4
                class="text-[11px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-2"
              >
                {{ t('sidebar.coreEngines') }}
              </h4>
              <div class="space-y-0.5">
                <RouterLink
                  v-for="item in filterItems(engines)"
                  :key="item.path"
                  :to="item.path"
                  @click="emit('close')"
                  class="flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors"
                  :class="
                    isActive(item.path)
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200'
                  "
                >
                  <span>{{ item.name }}</span>
                  <span
                    class="text-[10px] px-1.5 py-0.2 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400"
                    >Core</span
                  >
                </RouterLink>
              </div>
            </section>

            <section v-if="filterItems(inputs).length">
              <h4
                class="text-[11px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-2"
              >
                {{ t('sidebar.inputs') }} ({{ inputs.length }})
              </h4>
              <div class="space-y-0.5">
                <RouterLink
                  v-for="item in filterItems(inputs)"
                  :key="item.path"
                  :to="item.path"
                  @click="emit('close')"
                  class="flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors"
                  :class="
                    isActive(item.path)
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200'
                  "
                >
                  <span>{{ item.name }}</span>
                </RouterLink>
              </div>
            </section>

            <section v-if="filterItems(displays).length">
              <h4
                class="text-[11px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-2"
              >
                {{ t('sidebar.display') }} ({{ displays.length }})
              </h4>
              <div class="space-y-0.5">
                <RouterLink
                  v-for="item in filterItems(displays)"
                  :key="item.path"
                  :to="item.path"
                  @click="emit('close')"
                  class="flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors"
                  :class="
                    isActive(item.path)
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200'
                  "
                >
                  <span>{{ item.name }}</span>
                </RouterLink>
              </div>
            </section>

            <section v-if="filterItems(feedbacks).length">
              <h4
                class="text-[11px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-2"
              >
                {{ t('sidebar.feedback') }} ({{ feedbacks.length }})
              </h4>
              <div class="space-y-0.5">
                <RouterLink
                  v-for="item in filterItems(feedbacks)"
                  :key="item.path"
                  :to="item.path"
                  @click="emit('close')"
                  class="flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors"
                  :class="
                    isActive(item.path)
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200'
                  "
                >
                  <span>{{ item.name }}</span>
                </RouterLink>
              </div>
            </section>

            <section v-if="filterItems(utilities).length">
              <h4
                class="text-[11px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-2"
              >
                {{ t('sidebar.utilities') }}
              </h4>
              <div class="space-y-0.5">
                <RouterLink
                  v-for="item in filterItems(utilities)"
                  :key="item.path"
                  :to="item.path"
                  @click="emit('close')"
                  class="flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors"
                  :class="
                    isActive(item.path)
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200'
                  "
                >
                  <span>{{ item.name }}</span>
                  <span
                    class="text-[10px] px-1.5 py-0.2 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400"
                    >Tool</span
                  >
                </RouterLink>
              </div>
            </section>
          </nav>
        </aside>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useDark } from '@/composables/useDark'
import { useSiteI18n } from '@/i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

const props = withDefaults(
  defineProps<{
    isOpen?: boolean
  }>(),
  {
    isOpen: false,
  },
)

const emit = defineEmits<{
  (e: 'close'): void
}>()

const route = useRoute()
const searchQuery = ref('')
const { isDark, toggleDark } = useDark()
const { t } = useSiteI18n()

const isActive = (path: string) => route.path === path

// Auto close on route change
watch(
  () => route.path,
  () => {
    emit('close')
  },
)

// Auto close on Escape key
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

// Lock scroll on mobile when drawer is open
watch(
  () => props.isOpen,
  (open) => {
    if (typeof document !== 'undefined') {
      if (open) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
  },
)

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})

interface NavItem {
  name: string
  path: string
  badge?: string
  badgeClass?: string
}

const filterItems = (items: NavItem[]) => {
  if (!searchQuery.value) return items
  return items.filter((item) => item.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
}

const guides = computed<NavItem[]>(() => [
  { name: t('sidebar.items.gettingStarted'), path: '/doc/getting-started' },
  {
    name: t('sidebar.items.whatsNew'),
    path: '/doc/whats-new',
    badge: 'v0.1.4',
    badgeClass: 'bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 font-bold',
  },
  { name: t('sidebar.items.installation'), path: '/doc/installation' },
  { name: t('sidebar.items.configuration'), path: '/doc/config' },
  { name: t('sidebar.items.i18n'), path: '/doc/i18n' },
  { name: t('sidebar.items.sponsor'), path: '/doc/sponsor' },
])

const engines: NavItem[] = [
  { name: 'FormModal', path: '/doc/examples/form-modal' },
  { name: 'TabelData', path: '/doc/examples/tabel-data' },
]

const inputs: NavItem[] = [
  { name: 'TextInput', path: '/doc/examples/text-input' },
  { name: 'NumberInput', path: '/doc/examples/number-input' },
  { name: 'CurrencyInput', path: '/doc/examples/currency-input' },
  { name: 'EmailInput', path: '/doc/examples/email-input' },
  { name: 'PasswordInput', path: '/doc/examples/password-input' },
  { name: 'TelInput', path: '/doc/examples/tel-input' },
  { name: 'UrlInput', path: '/doc/examples/url-input' },
  { name: 'TextAreaInput', path: '/doc/examples/text-area-input' },
  { name: 'TextAreaQuillInput', path: '/doc/examples/text-area-quill' },
  { name: 'SelectedOptions', path: '/doc/examples/combobox' },
  { name: 'TagInput', path: '/doc/examples/tag-input' },
  { name: 'ColorInput', path: '/doc/examples/color-picker' },
  { name: 'DateInput', path: '/doc/examples/date-input' },
  { name: 'TimeInput', path: '/doc/examples/time-input' },
  { name: 'DateTimeInput', path: '/doc/examples/date-time-input' },
  { name: 'FileInput', path: '/doc/examples/file-input' },
  { name: 'FileArrayInput', path: '/doc/examples/file-array-input' },
  { name: 'ImageInput', path: '/doc/examples/image-input' },
  { name: 'ImageArrayInput', path: '/doc/examples/image-array-input' },
  { name: 'ToggleInput', path: '/doc/examples/toggle-input' },
  { name: 'RateInput', path: '/doc/examples/rate-input' },
  { name: 'MapPicker', path: '/doc/examples/location-picker' },
  { name: 'ArrayObjectInput', path: '/doc/examples/array-object' },
  { name: 'ObjectInput', path: '/doc/examples/object-input' },
  { name: 'GroupRendererInput', path: '/doc/examples/group-renderer' },
]

const displays: NavItem[] = [
  { name: 'SafeHtml', path: '/doc/examples/safe-html' },
  { name: 'BaseImage', path: '/doc/examples/base-image' },
  { name: 'Tooltip', path: '/doc/examples/tooltip' },
  { name: 'ModalDetailData', path: '/doc/examples/modal-detail-data' },
]

const feedbacks: NavItem[] = [
  { name: 'AlertApp', path: '/doc/examples/alert-app' },
  { name: 'Loader', path: '/doc/examples/loader' },
  { name: 'WarningForm', path: '/doc/examples/warning-form' },
]

const utilities: NavItem[] = [{ name: 'SEO Studio', path: '/doc/examples/seo-studio' }]
</script>
