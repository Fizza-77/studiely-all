const GUEST_MODE_KEY = "is_guest_mode";
const GUEST_MODE_DATE_KEY = "guest_mode_enabled_date";
const DEVICE_ID_KEY = "guest_generation_device_id";

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
