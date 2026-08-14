"use client";

import { useMemo, useState } from "react";

import {
  Alert,
  PrimaryButton,
  SecondaryButton,
  TextInput,
} from "@/components/ui/auth-form";
import { getBoards, getBoard } from "@/lib/curriculum";
import type { UserProfileCurriculum } from "@/lib/student/profile-curriculum";

type Props = {
  open: boolean;
  initial: UserProfileCurriculum | null;
  saving?: boolean;
  onClose: () => void;
  onSave: (profile: UserProfileCurriculum) => void | Promise<void>;
};

/**
 * Flutter ProfileCurriculumEditorSheet parity — Edit Profile opens this,
 * not name/email editors. Title: “Edit curriculum & grade”.
 */
export function ProfileCurriculumEditor({
  open,
  initial,
  saving = false,
  onClose,
  onSave,
}: Props) {
  const boards = useMemo(() => getBoards(), []);
  const [boardId, setBoardId] = useState(
    () => initial?.topLevelCurriculumId || boards[0]?.id || "british",
  );
  const [pathwayId, setPathwayId] = useState(
    () => initial?.pathwayId || "",
  );
  const [gradeId, setGradeId] = useState(() => initial?.gradeId || "");
  const [school, setSchool] = useState(() => initial?.school || "");
  const [error, setError] = useState<string | null>(null);

  const board = getBoard(boardId);
  const pathways = board?.pathways ?? [];
  const pathway =
    pathways.find((p) => p.id === pathwayId) ?? pathways[0] ?? null;
  const grades = pathway?.grades ?? [];
  const effectivePathwayId = pathway?.id ?? "";
  const effectiveGradeId =
    grades.find((g) => g.id === gradeId)?.id ?? grades[0]?.id ?? "";

  if (!open) return null;

  function onBoardChange(id: string) {
    setBoardId(id);
    const next = getBoard(id);
    const p = next?.pathways[0];
    setPathwayId(p?.id ?? "");
    setGradeId(p?.grades[0]?.id ?? "");
  }

  function onPathwayChange(id: string) {
    setPathwayId(id);
    const p = board?.pathways.find((x) => x.id === id);
    setGradeId(p?.grades[0]?.id ?? "");
  }

  async function handleSave() {
    setError(null);
    if (!boardId || !board) {
      setError("Please select Curriculum.");
      return;
    }
    const path = board.pathways.find((p) => p.id === effectivePathwayId);
    const grade = path?.grades.find((g) => g.id === effectiveGradeId);
    const profile: UserProfileCurriculum = {
      topLevelCurriculumId: board.id,
      pathwayId: path?.id ?? null,
      gradeId: grade?.id ?? null,
      directCurriculumId: null,
      curriculumDisplayName: board.name,
      pathwayDisplayName: path?.name ?? null,
      gradeDisplayName: grade?.name ?? null,
      school: school.trim() || null,
    };
    await onSave(profile);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[var(--color-overlay)] p-0 sm:items-center sm:p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="edit-curriculum-title"
        className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 shadow-xl sm:rounded-2xl sm:p-6"
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h2
              id="edit-curriculum-title"
              className="text-lg font-bold text-[var(--color-text)]"
            >
              Edit curriculum &amp; grade
            </h2>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              These pre-fill Generate Notes and show on your profile.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-2 py-1 text-sm text-[var(--color-text-muted)] hover:bg-[var(--color-card-muted)]"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {error ? <Alert>{error}</Alert> : null}

        <label className="mb-3 block">
          <span className="mb-1.5 block text-xs font-semibold tracking-wide text-[var(--color-text-muted)] uppercase">
            Curriculum
          </span>
          <select
            value={boardId}
            onChange={(e) => onBoardChange(e.target.value)}
            disabled={saving}
            className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-input-bg)] px-3.5 py-2.5 text-sm text-[var(--color-input-text)] outline-none focus:border-[var(--color-vivid-cyan)] focus:ring-2 focus:ring-[var(--color-vivid-cyan)]/25"
          >
            {boards.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </label>

        <label className="mb-3 block">
          <span className="mb-1.5 block text-xs font-semibold tracking-wide text-[var(--color-text-muted)] uppercase">
            {board?.pathwayLabel?.replace(/^Choose\s+/i, "") || "Programme"}
          </span>
          <select
            value={effectivePathwayId}
            onChange={(e) => onPathwayChange(e.target.value)}
            disabled={saving || pathways.length === 0}
            className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-input-bg)] px-3.5 py-2.5 text-sm text-[var(--color-input-text)] outline-none focus:border-[var(--color-vivid-cyan)] focus:ring-2 focus:ring-[var(--color-vivid-cyan)]/25"
          >
            {pathways.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </label>

        <label className="mb-3 block">
          <span className="mb-1.5 block text-xs font-semibold tracking-wide text-[var(--color-text-muted)] uppercase">
            Year / Grade
          </span>
          <select
            value={effectiveGradeId}
            onChange={(e) => setGradeId(e.target.value)}
            disabled={saving || grades.length === 0}
            className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-input-bg)] px-3.5 py-2.5 text-sm text-[var(--color-input-text)] outline-none focus:border-[var(--color-vivid-cyan)] focus:ring-2 focus:ring-[var(--color-vivid-cyan)]/25"
          >
            {grades.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
        </label>

        <label className="mb-5 block">
          <span className="mb-1.5 block text-xs font-semibold tracking-wide text-[var(--color-text-muted)] uppercase">
            School / Institution (optional)
          </span>
          <TextInput
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            placeholder="Your school name"
            disabled={saving}
          />
        </label>

        <div className="flex flex-col gap-2">
          <PrimaryButton
            type="button"
            loading={saving}
            onClick={() => void handleSave()}
          >
            Save
          </PrimaryButton>
          <SecondaryButton type="button" onClick={onClose} disabled={saving}>
            Cancel
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}
