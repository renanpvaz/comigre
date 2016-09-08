if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/worker.js').then(registration => {
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(err => {
    console.log('ServiceWorker registration failed: ', err);
  });
}

const CACHE_NAME = 'comigre-cache';
const urlsToCache = [
  location.hostname === 'localhost' ? '/packages/modules.js?hash=*' : '/*.js?meteor_js_resource=true',
  'https://a.tile.openstreetmap.org/*/*/*.png',
  'https://b.tile.openstreetmap.org/*/*/*.png',
  'https://c.tile.openstreetmap.org/*/*/*.png',
  'https://cdnjs.cloudflare.com/ajax/libs/angular-material/1.1.0/angular-material.min.css',
  'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://npmcdn.com/leaflet@0.7.7/dist/leaflet.css'
];

this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

this.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }

        return fetch(event.request, { mode: 'cors' });
      }
    )
  );
});
