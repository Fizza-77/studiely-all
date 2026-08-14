import multiavatar from "@multiavatar/multiavatar";

/** Same seed scheme as Flutter: `{uid}_avatar_1` … `{uid}_avatar_24`. */
export function avatarSeedsForUid(uid: string): string[] {
  return Array.from({ length: 24 }, (_, i) => `${uid}_avatar_${i + 1}`);
}

/** SVG string from Multiavatar — same generator as Flutter `random_avatar`. */
export function randomAvatarSvg(seed: string, transparentBg = false): string {
  return multiavatar(seed, transparentBg);
}

export function randomAvatarDataUri(seed: string, transparentBg = false): string {
  const svg = randomAvatarSvg(seed, transparentBg);
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
