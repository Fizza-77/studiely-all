"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
} from "react";

import { STUDIELY_APP } from "@/lib/appUrls";
import {
  sendSupportChat,
  type SupportChatMessage,
} from "@/lib/help/support-chat";

const LIME = "#E8FF2F";
const INDIGO = "#4F35F2";
const PINK = "#FF2D8A";

const GREETING =
  "Hi! I'm Nyla, your Studiely study tutor. Ask me about curricula, how Studiely works, or how to get started.";

const QUICK_PROMPTS = [
  "How does Studiely work?",
  "Which curricula do you support?",
  "How do I get started?",
] as const;

/**
 * Marketing-site floating Ask Nyla button + chatbot panel.
 * Available on every marketing page; opens an in-page chat (no navigation).
 */
export function NylaFab() {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    // Only lock scroll on small screens where the sheet covers most of the view.
    if (window.matchMedia("(max-width: 640px)").matches) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      {open ? (
        <div
          className="fixed inset-0 z-[460] bg-black/25 sm:bg-transparent"
          aria-hidden
          onClick={() => setOpen(false)}
        />
      ) : null}

      {open ? (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-x-3 bottom-[max(5.5rem,calc(env(safe-area-inset-bottom)+4.75rem))] z-[470] mx-auto flex max-h-[min(70dvh,560px)] w-[calc(100%-1.5rem)] max-w-[380px] flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_20px_50px_rgba(30,27,75,0.28)] sm:inset-x-auto sm:right-6 sm:bottom-[max(6rem,calc(env(safe-area-inset-bottom)+5.25rem))] sm:mx-0 sm:w-[380px]"
        >
          <NylaMarketingChat
            titleId={titleId}
            onClose={() => setOpen(false)}
          />
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`group fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-[480] flex items-center gap-2 rounded-full py-2.5 pr-4 pl-2.5 text-white shadow-[0_12px_32px_rgba(79,53,242,0.38)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F35F2] sm:right-6 sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))] ${
          open
            ? "bg-[#1E1B4B]"
            : "animate-[fabFloat_3s_ease-in-out_infinite] bg-[#4F35F2] motion-reduce:animate-none"
        }`}
        aria-expanded={open}
        aria-controls={open ? titleId : undefined}
        aria-label={open ? "Close Nyla chat" : "Ask Nyla"}
      >
        {open ? (
          <>
            <span className="flex size-11 items-center justify-center rounded-full bg-white/15 sm:size-12">
              <CloseIcon />
            </span>
            <span className="pr-1 font-heading text-sm font-extrabold tracking-tight sm:text-[15px]">
              Close
            </span>
          </>
        ) : (
          <>
            <span className="relative flex size-11 shrink-0 overflow-hidden rounded-full ring-2 ring-white/40 sm:size-12">
              <Image
                src="/icons/ayla-yellow.svg"
                alt=""
                width={48}
                height={48}
                unoptimized
                className="h-full w-full object-cover"
                aria-hidden
              />
            </span>
            <span className="pr-1 font-heading text-sm font-extrabold tracking-tight sm:text-[15px]">
              Ask Nyla
            </span>
          </>
        )}
      </button>
    </>
  );
}

function NylaMarketingChat({
  titleId,
  onClose,
}: {
  titleId: string;
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<SupportChatMessage[]>([
    { role: "model", text: GREETING },
  ]);
  const [prompt, setPrompt] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, busy]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;

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
          user_role: "visitor",
          plan_type: "guest",
          surface: "marketing_fab",
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
    <>
      <div
        className="flex items-center gap-3 px-4 py-3.5"
        style={{ backgroundColor: INDIGO }}
      >
        <span className="relative flex size-10 shrink-0 overflow-hidden rounded-full ring-2 ring-white/35">
          <Image
            src="/icons/ayla-yellow.svg"
            alt=""
            width={40}
            height={40}
            unoptimized
            className="h-full w-full object-cover"
            aria-hidden
          />
        </span>
        <div className="min-w-0 flex-1">
          <p
            id={titleId}
            className="font-heading text-[15px] font-extrabold leading-none text-white"
          >
            Nyla AI
          </p>
          <p className="mt-1.5 flex items-center gap-1.5 font-jakarta text-[11px] font-medium text-white/85">
            <span className="size-1.5 shrink-0 rounded-full bg-[#7CFF8A]" />
            Online — study tutor
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
          aria-label="Close chat"
        >
          <CloseIcon />
        </button>
      </div>

      <div
        ref={listRef}
        className="nyla-chat-scroll flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto overscroll-contain bg-[#FAFAFC] px-3.5 py-3.5"
      >
        {messages.map((m, i) => (
          <div
            key={`${m.role}-${i}`}
            className={
              m.role === "user"
                ? "ml-8 rounded-[16px] rounded-tr-sm px-3.5 py-2.5 font-jakarta text-[13px] leading-relaxed text-white"
                : "mr-6 rounded-[16px] rounded-tl-sm bg-white px-3.5 py-2.5 font-jakarta text-[13px] leading-relaxed text-[#2A2B36] shadow-sm"
            }
            style={m.role === "user" ? { backgroundColor: INDIGO } : undefined}
          >
            <p className="m-0 whitespace-pre-wrap">{m.text}</p>
          </div>
        ))}
        {busy ? (
          <div className="mr-6 flex items-center gap-1.5 rounded-[16px] rounded-tl-sm bg-white px-3.5 py-3 shadow-sm">
            <span className="size-1.5 animate-pulse rounded-full bg-[#4F35F2]/70" />
            <span className="size-1.5 animate-pulse rounded-full bg-[#4F35F2]/50 [animation-delay:120ms]" />
            <span className="size-1.5 animate-pulse rounded-full bg-[#4F35F2]/30 [animation-delay:240ms]" />
          </div>
        ) : null}
        {error ? (
          <p className="px-1 font-jakarta text-xs font-medium text-[#E11D48]">
            {error}
          </p>
        ) : null}
      </div>

      {!busy && messages.length <= 2 ? (
        <div className="flex flex-wrap gap-1.5 border-t border-[#F0EEF6] bg-white px-3 py-2.5">
          {QUICK_PROMPTS.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => void sendMessage(label)}
              className="rounded-full px-3 py-1.5 font-jakarta text-[11px] font-semibold text-[#1E1B4B] transition hover:brightness-105"
              style={{ background: LIME }}
            >
              {label}
            </button>
          ))}
        </div>
      ) : null}

      <form
        onSubmit={onSubmit}
        className="flex items-center gap-2 border-t border-[#F0EEF6] bg-white px-3 py-3"
      >
        <input
          ref={inputRef}
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask Nyla anything…"
          disabled={busy}
          className="min-w-0 flex-1 rounded-full border-0 bg-[#F3F3F7] px-4 py-2.5 font-jakarta text-[13px] text-[#1E1B4B] outline-none placeholder:text-[#9CA3AF] disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={busy || !prompt.trim()}
          className="flex size-10 shrink-0 items-center justify-center rounded-full text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
          style={{ background: PINK }}
          aria-label="Send message"
        >
          <SendIcon />
        </button>
      </form>

      <div className="border-t border-[#F0EEF6] bg-white px-3 py-2.5 text-center">
        <Link
          href={STUDIELY_APP.signUp}
          className="font-jakarta text-[11px] font-semibold text-[#4F35F2] underline-offset-2 hover:underline"
        >
          Start free in the Studiely app →
        </Link>
      </div>
    </>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M4 4l8 8M12 4l-8 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M4 10h10.5M10.5 5.5 15 10l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
