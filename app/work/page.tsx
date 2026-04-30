import type { Metadata } from "next";
import Title from "../components/Title";
import ExternalLink from "../components/ExternalLink";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "The work I've done during my career.",
};

interface Role {
  company: string;
  role: string;
  period: string;
  description: React.ReactNode;
}

const roles: Role[] = [
  {
    company: "Brightly",
    role: "Senior Software Developer",
    period: "2025 – Present",
    description: (
      <p>
        Brightly is a tech consultancy specializing in data-driven digital solutions that add business value. I work
        there as a senior software developer, building and maintaining digital products and services for our clients.
      </p>
    ),
  },
  {
    company: "Futurice",
    role: "Software Developer",
    period: "2021 – 2025",
    description: (
      <>
        <p>
          Futurice is one of the leading digital transformation consultancies in Europe. I worked there as a full-stack
          developer, building world-class digital products and services for our clients in various domains, like media,
          automotive and retail. I got to take part in creatings solutions to challenging problems with clients of
          varying sizes in different industries, focusing on delivering value and challenging conventions.
        </p>
        <p>
          In my role at Futurice, I worked with all sorts of technologies, from the frontend to cloud infrastructure.
          On occasion, I also worked in design and scrum master roles, depending on the project and client needs.
        </p>
      </>
    ),
  },
  {
    company: "Tampere University of Applied Sciences",
    role: "Lecturer",
    period: "2020 – 2023",
    description: (
      <>
        <p>
          Tampere University of Applied Sciences is one of the largest universities of applied sciences in Finland. I
          worked there as a part-time lecturer, teaching the basics of web development and design to students in the
          media and arts program.
        </p>
        <p>
          My work at TAMK was a great opportunity to give back to the community and help students learn the skills
          they need to succeed in the modern world. I taught hands-on courses on modern web development tools and
          techniques, as well as design principles and best practices.
        </p>
      </>
    ),
  },
  {
    company: "Kamerastore",
    role: "Lead Developer",
    period: "2018 – 2021",
    description: (
      <>
        <p>
          Kamerastore is a Finnish online store specializing in used camera gear. I worked there as a lead developer,
          building and maintaining the online store, as well as developing internal tools and integrations with
          external services. I Was in charge of running and developing the ecommerce platforms for Kameratori.fi and
          Kamerastore.com, as well as related services. I also helped with the company's marketing and branding
          efforts.
        </p>
        <p>
          I originally came into the company for a summer job, but ended up staying and eventually progressing to a
          lead position.
        </p>
      </>
    ),
  },
  {
    company: "Icona",
    role: "Founder",
    period: "2014 – 2017",
    description: (
      <>
        <p>
          Icona was a small media production agency I founded together with my college friends in 2014. I worked with
          clients in Finland and abroad, building websites and web applications for small and medium-sized businesses.
          I was in charge of the company's technical operations and development, as well as marketing and sales.
        </p>
        <p>
          Icona was a great learning experience for me, and it taught me a lot about running a business and working
          with clients. The company was eventually closed down in 2017 as we all moved on to other opportunities.
        </p>
      </>
    ),
  },
];

export default function Work() {
  return (
    <section className="flex flex-col md:py-16 max-w-7xl">
      <Title>Work</Title>
      <p className="text-xl mb-8">
        Things I've done during my career. See more on my{" "}
        <ExternalLink href="https://linkedin.com/in/eetueskelinen">LinkedIn</ExternalLink>.
      </p>
      <p className="text-lg flex items-center flex-wrap">
        Currently
        <Link
          href="/about#contact"
          className="group inline-flex items-center gap-2 border-2 border-yellowgreen px-3 py-1 rounded-2xl antialiased font-medium mx-2 hover:bg-yellowgreen hover:text-neutral-900 transition-all duration-300 ease-in-out"
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-yellowgreen opacity-75 group-hover:bg-neutral-900" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellowgreen group-hover:bg-neutral-900" />
          </span>
          available
        </Link>
        for projects.
      </p>

      <ol className="mt-14 relative border-l border-neutral-800 ml-2">
        {roles.map((entry, i) => (
          <li
            key={entry.company}
            className="relative pl-8 pb-12 last:pb-0 motion-safe:opacity-0 motion-safe:animate-fade-in-up"
            style={{ animationDelay: `${300 + i * 120}ms` }}
          >
            <span
              aria-hidden="true"
              className={`absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full border-2 border-[#080808] ${
                i === 0 ? "bg-yellowgreen shadow-[0_0_12px_2px_rgba(157,250,5,0.45)]" : "bg-neutral-700"
              }`}
            />
            {i === 0 && (
              <span
                aria-hidden="true"
                className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full bg-yellowgreen/50 motion-safe:animate-ping"
              />
            )}
            <h2 className="text-2xl font-medium">{entry.company}</h2>
            <div className="flex flex-col gap-0 text-neutral-400 text-base mb-4 mt-1">
              <p>{entry.role}</p>
              <p>{entry.period}</p>
            </div>
            <div className="text-lg font-light flex flex-col gap-3 leading-normal">{entry.description}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}
