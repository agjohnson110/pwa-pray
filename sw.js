const CACHE_NAME = 'prayer-app-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
    '/manifest.json',
    '/ApostlesCreed.html',
    '/FatimaPrayer.html',
    '/GloryBe.html',
    '/HailHolyQueen.html',
    '/HailMary.html',
    '/OurFather.html',
    '/StMichael.html'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});