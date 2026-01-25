"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/projects";
import ProjectModal from "@/components/project/ProjectModal";

export default function Portfolio() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>

        <div className="portfolio-grid">
          {projects.map((p, i) => {
            const sizeClass =
              p.size === "tall" ? "item--tall" :
              p.size === "wide" ? "item--wide" :
              p.size === "big"  ? "item--big"  : "";

            return (
              <div
                key={p.slug}
                className={`portfolio-item ${sizeClass}`}
                role="button"
                tabIndex={0}
                onClick={() => setOpenIndex(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpenIndex(i);
                  }
                }}
              >
                <div className="portfolio-image" aria-hidden="true">
                  <Image src={p.cover} alt="" fill style={{ objectFit: "cover" }} />
                </div>

                <div className="portfolio-caption">
                  <h3 className="portfolio-title">{p.title}</h3>
                  <p className="portfolio-desc">{p.short}</p>
                </div>
              </div>
            );
          })}
        </div>

        <ProjectModal
          projects={projects}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      </div>
    </section>
  );
}
