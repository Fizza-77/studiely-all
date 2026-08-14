import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { getFirebaseDb } from "@/lib/firebase/client";
import { COLLECTIONS, SUPPORT_SUBJECTS } from "@/lib/config/constants";

export type SupportSubject = (typeof SUPPORT_SUBJECTS)[number];

/**
 * Flutter support_request_form — existing collection schema only.
 */
export async function submitSupportRequest(input: {
  uid: string;
  name: string;
  email: string;
  subject: SupportSubject;
  message: string;
}): Promise<void> {
  await addDoc(collection(getFirebaseDb(), COLLECTIONS.supportRequests), {
    user_id: input.uid,
    name: input.name.trim(),
    email: input.email.trim(),
    subject: input.subject,
    message: input.message.trim(),
    created_at: serverTimestamp(),
    status: "new",
  });
}
