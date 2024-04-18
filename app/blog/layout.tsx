import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DM_Sans, DM_Serif_Display } from "next/font/google";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="max-w-3xl mb-40 md:flex-row mt-8 lg:mx-auto">
      <div className="flex-auto min-w-0">{children}</div>
    </section>
  );
}
