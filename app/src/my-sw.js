self.__WB_MANIFEST;
// Define the cache names
const staticCacheName = 'static-v1';

// Define the assets to be cached
const assets = [
    '/',
    '/index.html',
    '/manifest.json',
    '/favicon.ico',
    '/robots.txt',
    '/offline.html',
    '/index.css',
    '/**/*.js',
    '/**/*.png',
    '/**/*.webp'

  ];
// Install the service worker and cache the static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(staticCacheName)
      .then(cache => cache.addAll(assets))
  );
});

// Serve the cached assets when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then(response => {
            if (!response || response.status !== 200) {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(staticCacheName)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            return response;
          })
          .catch(() => {
            return caches.match('/offline.html');
          });
      })
  );
});

// Clean up old cache versions
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.filter(cacheName => {
            return cacheName.startsWith('static-') && cacheName !== staticCacheName;
          }).map(cacheName => {
            return caches.delete(cacheName);
          })
        );
      })
  );
});