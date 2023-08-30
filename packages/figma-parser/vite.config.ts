import { defineConfig } from 'vite'
import { builtinModules,  } from 'node:module'
import dts from "vite-plugin-dts";

const builtinModulesWithPrefix = builtinModules.map(module => `node:${module}`)

const rollupGlobals = Object.fromEntries(builtinModules.map(module => [`node:${module}`, module]))

export default defineConfig({
  build: {
    minify: false,
    target: 'esnext',
    lib: {
      name: 'ltd-toolbox/figma-parser',
      entry: [
        './src/index.ts',
        './src/parser.ts',
        './src/plugins/styles/index.ts',
        './src/plugins/styles/transformers/design-tokens/index.ts',
        './src/plugins/hard-cache/index.ts',
      ],
      fileName: (format, filename) => {
        return `${filename}.${format === 'es' ? 'mjs' : 'cjs'}`
      },
    },
    rollupOptions: {
      external: builtinModulesWithPrefix,
      output: {
        preserveModules: true,
        globals: rollupGlobals
      }
    }
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
    }),
  ]
})
