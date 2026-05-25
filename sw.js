const CACHE = 'corsan-v1';
const ASSETS = [
  '/relatorio-agua/',
  '/relatorio-agua/index.html',
  '/relatorio-agua/servicos.html'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
