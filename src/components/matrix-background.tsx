"use client";

import { useEffect, useRef } from "react";

type MatrixBackgroundProps = {
  className?: string;
  fontSize?: number;
  speed?: number;
};

const CHARS =
  "01アイウエオカキクケコサシスセソタチツテトナニヌネノマミムメモラリルレロ";

export function MatrixBackground({
  className,
  fontSize = 14,
  speed = 42,
}: MatrixBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameId = 0;
    let lastTime = 0;
    let columns = 0;
    let drops: number[] = [];

    const getMatrixColor = () =>
      getComputedStyle(document.documentElement)
        .getPropertyValue("--matrix-char")
        .trim() || "rgba(124, 155, 255, 0.62)";

    const getFadeColor = () =>
      getComputedStyle(document.documentElement)
        .getPropertyValue("--matrix-fade")
        .trim() || "rgba(8, 10, 17, 0.12)";

    let matrixColor = getMatrixColor();
    let fadeColor = getFadeColor();

    const setup = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = Math.max(1, container.clientWidth);
      const height = Math.max(1, container.clientHeight);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      columns = Math.floor(width / fontSize);
      drops = Array.from({ length: columns }, () =>
        Math.floor((Math.random() * height) / fontSize)
      );
    };

    const draw = (time: number) => {
      if (!ctx) return;
      const delta = time - lastTime;
      if (delta < speed) {
        frameId = requestAnimationFrame(draw);
        return;
      }
      lastTime = time;

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      ctx.fillStyle = fadeColor;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = matrixColor;
      ctx.font = `${fontSize}px var(--font-geist-mono), monospace`;

      for (let i = 0; i < drops.length; i += 1) {
        const text = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i] += 1;
        }
      }

      frameId = requestAnimationFrame(draw);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frameId);
      } else {
        matrixColor = getMatrixColor();
        fadeColor = getFadeColor();
        frameId = requestAnimationFrame(draw);
      }
    };

    const handleThemeChange = () => {
      matrixColor = getMatrixColor();
      fadeColor = getFadeColor();
    };

    const observer = new ResizeObserver(setup);
    observer.observe(container);
    setup();
    frameId = requestAnimationFrame(draw);
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("portfolio-theme-change", handleThemeChange);

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("portfolio-theme-change", handleThemeChange);
    };
  }, [fontSize, speed]);

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
