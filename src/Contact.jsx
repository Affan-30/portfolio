import { useEffect, useRef, useState } from "react";
import Section from "./Section";
import { EMAIL, LINKS } from "./data";
import "./Contact.css";

function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(0);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <Section id="contact" index="06" label="CONTACT">
      <div className="contact">
        <h2 className="contact-title">
          Let&rsquo;s build something <em>useful</em>.
        </h2>
        <p className="contact-lead">
          Open to internships and entry-level backend roles. If you have a problem worth solving,
          I&rsquo;d love to hear about it.
        </p>

        <div className="contact-actions">
          <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
            Say hello <span>↗</span>
          </a>
          <button className="btn btn-ghost" onClick={copy} aria-live="polite">
            {copied ? "Copied ✓" : EMAIL}
          </button>
        </div>

        <div className="contact-links">
          <a href={LINKS.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={LINKS.resume} target="_blank" rel="noreferrer">Résumé ↗</a>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
