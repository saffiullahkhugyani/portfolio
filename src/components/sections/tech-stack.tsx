import { SectionHeader } from "@/components/ui/section-header";
import type { IconType } from "react-icons";
import {
  SiAndroid, SiApple, SiArduino, SiDart, SiEspressif,
  SiFigma, SiFirebase, SiFlutter, SiGit, SiHtml5,
  SiJavascript, SiJira, SiNextdotjs, SiNodedotjs, SiNpm,
  SiPostman, SiReact, SiSass, SiTypescript,
} from "react-icons/si";
import { FaCode, FaMicrochip, FaNetworkWired } from "react-icons/fa";

const groups: {
  label: string;
  color: string;
  tools: { name: string; icon: IconType }[];
}[] = [
  {
    label: "Mobile",
    color: "var(--accent)",
    tools: [
      { name: "React Native", icon: SiReact },
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Android", icon: SiAndroid },
      { name: "iOS", icon: SiApple },
    ],
  },
  {
    label: "Web",
    color: "var(--accent-2)",
    tools: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS / SASS", icon: SiSass },
    ],
  },
  {
    label: "Hardware & IoT",
    color: "var(--gold)",
    tools: [
      { name: "ESP32", icon: SiEspressif },
      { name: "Arduino", icon: SiArduino },
      { name: "Microcontrollers", icon: FaMicrochip },
      { name: "HW–SW Integration", icon: FaNetworkWired },
    ],
  },
  {
    label: "Tools & Delivery",
    color: "var(--accent)",
    tools: [
      { name: "Git", icon: SiGit },
      { name: "Firebase", icon: SiFirebase },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Jira", icon: SiJira },
      { name: "Figma", icon: SiFigma },
      { name: "n8n", icon: SiNpm },
      { name: "Postman", icon: SiPostman },
      { name: "Agile / Scrum", icon: FaCode },
    ],
  },
];

export function TechStack() {
  return (
    <section id="stack" className="section anchor-section">
      <SectionHeader
        eyebrow="Technology Stack"
        heading="Production-grade tools I ship with."
      />
      <div className="stack-grid">
        {groups.map((g, gi) => (
          <article
            key={g.label}
            className="stack-card reveal"
            style={{ transitionDelay: `${gi * 80}ms` }}
          >
            <div className="stack-card-header" style={{ "--cat-color": g.color } as React.CSSProperties}>
              <span className="stack-cat-dot" />
              <h3>{g.label}</h3>
            </div>
            <ul className="stack-pills">
              {g.tools.map((t) => (
                <li key={t.name} className="stack-pill">
                  <t.icon aria-hidden="true" />
                  {t.name}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
