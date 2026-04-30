"use client";

import { useEffect, useRef } from "react";

type Props = {
  hexSize?: number;
  holdMs?: number;
};

type Cell = {
  cx: number;
  cy: number;
  alpha: number;
  peakAlpha: number;
  lastHit: number; // performance.now() timestamp of last hover hit
  holdMs: number;
  speed: number;
};

// Flat-top hexagon path
function drawFlatHex(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number
) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI) / 3;
    const px = x + r * Math.cos(angle);
    const py = y + r * Math.sin(angle);
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
}

export function HiveBackground({ hexSize = 34, holdMs = 1000 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameId = 0;
    const brush = hexSize * 2.4; // activation radius around cursor

    const cells: Cell[] = [];
    const dims = { w: 0, h: 0 };
    const colors = { stroke: "", glow: "", fill: "" };

    const readColors = () => {
      const s = getComputedStyle(document.documentElement);
      colors.stroke = s.getPropertyValue("--hive-stroke").trim();
      colors.glow = s.getPropertyValue("--hive-glow-color").trim();
      colors.fill = s.getPropertyValue("--hive-fill").trim();
    };

    const buildGrid = () => {
      cells.length = 0;
      const r = hexSize;
      const hStep = r * 1.5;
      const vStep = r * Math.sqrt(3);
      for (let col = -1; col * hStep < dims.w + r * 2; col++) {
        for (let row = -1; row * vStep < dims.h + r * 2; row++) {
          cells.push({
            cx: col * hStep,
            cy: row * vStep + (col % 2 !== 0 ? vStep / 2 : 0),
            alpha: 0,
            peakAlpha: 0,
            lastHit: 0,
            holdMs: holdMs + Math.random() * 500,
            speed: 0.08 + Math.random() * 0.06,
          });
        }
      }
    };

    const setup = () => {
      const dpr = window.devicePixelRatio || 1;
      dims.w = window.innerWidth;
      dims.h = window.innerHeight;
      canvas.width = Math.round(dims.w * dpr);
      canvas.height = Math.round(dims.h * dpr);
      canvas.style.width = `${dims.w}px`;
      canvas.style.height = `${dims.h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildGrid();
      readColors();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const now = performance.now();

      for (const cell of cells) {
        const dx = cell.cx - mx;
        const dy = cell.cy - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < brush) {
          const intensity = 1 - dist / brush;
          cell.peakAlpha = 0.35 + intensity * 0.65;
          cell.lastHit = now;
        }
      }
    };

    // Mobile: randomly light up individual cells since there is no cursor
    let mobileTimer: ReturnType<typeof setTimeout> | null = null;
    const isTouchOnly = !window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    const scheduleRandomFlicker = () => {
      const delay = 400 + Math.random() * 900;
      mobileTimer = setTimeout(() => {
        if (cells.length === 0) { scheduleRandomFlicker(); return; }
        const count = 1 + Math.floor(Math.random() * 3); // 1–3 cells at a time
        for (let i = 0; i < count; i++) {
          const cell = cells[Math.floor(Math.random() * cells.length)];
          cell.peakAlpha = 0.45 + Math.random() * 0.55;
          cell.lastHit = performance.now();
        }
        scheduleRandomFlicker();
      }, delay);
    };

    const draw = () => {
      ctx.clearRect(0, 0, dims.w, dims.h);
      const now = performance.now();
      const r = hexSize - 1.5;

      for (const cell of cells) {
        // Compute target: bright while within holdMs of last hit, then 0
        const target =
          cell.lastHit > 0 && now - cell.lastHit < cell.holdMs
            ? cell.peakAlpha
            : 0;

        const diff = target - cell.alpha;
        cell.alpha += diff * cell.speed * (diff > 0 ? 1 : 0.3);

        drawFlatHex(ctx, cell.cx, cell.cy, r);

        // Glow fill for active cells
        if (cell.alpha > 0.01) {
          ctx.globalAlpha = cell.alpha * 0.4;
          ctx.fillStyle = colors.fill;
          ctx.fill();
          ctx.globalAlpha = 1;
        }

        // Bright stroke when active, subtle when idle
        if (cell.alpha > 0.3) {
          ctx.strokeStyle = colors.glow;
          ctx.lineWidth = 1.5;
          ctx.globalAlpha = cell.alpha * 0.85;
          ctx.stroke();
          ctx.globalAlpha = 1;
        } else {
          ctx.strokeStyle = colors.stroke;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      frameId = requestAnimationFrame(draw);
    };

    const handleVisibility = () => {
      if (document.hidden) cancelAnimationFrame(frameId);
      else frameId = requestAnimationFrame(draw);
    };

    setup();
    frameId = requestAnimationFrame(draw);

    if (isTouchOnly) {
      scheduleRandomFlicker();
    } else {
      window.addEventListener("mousemove", handleMouseMove);
    }
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("portfolio-theme-change", readColors);

    const ro = new ResizeObserver(setup);
    ro.observe(document.documentElement);

    return () => {
      cancelAnimationFrame(frameId);
      if (mobileTimer) clearTimeout(mobileTimer);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("portfolio-theme-change", readColors);
      ro.disconnect();
    };
  }, [hexSize, holdMs]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <canvas ref={canvasRef} style={{ display: "block" }} />
    </div>
  );
}
