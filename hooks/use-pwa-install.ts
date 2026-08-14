"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import {
  detectPwaAlreadyInstalled,
  isStandalonePwa,
  writePwaInstalledFlag,
} from "@/lib/pwa";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

function isIosDevice(): boolean {
  if (typeof window === "undefined") return false;
  const ua = window.navigator.userAgent;
  const iOS = /iPad|iPhone|iPod/.test(ua);
  const iPadOs = ua.includes("Mac") && "ontouchend" in document;
  return iOS || iPadOs;
}

export type PwaInstallResult =
  | "accepted"
  | "dismissed"
  | "ios"
  | "unavailable"
  | "installed"
  | "busy";

/**
 * Captures `beforeinstallprompt` once and exposes a safe install() action.
 * Hides install UI when already installed (standalone, related apps, or prior appinstalled).
 */
export function usePwaInstall() {
  const deferredRef = useRef<BeforeInstallPromptEvent | null>(null);
  const promptingRef = useRef(false);
  const [canPrompt, setCanPrompt] = useState(false);
  const [installed, setInstalled] = useState(false);
  const [ios, setIos] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setIos(isIosDevice());

    void (async () => {
      const already = await detectPwaAlreadyInstalled();
      if (cancelled) return;
      setInstalled(already || isStandalonePwa());
      setReady(true);
    })();

    const onBeforeInstall = (e: Event) => {
      // BIP only fires when Chromium considers the app *not* installed.
      e.preventDefault();
      writePwaInstalledFlag(false);
      deferredRef.current = e as BeforeInstallPromptEvent;
      setInstalled(false);
      setCanPrompt(true);
    };

    const onInstalled = () => {
      writePwaInstalledFlag(true);
      setInstalled(true);
      deferredRef.current = null;
      setCanPrompt(false);
      promptingRef.current = false;
    };

    const onDisplayModeChange = () => {
      if (isStandalonePwa()) {
        writePwaInstalledFlag(true);
        setInstalled(true);
        deferredRef.current = null;
        setCanPrompt(false);
      }
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    window.addEventListener("appinstalled", onInstalled);
    const standaloneMq = window.matchMedia("(display-mode: standalone)");
    standaloneMq.addEventListener?.("change", onDisplayModeChange);

    return () => {
      cancelled = true;
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      window.removeEventListener("appinstalled", onInstalled);
      standaloneMq.removeEventListener?.("change", onDisplayModeChange);
    };
  }, []);

  const install = useCallback(async (): Promise<PwaInstallResult> => {
    if (isStandalonePwa() || installed) {
      return "installed";
    }

    if (promptingRef.current) {
      return "busy";
    }

    const deferred = deferredRef.current;
    if (deferred) {
      promptingRef.current = true;
      try {
        // A BIP event may only be used once — clear before awaiting outcome.
        deferredRef.current = null;
        setCanPrompt(false);
        await deferred.prompt();
        const { outcome } = await deferred.userChoice;
        if (outcome === "accepted") {
          writePwaInstalledFlag(true);
          setInstalled(true);
        }
        // If dismissed, Chromium will not re-fire BIP for this session.
        return outcome;
      } catch {
        return "unavailable";
      } finally {
        promptingRef.current = false;
      }
    }

    if (isIosDevice()) return "ios";
    return "unavailable";
  }, [installed]);

  /** Show Install only when we can actually install (or iOS needs Share instructions). */
  const showInstallUi =
    ready && !installed && !isStandalonePwa() && (canPrompt || ios);

  return {
    canPrompt,
    installed,
    ios,
    ready,
    showInstallUi,
    install,
  };
}
