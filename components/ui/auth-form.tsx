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
    <div className={`mb-4 rounded-xl border px-3.5 py-2.5 text-sm ${styles}`}>
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
