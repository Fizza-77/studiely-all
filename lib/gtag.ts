export const GA_MEASUREMENT_ID = "G-MJE49N8QRH";

let analyticsLoadStarted = false;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function injectGtag(): void {
  if (typeof window === "undefined" || analyticsLoadStarted) return;
  if (
    document.querySelector(
      `script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`,
    )
  ) {
    analyticsLoadStarted = true;
    return;
  }
  analyticsLoadStarted = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    // Defer non-critical hits so mobile LCP isn't competing with analytics.
    send_page_view: true,
    transport_type: "beacon",
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

/**
 * Load gtag.js after cookie consent, during browser idle time so it
 * doesn't compete with LCP / first-party JS on mobile.
 */
export function loadGoogleAnalytics(): void {
  if (typeof window === "undefined" || analyticsLoadStarted) return;

  const schedule =
    typeof window.requestIdleCallback === "function"
      ? (cb: () => void) => window.requestIdleCallback(cb, { timeout: 4_000 })
      : (cb: () => void) => window.setTimeout(cb, 2_000);

  schedule(() => injectGtag());
}
