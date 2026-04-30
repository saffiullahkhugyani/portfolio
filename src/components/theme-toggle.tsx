"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "portfolio-theme";
const THEME_EVENT = "portfolio-theme-change";

function getClientThemeSnapshot(): Theme {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "dark" || saved === "light") return saved;

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function getServerThemeSnapshot(): Theme {
  return "dark";
}

function subscribeThemeChange(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: light)");
  const onMediaChange = () => onStoreChange();
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) onStoreChange();
  };

  window.addEventListener("storage", onStorage);
  window.addEventListener(THEME_EVENT, onStoreChange);
  media.addEventListener("change", onMediaChange);

  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(THEME_EVENT, onStoreChange);
    media.removeEventListener("change", onMediaChange);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeThemeChange,
    getClientThemeSnapshot,
    getServerThemeSnapshot
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title="Toggle theme"
    >
      <span aria-hidden="true">{theme === "dark" ? "☀️" : "🌙"}</span>
    </button>
  );
}
