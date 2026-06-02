import { SectionHeader } from "@/components/ui/section-header";

const jobs = [
  {
    role: "Mobile Engineer",
    org: "Productbox",
    period: "Oct 2022 — Present",
    type: "Full-time",
    summary:
      "Owns roadmap-driven delivery: writing user stories, running sprints, and shipping production mobile apps with full UAT accountability.",
    tags: ["React Native", "Product Management", "Agile"],
  },
  {
    role: "Software Engineer",
    org: "Suhail Smart Solutions",
    period: "Jul 2022 — Jun 2025",
    type: "Full-time",
    summary:
      "Shipped mobile and web products end-to-end alongside hardware integrations for ESP32-based systems in a startup environment.",
    tags: ["Flutter", "Next.js", "ESP32", "Firebase"],
  },
  {
    role: "Android Developer",
    org: "Sybrid Pvt Ltd",
    period: "Jun 2019 — Feb 2020",
    type: "Full-time",
    summary:
      "Built Android features, integrated REST APIs, and stabilized a live consumer app used by thousands of daily users.",
    tags: ["Android", "Java", "REST APIs"],
  },
  {
    role: "Android Developer Intern",
    org: "Smart-Tech",
    period: "Jul 2019 — Dec 2019",
    type: "Internship",
    summary:
      "Merged three separate education apps into one RBAC platform — reduced maintenance overhead and unified the user experience.",
    tags: ["Android", "RBAC", "Kotlin"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section anchor-section">
      <SectionHeader
        eyebrow="Career Timeline"
        heading="From engineer to product owner mindset."
      />
      <div className="timeline">
        {jobs.map((job, i) => (
          <div
            key={`${job.role}-${job.org}`}
            className="tl-item reveal"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="tl-dot" />
            <article className="tl-card tilt-card">
              <div className="tl-card-top">
                <div>
                  <h3 className="tl-role">{job.role}</h3>
                  <p className="tl-org">{job.org}</p>
                </div>
                <div className="tl-meta">
                  <span className="tl-period">{job.period}</span>
                  <span className="tl-type">{job.type}</span>
                </div>
              </div>
              <p className="tl-summary">{job.summary}</p>
              <div className="tl-tags">
                {job.tags.map((t) => (
                  <span key={t} className="tl-tag">{t}</span>
                ))}
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
