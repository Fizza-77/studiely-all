"use client";

/**
 * Root error UI. Keep this file free of shared layout/CSS-class dependencies —
 * Next.js prerenders /_global-error during `next build`, and heavy imports can
 * trigger workUnitAsyncStorage invariant failures on Next 16.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFFBEF",
          color: "#1E1B4B",
          fontFamily:
            "Plus Jakarta Sans, system-ui, -apple-system, Segoe UI, sans-serif",
          padding: "1.5rem",
        }}
      >
        <div style={{ maxWidth: "28rem", textAlign: "center" }} role="alert">
          <h1
            style={{
              margin: "0 0 0.75rem",
              fontSize: "1.5rem",
              fontWeight: 800,
            }}
          >
            Something went wrong
          </h1>
          <p
            style={{
              margin: "0 0 1.25rem",
              lineHeight: 1.6,
              color: "#5B5A6A",
            }}
          >
            {error?.message
              ? "Please try again. If this keeps happening, refresh the page."
              : "An unexpected error occurred. Please try again."}
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              border: 0,
              borderRadius: 999,
              background: "#4F35F2",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.95rem",
              padding: "0.75rem 1.25rem",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
