const GUEST_MODE_KEY = "is_guest_mode";
const GUEST_MODE_DATE_KEY = "guest_mode_enabled_date";
const DEVICE_ID_KEY = "guest_generation_device_id";
const DEVICE_FREE_USED_KEY = "studiely_device_free_generations_used";

function uuid(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `guest-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

/** Mirrors Flutter GuestModeService — localStorage only. */
export const guestMode = {
  enable(): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(GUEST_MODE_KEY, "true");
    localStorage.setItem(GUEST_MODE_DATE_KEY, new Date().toISOString());
  },

  exit(): void {
    if (typeof window === "undefined") return;
    localStorage.removeItem(GUEST_MODE_KEY);
    localStorage.removeItem(GUEST_MODE_DATE_KEY);
  },

  isEnabled(): boolean {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(GUEST_MODE_KEY) === "true";
  },
};

let sessionId: string | null = null;

/** Mirrors Flutter GuestGenerationService device/session IDs for guest AI quotas. */
export const guestIds = {
  getDeviceId(): string {
    if (typeof window === "undefined") return "ssr";
    let id = localStorage.getItem(DEVICE_ID_KEY);
    if (!id) {
      id = uuid();
      localStorage.setItem(DEVICE_ID_KEY, id);
    }
    return id;
  },

  getSessionId(): string {
    if (!sessionId) sessionId = uuid();
    return sessionId;
  },
};

/**
 * Tracks free generations used on this browser device (guest + signed-in).
 * GuestGenerationCounts only updates for guest API calls; account usage while
 * signed in is mirrored here so guest mode / refresh stays accurate.
 */
export const deviceFreeUsage = {
  get(): number {
    if (typeof window === "undefined") return 0;
    try {
      const raw = localStorage.getItem(DEVICE_FREE_USED_KEY);
      if (!raw) return 0;
      const parsed = JSON.parse(raw) as { deviceId?: string; used?: number };
      if (parsed.deviceId !== guestIds.getDeviceId()) return 0;
      const used = Number(parsed.used);
      return Number.isFinite(used) && used > 0 ? Math.floor(used) : 0;
    } catch {
      return 0;
    }
  },

  sync(used: number): void {
    if (typeof window === "undefined") return;
    const next = Math.max(0, Math.floor(used));
    const current = this.get();
    if (next <= current) return;
    localStorage.setItem(
      DEVICE_FREE_USED_KEY,
      JSON.stringify({ deviceId: guestIds.getDeviceId(), used: next }),
    );
  },

  bump(limit = 5): number {
    const next = Math.min(limit, this.get() + 1);
    if (typeof window !== "undefined") {
      localStorage.setItem(
        DEVICE_FREE_USED_KEY,
        JSON.stringify({ deviceId: guestIds.getDeviceId(), used: next }),
      );
    }
    return next;
  },
};
