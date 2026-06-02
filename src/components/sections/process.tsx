import { SectionHeader } from "@/components/ui/section-header";

const steps = [
  {
    num: "01",
    title: "Discover",
    body: "Clarify business outcomes, scope, and risks. No code before alignment.",
  },
  {
    num: "02",
    title: "Architect",
    body: "Define clean, maintainable foundations and agree on structure upfront.",
  },
  {
    num: "03",
    title: "Build",
    body: "Iterative sprints with quality gates and regular client checkpoints.",
  },
  {
    num: "04",
    title: "Launch",
    body: "Structured UAT, staged rollout, and post-launch stability monitoring.",
  },
];

export function Process() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="How I Work"
        heading="A predictable path from idea to production."
      />
      <div className="process-grid">
        {steps.map((s, i) => (
          <div
            key={s.num}
            className="process-card tilt-card reveal"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="process-num">{s.num}</span>
            <h3 className="process-title">{s.title}</h3>
            <p className="process-body">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
