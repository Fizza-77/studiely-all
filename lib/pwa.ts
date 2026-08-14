import { SITE_URL } from "@/lib/site";

/**
 * PWA display / install detection helpers.
 * Shared by install UI and marketing-in-PWA guards.
 */

const INSTALLED_FLAG_KEY = "studiely_pwa_installed_v1";

/** True when running inside an installed app window (not a normal browser tab). */
export function isStandalonePwa(): boolean {
  if (typeof window === "undefined") return false;

  const displayModes = ["standalone", "fullscreen", "minimal-ui"] as const;
  if (
    displayModes.some((mode) =>
      window.matchMedia(`(display-mode: ${mode})`).matches,
    )
  ) {
    return true;
  }

  const iosStandalone =
    "standalone" in window.navigator &&
    Boolean(
      (window.navigator as Navigator & { standalone?: boolean }).standalone,
    );
  if (iosStandalone) return true;

  // Trusted Web Activity / Android app referrer
  if (document.referrer.startsWith("android-app://")) return true;

  return false;
}

export function readPwaInstalledFlag(): boolean {
  try {
    return window.localStorage.getItem(INSTALLED_FLAG_KEY) === "1";
  } catch {
    return false;
  }
}

export function writePwaInstalledFlag(installed: boolean): void {
  try {
    if (installed) {
      window.localStorage.setItem(INSTALLED_FLAG_KEY, "1");
    } else {
      window.localStorage.removeItem(INSTALLED_FLAG_KEY);
    }
  } catch {
    /* private mode / blocked storage */
  }
}

/**
 * Best-effort: are we already installed (even when viewing in a browser tab)?
 * - In-app display mode → yes
 * - localStorage set on prior `appinstalled` → yes (cleared if BIP fires again)
 * - getInstalledRelatedApps (Chromium + related_applications) → yes
 */
export async function detectPwaAlreadyInstalled(): Promise<boolean> {
  if (typeof window === "undefined") return false;
  if (isStandalonePwa()) return true;
  if (readPwaInstalledFlag()) return true;

  try {
    const nav = navigator as Navigator & {
      getInstalledRelatedApps?: () => Promise<
        Array<{ platform: string; url?: string }>
      >;
    };
    if (typeof nav.getInstalledRelatedApps === "function") {
      const apps = await nav.getInstalledRelatedApps();
      if (apps?.some((app) => app.platform === "webapp")) {
        writePwaInstalledFlag(true);
        return true;
      }
    }
  } catch {
    /* unsupported or permission denied */
  }

  return false;
}

function pathOnly(pathname: string): string {
  return pathname.split("?")[0] || "/";
}

function matchesPrefix(path: string, prefix: string): boolean {
  return path === prefix || path.startsWith(`${prefix}/`);
}

/**
 * Routes that may stay inside the installed PWA window.
 * Landing is `/home`. Marketing site pages are never in this list.
 */
const PWA_IN_APP_PATHS = [
  "/home",
  "/generate",
  "/library",
  "/login",
  "/signup",
  "/rewards",
  "/practice",
  "/achievements",
  "/milestones",
  "/profile",
  "/help",
  "/parent-consent",
  "/verify-email",
] as const;

/** Student/web-app routes (same set as in-PWA for now). */
const STUDENT_APP_PATHS = [...PWA_IN_APP_PATHS] as const;

/** True when pathname may remain inside the PWA (not marketing, not browser-only). */
export function isPwaInAppPath(pathname: string): boolean {
  const path = pathOnly(pathname);
  return PWA_IN_APP_PATHS.some((prefix) => matchesPrefix(path, prefix));
}

export function isStudentAppPath(pathname: string): boolean {
  const path = pathOnly(pathname);
  return STUDENT_APP_PATHS.some((prefix) => matchesPrefix(path, prefix));
}

export function isMarketingPath(pathname: string): boolean {
  return !isStudentAppPath(pathname);
}

/**
 * Paths that must open in the system browser when inside the installed PWA
 * (marketing / billing — never render inside the app window).
 */
export function isPwaBrowserOnlyPath(pathname: string): boolean {
  const path = pathOnly(pathname);
  return (
    matchesPrefix(path, "/pricing") ||
    matchesPrefix(path, "/faqs") ||
    matchesPrefix(path, "/blog") ||
    matchesPrefix(path, "/contact") ||
    matchesPrefix(path, "/curriculum") ||
    matchesPrefix(path, "/nyla") ||
    matchesPrefix(path, "/privacy-policy") ||
    matchesPrefix(path, "/terms-of-service") ||
    matchesPrefix(path, "/cookie-policy") ||
    matchesPrefix(path, "/disclaimer") ||
    matchesPrefix(path, "/acceptable-use")
  );
}

/** PayPal / plan deep-links must still run on /pricing even if opened in PWA. */
export function isPricingCheckoutReturn(search: string): boolean {
  const q = new URLSearchParams(
    search.startsWith("?") ? search.slice(1) : search,
  );
  return (
    q.has("paypal_sub_done") ||
    q.has("paypal_cancel") ||
    q.has("plan") ||
    q.has("token")
  );
}

export function isPricingPath(pathOrUrl: string): boolean {
  try {
    const path = pathOrUrl.startsWith("http")
      ? new URL(pathOrUrl).pathname
      : pathOnly(pathOrUrl);
    return matchesPrefix(path, "/pricing");
  } catch {
    return pathOrUrl.includes("/pricing");
  }
}

export type PwaNavAction =
  | { type: "stay" }
  | { type: "home" }
  | { type: "browser"; href: string };

function isLocalDevHost(hostname: string): boolean {
  const host = hostname.toLowerCase();
  return (
    host === "localhost" ||
    host === "127.0.0.1" ||
    host.endsWith(".local") ||
    /^\d{1,3}(\.\d{1,3}){3}$/.test(host)
  );
}

/**
 * Public origin used to escape the installed PWA into the device browser.
 * Prefer an explicit marketing origin, then site URL, then www↔apex swap.
 */
function publicBrowserOrigin(): string | null {
  const configured = (
    process.env.NEXT_PUBLIC_MARKETING_ORIGIN ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    SITE_URL ||
    ""
  ).replace(/\/$/, "");
  if (!configured) return null;
  try {
    return new URL(configured).origin;
  } catch {
    return null;
  }
}

/**
 * Decide what the installed PWA should do for a pathname.
 * - stay: keep rendering in the PWA (web app routes; rare checkout exception)
 * - browser: bounce to /home and open the URL in the system browser
 * - home: marketing / unknown → land on /home only
 */
export function resolvePwaNavigation(
  pathname: string,
  search = "",
): PwaNavAction {
  const path = pathOnly(pathname);
  const href = search ? `${path}?${search}` : path;

  if (isPwaInAppPath(path)) return { type: "stay" };

  if (isPricingPath(path) && isPricingCheckoutReturn(search)) {
    return { type: "stay" };
  }

  // Pricing and other marketing pages always leave the PWA for the device browser.
  if (isPwaBrowserOnlyPath(path)) {
    return { type: "browser", href };
  }

  // Marketing landing `/`, smartlink, and anything else → app home.
  return { type: "home" };
}

/** True when opening this URL will leave the PWA origin (real system browser). */
export function canOpenOutsidePwa(pathOrUrl: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    const escaped = new URL(toSystemBrowserUrl(pathOrUrl));
    return escaped.origin !== window.location.origin;
  } catch {
    return false;
  }
}

/**
 * Absolute URL for opening outside the installed PWA.
 * Uses the public site origin (and www↔apex when needed) so Chromium opens
 * the device browser instead of another PWA window.
 */
export function toSystemBrowserUrl(pathOrUrl: string): string {
  if (typeof window === "undefined") {
    return pathOrUrl.startsWith("http") ? pathOrUrl : pathOrUrl;
  }

  const absolute = pathOrUrl.startsWith("http")
    ? pathOrUrl
    : new URL(pathOrUrl, window.location.origin).href;

  try {
    const u = new URL(absolute);
    if (!isStandalonePwa()) {
      return u.href;
    }

    const pathPart = `${u.pathname}${u.search}${u.hash}`;
    const publicOrigin = publicBrowserOrigin();
    const local = isLocalDevHost(window.location.hostname);

    // Prefer public marketing/site origin when it differs, or when developing locally.
    if (publicOrigin && (publicOrigin !== window.location.origin || local)) {
      return `${publicOrigin}${pathPart}`;
    }

    // Already on a different origin than the page → keep it.
    if (u.origin !== window.location.origin) {
      return u.href;
    }

    // www ↔ apex host swap (different origin → opens in the real browser).
    if (isLocalDevHost(u.hostname)) {
      // Last resort on LAN: still return absolute; Android intent may help.
      return absolute;
    }

    if (u.hostname.startsWith("www.")) {
      u.hostname = u.hostname.slice(4);
    } else {
      u.hostname = `www.${u.hostname}`;
    }
    return u.href;
  } catch {
    return absolute;
  }
}

/** Open a path/URL in the system browser (outside the PWA window). */
export function openInSystemBrowser(pathOrUrl: string): void {
  if (typeof window === "undefined") return;

  const url = toSystemBrowserUrl(pathOrUrl);
  const ua = window.navigator.userAgent || "";
  const sameOrigin =
    (() => {
      try {
        return new URL(url).origin === window.location.origin;
      } catch {
        return true;
      }
    })();

  // Android: VIEW intent is the most reliable way out of an installed PWA.
  if (/Android/i.test(ua)) {
    try {
      const withoutScheme = url.replace(/^https?:\/\//i, "");
      window.location.assign(
        `intent://${withoutScheme}#Intent;scheme=https;` +
          `action=android.intent.action.VIEW;` +
          `S.browser_fallback_url=${encodeURIComponent(url)};end`,
      );
      return;
    } catch {
      /* fall through */
    }
  }

  // Prefer a new browsing context with an out-of-scope URL.
  if (!sameOrigin) {
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (opened) {
      try {
        opened.opener = null;
      } catch {
        /* ignore */
      }
      return;
    }
  }
  // Same-origin: do not window.open — Chromium would spawn another PWA window.

  // iOS / desktop popup blocked — synthetic anchor with absolute public URL.
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/** Convenience: always open pricing outside the PWA when installed. */
export function openPricingInSystemBrowser(search = ""): void {
  const q = search
    ? search.startsWith("?")
      ? search
      : `?${search}`
    : "";
  openInSystemBrowser(`/pricing${q}`);
}
