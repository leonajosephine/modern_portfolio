import Image from "next/image";

type Size = "tall" | "wide" | "big" | "normal";

function Item({
    title,
    desc,
    image,
    size = "normal",
  }: {
    title: string;
    desc: string;
    image: string;
    size?: "tall" | "wide" | "big" | "normal";
  }) {
    const sizeClass =
      size === "tall" ? "item--tall" :
      size === "wide" ? "item--wide" :
      size === "big"  ? "item--big"  : "";
  
    return (
      <div className={`portfolio-item ${sizeClass}`}>
        <div className="portfolio-image" aria-hidden="true">
          <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
        </div>
  
        {/* NEU: Caption-Wrapper – steuert Ein-/Ausblenden & Layout */}
        <div className="portfolio-caption">
          <h3 className="portfolio-title">{title}</h3>
          <p className="portfolio-desc">{desc}</p>
        </div>
      </div>
    );
  }
  

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <div className="portfolio-grid">
          <Item
            title="E-Commerce Platform"
            desc="A modern e-commerce solution with seamless user experience and secure payment integration."
            image="/images/advertisement.jpg"
            size="wide"
          />
          <Item
            title="Mobile App Design"
            desc="Intuitive mobile application design with focus on accessibility and user engagement."
            image="/images/metallic.png"
            size="tall"
          />
          <Item
            title="Data Visualization Dashboard"
            desc="Interactive dashboard for real-time data analytics and business intelligence."
            image="/images/landingpage.jpeg"
            size="normal" //big
          />
          <Item
            title="Brand Identity System"
            desc="Complete brand identity package including logo, style guide, and marketing materials."
            image="/images/websiteshop.jpeg"
            size="big"
          />
          <Item
            title="SaaS Web Application"
            desc="Cloud-based SaaS platform with subscription management and team collaboration features."
            image="/images/netflix.jpg"
            size="normal"
          />
          <Item
            title="Portfolio Website"
            desc="Custom portfolio website with smooth animations and responsive design."
            image="/images/collage.jpg"
            size="wide"
          />
        </div>
      </div>
    </section>
  );
}
