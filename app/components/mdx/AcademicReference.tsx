import type { ReactNode } from "react";
import { GraduationCap, ExternalLink } from "lucide-react";
import { playfairDisplay } from "../../utils/fonts";

type AcademicReferenceProps = {
  title: string;
  authors: string;
  year: string;
  href: string;
  abstract?: string;
  children?: ReactNode;
};

export default function AcademicReference({ title, authors, year, href, abstract, children }: AcademicReferenceProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 my-6 transition-all hover:border-neutral-700 hover:bg-neutral-900/60 pl-16">
      <div className="absolute left-6 top-6 flex h-6 w-6 items-center justify-center text-neutral-500 group-hover:text-yellowgreenlight transition-colors">
        <GraduationCap className="h-6 w-6" />
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
        <a href={href} target="_blank" rel="noopener noreferrer" className={`text-lg sm:text-xl font-bold ${playfairDisplay.className} text-neutral-200 group-hover:text-yellowgreenlight transition-colors inline-flex items-center gap-2 no-underline`}>
          {title}
        </a>
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-yellowgreen transition-colors hidden sm:inline-flex">
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium tracking-wide uppercase text-neutral-400 mb-4">
        <span>{authors}</span>
        <span className="text-neutral-600">•</span>
        <span className="text-yellowgreenlight/80">{year}</span>
      </div>

      {abstract && (
        <div className="relative mt-2 text-sm leading-relaxed text-neutral-300 before:absolute before:-left-4 before:top-1 before:h-full before:w-[2px] before:bg-neutral-800 group-hover:before:bg-yellowgreenlight/30 transition-colors">
          <p className="m-0 italic">{abstract}</p>
        </div>
      )}
      
      {children && <div className="mt-4 text-sm leading-relaxed text-neutral-300 prose prose-invert prose-sm m-0">{children}</div>}
    </article>
  );
}