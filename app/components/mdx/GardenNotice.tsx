import { Sprout, Leaf, TreeDeciduous } from "lucide-react";
import { ReactNode } from "react";
import { playfairDisplay } from "../../utils/fonts";

type GrowthStage = "seedling" | "budding" | "evergreen";

type GardenNoticeProps = {
  stage: GrowthStage;
};

const stages = {
  seedling: {
    icon: <Sprout className="h-6 w-6" />,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    title: "Seedling",
    description: "This note is just a sprout. It's a rough idea, a work in progress, or unedited thoughts. Don't expect it to be complete.",
  },
  budding: {
    icon: <Leaf className="h-6 w-6" />,
    color: "text-yellowgreenlight",
    bg: "bg-yellowgreenlight/10",
    border: "border-yellowgreenlight/20",
    title: "Budding",
    description: "This note is taking shape. It has some structure and coherent paragraphs, but might still have gaps or unpolished sections.",
  },
  evergreen: {
    icon: <TreeDeciduous className="h-6 w-6" />,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    title: "Evergreen",
    description: "This note is quite polished and comprehensive! While it might still get minor updates, it's a fully formed thought.",
  },
};

export default function GardenNotice({ stage = "seedling" }: GardenNoticeProps) {
  const currentStage = stages[stage];

  return (
    <div className={`my-8 flex gap-5 rounded-2xl border ${currentStage.border} ${currentStage.bg} p-6 shadow-sm`}>
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-900 border ${currentStage.border} ${currentStage.color} `}>
        {currentStage.icon}
      </div>
      <div>
        <h3 className={`${playfairDisplay.className} text-xl font-bold ${currentStage.color} m-0`}>
          {currentStage.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-300 m-0">
          {currentStage.description}
        </p>
      </div>
    </div>
  );
}
