"use client";

import { useEffect, useState } from "react";

const LINES = [
  "/xteam create legends",
  "/xteam add Itsredfox_ legends",
  "/xteam givekit pvpkit legends",
  "/xteam freeze legends",
];

const TYPE_SPEED = 42;
const HOLD_AFTER_LINE = 900;
const HOLD_AFTER_ALL = 1800;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from an external system (matchMedia) on mount is the standard pattern here
    setReduced(mq.matches);
    const listener = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);
  return reduced;
}

export function Terminal() {
  const reduceMotion = usePrefersReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [doneLines, setDoneLines] = useState<string[]>([]);

  useEffect(() => {
    if (reduceMotion) return;

    const current = LINES[lineIndex];
    if (charCount < current.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), TYPE_SPEED);
      return () => clearTimeout(t);
    }

    const isLast = lineIndex === LINES.length - 1;
    const t = setTimeout(
      () => {
        if (isLast) {
          setDoneLines([]);
          setLineIndex(0);
          setCharCount(0);
        } else {
          setDoneLines((d) => [...d, current]);
          setLineIndex((i) => i + 1);
          setCharCount(0);
        }
      },
      isLast ? HOLD_AFTER_ALL : HOLD_AFTER_LINE
    );
    return () => clearTimeout(t);
  }, [charCount, lineIndex, reduceMotion]);

  if (reduceMotion) {
    return (
      <div className="rounded-xl border border-line bg-panel/90 shadow-[0_0_60px_-20px_rgba(217,139,79,0.25)]">
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line-bright" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-bright" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-bright" />
          <span className="ml-2 font-mono-cmd text-xs text-ink-faint">server console</span>
        </div>
        <div className="min-h-[168px] px-4 py-4 font-mono-cmd text-sm">
          {LINES.map((l, i) => (
            <div key={i} className="text-ink-dim">
              <span className="text-copper">$</span> {l}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const typedSoFar = LINES[lineIndex]?.slice(0, charCount) ?? "";

  return (
    <div className="rounded-xl border border-line bg-panel/90 shadow-[0_0_60px_-20px_rgba(217,139,79,0.25)]">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line-bright" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-bright" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-bright" />
        <span className="ml-2 font-mono-cmd text-xs text-ink-faint">server console</span>
      </div>
      <div className="min-h-[168px] px-4 py-4 font-mono-cmd text-sm">
        {doneLines.map((l, i) => (
          <div key={i} className="text-ink-dim">
            <span className="text-copper">$</span> {l}
          </div>
        ))}
        <div className="text-ink">
          <span className="text-copper">$</span> {typedSoFar}
          <span
            className="ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] bg-copper-bright"
            style={{ animation: "caret-blink 1s step-end infinite" }}
          />
        </div>
      </div>
    </div>
  );
}
