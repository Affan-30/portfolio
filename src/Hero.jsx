import "./Hero.css";
import "./HeroExtras.css";

import TechText from "./TechText";
import Typewriter from "./Typewriter";
import { LINKS } from "./data";

const WORDS = [
  "REST APIs with Spring Boot",
  "full-stack apps with React",
  "AI-powered features",
  "tests that catch bugs early",
];

function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">

        {/* LEFT SIDE */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <i /> Solapur, India · Class of 2027
          </div>

          <div style={{ width: "100%", height: "100px", position: "relative" }}>
            <TechText
              text="Affan Shaikh"
              fontWeight={600}
              fontSize={150}
              reveal="letter"
              dashLength={4}
              dashGap={2}
              specks={15}
              fontFamily=""
              color="#fefefe"
              accentColor="#85f5ee"
              letterSpacing={-0.05}
              reach={200}
              softness={0.7}
              strokeWidth={1.5}
              speed={1}
              lineStyle="dashed"
              selection
              labels
              draggable
              sweep
            />
          </div>

          <p className="hero-description">
            Computer Science student &amp; backend-focused developer
            building practical software with Java, Spring Boot and AI.
          </p>

          <div className="hero-typed" aria-live="off">
            <span className="prompt">$</span>building&nbsp;
            <Typewriter words={WORDS} />
          </div>

          <div className="hero-actions">
            <a href="#projects" className="hero-primary">
              Explore Projects
              <span>↗</span>
            </a>

            <a href={LINKS.resume} target="_blank" rel="noreferrer" className="hero-secondary">
              Résumé
              <span>↓</span>
            </a>

            <a href={LINKS.github} target="_blank" rel="noreferrer" className="hero-secondary">
              GitHub
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-visual">
          {/* Portrait frame */}
          <div className="portrait-frame">
            <div className="portrait-topline">
              <span>AS / 2026</span>
              <span>COMPUTER SCIENCE</span>
            </div>

            <img
              src={`${import.meta.env.BASE_URL}/Affan-Shaikh5.png`}
              alt="Portrait of Affan Shaikh"
            />

            <div className="portrait-caption">
              <span>Curious by default.</span>
              <span>Builder by choice.</span>
            </div>
          </div>

          {/* CGPA badge */}
          <div className="hero-stamp">
            <span>9.22</span>
            <small>
              CGPA
              <br />
              / 10
            </small>
          </div>

          {/* Location note */}
          <div className="visual-note">
            SOLAPUR
            <br />
            INDIA · 17.66°N
          </div>
        </div>
      </div>
    </section >
  );
}

export default Hero;
