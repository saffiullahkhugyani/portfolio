import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="brand">SAFFIULLAH K.</p>
          <p className="footer-status">
            <span className="hero-badge-dot" /> Available for remote roles &amp; freelance
          </p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <a href="#about">About</a>
          <a href="#case-studies">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="footer-social">
          <a href="https://github.com/saffiullahkhugyani" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/saffi-ullah-dev/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin aria-hidden="true" />
          </a>
          <a href="mailto:saffiullah.khugyani@gmail.com" aria-label="Email">
            <FaEnvelope aria-hidden="true" />
          </a>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Saffiullah K. — Built with Next.js.</p>
    </footer>
  );
}
