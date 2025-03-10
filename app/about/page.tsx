import { playfairDisplay } from "../utils/fonts";
import Title from "../components/Title";
import ExternalLink from "../components/ExternalLink";
import Image from "next/image";
import type { Metadata } from "next";
import Image1 from "@/public/images/eetu1.jpg";
import Image2 from "@/public/images/eetu2.jpg";
import FrostedImage from "../components/FrostedImage";
import CopyEmail from "../components/CopyEmail";

export const metadata: Metadata = {
  title: "About",
  description: "Information about Eetu Eskelinen, a software developer and product engineer based in Tampere, Finland.",
};

const images = [Image1, Image2];

function RandomImage() {
  const image = images[Math.floor(Math.random() * images.length)];

  return (
    <Image
      src={image}
      priority={true}
      placeholder="blur"
      alt="Eetu Eskelinen"
      width={500}
      height={100}
      className="rounded-lg"
    />
  );
}

export default function About() {
  return (
    <section className="flex flex-col md:py-16 max-w-7xl">
      <Title>Hey, I'm Eetu 👋🏻</Title>
      <div className="grid lg:grid-cols-[5fr_3fr] gap-8 md:text-2xl text-xl font-light items-center">
        {/* <div className="flex flex-col lg:flex-row gap-8 md:text-2xl text-xl font-light"> */}
        <div className="leading-snug">
          <div className="max-w-5xl"></div>
          <p className="mb-6">
            I'm a frontend focused full-stack developer, product engineer and designer excited by building products that
            make a difference.
          </p>
          <p className="mb-6">
            I'm driven by a fascination with bleeding-edge tech and intuitive, delightful design. The magic of using
            something that <i>just works.</i>
          </p>
          <p className="mb-6">
            My time in the software industry began in 2014, and since then I've been designing, building and shipping
            products for clients and users around the world.
          </p>
          <p className="mb-6">
            I currently work at <ExternalLink href="https://brightly.fi">Brightly</ExternalLink> as a senior full-stack
            developer, and I'm based in Tampere, Finland.
          </p>
        </div>
        <div className="lg:ml-8 lg:max-w-96">
          {/* <img src="/images/eetu2.jpg" alt="Eetu Eskelinen" className="rounded-lg" /> */}
          <RandomImage />
        </div>
      </div>
      <div className="grid lg:grid-cols-[5fr_3fr] items-center">
        <div className="mt-16 md:mt-32 md:text-1xl text-xl font-light flex flex-col gap-8 md:leading-semi-snug leading-normal">
          <h2 className={`${playfairDisplay.className} md:text-4xl text-3xl font-light mb-2`}>A little bit about me</h2>
          <p>
            After working in and around the software industry for around a decade, I've found my place (for now, at
            least) in bridging gaps somewhere between design, development and business.
          </p>
          <p>
            Through the years I've gathered skills and experience spanning most aspects of design and software
            engineering, allowing me to shepherd ideas from concept to mock, prototype, and ultimately, functional
            world-class end products.
          </p>
          <p>I'm furiously passionate about understanding the big picture, the small details, and the user.</p>
          <p>
            I love to learn and am always looking for ways to improve my skills and knowledge. Along with keeping my
            tech skills up to date, I'm also interested in psychology, philosophy and anthropology.
          </p>

          {/* <FrostedImage src="/images/eetueskelinen-full.jpg" alt="Eetu Eskelinen" text="Eetu Eskelinen" /> */}
          <p>
            In my life outside of work, I find joy in making and playing music 🥁, taking photos with film cameras 📸
            and hitting the open road on my motorcycle 🏍️.
          </p>
        </div>
      </div>
      <div className="mt-16 md:mt-32 md:text-1xl text-xl font-light md:leading-semi-snug leading-normal">
        <h2 id="contact" className={`${playfairDisplay.className} md:text-4xl text-2xl font-light mb-8`}>
          Get in touch
        </h2>
        <p className="mb-4">
          I'm always open to hearing about new opportunities, projects or just to chat. Feel free to reach out to me at{" "}
          <CopyEmail />
        </p>
        <p className="mb-4">
          You can also find me on{" "}
          <ExternalLink href="https://www.linkedin.com/in/eetueskelinen/">LinkedIn</ExternalLink>,{" "}
          <ExternalLink href="https://x.com/edwardtehgreat">X</ExternalLink>, and{" "}
          <ExternalLink href="https://github.com/eppu">GitHub</ExternalLink>.
        </p>
        <p className="mb-4">
          My resume is available <ExternalLink href="/files/resume.pdf">here</ExternalLink>.
        </p>
      </div>
    </section>
  );
}
