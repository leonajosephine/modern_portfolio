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
    Hi! I'm Leona, a passionate developer and designer and I love creating beautiful and functional
    digital experiences. I have always been fascinated by the ongoing development of technology and I am also a very creative person.

    I try to learn new things very regulary thats why my tech stack might be changing with new trends but underneath you will 
    find my core skills.
    </p>
    <p>
    If youre interested to see some of my projects I did mostly for fun - have a look at my portfolio!

    Of course feel free to reach out to me via email or on LinkedIn.
    </p>
    <div className="skills">
        {["UI/UX", "React", "JS", "HTML", "CSS", "Typescript", "Next.js", "Vercel", "git", "Sitecore", "API", "MangoDB"].map((skill) => (
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