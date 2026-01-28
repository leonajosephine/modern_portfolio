"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import MediaRenderer from "./MediaRenderer";
import BlockRenderer from "./BlockRenderer";

function LinkIcon({ kind }: { kind?: string }) {
  // minimalistischer "Badge" – du kannst später Icons einsetzen
  const label =
    kind === "live" ? "LIVE" :
    kind === "repo" ? "CODE" :
    kind === "figma" ? "FIGMA" :
    kind === "video" ? "VIDEO" :
    kind === "app" ? "APP" : "LINK";
  return <span className="pm-linkKind">{label}</span>;
}

export default function ProjectModal({
  projects,
  openIndex,
  setOpenIndex,
  onClose,
}: {
  projects: Project[];
  openIndex: number | null;
  setOpenIndex: (v: number | null) => void;
  onClose: () => void;
}) {
  const isOpen = openIndex !== null && openIndex >= 0;
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const current = isOpen ? projects[openIndex as number] : null;

  // ESC + Pfeile + Scroll lock
  useEffect(() => {
    if (!isOpen) return;

    closeBtnRef.current?.focus();
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setOpenIndex(Math.min(projects.length - 1, (openIndex as number) + 1));
      if (e.key === "ArrowLeft") setOpenIndex(Math.max(0, (openIndex as number) - 1));
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = oldOverflow;
    };
  }, [isOpen, onClose, openIndex, projects.length, setOpenIndex]);

  return (
    <AnimatePresence>
      {isOpen && current ? (
        <>
          <motion.div
            className="pm-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="pm-dialog"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${current.title} project details`}
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
          >
            <header className="pm-header">
              <div className="pm-header__title">
                <h3 className="pm-h3">{current.title}</h3>
                {current.tags?.length ? (
                  <div className="pm-tags">
                    {current.tags.map(t => <span className="pm-tag" key={t}>#{t}</span>)}
                  </div>
                ) : null}
              </div>

              <button
                ref={closeBtnRef}
                className="pm-close"
                onClick={onClose}
                aria-label="Close project"
              >
                ×
              </button>
            </header>

            <div className="pm-body">
              {/* Left: Media */}
              <div className="pm-left">
                <MediaRenderer media={current.hero} priority className="pm-heroMedia" />

                <div className="pm-navRow">
                  <button
                    className="pm-nav"
                    onClick={() => setOpenIndex(Math.max(0, (openIndex as number) - 1))}
                    disabled={(openIndex as number) <= 0}
                    aria-label="Previous project"
                  >
                    ← Prev
                  </button>
                  <button
                    className="pm-nav"
                    onClick={() => setOpenIndex(Math.min(projects.length - 1, (openIndex as number) + 1))}
                    disabled={(openIndex as number) >= projects.length - 1}
                    aria-label="Next project"
                  >
                    Next →
                  </button>
                </div>
              </div>

              {/* Right: Meta + Links + Blocks */}
              <aside className="pm-right">
                <p className="pm-lead">{current.short}</p>

                {(current.meta?.role || current.meta?.year || current.meta?.duration || current.meta?.team) ? (
                  <div className="pm-meta">
                    {current.meta?.role ? <div><b>Role:</b> {current.meta.role}</div> : null}
                    {current.meta?.year ? <div><b>Year:</b> {current.meta.year}</div> : null}
                    {current.meta?.duration ? <div><b>Duration:</b> {current.meta.duration}</div> : null}
                    {current.meta?.team ? <div><b>Team:</b> {current.meta.team}</div> : null}
                  </div>
                ) : null}

                {current.links?.length ? (
                  <div className="pm-links">
                    {current.links.map((l, i) => (
                      <a key={i} className="pm-link" href={l.href} target="_blank" rel="noreferrer">
                        <LinkIcon kind={l.kind} />
                        <span>{l.label}</span>
                      </a>
                    ))}
                  </div>
                ) : null}

                <BlockRenderer blocks={current.blocks} />
              </aside>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
