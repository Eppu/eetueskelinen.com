import Link from "next/link";
export default function Navbar() {
  return (
    <nav
      className="mb-12 mt-8 w-full flex justify-between items-center"
      // className="flex justify-between items-center max-w-7xl mx-4 mt-12 lg:mx-auto"
    >
      {/* <a href="/" className="text-lg">
        Eetu Eskelinen
      </a> */}
      <div className="flex space-x-4">
        <Link href="/" className="text-lg">
          home
        </Link>
        <Link href="/blog" className="text-lg">
          about
        </Link>
        <Link href="/about" className="text-lg">
          work
        </Link>
        <Link href="/blog/mypost" className="text-lg">
          blog
        </Link>
      </div>
    </nav>
  );
}
