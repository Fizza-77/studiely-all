/**
 * Strict HTML allowlist sanitizer for CMS blog HTML (no new dependency).
 * Strips scripts, event handlers, javascript: URLs, and dangerous embeds.
 */

const ALLOWED_TAGS = new Set([
  "a",
  "abbr",
  "b",
  "blockquote",
  "br",
  "code",
  "div",
  "em",
  "figcaption",
  "figure",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hr",
  "i",
  "img",
  "li",
  "ol",
  "p",
  "pre",
  "span",
  "strong",
  "sub",
  "sup",
  "table",
  "tbody",
  "td",
  "th",
  "thead",
  "tr",
  "u",
  "ul",
]);

const ALLOWED_ATTR: Record<string, Set<string>> = {
  a: new Set(["href", "title", "rel", "target"]),
  img: new Set(["src", "alt", "title", "width", "height", "loading"]),
  td: new Set(["colspan", "rowspan"]),
  th: new Set(["colspan", "rowspan"]),
  "*": new Set(["class", "id"]),
};

function isSafeUrl(value: string, kind: "href" | "src"): boolean {
  const v = value.trim().toLowerCase();
  if (!v) return false;
  if (v.startsWith("javascript:") || v.startsWith("data:") || v.startsWith("vbscript:")) {
    return false;
  }
  if (kind === "href") {
    return (
      v.startsWith("http://") ||
      v.startsWith("https://") ||
      v.startsWith("mailto:") ||
      v.startsWith("/") ||
      v.startsWith("#")
    );
  }
  return v.startsWith("https://") || v.startsWith("/") || v.startsWith("data:image/");
}

export function sanitizeBlogHtml(input: string): string {
  if (!input) return "";
  let html = input
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, "")
    .replace(/<\/?(script|iframe|object|embed|link|meta|form|input|button|textarea|select)[^>]*>/gi, "");

  html = html.replace(/<\/?([a-zA-Z0-9]+)([^>]*)>/g, (full, rawTag: string, rawAttrs: string) => {
    const closing = full.startsWith("</");
    const tag = rawTag.toLowerCase();
    if (!ALLOWED_TAGS.has(tag)) return "";
    if (closing) return `</${tag}>`;

    const allowed = new Set([
      ...(ALLOWED_ATTR["*"] ?? []),
      ...(ALLOWED_ATTR[tag] ?? []),
    ]);
    const attrs: string[] = [];
    const attrRe = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))/g;
    let m: RegExpExecArray | null;
    while ((m = attrRe.exec(rawAttrs)) !== null) {
      const name = m[1].toLowerCase();
      if (name.startsWith("on")) continue;
      if (!allowed.has(name)) continue;
      const value = m[3] ?? m[4] ?? m[5] ?? "";
      if (name === "href" && !isSafeUrl(value, "href")) continue;
      if (name === "src" && !isSafeUrl(value, "src")) continue;
      if (name === "target") {
        attrs.push(`target="_blank"`, `rel="noopener noreferrer"`);
        continue;
      }
      const safe = value.replace(/"/g, "&quot;");
      attrs.push(`${name}="${safe}"`);
    }
    return attrs.length ? `<${tag} ${attrs.join(" ")}>` : `<${tag}>`;
  });

  return html;
}

export function escapeHtml(text: string): string {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
