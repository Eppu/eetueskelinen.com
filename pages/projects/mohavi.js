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
    <Layout title="Mohavi">
		
	<div className="grey_bg"></div>
		<div className="white_bg"></div>
		<div className="proj_body_container">
			<div className="row">
				<div className="col-xs-12">
					<div className="title_highlight"></div>
					<h1 className="proj_title">Mohavi</h1>
				</div>
			</div>
			<div className="row image_div">
				<img id="header_img" src="../images/mohavi/mohavi-cover.png" alt="Mohavi.co homepage" />
			</div>
			<div className="row">
				<div className="col-xs-0 col-md-4"></div>
				<div className="summary_body col-xs-12 col-md-4">
					<div className="row">
						<p><span>Timeline:</span> <span>March 2020 - May 2020</span></p>
					</div>
					<div className="row">
						<p><span>Project Type:</span> <span>Side Project</span></p>
					</div>
					<div className="row">
						<p><span>My Role:</span> <span>Developer, UX Designer</span></p>
					</div>
					<div className="row">
						<p><span>Tools:</span> <span>HTML/CSS/JS, PHP, WordPress, Three.js, Google Analytics,
								Hotjar</span></p>
					</div>
					<div className="row">
						<p><span>Skills:</span> <span>Product Management, Web Design, Web Development, UX Writing, User
								Research</span></p>
					</div>
					<div className="row">
						<p>
							<span id="final_link"><a href="https://mohavi.co/" target="_blank"><u>Open</u><i
										className="fa fa-link" aria-hidden="true" style={{color: "black"}}></i></a></span>
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
								<a data-scroll href="#needs">
									<li>Needs</li>
								</a>
								<a data-scroll href="#solution">
									<li>Solution</li>
								</a>
								<a data-scroll href="#landing_page">
									<li className="subnav">#1: Landing page</li>
								</a>
									<a data-scroll href="#portfolio_page">
									<li className="subnav">#2: Portfolio</li>
								</a>
								<a data-scroll href="#blog">
									<li className="subnav">#3: Blog</li>
								</a>
								<a data-scroll href="#contact">
									<li className="subnav">#4: Contact</li>
								</a>
								<a data-scroll href="#next_steps">
									<li>Next Steps</li>
								</a>
							</ul>
						</div>
						<div id="content_container" className="col-lg-6 col-md-6 col-sm-7 col-xs-12">
							<div className="row">
								<div className="col-xs-0 col-md-1"></div>
								<div className="col-xs-12 col-md-10">
									<h2 id="context">Context</h2>
									<p>
										Mohavi is a interactive experience agency founded in early 2020. I was
										approached by the agency to help them develop their brand new website, which
										would act as the <b>go-to place for all things Mohavi</b>.
										<br /><br />
										For this project I had completely free hands in choosing suitable technologies
										and work methods for the site, and I picked to go for a relatively basic
										WordPress stack to keep updating the site simple for everyone.
									</p>

									<h2 id="needs">Needs</h2>
									<p>
										The issue we wanted to address was quite typical for a new business: <b>How to
											establish a solid online presence using your website as the platform</b>?
										<br /><br />
										For a creative agency, it's critical for your fans, partners and potential
										clients to be able to find out more about the work you do and the expertise you
										have.
									</p>

									<h2 id="solution">Solution</h2>
									
										<h3>A web platform with a project portfolio, blog, info and a wow-effect.</h3>
									
									<h3 id="landing_page">#1: Landing Page</h3>
									<p>
										When you come to the website, you're immediately told what the company does and
										prompted with a CTA to learn more, and to contact them.
									</p>
									<p>
										On desktop devices you're also presented with an interactive blob that you can
										play with, to clarify what the company is all about.
									</p>
									<div className="protrude_container">
										<img src="../images/mohavi/cover.png" />
										<p className="img_caption">
											Through initial market research we found that it was sometimes difficult to
											understand what interactivity really meant. The blob was added to really
											drive the purpose in.
										</p>
									</div>
									<p>
										When you scroll down, you're met with a section that clearly states what
										services the agency offers.
									</p>
									<br />
									<div className="protrude_container">
										<img src="../images/mohavi/front-page-info-section.png" />
									</div>
									<br />
									<p>
										It was very clear from an early stage that the agency would be offering a very
										wide range of services, as often required when producing interactive products
										like games and apps.
										<br /><br />
										We felt it was worth pointing out a few of the main areas of work the agency
										focuses on, together with a CTA button that would take the user to the "About
										us" page if they wished to learn more.
										<br /><br />
										After the service description we also decided to show the user a selection of
										the latest projects the company had written case studies about to give the users
										and potential clients a real world view of what an interactive project might be
										like.
									</p>
									<br />
									<div className="protrude_container">
										<img src="../images/mohavi/front-page-why-blog.png" />
									</div>
									<br />
									<p>
										After the project section, I decided to add a section that answered one of the
										most common questions the company had to answer: "why?"
										<br /><br />
										This would provide the user a value proposition right on the front page, and
										help them feel more confident about a potential purchase of a project.
										<br /><br />
										Afterwards, we also decided to add a blog section displaying some of the latest
										writing work the founders of the agency have done. The blog posts themselves
										were added as an element to provide more value to people working or looking to
										get into a project in the creative industry.
										<br /><br />
										Finally, at the very bottom of the page I added a section just for getting in
										touch with the company.

									</p>
									<h3 id="portfolio_page">#2: Portfolio pages</h3>
									<p>
										One of the most important aspects of the site is the portfolio section, filled
										with case studies about <a target="_blank"
											href="https://mohavi.co/project/city-of-tampere-globi-kamu-ar/">projects</a>.
										This serves two purposes:
										<br /><br />
										1. Provide context to users about what the company does and showcase their
										experience.
										<br />
										2. Generate leads and contact requests from new clients.
									</p>
									<div className="protrude_container">
										<img src="../images/mohavi/portfolio-page.jpg" />
										<p className="img_caption">
											The portfolio page shows large, beautiful pictures of previously completed
											client projects.
										</p>
									</div>
									<h3 id="blog">#3: Blog</h3>
									<p>
										It was decided early on that the blog would be a key component of the site. It
										would act as a channel for the company to communicate things to their clients,
										and to keep the site active for SEO purposes.
										<br /><br />
										Mohavi also wants to provide value to others in the industry, and thus they
										release articles about things that they have learned along the way.
									</p>
									<div className="protrude_container">
										<img src="../images/mohavi/blog-section.png" />
										<p className="img_caption">
											Nothing too special about this layout, just typographically enjoyable to
											read.
										</p>
									</div>

									<h3 id="contact">#4: Contact</h3>
									<p>
										At this point we hope the user would be convinced to get in touch with the
										agency, and head to the contact us page.
									</p>
									<div className="protrude_container">
										<img src="../images/mohavi/contact-page.png" />
										<p className="img_caption">
											In the form we decided to add a few extra fields, like "Subject", to make
											things like calculating initial quotes easier.
										</p>
									</div>

									<h2 id="next_steps">Next Steps</h2>
									<p>
										Since launch, traffic has continued to grow steadily, <b>as has the
											business</b>.
										<br /><br />
										The site sports a few hundred users per month, but what is critical is that
										those users <b>are getting in touch</b> and offering new projects to the agency,
										which is exactly the result hoped for.
										<br /><br />
										One issue that has surfaced about 6 months after launch is that <b>keeping a
											site updated with limited resources is hard</b>. This is why in most cases
										even agencies should hire, or at the very least appoint someone to work on their
										sites continuously.
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

    </Layout>
  );
}
