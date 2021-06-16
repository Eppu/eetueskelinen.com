import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "./components/layout";

export default function About() {
  return (
    <div className="page-overflow-container">
      <Layout className="project-layout">
        <div className="grey-bg animate__animated animate__fadeIn"></div>
        <div className="navbar_container"></div>
        <div className="white_bg"></div>
        <div className="proj_body_container">
          <div className="row">
            <div className="col-xs-12">
              <div className="title_highlight"></div>
              <h1 className="about_title">About me</h1>
            </div>
          </div>
          <div
            className="row image_div animate__animated fadeInUpSmall"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {" "}
            {/* Handle next/image */}
            {/* <img id="header_img" src="/images/000004.jpg" className="profile_img animate__animated fadeInUpSmall"
					alt="Eetu Eskelinen being photographed on a large format camera" /> */}
            <Image
              width="1031.35"
              height="836.533"
              priority="true"
              id="header_img"
              src="/images/000004.jpg"
              className="profile_img "
              alt="Eetu Eskelinen being photographed on a large format camera"
            />
          </div>
          <div className="row">
            <div className="col-xs-0 col-md-4"></div>
          </div>
          <div className="row">
            <div className="col-md-1 col-xs-0"></div>
            <div className="col-md-10 col-xs-12">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-2 col-xs-0"></div>
                <div id="content_container" className="col-lg-6 col-md-6 col-sm-7 col-xs-12">
                  <div className="row">
                    <div className="col-xs-0 col-md-1"></div>
                    <div className="col-lg-12 animate__animated fadeInUpSmall" id="about-text">
                      <h2 className="animate__animated fadeinUpSmall">A little about me</h2>
                      <h4 className="wow animate__animated fadeInUpSmall">
                        I'm a designer and developer born and raised in the freezing woods of Northern Finland,
                        currently living in Tampere.
                      </h4>
                      <p className="wow animate__animated fadeInUpSmall delay-50ms">
                        I'm driven by a fascination with bleeding-edge tech, and intuitive, delightful design. The magic
                        of using something that <b>just works</b>.
                      </p>

                      <p className="wow animate__animated fadeInUpSmall delay-100ms">
                        I have skills and experiences spanning design and engineering that allow me to take ideas from
                        concept to mock to prototype to, ultimately, <b>functional end products</b>.
                      </p>

                      <p className="wow animate__animated fadeInUpSmall delay-250ms">
                        In my life as a human, I love making music 🎵, taking photos with film cameras 📷 and{" "}
                        <i>[insert designer bio staple like "artisan ____", or meditation]</i>. Oh, and I also make some
                        kickass pizza 🍕.
                      </p>
                      <p className="wow animate__animated fadeInUpSmall delay-500ms">
                        I love combining my design and technological backgrounds in the role of a <b>UX engineer</b>.
                      </p>
                      <br />
                      <h2 className="wow animate__animated fadeInUpSmall">Interests</h2>
                      <div className="wow animate__animated fadeInUpSmall">
                        <p>
                          Currently, I’m particularly interested in <b>interaction design</b>, immersion within the web
                          space and creative applications of technology in social applications.
                        </p>
                        <p>
                          I'm also a heavy advocate of <b>ethical UX design</b>.
                        </p>
                        <p>I'm always up for a chat! 🤟</p>
                        <br />
                      </div>
                      <div className="wow animate__animated fadeInUpSmall">
                        <h2>Actual skills</h2>
                        <p>
                          <i>"Wait, so what does he actually do?"</i>
                        </p>{" "}
                        <br />
                        <p>
                          Let me try to explain briefly, without paragraphs upon paragraphs of self-gratuitous
                          mumbo-jumbo.
                        </p>
                        <br />
                        <br />
                        <div className="protrude_container">
                          <div className="row">
                            <div className="col-xs-12 col-sm-6 wow animate__animated fadeInUpSmall">
                              <div className="stat_number">Design</div>

                              <ul className="skill-list">
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  UX Design
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  User-Centered Design
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  Interaction Design
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  Accessibility
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  User Testing
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  UX Research
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  Prototyping
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  Figma
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  InVision Studio
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  Sketch
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  Adobe Suite
                                </li>
                              </ul>
                            </div>
                            <div className="col-xs-12 col-sm-6 wow animate__animated fadeInUpSmall delay-250ms">
                              <div className="stat_number">Engineering</div>
                              <ul className="skill-list">
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  JavaScript
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  Vue
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  React
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  HTML5
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  CSS3
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  PHP
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  WordPress
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  C#
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  MongoDB
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  Node.js
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  SQL
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  Firebase
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  AWS
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  Netlify
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  REST APIs
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xs-12 col-sm-12 wow animate__animated fadeInUpSmall delay-500ms">
                              <div className="stat_number">General</div>
                              <ul className="skill-list">
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  Web Dev
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  Web Design
                                </li>

                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  Mobile Development
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  Rapid Prototyping
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  Game Development
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  Web Apps
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  Scrum
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  Agile
                                </li>
                                <li
                                  className="card round  bounceIn wow animated"
                                  style={{ visibility: "visible", animationName: "bounceIn" }}
                                >
                                  Team Leading
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <br />
                        <h2 className="wow animate__animated fadeInUpSmall">Contact</h2>
                        <p className="wow animate__animated fadeInUpSmall">
                          You can always reach me via my email,{" "}
                          <a href="mailto:hello@eetueskelinen.com">hello@eetueskelinen.com</a>.
                          <br />
                          If you're a headhunter, shoot me an email instead of calling, please.
                        </p>
                        <p className="wow animate__animated fadeInUpSmall">
                          If you'd prefer, you can also find my musings on{" "}
                          <a target="_blank" rel="noreferrer" href="https://twitter.com/edwardtehgreat">
                            Twitter
                          </a>
                          , as well as{" "}
                          <a target="_blank" rel="noreferrer" href="https://instagram.com/eppu">
                            Instagram
                          </a>
                          .
                        </p>
                        <p className="wow animate__animated fadeInUpSmall">
                          If you're one for a mean CV,{" "}
                          <a href="files/resume.pdf" target="_blank">
                            look no further
                          </a>
                          .
                        </p>
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
        </div>
      </Layout>
    </div>
  );
}
