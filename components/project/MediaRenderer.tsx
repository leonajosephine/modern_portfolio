"use client";

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
    return (
      <div className={`pm-media ${className}`}>
        <video
          className="pm-video"
          controls
          playsInline
          preload="metadata"
          poster={media.poster}
        >
          <source src={media.src} />
          Your browser does not support the video tag.
        </video>
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
