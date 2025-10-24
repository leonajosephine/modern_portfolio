"use client";
import {motion} from "framer-motion";

export default function About() {
    return (
    <section className="about" id="about">
    <div className="container">
    <motion.h2
    className="section-title"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ duration: 0.5 }}
    >
    About Me
    </motion.h2>
    <motion.div
    className="about-content"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.35 }}
    transition={{ duration: 0.6 }}
    >
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
    </motion.div>
    </div>
    </section>
    );
    }