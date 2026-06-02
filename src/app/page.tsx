import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { ExpertiseTabs } from "@/components/expertise-tabs";
import { CaseStudies } from "@/components/sections/case-studies";
import { Capabilities } from "@/components/sections/capabilities";
import { TechStack } from "@/components/sections/tech-stack";
import { Experience } from "@/components/sections/experience";
import { Testimonials } from "@/components/sections/testimonials";
import { Process } from "@/components/sections/process";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="page-shell">
      <SiteNav />
      <main className="page-content">
        <Hero />
        <div className="section-divider" />
        <StatsBar />
        <div className="section-divider" />
        <ExpertiseTabs />
        <div className="section-divider" />
        <CaseStudies />
        <div className="section-divider" />
        <Capabilities />
        <div className="section-divider" />
        <TechStack />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Testimonials />
        <div className="section-divider" />
        <Process />
        <div className="section-divider" />
        <Contact />
      </main>
    </div>
  );
}
