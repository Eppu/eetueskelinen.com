import { playfairDisplay } from "@/app/utils/fonts";
import { HeroLine } from "./components/HeroLine";
import NowPlaying from "./components/NowPlaying";
import { Suspense } from "react";
import ExternalLink from "./components/ExternalLink";

export default function Home() {
  return (
    <section className="flex flex-col md:py-16 justify-between max-w-7xl">
      <div className="max-w-5xl ">
        <h1 className={`${playfairDisplay.className} md:text-7xl md:leading-tight text-5xl leading-tight`}>
          <HeroLine delay={100}>
            <b className="italic">Eetu</b> is a software developer
          </HeroLine>
          <HeroLine delay={300}>excited about solving human</HeroLine>
          <HeroLine delay={500}>problems using technology.</HeroLine>
        </h1>
        <p
          className="md:text-2xl text-xl mt-16 motion-safe:opacity-0 motion-safe:animate-fade-in-up"
          style={{ animationDelay: "1400ms" }}
        >
          He is passionate about building products that make a difference and is always looking for new ways to learn
          and grow.
        </p>
        <p
          className="md:text-2xl text-xl mt-8 motion-safe:opacity-0 motion-safe:animate-fade-in-up"
          style={{ animationDelay: "1500ms" }}
        >
          Eetu currently works as a Senior Software Developer at{" "}
          <ExternalLink href="https://brightly.fi">Brightly</ExternalLink>.
        </p>
        <Suspense fallback={<div className="h-8 mt-8" />}>
          <NowPlaying />
        </Suspense>
      </div>
    </section>
  );
}
