import { callFunction } from "@/lib/firebase/functions";
import faqSections from "@/lib/help/faq.json";

export type SupportChatMessage = {
  role: "user" | "model";
  text: string;
};

const NYLA_SUPPORT_SYSTEM_PROMPT = `You are Nyla, the Studiely AI support assistant.

Core behavior:
1) Always answer the user in a natural, helpful way.
2) Use the official FAQ text below as your primary source of truth.
3) If the user asks something not directly listed, still answer helpfully by using the closest relevant FAQ details.
4) Do not refuse general support questions; keep answers practical and student-friendly.

Behaviour rules:
- Keep answers aligned with Studiely and study support.
- Never invent prices, limits, legal policies, or account rules.
- If details are missing, say what is known from FAQ and give a safe next step.
- If the user asks for customer support or human support, always include:
  - Email: support@studiely.com
  - Contact page: https://www.studiely.com/contact

Conversation style:
- Be warm, encouraging, and professional.
- Prefer short paragraphs and bullets over long walls of text.
- Use markdown where useful, especially **bold** for key points.
- Wherever possible, end with a practical next step inside Studiely.`;

const PRICING_PAGE_URL = "https://www.studiely.com/pricing";

function isPricingQuestion(message: string): boolean {
  const q = message.toLowerCase();
  return (
    q.includes("pricing") ||
    q.includes("price") ||
    q.includes("cost") ||
    q.includes("subscription") ||
    q.includes("plan") ||
    q.includes("premium") ||
    q.includes("upgrade") ||
    q.includes("billing") ||
    q.includes("payment") ||
    q.includes("pay ") ||
    q.includes("how much")
  );
}

function buildFaqText(): string {
  return (faqSections as Array<{
    title: string;
    entries: Array<{ question: string; answer: string }>;
  }>)
    .map((section) => {
      const body = section.entries
        .map((e) => `Q: ${e.question}\nA: ${e.answer}`)
        .join("\n\n");
      return `## ${section.title}\n${body}`;
    })
    .join("\n\n");
}

function buildSystemInstruction(metadata?: Record<string, string>): string {
  const parts = [
    NYLA_SUPPORT_SYSTEM_PROMPT,
    "",
    "OFFICIAL FAQ TEXT (source of truth):",
    buildFaqText(),
  ];

  const meta = metadata ?? {};
  const metaLines = Object.entries(meta)
    .filter(([, v]) => v != null && String(v).trim().length > 0)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  if (metaLines) {
    parts.push("", "Current user context:", metaLines);
  }

  return parts.join("\n");
}

/**
 * Flutter SupportService parity → Firebase `callNylaSupport`
 * (Groq → Groq → Gemini). Avoids the broken Vercel `/api/ai/support` proxy.
 */
export async function sendSupportChat(input: {
  history: SupportChatMessage[];
  userMessage: string;
  metadata?: Record<string, string>;
}): Promise<string> {
  const trimmed = input.userMessage.trim();
  if (!trimmed) {
    return "Please type your question and I will help using Studiely FAQ guidance.";
  }

  if (isPricingQuestion(trimmed)) {
    return `For the latest pricing details, please visit our pricing page: ${PRICING_PAGE_URL}`;
  }

  const history = input.history.slice(-10).map((m) => ({
    role: m.role === "user" ? "user" : "model",
    parts: [{ text: m.text || "" }],
  }));

  const contents = [
    ...history,
    {
      role: "user",
      parts: [{ text: trimmed }],
    },
  ];

  try {
    const result = await callFunction<
      {
        systemInstruction: string;
        contents: Array<{
          role: string;
          parts: Array<{ text: string }>;
        }>;
      },
      { text?: string }
    >(
      "callNylaSupport",
      {
        systemInstruction: buildSystemInstruction(input.metadata),
        contents,
      },
      { requireAuth: false },
    );

    const text = result?.text?.trim();
    if (text) return text;
    throw new Error("Empty support response");
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Support chat failed";
    throw new Error(message);
  }
}
