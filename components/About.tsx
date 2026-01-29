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
    <div className="skills-accordion" aria-label="Skills">
        <details className="skills-group" open>
            <summary className="skills-summary">
            <span>Technical Skills</span>
            <span className="skills-summary__hint">Core</span>
            </summary>

            <div className="skills-chips">
            {[
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "HTML",
                "CSS",
                "APIs",
            ].map((skill) => (
                <span key={skill} className="skill-chip">
                {skill}
                </span>
            ))}
            </div>
        </details>

        <details className="skills-group">
            <summary className="skills-summary">
            <span>Tools</span>
            <span className="skills-summary__hint">Daily</span>
            </summary>

            <div className="skills-chips">
            {[
                "Git",
                "Vercel",
                "Figma",
                "Storybook",
                "Jira",
                "Sitecore",
            ].map((skill) => (
                <span key={skill} className="skill-chip">
                {skill}
                </span>
            ))}
            </div>
        </details>

        <details className="skills-group">
            <summary className="skills-summary">
            <span>Soft Skills</span>
            <span className="skills-summary__hint">Collaboration</span>
            </summary>

            <div className="skills-chips">
            {[
                "Creative problem solving",
                "Communication",
                "Teamwork",
                "Ownership",
                "Fast learner",
                "Attention to detail",
            ].map((skill) => (
                <span key={skill} className="skill-chip">
                {skill}
                </span>
            ))}
            </div>
        </details>

        <details className="skills-group">
            <summary className="skills-summary">
            <span>Languages</span>
            <span className="skills-summary__hint">DE / EN</span>
            </summary>

            <div className="skills-chips">
            {["German (native)", "English (fluent)"].map((skill) => (
                <span key={skill} className="skill-chip">
                {skill}
                </span>
            ))}
            </div>
        </details>
        </div>

    </motion.div>
    </div>
    </section>
    );
    }