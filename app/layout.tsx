import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DM_Sans, DM_Serif_Display } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://eetueskelinen.com"),
  title: {
    default: "Eetu Eskelinen",
    template: "%s - Eetu Eskelinen",
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
      {/* <body className={inter.className}>{children}</body> */}
      <body className="antialiased bg-[#111010]">
        <main className="mb-40 max-w-7xl flex flex-col md:flex-row mx-4 mt-12 lg:mx-auto flex-auto min-w-0 px-2 md:px-0">
          {children}
        </main>
      </body>
    </html>
  );
}
