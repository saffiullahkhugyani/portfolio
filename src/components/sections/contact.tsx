import { FaEnvelope, FaFileDownload, FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";

const PROFILE_LINKS = {
  github: "https://github.com/saffiullahkhugyani",
  linkedin: "https://www.linkedin.com/in/saffi-ullah-dev/",
  resume: "/resume.pdf",
} as const;

const contactMethods = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "saffiullah.khugyani@gmail.com",
    href: "mailto:saffiullah.khugyani@gmail.com",
    primary: true,
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "Quick response guaranteed",
    href: "https://wa.me/923365661539",
    primary: false,
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+92 336 566 1539",
    href: "tel:+923365661539",
    primary: false,
  },
];

export function Contact() {
  return (
    <section id="contact" className="contact-section anchor-section reveal">
      {/* Glow */}
      <div className="contact-glow contact-glow--1" aria-hidden="true" />
      <div className="contact-glow contact-glow--2" aria-hidden="true" />

      <div className="contact-inner">
        {/* Left pitch */}
        <div className="contact-pitch">
          <p className="eyebrow">Let&apos;s Build</p>
          <h2>Have a product idea or engineering challenge?</h2>
          <p className="contact-sub">
            Open to full-time remote engineering roles, product consulting, and
            cross-platform development engagements. I respond fast.
          </p>
          <div className="contact-trust">
            <span>✓ Fast delivery mindset</span>
            <span>✓ Mobile + Web + IoT</span>
            <span>✓ End-to-end ownership</span>
          </div>
          <div className="contact-social">
            <a href={PROFILE_LINKS.github} target="_blank" rel="noreferrer" className="contact-social-link">
              <FaGithub aria-hidden="true" /> GitHub
            </a>
            <a href={PROFILE_LINKS.linkedin} target="_blank" rel="noreferrer" className="contact-social-link">
              <FaLinkedin aria-hidden="true" /> LinkedIn
            </a>
            <a href={PROFILE_LINKS.resume} download target="_blank" rel="noreferrer" className="contact-social-link">
              <FaFileDownload aria-hidden="true" /> Resume
            </a>
          </div>
        </div>

        {/* Right: contact cards */}
        <div className="contact-methods">
          {contactMethods.map((m) => (
            <a
              key={m.label}
              href={m.href}
              target={m.href.startsWith("http") ? "_blank" : undefined}
              rel={m.href.startsWith("http") ? "noreferrer" : undefined}
              className={`contact-method-card ${m.primary ? "contact-method-card--primary" : ""}`}
            >
              <div className="contact-method-icon">
                <m.icon aria-hidden="true" />
              </div>
              <div>
                <p className="contact-method-label">{m.label}</p>
                <p className="contact-method-value">{m.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
