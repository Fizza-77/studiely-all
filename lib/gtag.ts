export const GA_MEASUREMENT_ID = "G-MJE49N8QRH";

let analyticsLoadStarted = false;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Official Google tag (gtag.js) for G-MJE49N8QRH.
 * Safe to call more than once — the layout snippet already loads this on every page.
 */
export function loadGoogleAnalytics(): void {
  if (typeof window === "undefined" || analyticsLoadStarted) return;
  if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`)) {
    analyticsLoadStarted = true;
    return;
  }
  analyticsLoadStarted = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}
