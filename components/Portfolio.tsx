function Item({ title, desc, placeholder }: { title: string; desc: string; placeholder: string }) {
    return (
    <div className="portfolio-item">
    <div className="portfolio-image">
    <div className="placeholder-image">{placeholder}</div>
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
    <Item title="E-Commerce Platform" desc="A modern e-commerce solution with seamless user experience and secure payment integration." placeholder="Project 1" />
    <Item title="Mobile App Design" desc="Intuitive mobile application design with focus on accessibility and user engagement." placeholder="Project 2" />
    <Item title="Data Visualization Dashboard" desc="Interactive dashboard for real-time data analytics and business intelligence." placeholder="Project 3" />
    <Item title="Brand Identity System" desc="Complete brand identity package including logo, style guide, and marketing materials." placeholder="Project 4" />
    <Item title="SaaS Web Application" desc="Cloud-based SaaS platform with subscription management and team collaboration features." placeholder="Project 5" />
    <Item title="Portfolio Website" desc="Custom portfolio website with smooth animations and responsive design." placeholder="Project 6" />
    </div>
    </div>
    </section>
    );
    }