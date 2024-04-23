import Image from "next/image";
import { playfairDisplay } from "@/app/utils/fonts";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col md:py-16 justify-between  max-w-7xl">
      <div className="max-w-5xl">
        <h1 className={`${playfairDisplay.className} md:text-7xl text-5xl leading-semi-tight`}>
          <p className="motion-safe:opacity-0 motion-safe:animate-fade-in-down [--fadein-delay:100ms]">
            <b className="italic">Eetu</b> is a software developer
          </p>
          <p className="motion-safe:opacity-0 motion-safe:animate-fade-in-down [--fadein-delay:300ms]">
            excited about solving human
          </p>
          <p className="motion-safe:opacity-0 motion-safe:animate-fade-in-down [--fadein-delay:500ms]">
            problems using technology.
          </p>
        </h1>
        <p className="md:text-2xl text-xl mt-8 motion-safe:opacity-0 motion-safe:animate-fade-in-up [--fadein-delay:1500ms]">
          He is passionate about building products that make a difference and is always looking for new ways to learn
          and grow.
        </p>
        <p className=" md:text-2xl text-xl mt-8 motion-safe:opacity-0 motion-safe:animate-fade-in-up [--fadein-delay:1500ms]">
          Currently writing software at{" "}
          <a href="https://futurice.com" target="blank">
            Futurice
          </a>
          .
        </p>
      </div>
    </section>
  );
}
