"use client";

import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

/**
 * Flutter MarkdownMathView parity: GFM markdown + $ / $$ math via KaTeX.
 */
export function MarkdownMathView({
  content,
  size = "default",
}: {
  content: string;
  /** `reading` keeps stable desktop-readable type (no shrinking). */
  size?: "default" | "reading";
}) {
  const source = useMemo(() => content || "", [content]);
  const reading = size === "reading";

  return (
    <div
      className={`markdown-math prose-notes max-w-none leading-relaxed text-[var(--color-text)] ${
        reading ? "library-note-reading" : "text-sm"
      }`}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          h1: ({ children }) => (
            <h1
              className={`mb-3 mt-6 font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] first:mt-0 ${
                reading ? "" : "text-xl"
              }`}
            >
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2
              className={`mb-2 mt-5 font-semibold text-[var(--color-text)] ${
                reading ? "" : "text-lg"
              }`}
            >
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3
              className={`mb-2 mt-4 font-semibold text-[var(--color-text)] ${
                reading ? "" : "text-base"
              }`}
            >
              {children}
            </h3>
          ),
          p: ({ children }) => <p className="mb-3">{children}</p>,
          ul: ({ children }) => (
            <ul className="mb-3 list-disc space-y-1 pl-5">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-3 list-decimal space-y-1 pl-5">{children}</ol>
          ),
          li: ({ children }) => <li className="pl-1">{children}</li>,
          strong: ({ children }) => (
            <strong className="font-semibold text-[var(--color-text)]">
              {children}
            </strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          a: ({ href, children }) => (
            <a
              href={href}
              className="font-medium text-[var(--color-vivid-cyan)] underline-offset-2 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {children}
            </a>
          ),
          code: ({ className, children }) => {
            const isBlock = Boolean(className?.includes("language-"));
            if (isBlock) {
              return (
                <code
                  className={`block overflow-x-auto rounded-lg bg-[var(--color-card-muted)] p-3 ${
                    reading ? "" : "text-xs"
                  }`}
                >
                  {children}
                </code>
              );
            }
            return (
              <code className="rounded bg-[var(--color-card-muted)] px-1.5 py-0.5 text-[0.85em]">
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="mb-3 overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-card-muted)] p-3">
              {children}
            </pre>
          ),
          blockquote: ({ children }) => (
            <blockquote className="mb-3 border-l-4 border-[var(--color-vivid-cyan)]/40 pl-3 text-[var(--color-text-muted)]">
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <div className="mb-3 overflow-x-auto">
              <table
                className={`w-full border-collapse text-left ${
                  reading ? "" : "text-sm"
                }`}
              >
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-[var(--color-border)] bg-[var(--color-card-muted)] px-2 py-1.5 font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-[var(--color-border)] px-2 py-1.5">
              {children}
            </td>
          ),
          hr: () => <hr className="my-4 border-[var(--color-border)]" />,
        }}
      >
        {source}
      </ReactMarkdown>
    </div>
  );
}
