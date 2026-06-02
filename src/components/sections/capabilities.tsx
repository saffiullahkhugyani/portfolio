import { SectionHeader } from "@/components/ui/section-header";
import { FaMobileAlt, FaGlobe, FaMicrochip } from "react-icons/fa";
import type { IconType } from "react-icons";

const items: { icon: IconType; title: string; body: string; points: string[] }[] = [
  {
    icon: FaMobileAlt,
    title: "Mobile Engineering",
    body: "Production apps that feel native across iOS and Android.",
    points: [
      "React Native & Flutter delivery",
      "Platform-specific performance tuning",
      "Push notifications, offline support",
      "Structured UAT & release pipelines",
    ],
  },
  {
    icon: FaGlobe,
    title: "Web Engineering",
    body: "Scalable platforms built for long-term maintainability.",
    points: [
      "Next.js App Router + TypeScript",
      "REST & real-time API integration",
      "SEO-ready, high-performance pages",
      "Clean architecture, reusable components",
    ],
  },
  {
    icon: FaMicrochip,
    title: "IoT Integration",
    body: "Bridging software and hardware into working products.",
    points: [
      "ESP32 & Arduino development",
      "Device ↔ App communication",
      "Firmware + backend + mobile, end-to-end",
      "Real-world tested, not lab-only",
    ],
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="section anchor-section">
      <SectionHeader
        eyebrow="Core Capabilities"
        heading="What I can build for your team."
      />
      <div className="caps-grid">
        {items.map((item, i) => (
          <article
            key={item.title}
            className="cap-card tilt-card reveal"
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <div className="cap-icon-wrap">
              <item.icon aria-hidden="true" className="cap-icon" />
            </div>
            <h3>{item.title}</h3>
            <p className="cap-body">{item.body}</p>
            <ul className="cap-points">
              {item.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
