import { playfairDisplay } from "../utils/fonts";
import Image from "next/image";

export default function About() {
  return (
    <section className="flex min-h-screen flex-col md:py-16 justify-between max-w-7xl">
      <div className="max-w-5xl">
        <h1 className={`${playfairDisplay.className} md:text-5xl md:leading-tight text-5xl leading-tight`}>
          Hello, I'm Eetu Eskelinen 👋🏻
        </h1>
      </div>
      <div className="flex flex-row">
        <div>
          <p className="md:text-2xl text-xl mt-16 ">
            I'm a software developer passionate about building products that make a difference. I'm always looking for
            new ways to learn and grow.
          </p>
        </div>
        <div className="md:ml-8">
          <img src="/images/eetu1.jpg" alt="Eetu Eskelinen" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
}
