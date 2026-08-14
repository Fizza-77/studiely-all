/* Minimal service worker — required for installability. */
const CACHE = "studiely-pwa-v4";

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  // Network-first; keep SW alive for PWA install criteria without aggressive offline caching.
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
