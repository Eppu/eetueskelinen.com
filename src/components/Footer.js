import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileText } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="row footer">
        <div className="col-sm-1 col-xs-0"></div>
        <div className="col-xs-12 col-sm-4 footer_quote"></div>
        <div className="col-xs-12 col-sm-2"></div>
        <div className="col-xs-12 col-sm-4 footer_links">
          <p style={{ marginBottom: "30px" }}>&copy; {new Date().getFullYear()}. With ❤️ by Eetu Eskelinen.</p>

          <div>
            <a className="fa" href="mailto:hello@eetueskelinen.com" target="_top">
              {/* <i aria-hidden className="fa fa-envelope fa-lg" id="email" title="Email" /> */}
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
            <a className="fa" href="../files/resume.pdf" target="_blank">
              {/* <i aria-hidden className="fa fa-file-text fa-lg" id="resume" title="Resume" /> */}
              <FontAwesomeIcon icon={faFileText} size="lg" />
            </a>
            <a className="fa" href="https://www.linkedin.com/in/eetueskelinen" target="_blank" rel="noreferrer">
              {/* <i aria-hidden className="fa fa-linkedin-square fa-lg" id="linkedin" title="LinkedIn" /> */}
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a className="fa" href="https://instagram.com/eppu" target="_blank" rel="noreferrer">
              {/* <i aria-hidden className="fa fa-instagram fa-lg" id="instagram" title="Instagram" /> */}
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a className="fa" href="https://github.com/eppu" target="_blank" rel="noreferrer">
              {/* <i aria-hidden className="fa fa-github fa-lg" id="github" title="GitHub" /> */}
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </div>
        </div>
        <div className="col-sm-1 col-xs-0"></div>
      </div>
    </>
  );
}
