import "./Projects.css";
import { SiGithub } from "react-icons/si";
import Section from "./Section";
import { projects } from "./data";

function Projects() {
  return (
    <Section
      id="projects"
      index="01"
      label="SELECTED WORK"
      title={<>Things I&rsquo;ve <em>built</em>, tested &amp; shipped.</>}
      intro="Backend-first projects, from a civic grievance platform to an LSTM groundwater forecaster."
    >
      
      <div className="project-list">
        {projects.map((p) => (
          <article className="project spot" key={p.title}>
            <span className="project-number">{p.number}</span>

            <div className="project-main">
              <div className="project-top">
                <h3>{p.title}</h3>
                {p.status && <span className="project-status">● {p.status}</span>}
              </div>
              <span className="project-type">{p.type} · {p.year}</span>

              <p className="project-description">{p.description}</p>

              <div className="project-technologies">
                {p.technologies.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className="project-links">
                {p.github !== "#" && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} on GitHub`}>
                    <SiGithub /> Code
                  </a>
                )}
                {p.live !== "#" && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live site`}>
                    Live ↗
                  </a>
                )}
              </div>
            </div>

            <div className="project-preview">
              <img src={p.image} alt={`${p.title} preview`} loading="lazy" />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
