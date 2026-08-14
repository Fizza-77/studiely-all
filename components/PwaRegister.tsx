"use client";

import { useEffect } from "react";

/** Registers the service worker so the site can be installed as a PWA. */
export function PwaRegister() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

    const register = () => {
      void navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .then((reg) => {
          // Pick up a newer SW without forcing a duplicate install identity.
          void reg.update().catch(() => undefined);
        })
        .catch(() => {
          // Ignore registration failures (unsupported / insecure context).
        });
    };

    if (document.readyState === "complete") {
      register();
    } else {
      window.addEventListener("load", register, { once: true });
    }
  }, []);

  return null;
}
