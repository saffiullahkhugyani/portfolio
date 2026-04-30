"use client";

import { useState } from "react";

const items = [
  {
    id: "mobile",
    label: "Mobile",
    title: "Mobile apps that feel native",
    points: [
      "React Native + Flutter production delivery",
      "Performance tuning and smooth UX",
      "Fast release cycles with reliable QA",
    ],
  },
  {
    id: "web",
    label: "Web",
    title: "Web platforms built to scale",
    points: [
      "Next.js + TypeScript architecture",
      "Maintainable code and reusable UI",
      "SEO-ready and high-performance pages",
    ],
  },
  {
    id: "iot",
    label: "IoT",
    title: "Hardware-software integrations",
    points: [
      "ESP32 and Arduino-connected flows",
      "Digital + physical product experiences",
      "Reliable API and device communication",
    ],
  },
] as const;

export function ExpertiseTabs() {
  const [active, setActive] = useState<(typeof items)[number]["id"]>(items[0].id);
  const current = items.find((item) => item.id === active) ?? items[0];

  return (
    <div className="expertise-tabs panel">
      <div className="section-head">
        <p className="eyebrow">Interactive Snapshot</p>
        <h2>What I can build for your team</h2>
      </div>
      <div className="tab-list" role="tablist" aria-label="Expertise tabs">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active === item.id}
            className={`tab-btn ${active === item.id ? "is-active" : ""}`}
            onClick={() => setActive(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="tab-panel" role="tabpanel" key={current.id}>
        <h3>{current.title}</h3>
        <ul>
          {current.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
