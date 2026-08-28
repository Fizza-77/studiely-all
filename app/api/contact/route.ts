import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { getTrustedClientIp } from "@/lib/security/client-ip";
import { rateLimitTake } from "@/lib/security/rate-limit";
import { escapeHtml } from "@/lib/security/sanitize-html";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 5000;
const MAX_NAME = 120;
const MAX_SUBJECT = 160;
const MAX_BODY_BYTES = 20_000;

const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY?.trim() || "";
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

function hasCrLf(value: string): boolean {
  return /[\r\n\0]/.test(value);
}

async function verifyTurnstile(token: string, remoteip?: string | null): Promise<boolean> {
  if (!TURNSTILE_SECRET_KEY) {
    console.error("[contact] TURNSTILE_SECRET_KEY is not set.");
    return false;
  }
  const form = new URLSearchParams();
  form.set("secret", TURNSTILE_SECRET_KEY);
  form.set("response", token);
  if (remoteip) form.set("remoteip", remoteip);
  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
      cache: "no-store",
    });
    if (!res.ok) return false;
    const data = (await res.json()) as { success?: boolean };
    return Boolean(data.success);
  } catch (e) {
    console.error("[contact] Turnstile verify failed", e);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const ip = getTrustedClientIp(request.headers) || "unknown";
    const limited = rateLimitTake(`contact:${ip}`, 5, 60 * 60 * 1000);
    if (!limited.ok) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": String(limited.retryAfterSec) } },
      );
    }

    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Request too large." }, { status: 413 });
    }

    const rawText = await request.text();
    if (rawText.length > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Request too large." }, { status: 413 });
    }

    let body: Record<string, unknown>;
    try {
      body = JSON.parse(rawText) as Record<string, unknown>;
    } catch {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    // Honeypot — bots often fill hidden fields.
    if (typeof body.company === "string" && body.company.trim()) {
      return NextResponse.json({ success: true, message: "Email sent successfully" });
    }

    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const turnstileToken =
      typeof body.turnstileToken === "string" ? body.turnstileToken.trim() : "";

    if (!email || !message) {
      return NextResponse.json({ error: "Email and message are required." }, { status: 400 });
    }
    if (
      email.length > MAX_EMAIL ||
      message.length > MAX_MESSAGE ||
      fullName.length > MAX_NAME ||
      subject.length > MAX_SUBJECT
    ) {
      return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 });
    }
    if (!EMAIL_RE.test(email) || hasCrLf(email) || hasCrLf(fullName) || hasCrLf(subject)) {
      return NextResponse.json({ error: "Invalid email or fields." }, { status: 400 });
    }
    if (!turnstileToken) {
      return NextResponse.json({ error: "Verification required." }, { status: 400 });
    }
    const verified = await verifyTurnstile(turnstileToken, ip === "unknown" ? null : ip);
    if (!verified) {
      return NextResponse.json({ error: "Verification failed." }, { status: 403 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);
    const safeName = escapeHtml(fullName || "Not provided");
    const safeSubjectField = escapeHtml(subject || "General");

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER || "no-reply@studiely.com",
      to: "support@studiely.com",
      replyTo: email,
      subject: "New Studiely contact form submission",
      text: [
        "New contact form submission",
        `Name: ${fullName || "Not provided"}`,
        `Email: ${email}`,
        `Topic: ${subject || "General"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px;">
          <h2 style="color: #4F35F2;">New Contact Submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Sender Email:</strong> ${safeEmail}</p>
          <p><strong>Topic:</strong> ${safeSubjectField}</p>
          <div style="background:#f9f9f9;padding:15px;border-radius:8px;margin-top:16px;">
            <p style="margin-top:0;"><strong>Message:</strong></p>
            <p style="white-space:pre-wrap;font-size:16px;line-height:1.5;">${safeMessage}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("[contact] send failed", error instanceof Error ? error.message : "unknown");
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again later." },
      { status: 500 },
    );
  }
}
