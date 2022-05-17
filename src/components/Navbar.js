import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      setIsScrolled((isScrolled) => {
        if (!isScrolled && (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)) {
          return true;
        }

        if (isScrolled && document.body.scrollTop < 80 && document.documentElement.scrollTop < 80) {
          return false;
        }

        return isScrolled;
      });
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { title: "About", path: "/about" },
    { title: "Music", path: "/music" },
    { title: "Etc", path: "/etc" },
  ];

  return (
    <>
      <div
        className="navbar_container animate__animated animate__fadeIn"
        style={{
          boxShadow: isScrolled ? "0 0 10px rgba(0, 0, 0, 0.2)" : "0 0 10px rgba(0, 0, 0, 0)",
          backgroundColor: isScrolled ? "white" : "rgba(250, 250, 250, 0)",
        }}
      >
        <a className="skip-nav-link" href="#main_content">
          Jump to content
        </a>
        <div id="progress_bar"></div>
        <div
          className="row navbar"
          style={{
            maxWidth: "1000px",
            margin: "auto",
            paddingTop: isScrolled ? "20px" : "30px",
            paddingBottom: isScrolled ? "20px" : "30px",
          }}
        >
          <div id="logo_cont" className="col-xs-5">
            <Link href="/">Eetu Eskelinen</Link>
          </div>
          <div id="nav_links" className="col-xs-7" style={{ zIndex: 9999 }}>
            {navLinks.map((link) => (
              <Link href={link.path} key={link.title}>
                <a>{router.pathname === link.path ? <span className="active">{link.title}</span> : link.title}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
