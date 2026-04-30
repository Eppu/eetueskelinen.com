"use client";

import { useEffect, useRef, useState } from "react";

const TRIGGER = "eetu";
const CASCADE_COUNT = 32;
const CASCADE_DURATION_MS = 3500;

interface FallingHeart {
  id: number;
  left: number;
  size: number;
  delay: number;
  drift: number;
  rotation: number;
  duration: number;
  hue: "primary" | "light";
}

const HeartSvg = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="block drop-shadow-[0_0_6px_rgba(157,250,5,0.45)]"
  >
    <path d="M12 21s-7.5-4.6-10-9.3C0.4 8.4 2.4 4 6.3 4c2 0 3.6 1.1 4.7 2.7C12.1 5.1 13.7 4 15.7 4c3.9 0 5.9 4.4 4.3 7.7C19.5 16.4 12 21 12 21z" />
  </svg>
);

const buildHearts = (): FallingHeart[] =>
  Array.from({ length: CASCADE_COUNT }, (_, i) => ({
    id: Date.now() + i,
    left: Math.random() * 100,
    size: 12 + Math.random() * 22,
    delay: Math.random() * 800,
    drift: (Math.random() - 0.5) * 120,
    rotation: (Math.random() - 0.5) * 720,
    duration: 2400 + Math.random() * 1400,
    hue: i % 4 === 0 ? "light" : "primary",
  }));

export default function SecretCascade() {
  const [hearts, setHearts] = useState<FallingHeart[]>([]);
  const bufferRef = useRef("");
  const clearTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      if (target) {
        const tag = target.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || target.isContentEditable) return;
      }
      if (e.key.length !== 1) return;

      bufferRef.current = (bufferRef.current + e.key.toLowerCase()).slice(-TRIGGER.length);

      if (bufferRef.current === TRIGGER) {
        bufferRef.current = "";
        setHearts(buildHearts());
        if (clearTimer.current) clearTimeout(clearTimer.current);
        clearTimer.current = setTimeout(() => setHearts([]), CASCADE_DURATION_MS);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (clearTimer.current) clearTimeout(clearTimer.current);
    };
  }, []);

  if (hearts.length === 0) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className={`absolute top-0 motion-safe:animate-secret-fall ${
            h.hue === "light" ? "text-yellowgreenlight" : "text-yellowgreen"
          }`}
          style={
            {
              left: `${h.left}%`,
              width: `${h.size}px`,
              height: `${h.size}px`,
              animationDelay: `${h.delay}ms`,
              animationDuration: `${h.duration}ms`,
              ["--drift" as string]: `${h.drift}px`,
              ["--rot" as string]: `${h.rotation}deg`,
            } as React.CSSProperties
          }
        >
          <HeartSvg />
        </span>
      ))}
    </div>
  );
}
