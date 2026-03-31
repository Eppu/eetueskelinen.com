import type { Metadata } from "next";
import Title from "../components/Title";
import ExternalLink from "../components/ExternalLink";
import Link from "next/link";

type Experience = {
  company: string;
  role: string;
  period: string;
  description: string[];
};

const experiences: Experience[] = [
  {
    company: "Brightly",
    role: "Senior Software Developer",
    period: "2025 - Present",
    description: [
      "Brightly is a tech consultancy specializing in data-driven digital solutions that add business value.",
      "I build and maintain digital products and services for clients, with a focus on practical impact and long-term maintainability.",
    ],
  },
  {
    company: "Futurice",
    role: "Software Developer",
    period: "2021 - 2025",
    description: [
      "At Futurice, I built digital products and services for clients in domains like media, automotive, and retail.",
      "I worked across frontend, backend, and cloud infrastructure, and occasionally supported design and scrum master responsibilities depending on project needs.",
    ],
  },
  {
    company: "Tampere University of Applied Sciences",
    role: "Lecturer",
    period: "2020 - 2023",
    description: [
      "I taught web development and design fundamentals for students in the media and arts program.",
      "The role let me give back through hands-on courses about modern tools, practical workflows, and design best practices.",
    ],
  },
  {
    company: "Kamerastore",
    role: "Lead Developer",
    period: "2018 - 2021",
    description: [
      "I led development of the ecommerce platforms for Kameratori.fi and Kamerastore.com and built internal tools and integrations.",
      "Alongside engineering work, I also contributed to marketing and branding efforts as the company scaled.",
    ],
  },
  {
    company: "Icona",
    role: "Founder",
    period: "2014 - 2017",
    description: [
      "I co-founded a small media production agency, delivering websites and web apps for clients in Finland and abroad.",
      "Running Icona taught me end-to-end product delivery, client collaboration, and the business side of software work.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Work",
  description: "The work I've done during my career.",
};

export default function Work() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col md:py-16">
      <Title>Work</Title>
      <p className="mb-8 max-w-3xl text-lg text-mutedink md:text-xl">
        Things I've done during my career. See more on my{" "}
        <ExternalLink href="https://linkedin.com/in/eetueskelinen">LinkedIn</ExternalLink>.
      </p>
      <p className="text-lg text-mutedink">
        Currently
        <Link
          href="/about#contact"
          className="mx-2 inline rounded-2xl border border-yellowgreen px-2 py-1 font-medium text-yellowgreen transition-all duration-200 ease-in-out hover:bg-yellowgreen hover:text-neutral-900"
        >
          available
        </Link>
        for projects.
      </p>
      <ol className="mt-12 flex flex-col gap-6">
        {experiences.map((experience) => (
          <li key={experience.company}>
            <article className="rounded-2xl border border-neutral-800/90 bg-surface/40 p-6 transition-colors duration-200 hover:border-yellowgreen/40 hover:bg-surface/80 md:p-8">
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h2 className="text-2xl font-medium text-ink">{experience.company}</h2>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-mutedink md:text-sm">
                  {experience.period}
                </p>
              </div>
              <p className="mt-2 text-base font-medium text-yellowgreenlight">{experience.role}</p>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-mutedink md:text-lg">
                {experience.description.map((paragraph, index) => (
                  <p key={`${experience.company}-${index}`}>{paragraph}</p>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
