import Head from "next/head";
import Script from "next/script";

export default function Header({ title }) {
  const titleToDisplay = title ? "- " + title : "";
  return (
    <>
      <Head>
        <title>Eetu Eskelinen {titleToDisplay}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
        <meta
          name="description"
          content="Eetu Eskelinen is a UX Engineer and software developer currently based in Tampere, Finland."
        />
        <meta property="og:title" content={`Eetu Eskelinen ${titleToDisplay}`} />
        <meta
          property="og:description"
          content="Eetu Eskelinen is a UX Engineer and software developer currently based in Tampere, Finland."
        />
        <meta property="og:image" content="/images/og_image.jpg" />
        <link rel="shortcut icon" href="/icons/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/icons/favicon.ico" type="image/x-icon" />
      </Head>
      <Script strategy="afterInteractive" src="/scripts/script.js" type="text/javascript"></Script>
    </>
  );
}
