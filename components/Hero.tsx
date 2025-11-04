"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import ScrollVelocity from "@/components/ui/shadcn-io/scroll-velocity";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function Hero() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window;
      document.documentElement.style.setProperty("--mx", `${(e.clientX / w) * 100}%`);
      document.documentElement.style.setProperty("--my", `${(e.clientY / h) * 100}%`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <header className="hero hero-3d">
      {/* 3D Canvas background */}
      <div className="hero-3d-canvas">
        <Hero3D />
      </div>

      {/* Cursor spotlight overlay */}
      <div className="cursor-spotlight" aria-hidden />

      {/* Content */}
      <div className="hero-content">
        <div className="scroll-velocity-container">
          {/* --- Hier ersetzt ScrollVelocity dein H1 --- */}
          <ScrollVelocity
            texts={["Leona Josephine Redmann", "Leona Josephine Redmann"]}
            velocity={100}
            className="hero-title"
          />
        </div>

        <div><p className="hero-subtitle">Creative Developer & Designer · UI/UX</p></div>
        
      </div>
    </header>
  );
}
