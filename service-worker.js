const CACHE_NAME = "jjs-heaven-v1";

const FILES = [
  "./",
  "./index.html",
  "./dados.json",
  "./extras.html",
  "./impact.html",
  "./blur.html",
  "./manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});