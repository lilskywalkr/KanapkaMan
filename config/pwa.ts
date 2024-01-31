import process from 'node:process'
import type { ModuleOptions } from '@vite-pwa/nuxt'

const scope = '/'

export const pwa: ModuleOptions = {
  registerType: 'autoUpdate',
  scope,
  base: scope,
  manifest: {
    id: scope,
    scope,
    name: 'KanapkaMan Software House',
    short_name: 'Kanapka',
    description: 'A software house to your services!',
    theme_color: '#5777ff',
    icons: [
      {
        src: '../assets/icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '../assets/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  },
  registerWebManifestInRouteRules: true,
  writePlugin: true,
  devOptions: {
    enabled: process.env.VITE_PLUGIN_PWA === 'true',
    navigateFallback: scope,
  },
}
