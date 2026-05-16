/* Nav — sticky top, hash-routed */

const NAV_LINKS = [
  { label: "Services", to: "#/services" },
  { label: "Portfolio", to: "#/cases" },
  { label: "Case Studies", to: "#/case-studies" },
  { label: "Insights", to: "#/insights" },
  { label: "About", to: "#/about" },
];

const Nav = ({ route, navigate }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle = {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: scrolled ? "rgba(250, 248, 243, 0.85)" : "transparent",
    backdropFilter: scrolled ? "saturate(140%) blur(10px)" : "none",
    WebkitBackdropFilter: scrolled ? "saturate(140%) blur(10px)" : "none",
    borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
    transition: "background .25s ease, border-color .25s ease",
  };

  const isActive = (to) => {
    if (to === "#/") return route === "/" || route === "";
    return ("#" + route).startsWith(to);
  };

  return (
    <nav style={navStyle}>
      <div className="container-wide" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 72,
      }}>
        <a href="#/" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
          <Logo />
        </a>

        <div className="nav-links" style={{
          display: "flex", gap: 4, alignItems: "center",
        }}>
          {NAV_LINKS.map(l => (
            <a key={l.to} href={l.to}
               style={{
                 padding: "8px 14px",
                 borderRadius: 999,
                 fontSize: 14.5,
                 fontWeight: 500,
                 color: isActive(l.to) ? "var(--ink)" : "var(--ink-2)",
                 background: isActive(l.to) ? "var(--paper-2)" : "transparent",
                 transition: "background .15s ease, color .15s ease",
               }}>
              {l.label}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a href="#/toolkit" className="hover-line" style={{ fontSize: 14, fontWeight: 500, marginRight: 8 }}>
            Open Toolkit
          </a>
          <Button href="#/contact" icon="arrow">Talk to us</Button>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

const Logo = () => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <img src="assets/capio-logo.png" alt="Capio Teknologi Indonesia"
         style={{ height: 42, width: "auto", display: "block" }}/>
  </div>
);

window.Nav = Nav;
window.Logo = Logo;
