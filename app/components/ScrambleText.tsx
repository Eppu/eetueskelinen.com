"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!?#$%&*+=/\\";
const FRAME_MS = 40;
const RESOLVE_PER_CHAR_MS = 50;
const SCRAMBLE_TAIL_MS = 220;

interface ScrambleTextProps {
  children: string;
  className?: string;
}

const randGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

export default function ScrambleText({ children, className }: ScrambleTextProps) {
  const target = children;
  const [display, setDisplay] = useState(target);
  const rafRef = useRef<number | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    setDisplay(target);
  }, [target]);

  const start = () => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();
    const totalDuration = target.length * RESOLVE_PER_CHAR_MS + SCRAMBLE_TAIL_MS;

    let lastFrame = 0;
    const tick = (now: number) => {
      if (now - lastFrame >= FRAME_MS) {
        lastFrame = now;
        const elapsed = now - startTime;
        const next = target
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            const charResolveAt = i * RESOLVE_PER_CHAR_MS;
            return elapsed >= charResolveAt + SCRAMBLE_TAIL_MS ? char : randGlyph();
          })
          .join("");
        setDisplay(next);
      }
      if (now - startTime < totalDuration) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(target);
        startedRef.current = false;
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <span
      className={`inline-block cursor-default ${className ?? ""}`}
      onMouseEnter={start}
      onFocus={start}
      tabIndex={0}
      aria-label={target}
    >
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
