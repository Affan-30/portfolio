import "./Marquee.css";

const WORDS = ["Build", "Test", "Ship", "Repeat"];

function Marquee() {
  const row = (key) => (
    <div className="marquee-group" key={key} aria-hidden={key !== "a"}>
      {WORDS.map((w) => (
        <span className="marquee-item" key={w}>
          <span className={w === "Ship" ? "filled" : ""}>{w}</span>
          <i>✦</i>
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee" role="img" aria-label="Build, test, ship, repeat">
      <div className="marquee-track">
        {row("a")}
        {row("b")}
        {row("c")}
      </div>
    </div>
  );
}

export default Marquee;
