import type { ReactNode } from "react";

type TerminalWindowProps = {
  title?: string;
  children: ReactNode;
};

export default function TerminalWindow({ title = "Terminal", children }: TerminalWindowProps) {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-neutral-800 bg-[#0d1117] shadow-2xl">
      <div className="flex h-11 items-center border-b border-neutral-800 bg-[#161b22] px-4">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex-1 text-center text-xs font-medium text-neutral-500 tracking-wide">
          {title}
        </div>
        <div className="w-12" /> {/* Spacer to balance the dots */}
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed text-neutral-300 overflow-x-auto">
        {children}
      </div>
    </div>
  );
}
