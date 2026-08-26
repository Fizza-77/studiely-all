"use client";

import Link from "next/link";
import {
  FormEvent,
  type ReactNode,
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";

import { AppShell } from "@/components/layout/app-shell";
import { DataConsentGate } from "@/components/auth/data-consent-gate";
import {
  GenerateStickySidebar,
  type GenerateTip,
} from "@/components/generate/generate-sidebar";
import { GenerationProgressScreen } from "@/components/generate/generation-progress-screen";
import { useAuth } from "@/components/providers/auth-provider";
import {
  Alert,
  PrimaryButton,
  SecondaryButton,
  TextInput,
} from "@/components/ui/auth-form";
import { EmptyState, LoadingBlock } from "@/components/ui/student-ui";
import { MarkdownMathView } from "@/components/ui/markdown-math-view";
import { useStudentData } from "@/hooks/use-student-data";
import {
  getAgeForGrade,
  getBoards,
  getPathway,
  getSubjectOptions,
  resolveLeafCurriculum,
} from "@/lib/curriculum";
import {
  STUDY_MODES,
  parseSubjectInput,
  type Difficulty,
} from "@/lib/curriculum/types";
import { generateStudyContent } from "@/lib/generate/ai";
import {
  generateHref,
  resolveGenerateModeName,
} from "@/lib/generate/modes";
import { saveGeneratedNote } from "@/lib/generate/save";
import { FREE_TOTAL_GENERATION_LIMIT } from "@/lib/student/study-credits";

const GENERATE_MODES = STUDY_MODES.filter((m) =>
  ["Summary Notes", "Flashcards", "Quiz", "Exam Focus"].includes(m.name),
);

const PINK = "#FF2D8A";
const PURPLE = "#4F35F2";
const LIME = "#E8FF2F";

const NotesModeIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect
      x="6"
      y="4"
      width="12"
      height="16"
      rx="2"
      stroke="#4F35F2"
      strokeWidth="1.8"
    />
    <path
      d="M9 9h6M9 12.5h6M9 16h3.5"
      stroke="#4F35F2"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const FlashcardsModeIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect
      x="8"
      y="3.5"
      width="11"
      height="14"
      rx="2"
      stroke="#4F35F2"
      strokeWidth="1.7"
    />
    <rect
      x="5"
      y="6.5"
      width="11"
      height="14"
      rx="2"
      fill="white"
      stroke="#4F35F2"
      strokeWidth="1.7"
    />
    <path
      d="M8 11.5h5M8 14.5h3.5"
      stroke="#4F35F2"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

const ExamFocusModeIcon = (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/icons/exam-focus.svg"
    alt=""
    width={24}
    height={24}
    className="size-6 object-contain"
    aria-hidden
  />
);

const MODE_HERO: Record<
  string,
  {
    gradient: string;
    blurb: string;
    ctaColor: string;
    icon: ReactNode;
  }
> = {
  "Summary Notes": {
    gradient:
      "linear-gradient(105deg, #4F35F2 0%, #6366F1 42%, #FFB84D 100%)",
    blurb: "Curriculum-aligned content for your grade and board.",
    ctaColor: "#4F35F2",
    icon: NotesModeIcon,
  },
  Flashcards: {
    gradient:
      "linear-gradient(105deg, #4F35F2 0%, #6D4CFF 48%, #2DD4BF 100%)",
    blurb: "Quick questions and answers to help you revise faster.",
    ctaColor: "#FFFFFF",
    icon: FlashcardsModeIcon,
  },
  Quiz: {
    gradient:
      "linear-gradient(105deg, #4F35F2 0%, #7C5CFF 45%, #FF6BCB 100%)",
    blurb: "Test yourself with curriculum-aligned practice questions.",
    ctaColor: "#FFFFFF",
    icon: NotesModeIcon,
  },
  "Exam Focus": {
    gradient:
      "linear-gradient(105deg, #4F35F2 0%, #5B6BFF 45%, #14B8A6 100%)",
    blurb: "Longer written practice shaped like real exam answers.",
    ctaColor: "#FFFFFF",
    icon: ExamFocusModeIcon,
  },
};

function getModeHero(mode: string) {
  return (
    MODE_HERO[mode] ?? {
      gradient:
        "linear-gradient(105deg, #4F35F2 0%, #6366F1 42%, #FFB84D 100%)",
      blurb: "Curriculum-aligned content for your grade and board.",
      ctaColor: "#4F35F2",
      icon: NotesModeIcon,
    }
  );
}

const boards = getBoards();

const TIPS: Record<"subject" | "difficulty" | "extras" | "topic", GenerateTip> = {
  subject: {
    title: "Pick your subject",
    bullets: [
      "Search or select the subject that matches your syllabus entry",
      "For IB Diploma, complete programme options if shown before moving on",
    ],
  },
  difficulty: {
    title: "Choose your challenge",
    bullets: [
      "Easy is a gentle intro — great for first looks at a topic",
      "Medium matches typical grade expectations",
      "Hard pushes depth and exam-style thinking",
    ],
  },
  extras: {
    title: "Optional extras",
    bullets: [
      "Mnemonics help facts stick with memory tricks",
      "Exam Style Qs add practice written like real exams (Pro on free plans)",
    ],
  },
  topic: {
    title: "Name your topic",
    bullets: [
      "Be specific — e.g. “Cell Structure” beats “Biology”",
      "Match the wording your exam board uses when you can",
    ],
  },
};

const DIFFICULTY_CARDS: {
  id: Difficulty;
  label: string;
  blurb: string;
  iconBg: string;
  iconColor: string;
  activeBorder: string;
  activeBg: string;
  activeTitle: string;
  icon: ReactNode;
}[] = [
  {
    id: "Easy",
    label: "Easy",
    blurb: "A gentle introduction",
    iconBg: "#EEF6C8",
    iconColor: "#6B7F12",
    activeBorder: "#C5D96A",
    activeBg: "#F7FBE8",
    activeTitle: "#5B6B1A",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "Medium",
    label: "Medium",
    blurb: "Right for your grade",
    iconBg: "#FFE4F1",
    iconColor: "#FF2D8A",
    activeBorder: "#FF2D8A",
    activeBg: "#FFF5F9",
    activeTitle: "#FF2D8A",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M7 15.5a4.5 4.5 0 0 1 .4-8.9A5.5 5.5 0 0 1 17.8 9 3.8 3.8 0 0 1 18.5 16.5H7.2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "Hard",
    label: "Hard",
    blurb: "Push yourself further",
    iconBg: "#ECEAFF",
    iconColor: "#4F35F2",
    activeBorder: "#4F35F2",
    activeBg: "#F5F3FF",
    activeTitle: "#4F35F2",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="m4 17 5.5-8 3.2 4.2L16 8l4 9H4Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function SetupChip({
  label,
  bg,
  tickBg,
  tickColor = "#FFFFFF",
  labelColor = "#111827",
  onClick,
  open,
}: {
  label: string;
  bg: string;
  tickBg: string;
  tickColor?: string;
  labelColor?: string;
  onClick: () => void;
  open?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      className="flex w-full min-w-0 items-center gap-2.5 rounded-2xl px-3 py-2.5 text-left transition hover:brightness-[0.98]"
      style={{ background: bg }}
    >
      <span
        className="flex size-7 shrink-0 items-center justify-center rounded-full"
        style={{ background: tickBg, color: tickColor }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M5 12.5 9.5 17 19 7.5"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span
        className="min-w-0 flex-1 truncate text-sm font-bold"
        style={{ color: labelColor }}
      >
        {label}
      </span>
      <span className="shrink-0 text-[#9CA3AF]" aria-hidden>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M4 2.5 7.5 9.5M7 2.5 10.5 9.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </button>
  );
}

function SetupDropdown({
  open,
  children,
}: {
  open: boolean;
  children: ReactNode;
}) {
  if (!open) return null;
  return (
    <div className="absolute top-[calc(100%+6px)] right-0 left-0 z-30 max-h-56 overflow-auto rounded-2xl border border-[#E8E6F0] bg-white py-1.5 shadow-[0_12px_28px_rgba(17,24,39,0.12)]">
      {children}
    </div>
  );
}

function SetupOption({
  selected,
  label,
  onSelect,
}: {
  selected: boolean;
  label: string;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex w-full items-center px-3 py-2.5 text-left text-sm font-semibold transition ${
        selected
          ? "bg-[#F5F3FF] text-[#4F35F2]"
          : "text-[#111827] hover:bg-[#F9FAFB]"
      }`}
    >
      {label}
    </button>
  );
}

function quickPickStyle(name: string, index: number) {
  const lower = name.toLowerCase();
  const isLit =
    lower.includes("literature") ||
    lower.includes("lit") ||
    (lower.includes("english") && lower.includes("lit"));
  const isLang =
    lower.includes("language") ||
    (lower.includes("english") && !isLit) ||
    index === 0;

  if (isLit || (!isLang && index === 1)) {
    return {
      bg: "#FFE4F1",
      color: "#FF2D8A",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v16H7.5A2.5 2.5 0 0 0 5 21.5V5.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M5 18.5A2.5 2.5 0 0 1 7.5 16H19"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
    };
  }

  return {
    bg: "#ECEAFF",
    color: "#4F35F2",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M8 5h5.2a3.3 3.3 0 0 1 0 6.6H11M11 11.6h2.4A3.2 3.2 0 0 1 16.6 18H8"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 5v13"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
      </svg>
    ),
  };
}

function ExtraOption({
  checked,
  disabled,
  onToggle,
  onHelp,
  iconBg,
  iconColor,
  icon,
  title,
  description,
}: {
  checked: boolean;
  disabled?: boolean;
  onToggle: () => void;
  onHelp: () => void;
  iconBg: string;
  iconColor: string;
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border border-[#E5E7EB] px-3 py-3.5 transition sm:px-4 ${
        disabled ? "opacity-60" : "hover:border-[#D1D5DB]"
      } ${checked ? "border-[#4F35F2]/35 bg-[#F8F7FF]" : "bg-white"}`}
    >
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        aria-label={title}
        disabled={disabled}
        onClick={onToggle}
        className={`flex size-5 shrink-0 items-center justify-center rounded-[5px] border transition sm:size-6 sm:rounded-md ${
          checked
            ? "border-[#4F35F2] bg-[#4F35F2] text-white"
            : "border-[#D1D5DB] bg-white"
        }`}
      >
        {checked ? (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 12.5 9.5 17 19 7.5"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
      </button>

      <span
        className="flex size-10 shrink-0 items-center justify-center rounded-xl"
        style={{ background: iconBg, color: iconColor }}
        aria-hidden
      >
        {icon}
      </span>

      <div className="min-w-0 flex-1">
        <p className="font-heading text-sm font-extrabold text-[#111827]">
          {title}
        </p>
        <p className="mt-0.5 text-xs leading-snug text-[#6B7280] sm:text-[13px]">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={onHelp}
        className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] bg-[#F9FAFB] text-xs font-bold text-[#9CA3AF] transition hover:border-[#C4B5FD] hover:text-[#4F35F2]"
        aria-label={`About ${title}`}
      >
        ?
      </button>
    </div>
  );
}

export default function GeneratePage() {
  return (
    <DataConsentGate>
      <AppShell wide>
        <Suspense fallback={<LoadingBlock label="Loading…" />}>
          <GenerateInner />
        </Suspense>
      </AppShell>
    </DataConsentGate>
  );
}

function GenerateInner() {
  const router = useRouter();
  const params = useParams<{ mode?: string | string[] }>();
  const searchParams = useSearchParams();
  const { phase, user, student } = useAuth();
  const isGuest = phase === "guest" && !user;
  const { loading, stats, credits, refresh } = useStudentData();

  const modeSegment = Array.isArray(params.mode) ? params.mode[0] : params.mode;
  const legacyModeQuery = searchParams.get("mode");
  const initialMode = resolveGenerateModeName(modeSegment ?? legacyModeQuery);

  const prefillBoard = searchParams.get("board")?.trim() || "";
  const prefillPathway = searchParams.get("pathway")?.trim() || "";
  const prefillGrade = searchParams.get("grade")?.trim() || "";
  const prefillSubject = searchParams.get("subject")?.trim() || "";
  const prefillTopic = searchParams.get("topic")?.trim() || "";
  const prefillDifficulty = searchParams.get("difficulty")?.trim() || "";
  const prefillMnemonics = searchParams.get("mnemonics") === "1";
  const prefillExamQs = searchParams.get("examQs") === "1";
  const prefillMistakes = searchParams.get("mistakes") === "1";
  const isRegenPrefill = searchParams.get("regen") === "1";

  const [boardId, setBoardId] = useState(
    () =>
      (prefillBoard && boards.some((b) => b.id === prefillBoard)
        ? prefillBoard
        : boards[0]?.id) ?? "",
  );
  const [pathwayId, setPathwayId] = useState(() => {
    if (prefillBoard && prefillPathway) {
      const board = boards.find((b) => b.id === prefillBoard);
      if (board?.pathways.some((p) => p.id === prefillPathway)) {
        return prefillPathway;
      }
    }
    return boards[0]?.pathways[0]?.id ?? "";
  });
  const [gradeId, setGradeId] = useState(() => {
    if (prefillBoard && prefillPathway && prefillGrade) {
      const pathway = boards
        .find((b) => b.id === prefillBoard)
        ?.pathways.find((p) => p.id === prefillPathway);
      if (pathway?.grades.some((g) => g.id === prefillGrade)) {
        return prefillGrade;
      }
    }
    return (
      boards[0]?.pathways[0]?.grades.find((g) => g.subjectsKey)?.id ?? ""
    );
  });
  const [subject, setSubject] = useState("");
  const [customSubject, setCustomSubject] = useState("");
  const [subjectQuery, setSubjectQuery] = useState("");
  const [topic, setTopic] = useState(() => prefillTopic);
  const [studyMode, setStudyMode] = useState(initialMode);
  const [difficulty, setDifficulty] = useState<Difficulty>(() =>
    prefillDifficulty === "Easy" ||
    prefillDifficulty === "Medium" ||
    prefillDifficulty === "Hard"
      ? prefillDifficulty
      : "Medium",
  );
  const [includeMnemonics, setIncludeMnemonics] = useState(prefillMnemonics);
  const [includeExamStyleQs, setIncludeExamStyleQs] = useState(prefillExamQs);
  const [includeCommonMistakes, setIncludeCommonMistakes] =
    useState(prefillMistakes);
  const [showModes, setShowModes] = useState(false);
  const [openSetup, setOpenSetup] = useState<
    null | "board" | "pathway" | "grade"
  >(null);
  const [showAllSubjects, setShowAllSubjects] = useState(false);
  const [showInputBrowse, setShowInputBrowse] = useState(false);
  const setupRef = useRef<HTMLDivElement>(null);
  const subjectBrowseRef = useRef<HTMLDivElement>(null);
  const browseAllRef = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState(false);
  const [genPhase, setGenPhase] = useState<"idle" | "generating" | "complete">(
    "idle",
  );
  const [completedNoteId, setCompletedNoteId] = useState<string | null>(null);
  const cancelledRef = useRef(false);
  const [error, setError] = useState<string | null>(null);
  const [guestPreview, setGuestPreview] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState<
    "subject" | "difficulty" | "extras" | "topic"
  >(() => (isRegenPrefill && prefillTopic ? "topic" : "subject"));
  const [extraHelp, setExtraHelp] = useState<
    "mnemonics" | "exam" | "mistakes" | null
  >(null);
  const prefillSubjectApplied = useRef(false);

  useEffect(() => {
    // Legacy `/generate?mode=Summary%20Notes` → `/generate/notes`
    if (!legacyModeQuery) return;
    const target = generateHref(legacyModeQuery);
    router.replace(target);
  }, [legacyModeQuery, router]);

  useEffect(() => {
    const next = resolveGenerateModeName(modeSegment);
    setStudyMode(next);
  }, [modeSegment]);

  // Apply subject from library regenerate once options for the prefilled grade load.
  useEffect(() => {
    if (prefillSubjectApplied.current) return;
    if (!prefillSubject) return;
    if (!boardId || !pathwayId || !gradeId) return;

    const options = getSubjectOptions(boardId, pathwayId, gradeId);
    if (options.includes(prefillSubject)) {
      setSubject(prefillSubject);
      setCustomSubject("");
      setSubjectQuery(prefillSubject);
    } else {
      setSubject("__custom__");
      setCustomSubject(prefillSubject);
      setSubjectQuery(prefillSubject);
    }
    prefillSubjectApplied.current = true;
    if (isRegenPrefill) {
      setActiveStep(prefillTopic ? "topic" : "difficulty");
    }
  }, [
    prefillSubject,
    prefillTopic,
    isRegenPrefill,
    boardId,
    pathwayId,
    gradeId,
  ]);

  useEffect(() => {
    if (!isRegenPrefill) return;
    const el = document.getElementById("generate-study-form");
    if (!el) return;
    const t = window.setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(t);
  }, [isRegenPrefill]);

  function selectStudyMode(name: string) {
    const next = resolveGenerateModeName(name);
    setStudyMode(next);
    setShowModes(false);
    router.replace(generateHref(next), { scroll: false });
  }

  useEffect(() => {
    if (!openSetup) return;
    function onPointerDown(e: MouseEvent) {
      if (
        setupRef.current &&
        !setupRef.current.contains(e.target as Node)
      ) {
        setOpenSetup(null);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenSetup(null);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [openSetup]);

  useEffect(() => {
    if (!showAllSubjects && !showInputBrowse) return;
    function onPointerDown(e: MouseEvent) {
      const target = e.target as Node;
      const inSearch = subjectBrowseRef.current?.contains(target);
      const inBrowse = browseAllRef.current?.contains(target);
      if (!inSearch && !inBrowse) {
        setShowAllSubjects(false);
        setShowInputBrowse(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setShowAllSubjects(false);
        setShowInputBrowse(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [showAllSubjects, showInputBrowse]);

  const board = boards.find((b) => b.id === boardId);
  const pathway = board ? getPathway(boardId, pathwayId) : undefined;
  const grades = pathway?.grades ?? [];
  const subjectOptions = useMemo(
    () =>
      boardId && pathwayId && gradeId
        ? getSubjectOptions(boardId, pathwayId, gradeId)
        : [],
    [boardId, pathwayId, gradeId],
  );

  const filteredSubjects = useMemo(() => {
    const q = subjectQuery.trim().toLowerCase();
    if (!q) return subjectOptions.slice(0, 8);
    return subjectOptions
      .filter((s) => s.toLowerCase().includes(q))
      .slice(0, 8);
  }, [subjectOptions, subjectQuery]);

  const quickPicks = useMemo(
    () => subjectOptions.slice(0, 2),
    [subjectOptions],
  );

  const leaf =
    pathwayId && gradeId ? resolveLeafCurriculum(pathwayId, gradeId) : null;

  const isPremium =
    stats?.studyCreditsIsPremium === true || stats?.isPremium === true;
  const creditsUsed = credits?.used ?? stats?.studyCreditsUsed ?? 0;
  const creditsTotal =
    credits?.total ?? stats?.studyCreditsTotal ?? FREE_TOTAL_GENERATION_LIMIT;
  const creditsLeft =
    credits?.remaining ??
    stats?.studyCreditsRemaining ??
    Math.max(0, creditsTotal - creditsUsed);
  const atLimit = !isPremium && creditsLeft <= 0;

  const selectedMode = STUDY_MODES.find((m) => m.name === studyMode);
  const modeLocked = !isGuest && !!selectedMode?.locked && !isPremium;

  const displayName =
    (student?.name || "").split(" ")[0] || (isGuest ? "there" : "friend");

  const tip = TIPS[activeStep];
  const modeHero = getModeHero(studyMode);

  const selectedSubjectLabel =
    subject === "__custom__" ? customSubject : subject;
  const showSubjectSearchMenu =
    subjectQuery.trim().length > 0 &&
    subjectQuery.trim() !== selectedSubjectLabel.trim();

  function onBoardChange(next: string) {
    setBoardId(next);
    const b = boards.find((x) => x.id === next);
    const p = b?.pathways[0];
    setPathwayId(p?.id ?? "");
    const g = p?.grades.find((gr) => gr.subjectsKey) ?? p?.grades[0];
    setGradeId(g?.id ?? "");
    setSubject("");
    setCustomSubject("");
  }

  function onPathwayChange(next: string) {
    setPathwayId(next);
    const p = getPathway(boardId, next);
    const g = p?.grades.find((gr) => gr.subjectsKey) ?? p?.grades[0];
    setGradeId(g?.id ?? "");
    setSubject("");
    setCustomSubject("");
  }

  function onGradeChange(next: string) {
    setGradeId(next);
    setSubject("");
    setCustomSubject("");
  }

  function pickSubject(value: string) {
    setSubject(value);
    setCustomSubject("");
    setSubjectQuery(value);
    setShowAllSubjects(false);
    setShowInputBrowse(false);
    setActiveStep("difficulty");
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setGuestPreview(null);
    setCompletedNoteId(null);

    if (!leaf) {
      setError("Select a valid curriculum pathway and grade.");
      setOpenSetup("grade");
      return;
    }

    const subjectRaw =
      subject === "__custom__" ? customSubject.trim() : subject.trim();
    if (!subjectRaw) {
      setError("Choose or type a subject.");
      setActiveStep("subject");
      return;
    }
    if (!topic.trim()) {
      setError("Enter a topic.");
      setActiveStep("topic");
      return;
    }
    if (modeLocked) {
      setError("That study mode requires Pro. Upgrade or pick a free mode.");
      return;
    }
    if (atLimit) {
      setError(
        `Free plan limit reached (${creditsUsed} / ${creditsTotal} used, ${creditsLeft} left). Upgrade for more generations.`,
      );
      return;
    }

    const { subject: subjectName, subjectCode } = parseSubjectInput(subjectRaw);
    const age = getAgeForGrade(boardId, pathwayId, gradeId);
    const premiumModes = isPremium
      ? STUDY_MODES.filter((m) => m.locked && m.isPremium).map((m) => m.name)
      : [];

    cancelledRef.current = false;
    setBusy(true);
    setGenPhase("generating");
    try {
      const content = await generateStudyContent(
        {
          curriculumId: leaf.id,
          curriculumName: leaf.name,
          subject: subjectName,
          subjectCode,
          topic: topic.trim(),
          studyMode,
          difficulty,
          grade: gradeId,
          isPremium,
          premiumModes,
          includeMnemonics:
            studyMode === "Flashcards" ||
            studyMode === "Exam Focus" ||
            studyMode === "Quiz"
              ? false
              : includeMnemonics,
          includeExamStyleQs: includeExamStyleQs && (isPremium || isGuest),
          includeCommonMistakes:
            studyMode === "Exam Focus" ? includeCommonMistakes : false,
          age,
        },
        { guest: isGuest },
      );

      if (cancelledRef.current) return;

      if (isGuest || !user) {
        setGuestPreview(content);
        setGenPhase("complete");
        return;
      }

      const noteId = await saveGeneratedNote(user.uid, {
        subject: subjectRaw,
        topic: topic.trim(),
        studyMode,
        difficulty,
        notes: content,
        includeMnemonics:
          studyMode === "Flashcards" ||
          studyMode === "Exam Focus" ||
          studyMode === "Quiz"
            ? false
            : includeMnemonics,
        includeExamStyleQs: includeExamStyleQs && isPremium,
        curriculumId: leaf.id,
        curriculumName: leaf.name,
        grade: gradeId,
      });

      if (cancelledRef.current) return;

      setCompletedNoteId(noteId);
      await refresh();
      setGenPhase("complete");
    } catch (err) {
      if (cancelledRef.current) return;
      setGenPhase("idle");
      setError(err instanceof Error ? err.message : "Generation failed");
    } finally {
      if (!cancelledRef.current) {
        setBusy(false);
      }
    }
  }

  function onCancelGeneration() {
    cancelledRef.current = true;
    setBusy(false);
    setGenPhase("idle");
  }

  function onOpenGeneratedNotes() {
    if (completedNoteId) {
      // Quizzes open the live interactive player; other modes open the note detail.
      if (studyMode === "Quiz") {
        router.push(`/library/${completedNoteId}/quiz`);
      } else {
        router.push(`/library/${completedNoteId}`);
      }
      return;
    }
    setGenPhase("idle");
  }

  function onReplayGeneration() {
    setGenPhase("idle");
    setCompletedNoteId(null);
    // Re-trigger from the form submit button path
    window.setTimeout(() => {
      const form = document.getElementById(
        "generate-study-form",
      ) as HTMLFormElement | null;
      form?.requestSubmit();
    }, 0);
  }

  const gradeLabel =
    grades.find((g) => g.id === gradeId)?.name ?? "Select year";
  const subjectRawLabel =
    subject === "__custom__" ? customSubject.trim() : subject.trim();
  const showProgress =
    genPhase === "generating" || genPhase === "complete";

  return (
    <div className="mx-auto w-full max-w-none">
      {showProgress ? (
        <GenerationProgressScreen
          phase={genPhase === "complete" ? "complete" : "generating"}
          meta={{
            studyMode,
            subject: subjectRawLabel || "Subject",
            topic: topic.trim() || "Topic",
            gradeLabel,
            curriculumLabel: board?.name ?? leaf?.name ?? "",
            difficulty,
            includeMnemonics:
              includeMnemonics &&
              studyMode !== "Flashcards" &&
              studyMode !== "Exam Focus" &&
              studyMode !== "Quiz",
            isGuest: isGuest || !user,
          }}
          onCancel={onCancelGeneration}
          onOpenNotes={onOpenGeneratedNotes}
          onReplay={onReplayGeneration}
        />
      ) : null}
      {!isGuest && loading ? (
        <LoadingBlock label="Loading your plan…" />
      ) : (
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_360px] xl:gap-8">
          <div className="min-w-0 space-y-5">
            <header>
              <h1 className="font-heading text-[clamp(1.6rem,2.5vw,2.2rem)] font-extrabold tracking-tight text-[#111827]">
                Build your {studyMode}
              </h1>
              <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm text-[#6B7280]">
                  Choose your subject, difficulty and optional exam practice.
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFE4F1] px-2.5 py-1 text-[11px] font-bold text-[#FF2D8A]">
                  <span
                    className="size-1.5 shrink-0 rounded-full bg-[#FF2D8A]"
                    aria-hidden
                  />
                  {creditsLeft} credit{creditsLeft === 1 ? "" : "s"} left
                </span>
              </div>
            </header>

            {isGuest ? (
              <Alert tone="info">
                Guest generations are not saved.{" "}
                <Link href="/signup" className="font-semibold underline">
                  Sign up
                </Link>{" "}
                to keep notes in My Library.
              </Alert>
            ) : null}

            {error ? <Alert>{error}</Alert> : null}
            {atLimit ? (
              <Alert>
                No free generations left. Upgrade on Pricing, or wait if you
                expect reward credits.
              </Alert>
            ) : null}

            <div
              ref={setupRef}
              className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3"
            >
              <span className="shrink-0 text-[10px] font-bold tracking-[0.14em] text-[#111827] uppercase">
                Your setup
              </span>
              <div className="grid min-w-0 flex-1 gap-2 sm:grid-cols-3">
                <div className="relative">
                  <SetupChip
                    label={board?.name ?? "Curriculum"}
                    bg="#ECEAFF"
                    tickBg={PURPLE}
                    labelColor={PURPLE}
                    open={openSetup === "board"}
                    onClick={() =>
                      setOpenSetup((v) => (v === "board" ? null : "board"))
                    }
                  />
                  <SetupDropdown open={openSetup === "board"}>
                    {boards.map((b) => (
                      <SetupOption
                        key={b.id}
                        label={b.name}
                        selected={b.id === boardId}
                        onSelect={() => {
                          onBoardChange(b.id);
                          setOpenSetup(null);
                        }}
                      />
                    ))}
                  </SetupDropdown>
                </div>
                <div className="relative">
                  <SetupChip
                    label={pathway?.name ?? "Pathway"}
                    bg="#FFE4F1"
                    tickBg={PINK}
                    labelColor={PINK}
                    open={openSetup === "pathway"}
                    onClick={() =>
                      setOpenSetup((v) => (v === "pathway" ? null : "pathway"))
                    }
                  />
                  <SetupDropdown open={openSetup === "pathway"}>
                    {(board?.pathways ?? []).map((p) => (
                      <SetupOption
                        key={p.id}
                        label={p.name}
                        selected={p.id === pathwayId}
                        onSelect={() => {
                          onPathwayChange(p.id);
                          setOpenSetup(null);
                        }}
                      />
                    ))}
                  </SetupDropdown>
                </div>
                <div className="relative">
                  <SetupChip
                    label={gradeLabel}
                    bg="#F3F9C8"
                    tickBg={LIME}
                    tickColor="#111827"
                    labelColor="#5B6B1A"
                    open={openSetup === "grade"}
                    onClick={() =>
                      setOpenSetup((v) => (v === "grade" ? null : "grade"))
                    }
                  />
                  <SetupDropdown open={openSetup === "grade"}>
                    {grades.map((g) => (
                      <SetupOption
                        key={g.id}
                        label={g.name}
                        selected={g.id === gradeId}
                        onSelect={() => {
                          onGradeChange(g.id);
                          setOpenSetup(null);
                        }}
                      />
                    ))}
                  </SetupDropdown>
                </div>
              </div>
            </div>

            <div
              className="relative overflow-hidden rounded-[28px] px-5 py-5 text-white shadow-[0_14px_32px_rgba(79,53,242,0.2)] sm:px-6"
              style={{ background: modeHero.gradient }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-[0_4px_12px_rgba(17,24,39,0.12)]">
                    {modeHero.icon}
                  </span>
                  <div>
                    <p className="font-heading text-lg font-extrabold">
                      {studyMode}
                    </p>
                    <p className="text-sm text-white/85">{modeHero.blurb}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowModes((v) => !v)}
                  className="rounded-xl bg-white/15 px-4 py-2 text-xs font-bold backdrop-blur transition hover:bg-white/25"
                  style={{ color: modeHero.ctaColor }}
                >
                  Change mode
                </button>
              </div>
            </div>

            {showModes ? (
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {GENERATE_MODES.map((mode) => {
                  const locked = !isGuest && mode.locked && !isPremium;
                  const active = studyMode === mode.name;
                  return (
                    <button
                      key={mode.name}
                      type="button"
                      disabled={busy || locked}
                      onClick={() => selectStudyMode(mode.name)}
                      className={`rounded-2xl border px-3 py-3 text-left text-sm transition ${
                        active
                          ? "border-[#4F35F2] bg-[#4F35F2]/10 font-semibold"
                          : "border-[#E8E6F0] bg-white"
                      } ${locked ? "opacity-50" : "hover:border-[#4F35F2]/40"}`}
                    >
                      {mode.name}
                      {mode.isPremium ? (
                        <span className="mt-0.5 block text-xs text-[#6B7280]">
                          Pro
                        </span>
                      ) : null}
                    </button>
                  );
                })}
              </div>
            ) : null}

            <form
              id="generate-study-form"
              onSubmit={(e) => void onSubmit(e)}
              className="space-y-5"
            >              <section
                className="rounded-[28px] border border-[#E8E6F0] bg-white shadow-[0_8px_24px_rgba(17,24,39,0.04)]"
                onFocus={() => setActiveStep("subject")}
              >
                <div
                  className="flex items-center gap-3 overflow-hidden rounded-t-[28px] border-b border-[#EDECF3] px-5 py-4 sm:px-6"
                  style={{
                    background:
                      "linear-gradient(90deg, #F3F0FF 0%, #FFFFFF 55%)",
                  }}
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#4F35F2] text-sm font-extrabold text-white">
                    1
                  </span>
                  <h2 className="min-w-0 flex-1 font-heading text-lg font-extrabold text-[#111827] sm:text-xl">
                    What are you studying?
                  </h2>
                  <span className="shrink-0 text-[10px] font-extrabold tracking-[0.12em] text-[#FF2D8A] uppercase">
                    Required
                  </span>
                </div>

                <div className="relative z-20 space-y-4 px-5 py-5 sm:px-6">
                  <div className="relative" ref={subjectBrowseRef}>
                    <div className="relative">
                      <span className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-[#9CA3AF]">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden
                        >
                          <circle
                            cx="11"
                            cy="11"
                            r="6.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          />
                          <path
                            d="M16.5 16.5 20 20"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                      <input
                        value={subjectQuery}
                        maxLength={50}
                        onChange={(e) => {
                          const next = e.target.value.slice(0, 50);
                          setSubjectQuery(next);
                          setActiveStep("subject");
                          if (subject && next !== subject) {
                            setSubject("__custom__");
                            setCustomSubject(next);
                          }
                        }}
                        onFocus={() => setActiveStep("subject")}
                        placeholder="Search or select a subject..."
                        disabled={busy}
                        className="w-full rounded-2xl border border-[#E5E7EB] bg-white py-3.5 pr-11 pl-11 text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF] focus:border-[#4F35F2]"
                      />
                      <button
                        type="button"
                        aria-label="Browse all subjects"
                        aria-expanded={showInputBrowse}
                        disabled={busy}
                        onClick={() => {
                          setShowAllSubjects(false);
                          setShowInputBrowse((v) => !v);
                        }}
                        className="absolute top-1/2 right-3 -translate-y-1/2 rounded-md p-1 text-[#9CA3AF] transition hover:bg-[#F3F4F6] hover:text-[#6B7280]"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden
                          className={`transition ${showInputBrowse ? "rotate-180" : ""}`}
                        >
                          <path
                            d="M6 9l6 6 6-6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>

                    {(showInputBrowse || showSubjectSearchMenu) && (
                      <div className="absolute z-50 mt-2 max-h-56 w-full overflow-auto rounded-2xl border border-[#E8E6F0] bg-white p-2 shadow-[0_12px_28px_rgba(17,24,39,0.12)]">
                        {(showInputBrowse
                          ? subjectOptions
                          : filteredSubjects
                        ).length === 0 ? (
                          <p className="px-3 py-2 text-sm text-[#6B7280]">
                            {showInputBrowse
                              ? "No subjects for this grade — type your own above."
                              : "No matching subjects."}
                          </p>
                        ) : (
                          (showInputBrowse
                            ? subjectOptions
                            : filteredSubjects
                          ).map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => pickSubject(s)}
                              className="block w-full rounded-xl px-3 py-2.5 text-left text-sm text-[#111827] hover:bg-[#F4F1FF]"
                            >
                              {s}
                            </button>
                          ))
                        )}
                        {!showInputBrowse && showSubjectSearchMenu ? (
                          <button
                            type="button"
                            onClick={() => {
                              setSubject("__custom__");
                              setCustomSubject(subjectQuery.trim());
                              setShowAllSubjects(false);
                              setShowInputBrowse(false);
                              setActiveStep("difficulty");
                            }}
                            className="mt-1 block w-full rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-[#4F35F2] hover:bg-[#F4F1FF]"
                          >
                            Use “{subjectQuery.trim()}”
                          </button>
                        ) : null}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap items-start justify-between gap-2 text-xs text-[#6B7280]">
                    <p>
                      Start typing to search, or tap the arrow to browse all
                      subjects.
                    </p>
                    <p className="shrink-0 font-medium">
                      {Math.max(0, 50 - subjectQuery.length)} characters
                      remaining
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-sm text-[#6B7280]">Quick pick:</span>
                    {quickPicks.map((s, i) => {
                      const style = quickPickStyle(s, i);
                      return (
                        <button
                          key={s}
                          type="button"
                          disabled={busy}
                          onClick={() => pickSubject(s)}
                          className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-bold transition hover:brightness-[0.98]"
                          style={{
                            background: style.bg,
                            color: style.color,
                          }}
                        >
                          <span className="shrink-0" aria-hidden>
                            {style.icon}
                          </span>
                          {s}
                        </button>
                      );
                    })}
                    <div className="relative" ref={browseAllRef}>
                      <button
                        type="button"
                        disabled={busy}
                        aria-expanded={showAllSubjects}
                        aria-haspopup="listbox"
                        onClick={() => {
                          setShowInputBrowse(false);
                          setShowAllSubjects((v) => !v);
                        }}
                        className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold text-[#5B6B1A] transition hover:brightness-[0.98]"
                        style={{ background: "#EAF6A8" }}
                      >
                        Browse all subjects
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden
                          className={`transition ${showAllSubjects ? "rotate-180" : ""}`}
                        >
                          <path
                            d="M6 9l6 6 6-6"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      {showAllSubjects ? (
                        <div
                          role="listbox"
                          aria-label="All subjects"
                          className="absolute top-[calc(100%+8px)] left-0 z-50 max-h-64 min-w-[240px] overflow-auto rounded-2xl border border-[#E8E6F0] bg-white py-1.5 shadow-[0_12px_28px_rgba(17,24,39,0.14)] sm:min-w-[280px]"
                        >
                          {subjectOptions.length === 0 ? (
                            <p className="px-3 py-2.5 text-sm text-[#6B7280]">
                              No subjects for this grade — type your own above.
                            </p>
                          ) : (
                            subjectOptions.map((s) => {
                              const selected =
                                subject === s ||
                                (subject === "__custom__" &&
                                  customSubject === s);
                              return (
                                <button
                                  key={s}
                                  type="button"
                                  role="option"
                                  aria-selected={selected}
                                  onClick={() => pickSubject(s)}
                                  className={`flex w-full items-center px-3.5 py-2.5 text-left text-sm font-semibold transition ${
                                    selected
                                      ? "bg-[#F5F3FF] text-[#4F35F2]"
                                      : "text-[#111827] hover:bg-[#F9FAFB]"
                                  }`}
                                >
                                  {s}
                                </button>
                              );
                            })
                          )}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {subject ? (
                    <p className="text-sm font-semibold text-[#4F35F2]">
                      Selected:{" "}
                      {subject === "__custom__"
                        ? customSubject || "Custom"
                        : subject}
                    </p>
                  ) : null}
                </div>
              </section>

              <section
                className="rounded-[28px] border border-[#E8E6F0] bg-white p-5 shadow-[0_8px_24px_rgba(17,24,39,0.04)] sm:p-6"
                onFocus={() => setActiveStep("difficulty")}
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#ECEAFF] text-sm font-extrabold text-[#4F35F2]">
                    2
                  </span>
                  <h2 className="font-heading text-lg font-extrabold text-[#111827] sm:text-xl">
                    How challenging should it be?
                  </h2>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {DIFFICULTY_CARDS.map((card) => {
                    const active = difficulty === card.id;
                    return (
                      <button
                        key={card.id}
                        type="button"
                        disabled={busy}
                        onClick={() => {
                          setDifficulty(card.id);
                          setActiveStep("extras");
                        }}
                        className={`rounded-[22px] border p-4 text-left transition sm:p-5 ${
                          active
                            ? "shadow-[0_6px_18px_rgba(255,45,138,0.1)]"
                            : "border-[#E8E6F0] bg-white hover:border-[#D1D5DB]"
                        }`}
                        style={
                          active
                            ? {
                                borderColor: card.activeBorder,
                                background: card.activeBg,
                              }
                            : undefined
                        }
                      >
                        <span
                          className="flex size-10 items-center justify-center rounded-xl"
                          style={{
                            background: card.iconBg,
                            color: card.iconColor,
                          }}
                        >
                          {card.icon}
                        </span>
                        <p
                          className="mt-3 font-heading text-base font-extrabold"
                          style={{
                            color: active ? card.activeTitle : "#111827",
                          }}
                        >
                          {card.label}
                        </p>
                        <p className="mt-1 text-sm text-[#6B7280]">
                          {card.blurb}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </section>

              <section
                className="rounded-[28px] border border-[#E8E6F0] bg-white p-5 shadow-[0_8px_24px_rgba(17,24,39,0.04)] sm:p-6"
                onFocus={() => setActiveStep("extras")}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className={`flex size-8 shrink-0 items-center justify-center text-sm font-extrabold text-[#4F35F2] ${
                      studyMode === "Flashcards"
                        ? "rounded-full bg-[#ECEAFF]"
                        : "rounded-lg bg-[#ECEAFF]"
                    }`}
                  >
                    3
                  </span>
                  <h2 className="min-w-0 flex-1 font-heading text-lg font-extrabold text-[#111827] sm:text-xl">
                    Extras
                  </h2>
                  <span className="shrink-0 text-[10px] font-bold tracking-[0.12em] text-[#9CA3AF] uppercase">
                    Optional
                  </span>
                </div>

                <div className="space-y-3">
                  {studyMode !== "Flashcards" &&
                  studyMode !== "Exam Focus" &&
                  studyMode !== "Quiz" ? (
                    <>
                      <ExtraOption
                        checked={includeMnemonics}
                        disabled={busy}
                        onToggle={() => {
                          setIncludeMnemonics((v) => !v);
                          setActiveStep("extras");
                        }}
                        onHelp={() =>
                          setExtraHelp((h) =>
                            h === "mnemonics" ? null : "mnemonics",
                          )
                        }
                        iconBg="#F3F9C8"
                        iconColor="#5B6B1A"
                        icon={
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden
                          >
                            <path
                              d="M9.5 18h5M10.5 21h3"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                            />
                            <path
                              d="M12 3a6 6 0 0 0-3.5 10.8c.6.5 1 1.2 1.1 2h4.8c.1-.8.5-1.5 1.1-2A6 6 0 0 0 12 3Z"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinejoin="round"
                            />
                          </svg>
                        }
                        title="Mnemonics"
                        description="Memory tricks that make facts stick."
                      />
                      {extraHelp === "mnemonics" ? (
                        <p className="rounded-xl bg-[#F4F1FF] px-3 py-2 text-xs text-[#4F35F2]">
                          Mnemonics add short memory aids alongside your notes
                          so key facts are easier to recall.
                        </p>
                      ) : null}
                    </>
                  ) : null}

                  <ExtraOption
                    checked={includeExamStyleQs}
                    disabled={busy || (!isPremium && !isGuest)}
                    onToggle={() => {
                      if (!isPremium && !isGuest) return;
                      setIncludeExamStyleQs((v) => !v);
                      setActiveStep("extras");
                    }}
                    onHelp={() =>
                      setExtraHelp((h) => (h === "exam" ? null : "exam"))
                    }
                    iconBg="#FFE4F1"
                    iconColor="#FF2D8A"
                    icon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M4 20h4.2L18.6 9.6a1.9 1.9 0 0 0 0-2.7L16.1 4.4a1.9 1.9 0 0 0-2.7 0L3.5 14.3V20Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinejoin="round"
                        />
                        <path
                          d="m12.5 5.8 4.7 4.7"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    }
                    title="Exam Style Qs"
                    description={
                      !isPremium && !isGuest
                        ? "Add practice questions written like real exams. · Pro"
                        : "Add practice questions written like real exams."
                    }
                  />
                  {extraHelp === "exam" ? (
                    <p className="rounded-xl bg-[#F4F1FF] px-3 py-2 text-xs text-[#4F35F2]">
                      Exam Style Questions add short practice prompts in the
                      style of your board. For longer written answers, use Exam
                      Focus mode.
                    </p>
                  ) : null}

                  {studyMode === "Exam Focus" ? (
                    <>
                      <ExtraOption
                        checked={includeCommonMistakes}
                        disabled={busy}
                        onToggle={() => {
                          setIncludeCommonMistakes((v) => !v);
                          setActiveStep("extras");
                        }}
                        onHelp={() =>
                          setExtraHelp((h) =>
                            h === "mistakes" ? null : "mistakes",
                          )
                        }
                        iconBg="#F3F9C8"
                        iconColor="#7A9A12"
                        icon={
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden
                          >
                            <path
                              d="M12 4.2 20.2 19H3.8L12 4.2Z"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 10v4.2M12 16.8h.01"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                            />
                          </svg>
                        }
                        title="Common Mistakes"
                        description="Learn the errors examiners see most — and how to avoid them."
                      />
                      {extraHelp === "mistakes" ? (
                        <p className="rounded-xl bg-[#F4F1FF] px-3 py-2 text-xs text-[#4F35F2]">
                          Common Mistakes highlights frequent exam pitfalls for
                          this topic and how to avoid losing marks.
                        </p>
                      ) : null}
                    </>
                  ) : null}
                </div>

                <div className="mt-4 flex items-start gap-3 rounded-2xl bg-[#F3F9C8] px-4 py-3.5 text-sm leading-relaxed text-[#5B6B1A]">
                  <span
                    className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-[#5B6B1A]"
                    aria-hidden
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        x="6"
                        y="4"
                        width="12"
                        height="16"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <path
                        d="M9 9h6M9 12.5h6M9 16h3.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <p>
                    If you want to practise longer written answers, use Exam
                    Focus or enable Exam Style Questions when you generate
                    notes.
                  </p>
                </div>
              </section>

              <section
                className="rounded-[28px] border border-[#E8E6F0] bg-white p-5 shadow-[0_8px_24px_rgba(17,24,39,0.04)] sm:p-6"
                onFocus={() => setActiveStep("topic")}
              >
                <div className="mb-1 flex items-center gap-3">
                  <span
                    className={`flex size-8 items-center justify-center text-sm font-extrabold text-[#4F35F2] ${
                      studyMode === "Flashcards"
                        ? "rounded-full bg-[#ECEAFF]"
                        : "rounded-full bg-[#EDE9FE]"
                    }`}
                  >
                    4
                  </span>
                  <h2 className="font-heading text-xl font-extrabold text-[#111827]">
                    What topic should we cover?
                  </h2>
                </div>
                <input
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  onFocus={() => setActiveStep("topic")}
                  placeholder="e.g. Homophones, Cell Structure, Quadratic equations"
                  disabled={busy}
                  required
                  className="mt-4 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3.5 text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF] focus:border-[#4F35F2]"
                />
              </section>

              <div className="space-y-2">
                <button
                  type="submit"
                  disabled={busy || atLimit || modeLocked}
                  className={`inline-flex w-full items-center justify-center gap-2 px-4 py-3.5 text-sm font-extrabold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 ${
                    studyMode === "Flashcards" ? "rounded-full" : "rounded-2xl"
                  }`}
                  style={{ background: PINK }}
                >
                  <span className="inline-flex items-center text-white" aria-hidden>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.5c.4 3.4 1.7 5.7 5.5 7-3.8 1.3-5.1 3.6-5.5 7-.4-3.4-1.7-5.7-5.5-7 3.8-1.3 5.1-3.6 5.5-7Z" />
                      <path d="M18.2 4.2c.2 1.5.8 2.5 2.4 3.1-1.6.6-2.2 1.6-2.4 3.1-.2-1.5-.8-2.5-2.4-3.1 1.6-.6 2.2-1.6 2.4-3.1Z" />
                    </svg>
                  </span>
                  {busy
                    ? "Generating…"
                    : studyMode === "Exam Focus"
                      ? "Generate Exam Questions"
                      : `Generate ${studyMode}`}
                </button>
                <p className="text-center text-xs text-[#9CA3AF]">
                  {subject || customSubject
                    ? topic.trim()
                      ? "Ready when you are"
                      : "Add a topic above to continue"
                    : "Pick a subject above to continue"}
                </p>
              </div>
            </form>

            {guestPreview ? (
              <div className="rounded-[28px] border border-[#E8E6F0] bg-white p-5">
                <h2 className="font-heading text-lg font-extrabold text-[#111827]">
                  Preview (not saved)
                </h2>
                <div className="mt-4 max-h-[28rem] overflow-auto">
                  <MarkdownMathView content={guestPreview} />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link href="/signup">
                    <PrimaryButton type="button" className="w-auto px-5">
                      Sign up to save
                    </PrimaryButton>
                  </Link>
                  <SecondaryButton
                    type="button"
                    className="w-auto px-5"
                    onClick={() => setGuestPreview(null)}
                  >
                    Dismiss
                  </SecondaryButton>
                </div>
              </div>
            ) : null}

            {!leaf && !loading ? (
              <EmptyState
                title="Pick a grade with subjects"
                body="Some early years grades have no subject list — choose a later year or use a custom subject."
              />
            ) : null}
          </div>

          <GenerateStickySidebar tip={tip} displayName={displayName} />
        </div>
      )}
    </div>
  );
}
