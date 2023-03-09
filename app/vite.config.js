import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from 'vite-plugin-pwa';


// https://vitejs.dev/config/
export default defineConfig({
  entry: "src/main.js",
  plugins: [
    react(),
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'my-sw.js',
      globDirectory: 'public/',
      workbox: {
        globPatterns: [
          '**/*.{js,css,html,png,jpg,jpeg,gif,svg}',
        ],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/example\.com\/api/,
            handler: 'networkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxAgeSeconds: 60 * 60 * 24 * 7, // cache for a week
              },
              networkTimeoutSeconds: 10, // wait for 10 seconds before failing
            },
          },
          {
            urlPattern: /^https:\/\/example\.com\/static/,
            handler: 'cacheFirst',
            options: {
              cacheName: 'static-cache',
              expiration: {
                maxAgeSeconds: 60 * 60 * 24 * 365, // cache for a year
              },
            },
          },
        ],
      },
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 8080,
  },
});
