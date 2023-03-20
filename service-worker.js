const CACHE_NAME = "meu-pwa-cache-v1";
const urlsToCache = [
  "/",
  '/index.html',
  '/estilo.css',
  '/logica.js',
  'img/cores.png',
   "https://johnstonpc.github.io/app-pwa/"
   
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }

        return fetch(event.request);
      })
  );
});
