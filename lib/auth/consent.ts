const CONSENT_KEY = "data_collection_consent";
const CONSENT_DATE_KEY = "consent_date";
const CONSENT_VERSION_KEY = "consent_version";

/** Must match Flutter ConsentService.currentConsentVersion */
export const CURRENT_CONSENT_VERSION = 1;

/**
 * GDPR analytics consent — local only (Flutter SharedPreferences).
 * Does NOT write to Students documents.
 */
export const consentStorage = {
  hasBeenRequested(): boolean {
    if (typeof window === "undefined") return false;
    const version = Number(localStorage.getItem(CONSENT_VERSION_KEY) ?? "0");
    if (version !== CURRENT_CONSENT_VERSION) return false;
    return localStorage.getItem(CONSENT_KEY) !== null;
  },

  getConsent(): boolean | null {
    if (typeof window === "undefined") return null;
    if (!this.hasBeenRequested()) return null;
    return localStorage.getItem(CONSENT_KEY) === "true";
  },

  setConsent(value: boolean): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(CONSENT_KEY, String(value));
    localStorage.setItem(CONSENT_DATE_KEY, new Date().toISOString());
    localStorage.setItem(CONSENT_VERSION_KEY, String(CURRENT_CONSENT_VERSION));
  },
};
