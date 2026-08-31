import type { ReactNode } from "react";

type HighlightProps = {
  children: ReactNode;
  color?: "yellow" | "green" | "blue" | "purple" | "pink";
};

export default function Highlight({ children, color = "yellow" }: HighlightProps) {
  const colorMap = {
    yellow: "bg-yellow-500/20 text-yellow-200 border-yellow-500/30",
    green: "bg-emerald-500/20 text-emerald-200 border-emerald-500/30",
    blue: "bg-blue-500/20 text-blue-200 border-blue-500/30",
    purple: "bg-purple-500/20 text-purple-200 border-purple-500/30",
    pink: "bg-pink-500/20 text-pink-200 border-pink-500/30",
  };

  const style = colorMap[color] || colorMap.yellow;

  return (
    <mark className={`rounded-md border px-1.5 py-0.5 mx-0.5 bg-opacity-40 font-medium ${style} text-inherit bg-clip-padding`}>
      {children}
    </mark>
  );
}
