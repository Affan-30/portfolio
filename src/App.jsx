import "./App.css";
import Hero from "./Hero.jsx";
import TechStack from "./TechStack.jsx";
import Projects from "./Projects.jsx";
import Experience from "./Experience.jsx";
import About from "./About.jsx";
// import Skills from "./Skills.jsx";
import Education from "./Education.jsx";
import Contact from "./Contact.jsx";
import Marquee from "./Marquee.jsx";
import ApiConsole from "./ApiConsole.jsx";

function App() {
  return (
    <main className="page">
      <nav className="nav">
        <a href="#top" className="logo" aria-label="Affan Shaikh home">a<span>.</span>s</a>
        <span className="nav-note">AFFAN -PORTFOLIO</span>
        <div className="nav-links">
          <a href="#projects">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact" className="nav-contact">Let’s talk <span>↗</span></a>
        </div>
      </nav>

      <div id="top" />
      <Hero />
      <TechStack />
      
      <Projects />
      <Marquee/>
      <Experience />
      <About />
      <ApiConsole/>
      {/* <Skills /> */}
      <Education />
      <Contact />

      <footer className="footer">
        <span>© 2026 Affan Shaikh · Made with intent.</span>
        <span>Solapur, India <a href="#top">↑ Back to top</a></span>
      </footer>
    </main>
  );
}
export default App;
