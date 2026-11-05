import { useEffect, useRef } from "react";
import "./Ambient.css";

/* Scroll progress bar, cursor glow, dotted grid, film grain,
   and the mouse-position variables used by every ".spot" card. */
function Ambient() {
  const bar = useRef(null);
  const glow = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = 200;
    let x = tx;
    let y = ty;

    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight || 1;
      if (bar.current) bar.current.style.transform = `scaleX(${h.scrollTop / max})`;
    };

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      const card = e.target.closest?.(".spot");
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--x", `${e.clientX - r.left}px`);
        card.style.setProperty("--y", `${e.clientY - r.top}px`);
      }
    };

    const tick = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      if (glow.current) glow.current.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    if (fine) {
      window.addEventListener("pointermove", onMove);
      raf = requestAnimationFrame(tick);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="scroll-bar" ref={bar} aria-hidden="true" />
      <div className="cursor-glow" ref={glow} aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
    </>
  );
}

export default Ambient;
