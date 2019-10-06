"use strict";

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

// Reload initial page first from cache then revalidate.
workbox.routing.registerRoute(
  "/",
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "initial"
  })
);

// Reload views, js and css first from cache then revalidate.
workbox.routing.registerRoute(
  /\.(?:js|css|html)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "static-resources"
  })
);

// Cache images for 30 days.
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "images",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60,
        purgeOnQuotaError: true
      })
    ]
  })
);
