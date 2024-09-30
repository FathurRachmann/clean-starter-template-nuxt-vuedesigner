// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import { defineConfig } from 'vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  components: true,
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@pinegrow/nuxt-module'],
  srcDir: 'src/',
  css: ['~/assets/css/tailwind.css'],
  tailwindcss: {
    config: {
      content: [
        './src/**/*.{html,js,ts,jsx,tsx}',
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    server: {
      fs: {
        allow: ['./src', './public'] // Tentukan jalur yang diizinkan
      }
    }
  },
  server: {
    fs: {
      allow: ['src', 'public', 'path/to/allowed/directory']
    }
  },
  pinegrow: {
    liveDesigner: {
        devServerUrls: {
            /* Please ensure that you update this URL with the actual URL of your remote dev-server. */
            network: 'http://192.168.1.108:3000', // If running a remote dev-server
          },
          tailwindcss: {
            /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
            configPath: 'tailwind.config.js',
            cssPath: '@/assets/css/tailwind.css',
            // themePath: false, // Set to false so that Design Panel is not used
            // restartOnConfigUpdate: true,
            restartOnThemeUpdate: true,
          },
        },
  },

})