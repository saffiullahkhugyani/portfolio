import { SectionHeader } from "@/components/ui/section-header";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const items = [
  {
    quote:
      "Saffiullah delivered the mobile app ahead of schedule and made sure the entire team understood what was shipped. That ownership is rare.",
    name: "Project Lead",
    context: "Cross-platform product delivery",
    stars: 5,
  },
  {
    quote:
      "The IoT integration worked first time in the field. He understood the hardware constraints and built around them — no hand-holding needed.",
    name: "Hardware Partner",
    context: "ESP32 + Flutter integration",
    stars: 5,
  },
  {
    quote:
      "Clean code, clear communication, zero surprises at launch. That's the whole job, and he nailed it every time.",
    name: "Client",
    context: "Next.js web platform",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section anchor-section">
      <SectionHeader
        eyebrow="Social Proof"
        heading="What people say after shipping with me."
        centered
      />
      <div className="testi-grid">
        {items.map((t, i) => (
          <article
            key={i}
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
                <p className="testi-name">{t.name}</p>
                <p className="testi-context">{t.context}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
