import { SiteNav } from "@/components/site-nav";
import { ExpertiseTabs } from "@/components/expertise-tabs";
import {
  FaCode,
  FaEnvelope,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaRocket,
  FaWhatsapp,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import {
  SiAndroid,
  SiApple,
  SiArduino,
  SiCss,
  SiDart,
  SiElectron,
  SiEspressif,
  SiFastapi,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostman,
  SiReact,
  SiSass,
  SiTypescript,
} from "react-icons/si";

const stats = [
  { label: "Years building software", value: "6+" },
  { label: "Products delivered", value: "12+" },
  { label: "Core domains", value: "Mobile • Web • IoT" },
  { label: "Delivery ownership", value: "End-to-end" },
];

const caseStudies = [
  {
    title: "Cross-Platform Product Delivery at Scale",
    context: "Led multiple mobile-first products from scope to release.",
    impact: "Improved delivery speed and release quality through structured UAT.",
    stack: "React Native, Flutter, Agile/Scrum, Product Planning",
  },
  {
    title: "Web Platforms Built for Maintainability",
    context: "Built scalable Next.js + TypeScript apps with clean architecture.",
    impact: "Reduced delivery friction and improved long-term maintainability.",
    stack: "Next.js, React, TypeScript, REST APIs",
  },
  {
    title: "Hardware + Software Integration Systems",
    context: "Connected products with ESP32 and Arduino integrations.",
    impact: "Expanded product capability beyond standard web and mobile apps.",
    stack: "ESP32, Arduino, API Integration, Embedded Workflows",
  },
];

const capabilities = [
  {
    title: "Mobile Engineering",
    body: "Production-grade React Native and Flutter apps with platform optimization and smooth UX.",
  },
  {
    title: "Web Engineering",
    body: "Scalable, maintainable web apps using Next.js, React, and TypeScript.",
  },
  {
    title: "IoT Integration",
    body: "Practical hardware-software systems with ESP32 and Arduino for connected product experiences.",
  },
];

const technologyStack = [
  {
    category: "Mobile Development",
    tools: [
      "React Native",
      "Flutter",
      "Dart",
      "Android Optimization",
      "iOS Optimization",
    ],
  },
  {
    category: "Web Development",
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3/SASS",
    ],
  },
  {
    category: "Hardware & IoT",
    tools: [
      "ESP32",
      "Arduino",
      "Microcontroller Programming",
      "Hardware-Software Integration",
    ],
  },
  {
    category: "Tools & Delivery",
    tools: [
      "Git",
      "Firebase",
      "REST APIs",
      "Jira",
      "Figma",
      "n8n",
      "Workflow Automation",
    ],
  },
];

const techIcons: Record<string, IconType> = {
  "React Native": SiReact,
  Flutter: SiFlutter,
  Dart: SiDart,
  "Android Optimization": SiAndroid,
  "iOS Optimization": SiApple,
  "Next.js": SiNextdotjs,
  React: SiReact,
  TypeScript: SiTypescript,
  "JavaScript (ES6+)": SiJavascript,
  HTML5: SiHtml5,
  "CSS3/SASS": SiSass,
  ESP32: SiEspressif,
  Arduino: SiArduino,
  "Microcontroller Programming": SiNodedotjs,
  "Hardware-Software Integration": SiElectron,
  Git: SiGit,
  Firebase: SiFirebase,
  "REST APIs": SiFastapi,
  Jira: SiJira,
  Figma: SiFigma,
  n8n: SiNpm,
  "Workflow Automation": SiPostman,
  "CSS3": SiCss,
};

const timeline = [
  {
    role: "Mobile Engineer",
    org: "Productbox",
    period: "Oct 2022 — Present",
    summary: "Owns roadmap-driven delivery, user stories, and release quality.",
  },
  {
    role: "Software Engineer / Programmer",
    org: "Suhail Smart Solutions",
    period: "Jul 2022 — Jun 2025",
    summary: "Shipped mobile/web products and hardware integrations in production.",
  },
  {
    role: "Android Developer",
    org: "Sybrid Pvt Ltd",
    period: "Jun 2019 — Feb 2020",
    summary: "Built Android features, integrated APIs, and improved app stability.",
  },
  {
    role: "Android Developer Intern",
    org: "Smart-Tech",
    period: "Jul 2019 — Dec 2020",
    summary: "Merged apps into one RBAC platform for education workflows.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discover",
    body: "Clarify business outcomes, scope, and risks before writing a single line of code.",
  },
  {
    num: "02",
    title: "Architect",
    body: "Define clean, maintainable foundations and agree on the technical structure upfront.",
  },
  {
    num: "03",
    title: "Build",
    body: "Ship in iterative sprints with quality gates and regular client checkpoints.",
  },
  {
    num: "04",
    title: "Scale",
    body: "Optimize performance, reliability, and long-term maintainability post-launch.",
  },
];

const PROFILE_LINKS = {
  github: "https://github.com/saffiullahkhugyani",
  linkedin: "https://www.linkedin.com/in/saffi-ullah-dev/",
  resume: "/resume.pdf",
} as const;

export default function Home() {
  return (
    <div className="page-shell">
      <SiteNav />

      <main className="page-content">
        {/* ── Hero ── */}
        <section id="about" className="hero anchor-section">
          <div className="hero-layout hero-content">
            <div className="hero-main">
              <p className="eyebrow">
                Available for remote roles and freelance projects
              </p>
              <h1>
                I build <span>mobile, web, and IoT products</span> that people
                trust in the real world.
              </h1>
              <p className="hero-copy">
                React Native, Flutter, Next.js, and TypeScript engineer with
                real production experience in ESP32 and Arduino integrations.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">
                  Book a Project Call
                </a>
                <a href="#case-studies" className="btn btn-secondary">
                  View Case Studies
                </a>
                <a
                  href={PROFILE_LINKS.resume}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                  download
                >
                  Download Resume
                </a>
              </div>
            </div>
            <div className="hero-side">
              <div
                className="code-profile-card tilt-card"
                aria-label="Engineer profile code snapshot"
              >
                <div className="code-profile-head">
                  <div className="code-dots" aria-hidden="true">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>
                  <p>profile.ts</p>
                </div>
                <div className="code-profile-body">
                  <p>
                    <span className="code-keyword">const</span>{" "}
                    <span className="code-name">engineer</span> = {"{"}
                  </p>
                  <p>
                    <span className="code-property">name</span>:{" "}
                    <span className="code-string">&quot;Saffiullah K.&quot;</span>,
                  </p>
                  <p>
                    <span className="code-property">role</span>:{" "}
                    <span className="code-string">
                      &quot;Software Engineer&quot;
                    </span>
                    ,
                  </p>
                  <p>
                    <span className="code-property">stack</span>: [
                    <span className="code-string">&quot;React Native&quot;</span>,{" "}
                    <span className="code-string">&quot;Flutter&quot;</span>,{" "}
                    <span className="code-string">&quot;Next.js&quot;</span>],
                  </p>
                  <p>
                    <span className="code-property">focus</span>: [
                    <span className="code-string">&quot;Performance&quot;</span>,{" "}
                    <span className="code-string">&quot;Scalability&quot;</span>,{" "}
                    <span className="code-string">&quot;UX&quot;</span>],
                  </p>
                  <p>
                    <span className="code-property">integrations</span>: [
                    <span className="code-string">&quot;ESP32&quot;</span>,{" "}
                    <span className="code-string">&quot;Arduino&quot;</span>],
                  </p>
                  <p>
                    <span className="code-property">exp</span>: 6,{" "}
                    <span className="code-comment">{"// years"}</span>
                  </p>
                  <p>
                    <span className="code-property">openToWork</span>: true
                  </p>
                  <p>{"};"}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Stats ── */}
        <section className="stats" aria-label="Key profile highlights">
          {stats.map((item, i) => (
            <div key={item.label} className="reveal" style={{ transitionDelay: `${i * 65}ms` }}>
              <article className="stat-card tilt-card">
                <p className="stat-value">{item.value}</p>
                <p className="stat-label">{item.label}</p>
              </article>
            </div>
          ))}
        </section>

        <div className="section-divider" />

        {/* ── Expertise ── */}
        <section className="section">
          <div className="reveal">
            <ExpertiseTabs />
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Case Studies ── */}
        <section id="case-studies" className="section anchor-section">
          <div className="section-head">
            <p className="eyebrow">Selected Work</p>
            <h2>Proof over promises.</h2>
          </div>
          <div className="grid-3">
            {caseStudies.map((item, i) => (
              <div key={item.title} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <article className="panel interactive tilt-card">
                  <h3>{item.title}</h3>
                  <p>{item.context}</p>
                  <p className="impact">{item.impact}</p>
                  <p className="stack">{item.stack}</p>
                  <a href="#contact" className="inline-link">
                    Build something similar
                  </a>
                </article>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Capabilities ── */}
        <section id="capabilities" className="section anchor-section">
          <div className="section-head">
            <p className="eyebrow">Core Capability Matrix</p>
            <h2>From app performance to deployment discipline.</h2>
          </div>
          <div className="grid-3">
            {capabilities.map((item, i) => (
              <div key={item.title} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <article className="panel tilt-card">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Stack ── */}
        <section id="stack" className="section anchor-section">
          <div className="section-head">
            <p className="eyebrow">Technology Stack</p>
            <h2>Production-grade technologies I use to ship real products.</h2>
          </div>
          <div className="tech-groups">
            {technologyStack.map((group, i) => (
              <div key={group.category} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <article className="panel tilt-card">
                  <h3>{group.category}</h3>
                  <ul className="tech-list" aria-label={group.category}>
                    {group.tools.map((tool) => (
                      <li key={tool} className="tech-pill">
                        {(() => {
                          const Icon = techIcons[tool] ?? FaCode;
                          return <Icon aria-hidden="true" className="tech-icon" />;
                        })()}
                        {tool}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Experience ── */}
        <section id="experience" className="section anchor-section">
          <div className="section-head">
            <p className="eyebrow">Career Timeline</p>
            <h2>Progression from engineer to product owner mindset.</h2>
          </div>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div key={`${item.role}-${item.org}`} className="reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <article className="timeline-item tilt-card">
                  <p className="period">{item.period}</p>
                  <h3>
                    {item.role} · {item.org}
                  </h3>
                  <p>{item.summary}</p>
                </article>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Process ── */}
        <section className="section process">
          <div className="section-head">
            <p className="eyebrow">How I Work</p>
            <h2>A predictable path from idea to production.</h2>
          </div>
          <div className="process-steps">
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className="reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="process-step tilt-card">
                  <p className="process-num">{step.num}</p>
                  <div>
                    <p className="process-step-title">{step.title}</p>
                    <p className="process-step-body">{step.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Contact ── */}
        <section id="contact" className="section reveal contact anchor-section">
          <div className="section-head">
            <p className="eyebrow">Let&apos;s Build</p>
            <h2>Have an idea or product challenge? Let&apos;s talk.</h2>
          </div>
          <p>
            I&apos;m open to software engineering roles, product consulting, and
            cross-platform development engagements.
          </p>
          <div className="contact-highlights">
            <p>
              <FaRocket aria-hidden="true" /> Fast delivery mindset
            </p>
            <p>
              <FaCode aria-hidden="true" /> Mobile + Web + IoT expertise
            </p>
            <p>
              <FaWhatsapp aria-hidden="true" /> Quick response on WhatsApp
            </p>
          </div>
          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:saffiullah.khugyani@gmail.com">
              <FaEnvelope aria-hidden="true" /> Email Me
            </a>
            <a className="btn btn-secondary" href="tel:+923365661539">
              <FaPhone aria-hidden="true" /> Call +92 336 566 1539
            </a>
            <a
              className="btn btn-secondary"
              href={PROFILE_LINKS.resume}
              target="_blank"
              rel="noreferrer"
              download
            >
              <FaFileDownload aria-hidden="true" /> Download Resume
            </a>
            <a
              className="btn btn-secondary"
              href="https://wa.me/923365661539"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp aria-hidden="true" /> Message on WhatsApp
            </a>
          </div>
          <div className="contact-links" aria-label="Social profiles">
            <a href={PROFILE_LINKS.github} target="_blank" rel="noreferrer">
              <FaGithub aria-hidden="true" /> GitHub Profile
            </a>
            <a href={PROFILE_LINKS.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin aria-hidden="true" /> LinkedIn Profile
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
