import { defineConfig } from 'vite'
import { builtinModules,  } from 'module'
import dts from "vite-plugin-dts";
import {splitVendorChunkPlugin} from 'vite'
import pkg from './package.json'

const rollupGlobals = Object.fromEntries(builtinModules.map(module => [`node:${module}`, module]))

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: false,
    target: 'esnext',
    lib: {
      name: 'ltd-toolbox/figma-parser',
      entry: './src',
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
      copyDtsFiles: true,
      clearPureImport: true
    }),
  ]
})
