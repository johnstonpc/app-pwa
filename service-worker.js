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
  if (event.request.url === self.origin + '/' || event.request.url === self.origin + '/index.html') {
    event.respondWith(
      caches.open('meu-pwa').then(function(cache) {
        return cache.match('index.html').then(function(cachedResponse) {
          // Se a página estiver em cache, retorna ela
          if (cachedResponse) {
            return cachedResponse;
          }

          // Caso contrário, pré-carrega a página e retorna ela
          return fetch(event.request).then(function(response) {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  }
});

