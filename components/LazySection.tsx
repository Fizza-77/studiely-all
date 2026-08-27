"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
} from "react";

type LazySectionProps<P extends object> = {
  /** Resolves the section component (named export). */
  load: () => Promise<ComponentType<P>>;
  /** Props for the loaded section. */
  componentProps: P;
  /** Placeholder height before the section loads. */
  minHeight?: string;
  rootMargin?: string;
};

/**
 * Downloads/executes below-fold section JS only when near the viewport.
 */
export function LazySection<P extends object>({
  load,
  componentProps,
  minHeight = "28rem",
  rootMargin = "480px 0px",
}: LazySectionProps<P>) {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [Comp, setComp] = useState<ComponentType<P> | null>(null);

  useEffect(() => {
    const el = anchorRef.current;
    if (!el) return;

    let cancelled = false;
    const start = () => {
      void load().then((C) => {
        if (!cancelled) setComp(() => C);
      });
    };

    if (typeof IntersectionObserver === "undefined") {
      start();
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        start();
      },
      { rootMargin, threshold: 0.01 },
    );
    io.observe(el);

    return () => {
      cancelled = true;
      io.disconnect();
    };
  }, [load, rootMargin]);

  if (!Comp) {
    return (
      <div ref={anchorRef} style={{ minHeight }} className="w-full" aria-hidden />
    );
  }

  return <Comp {...componentProps} />;
}

/** Stable loaders — define outside render so LazySection effect deps stay steady. */
export function sectionLoader<P extends object>(
  factory: () => Promise<ComponentType<P>>,
): () => Promise<ComponentType<P>> {
  let cached: Promise<ComponentType<P>> | null = null;
  return () => {
    if (!cached) cached = factory();
    return cached;
  };
}
