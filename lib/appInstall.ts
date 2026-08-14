"use client";

/**
 * Native store destinations (same as Footer / smartlink).
 * Used when the browser PWA install prompt is not available.
 */
export const APP_STORE_URL =
  "https://apps.apple.com/us/app/eduplayce/id6758246110";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.skyensolutions.eduplayce.eduplayce";
export const SMARTLINK_PATH = "/smartlink";

export function openNativeAppInstall(): void {
  if (typeof window === "undefined") return;
  window.location.assign(SMARTLINK_PATH);
}
