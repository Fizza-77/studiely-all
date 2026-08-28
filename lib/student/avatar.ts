import { deleteField, doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { getFirebaseDb, getFirebaseStorage } from "@/lib/firebase/client";
import { COLLECTIONS } from "@/lib/config/constants";

const MAX_BYTES = 2 * 1024 * 1024;

const MAGIC: Array<{ mime: string; bytes: number[] }> = [
  { mime: "image/jpeg", bytes: [0xff, 0xd8, 0xff] },
  { mime: "image/png", bytes: [0x89, 0x50, 0x4e, 0x47] },
  { mime: "image/webp", bytes: [0x52, 0x49, 0x46, 0x46] }, // RIFF….WEBP checked below
];

async function detectImageMime(file: File): Promise<"image/jpeg" | "image/png" | "image/webp" | null> {
  const buf = new Uint8Array(await file.slice(0, 16).arrayBuffer());
  for (const m of MAGIC) {
    if (m.bytes.every((b, i) => buf[i] === b)) {
      if (m.mime === "image/webp") {
        const tag = String.fromCharCode(...buf.slice(8, 12));
        if (tag !== "WEBP") return null;
      }
      return m.mime as "image/jpeg" | "image/png" | "image/webp";
    }
  }
  return null;
}

/** Web photo upload — same Storage path as Flutter AvatarService.savePhoto. */
export async function uploadProfilePhoto(
  uid: string,
  file: File,
): Promise<string> {
  if (!uid || uid.includes("/") || uid.includes("..")) {
    throw new Error("Invalid user.");
  }
  if (file.size <= 0 || file.size > MAX_BYTES) {
    throw new Error("Image must be under 2 MB.");
  }
  const mime = await detectImageMime(file);
  if (!mime) {
    throw new Error("Only JPEG, PNG, or WebP images are allowed.");
  }

  const storageRef = ref(
    getFirebaseStorage(),
    `profile_photos/${uid}/profile.jpg`,
  );
  await uploadBytes(storageRef, file, {
    contentType: mime,
  });
  const url = await getDownloadURL(storageRef);
  await setDoc(
    doc(getFirebaseDb(), COLLECTIONS.students, uid),
    {
      avatar_source: "photo",
      avatar_seed: deleteField(),
      profile_image_url: url,
    },
    { merge: true },
  );
  return url;
}

/** Flutter AvatarService.saveRandomAvatar parity. */
export async function saveRandomAvatar(
  uid: string,
  seed: string,
): Promise<void> {
  await setDoc(
    doc(getFirebaseDb(), COLLECTIONS.students, uid),
    {
      avatar_source: "random",
      avatar_seed: seed,
      profile_image_url: null,
    },
    { merge: true },
  );
}

/** Flutter AvatarService.clearAvatar parity. */
export async function clearAvatar(uid: string): Promise<void> {
  await setDoc(
    doc(getFirebaseDb(), COLLECTIONS.students, uid),
    {
      avatar_source: "none",
      avatar_seed: null,
      profile_image_url: null,
    },
    { merge: true },
  );
}
