"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Media } from "@/lib/projects";

export default function MediaRenderer({
  media,
  priority = false,
  className = "",
}: {
  media: Media;
  priority?: boolean;
  className?: string;
}) {
  if (media.type === "youtube") {
    return (
      <div className={`pm-media pm-media--iframe ${className}`}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${media.id}`}
          title={media.title ?? "YouTube video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  if (media.type === "video") {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
      const el = videoRef.current;
      if (!el) return;

      const t = window.setTimeout(() => {
        el.play()
          .then(() => setPaused(false))
          .catch(() => {
            // falls Autoplay blockiert ist, bleibt paused=true/Poster sichtbar
            setPaused(true);
          });
      }, 450);

      return () => window.clearTimeout(t);
    }, [media.src]);

    const toggle = () => {
      const el = videoRef.current;
      if (!el) return;

      if (el.paused) {
        el.play().then(() => setPaused(false)).catch(() => {});
      } else {
        el.pause();
        setPaused(true);
      }
    };

    return (
      <div
        className={`pm-media pm-media--clickable ${className}`}
        role="button"
        tabIndex={0}
        aria-label={paused ? "Play video" : "Pause video"}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
      >
        <video
          ref={videoRef}
          className="pm-video"
          muted
          loop
          playsInline
          preload="metadata"
          poster={media.poster}
          onPlay={() => setPaused(false)}
          onPause={() => setPaused(true)}
        >
          <source src={media.src} />
          Your browser does not support the video tag.
        </video>

        {/* optionales Overlay, wenn pausiert */}
        {paused && (
          <div className="pm-videoOverlay" aria-hidden="true">
            <span className="pm-videoOverlay__badge">Paused — tap to play</span>
          </div>
        )}
      </div>
    );
  }

  // image / gif
  return (
    <div className={`pm-media ${className}`}>
      <Image
        src={media.src}
        alt={media.alt ?? ""}
        fill
        priority={priority}
        sizes="(min-width: 900px) 60vw, 90vw"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
