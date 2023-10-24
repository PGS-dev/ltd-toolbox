import { defineConfig } from 'vite'
import { builtinModules,  } from 'module'
import dts from "vite-plugin-dts";
import {splitVendorChunkPlugin} from 'vite'
import pkg from './package.json' assert { type: 'json'}

const rollupGlobals = Object.fromEntries(builtinModules.map(module => [`node:${module}`, module]))

export default defineConfig({
  build: {
    emptyOutDir: true,
    manifest: true,
    minify: false,
    target: 'esnext',
    lib: {
      name: 'ltd-toolbox/figma-parser',
      entry: './src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format, filename) => {
        return `${filename}.${format === 'es' ? 'mjs' : 'cjs'}`
      },
    },
    rollupOptions: {
      external: [...builtinModules, pkg.dependencies, /node_modules/],
      output: {
        preserveModulesRoot: './src/',
        preserveModules: true,
        globals: rollupGlobals,
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
