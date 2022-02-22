import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, title }) {
  // Init wow.js
  useEffect(() => {
    // Hacky trick to get Wow.js to work with Next.js
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }

    new WOW.WOW().init();
  }, []);

  return (
    <>
      <Header title={title} />
      {children}
      <Footer />
    </>
  );
}
