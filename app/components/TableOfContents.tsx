"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Heading = {
  depth: number;
  title: string;
  slug: string;
};

type TableOfContentsProps = {
  headings: Heading[];
};

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Collapse when we've scrolled down a bit (e.g. 300px)
      if (window.scrollY > 300) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="lg:sticky lg:top-8 rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition-all duration-300 backdrop-blur-sm shadow-md z-30">
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="flex w-full items-center justify-between outline-none"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 m-0">On this page</p>
        <span className="text-neutral-500 hover:text-neutral-300 transition-colors">
          {isCollapsed ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isCollapsed ? "max-h-0 opacity-0" : "max-h-[70vh] opacity-100 mt-4 overflow-y-auto"
        }`}
      >
        <nav aria-label="Table of contents">
          <ul className="space-y-3 text-sm text-neutral-300 m-0 p-0 list-none">
            {headings.map((heading) => (
              <li key={heading.slug} className={heading.depth >= 3 ? "pl-4 text-neutral-400" : ""}>
                <a href={`#${heading.slug}`} className="hover:text-white transition-colors no-underline">
                  {heading.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
