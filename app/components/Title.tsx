import { playfairDisplay } from "../utils/fonts";

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1
      className={`${playfairDisplay.className} mb-12 md:text-5xl md:leading-tight text-5xl leading-tight motion-safe:opacity-0 motion-safe:animate-fade-in-down`}
      style={{ animationDelay: "100ms" }}
    >
      {children}
    </h1>
  );
}
