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
            <a href="mailto:hello@eetueskelinen.com" target="_top">
              {/* <i aria-hidden className="fa fa-envelope fa-lg" id="email" title="Email"></i> */}
              <i aria-hidden className="fa fa-envelope fa-lg" id="email" title="Email">
                {/* <FontAwesomeIcon icon={faEnvelope} title="Email" id="email" /> */}
              </i>
            </a>
            <a href="../files/resume.pdf" target="_blank">
              <i aria-hidden className="fa fa-file-text fa-lg" id="resume" title="Resume"></i>
              {/* <FontAwesomeIcon icon={faFilePdf} title="Email" id="email" /> */}
            </a>
            <a href="https://www.linkedin.com/in/eetueskelinen" target="_blank" rel="noreferrer">
              <i aria-hidden className="fa fa-linkedin-square fa-lg" id="linkedin" title="LinkedIn"></i>
            </a>
            <a href="https://instagram.com/eppu" target="_blank" rel="noreferrer">
              <i aria-hidden className="fa fa-instagram fa-lg" id="instagram" title="Instagram"></i>
            </a>
            <a href="https://github.com/eppu" target="_blank" rel="noreferrer">
              <i aria-hidden className="fa fa-github fa-lg" id="github" title="GitHub"></i>
            </a>
          </div>
        </div>
        <div className="col-sm-1 col-xs-0"></div>
      </div>
      {/* TODO: Replace with npm package */}
      <script src="https://kit.fontawesome.com/e5746cfe5f.js" crossOrigin="anonymous"></script>
    </>
  );
}
