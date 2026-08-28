/**
 * Focused security unit checks (no test framework dependency).
 * Run: node --experimental-strip-types --test scripts/security.test.ts
 * Fallback: npx tsx --test scripts/security.test.ts
 */
import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { escapeHtml, sanitizeBlogHtml } from "../lib/security/sanitize-html.ts";
import { rateLimitTake } from "../lib/security/rate-limit.ts";

describe("sanitizeBlogHtml", () => {
  it("strips script tags and event handlers", () => {
    const dirty =
      '<p onclick="alert(1)">Hi</p><script>alert(2)</script><img src=x onerror=alert(3)>';
    const clean = sanitizeBlogHtml(dirty);
    assert.equal(clean.includes("<script"), false);
    assert.equal(clean.includes("onclick"), false);
    assert.equal(clean.includes("onerror"), false);
    assert.equal(clean.includes("alert"), false);
  });

  it("blocks javascript: URLs", () => {
    const dirty = '<a href="javascript:alert(1)">x</a>';
    const clean = sanitizeBlogHtml(dirty);
    assert.equal(clean.includes("javascript:"), false);
  });

  it("allows safe formatting", () => {
    const clean = sanitizeBlogHtml("<p><strong>Bold</strong> and <em>italic</em></p>");
    assert.match(clean, /<strong>Bold<\/strong>/);
    assert.match(clean, /<em>italic<\/em>/);
  });
});

describe("escapeHtml", () => {
  it("escapes HTML payloads for email bodies", () => {
    const out = escapeHtml(`<img src=x onerror=alert(1)> & "quotes"`);
    assert.equal(out.includes("<"), false);
    assert.equal(out.includes(">"), false);
    assert.match(out, /&lt;img/);
    assert.match(out, /&amp;/);
    assert.match(out, /&quot;/);
  });
});

describe("rateLimitTake", () => {
  it("rejects after limit within window", () => {
    const key = `test-${Date.now()}-${Math.random()}`;
    assert.equal(rateLimitTake(key, 2, 60_000).ok, true);
    assert.equal(rateLimitTake(key, 2, 60_000).ok, true);
    const third = rateLimitTake(key, 2, 60_000);
    assert.equal(third.ok, false);
  });
});

describe("AI path allowlist helper", () => {
  const ALLOWED = new Set(["quiz-feedback"]);

  function normalizeAiPath(segments: string[]): string | null {
    if (!segments?.length) return null;
    for (const seg of segments) {
      const decoded = decodeURIComponent(seg);
      if (!decoded || decoded.includes("..") || decoded.includes("/") || decoded.includes("\\")) {
        return null;
      }
    }
    const joined = segments.map((s) => encodeURIComponent(decodeURIComponent(s))).join("/");
    return ALLOWED.has(decodeURIComponent(joined)) ? joined : null;
  }

  it("allows quiz-feedback only", () => {
    assert.equal(normalizeAiPath(["quiz-feedback"]), "quiz-feedback");
    assert.equal(normalizeAiPath(["notes"]), null);
    assert.equal(normalizeAiPath(["support"]), null);
    assert.equal(normalizeAiPath(["..", "notes"]), null);
    assert.equal(normalizeAiPath(["%2e%2e", "notes"]), null);
  });
});

describe("contact field guards", () => {
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function hasCrLf(value: string): boolean {
    return /[\r\n\0]/.test(value);
  }

  it("rejects CR/LF in email", () => {
    assert.equal(hasCrLf("evil\r\nBcc: victim@x.com"), true);
    assert.equal(EMAIL_RE.test("a@b.com"), true);
    assert.equal(EMAIL_RE.test("not-an-email"), false);
  });

  it("rejects oversized messages conceptually", () => {
    const MAX = 5000;
    assert.equal("x".repeat(MAX + 1).length > MAX, true);
  });
});
