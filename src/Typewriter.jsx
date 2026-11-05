import { useEffect, useState } from "react";

function Typewriter({ words }) {
  const [text, setText] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ? words[0] : ""
  );

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0;
    let j = 0;
    let deleting = false;
    let t;
    const tick = () => {
      const word = words[i];
      j += deleting ? -1 : 1;
      setText(word.slice(0, j));
      let delay = deleting ? 30 : 65;
      if (!deleting && j === word.length) {
        deleting = true;
        delay = 1500;
      } else if (deleting && j === 0) {
        deleting = false;
        i = (i + 1) % words.length;
        delay = 350;
      }
      t = setTimeout(tick, delay);
    };
    t = setTimeout(tick, 700);
    return () => clearTimeout(t);
  }, [words]);

  return (
    <>
      <span className="typed">{text}</span>
      <span className="caret" aria-hidden="true" />
    </>
  );
}

export default Typewriter;
