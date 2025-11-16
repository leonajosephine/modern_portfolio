"use client";
import { useCallback } from "react";

export default function Contact() {
const onContact = useCallback(() => {
const email = "leona.redmann@gmx.net";
const subject = "Portfolio Inquiry";
const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
window.location.href = mailto;
}, []);

return (
<section className="contact" id="contact">
<div className="container">
<h2 className="section-title">Let's Work Together</h2>
<p className="contact-text">Have a project in mind? Let's create something amazing together.</p>
<button className="contact-btn" onClick={onContact}>Contact Me</button>
</div>
</section>
);
}