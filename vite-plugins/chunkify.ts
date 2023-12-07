import { deepEntries, DeepEntry } from 'deep-entries'
import { basename, dirname, posix, relative, resolve, sep } from 'node:path'
import picomatch from 'picomatch'
import { Plugin, ResolvedConfig, Rollup } from 'vite'

export type ChunkPredicate = (data: ChunkPathData) => boolean;
export const isChunkPredicate = (value: unknown | string | ChunkPredicate): value is ChunkPredicate => typeof value === 'function'
export type ChunkDeepEntry = DeepEntry & Array<string | ChunkPredicate>
interface ChunkDefinitionObject {
  [k: string]:  ChunkDefinitionObject | ChunkDefinitionObject[] | string | string[] | ChunkPredicate
}
type ChunkConfig = ChunkDefinitionObject | (ChunkDefinitionObject | string)[]
export interface ChunkPathData {
  id: string
  root: string
  source: string
  file: string
  out: string,
  meta: Rollup.ModuleInfo
}



const skipExtension = (input: string) => input.split('.').slice(0, -1).join('.')





export function chunkify(chunkObject: ChunkConfig): Plugin {
  const entries = deepEntries(chunkObject)
    .map(entry => entry.filter(isNaN)) as ChunkDeepEntry[];

  let resolvedViteConfig: ResolvedConfig;

  return {
    name: 'vite-plugin-chunkify',
    apply: 'build',
    enforce: 'pre',
    configResolved(config) {
      resolvedViteConfig = config
    },
    config() {
      return {
        build: {
          rollupOptions: {
            output: {
              preserveModules: false,
              minifyInternalExports: false,
              chunkFileNames: '[name].[format].js',
              manualChunks(chunkId, { getModuleInfo }) {
                const projectRoot = resolvedViteConfig.root
                const filename = basename(chunkId);
                const outDir = resolve(resolvedViteConfig.build.outDir)
                const sourceDir = dirname(resolve(resolvedViteConfig.build?.lib?.entry))
                const meta = getModuleInfo(chunkId)!

                const modulePaths: ChunkPathData = {
                  id: chunkId,
                  root: projectRoot,
                  source: sourceDir,
                  file: filename,
                  out: outDir,
                  meta
                }

                const fileEntry = entries.find((entry: DeepEntry)=> {
                  const pathOrPredicate = entry.at(-1)

                  if (isChunkPredicate(pathOrPredicate)) {
                    return pathOrPredicate(modulePaths)
                  }

                  const resolvedPathUnix = resolve(pathOrPredicate as string).split(sep).join(posix.sep);
                  const chunkIdUnix = chunkId.split(sep).join(posix.sep);

                  return picomatch.isMatch(chunkIdUnix, resolvedPathUnix)
                })

                if (fileEntry) {
                  const chunkNameParts = fileEntry
                    .slice(0, -1)

                  if (chunkNameParts.length === 0) {
                    return skipExtension(relative(sourceDir, chunkId))
                  }

                  const chunkFilename = skipExtension(filename);
                  const chunkName = chunkNameParts
                    .join('/')
                    .replaceAll('[name]', chunkFilename)

                  return chunkName
                }

                return null
              }
            }
          }
        }
      }
    }
  }
}
