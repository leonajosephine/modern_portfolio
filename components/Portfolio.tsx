"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

type Size = "tall" | "wide" | "big" | "normal";

type Project = {
  title: string;
  desc: string;
  image: string;
  size?: Size;
};

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    desc: "A modern e-commerce solution with seamless user experience and secure payment integration.",
    image: "/images/advertisement.jpg",
    size: "wide",
  },
  {
    title: "Mobile App Design",
    desc: "Intuitive mobile application design with focus on accessibility and user engagement.",
    image: "/images/metallic.png",
    size: "tall",
  },
  {
    title: "Data Visualization Dashboard",
    desc: "Interactive dashboard for real-time data analytics and business intelligence.",
    image: "/images/landingpage.jpeg",
    size: "normal",
  },
  {
    title: "Brand Identity System",
    desc: "Complete brand identity package including logo, style guide, and marketing materials.",
    image: "/images/websiteshop.jpeg",
    size: "big",
  },
  {
    title: "SaaS Web Application",
    desc: "Cloud-based SaaS platform with subscription management and team collaboration features.",
    image: "/images/netflix.jpg",
    size: "normal",
  },
  {
    title: "Portfolio Website",
    desc: "Custom portfolio website with smooth animations and responsive design.",
    image: "/images/collage.jpg",
    size: "wide",
  },
];

function Card({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const sizeClass =
    project.size === "tall"
      ? "item--tall"
      : project.size === "wide"
      ? "item--wide"
      : project.size === "big"
      ? "item--big"
      : "";

  return (
    <div
      className={`portfolio-item ${sizeClass}`}
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
    >
      <div className="portfolio-image" aria-hidden="true">
        <Image src={project.image} alt="" fill style={{ objectFit: "cover" }} />
      </div>
      <div className="portfolio-caption">
        <h3 className="portfolio-title">{project.title}</h3>
        <p className="portfolio-desc">{project.desc}</p>
      </div>
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
  onNext,
  onPrev,
  isFirst,
  isLast,
}: {
  project: Project;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && !isLast) onNext();
      if (e.key === "ArrowLeft" && !isFirst) onPrev();
    };
    window.addEventListener("keydown", onKey);
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = oldOverflow;
    };
  }, [onClose, onNext, onPrev, isFirst, isLast]);

  return (
    <>
      <div className="portfolio-modal-backdrop" onClick={onClose} />
      <div
        className="portfolio-modal"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        <header className="portfolio-modal-header">
          <h3>{project.title}</h3>
          <button
            ref={closeBtnRef}
            className="portfolio-modal-close"
            onClick={onClose}
            aria-label="Close project details"
          >
            ×
          </button>
        </header>

        <div className="portfolio-modal-body">
          <div className="portfolio-modal-image">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 900px) 60vw, 90vw"
              style={{ objectFit: "cover" }}
            />
            {!isFirst && (
              <button
                className="portfolio-modal-nav portfolio-modal-prev"
                onClick={onPrev}
                aria-label="Previous project"
              >
                ←
              </button>
            )}
            {!isLast && (
              <button
                className="portfolio-modal-nav portfolio-modal-next"
                onClick={onNext}
                aria-label="Next project"
              >
                →
              </button>
            )}
          </div>

          <div className="portfolio-modal-meta">
            <p>{project.desc}</p>
            {/* hier später: Tech-Stack, Links, Learnings etc. */}
          </div>
        </div>
      </div>
    </>
  );
}

export default function Portfolio() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = () => setOpenIndex(null);
  const open = (idx: number) => setOpenIndex(idx);

  const showNext = () => {
    setOpenIndex((idx) =>
      idx === null || idx >= projects.length - 1 ? idx : idx + 1
    );
  };
  const showPrev = () => {
    setOpenIndex((idx) => (idx === null || idx <= 0 ? idx : idx - 1));
  };

  const current =
    openIndex !== null && openIndex >= 0 ? projects[openIndex] : null;

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>

        {/* dein bestehendes Grid */}
        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <Card key={p.title} project={p} onOpen={() => open(i)} />
          ))}
        </div>

        {/* Overlay */}
        {current && openIndex !== null && (
          <ProjectModal
            project={current}
            onClose={close}
            onNext={showNext}
            onPrev={showPrev}
            isFirst={openIndex === 0}
            isLast={openIndex === projects.length - 1}
          />
        )}
      </div>
    </section>
  );
}
