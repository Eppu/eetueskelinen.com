import { navItems } from "./Navbar";
import Link from "next/link";
import { GithubIcon, LinkedInIcon, XIcon } from "../utils/icons";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="flex justify-between items-center h-36 w-full border-solid border-t border-neutral-800">
      <div className="flex flex-col space-y-4 items-center text-neutral-600">
        <div className="flex space-x-4  items-center w-full">
          <a
            href="https://github.com/eppu"
            className="hover:text-yellowgreenselection transition duration-150 ease-in-out"
            target="_blank"
          >
            <GithubIcon />
          </a>
          <a
            href="https://linkedin.com/in/eetueskelinen"
            className="hover:text-yellowgreenselection transition duration-150 ease-in-out"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://twitter.com/edwardtehgreat"
            className="hover:text-yellowgreenselection transition duration-150 ease-in-out"
            target="_blank"
          >
            <XIcon />
          </a>
        </div>
        <p className="text-sm">© {currentYear}. With 💚 by Eetu Eskelinen</p>
      </div>
      <div className="flex flex-col text-sm text-neutral-600">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className=" hover:transition-all hover:text-yellowgreenselection duration-50"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </footer>
  );
}
