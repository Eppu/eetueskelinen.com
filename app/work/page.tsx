import type { Metadata } from "next";
import Title from "../components/Title";
import ExternalLink from "../components/ExternalLink";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "The work I've done during my career.",
};

export default function Work() {
  return (
    <section className="flex flex-col md:py-16 max-w-7xl">
      <Title>Work</Title>
      <p className="text-xl mb-8">
        Things I've done during my career. See more on my{" "}
        <ExternalLink href="https://linkedin.com/in/eetueskelinen">LinkedIn</ExternalLink>.
      </p>
      <p className="text-lg">
        Currently
        <Link
          href="/about#contact"
          className="inline border-2 border-yellowgreen px-2 py-1 rounded-2xl antialiased font-medium mx-2 hover:bg-yellowgreen hover:text-neutral-900 transition-all duration-300 ease-in-out"
        >
          available
        </Link>
        for projects.
      </p>
      <hr className="my-10 border-neutral-800" />
      <div className="text-lg font-light flex flex-col gap-2 leading-normal">
        <h2 className="text-2xl font-medium ">Futurice</h2>
        <p className="text-neutral-400 text-base mb-2">Software Developer, 2021 - present</p>
        <p>
          Futurice is one of the leading digital transformation consultancies in Europe. I work there as a full-stack
          developer, building world-class digital products and services for our clients. I work on challenging problems
          with clients of varying sizes in different industries, focusing on delivering value and challenging
          conventions.
        </p>
        <p>
          In my work, I work with all sorts of technologies, from the frontend to cloud infrastructure. On occasion, I
          also work in design and scrum master roles, depending on the project and client needs.
        </p>
        <hr className="my-10 border-neutral-800" />
        <h2 className="text-2xl font-medium">Tampere University of Applied Sciences</h2>
        <p className="text-neutral-400 text-base mb-2">Lecturer, 2020 - 2023</p>
        <p>
          Tampere University of Applied Sciences is one of the largest universities of applied sciences in Finland. I
          worked there as a part-time lecturer, teaching the basics of web development and design to students in the
          media and arts program.
        </p>
        <p>
          My work at TAMK was a great opportunity to give back to the community and help students learn the skills they
          need to succeed in the modern world. I taught hands-on courses on modern web development tools and techniques,
          as well as design principles and best practices.
        </p>
        <hr className="my-10 border-neutral-800" />
        <h2 className="text-2xl font-medium">Kamerastore</h2>
        <p className="text-neutral-400 text-base mb-2">Lead Developer, 2018 - 2021</p>
        <p>
          Kamerastore is a Finnish online store specializing in used camera gear. I worked there as a lead developer,
          building and maintaining the online store, as well as developing internal tools and integrations with external
          services. I Was in charge of running and developing the ecommerce platforms for Kameratori.fi and
          Kamerastore.com, as well as related services. I also helped with the company's marketing and branding efforts.
        </p>
        <p>
          I originally came into the company for a summer job, but ended up staying and eventually progressing to a lead
          position.
        </p>
        <hr className="my-10 border-neutral-800" />
        <h2 className="text-2xl font-medium">Icona</h2>
        <p className="text-neutral-400 text-base mb-2">Founder, 2014 - 2017</p>
        <p>
          Icona was a small media production agency I founded together with my college friends in 2014. I worked with
          clients in Finland and abroad, building websites and web applications for small and medium-sized businesses. I
          was in charge of the company's technical operations and development, as well as marketing and sales.
        </p>
        <p>
          Icona was a great learning experience for me, and it taught me a lot about running a business and working with
          clients. The company was eventually closed down in 2017 as we all moved on to other opportunities.
        </p>
      </div>
    </section>
  );
}
