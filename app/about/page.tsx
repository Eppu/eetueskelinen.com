import { playfairDisplay } from "../utils/fonts";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Information about Eetu Eskelinen, a software developer and product engineer based in Tampere, Finland.",
};

export default function About() {
  const images = ["/images/eetu1.jpg", "/images/eetu2.jpg"];
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <section className="flex min-h-screen flex-col md:py-16 max-w-7xl">
      <h1 className={`${playfairDisplay.className} mb-12 md:text-5xl md:leading-tight text-5xl leading-tight`}>
        Hello, I'm Eetu Eskelinen 👋🏻
      </h1>
      <div className="grid md:grid-cols-[5fr_3fr] gap-8 md:text-2xl text-xl font-light items-center">
        {/* <div className="flex flex-col lg:flex-row gap-8 md:text-2xl text-xl font-light"> */}
        <div className="leading-snug">
          <div className="max-w-5xl"></div>
          <p className="mb-6">
            I'm a full-stack software developer, product engineer and designer excited by building products that make a
            difference.
          </p>
          <p className="mb-6">
            My time in the software industry began in 2014, and since then I've been designing, building and shipping
            products for clients and users around the world.
          </p>
          <p className="mb-6">
            I'm driven by a fascination with bleeding-edge tech and intuitive, delightful design. The magic of using
            something that <i>just works.</i>
          </p>
          <p className="mb-6">
            I currently work at <a href="https://futurice.com">Futurice</a> as a full-stack developer.
          </p>
        </div>
        <div className="md:ml-8 lg:max-w-96">
          {/* <img src="/images/eetu2.jpg" alt="Eetu Eskelinen" className="rounded-lg" /> */}
          <Image src={randomImage} alt="Eetu Eskelinen" width={1000} height={100} className="rounded-lg" />
        </div>
      </div>
      <div className="mt-16 md:mt-32">
        <h2 className={`${playfairDisplay.className} md:text-3xl text-2xl font-light mb-8`}>Craft and curiosity</h2>
        <p className="md:text-xl text-xl font-light">
          I'm currently working at{" "}
          <a href="https://futurice.com" target="_blank" rel="noreferrer" className="text-neutral-400 hover:underline">
            Futurice
          </a>
          , a digital transformation agency.
        </p>
      </div>
      <div className="mt-16 md:mt-32">
        <h2 className={`${playfairDisplay.className} md:text-3xl text-2xl font-light mb-8`}>Get in touch</h2>
        <p className="md:text-xl text-xl font-light">
          I'm always interested in hearing about new opportunities, projects or just to chat. Feel free to reach out to
          me at{" "}
          <span className="email">
            hello@eetueskelinen<b>.obfuscation</b>.com
          </span>
        </p>
        <p className="md:text-xl text-xl font-light mt-4">
          You can also find me on{" "}
          <a
            href="
            https://www.linkedin.com/in/eetueskelinen/"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-400 hover:underline"
          >
            LinkedIn
          </a>
          ,{" "}
          <a
            href="https://x.com/edwardtehgreat"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-400 hover:underline"
          >
            X
          </a>
          , and{" "}
          <a
            href="https://github.com/eppu"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-400 hover:underline"
          >
            GitHub
          </a>
          .
        </p>
        <p className="md:text-xl text-xl font-light mt-4">
          My resume is available{" "}
          <a href="/files/resume.pdf" className="text-neutral-400 hover:underline">
            here
          </a>
          .
        </p>
      </div>
    </section>
  );
}
