import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const PROFILE_LINKS = {
  github: "https://github.com/saffiullahkhugyani",
  linkedin: "https://www.linkedin.com/in/saffi-ullah-dev/",
  resume: "/resume.pdf",
} as const;

export function Hero() {
  return (
    <section id="about" className="hero anchor-section">
      {/* Decorative blobs */}
      <div className="hero-blob hero-blob--1" aria-hidden="true" />
      <div className="hero-blob hero-blob--2" aria-hidden="true" />

      <div className="hero-inner">
        {/* ── Left ── */}
        <div className="hero-main">
          <div className="hero-badge reveal">
            <span className="hero-badge-dot" />
            Available for remote roles &amp; freelance
          </div>

          <h1 className="hero-heading reveal">
            Building{" "}
            <span className="gradient-text">
              Mobile, Web &amp; IoT
            </span>{" "}
            products that ship.
          </h1>

          <p className="hero-sub reveal">
            Software engineer with 6+ years shipping React Native, Flutter, and
            Next.js products — 6 public repos, 3 live deployments, and ESP32
            hardware integrations that work in the field, not just in demos.
          </p>

          <div className="hero-actions reveal">
            <a
              href="mailto:saffiullah.khugyani@gmail.com"
              className="btn btn-primary"
            >
              <FaEnvelope aria-hidden="true" />
              Let&apos;s Talk
            </a>
            <a href="#case-studies" className="btn btn-ghost">
              See My Work
            </a>
            <a
              href={PROFILE_LINKS.resume}
              className="btn btn-ghost"
              target="_blank"
              rel="noreferrer"
              download
            >
              Download CV
            </a>
          </div>

          <div className="hero-socials reveal">
            <a href={PROFILE_LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub aria-hidden="true" />
            </a>
            <a href={PROFILE_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin aria-hidden="true" />
            </a>
            <a href="https://wa.me/923365661539" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* ── Right: code card ── */}
        <div className="hero-card-wrap reveal">
          <div className="code-card tilt-card" aria-label="Engineer profile snapshot">
            <div className="code-card-bar">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="code-card-filename">profile.ts</span>
            </div>
            <div className="code-card-body">
              <p><span className="ck">const</span> <span className="cn">engineer</span> = {"{"}</p>
              <p>&nbsp;&nbsp;<span className="cp">name</span>: <span className="cs">&quot;Saffiullah K.&quot;</span>,</p>
              <p>&nbsp;&nbsp;<span className="cp">title</span>: <span className="cs">&quot;Software Engineer&quot;</span>,</p>
              <p>&nbsp;&nbsp;<span className="cp">stack</span>: [<span className="cs">&quot;React Native&quot;</span>, <span className="cs">&quot;Flutter&quot;</span>,</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="cs">&quot;Next.js&quot;</span>, <span className="cs">&quot;TypeScript&quot;</span>],</p>
              <p>&nbsp;&nbsp;<span className="cp">hardware</span>: [<span className="cs">&quot;ESP32&quot;</span>, <span className="cs">&quot;Arduino&quot;</span>],</p>
              <p>&nbsp;&nbsp;<span className="cp">experience</span>: <span className="cn">6</span>, <span className="cc">{"// years"}</span></p>
              <p>&nbsp;&nbsp;<span className="cp">products</span>: <span className="cn">12</span>, <span className="cc">{"// shipped"}</span></p>
              <p>&nbsp;&nbsp;<span className="cp">openToWork</span>: <span className="ck">true</span>,</p>
              <p>{"}"}</p>
            </div>
          </div>

          {/* Floating chips */}
          <div className="hero-chip hero-chip--tl reveal">React Native</div>
          <div className="hero-chip hero-chip--br reveal">ESP32 · IoT</div>
        </div>
      </div>
    </section>
  );
}
