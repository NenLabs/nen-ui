import { resolve } from 'path'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: 'NenUI',
      // the proper extensions will be added
      fileName: 'nen-ui',
      formats: ['es', 'cjs', 'umd', 'iife']
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    include: ['test/**/*.test.ts'],
    deps: {
      inline: ['@vue'],
    },
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json-summary', 'json', 'html'],
      lines: 80,
      branches: 80,
      functions: 80,
      statements: 80
    }
  }
})
