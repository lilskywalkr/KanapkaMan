import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ['**/*.{js, css, html, ico, png, svg, json, vue, txt, woff2}']
      },
      includeAssets: ['**/src/assets/*.png'],
      manifest: {
        name: "KanapkaMan Software House",
        short_name: "KanapkaMan",
        description: "KanapkaMan landing page pwa",
        theme_color: '#ffffff',
        background_color: "#141618",
        display: 'standalone',
        icons: [
          {
            src: 'img/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'img/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'img/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
