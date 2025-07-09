import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'



export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      sassVariables: 'src/quasar-variables.sass'
    })
  ],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "@/quasar-variables.sass"\n`
      }
    }
  },
   server: {
    proxy: {
      '/users': 'http://localhost:4000',
      '/api': 'http://localhost:4000',
    },
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
