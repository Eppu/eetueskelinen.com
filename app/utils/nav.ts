export const navItems = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "work", href: "/work" },
  ...(process.env.BLOG_ENABLED === "true" ? [{ name: "blog", href: "/blog" }] : []),
];
