import Layout from "../../src/components/layout";
import { useEffect } from "react";

export default function Kamerastore() {
  let contentContainer, sidebarNav;

  useEffect(() => {
    contentContainer = document.getElementById("content_container");
    sidebarNav = document.querySelector(".sidenav");
    window.addEventListener("scroll", handleScroll);

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    let distanceFromContent = contentContainer.getBoundingClientRect().top;
    if (distanceFromContent < 0) {
      sidebarNav.style.position = "fixed";
      sidebarNav.style.top = "80px";
    } else {
      sidebarNav.style.position = "inherit";
      sidebarNav.style.top = "auto";
    }
  };

  return (
    <Layout title="Kamerastore">
      <div className="grey_bg"></div>
      <div className="white_bg"></div>
      <div className="proj_body_container">
        <div className="row">
          <div className="col-xs-12">
            <div className="title_highlight"></div>
            <h1 id="main_content" className="proj_title">
              Kamerastore
            </h1>
          </div>
        </div>
        <div className="row image_div">
          <img
            id="header_img"
            src="../images/kamerastore/kameratori-cover.png"
            alt="A screenshot of the Kamerastore.com website"
          />
        </div>
        <div className="row">
          <div className="col-xs-0 col-md-4"></div>
          <div className="summary_body col-xs-12 col-md-4">
            <div className="row">
              <p>
                <span>Timeline:</span> <span>May 2018 - Present</span>
              </p>
            </div>
            <div className="row">
              <p>
                <span>Project Type:</span> <span>Part-time</span>
              </p>
            </div>
            <div className="row">
              <p>
                <span>My Role:</span> <span>Lead Developer, UX Engineer</span>
              </p>
            </div>
            <div className="row">
              <p>
                <span>Tools:</span>
                <span>WordPress & WooCommerce, PHP, HTML/CSS, Vue, React, AWS etc.</span>
              </p>
            </div>
            <div className="row">
              <p>
                <span>Skills:</span> <span>Project management, team management, full-stack development</span>
              </p>
            </div>
            <div className="row">
              <p>
                <span id="final_link">
                  <a href="https://kamerastore.com" target="_blank">
                    <u>Open</u>
                    <i className="fa fa-link" aria-hidden="true" style={{ color: "black" }}></i>
                  </a>
                </span>
              </p>
            </div>
            <div className="col-xs-0 col-md-4"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1 col-xs-0"></div>
          <div className="col-md-10 col-xs-12">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-2 col-xs-0">
                <ul className="sidenav">
                  <a data-scroll href="#context">
                    <li>Context</li>
                  </a>
                  <a data-scroll href="#my_role">
                    <li>My role</li>
                  </a>
                  <a data-scroll href="#projects">
                    <li>Projects</li>
                  </a>
                </ul>
              </div>
              <div id="content_container" className="col-lg-6 col-md-6 col-sm-7 col-xs-12">
                <div className="row">
                  <div className="col-xs-0 col-md-1"></div>
                  <div className="col-xs-12 col-md-10">
                    <h2 id="context">Context</h2>
                    <p className="block_quote">
                      Kameratori.fi / Kamerastore.com is the largest provider of used cameras and camera accessories in
                      Europe.
                      <br />
                      <br />
                      The site serves about 70 000 monthly visitors. Their mission is to offer photography enthusiasts
                      and professionals an easy and reliable place to purchase and sell gear.
                    </p>

                    <h2 id="my_role">My role</h2>
                    <h4>Building up the future of analog photography</h4>
                    <p>
                      <b>
                        I used to work as a lead developer on the Kamerastore website. I also built internal tools, and
                        ran a few other tech projects on the side, like{" "}
                        <a target="_blank" href="https://camerarescue.org">
                          camerarescue.org
                        </a>
                      </b>
                      .
                    </p>
                    <p>
                      My main duties included leading internal and user-facing software efforts, as well as conducting
                      user research on the site's interaction design and functionality in order to offer the users a web
                      experience that's worthwile and valuable.
                    </p>
                    <p>
                      My role entailed a good deal of higher-level product thinking (market fit, user need, etc.), as
                      well as leadership as I used to head a small international development team working on services
                      around the webshop.
                    </p>

                    <h2 id="projects">Projects</h2>
                    <p>
                      During my time at Kamerastore, there were multiple exciting, ongoing projects in the company. The
                      most prominent one, of course, being the web store{" "}
                      <a href="https://kamerastore.com">Kamerastore.com</a> and its various improvements.
                    </p>
                    <p>
                      Unfortunately I can't disclose much about other projects I used to work on, but{" "}
                      <b>
                        do <a href="mailto:hello@eetueskelinen.com">shoot me an email</a> if you want to discuss more
                      </b>
                      !
                    </p>

                    <div className="row thanks">
                      <div className="col-xs-12">
                        <div className="line"></div>
                      </div>
                      <div className="col-xs-12">
                        <h2>Thanks for scrolling!</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-0 col-md-1"></div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-2 col-xs-0"></div>
            </div>
          </div>
          <div className="col-md-1 col-xs-0"></div>
        </div>
      </div>

      <div className="row footer"></div>
    </Layout>
  );
}
