/* Footer */

const Footer = () =>
<footer style={{ background: "var(--ink)", color: "var(--paper)", paddingTop: 80, paddingBottom: 32, marginTop: 80 }}>
    <div className="container-wide">
      <div style={{
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: 48,
      paddingBottom: 60,
      borderBottom: "1px solid rgba(255,255,255,0.1)"
    }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="0.5" y="0.5" width="27" height="27" rx="6" stroke="rgba(255,255,255,0.7)" strokeWidth="1" />
              <path d="M8 14 L12 18 L20 9" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <circle cx="20.5" cy="8.5" r="2" fill="var(--accent-2)" />
            </svg>
            <div style={{ lineHeight: 1 }}>
              <div style={{ fontSize: 17, fontWeight: 600 }}>Capio</div>
              <div style={{ fontSize: 10.5, fontFamily: "var(--font-mono)", letterSpacing: "0.06em", color: "rgba(255,255,255,0.55)", marginTop: 3 }}>
                YOUR TECHNOLOGY CONNECTION
              </div>
            </div>
          </div>
          <p style={{ color: "rgba(255,255,255,0.65)", maxWidth: 320, fontSize: 14.5, lineHeight: 1.6 }}>
            Independent cybersecurity & compliance partner for banks, hospitals, and enterprises across Indonesia.
          </p>
          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.65)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Icon name="pin" size={14} color="rgba(255,255,255,0.5)" />
              Jakarta · Singapore
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Icon name="mail" size={14} color="rgba(255,255,255,0.5)" />
              info@capiotekologi.co.id
            </div>
          </div>
        </div>

        <FCol title="Services" links={[
      ["ISO Consulting", "#/service/iso-consulting"],
      ["IT Audit", "#/service/it-audit"],
      ["Security Technology", "#/service/security-tech"],
      ["Security Operation Center", "#/service/soc"],
      ["IT Manpower", "#/service/manpower"],
      ["Software Development", "#/service/software"],
      ["Training & Certification", "#/service/training"],
      ["IT Consultant", "#/service/it-consultant"]]
      } />

        <FCol title="Company" links={[
      ["About", "#/about"],
      ["Portfolio", "#/cases"],
      ["Insights", "#/insights"],
      ["Contact", "#/contact"]]
      } />

        <FCol title="Resources" links={[
      ["Capio Toolkit", "#/toolkit"],
      ["Sizing Wizards", "#/toolkit"],
      ["Compliance Library", "#/insights"],
      ["Request Proposal", "#/contact"]]
      } />
      </div>

      <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 32,
      gap: 16,
      flexWrap: "wrap",
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      letterSpacing: "0.04em",
      color: "rgba(255,255,255,0.55)"
    }}>
        <div>© 2026 PT CAPIO TEKNOLOGI INDONESIA · ALL RIGHTS RESERVED</div>
        <div style={{ display: "flex", gap: 24 }}>
          <a href="#/" className="hover-line">PRIVACY</a>
          <a href="#/" className="hover-line">TERMS</a>
          <a href="#/" className="hover-line">SECURITY</a>
        </div>
      </div>
    </div>
  </footer>;


const FCol = ({ title, links }) =>
<div>
    <div style={{
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.5)",
    marginBottom: 18
  }}>{title}</div>
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {links.map(([label, to]) =>
    <a key={label} href={to} style={{ fontSize: 14.5, color: "rgba(255,255,255,0.85)" }} className="hover-line">
          {label}
        </a>
    )}
    </div>
  </div>;


window.Footer = Footer;