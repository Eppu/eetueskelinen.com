import Image from "next/image";
import type { ReactNode } from "react";

type DialogueProps = {
  name: string;
  avatar?: string;
  alignment?: "left" | "right";
  children: ReactNode;
};

export default function Dialogue({ name, avatar, alignment = "left", children }: DialogueProps) {
  const isRight = alignment === "right";

  return (
    <div className={`flex w-full gap-4 my-6 ${isRight ? "flex-row-reverse" : "flex-row"}`}>
      <div className="flex-shrink-0 flex flex-col items-center gap-2">
        <div className="h-10 w-10 flex items-center justify-center overflow-hidden rounded-full bg-neutral-800 border border-neutral-700">
          {avatar ? (
             // If avatar is a URL, render Image. If it is an emoji, render as text.
             (avatar.startsWith("http") || avatar.startsWith("/")) ? (
                <Image src={avatar} alt={name} width={40} height={40} className="object-cover" />
             ) : (
                <span className="text-xl">{avatar}</span>
             )
          ) : (
            <span className="text-sm font-semibold text-neutral-300">{name[0]}</span>
          )}
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">{name}</span>
      </div>
      <div className={`relative max-w-[85%] rounded-2xl px-5 py-4 text-[0.95rem] leading-relaxed shadow-sm ${isRight ? "bg-neutral-800 text-neutral-200 rounded-tr-sm" : "bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-tl-sm"}`}>
        {children}
      </div>
    </div>
  );
}
