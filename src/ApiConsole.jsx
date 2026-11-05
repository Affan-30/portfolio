import { useEffect, useRef, useState } from "react";
import Section from "./Section";
import { EMAIL, LINKS, projects } from "./data";
import "./ApiConsole.css";

const endpoints = {
  skills: {
    path: "/skills",
    body: {
      languages: ["Java", "JavaScript", "SQL", "C", "HTML/CSS"],
      frameworks: ["Spring Boot", "Spring Security", "React.js", "Node.js", "Express.js"],
      databases: ["MySQL", "MongoDB", "Mongoose"],
      tools: ["Git", "GitHub"],
      testing: ["JUnit5", "Mockito", "AssertJ", "Postman", "API testing", "Unit & Integration testing", "Bug reporting"],
      coreCS: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
    },
  },
  profile: {
    path: "/profile",
    body: {
      name: "Affan Shaikh",
      role: "Backend-focused developer",
      location: "Solapur, India",
      education: "B.Tech CSE, Walchand Institute of Technology",
      graduating: 2027,
      cgpa: 9.22,
      focus: ["Java", "Spring Boot", "MERN", "AI"],
    },
  },
  projects: {
    path: "/projects",
    body: projects.map((p) => ({ title: p.title, year: p.year, stack: p.technologies })),
  },
  contact: {
    path: "/contact",
    body: { email: EMAIL, github: LINKS.github, linkedin: LINKS.linkedin, resume: LINKS.resume },
  },
};

const TOKEN = /("(?:\\.|[^"\\])*")(\s*:)?|\b(true|false|null)\b|(-?\d+(?:\.\d+)?)/g;

function highlight(json) {
  const out = [];
  let last = 0;
  let i = 0;
  let m;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(json))) {
    if (m.index > last) out.push(json.slice(last, m.index));
    if (m[1]) {
      out.push(<span key={i++} className={m[2] ? "j-key" : "j-str"}>{m[1]}</span>);
      if (m[2]) out.push(m[2]);
    } else {
      out.push(<span key={i++} className="j-num">{m[0]}</span>);
    }
    last = TOKEN.lastIndex;
  }
  out.push(json.slice(last));
  return out;
}

function ApiConsole() {
  const [active, setActive] = useState("skills");
  const [pending, setPending] = useState(false);
  const timer = useRef(0);

  useEffect(() => () => clearTimeout(timer.current), []);

  const select = (key) => {
    if (key === active) return;
    setActive(key);
    setPending(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setPending(false), 320);
  };

  const current = endpoints[active];
  // keep simple string arrays on one line so responses stay short
  const json = JSON.stringify(current.body, null, 2).replace(
    /\[\s+((?:"(?:\\.|[^"\\])*",?\s*)+)\]/g,
    (_, inner) => `[${inner.replace(/\s*\n\s*/g, " ").trim()}]`
  );

  return (
    <Section
      id="skills"
      index="04"
      label="SKILLS"
      title={<>Ask my <em>API</em>.</>}
      intro="Pick an endpoint. Everything here comes straight from my résumé."
    >
      <div className="console">
        <div className="console-nav" role="tablist" aria-label="API endpoints">
          {Object.entries(endpoints).map(([key, e]) => (
            <button
              key={key}
              role="tab"
              aria-selected={active === key}
              className={active === key ? "on" : ""}
              onClick={() => select(key)}
            >
              <b>GET</b> {e.path}
            </button>
          ))}
        </div>

        <div className="console-panel" role="tabpanel">
          <div className="console-bar">
            <span className="dots" aria-hidden="true"><i /><i /><i /></span>
            <code>GET /api/affan{current.path}</code>
            <span className={`console-status ${pending ? "wait" : ""}`}>
              {pending ? "sending…" : "200 OK · application/json"}
            </span>
          </div>
          <pre className={pending ? "fade" : ""}>
            <code>{highlight(json)}</code>
          </pre>
        </div>
      </div>
    </Section>
  );
}

export default ApiConsole;
