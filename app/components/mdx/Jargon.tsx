"use client";

import { useState, useRef } from "react";
import type { ReactNode } from "react";

type JargonProps = {
  term: string;
  definition: string;
};

export default function Jargon({ term, definition }: JargonProps) {
  const [position, setPosition] = useState<"top" | "bottom">("top");
  const termRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = () => {
    if (termRef.current) {
      const rect = termRef.current.getBoundingClientRect();
      if (rect.top < 150) {
        setPosition("bottom");
      } else {
        setPosition("top");
      }
    }
  };

  const positionClasses =
    position === "top"
      ? "bottom-full mb-3 origin-bottom -translate-y-2 group-hover/jargon:translate-y-0"
      : "top-full mt-3 origin-top translate-y-2 group-hover/jargon:translate-y-0";

  return (
    <span className="group/jargon relative inline-block align-baseline cursor-help" onMouseEnter={handleMouseEnter}>
      <span ref={termRef} className="text-neutral-200 border-b border-dashed border-neutral-500 hover:border-neutral-300 transition-colors duration-200">
        {term}
      </span>

      <span className={`pointer-events-none absolute left-1/2 z-20 w-[min(16rem,80vw)] -translate-x-1/2 rounded-xl border border-neutral-800 bg-neutral-900/95 p-3 text-left shadow-xl backdrop-blur-sm opacity-0 scale-95 transition-all duration-200 ease-out invisible group-hover/jargon:visible group-hover/jargon:opacity-100 group-hover/jargon:scale-100 ${positionClasses}`}>
        <span className="block text-[0.7rem] uppercase tracking-[0.24em] text-neutral-400 mb-1">Definition</span>
        <span className="block text-sm leading-relaxed text-neutral-200">{definition}</span>
      </span>
    </span>
  );
}
