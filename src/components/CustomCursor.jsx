import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const ring = useRef(null);

  useEffect(() => {
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { x: mouse.x, y: mouse.y };
    const size = 36;
    let raf;
    let hovered = false;

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onEnter = () => { hovered = true; };
    const onLeave = () => { hovered = false; };

    const bindHover = () => {
      document.querySelectorAll('a,button,[role=button]').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    const loop = () => {
      const lerp = hovered ? 0.12 : 0.18;
      const scale = hovered ? 1.6 : 1;
      pos.x += (mouse.x - pos.x) * lerp;
      pos.y += (mouse.y - pos.y) * lerp;

      if (ring.current) {
        const half = (size * scale) / 2;
        ring.current.style.transform = `translate(${pos.x - half}px, ${pos.y - half}px) scale(${scale})`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    bindHover();

    const observer = new MutationObserver(bindHover);
    observer.observe(document.body, { childList: true, subtree: true });

    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ring}
      className="fixed top-0 left-0 rounded-full border-2 border-red-500 pointer-events-none z-[9999]"
      style={{ width: 36, height: 36, willChange: 'transform' }}
    />
  );
}
