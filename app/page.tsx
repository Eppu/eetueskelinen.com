import Image from "next/image";
import { playfairDisplay } from "@/app/utils/fonts";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col md:py-16 justify-between  max-w-7xl">
      <div className="max-w-5xl">
        <h1 className={`${playfairDisplay.className} md:text-7xl text-5xl leading-semi-tight`}>
          <b className="italic">Eetu</b> is a software developer excited about solving human problems using technology.
        </h1>
        <p className="md:text-2xl text-xl mt-8">
          He is passionate about building products that make a difference and is always looking for new ways to learn
          and grow.
        </p>
        <p className="md:text-2xl text-xl mt-8">
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
