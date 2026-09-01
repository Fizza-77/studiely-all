"use client";

import {
  useState,
  type ButtonHTMLAttributes,
  type InputHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";

export function AuthCard({
  title,
  subtitle,
  children,
  className,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-md rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_12px_40px_rgba(79,53,242,0.1)] sm:p-8 dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)] ${className ?? ""}`}
    >
      <h1 className="font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-[-0.02em] text-[var(--color-text)]">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {subtitle}
        </p>
      ) : null}
      <div className="mt-6">{children}</div>
    </div>
  );
}

export function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`mb-4 block ${className ?? ""}`}>
      <span className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">
        {label}
      </span>
      {children}
      {error ? (
        <span className="mt-1 block text-xs text-[var(--color-error)]">{error}</span>
      ) : null}
    </label>
  );
}

const inputClassName =
  "w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-input-bg)] px-3.5 py-2.5 text-sm text-[var(--color-input-text)] outline-none transition placeholder:text-[var(--color-input-placeholder)] focus:border-[var(--color-vivid-cyan)] focus:ring-2 focus:ring-[var(--color-vivid-cyan)]/25";

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  const { className, ...rest } = props;
  return <input {...rest} className={`${inputClassName} ${className ?? ""}`} />;
}

/** Password field with show/hide eye toggle. */
export function PasswordInput({
  className,
  ...props
}: Omit<InputHTMLAttributes<HTMLInputElement>, "type">) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <input
        {...props}
        type={visible ? "text" : "password"}
        className={`${inputClassName} pr-11 ${className ?? ""}`}
      />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        className="absolute top-1/2 right-2.5 flex size-8 -translate-y-1/2 items-center justify-center rounded-lg text-[var(--color-text-muted)] transition hover:bg-[var(--color-indigo-soft)] hover:text-[var(--color-text)]"
        aria-label={visible ? "Hide password" : "Show password"}
        tabIndex={-1}
      >
        {visible ? <EyeOffIcon /> : <EyeIcon />}
      </button>
    </div>
  );
}

function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 3l18 18M10.6 10.6A3 3 0 0 0 12 15a3 3 0 0 0 2.4-1.4M9.9 5.1A10.4 10.4 0 0 1 12 5c6.5 0 10 7 10 7a17.5 17.5 0 0 1-4.2 4.8M6.1 6.1A17.3 17.3 0 0 0 2 12s3.5 7 10 7c1.3 0 2.5-.2 3.6-.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const { className, ...rest } = props;
  return (
    <textarea
      {...rest}
      className={`${inputClassName} min-h-[5rem] resize-y ${className ?? ""}`}
    />
  );
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  const { className, children, ...rest } = props;
  return (
    <select {...rest} className={`${inputClassName} ${className ?? ""}`}>
      {children}
    </select>
  );
}

export function PrimaryButton({
  children,
  loading,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean }) {
  return (
    <button
      {...props}
      disabled={props.disabled || loading}
      className={`inline-flex w-full items-center justify-center rounded-full bg-[var(--color-vivid-cyan)] px-4 py-2.5 text-sm font-bold !text-white transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60 ${className ?? ""}`}
    >
      {loading ? "Please wait…" : children}
    </button>
  );
}

export function SecondaryButton({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`inline-flex w-full items-center justify-center rounded-full border-2 border-[var(--color-vivid-cyan)] bg-transparent px-4 py-2.5 text-sm font-bold text-[var(--color-vivid-cyan)] transition hover:bg-[var(--color-indigo-soft)] disabled:opacity-60 ${className ?? ""}`}
    >
      {children}
    </button>
  );
}

export function Alert({
  children,
  tone = "error",
}: {
  children: ReactNode;
  tone?: "error" | "success" | "info";
}) {
  const styles =
    tone === "error"
      ? "border-[var(--color-error)]/30 bg-[var(--color-error-light)] text-[var(--color-error)]"
      : tone === "success"
        ? "border-[var(--color-soft-green)]/35 bg-[var(--color-soft-green-light)] text-[var(--color-text)]"
        : "border-[var(--color-vivid-cyan)]/30 bg-[var(--color-vivid-cyan)]/10 text-[var(--color-text)]";

  return (
    <div className={`mb-2 rounded-xl border px-3 py-2 text-xs sm:text-sm auth-alert ${styles}`}>
      {children}
    </div>
  );
}

export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">
      <p className="mb-6 font-[family-name:var(--font-display)] text-sm font-extrabold tracking-[0.12em] text-[var(--color-vivid-cyan)] uppercase">
        Studiely
      </p>
      {children}
    </div>
  );
}

/** Full-viewport shell for landscape auth — fixed, no page scroll. */
export function AuthLoginShell({ children }: { children: ReactNode }) {
  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center overflow-hidden bg-[var(--color-bg,#FFFBEF)] px-2 py-2 sm:px-4">
      {children}
    </div>
  );
}

const AUTH_FORM_COL =
  "auth-compact-fields flex min-h-0 flex-col justify-center overflow-hidden px-4 py-3 sm:px-5 sm:py-4 md:px-6 [&_label.block]:mb-1.5 [&_label.block>span:first-child]:mb-0.5 [&_label.block>span:first-child]:text-xs [&_input]:py-1.5 [&_input]:text-sm [&_button]:py-2 [&_button]:text-sm [&_button]:min-h-0";

/** Two-column auth card: branding left, form right — fits one viewport, no scroll. */
export function AuthLandscapeCard({
  title,
  subtitle,
  children,
  className,
  wide = false,
  asideFooter,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  /** Wider card for multi-section forms (e.g. parental sign-up). */
  wide?: boolean;
  /** Optional links/text pinned to the bottom of the left panel. */
  asideFooter?: ReactNode;
}) {
  return (
    <div
      className={`mx-auto flex h-[calc(100dvh-1rem)] max-h-[calc(100dvh-1rem)] w-full flex-col overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-[var(--color-card)] shadow-[0_16px_48px_rgba(79,53,242,0.14)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.35)] sm:rounded-[28px] ${wide ? "max-w-6xl" : "max-w-4xl"} ${className ?? ""}`}
    >
      <div className="grid min-h-0 flex-1 grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <aside className="relative flex min-h-0 flex-col justify-center bg-gradient-to-br from-[#4F35F2] via-[#4528E8] to-[#3B24C4] px-5 py-4 text-white sm:px-6 sm:py-5 md:px-8">
          <div
            className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-[#E8FF2F]/15 blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-10 -left-8 size-36 rounded-full bg-[#FF2D8A]/20 blur-3xl"
            aria-hidden
          />
          <div className="relative min-h-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-group.svg?v=blue"
              alt="Studiely"
              width={140}
              height={32}
              className="h-7 w-auto brightness-0 invert sm:h-8"
            />
            <p className="mt-3 text-[10px] font-bold tracking-[0.14em] text-white/70 uppercase sm:mt-4">
              Studiely
            </p>
            <h1 className="mt-1 font-[family-name:var(--font-display)] text-xl font-extrabold tracking-[-0.02em] sm:text-2xl md:text-[1.65rem]">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-2 max-w-xs text-xs leading-snug text-white/85 sm:text-[0.8125rem]">
                {subtitle}
              </p>
            ) : null}
          </div>
          {asideFooter ? (
            <div className="relative mt-auto hidden pt-4 text-xs text-white/70 sm:block">
              {asideFooter}
            </div>
          ) : null}
        </aside>

        <div className={AUTH_FORM_COL}>{children}</div>
      </div>
    </div>
  );
}
