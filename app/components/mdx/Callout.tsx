import type { ReactNode } from "react";

type CalloutVariant = "note" | "info" | "tip" | "warning" | "danger";

type CalloutProps = {
  children: ReactNode;
  title?: string;
  variant?: CalloutVariant;
};

const variantStyles: Record<CalloutVariant, { badge: string; border: string; accent: string }> = {
  note: {
    badge: "text-yellowgreenlight",
    border: "border-neutral-800",
    accent: "bg-yellowgreenlight/10",
  },
  info: {
    badge: "text-sky-300",
    border: "border-sky-500/30",
    accent: "bg-sky-500/10",
  },
  tip: {
    badge: "text-yellowgreen",
    border: "border-yellowgreen/30",
    accent: "bg-yellowgreen/10",
  },
  warning: {
    badge: "text-amber-300",
    border: "border-amber-500/30",
    accent: "bg-amber-500/10",
  },
  danger: {
    badge: "text-rose-300",
    border: "border-rose-500/30",
    accent: "bg-rose-500/10",
  },
};

export default function Callout({ children, title, variant = "note" }: CalloutProps) {
  let styles = variantStyles[variant] ?? variantStyles.note;

  return (
    <aside className={`my-10 rounded-2xl border ${styles.border} ${styles.accent} px-5 py-4 shadow-sm`}>
      <div className="flex items-start gap-4">
        <div className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${styles.badge} bg-current`} />
        <div className="min-w-0 flex-1">
          <p className={`mb-2 text-[0.7rem] uppercase tracking-[0.24em] ${styles.badge}`}>{title ?? variant}</p>
          <div className="space-y-3 text-base leading-relaxed text-neutral-200 [&_p]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}