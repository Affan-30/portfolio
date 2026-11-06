import Section from "./Section";
import CountUp from "./CountUp";
import "./About.css";
import { projects } from "./data";

const no = projects.length
const stats = [
  { value: 9.22, decimals: 2, label: "CGPA", note: "B.Tech CSE" },
  { value: no, label: "Projects built", note: "Java, Node & AI" },
  { value: 2, label: "Roles", note: "Annotator & intern" },
  { value: 4, label: "Certificates & awards", note: "NPTEL, Java, Urdu writing" },
];

function About() {
  return (
    <Section id="about" index="03" label="ABOUT">
      <div className="about">
        <p className="about-lead">
          I&rsquo;m a final-year Computer Science student who loves the{" "}
          <em className="grad">backend</em>: APIs, data models and the tests that keep them honest.
        </p>
        <p className="about-body">
          I work with Java and Spring Boot, and build full-stack products in the MERN stack.
          I design REST APIs, relational and NoSQL data models and responsive interfaces, and I
          test them properly with JUnit, Mockito, AssertJ and Postman. I like shipping projects
          end to end, from authentication and authorization to AI-integrated features, on top of
          a solid grounding in data structures, algorithms, OOP, DBMS and operating systems.
        </p>
      </div>

      <div className="stats">
        {stats.map((s) => (
          <div className="stat spot" key={s.label}>
            <strong>
              <CountUp to={s.value} decimals={s.decimals} />
            </strong>
            <span>{s.label}</span>
            <small>{s.note}</small>
          </div>
        ))}
      </div>

      <div className="info-strip">
        <div>
          <span>Currently</span>
          <p>Final year B.Tech · Building &amp; learning</p>
        </div>
        <div>
          <span>Focus</span>
          <p>Java · Spring Boot · AI</p>
        </div>
        <div>
          <span>Based in</span>
          <p>Solapur, India</p>
        </div>
      </div>
    </Section>
  );
}

export default About;
