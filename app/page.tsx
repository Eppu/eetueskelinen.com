import Image from "next/image";
import { playfairDisplay } from "@/app/utils/fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-16 max-w-7xl">
      <div className="max-w-5xl">
        <h1 className={`${playfairDisplay.className} text-7xl leading-semi-tight`}>
          <b className="italic">Eetu</b> is a software developer excited about solving human problems using technology.
        </h1>
        <p className="text-2xl mt-8">
          He is passionate about building products that make a difference and is always looking for new ways to learn
          and grow.
        </p>
      </div>
    </main>
  );
}
