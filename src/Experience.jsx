import Section from "./Section";
import "./Experience.css";

const experience = [
  {
    period: "Sept 2025 – Present",
    role: "AI Data Annotator",
    org: "DataAnnotation",
    current: true,
    points: [
      "Evaluate AI-generated responses for factual accuracy, relevance, reasoning and instruction following against project-specific criteria.",
      "Rate responses, identify errors and give structured feedback that contributes to model training and improvement.",
    ],
    tags: ["LLM evaluation", "Reasoning", "Structured feedback"],
  },
  {
    period: "Nov 2025 – Jan 2026",
    role: "Virtual Intern",
    org: "Infosys Springboard",
    points: [
      "Built CivicPulse Hub, a grievance redressal and feedback platform for reporting and tracking civic issues.",
      "Designed it with Java, Spring Boot, React.js and MySQL following REST API best practices.",
    ],
    tags: ["Java", "Spring Boot", "React", "MySQL", "REST"],
  },
];

function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      label="EXPERIENCE"
      title={<>Where I&rsquo;ve been <em>working</em>.</>}
    >
      <div className="timeline">
        <span className="timeline-line" aria-hidden="true" />
        {experience.map((item) => (
          <article className="tl-item spot" key={item.role + item.org}>
            <span className="tl-node" aria-hidden="true" />
            <div className="tl-meta">
              <span>{item.period}</span>
              {item.current && <span className="tl-now">● now</span>}
            </div>
            <h3>
              {item.role} <span>@ {item.org}</span>
            </h3>
            <ul>
              {item.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className="tl-tags">
              {item.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
