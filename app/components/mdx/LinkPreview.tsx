"use client";

import { ReactNode, useState, useRef } from "react";

type LinkPreviewProps = {
  href: string;
  title?: string;
  description?: string;
  date?: string;
  readingTime?: string;
  isExternal?: boolean;
  children: ReactNode;
};

export default function LinkPreview({ href, title, description, date, readingTime, isExternal, children }: LinkPreviewProps) {
  const [position, setPosition] = useState<"top" | "bottom">("top");
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleMouseEnter = () => {
    if (linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      // If there's less than 200px of space above the link, show the tooltip below it
      if (rect.top < 200) {
        setPosition("bottom");
      } else {
        setPosition("top");
      }
    }
  };

  const positionClasses =
    position === "top"
      ? "bottom-full mb-3 origin-bottom -translate-y-2 group-hover/link:translate-y-0 group-focus-within/link:translate-y-0"
      : "top-full mt-3 origin-top translate-y-2 group-hover/link:translate-y-0 group-focus-within/link:translate-y-0";

  return (
    <span className="group/link relative inline-block align-baseline" onMouseEnter={handleMouseEnter} onFocus={handleMouseEnter}>
      <a 
        ref={linkRef}
        href={href} 
        target={isExternal ? "_blank" : undefined} 
        rel={isExternal ? "noopener noreferrer" : undefined} 
        className="relative text-yellowgreenlight underline decoration-yellowgreen/50 decoration-1 underline-offset-4 transition-colors hover:text-yellowgreen"
      >
        {children}
      </a>

      <span className={`pointer-events-none absolute left-1/2 z-20 w-[min(20rem,85vw)] -translate-x-1/2 rounded-2xl border border-neutral-800 bg-neutral-950/95 p-4 text-left shadow-xl backdrop-blur-sm opacity-0 scale-95 transition-all duration-200 ease-out invisible group-hover/link:visible group-hover/link:opacity-100 group-hover/link:scale-100 group-focus-within/link:visible group-focus-within/link:opacity-100 group-focus-within/link:scale-100 ${positionClasses}`}>
        {isExternal ? (
          <>
            <span className="flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.24em] text-yellowgreenlight">
              External Link <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
            </span>
            <span className="mt-1 block break-all text-sm font-medium text-neutral-300">{href}</span>
          </>
        ) : (
          <>
            <span className="block text-[0.7rem] uppercase tracking-[0.24em] text-yellowgreenlight">Preview</span>
            {title && <span className="mt-1 block text-base font-medium text-neutral-100">{title}</span>}
            {description && <span className="mt-2 block text-sm leading-relaxed text-neutral-300">{description}</span>}
            <span className="mt-3 flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-neutral-500">
              {date && <span>{date}</span>}
              {readingTime && <span>{readingTime}</span>}
            </span>
          </>
        )}
      </span>
    </span>
  );
}