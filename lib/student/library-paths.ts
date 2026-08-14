/** Clean path helpers for library subject filters (no `?subject=` query URLs). */

export function librarySubjectPath(subject: string): string {
  const name = subject.trim();
  if (!name || name === "all") return "/library";
  return `/library/subject/${encodeURIComponent(name)}`;
}

export function decodeLibrarySubjectParam(raw: string): string {
  try {
    return decodeURIComponent(raw).trim();
  } catch {
    return raw.trim();
  }
}
