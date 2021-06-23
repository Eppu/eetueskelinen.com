import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../public/files/astronaout.json";
import Layout from "../src/components/layout";
import Link from "next/link";

export default function Custom404() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      renderer: "svg",
    },
  };
  return (
    <Layout>
      <div className="navbar_container"></div>

      <div style={{ height: "100vh", display: "flex" }}>
        <div className="hero">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div id="lottie" className="animate__animated animate__rotateInUpLeft">
                  <Lottie options={defaultOptions} />
                </div>
              </div>
              <div className="col-sm">
                <h3 style={{ fontFamily: "Epilogue, sans-serif" }}>Oops!</h3>
                <p className="animate__animated animate__fadeIn">The page you were looking for couldn't be found.</p>
                <p className="animate__animated animate__fadeIn">
                  Try heading back to the{" "}
                  <span className="kt_header_link">
                    <Link href="/">
                      <a>home page</a>
                    </Link>
                  </span>{" "}
                  instead!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
