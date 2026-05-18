import type { ReactNode } from "react";

type ReferencesProps = {
  children: ReactNode;
  title?: string;
};

export default function References({ children, title = "References and Further Reading" }: ReferencesProps) {
  return (
    <section className="my-12 border-t border-neutral-800 pt-6">
      <h2 className="mb-4 text-base font-medium tracking-wide text-neutral-100">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}