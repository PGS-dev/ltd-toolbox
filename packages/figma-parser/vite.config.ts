import { copyFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import { builtinModules } from 'module'
import dts from "vite-plugin-dts";
import fg from 'fast-glob';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: false,
    sourcemap: 'inline',
    target: 'node16',
    lib: {
      name: 'ltd-toolbox/figma-parser',
      entry: {
        index: './src/index.ts',
        api: './src/core/api.ts',
        document: './src/document/get-document.ts',
        styles: './src/styles/get-styles.ts',
        variables: './src/variables/get-variables.ts'
      },
      formats: ['es', 'cjs'],
      fileName: (format, filename) => {
        return `${filename}.${format === 'es' ? 'js' : 'cjs'}`
      },
    },
    rollupOptions: {
      external: [...builtinModules],
      output: {
        exports: 'named',
        preserveModules: true,
        preserveModulesRoot: './src/'
      }
    }
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      include: ['./src/**/*.ts', './src/**/*.d.ts'],
      copyDtsFiles: true,
      entryRoot:'./src',
      exclude: ['./src/**/*.spec.ts', './src/**/tests/**/*'],
      afterBuild() {
        fg.sync('./dist/*.d.ts').forEach(file => {
          copyFileSync(file, file.replace('.d.ts', '.d.cts'))
        })
      }
    })
  ]
})
