// import { useState } from "react";
// import WOW from "wowjs";
// Mess with wowjs later https://nextjs.org/docs/advanced-features/dynamic-import
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  // Init wow.js
  // React.useEffect(() => {
  //   new WOW().init()
  // });

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
