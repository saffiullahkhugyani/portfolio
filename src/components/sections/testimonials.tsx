import { SectionHeader } from "@/components/ui/section-header";
import { FaQuoteLeft, FaStar, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Testimonial = {
  quote: string;
  name: string; // real full name — no anonymous entries
  role: string; // e.g. "CTO, Suhail Smart Solutions"
  linkedin?: string;
  stars: number;
};

// ponytail: ships empty on purpose — anonymous quotes read as fake and hurt trust.
// Paste real testimonials (name + role + company, LinkedIn if possible) and the
// section switches from GitHub-proof mode to quote cards automatically.
const testimonials: Testimonial[] = [];

const githubProof = [
  {
    label: "Public repositories",
    value: "Browse the actual code",
    href: "https://github.com/saffiullahkhugyani?tab=repositories",
  },
  {
    label: "Live deployments",
    value: "3 projects running on Vercel",
    href: "https://arduino-serial-monitor.vercel.app",
  },
  {
    label: "GitHub profile",
    value: "@saffiullahkhugyani",
    href: "https://github.com/saffiullahkhugyani",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section anchor-section">
      {testimonials.length > 0 ? (
        <>
          <SectionHeader
            eyebrow="Social Proof"
            heading="What people say after shipping with me."
            centered
          />
          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <article
                key={t.name}
                className="testi-card tilt-card reveal"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="testi-stars" aria-label={`${t.stars} out of 5 stars`}>
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <FaStar key={si} aria-hidden="true" />
                  ))}
                </div>
                <FaQuoteLeft className="testi-quote-icon" aria-hidden="true" />
                <p className="testi-body">{t.quote}</p>
                <div className="testi-footer">
                  <div className="testi-avatar" aria-hidden="true">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="testi-name">
                      {t.linkedin ? (
                        <a href={t.linkedin} target="_blank" rel="noreferrer">
                          {t.name}
                        </a>
                      ) : (
                        t.name
                      )}
                    </p>
                    <p className="testi-context">{t.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </>
      ) : (
        <>
          <SectionHeader
            eyebrow="Proof of Work"
            heading="Don't take my word for it — check the code."
            sub="Every project links to a public repository. The work speaks for itself."
            centered
          />
          <div className="proof-grid">
            {githubProof.map((p, i) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="proof-card tilt-card reveal"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <FaGithub className="proof-icon" aria-hidden="true" />
                <div>
                  <p className="proof-label">{p.label}</p>
                  <p className="proof-value">
                    {p.value} <FaExternalLinkAlt aria-hidden="true" />
                  </p>
                </div>
              </a>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
