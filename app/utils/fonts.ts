import { DM_Sans, Playfair_Display } from "next/font/google";

export const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const playfairDisplay = Playfair_Display({
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const animationDelay = (delay: number) => ({
  animationDelay: `${delay}ms`,
  animationFillMode: "both",
});
