export type ProjectLinkKind = "live" | "repo" | "figma" | "video" | "case" | "app";

export type ProjectLink = {
  label: string;
  href: string;
  kind?: ProjectLinkKind;
};

export type Media =
  | { type: "image"; src: string; alt?: string }
  | { type: "gif"; src: string; alt?: string }
  | { type: "video"; src: string; poster?: string } // mp4/webm in /public
  | { type: "youtube"; id: string; title?: string };

export type Block =
  | { type: "text"; title?: string; body: string }
  | { type: "bullets"; title?: string; items: string[] }
  | { type: "stack"; title?: string; items: string[] }
  | { type: "metrics"; title?: string; items: { label: string; value: string }[] }
  | { type: "gallery"; title?: string; items: Media[] };

export type Project = {
  slug: string;
  title: string;
  short: string;     // Text für die Karte
  cover: string;     // Bild fürs Grid
  hero: Media;       // Hauptmedia im Modal
  tags?: string[];
  meta?: {
    role?: string;
    year?: string;
    duration?: string;
    team?: string;
  };
  links?: ProjectLink[];
  blocks: Block[];
  size?: "normal" | "wide" | "tall" | "big"; // optional: für unregelmäßiges Grid
};

export const projects: Project[] = [
  {
    slug: "netflix-rebuild",
    title: "Netflix Rebuild",
    short: "Netflix-inspired UI with search, trailers & a personal list.",
    cover: "/images/netflix.jpg",
    hero: { type: "video", src: "/media/netflix-demo.mp4", poster: "/images/netflix-poster.jpg" },
    tags: ["Next.js", "TypeScript", "Framer Motion", "TMDB"],
    meta: { role: "Frontend", year: "2026", duration: "2 weeks", team: "Solo" },
    links: [
      { label: "Live Demo", href: "https://your-demo-url.com", kind: "live" },
      { label: "GitHub Repo", href: "https://github.com/your-repo", kind: "repo" },
    ],
    blocks: [
      { type: "text", title: "Goal", body: "Rebuild a Netflix-like browsing experience with modern transitions and fast navigation." },
      { type: "bullets", title: "Highlights", items: [
        "Trailer modal via TMDB /videos",
        "Search experience with responsive results grid",
        "My List stored in localStorage",
        "Keyboard-friendly interactions"
      ]},
      { type: "stack", title: "Tech Stack", items: ["Next.js (App Router)", "TypeScript", "Framer Motion", "TMDB API"] },
      { type: "gallery", title: "Screens / Interactions", items: [
        { type: "image", src: "/images/netflix-1.jpg", alt: "Homepage" },
        { type: "gif", src: "/images/netflix-scroll.gif", alt: "Scroll interaction" }
      ]}
    ],
    size: "wide"
  },

  {
    slug: "skincare-brand-site",
    title: "Skincare Brand Website",
    short: "Ultra clean product/brand website with editorial visuals.",
    cover: "/images/skincare-cover.jpg",
    hero: { type: "image", src: "/images/skincare-hero.jpg", alt: "Skincare hero" },
    tags: ["Design", "React", "UI", "Brand"],
    meta: { role: "UI/Frontend", year: "2025", duration: "1 week", team: "Solo" },
    links: [
      { label: "Case Study", href: "https://your-site.com/case/skincare", kind: "case" },
      { label: "Figma", href: "https://figma.com/...", kind: "figma" },
    ],
    blocks: [
      { type: "text", title: "Concept", body: "A minimal editorial layout focusing on typography, spacing and strong product storytelling." },
      { type: "metrics", title: "Outcome", items: [
        { label: "Focus", value: "Premium, clean aesthetic" },
        { label: "Structure", value: "Component-based sections" }
      ]},
      { type: "gallery", title: "Mockups", items: [
        { type: "image", src: "/images/skincare-1.jpg" },
        { type: "image", src: "/images/skincare-2.jpg" }
      ]}
    ],
    size: "tall"
  }
];
