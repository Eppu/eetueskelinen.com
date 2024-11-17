import Title from "./components/Title";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col md:py-16 justify-between max-w-7xl">
      <Title>404. Oops.</Title>
      <p className="md:text-2xl text-xl mt-8">Sorry, but it looks like you found a page that doesn't exist.</p>
      <p className="md:text-2xl text-xl mt-8">
        Maybe you'll find what you're looking for on the{" "}
        <Link
          href="/"
          className="text-yellowgreenselection 
          hover:text-yellowgreenlight

           transition-all duration-150 ease-in-out"
        >
          front page
        </Link>
        ?
      </p>
    </section>
  );
}
