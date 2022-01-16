import Head from "next/head";
import Link from "next/link";

export default function Header({ title }) {
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
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="/scripts/parallax.min.js"></script>

        {/* Mess with wowjs later */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
        <script src="/scripts/script.js" type="text/javascript"></script>
      </Head>
      <div className="navbar_container animate__animated animate__fadeIn">
        <a className="skip-nav-link" href="#main_content">
          Jump to content
        </a>
        <div id="progress_bar"></div>
        <div className="row navbar" style={{ maxWidth: "1000px", margin: "auto" }}>
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
