import type { ReactNode } from "react";

type AsideNoteProps = {
  children: ReactNode;
  label?: string;
};

export default function AsideNote({ children, label = "Note" }: AsideNoteProps) {
  return (
    <aside className="my-8 rounded-2xl border border-neutral-800 bg-neutral-950/70 px-5 py-4 text-sm leading-relaxed text-neutral-400">
      <p className="mb-2 text-[0.7rem] uppercase tracking-[0.24em] text-yellowgreenlight">{label}</p>
      <div className="space-y-3 [&_p]:mb-0">{children}</div>
    </aside>
  );
}