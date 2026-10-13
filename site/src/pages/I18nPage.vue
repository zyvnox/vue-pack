<template>
  <div class="max-w-4xl mx-auto space-y-10 py-6">
    <!-- Header -->
    <header class="border-b border-slate-200 dark:border-slate-800 pb-6">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        Internationalization (i18n)
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Multi-language localization architecture, dynamic language registration, and custom text
        overrides.
      </p>
    </header>

    <!-- Built-in Languages -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">Built-in Locales</h2>
      <p class="text-xs text-slate-600 dark:text-slate-400">
        Out of the box, <code>@zyvnox/vue-pack</code> ships with complete translations for:
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          class="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
        >
          <div class="flex items-center gap-2 mb-1">
            <span class="text-lg">🇺🇸</span>
            <span class="font-bold text-sm">English (<code class="font-mono">en</code>)</span>
          </div>
          <p class="text-xs text-slate-500">
            Default fallback locale for all UI labels and validation messages.
          </p>
        </div>
        <div
          class="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
        >
          <div class="flex items-center gap-2 mb-1">
            <span class="text-lg">🇮🇩</span>
            <span class="font-bold text-sm"
              >Bahasa Indonesia (<code class="font-mono">id</code>)</span
            >
          </div>
          <p class="text-xs text-slate-500">
            Full native Indonesian translation for enterprise workflows.
          </p>
        </div>
      </div>
    </section>

    <!-- Live Interactive Switcher Demo -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">
        Live Locale Switcher Demo
      </h2>
      <div
        class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-4"
      >
        <div class="flex items-center gap-3">
          <span class="text-xs font-semibold text-slate-500">Active Language:</span>
          <button
            type="button"
            @click="changeLang('en')"
            class="px-3 py-1.5 rounded-md text-xs font-medium transition-colors"
            :class="
              currentLang === 'en'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200'
            "
          >
            🇺🇸 English (en)
          </button>
          <button
            type="button"
            @click="changeLang('id')"
            class="px-3 py-1.5 rounded-md text-xs font-medium transition-colors"
            :class="
              currentLang === 'id'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200'
            "
          >
            🇮🇩 Indonesia (id)
          </button>
        </div>

        <div
          class="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-2"
        >
          <div class="text-xs text-slate-500">Resolved i18n Strings from Hook:</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <strong>Search:</strong>
              <span class="font-mono text-blue-600 dark:text-blue-400">{{ t('search') }}</span>
            </div>
            <div>
              <strong>Filter:</strong>
              <span class="font-mono text-blue-600 dark:text-blue-400">{{ t('filter') }}</span>
            </div>
            <div>
              <strong>Reset:</strong>
              <span class="font-mono text-blue-600 dark:text-blue-400">{{ t('reset') }}</span>
            </div>
            <div>
              <strong>Save:</strong>
              <span class="font-mono text-blue-600 dark:text-blue-400">{{ t('save') }}</span>
            </div>
          </div>
        </div>

        <!-- Sample Input showcasing live error translation -->
        <div>
          <TextInput
            v-model="demoText"
            label="Required Input Test"
            tooltip="Notice how validation messages adapt to the chosen locale"
            :placeholder="lang === 'id' ? 'Masukkan teks di sini...' : 'Enter text here...'"
            required
            :error="demoText ? '' : currentLang === 'id' ? 'Wajib diisi' : 'This field is required'"
          />
        </div>
      </div>
    </section>

    <!-- Registering Custom Languages -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">
        Registering Custom Languages
      </h2>
      <p class="text-xs text-slate-600 dark:text-slate-400">
        You can register third languages (such as Japanese, Spanish, French, etc.) using
        <code>registerLanguage</code>:
      </p>
      <CodeBlock :code="registerCode" language="ts" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TextInput, useI18n } from '@zyvnox/vue-pack/components'
import CodeBlock from '@/components/CodeBlock.vue'

const { t, lang, setLang } = useI18n()
const currentLang = ref(lang.value || 'en')
const demoText = ref('')

const changeLang = (newLang: string) => {
  currentLang.value = newLang
  setLang(newLang)
}

const registerCode = `import { registerLanguage } from '@zyvnox/vue-pack'

registerLanguage('ja', {
  labels: {
    search: '検索',
    filter: 'フィルター',
    reset: 'リセット',
    save: '保存',
    cancel: 'キャンセル',
  },
  inputs: {
    required: '{label}は必須項目です',
  },
})`
</script>
