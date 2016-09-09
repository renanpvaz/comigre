if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(registration => {
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(err => {
    console.log('ServiceWorker registration failed: ', err);
  });
}

const CACHE_NAME = 'comigre-cache';
const urlsToCache = [
  'https://a.tile.openstreetmap.org/*/*/*.png',
  'https://b.tile.openstreetmap.org/*/*/*.png',
  'https://c.tile.openstreetmap.org/*/*/*.png'
];

const urlsToPrefetch = [
  '/packages/modules.js?hash=*',
  'https://cdnjs.cloudflare.com/ajax/libs/angular-material/1.1.0/angular-material.min.css',
  'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://npmcdn.com/leaflet@0.7.7/dist/leaflet.css'
];

this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        cache.addAll(urlsToPrefetch.map(url => {
          return new Request(url, { mode: 'no-cors' });
        })).then(() => {
          console.log('All resources have been fetched and cached.');
        });
      })
  );
});

this.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }

        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          response => {
            if(!response || response.status !== 200 ) {
              return response;
            }

            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
