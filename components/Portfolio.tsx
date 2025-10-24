"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { use } from "react";

type Size = "tall" | "wide" | "big" | "normal";

function Item({ title, desc, image, size = "normal", index }: { title:
string; desc: string; image: string; size?: Size; index: number; }) {
const sizeClass = size === "tall" ? "item--tall" : size === "wide" ? "item--wide" : size === "big" ? "item--big" : "";
return (
<motion.div
className={`portfolio-item ${sizeClass}`}
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.45, delay: 0.04 * index }}
>
<div className="portfolio-image" aria-hidden="true">
<Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
</div>
<div className="portfolio-caption">
<h3 className="portfolio-title">{title}</h3>
<p className="portfolio-desc">{desc}</p>
</div>
</motion.div>
);
}

export default function Portfolio() {
const items = [
  {
	title: "E-Commerce Platform",
	desc: "A modern e-commerce solution with seamless user experience and secure payment integration.",
	image: "/images/advertisement.jpg",
	size: "wide" as Size,
  },
  {
	title: "Mobile App Design",
	desc: "Intuitive mobile application design with focus on accessibility and user engagement.",
	image: "/images/metallic.png",
	size: "tall" as Size,
  },
  {
	title: "Data Visualization Dashboard",
	desc: "Interactive dashboard for real-time data analytics and business intelligence.",
	image: "/images/landingpage.jpeg",
  },
  {
	title: "Brand Identity System",
	desc: "Complete brand identity package including logo, style guide, and marketing materials.",
	image: "/images/websiteshop.jpeg",
	size: "big" as Size,
  },
  {
	title: "SaaS Web Application",
	desc: "Cloud-based SaaS platform with subscription management and team collaboration features.",
	image: "/images/netflix.jpg",
  },
  {
	title: "Portfolio Website",
	desc: "Custom portfolio website with smooth animations and responsive design.",
	image: "/images/collage.jpg",
	size: "wide" as Size,
  },
];
return (
<section className="portfolio" id="portfolio">
<div className="container">
<h2 className="section-title">Portfolio</h2>
<div className="portfolio-grid">
{items.map((it, i) => (
<Item key={it.title} index={i} {...it} />
))}
</div>
</div>
</section>
);
}
