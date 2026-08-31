import type { ReactNode } from "react";
import { CircleDot } from "lucide-react";
import { playfairDisplay } from "../../utils/fonts";

type TimelineProps = {
  children: ReactNode;
};

export default function Timeline({ children }: TimelineProps) {
  return (
    <div className="my-8 flex flex-col w-full">
      {children}
    </div>
  );
}

type TimelineItemProps = {
  date: string;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
};

export function TimelineItem({ date, title, icon, children }: TimelineItemProps) {
  return (
    <div className="relative flex gap-4 sm:gap-6 group/timeline">
      {/* Vertical line connecting timeline items */}
      <div className="absolute left-[19px] sm:left-[23px] top-[40px] bottom-[-24px] w-[2px] bg-neutral-800 group-last/timeline:hidden" />
      
      {/* Icon column */}
      <div className="flex flex-col items-center shrink-0">
        <span className="z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-neutral-950 border-4 border-neutral-900 text-neutral-500 group-hover/timeline:border-yellowgreenlight/30 group-hover/timeline:text-yellowgreenlight transition-colors shadow-sm">
          {icon || <CircleDot className="h-4 w-4 sm:h-5 sm:w-5" />}
        </span>
      </div>

      {/* Content column */}
      <div className="pb-10 pt-1 sm:pt-2 flex-1">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-3">
          <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase shrink-0">
            {date}
          </span>
          <h4 className={`${playfairDisplay.className} text-xl font-bold text-neutral-200 group-hover/timeline:text-neutral-100 transition-colors m-0 leading-tight`}>
            {title}
          </h4>
        </div>
        <div className="prose prose-invert prose-sm text-neutral-400">
          {children}
        </div>
      </div>
    </div>
  );
}
