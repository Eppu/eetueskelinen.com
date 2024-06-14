import Link from "next/link";

export const navItems = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "work", href: "/work" },
  { name: "blog", href: "/blog/" },
];

export default function Navbar() {
  return (
    <nav className="mb-12 mt-12 w-full flex justify-between items-center">
      {/* <a href="/" className="text-lg">
        Eetu Eskelinen
      </a> */}
      <div className="flex space-x-4 ">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-lg hover:transition-all hover:text-neutral-400 duration-50"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
