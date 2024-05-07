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
            I'm a frontend focused full-stack developer, product engineer and designer excited by building products that
            make a difference.
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
            I currently work at{" "}
            <a
              href="https://futurice.com"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:underline"
            >
              Futurice
            </a>{" "}
            as a full-stack developer.
          </p>
        </div>
        <div className="md:ml-8 lg:max-w-96">
          {/* <img src="/images/eetu2.jpg" alt="Eetu Eskelinen" className="rounded-lg" /> */}
          <Image src={randomImage} alt="Eetu Eskelinen" width={1000} height={100} className="rounded-lg" />
        </div>
      </div>

      <div className="mt-16 md:mt-32 md:text-xl text-xl font-light flex flex-col gap-8">
        <h2 className={`${playfairDisplay.className} md:text-3xl text-2xl font-light mb-2`}>A little bit about me</h2>
        <p>
          I'm currently based in Tampere, Finland, and have been working in the software industry since 2014. In my
          work, I have skills and experience spanning most aspects of design and engineering, allowing me to shepherd
          ideas from concept to mock, prototype, and ultimately, functional world-class end products.
        </p>
        <p>
          I'm furiously passionate about understanding the big picture, the small details, and everything in between. I
          love to learn and am always looking for ways to improve my skills and knowledge. Along with keeping my tech
          skills up to date, I'm also interested in psychology, philosophy and anthropology.
        </p>
        <p>
          In my life outside of work, I find joy in making and playing music 🥁, taking photos with film cameras 📸 and
          hitting the open road on my motorcycle 🏍️.
        </p>
      </div>

      <div className="mt-16 md:mt-32 md:text-xl text🥁-xl font-light flex flex-col gap-8">
        <h2 className={`${playfairDisplay.className} md:text-3xl text-2xl font-light mb-2`}>On work</h2>
        <p>
          Throughout my career I've gotten to work on tons of interesting business problems, lead remote teams, and
          collaborate with some of the most talented individuals in the industry. I've worked with clients ranging from
          small startups to large corporations across various industries.
        </p>
        <p>
          The one thing common with every project I've worked on has been the focus on the user. I believe there is no
          substitute for understanding the people who will use the products we build. After all, what's the purpose of
          building something if it fails to solve a problem for someone or doesn't resonate with their needs?
        </p>
        <p>
          The intersection of design and technology is where I feel most at home. I'm passionate about creating
          experiences that are intuitive, delightful and accessible. I'm all for championing the user, but also
          understand and consider the importance of the business side of things, as well as the technical aspects of
          building world-class software.
        </p>
      </div>

      <div className="mt-16 md:mt-32">
        <h2 className={`${playfairDisplay.className} md:text-3xl text-2xl font-light mb-8`}>Get in touch</h2>
        <p className="md:text-xl text-xl font-light">
          I'm always open to hearing about new opportunities, projects or just to chat. Feel free to reach out to me at{" "}
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
