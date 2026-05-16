/* Services overview */

const Services = () => {
  const all = window.CAPIO_SERVICES || [];
  return (
    <div className="page">
    <PageHeader
        crumb="Services"
        title={<>Eight practices. <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>One bench</em> of senior consultants.</>}
        lede="We deliberately keep our practice list focused. Each line below is led by certified senior practitioners — CISA, OSCP, Lead Auditor — backed by 240+ engagements across Indonesian regulated industries." />
      

    <section style={{ paddingTop: 24 }}>
      <div className="container-wide">
        <style>{`
          @media (max-width: 1200px) {
            .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 700px) {
            .services-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          {all.map((s, i) =>
            <a key={s.id} href={"#/service/" + s.id} className="card" style={{
              padding: 26, display: "flex", flexDirection: "column", gap: 14, minHeight: 320
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <Tag>{s.group}</Tag>
                <Icon name="arrowUpRight" size={18} />
              </div>
              <div style={{ marginTop: "auto" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--muted)", letterSpacing: "0.08em" }}>
                  {s.code} / 08
                </div>
                <h3 style={{ fontSize: 20, lineHeight: 1.2, letterSpacing: "-0.015em", marginTop: 6 }}>{s.name}</h3>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--muted)",
                  letterSpacing: "0.06em", marginTop: 6, textTransform: "uppercase" }}>
                  {s.short}
                </div>
                <p style={{ marginTop: 14, fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55 }} dangerouslySetInnerHTML={{ __html: s.blurb }} />
                <div style={{ marginTop: 18, paddingTop: 14, borderTop: "1px solid var(--line)",
                  display: "flex", justifyContent: "space-between",
                  fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.05em",
                  color: "var(--muted)" }}>
                  <span>{s.duration.toUpperCase()}</span>
                </div>
              </div>
            </a>
            )}
        </div>
      </div>
    </section>

    <section style={{ background: "var(--paper-2)" }}>
      <div className="container-wide">
        <div className="section-head">
          <div>
            <Eyebrow>Frameworks we work with</Eyebrow>
            <h2 style={{ marginTop: 14 }}>Aligned to what your regulator actually accepts.</h2>
          </div>
          <div style={{ color: "var(--ink-2)", fontSize: 16.5 }}>
            We translate between frameworks &mdash; ISO, NIST, OJK, BI, Kemenkes, PDP &mdash; so your evidence is auditable in every direction.
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 0,
            borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
          {[
            "ISO 27001", "ISO 27017", "ISO 27018", "NIST CSF", "NIST 800-53",
            "OJK SE 21", "BI PJP2", "PDP Law", "PCI DSS", "OWASP ASVS",
            "ISO 27799", "Kemenkes"].
            map((f) =>
            <div key={f} style={{
              padding: "26px 18px", borderRight: "1px solid var(--line)", borderBottom: "1px solid var(--line)",
              fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.04em",
              color: "var(--ink-2)"
            }}>{f}</div>
            )}
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>);

};
const PageHeader = ({ crumb, title, lede }) =>
<section style={{ paddingTop: 48, paddingBottom: 56 }}>
    <div className="container-wide">
      <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)",
      fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        <a href="#/" className="hover-line">Capio</a>
        <Icon name="chevron" size={11} color="var(--muted)" />
        <span style={{ color: "var(--ink)" }}>{crumb}</span>
      </div>
      <h1 style={{
      fontSize: "clamp(40px, 5.5vw, 76px)", lineHeight: 1.02, letterSpacing: "-0.03em",
      marginTop: 28, maxWidth: "16ch", fontFamily: "Fraunces"
    }}>{title}</h1>
      {lede && <p style={{ marginTop: 28, fontSize: 18, color: "var(--ink-2)", maxWidth: 640, lineHeight: 1.55 }}>{lede}</p>}
    </div>
  </section>;


window.Services = Services;
window.PageHeader = PageHeader;
window.ALL_SERVICES = window.CAPIO_SERVICES;