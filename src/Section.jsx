import "./Sections.css";

function Section({ id, index, label, title, intro, children }) {
  return (
    <section id={id} className="content-section">
      <div className="section-heading">
        <div className="section-meta">
          <span>{index}</span>
          <span>{label}</span>
        </div>

        <h2 className="section-title">
          {title}
        </h2>

        {intro && (
          <p className="section-intro">{intro}</p>
        )}
      </div>

      <div className="section-content">
        {children}
      </div>
    </section>
  );
}

export default Section;