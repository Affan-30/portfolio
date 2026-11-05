import { useEffect, useState } from "react";
import { LINKS } from "./data";

const items = [
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["about", "About"],
  ["contact", "Contact"],
];

function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    items.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <nav className="nav">
      <a href="#top" className="logo" aria-label="Back to top">AS</a>
      <div className="nav-links">
        {items.map(([id, label], i) => (
          <a
            key={id}
            href={`#${id}`}
            className={`${active === id ? "active" : ""} ${i === 1 || i === 2 ? "hide-mobile" : ""}`}
          >
            <small>0{i + 1}</small> {label}
          </a>
        ))}
        <a href={LINKS.github} target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
    </nav>
  );
}

export default Nav;
