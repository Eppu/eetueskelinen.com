"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../utils/nav";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="mb-12 mt-12 w-full flex justify-between items-center">
      <div className="flex space-x-4">
        {navItems.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`relative text-lg transition-colors duration-150 ease-out ${
                isActive ? "text-neutral-100" : "text-neutral-400 hover:text-neutral-100"
              }`}
            >
              {item.name}
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute -bottom-1 left-0 right-0 mx-auto h-px bg-yellowgreen origin-center transition-transform duration-200 ease-out ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
