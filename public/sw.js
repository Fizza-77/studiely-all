/* Minimal service worker — installability + offline fallback. */
const CACHE = "studiely-pwa-v5";
const PRECACHE = ["/offline.html", "/logo-group.svg", "/icons/pwa-192.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      await cache.addAll(PRECACHE);
      await self.skipWaiting();
    })(),
  );
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
  const { request } = event;
  if (request.method !== "GET") return;

  const accept = request.headers.get("accept") || "";
  const isDocument =
    request.mode === "navigate" || accept.includes("text/html");

  event.respondWith(
    (async () => {
      try {
        const network = await fetch(request);
        return network;
      } catch {
        const cached = await caches.match(request);
        if (cached) return cached;
        if (isDocument) {
          const offline = await caches.match("/offline.html");
          if (offline) return offline;
        }
        return new Response("Offline", {
          status: 503,
          statusText: "Service Unavailable",
          headers: { "Content-Type": "text/plain" },
        });
      }
    })(),
  );
});
