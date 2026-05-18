import React, { ReactNode } from "react";
import { Info, Play, Plus, Minus } from "lucide-react";
import { playfairDisplay } from "../../utils/fonts";

type DeepDiveProps = {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
};

export default function DeepDive({ title, icon, children }: DeepDiveProps) {
  return (
    <details className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 my-8 transition-colors hover:border-neutral-700 open:border-neutral-700 open:bg-neutral-900/60 open:pb-4">
      <summary className="flex cursor-pointer list-none items-center gap-4 px-6 py-4 outline-none select-none">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800/80 text-neutral-400 group-hover:text-yellowgreenlight transition-colors group-open:bg-yellowgreenlight/10 group-open:text-yellowgreenlight">
          {icon || <Info className="h-4 w-4" />}
        </span>
        <span className={`${playfairDisplay.className} flex-1 text-lg font-bold text-neutral-200 group-hover:text-neutral-100 transition-colors`}>
          {title}
        </span>
        <span className="text-neutral-500 group-hover:text-neutral-300 transition-colors group-open:rotate-45">
          <Plus className="h-5 w-5" />
        </span>
      </summary>
      <div className="px-6 pt-2 pb-2 prose prose-invert prose-neutral prose-sm max-w-none text-neutral-300 animate-in fade-in slide-in-from-top-2 duration-300">
        {children}
      </div>
    </details>
  );
}
