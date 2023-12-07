import { appendFile, readFile } from 'fs/promises'
import { builtinModules } from 'module'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
// @ts-ignore
import pkg from './package.json'

// const rollupGlobals = Object.fromEntries(builtinModules.map(module => [`node:${module}`, module]))

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: false,
    sourcemap: true,
    target: 'node16',
    lib: {
      name: 'ltd-toolbox/figma-parser',
      entry: './src/',
      formats: ['es', 'cjs'],
      fileName: (format, filename) => {
        return `${filename}.${format === 'es' ? 'mjs' : 'cjs'}`
      },
    },
    rollupOptions: {
      external: [...builtinModules],
    }
  },
  plugins: [
    dts({
      rollupTypes: true,
      include: ['./src/**/*.ts', './src/**/*.d.ts'],
      exclude: ['./src/**/*.spec.ts'],
      // vite-plugin-dts uses API-Extrctor, which has issues with module augmentation when rolling up types.
      // This is workaround.
      async afterBuild() {
        const pluginsFile = await readFile("./src/plugins.d.ts", 'utf-8');
        const importsRemoved = pluginsFile.split('\n').filter(line => !line.startsWith('import')).filter(Boolean).join('\n')
        await appendFile("./dist/index.d.ts", importsRemoved);
      },
    })
  ]
})
