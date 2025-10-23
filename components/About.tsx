export default function About() {
    return (
    <section className="about" id="about">
    <div className="container">
    <h2 className="section-title">About Me</h2>
    <div className="about-content">
    <p>
    Hello! I'm Leona Josephine, a passionate developer and designer who loves creating beautiful and functional
    digital experiences. With a keen eye for detail and a commitment to excellence, I bring ideas to life through
    clean code and thoughtful design.
    </p>
    <p>
    My journey in technology has been driven by curiosity and a desire to solve real-world problems. I
    specialize in modern web development, focusing on user experience and cutting-edge technologies.
    </p>
    <div className="skills">
        {["UI/UX", "React", "JS", "HTML"].map((skill) => (
            <button key={skill} className="skill-button">
                {skill}
            </button>
        ))}
    </div>
    </div>
    </div>
    </section>
    );
    }