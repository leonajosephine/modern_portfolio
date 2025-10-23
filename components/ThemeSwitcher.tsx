"use client";
import { useState, useEffect, useCallback } from "react";

type Theme = "dark" | "light" | "sunset" | "ocean";

const THEMES: Theme[] = ["dark", "light", "sunset", "ocean"];

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState<Theme>("dark");
    const [mounted, setMounted] = useState(false);
    
    // read saved theme on mount
    useEffect(() => {
        const saved = (typeof window !== "undefined" && localStorage.getItem("portfolio-theme")) as Theme | null;
        const initial = saved && THEMES.includes(saved) ? saved : "dark";
        setTheme(initial);
        // set attribute immediately after hydration
        document.body.setAttribute("data-theme", initial);
        setMounted(true);
    }, []); 

    const applyTheme = useCallback((t: Theme) => {
        setTheme(t);
        document.body.setAttribute("data-theme", t);
        localStorage.setItem("portfolio-theme", t);
    }, []);

    if (!mounted) return null; // avoid hydration mismatch flash

    return (
        <div className="theme-switcher" role="group" aria-label="Theme switcher">
          {THEMES.map((t) => (
            <button
              key={t}
              className={`theme-btn ${theme === t ? "active" : ""}`}
              onClick={() => applyTheme(t)}
              aria-pressed={theme === t}
              data-theme={t}
              title={
                t === "dark" ? "Dark Theme" :
                t === "light" ? "Light Theme" :
                t === "sunset" ? "Sunset Theme" : "Ocean Theme"
              }
            >
              {t === "dark" ? "🌙" : t === "light" ? "☀️" : t === "sunset" ? "🌅" : "🌊"}
            </button>
          ))}
        </div>
      );
      
}

