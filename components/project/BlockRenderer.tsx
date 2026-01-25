"use client";

import type { Block } from "@/lib/projects";
import MediaRenderer from "./MediaRenderer";

export default function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="pm-blocks">
      {blocks.map((b, idx) => {
        switch (b.type) {
          case "text":
            return (
              <section className="pm-block" key={idx}>
                {b.title ? <h4 className="pm-h4">{b.title}</h4> : null}
                <p className="pm-p">{b.body}</p>
              </section>
            );

          case "bullets":
            return (
              <section className="pm-block" key={idx}>
                {b.title ? <h4 className="pm-h4">{b.title}</h4> : null}
                <ul className="pm-ul">
                  {b.items.map((it, i) => <li key={i}>{it}</li>)}
                </ul>
              </section>
            );

          case "stack":
            return (
              <section className="pm-block" key={idx}>
                {b.title ? <h4 className="pm-h4">{b.title}</h4> : null}
                <div className="pm-chips">
                  {b.items.map((it, i) => <span className="pm-chip" key={i}>{it}</span>)}
                </div>
              </section>
            );

          case "metrics":
            return (
              <section className="pm-block" key={idx}>
                {b.title ? <h4 className="pm-h4">{b.title}</h4> : null}
                <div className="pm-metrics">
                  {b.items.map((m, i) => (
                    <div className="pm-metric" key={i}>
                      <div className="pm-metric__label">{m.label}</div>
                      <div className="pm-metric__value">{m.value}</div>
                    </div>
                  ))}
                </div>
              </section>
            );

          case "gallery":
            return (
              <section className="pm-block" key={idx}>
                {b.title ? <h4 className="pm-h4">{b.title}</h4> : null}
                <div className="pm-gallery">
                  {b.items.map((media, i) => (
                    <MediaRenderer key={i} media={media} />
                  ))}
                </div>
              </section>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
