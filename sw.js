const cacheName ="site";

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(
          [ 
            '/',
            '/style.css',
            '/jsQR.js',
            '/sesion.js',
            '/app.js',
            '/Camera.js',
            '/index.html'
          ]
        );
      })
    );
  });

self.addEventListener('activate', evt =>{
    console.log('service worker activated');
});

self.addEventListener('fetch', evt =>{
    evt.respondWith(
        caches.match(evt.request).then(cacheRes =>{
            return cacheRes || fetch(evt.request);
        })
    );
});