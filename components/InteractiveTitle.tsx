"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function InteractiveTitle({ text }: { text: string }) {
  const letters = Array.from(text);
  const container = useRef<HTMLHeadingElement>(null);

  return (
	<h1
	  ref={container}
	  className="hero-title interactive-title"
	  aria-label={text}
	>
	  {letters.map((ch, i) => (
		<motion.span
		  key={i}
		  className="interactive-letter"
		  whileHover={{ y: -4, scale: 1.08 }}
		  transition={{ type: "spring", stiffness: 500, damping: 20 }}
		>
		  {ch === " " ? "\u00A0" : ch}
		</motion.span>
	  ))}
	</h1>
  );
}