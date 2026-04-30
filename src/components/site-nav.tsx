"use client";

import { useState, useEffect, useCallback } from "react";
import { ThemeToggle } from "./theme-toggle";
import { FaBars, FaTimes } from "react-icons/fa";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#case-studies", label: "Work" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const MENU_ID = "mobile-nav-menu";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  // Close when viewport widens past the mobile breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 960) close();
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [close]);

  return (
    <header className="sticky-nav">
      <div className="nav-left">
        <p className="brand">SAFFIULLAH K.</p>
        <p className="role-pill">Software Engineer</p>
      </div>

      <nav className="nav-links" aria-label="Primary">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <ThemeToggle />
        <a className="nav-cta" href="#contact">
          Hire Me
        </a>
        <button
          type="button"
          className="hamburger"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls={MENU_ID}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <FaTimes aria-hidden="true" />
          ) : (
            <FaBars aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <div
          id={MENU_ID}
          className="mobile-menu"
          role="dialog"
          aria-label="Site navigation"
        >
          <nav className="mobile-nav-links" aria-label="Mobile navigation">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={close}>
                {l.label}
              </a>
            ))}
          </nav>
          <a
            className="btn btn-primary mobile-cta"
            href="#contact"
            onClick={close}
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
