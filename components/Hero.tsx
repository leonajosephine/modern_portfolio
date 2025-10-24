"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import InteractiveTitle from "./InteractiveTitle";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function Hero() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
	const onMove = (e: MouseEvent) => {
	  const { innerWidth: w, innerHeight: h } = window;
	  setPos({ x: (e.clientX / w) * 100, y: (e.clientY / h) * 100 });
	  document.documentElement.style.setProperty("--mx", `${(e.clientX / w) * 100}%`);
	  document.documentElement.style.setProperty("--my", `${(e.clientY / h) * 100}%`);
	};

	window.addEventListener("mousemove", onMove);
	return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
	<header className="hero hero-3d">
	  {/* 3D Canvas as background */}
	  <div className="hero-3d-canvas">
		<Hero3D />
	  </div>
	  {/* Cursor spotlight overlay */}
	  <div className="cursor-spotlight" aria-hidden />
	  {/* Content */}
	  <div className="hero-content">
		<InteractiveTitle text="Leona Josephine Redmann" />
		<p className="hero-subtitle">Creative Developer & Designer · UI/UX</p>
	  </div>
	</header>
  );
}