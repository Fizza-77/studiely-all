import {
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
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_12px_40px_rgba(79,53,242,0.1)] sm:p-8 dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
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
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="mb-4 block">
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
