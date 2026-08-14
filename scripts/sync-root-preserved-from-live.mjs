import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";

/**
 * Pulls root-level extras from production that Next may not emit: tawk, support, etc.
 * Does not touch /app (Flutter) or /_next. Legal pages are App Router routes now.
 */
export async function syncRootPreservedFromLive(deployRoot) {
  const origin = (process.env.PRESERVE_SYNC_ORIGIN || "https://www.studiely.com").replace(/\/$/, "");

  const seen = new Set();
  let wrote = 0;

  function diskPathForUrlPath(pathname) {
    const rel = pathname.replace(/^\//, "");
    if (!rel) return join(deployRoot, "index.html");
    if (/\.[a-z0-9]+$/i.test(pathname)) {
      return join(deployRoot, rel);
    }
    const trimmed = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
    const r = trimmed.replace(/^\//, "");
    return join(deployRoot, r, "index.html");
  }

  function mustNotOverwrite(outPath) {
    if (!existsSync(outPath)) return false;
    const rel = outPath.slice(deployRoot.length + 1).replace(/\\/g, "/");
    if (rel.startsWith("_next/") || rel.startsWith("app/")) return true;
    if (rel === "index.html") return true;
    if (rel === "smartlink/index.html" || rel.startsWith("smartlink/")) return true;
    return false;
  }

  async function fetchAndWrite(pathname) {
    if (seen.has(pathname)) return;
    seen.add(pathname);

    const url = origin + (pathname.startsWith("/") ? pathname : `/${pathname}`);
    const res = await fetch(url);
    if (!res.ok) {
      console.warn("[preserve-root] skip", url, res.status);
      return;
    }

    const buf = Buffer.from(await res.arrayBuffer());
    const out = diskPathForUrlPath(pathname);
    if (mustNotOverwrite(out)) {
      return;
    }
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, buf);
    wrote++;
  }

  const extras = ["/tawk.html", "/support.html", "/firebase-messaging-sw.js", "/favicon.png"];
  for (const p of extras) {
    await fetchAndWrite(p);
  }

  console.log("[preserve-root] wrote", wrote, "files from", origin);
}
