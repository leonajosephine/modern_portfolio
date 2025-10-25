"use client";
import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function InteractiveTitle({ text }: { text: string }) {
  const letters = Array.from(text);
  const containerRef = useRef<HTMLHeadingElement>(null);
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [width, setWidth] = useState(0);
  const [xs, setXs] = useState<number[]>([]);

  // Layout-Messung: Gesamtbreite + X-Offsets pro Letter
  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setWidth(rect.width);

    const arr = spansRef.current.map((s) => {
      if (!s) return 0;
      const r = s.getBoundingClientRect();
      return r.left - rect.left; // Offset relativ zum H1
    });
    setXs(arr);
  }, [text]);

  // Reflow bei Resize (optional, damit’s bei Breakpoints passt)
  useEffect(() => {
    const on = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setWidth(rect.width);
      const arr = spansRef.current.map((s) => {
        if (!s) return 0;
        const r = s.getBoundingClientRect();
        return r.left - rect.left;
      });
      setXs(arr);
    };
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);

  return (
    <h1 ref={containerRef} className="hero-title interactive-title" aria-label={text}>
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          ref={(el) => {spansRef.current[i] = el}}
          className="interactive-letter gradient-letter"
          whileHover={{ y: -4, scale: 1.2 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
          // CSS-Variablen für die Gradient-Ausrichtung
          style={
            width && xs[i] !== undefined
              ? ({ ["--gw" as any]: `${width}px`, ["--gx" as any]: `${xs[i]}px` } as React.CSSProperties)
              : undefined
          }
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </h1>
  );
}
