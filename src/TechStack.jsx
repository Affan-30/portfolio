import {
  SiSpringboot,
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiExpress,
  SiHtml5,
  SiCss,
  SiPostman,
} from "react-icons/si";

import { FaJava } from "react-icons/fa6";

import "./TechStack.css";

const technologies = [
  { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
];

function TechStack() {
  return (
    <section className="tech-stack">
      <p className="tech-stack-label">
        TECHNOLOGIES I WORK WITH
      </p>

      <div className="tech-carousel">
        <div className="tech-track">

          {/* First set */}
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <Icon
                key={`first-${index}`}
                className="tech-logo"
                style={{ color: tech.color }}
                title={tech.name}
              />
            );
          })}

          {/* Duplicate set for seamless loop */}
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <Icon
                key={`second-${index}`}
                className="tech-logo"
                style={{ color: tech.color }}
                title={tech.name}
              />
            );
          })}

        </div>
      </div>
      
    </section>
  );
}

export default TechStack;