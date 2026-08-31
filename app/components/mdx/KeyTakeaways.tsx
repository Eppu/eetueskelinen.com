import type { ReactNode } from "react";
import { Lightbulb } from "lucide-react";
import { playfairDisplay } from "../../utils/fonts";

type KeyTakeawaysProps = {
  children: ReactNode;
};

export default function KeyTakeaways({ children }: KeyTakeawaysProps) {
  return (
    <div className="relative my-10 overflow-hidden rounded-3xl border border-yellowgreen/20 bg-gradient-to-br from-yellowgreen/5 to-transparent p-6 sm:p-8 shadow-[0_0_40px_-15px_rgba(154,205,50,0.15)]">
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-yellowgreen/10 blur-3xl mix-blend-screen" />
      
      <div className="relative z-10 flex items-center gap-3 mb-6 border-b border-yellowgreen/20 pb-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellowgreen/20 text-yellowgreenlight shadow-inner">
          <Lightbulb className="h-5 w-5" />
        </span>
        <h3 className={`${playfairDisplay.className} text-2xl font-bold text-neutral-100 m-0 tracking-wide`}>
          Key Takeaways
        </h3>
      </div>
      
      <div className="relative z-10 prose prose-invert prose-neutral max-w-none text-[0.95rem] leading-relaxed
        [&>ul]:m-0 [&>ul]:list-none [&>ul]:p-0 [&>ul>li]:relative [&>ul>li]:pl-7 [&>ul>li]:mb-4 last:[&>ul>li]:mb-0
        [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:top-[0.4rem] [&>ul>li]:before:h-2 [&>ul>li]:before:w-2 [&>ul>li]:before:rounded-sm [&>ul>li]:before:bg-yellowgreenlight/60">
        {children}
      </div>
    </div>
  );
}
