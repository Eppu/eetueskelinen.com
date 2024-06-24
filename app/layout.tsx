import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import { dmSans } from "./utils/fonts";
import "./globals.css";

import { MAIN_CONTENT_ID } from "./utils/constants";
import SkipToContentLink from "./components/SkipToContentLink";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://eetueskelinen.com"),
  title: {
    default: "Eetu Eskelinen",
    template: "%s – Eetu Eskelinen",
  },
  description: "Eetu Eskelinen is a software developer and UX engineer based in Tampere, Finland.",
  openGraph: {
    title: "Eetu Eskelinen",
    description: "Eetu Eskelinen is a software developer and UX engineer based in Tampere, Finland.",
    url: "https://eetueskelinen.com",
    siteName: "Eetu Eskelinen",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Eetu Eskelinen",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.className}>
      <body className="antialiased bg-[#080808]">
        <div className="max-w-7xl flex flex-col min-h-screen mx-4 md:px-16 lg:mx-auto flex-auto min-w-0 pb-2">
          <SkipToContentLink />
          <Navbar />
          <main id={MAIN_CONTENT_ID} className="mb-40 flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
