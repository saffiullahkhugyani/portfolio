"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";

const items = [
  {
    id: "mobile",
    label: "Mobile",
    title: "Apps that feel native on every device",
    points: [
      "React Native & Flutter — one codebase, platform-quality output",
      "Performance tuning for 60fps animations and fast load times",
      "Push notifications, offline mode, deep-link navigation",
      "Structured QA and App Store / Play Store release pipelines",
    ],
  },
  {
    id: "web",
    label: "Web",
    title: "Web platforms built for scale and longevity",
    points: [
      "Next.js App Router + TypeScript — fast, SEO-ready, maintainable",
      "REST and real-time API integration with clean data layers",
      "Reusable design systems with accessible components",
      "Performance budgets: Core Web Vitals, image optimization, SSR/SSG",
    ],
  },
  {
    id: "iot",
    label: "IoT",
    title: "Hardware-software systems that work in the real world",
    points: [
      "ESP32 & Arduino firmware + backend + mobile app — full stack",
      "MQTT, WebSockets, REST for device communication",
      "Reliable field-tested integrations, not lab prototypes",
      "Energy-efficient firmware design for battery-powered devices",
    ],
  },
] as const;

export function ExpertiseTabs() {
  const [active, setActive] = useState<(typeof items)[number]["id"]>("mobile");
  const current = items.find((i) => i.id === active) ?? items[0];

  return (
    <section className="section expertise-section">
      <SectionHeader
        eyebrow="How I Ship"
        heading="The engineering behind each domain."
      />
      <div className="expertise-wrap">
        <div className="tab-list" role="tablist" aria-label="Expertise areas">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active === item.id}
              className={`tab-btn ${active === item.id ? "tab-btn--active" : ""}`}
              onClick={() => setActive(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="tab-panel" role="tabpanel" key={current.id}>
          <h3>{current.title}</h3>
          <ul className="tab-points">
            {current.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
