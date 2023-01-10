import Layout from "../../src/components/layout";
import { useEffect } from "react";

export default function Slush() {
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
    <Layout title="Slush">
      <div className="grey-bg"></div>
      <div className="white_bg"></div>
      <div className="proj_body_container">
        <div className="row">
          <div className="col-xs-12">
            <div className="title_highlight"></div>
            <h1 id="main_content" className="proj_title">
              Slush
            </h1>
          </div>
        </div>
        <div className="row image_div">
          <img id="header_img" src="../images/slush/slush.jpg" alt="The main stage of Slush Helsinki 2018" />
        </div>
        <div className="row">
          <div className="col-xs-0 col-md-4"></div>
          <div className="summary_body col-xs-12 col-md-4">
            <div className="row summary_info">
              <p>
                <span>Timeline:</span> <span>Sept 2018 - Dec 2018 and Sept 2019 - Dec 2019</span>
              </p>
            </div>
            <div className="row">
              <p>
                <span>Type:</span> <span style={{ textAlign: "right" }}>Volunteer</span>
              </p>
            </div>
            <div className="row">
              <p>
                <span>Role:</span> <span>Developer, UX Designer</span>
              </p>
            </div>
            <div className="row">
              <p>
                <span>Tools:</span> <span>Vue, TypeScript, Figma</span>
              </p>
            </div>
            <div className="row">
              <p>
                <span>Skills:</span> <span>Interaction Design, Front-End Development, Prototyping</span>
              </p>
            </div>
            <div className="row">
              <p>
                <span id="final_link">
                  <a href="https://www.slush.org/" target="_blank" rel="noopener nofollow">
                    <u>Learn more about Slush</u>
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
                  <a data-scroll href="#problem">
                    <li>Problem</li>
                  </a>
                  <a data-scroll href="#solution">
                    <li>Solution</li>
                  </a>
                  <a data-scroll href="#process">
                    <li>Process</li>
                  </a>
                  <a data-scroll href="#research">
                    <li className="subnav">1. Research</li>
                  </a>
                  <a data-scroll href="#brainstorming">
                    <li className="subnav">2. Brainstorming</li>
                  </a>
                  <a data-scroll href="#hackathon_prototype">
                    <li className="subnav">3. Hackathon prototype</li>
                  </a>
                  <a data-scroll href="#feedback">
                    <li className="subnav">4. Feedback</li>
                  </a>
                  <a data-scroll href="#completed_redesign">
                    <li className="subnav">5. Completed redesign</li>
                  </a>
                  <a data-scroll href="#outcome">
                    <li>Outcome</li>
                  </a>
                  <a data-scroll href="#learnings">
                    <li>Learnings</li>
                  </a>
                </ul>
              </div>
              <div id="content_container" className="col-lg-6 col-md-6 col-sm-7 col-xs-12">
                <div className="row">
                  <div className="col-xs-0 col-md-1"></div>
                  <div className="col-xs-12 col-md-10" style={{ scrollBehavior: "smooth" }}>
                    <h2 id="context">Context</h2>
                    <p className="block_quote">
                      Slush is the world's leading startup event, where 20,000 tech-heads come together.{" "}
                      <b>
                        Over 100,000 meeting requests were made with their Matchmaking software in three days, during
                        Slush 2018
                      </b>
                      .
                    </p>
                    <br />
                    <div className="protrude_container">
                      <div className="iframe-container">
                        <div style={{ padding: "42.4% 0 0 0", position: "relative" }}>
                          <iframe
                            src="https://player.vimeo.com/video/354916998?color=c9f364&byline=0"
                            style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <script src="https://player.vimeo.com/api/player.js"></script>
                      </div>
                    </div>
                    <h2 id="my_role">My role</h2>
                    <p>
                      I was lucky enough to be a part of the <b>product team</b> of Slush during 2018 and 2019.
                    </p>
                    <p>
                      My team was tasked to <b>improve the user experience of Slush's Matchmaking app</b>. Techincally,
                      I was a web developer, but in reality everything I did was more in the realms of UX engineering.{" "}
                      <b>From design, to programming, to prototyping</b> and so forth.
                    </p>

                    <h2 id="problem">Problem</h2>
                    <img src="../images/slush/slush-matchmaking-old.png" />
                    <p className="img_caption">The old Slush Matchmaking app</p>
                    <p>
                      In 2017, Slush released their Matchmaking app. 2,600 startups and 1,600 registered investors
                      pre-booked over <b>10,000 meetings that were held during the event in 2017</b>.
                    </p>
                    <p>
                      In 2018, Slush wanted to <b>increase that amount by tenfold</b>.
                    </p>
                    <p>
                      The task: <b>improve the user experience, to make users want to use Matchmaking</b>.
                    </p>

                    <h2 id="solution">Solution</h2>
                    <h3>Clarify, simplify, engage.</h3>
                    <div className="protrude_container">
                      <img src="../images/slush/slush-matchmaking.png" />
                      <p className="img_caption">The redesigned Slush Matchmaking app for the 2018 event</p>
                    </div>

                    <h2 id="process">Process</h2>
                    <h3 id="research">1. Research</h3>
                    <p>
                      Before I came into the product team, user research about the app's usability issues and other
                      quirks had already been conducted.
                    </p>
                    <p>
                      The results were quite clear: people didn't like using it, because it was unclear, looked old, and
                      didn't really offer any incentive to use it.
                    </p>
                    <p>
                      Incentivizing something that's not really a key part of something like an event is super
                      improtant, if you want to get people using it.
                    </p>
                    <p>
                      The bottom line of the research was, that{" "}
                      <b>people love the idea, but the execution is a bit lackluster</b>.
                    </p>

                    <h3 id="brainstorming">2. Brainstorming</h3>
                    <p>
                      The team and I sat down in a glass-walled conference room, and began jotting down ideas on a
                      whiteboard.
                    </p>
                    <p>
                      What did the users want? We knew they liked the idea, we just needed to come up with ways to make
                      them want to use the app.
                    </p>
                    <p>
                      We knew that we would have to change the visual side of the app, to reduce unneeded friction
                      between our bleeding-edge tech-head users, and our clunky old UI.
                    </p>
                    <p>
                      Still, that wasn't quite enough to entice users to use the app in our opinion. But what would be?
                      We even threw around ideas about implementing a Discord bot, until we came to a few solutions:
                    </p>
                    <ul>
                      <li>
                        <b>Gamify the app</b>, allowing users to earn an Active User symbol on their Matchmaking card.
                      </li>
                      <li>
                        <b>Different meeting types</b> could be added, since a lot of our users aren't VC's or Startups,
                        and might want to have meetings that aren't surrounded by business.
                      </li>
                      <li>
                        <b>Make requesting a meeting fast</b> so that users don't have to dwell on the site, and try
                        different links to find their way around.
                      </li>
                      <li>
                        <b>Consistency</b> needs to be improved, to make navigation easier for the users.
                      </li>
                    </ul>

                    <h3 id="hackathon_prototype">3. Hackathon prototype</h3>
                    <p>
                      In September 2018 me and the web development team held a hackathon, where we separated into
                      different teams and tried to come up with solutions to different kinds of problems surrounding the
                      web services of Slush 2018.
                    </p>
                    <p>
                      My team decided to focus on the UX of the matchmaking app. We took what we knew already, and went
                      to work.
                    </p>
                    <p>
                      Quickly, we decided to start using Google's Material Design as the basis for our layout.{" "}
                      <strong>
                        That would help us solve the problem with consistency, and thus make it easier and faster to use
                        the app
                      </strong>
                      .
                    </p>
                    <p>
                      We also decided, that we should try adding a new sort of meeting type called{" "}
                      <b>casual meetings</b>, that would allow users to book meetings that were - well - more casual.
                    </p>
                    <p>
                      We created this functional yet bare mockup of our idea during our 48h hackathon. After that, it
                      was time for feedback.
                    </p>

                    <div className="protrude_container">
                      <img src="../images/slush/slush-demo.png" />
                      <p className="img_caption">
                        The demo we created during our 48 hour hackathon using Vue.js and TypeScript.
                      </p>
                    </div>

                    <h3 id="feedback">4. Feedback</h3>
                    <p>We showed our prototype to the rest of the Slush web team to hear their feedback about it.</p>
                    <p>
                      Overall, the feedback was very positive. They liked our idea of the new layout, as well as the
                      idea about having casual meetings implemented into the app.
                    </p>
                    <p>
                      They also thought that using Material as our design language was a smart decision, but people
                      preferred a lighter colour scheme as opposed to our darker one.
                    </p>
                    <p>
                      Based on the feedback and our suggestions, the Slush team started working on a renewed version
                      while also interviewing users at every step of the way.
                    </p>
                    <p>
                      Most of the user interviews were actually done in-house. Since Slush is such a large organization,
                      there are lots of people with different backgrounds, but who still fit into our customer groups.
                    </p>

                    <h3 id="completed_redesign">5. Completed redesign</h3>
                    <p>After a few months, the redesign of the app was complete.</p>
                    <div className="protrude_container">
                      <img src="../images/slush/slush-matchmaking.png" />
                      <p className="img_caption">The matchmaking app</p>
                    </div>
                    <p>
                      During the event itself, the Matchmaking app was one of the most visited pages related to Slush.
                      It gathered lots of visitors, who also were kind enough to lend us their feedback.
                    </p>
                    <p>
                      We got to hear lots of valuable thoughts, and those will be used during following years to make
                      the app even better.
                    </p>

                    <h2 id="outcome">Outcome</h2>
                    <div className="container" style={{ width: "100%" }}>
                      <br />
                      <div className="row">
                        <div className="col-xs-12 col-sm-6">
                          <div className="stat_number">20K</div>
                          <div className="stat_desc">Attendees</div>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                          <div className="stat_number">13K</div>
                          <div className="stat_desc">Registered Users</div>
                        </div>
                      </div>
                      <div className="row"></div>
                      <div className="col-xs-12 col-sm-12">
                        <div className="stat_number">
                          <b>&gt;100K</b>
                        </div>
                        <div className="stat_desc">
                          <b>Meeting Requests</b>
                        </div>
                      </div>
                      <br />
                      <p>
                        <strong>
                          During the event there was a constant stream of Tweets talking about Matchmaking
                        </strong>
                        , which really warmed my heart.
                      </p>
                      <p className="block_quote" data-cards="hidden" data-lang="en">
                        <a href="twitter.com/slushhq">@SlushHQ</a> for a great #Slush18! Thanks #volunteers for making
                        the #startup / #investor matchmaking run so smooth 👍🏼 See you 2019! #NordicMade— Magnus Lundin
                        (@magnusswede){" "}
                        <a href="https://twitter.com/magnusswede/status/1070304094840086529" rel="noopener nofollow">
                          August 12, 2018
                        </a>
                      </p>
                      <h2 id="learnings">Learnings</h2>
                      <p>
                        The Slush Matchmaking app was a learning experience for me. I got to think a lot about{" "}
                        <b>user-driven design</b>, the tricky technical parts of <b>delivering websites at a scale</b>{" "}
                        of hundreds of thousands of visitors, as well as working with a substantially sized team on a
                        large project.
                      </p>
                      <br /> <br />
                      <p>So what were the main takeaways?</p>
                      <h3>Simple ideas can have tremendous value</h3>
                      <p>
                        I came to realize this during our brainstorming sessions. We tried to make sure that everyone
                        was comfortable, and kept telling eachother that there were no stupid questions. Some of our
                        "wilder" ideas, like the new meetup types were already added this year, and some others will be
                        added next year also.
                      </p>
                      <p>
                        <b>Combining many simple features into one cohesive package</b> made the user experience that
                        much better, and we were able to achieve our goal of getting 10 times more meeting requests.
                      </p>
                      <h3>Cohesion is key</h3>
                      <p>
                        During the previous year, Slush's visiors had trouble navigating the app, since practically
                        everything was built in-house, but without a clear enough documentation.
                      </p>
                      <p>
                        <b>
                          Designing things in-house is great, but sometimes it's better to adopt a prebuilt design
                          language
                        </b>
                        , like we did with Material Design. It helped us tremendously, and took out unnecessary
                        variables that different people might bring to the table.
                      </p>
                      <h3>Remember your "why?"</h3>
                      <p>
                        <b>It's easy to forget why you're doing something</b>: maybe you get distracted by new tech,
                        cool design or just don't feel like working on something for long enough. No matter what, it's
                        essential to <b>why you're designing something, and for whom</b>.
                      </p>
                      <p>
                        During this project, this was something I had to constantly think about. I wasn't working at the
                        Slush offices all the time, so I wasn't able to keep my hands on the project the entire time. It
                        was essential to remind myself why and who we were designing for.
                      </p>
                      <p>
                        We all know, that in UX design the most essential thing is the user. We need to keep them in
                        mind, no matter what.
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
      </div>
    </Layout>
  );
}
