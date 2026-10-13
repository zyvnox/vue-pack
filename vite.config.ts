import { defineConfig, type UserConfig, type InlineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import UnoCSS from 'unocss/vite'
import { resolve } from 'node:path'
import fs from 'node:fs'
import * as checker from 'license-checker-rseidelsohn'

function generateLibraryLicense() {
  return {
    name: 'generate-library-license',
    buildStart() {
      const checkerConfig = {
        start: '.',
        production: true,
        excludePrivatePackages: true,
      }

      checker.init(checkerConfig, (err, packages) => {
        if (err) {
          console.error('License check failed:', err)
          return
        }

        const jsonOutput = JSON.stringify(packages, null, 2)
        fs.writeFileSync(resolve(import.meta.dirname, 'THIRD_PARTY_LICENSES.json'), jsonOutput)

        let mdOutput =
          '# Third-Party Licenses\n\nThis project utilizes the following open-source software:\n\n'

        Object.keys(packages).forEach((pkgName) => {
          const pkg = packages[pkgName]
          const name = pkgName.split('@').slice(0, -1).join('@') || pkgName

          mdOutput += `## ${name}\n`
          mdOutput += `* **License**: ${pkg.licenses}\n`
          mdOutput += `* **Repository**: ${pkg.repository || 'Unknown'}\n`
          mdOutput += `* **Publisher**: ${pkg.publisher || 'Unknown'}\n`
          mdOutput += '\n'
        })

        fs.writeFileSync(resolve(import.meta.dirname, 'THIRD_PARTY_LICENSES.md'), mdOutput)
        console.log('✅ Third-Party Licenses generated successfully!')
      })
    },
  }
}

function ensureSrcStyle() {
  const srcStylePath = resolve(import.meta.dirname, 'src/style.css')
  if (!fs.existsSync(srcStylePath)) {
    fs.writeFileSync(srcStylePath, '/* @zyvnox/vue-pack/style.css */\n')
  }
  return srcStylePath
}

export default defineConfig(({ command }: any) => {
  if (command === 'serve') {
    const stylePath = ensureSrcStyle()
    return {
      root: 'site',
      server: {
        port: 5173,
      },
      plugins: [vue(), UnoCSS({ configFile: resolve(import.meta.dirname, 'site/uno.config.ts') })],
      resolve: {
        alias: {
          '@': resolve(import.meta.dirname, 'site/src'),
          '@zyvnox/vue-pack/components': resolve(import.meta.dirname, 'src/components/index.ts'),
          '@zyvnox/vue-pack/config': resolve(import.meta.dirname, 'src/config.ts'),
          '@zyvnox/vue-pack/init': resolve(import.meta.dirname, 'src/init.ts'),
          '@zyvnox/vue-pack/indexedDB': resolve(import.meta.dirname, 'src/lib/indexedDB.ts'),
          '@zyvnox/vue-pack/secureFetch': resolve(import.meta.dirname, 'src/lib/secureFetch.ts'),
          '@zyvnox/vue-pack/vue': resolve(import.meta.dirname, 'src/plugin/vue.plugin.ts'),
          '@zyvnox/vue-pack/style.css': stylePath,
          '@zyvnox/vue-pack/type': resolve(import.meta.dirname, 'src/configs/types/index.ts'),
          '@zyvnox/vue-pack': resolve(import.meta.dirname, 'src/index.ts'),
        },
      },
    }
  }

  // a) NPM build configuration (multi-entry, ES & CJS formats, DTS + License checker)
  const npmBuildConfig: UserConfig = {
    plugins: [
      vue(),
      UnoCSS(),
      dts({
        entryRoot: './src',
        outDirs: 'dist/types',
        processor: 'vue',
        include: ['src/**/*.ts', 'src/**/*.vue', 'src/**/*.d.ts'],
        exclude: ['site/**', 'src/**/__tests__/**', '**/*.spec.ts', '**/*.test.ts'],
        tsconfigPath: './tsconfig.app.json',
      }),
      generateLibraryLicense(),
      // Automatically trigger CDN UMD build in pipeline upon NPM build bundle completion
      {
        name: 'build-cdn-umd-trigger',
        apply: 'build',
        closeBundle: {
          sequential: true,
          async handler() {
            const { build } = await import('vite')
            await build(cdnBuildConfig)
          },
        },
      },
    ],
    build: {
      outDir: 'dist',
      cssCodeSplit: false,
      lib: {
        entry: {
          'zyvnox-vue-pack': resolve(import.meta.dirname, 'src/index.ts'),
          config: resolve(import.meta.dirname, 'src/config.ts'),
          init: resolve(import.meta.dirname, 'src/init.ts'),
          vue: resolve(import.meta.dirname, 'src/plugin/vue.plugin.ts'),
          components: resolve(import.meta.dirname, 'src/components/index.ts'),
          indexedDB: resolve(import.meta.dirname, 'src/lib/indexedDB.ts'),
          secureFetch: resolve(import.meta.dirname, 'src/lib/secureFetch.ts'),
        },
        name: 'zyvnox-vue-pack',
        formats: ['es', 'cjs'],
      },
      rollupOptions: {
        external: [
          'vue',
          'quill',
          'dompurify',
          'zod',
          'lodash.isequal',
          'lodash-es',
          '@iconify-json/mdi',
          'leaflet',
        ],
        output: {
          exports: 'named',
          globals: {
            vue: 'Vue',
            quill: 'Quill',
            dompurify: 'DOMPurify',
            zod: 'Zod',
            'lodash.isequal': 'lodashIsEqual',
            leaflet: 'L',
            'lodash-es': '_',
          },
          entryFileNames: '[name].[format].js',
          assetFileNames: 'style.css',
        },
      },
    },
  }

  // b) CDN UMD build configuration (single entry, UMD format, standalone bundle with Vue externalized)
  const cdnBuildConfig: InlineConfig = {
    configFile: false,
    plugins: [vue(), UnoCSS()],
    build: {
      outDir: 'dist/cdn',
      emptyOutDir: false,
      lib: {
        entry: resolve(import.meta.dirname, 'src/index.ts'),
        name: 'ZyvnoxVuePack',
        fileName: (format: string) => `vue-pack.${format}.js`,
        formats: ['umd', 'es'],
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          exports: 'named',
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
  }

  // 2 builds in array
  const builds = [npmBuildConfig, cdnBuildConfig]

  // Return the primary build (which executes both builds seamlessly in Vite)
  return builds[0]
})
