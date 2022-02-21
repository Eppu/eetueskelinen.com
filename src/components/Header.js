import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header({ title }) {
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

  return (
    <>
      <Head>
        <title>Eetu Eskelinen {title ? "- " + title : ""}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
        <meta
          name="description"
          content="Eetu Eskelinen is a UX Engineer and software developer currently based in Tampere, Finland."
        />
        <meta property="og:title" content={`Eetu Eskelinen - ${title}`} />
        <meta
          property="og:description"
          content="Eetu Eskelinen is a UX Engineer and software developer currently based in Tampere, Finland."
        />
        <meta property="og:image" content="/images/og_image.jpg" />
        <link rel="shortcut icon" href="/icons/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/icons/favicon.ico" type="image/x-icon" />
        <script strategy="afterInteractive" src="/scripts/script.js" type="text/javascript"></script>
      </Head>
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
            <Link href="/about">About</Link>
            <Link href="/music">Music</Link>
            <Link href="/etc">Etc</Link>
          </div>
        </div>
      </div>
    </>
  );
}
