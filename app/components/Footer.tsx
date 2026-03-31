import { navItems } from "../utils/constants";
import Link from "next/link";
import { GithubIcon, LinkedInIcon, XIcon } from "../utils/icons";

const currentYear = new Date().getFullYear();
const socialLinks = [
  {
    href: "https://github.com/eppu",
    label: "GitHub",
    Icon: GithubIcon,
  },
  {
    href: "https://linkedin.com/in/eetueskelinen",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
  {
    href: "https://twitter.com/edwardtehgreat",
    label: "X",
    Icon: XIcon,
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 grid w-full gap-8 border-t border-neutral-800/90 pb-10 pt-8 md:grid-cols-2 md:items-end">
      <div className="flex flex-col gap-4 text-mutedink">
        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              className="transition-colors duration-150 hover:text-yellowgreenselection"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>
        <p className="text-sm">© {currentYear}. With love by Eetu Eskelinen</p>
      </div>
      <div className="flex flex-wrap items-center gap-4 text-sm text-mutedink md:justify-end">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="capitalize transition-colors duration-150 hover:text-yellowgreenselection"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </footer>
  );
}
