"use client";

import { useEffect, useState } from "react";

type ThemeId = "dark" | "light" | "sunset" | "ocean";

const themes: { id: ThemeId; icon: string; label: string }[] = [
  { id: "dark", icon: "🌙", label: "Dark theme" },
  { id: "light", icon: "☀️", label: "Light theme" },
  { id: "sunset", icon: "🌅", label: "Sunset theme" },
  { id: "ocean", icon: "🌊", label: "Ocean theme" },
];

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<ThemeId>("dark");
  const [isNearTop, setIsNearTop] = useState(true);
  const [hoverReveal, setHoverReveal] = useState(false);

  // Initial theme laden
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("portfolio-theme") as ThemeId | null;
    const initial = stored || "dark";
    setCurrentTheme(initial);
    document.body.setAttribute("data-theme", initial);
  }, []);

  const setTheme = (theme: ThemeId) => {
    setCurrentTheme(theme);
    if (typeof window !== "undefined") {
      document.body.setAttribute("data-theme", theme);
      window.localStorage.setItem("portfolio-theme", theme);
    }
  };

  // Scroll: sichtbar, solange wir im Hero sind (oben)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const heroHeight = window.innerHeight * 0.7; // ~70% des Viewports
      setIsNearTop(y < heroHeight);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Maus: wenn man oben an den Rand fährt, kurz anzeigen
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isNearTop && e.clientY < 40) {
        setHoverReveal(true);
      } else if (!isNearTop && e.clientY > 80) {
        setHoverReveal(false);
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [isNearTop]);

  const barVisible = isNearTop || hoverReveal;

  return (
    <div className={`theme-switcher-bar ${barVisible ? "is-visible" : ""}`}>
      <div className="theme-switcher">
        {themes.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`theme-btn ${currentTheme === t.id ? "active" : ""}`}
            onClick={() => setTheme(t.id)}
            aria-label={t.label}
          >
            {t.icon}
          </button>
        ))}
      </div>
    </div>
  );
}
