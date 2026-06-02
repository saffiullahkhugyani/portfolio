import { SectionHeader } from "@/components/ui/section-header";
import { FaArrowRight, FaGithub } from "react-icons/fa";

const projects = [
  {
    num: "01",
    title: "Mindway — Mental Wellness App",
    description:
      "Led full-cycle delivery of a cross-platform mental health tracking app. Defined user stories, ran sprints, coordinated UAT, and shipped v1 in 10 weeks with zero critical bugs at launch.",
    outcome: "Shipped v1 in 10 weeks · 0 critical bugs at launch",
    stack: ["React Native", "Firebase", "REST APIs", "Agile"],
    accent: "var(--accent)",
    github: null as string | null,
    live: null as string | null,
  },
  {
    num: "02",
    title: "Fleet Command — Logistics Dashboard",
    description:
      "Built a real-time vehicle-tracking web dashboard with live map updates, RBAC, and exportable reports. Reduced manual reporting time by ~60% — now used daily by 3 internal teams.",
    outcome: "−60% manual reporting · 3 teams use it daily",
    stack: ["Next.js", "TypeScript", "REST APIs", "Tailwind CSS"],
    accent: "var(--accent-2)",
    github: null as string | null,
    live: null as string | null,
  },
  {
    num: "03",
    title: "SmartFlow — IoT Automation System",
    description:
      "Designed and shipped a full hardware-software integration: ESP32 sensors → FastAPI backend → Flutter mobile control app. Achieved sub-200ms latency on LAN for real-time remote control.",
    outcome: "<200ms latency · Real-time device control",
    stack: ["ESP32", "Arduino", "FastAPI", "Flutter"],
    accent: "var(--gold)",
    github: null as string | null,
    live: null as string | null,
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="section anchor-section">
      <SectionHeader
        eyebrow="Selected Work"
        heading="Proof over promises."
        sub="Real projects, real outcomes. Not agency mockups."
      />
      <div className="projects-grid">
        {projects.map((p, i) => (
          <article
            key={p.num}
            className="project-card tilt-card reveal"
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <div className="project-card-accent" style={{ background: p.accent }} />
            <div className="project-card-inner">
              <span className="project-num">{p.num}</span>
              <h3>{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <p className="project-outcome">{p.outcome}</p>
              <div className="project-stack">
                {p.stack.map((t) => (
                  <span key={t} className="stack-chip">{t}</span>
                ))}
              </div>
              <div className="project-links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                    <FaGithub aria-hidden="true" /> GitHub
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="project-link">
                    Live Demo <FaArrowRight aria-hidden="true" />
                  </a>
                )}
                <a href="#contact" className="project-link project-link--cta">
                  Build something similar <FaArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
