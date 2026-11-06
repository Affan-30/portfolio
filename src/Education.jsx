import Section from "./Section";

const education = [
  {
    period: "Sept 2023 – June 2027",
    title: "B.Tech, Computer Science & Engineering",
    org: "Walchand Institute of Technology, Solapur",
    note: "CGPA 9.22",
  },
  {
    period: "Feb 2023",
    title: "Higher Secondary Certificate (HSC)",
    org: "Walchand College of Arts and Science, Solapur",
    note: "81.83%",
  },
];

const certifications = [
  ["Java Foundation Certification", "Sept 2025"],
  ["Programming with Generative AI · NPTEL, IISc Bangalore", "Aug – Oct 2025"],
  ["Soft Skill Development · NPTEL, IIT Kharagpur", "Jan – Mar 2025"],
  ["3rd Prize, Urdu Article Writing · Solapur University", "Mar 2026"],
  ["Research Methodology · NPTEL, IIT Madras", "Jul – Oct 2025"],
];

function Education() {
  return (
    <Section
      id="education"
      index="05"
      label="EDUCATION & RECOGNITION"
      title={<>Learning, <em>formally</em> &amp; otherwise.</>}
    >
      <div className="rows">
        {education.map((e) => (
          <article className="row" key={e.title}>
            <span className="row-meta">{e.period}</span>
            <div>
              <h3>{e.title}</h3>
              <span className="row-sub">
                {e.org} · {e.note}
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="rows rows-gap">
        {certifications.map(([name, date]) => (
          <div className="row row-compact" key={name}>
            <span className="row-meta">{date}</span>
            <p className="row-text">{name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Education;
