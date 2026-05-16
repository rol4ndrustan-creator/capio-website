/* Shared UI bits */

const Eyebrow = ({ children, noLine, style }) => (
  <div className={"eyebrow" + (noLine ? " no-line" : "")} style={style}>{children}</div>
);

const Tag = ({ children, accent, style }) => (
  <span className={"tag" + (accent ? " tag-accent" : "")} style={style}>{children}</span>
);

const Button = ({ children, variant = "primary", icon, onClick, href, style }) => {
  const cls = "btn btn-" + variant;
  const inner = (
    <>
      <span>{children}</span>
      {icon !== false && <Icon name={icon || "arrow"} size={16} />}
    </>
  );
  if (href) return <a className={cls} href={href} style={style}>{inner}</a>;
  return <button className={cls} onClick={onClick} style={style}>{inner}</button>;
};

const ImgPlaceholder = ({ label, height = 320, style, children, tone }) => {
  const bg = tone === "dark" ? { background: "var(--ink)", color: "var(--paper)" } : {};
  return (
    <div className="img-ph" style={{ height, ...bg, ...style }}>
      {children || <span className="img-ph-label">{label}</span>}
    </div>
  );
};

/* — Animated counter (intersection-observer triggered) — */
const Counter = ({ end, suffix = "", duration = 1400, start = 0 }) => {
  const [val, setVal] = React.useState(start);
  const ref = React.useRef(null);
  const fired = React.useRef(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !fired.current) {
          fired.current = true;
          const t0 = performance.now();
          const tick = (now) => {
            const p = Math.min(1, (now - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(start + (end - start) * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
};

window.Eyebrow = Eyebrow;
window.Tag = Tag;
window.Button = Button;
window.ImgPlaceholder = ImgPlaceholder;
window.Counter = Counter;
