import Link from 'next/link'

export default function Footer() {
    return(
        <>
        <div className="col-sm-1 col-xs-0"></div>
        <div className="col-xs-12 col-sm-4 footer_quote">
        </div>
        <div className="col-xs-12 col-sm-2"></div>
        <div className="col-xs-12 col-sm-4 footer_links">
            <p style={{marginBottom:"30px"}}>&copy; {new Date().getFullYear()}. With ❤️ by Eetu Eskelinen.</p>
            <div>
                <Link href="mailto:hello@eetueskelinen.com" target="_top">
                    <i className="fa fa-envelope fa-lg" id="email" title="Email"></i>
                </Link>
                <Link href="../files/resume.pdf" target="_blank">
                    <i className="fa fa-file-text fa-lg" id="resume" title="Resume"></i>
                </Link>
                <Link href="https://www.linkedin.com/in/eetueskelinen" target="_blank">
                    <i className="fa fa-linkedin-square fa-lg" id="linkedin" title="LinkedIn"></i>
                </Link>
                <Link href="https://instagram.com/eppu" target="_blank">
                    <i className="fa fa-instagram fa-lg" id="instagram" title="Instagram"></i>
                </Link>
                <Link href="https://github.com/eppu" target="_blank">
                    <i className="fa fa-github fa-lg" id="github" title="GitHub"></i>
                </Link>
            </div>
        </div>
        <div className="col-sm-1 col-xs-0"></div>
        </>
    )
} 