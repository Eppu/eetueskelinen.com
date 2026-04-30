import { navItems } from "../utils/nav";
import Link from "next/link";
import { GithubIcon, LinkedInIcon, XIcon } from "../utils/icons";
import ClickableHeart from "./ClickableHeart";

const currentYear = new Date().getFullYear();

const socialIconClasses =
  "inline-block text-neutral-600 hover:text-yellowgreenselection hover:-translate-y-0.5 transition-all duration-200 ease-out";

export default function Footer() {
  return (
    <footer className="relative flex justify-between items-center h-36 w-full">
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"
      />
      <div className="flex flex-col space-y-4 items-center text-neutral-600">
        <div className="flex space-x-4  items-center w-full">
          <a href="https://github.com/eppu" className={socialIconClasses} target="_blank" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a
            href="https://linkedin.com/in/eetueskelinen"
            className={socialIconClasses}
            target="_blank"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://twitter.com/edwardtehgreat"
            className={socialIconClasses}
            target="_blank"
            aria-label="X (Twitter)"
          >
            <XIcon />
          </a>
        </div>
        <p className="text-sm inline-flex items-center gap-1.5">
          <span>© {currentYear}. With</span>
          <ClickableHeart />
          <span>by Eetu Eskelinen</span>
        </p>
      </div>
      <div className="flex flex-col text-sm text-neutral-600">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition-colors duration-200 ease-out hover:text-yellowgreenselection"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </footer>
  );
}
