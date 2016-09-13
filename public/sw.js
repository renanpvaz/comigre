'use strict';

const CACHE_NAME = 'comigre-cache';
const urlsToCache = [
  'https://a.tile.openstreetmap.org/*/*/*.png',
  'https://b.tile.openstreetmap.org/*/*/*.png',
  'https://c.tile.openstreetmap.org/*/*/*.png'
];

const urlsToPrefetch = [
  '/',
  'https://cdnjs.cloudflare.com/ajax/libs/angular-material/1.1.0/angular-material.min.css',
  'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://unpkg.com/leaflet@0.7.7/dist/leaflet.css'
];

if ('serviceWorker' in navigator) {
  install();
}

this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        cache
          .addAll(mapToRequests(urlsToPrefetch))
          .then(() => console.log('All resources have been fetched and cached.'));
      })
  );
});

this.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
    })
  );
});

this.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        const fetchRequest = event.request.clone();

        if (response) {
          return response;
        }

        return fetch(fetchRequest).then(response => {
          const responseToCache = response.clone();

          if(!response || response.status !== 200 ) {
            return response;
          }

          caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, responseToCache));

          return response;
        });
      })
    );
});

function install() {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('SW registration succeeded: ', reg.scope))
    .catch(err => console.log('SW registration failed: ', err));
}

function mapToRequests(urls) {
  return urls.map(url => new Request(url, { mode: 'no-cors' }));
}
