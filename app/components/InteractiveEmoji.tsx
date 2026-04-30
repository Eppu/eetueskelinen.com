"use client";

import { useRef, useState } from "react";

type Behavior = "drum" | "shutter" | "rev" | "wave";

interface InteractiveEmojiProps {
  emoji: string;
  behavior: Behavior;
  label: string;
}

const KEYFRAMES: Record<Behavior, { frames: Keyframe[]; options: KeyframeAnimationOptions }> = {
  drum: {
    frames: [
      { transform: "rotate(0deg) translateY(0)" },
      { transform: "rotate(-18deg) translateY(-2px)" },
      { transform: "rotate(14deg) translateY(0)" },
      { transform: "rotate(-12deg) translateY(-1px)" },
      { transform: "rotate(8deg) translateY(0)" },
      { transform: "rotate(-4deg) translateY(0)" },
      { transform: "rotate(0deg) translateY(0)" },
    ],
    options: { duration: 700, easing: "cubic-bezier(0.36, 0.07, 0.19, 0.97)" },
  },
  shutter: {
    frames: [
      { transform: "scale(1) rotate(0deg)", filter: "brightness(1)" },
      { transform: "scale(1.25) rotate(-3deg)", filter: "brightness(1.6)", offset: 0.18 },
      { transform: "scale(0.92) rotate(2deg)", filter: "brightness(1)", offset: 0.45 },
      { transform: "scale(1.06) rotate(0deg)", filter: "brightness(1.2)", offset: 0.7 },
      { transform: "scale(1) rotate(0deg)", filter: "brightness(1)" },
    ],
    options: { duration: 600, easing: "cubic-bezier(0.34, 1.56, 0.64, 1)" },
  },
  rev: {
    frames: [
      { transform: "translateX(0) rotate(0deg)" },
      { transform: "translateX(-4px) rotate(-6deg)", offset: 0.2 },
      { transform: "translateX(14px) rotate(4deg)", offset: 0.55 },
      { transform: "translateX(6px) rotate(2deg)", offset: 0.78 },
      { transform: "translateX(0) rotate(0deg)" },
    ],
    options: { duration: 800, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
  },
  wave: {
    frames: [
      { transform: "rotate(0deg)" },
      { transform: "rotate(-22deg)", offset: 0.15 },
      { transform: "rotate(20deg)", offset: 0.35 },
      { transform: "rotate(-18deg)", offset: 0.55 },
      { transform: "rotate(16deg)", offset: 0.75 },
      { transform: "rotate(0deg)" },
    ],
    options: { duration: 900, easing: "cubic-bezier(0.36, 0.07, 0.19, 0.97)" },
  },
};

const FLASH_CLASS =
  "pointer-events-none absolute inset-0 -m-2 rounded-full bg-white opacity-0";

export default function InteractiveEmoji({ emoji, behavior, label }: InteractiveEmojiProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const flashRef = useRef<HTMLSpanElement | null>(null);
  const [busy, setBusy] = useState(false);

  const handleClick = () => {
    if (busy) return;
    if (typeof window === "undefined") return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    setBusy(true);
    const { frames, options } = KEYFRAMES[behavior];
    const el = ref.current;
    if (el) {
      const anim = el.animate(frames, options);
      anim.onfinish = () => setBusy(false);
      anim.oncancel = () => setBusy(false);
    } else {
      setBusy(false);
    }

    if (behavior === "shutter" && flashRef.current) {
      flashRef.current.animate(
        [
          { opacity: 0, transform: "scale(0.6)" },
          { opacity: 0.55, transform: "scale(1.4)", offset: 0.25 },
          { opacity: 0, transform: "scale(2)" },
        ],
        { duration: 420, easing: "ease-out" }
      );
    }
  };

  return (
    <span className="relative inline-flex items-center justify-center align-baseline">
      {behavior === "shutter" && (
        <span ref={flashRef} aria-hidden="true" className={FLASH_CLASS} />
      )}
      <span
        ref={ref}
        role="button"
        tabIndex={0}
        aria-label={label}
        title={label}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        }}
        className="inline-block cursor-pointer select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellowgreen rounded-sm"
        style={{ willChange: "transform", transformOrigin: behavior === "wave" ? "70% 80%" : "center" }}
      >
        {emoji}
      </span>
    </span>
  );
}
