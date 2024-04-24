import { animationDelay } from "../utils/fonts";
export const HeroLine = ({ children, delay }: { children: React.ReactNode; delay?: number }) => {
  const animationStyle = animationDelay(delay || 0);

  const fadeinDelay = delay || 0;
  return (
    <span
      className={`inline-block motion-safe:opacity-0 motion-safe:animate-fade-in-down`}
      style={{ ...animationStyle }}
    >
      {children}
    </span>
  );
};
