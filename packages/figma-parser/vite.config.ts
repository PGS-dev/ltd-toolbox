import { defineConfig } from 'vite'
import { builtinModules } from 'module'
import dts from "vite-plugin-dts";

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
        parser: './src/parser/index.ts',
        types: './src/types.ts'
      },
      formats: ['es', 'cjs'],
      fileName: (format, filename) => {
        return `${filename}.${format === 'es' ? 'mjs' : 'cjs'}`
      },
    },
    rollupOptions: {
      external: [...builtinModules],
      output: {
        exports: 'named'
      }
    }
  },
  plugins: [
    dts({
      rollupTypes: true,
      include: ['./src/**/*.ts', './src/**/*.d.ts'],
      copyDtsFiles: true,
      entryRoot:'./src',
      insertTypesEntry: true,
      exclude: ['./src/**/*.spec.ts', './src/**/tests/**/*']
    })
  ]
})
