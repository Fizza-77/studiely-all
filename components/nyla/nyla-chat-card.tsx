"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
  type ReactNode,
} from "react";

import { useAuth } from "@/components/providers/auth-provider";
import { MarkdownMathView } from "@/components/ui/markdown-math-view";
import { useStudentData } from "@/hooks/use-student-data";
import {
  sendSupportChat,
  type SupportChatMessage,
} from "@/lib/help/support-chat";

const PINK = "#FF2D8A";
const PURPLE = "#4F35F2";
const LIME = "#E8FF2F";

export type NylaQuickPrompt = {
  label: string;
  /** Message sent when tapped; defaults to `label`. */
  prompt?: string;
  tone?: "pink" | "yellow" | "white" | "glass";
  icon?: ReactNode;
};

type NylaChatCardProps = {
  displayName?: string;
  subtitle?: string;
  greeting?: string;
  quickPrompts: NylaQuickPrompt[];
  chipLayout?: "wrap" | "grid";
  showContact?: boolean;
  surface: string;
  placeholder?: string;
};

export function NylaChatCard({
  displayName = "there",
  subtitle = "Your study partner · online",
  greeting,
  quickPrompts,
  chipLayout = "wrap",
  showContact = false,
  surface,
  placeholder = "Ask Nyla anything about your studies...",
}: NylaChatCardProps) {
  const { phase } = useAuth();
  const { stats, profile } = useStudentData();
  const isGuest = phase === "guest";
  const isPremium = stats?.isPremium === true;

  const resolvedGreeting =
    greeting ??
    `Hey ${displayName}! Stuck on something, or want a quick challenge? Ask me anything about what you're studying.`;

  const [messages, setMessages] = useState<SupportChatMessage[]>([
    { role: "model", text: resolvedGreeting },
  ]);
  const [prompt, setPrompt] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0]?.role === "model") {
        return [{ role: "model", text: resolvedGreeting }];
      }
      return prev;
    });
  }, [resolvedGreeting]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, busy]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;

    if (isGuest) {
      setError("Sign in to chat with Nyla.");
      return;
    }

    setError(null);
    setPrompt("");
    const history = messages;
    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setBusy(true);

    try {
      const reply = await sendSupportChat({
        history,
        userMessage: trimmed,
        metadata: {
          user_role: "student",
          plan_type: isPremium ? "pro" : "free",
          curriculum: profile?.curriculumDisplayName || "",
          surface,
        },
      });
      setMessages((prev) => [...prev, { role: "model", text: reply }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Chat failed");
      setMessages((prev) => prev.slice(0, -1));
      setPrompt(trimmed);
    } finally {
      setBusy(false);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void sendMessage(prompt);
  }

  return (
    <section
      className="relative overflow-hidden rounded-[28px] p-5 text-white shadow-[0_18px_40px_rgba(79,53,242,0.28)]"
      style={{ background: PURPLE }}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="relative size-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white/40">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/ayla-yellow.svg"
            alt="Nyla"
            width={48}
            height={48}
            className="size-full object-cover"
          />
          <span className="absolute right-0 bottom-0 size-3 rounded-full border-2 border-[#4F35F2] bg-[#7CFF6B]" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-base font-bold">Nyla</p>
          <p className="text-xs text-white/75">{subtitle}</p>
        </div>
        {showContact ? (
          <Link
            href="/help"
            className="shrink-0 rounded-full px-3 py-1.5 text-xs font-bold text-[#111827]"
            style={{ background: LIME }}
          >
            Contact
          </Link>
        ) : null}
      </div>

      <div
        ref={listRef}
        className="nyla-chat-scroll max-h-64 space-y-2 overflow-y-auto pr-1"
      >
        {messages.map((m, i) => (
          <div
            key={`${m.role}-${i}`}
            className={`rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
              m.role === "user"
                ? "ml-6 bg-white/15 text-white"
                : "nyla-bot-bubble mr-2 bg-white shadow-sm"
            }`}
            style={
              m.role === "model"
                ? ({
                    color: "#000000",
                    ["--color-text"]: "#000000",
                    ["--color-text-body"]: "#111827",
                    ["--color-text-muted"]: "#4B5563",
                    ["--foreground"]: "#000000",
                  } as CSSProperties)
                : undefined
            }
          >
            {m.role === "model" ? (
              <div className="text-black [&_.markdown-math]:text-black [&_p]:text-black [&_li]:text-black [&_h1]:text-black [&_h2]:text-black [&_h3]:text-black [&_strong]:text-black">
                <MarkdownMathView content={m.text} />
              </div>
            ) : (
              <p className="whitespace-pre-wrap text-white">{m.text}</p>
            )}
          </div>
        ))}
        {busy ? (
          <div className="mr-2 flex items-center gap-1.5 rounded-2xl bg-white px-3.5 py-3">
            <span className="nyla-typing-dot size-1.5 rounded-full bg-[#4F35F2]" />
            <span
              className="nyla-typing-dot size-1.5 rounded-full bg-[#4F35F2]"
              style={{ animationDelay: "0.15s" }}
            />
            <span
              className="nyla-typing-dot size-1.5 rounded-full bg-[#4F35F2]"
              style={{ animationDelay: "0.3s" }}
            />
          </div>
        ) : null}
      </div>

      {error ? (
        <p className="mt-2 rounded-xl bg-[#FFE4F1] px-3 py-2 text-xs font-semibold text-[#BE185D]">
          {error}
          {isGuest ? (
            <>
              {" "}
              <Link href="/login" className="underline">
                Sign in
              </Link>
            </>
          ) : null}
        </p>
      ) : null}

      <div
        className={
          chipLayout === "grid"
            ? "mt-3 grid grid-cols-2 gap-2"
            : "mt-3 flex flex-wrap gap-2"
        }
      >
        {quickPrompts.map((item) => (
          <NylaChip
            key={item.label}
            tone={item.tone ?? (chipLayout === "grid" ? "glass" : "white")}
            icon={item.icon}
            disabled={busy}
            onClick={() => void sendMessage(item.prompt ?? item.label)}
          >
            {item.label}
          </NylaChip>
        ))}
      </div>

      <form className="mt-4 flex items-stretch gap-2" onSubmit={onSubmit}>
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={placeholder}
          disabled={busy}
          className="min-w-0 flex-1 rounded-2xl border-0 bg-white px-4 py-3 text-sm text-black outline-none shadow-sm placeholder:text-[#9CA3AF] disabled:opacity-70"
          style={{ color: "#000000" }}
        />
        <button
          type="submit"
          disabled={busy || !prompt.trim()}
          className="flex size-11 shrink-0 items-center justify-center rounded-2xl text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          style={{ background: PINK }}
          aria-label="Send to Nyla"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
    </section>
  );
}

function NylaChip({
  children,
  onClick,
  disabled,
  tone,
  icon,
}: {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  tone: "pink" | "yellow" | "white" | "glass";
  icon?: ReactNode;
}) {
  if (tone === "glass") {
    return (
      <button
        type="button"
        disabled={disabled}
        onClick={onClick}
        className="rounded-xl bg-white/15 px-3 py-2.5 text-left text-[11px] font-semibold text-white transition hover:bg-white/25 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {children}
      </button>
    );
  }

  const styles =
    tone === "pink"
      ? { background: PINK }
      : tone === "yellow"
        ? { background: LIME }
        : { background: "#fff" };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold text-[#111827] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
      style={styles}
    >
      {icon ? <span className="shrink-0 text-[#1F2937]">{icon}</span> : null}
      {children}
    </button>
  );
}
