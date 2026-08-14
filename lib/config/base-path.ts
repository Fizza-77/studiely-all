/**
 * When the student app is served under the marketing host at `/app`
 * (same slot as Flutter web today), set NEXT_PUBLIC_BASE_PATH=/app.
 * Leave empty for local `npm run dev` on localhost:3000.
 */
export const APP_BASE_PATH = (
  process.env.NEXT_PUBLIC_BASE_PATH ?? ""
).replace(/\/+$/, "");

/** Prefix a root-relative path with the optional basePath. */
export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  if (!APP_BASE_PATH) return path;
  if (path === "/") return `${APP_BASE_PATH}/` || "/";
  return `${APP_BASE_PATH}${path}`;
}
