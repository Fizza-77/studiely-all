import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  writeBatch,
  type Unsubscribe,
} from "firebase/firestore";

import { COLLECTIONS } from "@/lib/config/constants";
import { getFirebaseDb } from "@/lib/firebase/client";

export type StudentNotification = {
  id: string;
  title: string;
  body: string;
  eventName: string;
  channel: string;
  read: boolean;
  createdAt: Date | null;
  targetRoute: string | null;
};

function notificationsCol(uid: string) {
  return collection(
    getFirebaseDb(),
    COLLECTIONS.students,
    uid,
    "notifications",
  );
}

function mapNotification(
  id: string,
  data: Record<string, unknown>,
): StudentNotification {
  const createdAt = data.createdAt;
  let date: Date | null = null;
  if (
    createdAt &&
    typeof createdAt === "object" &&
    "toDate" in createdAt &&
    typeof (createdAt as { toDate: () => Date }).toDate === "function"
  ) {
    date = (createdAt as { toDate: () => Date }).toDate();
  } else if (createdAt instanceof Date) {
    date = createdAt;
  }

  return {
    id,
    title: String(data.title ?? ""),
    body: String(data.body ?? ""),
    eventName: String(data.eventName ?? ""),
    channel: String(data.channel ?? "both"),
    read: Boolean(data.read),
    createdAt: date,
    targetRoute:
      typeof data.targetRoute === "string" ? data.targetRoute : null,
  };
}

export function subscribeStudentNotifications(
  uid: string,
  onData: (items: StudentNotification[]) => void,
  onError?: (err: unknown) => void,
): Unsubscribe {
  const q = query(notificationsCol(uid), orderBy("createdAt", "desc"));
  return onSnapshot(
    q,
    (snap) => {
      onData(
        snap.docs.map((d) =>
          mapNotification(d.id, d.data() as Record<string, unknown>),
        ),
      );
    },
    (err) => {
      onError?.(err);
      onData([]);
    },
  );
}

export async function listStudentNotifications(
  uid: string,
): Promise<StudentNotification[]> {
  const q = query(notificationsCol(uid), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) =>
    mapNotification(d.id, d.data() as Record<string, unknown>),
  );
}

export async function markNotificationRead(
  uid: string,
  notificationId: string,
): Promise<void> {
  await updateDoc(
    doc(getFirebaseDb(), COLLECTIONS.students, uid, "notifications", notificationId),
    { read: true },
  );
}

export async function markAllNotificationsRead(uid: string): Promise<void> {
  const snap = await getDocs(notificationsCol(uid));
  const unread = snap.docs.filter((d) => !Boolean(d.data().read));
  if (unread.length === 0) return;

  const db = getFirebaseDb();
  const batch = writeBatch(db);
  for (const d of unread) {
    batch.update(d.ref, { read: true });
  }
  await batch.commit();
}

export async function deleteStudentNotification(
  uid: string,
  notificationId: string,
): Promise<void> {
  await deleteDoc(
    doc(getFirebaseDb(), COLLECTIONS.students, uid, "notifications", notificationId),
  );
}

export async function clearAllStudentNotifications(uid: string): Promise<void> {
  const snap = await getDocs(notificationsCol(uid));
  if (snap.empty) return;
  const db = getFirebaseDb();
  const batch = writeBatch(db);
  for (const d of snap.docs) {
    batch.delete(d.ref);
  }
  await batch.commit();
}

export function relativeNotificationTime(date: Date | null): string {
  if (!date) return "";
  const diff = Date.now() - date.getTime();
  if (diff < 60_000) return "Just now";
  if (diff < 3_600_000) {
    const m = Math.floor(diff / 60_000);
    return `${m} min ago`;
  }
  if (diff < 86_400_000) {
    const h = Math.floor(diff / 3_600_000);
    return h === 1 ? "1 hour ago" : `${h} hours ago`;
  }
  if (diff < 7 * 86_400_000) {
    const d = Math.floor(diff / 86_400_000);
    return d === 1 ? "1 day ago" : `${d} days ago`;
  }
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  return `${dd}/${mm}/${date.getFullYear()}`;
}
