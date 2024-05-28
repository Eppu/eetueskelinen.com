import type { Metadata } from "next";
import Title from "../components/Title";

export const metadata: Metadata = {
  title: "Work",
  description: "The work I've done during my career.",
};

export default function Work() {
  return (
    <section className="flex flex-col md:py-16 max-w-7xl">
      <Title>Work</Title>
      <p className="text-xl">The work I've done during my career.</p>
      <hr className="my-10 border-neutral-800" />
      {/* <div className="grid md:grid-cols-[5fr_3fr] items-center"> */}
      <div className="text-lg font-light flex flex-col gap-2 leading-normal">
        {/* <div className="flex flex-col gap-2 text-lg font-light"> */}
        <h2 className="text-2xl font-medium ">Futurice</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base mb-2">Software Developer, 2021 - present</p>
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
        <h2 className="text-2xl font-medium">Kamerastore</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base mb-2">Lead Developer, 2018 - 2021</p>
        <p>
          <a href="https://kamerastore.com" target="_blank" className="text-neutral-400 hover:underline">
            Kamerastore
          </a>{" "}
          is a Finnish online store specializing in used camera gear. I worked there as a lead developer, building and
          maintaining the online store, as well as developing internal tools and integrations with external services. I
          Was in charge of running and developing the ecommerce platforms for Kameratori.fi and Kamerastore.com, as well
          as related services. I also helped with the company's marketing and branding efforts.
        </p>
        <p>
          I originally came into the company for a summer job, but ended up staying and eventually progressing to a lead
          position.
        </p>
      </div>
    </section>
  );
}
