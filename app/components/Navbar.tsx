import { navItems } from "../utils/constants";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <nav className="mb-12 mt-10 flex w-full items-center justify-between border-b border-neutral-900/80 pb-5">
      <NavLinks
        items={navItems}
        className="flex flex-wrap items-center gap-4 md:gap-6"
        linkClassName="text-base capitalize text-mutedink transition-colors duration-150 hover:text-ink md:text-lg"
        activeClassName="text-ink"
      />
    </nav>
  );
}
