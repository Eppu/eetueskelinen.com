"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavItem } from "../utils/constants";

type NavLinksProps = {
  items: NavItem[];
  className?: string;
  linkClassName?: string;
  activeClassName?: string;
};

function normalizePath(path: string): string {
  if (path === "/") {
    return path;
  }

  return path.replace(/\/+$/, "");
}

function isPathActive(pathname: string, href: string): boolean {
  const current = normalizePath(pathname);
  const target = normalizePath(href);

  if (target === "/") {
    return current === "/";
  }

  return current === target || current.startsWith(`${target}/`);
}

export default function NavLinks({ items, className, linkClassName, activeClassName }: NavLinksProps) {
  const pathname = usePathname() ?? "/";

  return (
    <div className={className}>
      {items.map((item) => {
        const active = isPathActive(pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`${linkClassName ?? ""} ${active ? (activeClassName ?? "") : ""}`.trim()}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
