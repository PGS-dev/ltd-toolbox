import { appendFile, appendFileSync, readFile, readFileSync } from 'fs'
import { defineConfig } from 'vite'
import { builtinModules } from 'module'
import dtsPlugin from 'vite-plugin-dts'
import { chunkify } from '../../vite-plugins/chunkify'
// @ts-ignore
import pkg from './package.json'
// const rollupGlobals = Object.fromEntries(builtinModules.map(module => [`node:${module}`, module]))

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: false,
    sourcemap: 'inline',
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
      external: [...builtinModules, /node_modules/],
    }
  },
  plugins: [
    chunkify({
      parser: './src/parser.ts',
      'parser-with-plugins': './src/parser-with-plugins.ts',
      vendors: ({ id }) => id.includes('node_modules'),
      plugins: {
        styles: ({id}) => id.includes('plugins/styles/'),
        hardcache: ({id}) => id.includes('plugins/hard-cache/'),
        document: ({id}) => id.includes('plugins/document/')
      },
      shared: './src/shared/**/*.ts'
    }),
    dtsPlugin({
      rollupTypes: true,
      include: ['./src/**/*.ts', './src/**/*.d.ts'],
      exclude: ['./src/**/*.spec.ts'],
      // vite-plugin-dts uses API-Extrctor, which has issues with module augmentation when rolling up types.
      // This is workaround.
      afterBuild() {
        const pluginsFile = readFileSync("./src/plugins.d.ts", 'utf-8');
        const importsRemoved = pluginsFile.split('\n').filter(line => !line.startsWith('import')).filter(Boolean).join('\n')
        appendFileSync("./dist/index.d.ts", importsRemoved);
      },
    })
  ]
})
