"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ThemeToggle } from "./theme-toggle";
import { FaBars, FaTimes } from "react-icons/fa";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#case-studies", label: "Work" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const MENU_ID = "mobile-nav-menu";

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id.replace("#", "")))
      .filter(Boolean) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-10% 0px -80% 0px", threshold: 0 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);

  return active;
}

function useFocusTrap(ref: React.RefObject<HTMLElement | null>, active: boolean) {
  useEffect(() => {
    if (!active || !ref.current) return;

    const el = ref.current;
    const focusable = el.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [active, ref]);
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const menuRef = useRef<HTMLDivElement>(null);

  const sectionIds = LINKS.map((l) => l.href);
  const activeSection = useScrollSpy(sectionIds);

  useFocusTrap(menuRef, open);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
          <a
            key={l.href}
            href={l.href}
            className={activeSection === l.href ? "nav-active" : ""}
            aria-current={activeSection === l.href ? "true" : undefined}
          >
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
        <>
          <div
            className="mobile-backdrop"
            aria-hidden="true"
            onClick={close}
          />
          <div
            id={MENU_ID}
            ref={menuRef}
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <nav className="mobile-nav-links" aria-label="Mobile navigation">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className={activeSection === l.href ? "mobile-nav-active" : ""}
                  aria-current={activeSection === l.href ? "true" : undefined}
                >
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
        </>
      )}
    </header>
  );
}
