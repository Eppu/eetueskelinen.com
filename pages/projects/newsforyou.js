import Layout from "../../src/components/layout";
import { useEffect } from "react";

export default function Mohavi() {
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
    <Layout title="News For You">
		
	<div className="grey_bg"></div>
	<div className="white_bg"></div>
		<div className="proj_body_container">
			<div className="row">
				<div className="col-xs-12">
					<div className="title_highlight"></div>
					<h1 className="proj_title">News For You</h1>
				</div>
			</div>
			<div className="row image_div">
				<img id="header_img" src="../images/nfy/proto1.png"
					alt="An image of a paper prototype of the News For You app" />
			</div>
			<div className="row">
				<div className="col-xs-0 col-md-4"></div>
				<div className="summary_body col-xs-12 col-md-4">
					<div className="row">
						<p><span>Timeline:</span> <span>Oct - Nov 2018</span></p>
					</div>
					<div className="row">
						<p><span>Project Type:</span> <span>Class Project</span></p>
					</div>
					<div className="row">
						<p><span>My Role:</span> <span>UX Designer</span></p>
					</div>
					<div className="row">
						<p><span>Tools:</span> <span>Sketch, InVision</span></p>
					</div>
					<div className="row">
						<p><span>Skills:</span> <span>User Reserach, Personas, Ideation/Sketching, Storyboarding,
								Information Architecture/Site Mapping, Paper Prototyping, Wireframing, Hi-Fi
								Mockups</span></p>
					</div>
					<div className="row">
						<p>
							<span id="final_link"><a href="https://projects.invisionapp.com/share/KGOQIA46EQ8#/screens"
									target="_blank"><u>Prototype</u><i className="fa fa-link" aria-hidden="true"
										style={{color: "black"}}></i></a></span>
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
								<a data-scroll href="#problem_statement">
									<li>Problem Statement</li>
								</a>
								<a data-scroll href="#solution">
									<li>Solution</li>
								</a>
								<a data-scroll href="#process">
									<li>Process</li>
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
								<div className="col-xs-12 col-md-10">
									<h2 id="context">Context</h2>
									<p>
										News For You is a prototype for an app, that enables you to find out what's
										happening outside of your own bubble.
									</p>
									<p>
										The idea and prototype for the app were created during the UX Design minor at
										Tampere University of Applied Sciences.
									</p>
									<h2 id="my_role">My role</h2>
									<p>
										<strong>I was primarily responsible for user research and interaction design.
										</strong>
									</p>
									<p>
										The team was comprised of two other students, who did graphic design and
										concepting, as well as prototyping and user testing respectively.
									</p>
									<p>
										This was one of the first practise projects we did together in our university's
										User-Centerd Design course.
									</p>

									<h2 id="problem_statement">Problem Statement</h2>
									<p>
										Based on our studies, people want reliable information, and they want it
										quickly. However, they feel like they can't find it in today's modern media
										services that are filled with fraudulent information.
									</p>
									<p>
										People also want to share things with their friends so they feel more connected.
									</p>
									<p>
										<b>The most essential thing we learned was, that people want reliable
											information, and for their voices to be heard.</b>
									</p>

									<h2 id="solution">Solution</h2>
									<p>
										A platform that gathers news from different sources into one place, where users
										can discuss articles, share them with their friends and vote on the source's
										reliability.
									</p>
									<h3>The user should get reliable information. Every time.</h3>
									<br /><br />
									<div className="protrude_container">
										<img src="../images/nfy/proto.png" />
										<p className="img_caption">

										</p>
									</div>

									<h2 id="process">Process</h2>
									<h3>1. Target Group</h3>
										<h4>Choosing our target group was relatively easy, since the course's task was
											to design an app for students. </h4>
										<p>
											Choosing our target group was relatively easy, since the course's task was
											to design an app for students. It's also a group that's relatable and
											important to us, since we're all studying.
										</p>
										<p>
											We also picked a category to work with from EYA's competition categories. We
											picked active citizenship, and digital journalism as our subcategory.
										</p>
										<p>
											We are all interested in the subject, so it felt like a natural choice.
										</p>
										<p>
											In a "real" project, the target group would of course be defined by the
											customer's or project's goal.
										</p>

										<h3>User Interviews</h3>
										<h4>After picking our target group and category, we conducted user research by
											interviewing potential users.</h4>
										<p>
											After picking our target group and category, we conducted user research by
											interviewing potential users, who where in this case students. <b>During the
												interview process, I learned a lot about how much information you can
												actually get from another person just based on their expressions, and
												emotional loads</b>.
										</p>
										<p>
											After our interviews concluded, we gathered our findings into an empathy
											map, that would later prove itself vital in our design process.
										</p>

										<h3>Creating personas</h3>
										<h4>We created our personas based on our user research. We tried to make the
											personas resemble average users within our target group.</h4>
										<p>Creating personas really helped us with gaining perspective on our potential
											users. Everyone's personas were different, but had a few unifying factors,
											such as them all being students and using their mobile phones as their main
											source of information. </p>
										<p><b>As our personas were based on real data, it helped us greatly in
												determining what our goal would be. </b></p>

										<div className="protrude_container">
											<img src="../images/nfy/persona.png" />
											<p className="img_caption">
												One of our personas, Owen Stevens
											</p>
										</div>



										<h3>Scenarios and Storyboards</h3>
										<p>
											We created our scenarios based on our personas, and tried to come up with
											situations where our users might use our app. Based on our scenarios, we
											also created storyboards to help visualize our data.
										</p>
										<p>
											Creating the storyboards helped us greatly when trying to figure out the
											most important features for our users. Some of our key takeaways were
											portability, speed, reliability and ease of use.
										</p>



										<h3>Ideation and prototyping</h3>
										<p>
											In the ideation phase, our goal was to come up with as many ideas as
											possible. We did our best to keep a positive flow, and to accept all sorts
											of ideas, no matter how crazy the might have sounded. That's how all the
											best innovation is born, of course. We gathered our ideas on a paper map
											with Post-It notes, and kept iterating for a few rounds. Ultimately, we came
											up with a solution everyone was happy with.
										</p>
										<p>
											After that we started building our initial prototype out of paper. Working
											with paper was a new, and sort of difficult experience at first. We had to
											take a few shortcuts, but eventually we came up with a solution that would
											hold up in testing.
										</p>
										<div className="protrude_container">
											<img src="../images/nfy/ideas.png" />
											<p className="img_caption">
												Some of the teams initial ideation on a lean canvas we decided to use
											</p>
										</div>

										<h3>Testing and Iterationt</h3>
										<p>
											In our previous phase, we had already thought of a few things that we wanted
											to test with real users. Thus, we invited some people from both in, and
											outside of our class to test our app.
										</p>
										<p>
											We tried to gather as much information as possible, to get as specific of a
											view as we could, about what we could still improve and what would need to
											be changed. We got some extremely vital feedback from our users, that will
											impact our digital prototyping phase greatly.
										</p>
										<p>
											Personally, I think testing was the most important step in our design
											process, along with the user interviews. Real user feedback could never be
											replaced with any amount of studies. It's important to get out there, and
											put yourself in the shoes of the user as well.
										</p>
										<p>
											After finishing up with our paper prototyping, we went ahead and created our
											final, but still quite rough digital prototype, and did some testing with it
											as well.
										</p>
										<p>
											In the end, <b>the vast majority of our test subjects were happy with our
												prototype, and didn't have problems using it</b>.
										</p>

										<div className="protrude_container">
											<img src="../images/nfy/digiproto.png" />
										</div>

										<h2 id="outcome">Outcome</h2>
										<div className="container" style={{width: "100%"}}>
											<br />
											<div className="row">
												<div className="col-xs-12 col-sm-6">
													<div className="stat_number">1</div>
													<div className="stat_desc">Paper Prototype</div>
												</div>
												<div className="col-xs-12 col-sm-6">
													<div className="stat_number">1</div>
													<div className="stat_desc">Digital prototype</div>
												</div>
											</div>
											<div className="row">
											</div>
											<div className="col-xs-12 col-sm-12">
												<div className="stat_number">A bunch</div>
												<div className="stat_desc">of new things learned</div>
											</div>
										</div>
										<br />

										<h2 id="learnings">Learnings</h2>
										<p>
											The overall feedback for the project and the course was very positive.
										</p>
										<p>
											Some notes were given about design choices, eg. some icons were different to
											what the users expected.
										</p>
										<p>
											<b>I grew as a designer and better understood how to design and build
												user-centered services</b>.
										</p>
										<p>But, the most important was to understand the user-centered design process:
											<b>the failures, the successes, and the in-betweens</b>.</p>
										<br />
										{/* 
										<p>Based on this project, I actually created another site called The UX
											Handbook.</p>
										<p>It was built for my user-centered design course, but contains useful
											information about the UX process. Check it out if you want to!</p>
										<a className="proj_button" href="https://eetueskelinen.com/uxhandbook/"
											target="_blank">
											<div>UX Handbook</div>
										</a> */}

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
    </Layout>
  );
}
