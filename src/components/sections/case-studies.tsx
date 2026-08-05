import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { FaArrowRight, FaGithub } from "react-icons/fa";

// ponytail: image is a plain path under /public — drop a file in public/projects/
// and set it here; null renders a branded placeholder until then.
const projects = [
  {
    num: "01",
    title: "Mind Lab — Flutter Mobile App",
    problem:
      "The Mind Lab platform needed a single mobile experience for auth, subscriptions, and certificate tracking across iOS and Android.",
    built:
      "Cross-platform Flutter app on Supabase, shipped alongside a Next.js subscription portal and certificate system as one product suite.",
    outcome: "Full product suite · Multi-platform · 119+ commits",
    stack: ["Flutter", "Dart", "Supabase", "Next.js", "TypeScript", "Tailwind CSS"],
    accent: "var(--accent)",
    github: "https://github.com/saffiullahkhugyani/mind_lab_app",
    live: null as string | null,
    image: null as string | null,
  },
  {
    num: "02",
    title: "Arduino Serial Monitor — Web App",
    problem:
      "Reading Arduino serial output meant installing desktop tooling — a barrier for quick debugging and classroom use.",
    built:
      "A browser-based serial monitor in Next.js + TypeScript that connects straight to serial ports via the Web Serial API and streams live data.",
    outcome: "Live deployed · Web Serial API · Zero-install debugging",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Web Serial API"],
    accent: "var(--accent-2)",
    github: "https://github.com/saffiullahkhugyani/arduino-serial-monitor",
    live: "https://arduino-serial-monitor.vercel.app",
    image: null as string | null,
  },
  {
    num: "03",
    title: "ESP32 Cam Car — IoT + Flutter",
    problem:
      "Controlling hardware in real time with live video needs firmware, a comms protocol, and a mobile UI that all agree with each other.",
    built:
      "End-to-end: ESP32 C++ firmware, a BLE communication protocol, and a Flutter control app with live camera streaming from the car.",
    outcome: "Real-time BLE control · Live video stream · Field tested",
    stack: ["ESP32", "C++", "Flutter", "Dart", "BLE", "Arduino"],
    accent: "var(--gold)",
    github: "https://github.com/saffiullahkhugyani/esp32cam-car-with-flutter",
    live: null as string | null,
    image: null as string | null,
  },
  {
    num: "04",
    title: "Mind Lab Certificate Management",
    problem:
      "Issuing and tracking certificates manually didn't scale for the Mind Lab ecosystem.",
    built:
      "A web platform on Next.js App Router + TypeScript with shadcn/ui — clean component architecture, deployed live on Vercel.",
    outcome: "Live on Vercel · shadcn/ui · 47 commits",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    accent: "var(--accent)",
    github: "https://github.com/saffiullahkhugyani/mind-lab-certificate-management-system",
    live: "https://mind-lab-certificate-management-system.vercel.app",
    image: null as string | null,
  },
  {
    num: "05",
    title: "AQTrading — Japanese Used Cars Export Platform",
    problem:
      "A car export business needed a client portal, an admin/CRO portal, and an API — without maintaining three divergent codebases.",
    built:
      "A Turbo monorepo shipping all three apps from one codebase, sharing a UI library, Prisma data layer, and TypeScript types.",
    outcome: "Monorepo · 3 apps · Client + Admin + API",
    stack: ["TypeScript", "Turbo", "Prisma", "pnpm", "Next.js"],
    accent: "var(--gold)",
    github: "https://github.com/saffiullahkhugyani/aqtrading",
    live: "https://aqtrading-web.vercel.app",
    image: null as string | null,
  },
  {
    num: "06",
    title: "React Native Expo Design Playground",
    problem:
      "React Native teams keep rebuilding the same theming, layout, and i18n plumbing on every new app.",
    built:
      "A production-ready design system starter: type-safe tokens → components, layout primitives, a live pattern playground with 10+ layouts, light/dark theming, i18n and RTL support.",
    outcome: "Expo 54 · React Native 0.81 · Type-safe theming",
    stack: ["React Native", "Expo", "TypeScript", "Expo Router"],
    accent: "var(--accent-2)",
    github: "https://github.com/saffiullahkhugyani/react-native-expo-design-playground",
    live: null as string | null,
    image: null as string | null,
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
            <div className="project-media" style={{ "--media-accent": p.accent } as React.CSSProperties}>
              {p.image ? (
                <Image
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <span className="project-media-num" aria-hidden="true">{p.num}</span>
              )}
            </div>
            <div className="project-card-inner">
              <h3>{p.title}</h3>
              <dl className="project-story">
                <div>
                  <dt>Problem</dt>
                  <dd>{p.problem}</dd>
                </div>
                <div>
                  <dt>What I built</dt>
                  <dd>{p.built}</dd>
                </div>
              </dl>
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
