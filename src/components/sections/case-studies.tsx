import { SectionHeader } from "@/components/ui/section-header";
import { FaArrowRight, FaGithub } from "react-icons/fa";

const projects = [
  {
    num: "01",
    title: "Mind Lab — Flutter Mobile App",
    description:
      "Cross-platform Flutter mobile application built for the Mind Lab platform. Covers user authentication, subscription management, and certificate tracking — shipped as a full product suite alongside a Next.js subscription portal and certificate management system.",
    outcome: "Full product suite · 119+ commits · Multi-platform",
    stack: ["Flutter", "Dart", "Supabase", "Next.js", "TypeScript", "Tailwind CSS"],
    accent: "var(--accent)",
    github: "https://github.com/saffiullahkhugyani/mind_lab_app",
    live: null as string | null,
  },
  {
    num: "02",
    title: "Arduino Serial Monitor — Web App",
    description:
      "Browser-based serial monitor for Arduino hardware built with Next.js and TypeScript. Replaces traditional desktop tools with a modern web interface — connects directly to serial ports via the Web Serial API and displays live data in real time.",
    outcome: "Live deployed · Web Serial API · Real-time data",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Web Serial API"],
    accent: "var(--accent-2)",
    github: "https://github.com/saffiullahkhugyani/arduino-serial-monitor",
    live: "https://arduino-serial-monitor.vercel.app",
  },
  {
    num: "03",
    title: "ESP32 Cam Car — IoT + Flutter",
    description:
      "RC car controlled over Bluetooth LE via a Flutter mobile app, with live video streaming from an onboard ESP32 camera module. Built end-to-end: ESP32 C++ firmware, BLE communication protocol, and the Flutter control interface.",
    outcome: "Real-time BLE control · Live video stream · Field tested",
    stack: ["ESP32", "C++", "Flutter", "Dart", "BLE", "Arduino"],
    accent: "var(--gold)",
    github: "https://github.com/saffiullahkhugyani/esp32cam-car-with-flutter",
    live: null as string | null,
  },
  {
    num: "04",
    title: "Mind Lab Certificate Management",
    description:
      "Web platform for managing and issuing certificates within the Mind Lab ecosystem. Built with Next.js App Router, TypeScript, and shadcn/ui — featuring a clean component-based architecture and live deployment on Vercel.",
    outcome: "47 commits · Live on Vercel · shadcn/ui components",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    accent: "var(--accent)",
    github: "https://github.com/saffiullahkhugyani/mind-lab-certificate-management-system",
    live: "https://mind-lab-certificate-management-system.vercel.app",
  },
  {
    num: "05",
    title: "AQTrading — Japanese Used Cars Export Platform",
    description:
      "Full-stack monorepo for a Japanese used car export business. Ships three apps from one codebase: a client portal, an admin/CRO portal, and a backend API — all sharing a common UI library, database layer (Prisma), and TypeScript types via Turbo.",
    outcome: "Monorepo · 3 apps · Client + Admin + API",
    stack: ["TypeScript", "Turbo", "Prisma", "pnpm", "Next.js"],
    accent: "var(--gold)",
    github: "https://github.com/saffiullahkhugyani/aqtrading",
    live: "https://aqtrading-web.vercel.app",
  },
  {
    num: "06",
    title: "React Native Expo Design Playground",
    description:
      "A production-ready design system starter for React Native — transforms design tokens into type-safe, reusable components. Features layout primitives, a live pattern playground with 10+ layouts, light/dark theming, i18n support, and RTL layout compatibility.",
    outcome: "Expo 54 · React Native 0.81 · Type-safe theming",
    stack: ["React Native", "Expo", "TypeScript", "Expo Router"],
    accent: "var(--accent-2)",
    github: "https://github.com/saffiullahkhugyani/react-native-expo-design-playground",
    live: null as string | null,
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="section anchor-section">
      <SectionHeader
        eyebrow="Selected Work"
        heading="Real projects from my GitHub."
        sub="Actual repositories I've built and shipped — not placeholders."
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
