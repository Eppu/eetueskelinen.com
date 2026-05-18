import type { ReactNode } from "react";
import { Check, X } from "lucide-react";
import { playfairDisplay } from "../../utils/fonts";

type ProsConsProps = {
  title?: string;
  pros: ReactNode[];
  cons: ReactNode[];
};

export default function ProsCons({ title = "Tradeoffs", pros, cons }: ProsConsProps) {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 shadow-sm">
      <div className="border-b border-neutral-800 bg-neutral-900/80 px-6 py-4">
        <h3 className={`${playfairDisplay.className} text-xl font-bold text-neutral-200 m-0`}>{title}</h3>
      </div>
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-neutral-800">
        <div className="flex-1 p-6 bg-emerald-950/10">
          <h4 className="flex items-center text-sm font-bold uppercase tracking-widest text-emerald-500 mb-4 gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <Check className="h-3 w-3" />
            </span>
            Pros
          </h4>
          <ul className="m-0 p-0 list-none space-y-3">
            {pros.map((pro, idx) => (
              <li key={idx} className="text-sm leading-relaxed text-neutral-300 flex items-start gap-2">
                <span className="text-emerald-500/70 mt-[2px] shrink-0">•</span>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 p-6 bg-rose-950/10">
          <h4 className="flex items-center text-sm font-bold uppercase tracking-widest text-rose-500 mb-4 gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500/20 text-rose-400">
              <X className="h-3 w-3" />
            </span>
            Cons
          </h4>
          <ul className="m-0 p-0 list-none space-y-3">
            {cons.map((con, idx) => (
              <li key={idx} className="text-sm leading-relaxed text-neutral-300 flex items-start gap-2">
                <span className="text-rose-500/70 mt-[2px] shrink-0">•</span>
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
