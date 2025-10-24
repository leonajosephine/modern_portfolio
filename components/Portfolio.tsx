import Image from "next/image";

function Item({ title, desc, image }: { title: string; desc: string; image: string }) {
  return (
    <div className="portfolio-item">
      <div className="portfolio-image">
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
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
            />
            <Item
              title="Mobile App Design"
              desc="Intuitive mobile application design with focus on accessibility and user engagement."
              image="/images/metallic.png"
            />
            <Item
              title="Data Visualization Dashboard"
              desc="Interactive dashboard for real-time data analytics and business intelligence."
              image="/images/landingpage.jpeg"
            />
            <Item
              title="Brand Identity System"
              desc="Complete brand identity package including logo, style guide, and marketing materials."
              image="/images/websiteshop.jpeg"
            />
            <Item
              title="SaaS Web Application"
              desc="Cloud-based SaaS platform with subscription management and team collaboration features."
              image="/images/netflix.jpg"
            />
            <Item
              title="Portfolio Website"
              desc="Custom portfolio website with smooth animations and responsive design."
              image="/images/collage.jpg"
            />
          </div>
        </div>
      </section>
    );
  }
  