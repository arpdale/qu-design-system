import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['components/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  treeshake: true,
})
