export const MAIN_CONTENT_ID = "main-content";

export type NavItem = {
  name: string;
  href: string;
};

export const navItems: NavItem[] = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "work", href: "/work" },
  ...(process.env.BLOG_ENABLED === "true" ? [{ name: "blog", href: "/blog" }] : []),
];
