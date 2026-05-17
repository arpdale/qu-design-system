import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'components/index.ts',
    'icons/index': 'components/icons/index.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  treeshake: true,
})
