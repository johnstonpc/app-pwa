self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('meu-pwa').then(function(cache) {
        return cache.addAll([
          '/index.html',
          '/estilo.css',
          '/logica.js',
          'img/cores.png',
          
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  