const CACHE_NAME = 'prayer-app-v2';
const urlsToCache = [
    '/',
    '/ActOfContrition.html',
    '/ApostlesCreed.html',
    '/app.js',
    '/DivineMercy.html',
    '/FatimaPrayer.html',
    '/FinalRosaryPrayer.html',
    '/GloryBe.html',
    '/HailHolyQueen.html',
    '/HailMary.html',
    '/index.html',
    '/manifest.json',
    '/OurFather.html',
    '/Rosary.html',
    '/RosaryMysteries.html',
    '/StMichael.html',
    '/style.css'
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