import { deleteField, doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { getFirebaseDb, getFirebaseStorage } from "@/lib/firebase/client";
import { COLLECTIONS } from "@/lib/config/constants";

/** Web photo upload — same Storage path as Flutter AvatarService.savePhoto. */
export async function uploadProfilePhoto(
  uid: string,
  file: File,
): Promise<string> {
  const storageRef = ref(
    getFirebaseStorage(),
    `profile_photos/${uid}/profile.jpg`,
  );
  await uploadBytes(storageRef, file, {
    contentType: file.type || "image/jpeg",
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
