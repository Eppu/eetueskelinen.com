import type { ReactNode } from "react";
import { playfairDisplay } from "../../utils/fonts";

type ChangelogProps = {
  children: ReactNode;
};

export default function Changelog({ children }: ChangelogProps) {
  return (
    <div className="my-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 shadow-sm overflow-hidden">
      <h3 className={`${playfairDisplay.className} flex items-center gap-2 text-xl font-bold text-neutral-200 mt-0 mb-6 border-b border-dashed border-neutral-800 pb-4`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellowgreenlight"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m8 17 4 4 4-4" /></svg>
        Update log
      </h3>
      <div className="flex flex-col gap-5">
        {children}
      </div>
    </div>
  );
}

type ChangelogItemProps = {
  date: string;
  children: ReactNode;
};

export function ChangelogItem({ date, children }: ChangelogItemProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
      <span className="w-28 shrink-0 text-sm font-semibold tracking-wider text-neutral-500 uppercase mt-[0.15rem]">
        {date}
      </span>
      <div className="prose prose-sm prose-invert text-neutral-300 [&>p]:m-0 [&>p]:leading-relaxed">
        {children}
      </div>
    </div>
  );
}
