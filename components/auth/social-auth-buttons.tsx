"use client";

function GoogleMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z"
      />
    </svg>
  );
}

function AppleMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden fill="currentColor">
      <path d="M16.365 1.43c0 1.14-.463 2.21-1.226 3.01-.8.85-2.13 1.5-3.26 1.41-.14-1.12.44-2.3 1.2-3.08.82-.85 2.24-1.47 3.29-1.34zM20.69 17.24c-.57 1.3-.84 1.88-1.57 3.03-1.02 1.58-2.46 3.55-4.25 3.56-1.58.02-1.99-1.03-4.15-1.02-2.15.01-2.61 1.04-4.19 1.02-1.79-.02-3.15-1.79-4.17-3.37C.76 17.1-.4 12.35 1.7 9.1c1.16-1.8 3-2.86 4.72-2.86 1.76 0 2.87 1.05 4.33 1.05 1.42 0 2.29-1.06 4.35-1.06 1.55 0 3.19.84 4.34 2.3-3.81 2.09-3.19 7.54.25 8.71z" />
    </svg>
  );
}

const btnClass =
  "inline-flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2.5 text-sm font-bold text-[var(--color-text)] transition hover:bg-[var(--color-indigo-soft)] disabled:cursor-not-allowed disabled:opacity-60";

export function SocialAuthButtons({
  onGoogle,
  onApple,
  busy,
  googleLabel = "Continue with Google",
  appleLabel = "Continue with Apple",
}: {
  onGoogle: () => void;
  onApple: () => void;
  busy?: boolean;
  googleLabel?: string;
  appleLabel?: string;
}) {
  return (
    <div className="space-y-2.5">
      <div className="relative my-1 flex items-center gap-3">
        <div className="h-px flex-1 bg-[var(--color-border)]" />
        <span className="text-xs font-medium tracking-wide text-[var(--color-text-muted)] uppercase">
          Or
        </span>
        <div className="h-px flex-1 bg-[var(--color-border)]" />
      </div>
      <button
        type="button"
        className={btnClass}
        disabled={busy}
        onClick={onGoogle}
      >
        <GoogleMark />
        {googleLabel}
      </button>
      <button
        type="button"
        className={btnClass}
        disabled={busy}
        onClick={onApple}
      >
        <AppleMark />
        {appleLabel}
      </button>
    </div>
  );
}
