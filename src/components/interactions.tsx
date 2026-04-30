"use client";
import { useEffect } from "react";

export function Interactions() {
  // Scroll reveal — adds .is-visible when element enters viewport
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 80px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // 3D tilt — tracks cursor per card and sets --rx/--ry/--mx/--my CSS vars
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const TILT = 6;
    const handlers = new Map<
      Element,
      { move: (e: MouseEvent) => void; leave: () => void }
    >();

    document.querySelectorAll<HTMLElement>(".tilt-card").forEach((el) => {
      const move = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        el.style.setProperty("--rx", `${((0.5 - y) * TILT * 2).toFixed(2)}deg`);
        el.style.setProperty("--ry", `${((x - 0.5) * TILT * 2).toFixed(2)}deg`);
        el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
        el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
      };
      const leave = () => {
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
      };
      handlers.set(el, { move, leave });
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      handlers.forEach(({ move, leave }, el) => {
        el.removeEventListener("mousemove", move as EventListener);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return null;
}
