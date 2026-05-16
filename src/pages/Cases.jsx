/* Portfolio — comprehensive client showcase organised by sector.
   Data lives in window.CAPIO_CLIENTS — easy to swap with a CMS feed later. */

const FEATURED_CASES = [
  {
    id: 1, industry: "Banking · BFSI", years: "2024–2025",
    title: "ISO 27001 certification for a tier-1 retail bank.",
    summary: "142 controls across 9 business units. 18-month programme. Zero major findings at stage-2 audit.",
    metrics: [["Controls", "142"], ["Business units", "9"], ["Major findings", "0"], ["Duration", "18 mo"]],
    featured: true,
  },
  {
    id: 2, industry: "Healthcare · Government", years: "2025",
    title: "EMR audit readiness for RSUD Dr. Soedarso.",
    summary: "Kemenkes-aligned readiness assessment across the regional hospital network; remediation reduced gaps by 78%.",
    metrics: [["Sites", "4"], ["Gap reduction", "78%"], ["Records", "1.2M"], ["Duration", "9 mo"]],
  },
  {
    id: 3, industry: "Fintech · Payments", years: "2025",
    title: "PJP2 audit for a top-3 e-wallet ahead of BI submission.",
    summary: "BI-aligned audit on QRIS, direct debit, and reconciliation controls. Submission accepted on first review.",
    metrics: [["Tx/day", "12M"], ["Findings", "4 minor"], ["Acceptance", "First review"], ["Duration", "10 wk"]],
  },
];

const Cases = () => {
  const sectors = window.CAPIO_CLIENTS || [];
  const [filter, setFilter] = React.useState("All");
  const [query, setQuery] = React.useState("");
  const totalClients = sectors.reduce((a, s) => a + s.items.length, 0);

  const visible = sectors
    .filter(s => filter === "All" || s.sector === filter)
    .map(s => ({
      ...s,
      items: s.items.filter(c => c.toLowerCase().includes(query.toLowerCase())),
    }))
    .filter(s => s.items.length > 0);

  return (
    <div className="page">
      <PageHeader
        crumb="Portfolio"
        title={<>Over <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>{totalClients}</em> clients across <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>{sectors.length}</em> sectors.</>}
        lede="A redacted picture of the engagements we've delivered since 2018 — from a tier-1 retail bank's ISO 27001 certification to PJP2 audits for top-3 e-wallets and EMR readiness for regional hospitals."
      />

      {/* Headline stats strip */}
      <section style={{ paddingTop: 0 }}>
        <div className="container-wide">
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
            border: "1px solid var(--line)", borderRadius: "var(--radius)",
            background: "var(--surface)", overflow: "hidden",
          }}>
            <StatTile k="Clients" v={totalClients + "+"} />
            <StatTile k="Sectors" v={sectors.length} borderL />
            <StatTile k="Years independent" v="8" borderL />
            <StatTile k="ISO certifications awarded" v="37" borderL />
          </div>
        </div>
      </section>

      {/* Featured case study */}
      <section>
        <div className="container-wide">
          <div className="section-head">
            <div>
              <Eyebrow>Featured engagements</Eyebrow>
              <h2 style={{ marginTop: 14 }}>Three signed-off case studies.</h2>
            </div>
            <div style={{ color: "var(--ink-2)", fontSize: 16.5 }}>
              Names redacted per NDA. Every metric below is real and client-verified.
            </div>
          </div>

          <div style={{
            background: "var(--ink)", color: "var(--paper)", borderRadius: "var(--radius-lg)",
            padding: "56px 56px", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 56, marginBottom: 16,
          }}>
            <div>
              <Tag accent style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.9)" }}>
                {FEATURED_CASES[0].industry.toUpperCase()}
              </Tag>
              <h3 style={{ color: "var(--paper)", marginTop: 22, fontSize: 38, lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                {FEATURED_CASES[0].title}
              </h3>
              <p style={{ marginTop: 18, color: "rgba(255,255,255,0.75)", fontSize: 17, lineHeight: 1.55, maxWidth: 540 }}>
                {FEATURED_CASES[0].summary}
              </p>
              <Button href="#/article" icon="arrow" style={{ marginTop: 28, background: "var(--paper)", color: "var(--ink)" }}>
                Read full case study
              </Button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(255,255,255,0.08)",
                          borderRadius: "var(--radius)", overflow: "hidden" }}>
              {FEATURED_CASES[0].metrics.map(([k, v]) => (
                <div key={k} style={{ padding: "28px 24px", background: "var(--ink)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{k}</div>
                  <div style={{ marginTop: 6, fontSize: 38, fontWeight: 400, fontFamily: "var(--font-serif)", letterSpacing: "-0.02em", lineHeight: 1 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {FEATURED_CASES.slice(1).map(c => (
              <a key={c.id} href="#/article" className="card" style={{ padding: 32 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
                  <Tag accent>{c.industry}</Tag>
                  <Icon name="arrowUpRight" size={18} color="var(--ink-2)"/>
                </div>
                <h3 style={{ fontSize: 26, lineHeight: 1.2, letterSpacing: "-0.02em" }}>{c.title}</h3>
                <p style={{ marginTop: 14, fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.55 }}>{c.summary}</p>
                <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--line)", display: "flex", gap: 28 }}>
                  {c.metrics.slice(0, 3).map(([k, v]) => (
                    <div key={k}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{k}</div>
                      <div style={{ marginTop: 4, fontSize: 20, fontWeight: 500, fontFamily: "var(--font-serif)", letterSpacing: "-0.015em" }}>{v}</div>
                    </div>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Filter & search */}
      <section style={{ paddingTop: 16, paddingBottom: 24 }}>
        <div className="container-wide">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end",
                        flexWrap: "wrap", gap: 16, marginBottom: 22 }}>
            <div>
              <Eyebrow>Our clients</Eyebrow>
              <h2 style={{ marginTop: 14, fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.025em", lineHeight: 1.1 }}>
                Every name we've worked with, by sector.
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 14px",
                          border: "1px solid var(--line)", borderRadius: 999, width: 280,
                          background: "var(--surface)" }}>
              <Icon name="search" size={15} color="var(--muted)"/>
              <input value={query} onChange={e => setQuery(e.target.value)}
                     placeholder="Search clients…"
                     style={{ border: "none", background: "transparent", outline: "none",
                              fontSize: 14, flex: 1, color: "var(--ink)", fontFamily: "inherit" }}/>
              {query && (
                <button onClick={() => setQuery("")} style={{ color: "var(--muted)", display: "flex" }}>
                  <Icon name="close" size={13}/>
                </button>
              )}
            </div>
          </div>

          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", paddingBottom: 24, borderBottom: "1px solid var(--line)" }}>
            <SectorChip label="All sectors" count={totalClients} active={filter === "All"} onClick={() => setFilter("All")} />
            {sectors.map(s => (
              <SectorChip key={s.sector} label={s.sector} count={s.items.length}
                          active={filter === s.sector} onClick={() => setFilter(s.sector)} />
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section style={{ paddingTop: 0 }}>
        <div className="container-wide" style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          {visible.map(s => (
            <SectorBlock key={s.sector} sector={s} />
          ))}
          {visible.length === 0 && (
            <div style={{ padding: "80px 0", textAlign: "center", color: "var(--muted)" }}>
              No clients match. Try clearing the filter.
            </div>
          )}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
};

const StatTile = ({ k, v, borderL }) => (
  <div style={{ padding: "32px 28px", borderLeft: borderL ? "1px solid var(--line)" : "none" }}>
    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{k}</div>
    <div style={{ marginTop: 8, fontSize: 44, fontWeight: 400, fontFamily: "var(--font-serif)", letterSpacing: "-0.025em", lineHeight: 1 }}>{v}</div>
  </div>
);

const SectorChip = ({ label, count, active, onClick }) => (
  <button onClick={onClick} style={{
    padding: "8px 14px", borderRadius: 999, fontSize: 13, fontWeight: 500,
    background: active ? "var(--ink)" : "transparent",
    color: active ? "var(--paper)" : "var(--ink-2)",
    border: "1px solid " + (active ? "var(--ink)" : "var(--line)"),
    display: "inline-flex", alignItems: "center", gap: 8,
    transition: "all .15s ease",
  }}>
    <span>{label}</span>
    <span style={{
      fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.04em",
      opacity: 0.7,
    }}>{count}</span>
  </button>
);

const SectorBlock = ({ sector }) => (
  <div>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 20 }}>
      <div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          {sector.sectorShort || sector.sector}
        </div>
        <h3 style={{ marginTop: 8, fontSize: 28, lineHeight: 1.15, letterSpacing: "-0.02em", display: "flex", alignItems: "baseline", gap: 14 }}>
          {sector.sector}
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted)", letterSpacing: "0.04em", fontWeight: 400 }}>
            {String(sector.items.length).padStart(2, "0")} CLIENTS
          </span>
        </h3>
      </div>
    </div>
    <div className="client-grid" style={{
      display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10,
    }}>
      {sector.items.map(c => <ClientTile key={c} name={c} />)}
    </div>
    <style>{`
      @media (max-width: 1100px) { .client-grid { grid-template-columns: repeat(4, 1fr) !important; } }
      @media (max-width: 800px)  { .client-grid { grid-template-columns: repeat(3, 1fr) !important; } }
      @media (max-width: 520px)  { .client-grid { grid-template-columns: repeat(2, 1fr) !important; } }
    `}</style>
  </div>
);

const ClientTile = ({ name }) => {
  /* Render a typographic word-mark tile. Real logos can drop in via background-image later. */
  const initials = name
    .replace(/[().,]/g, "")
    .split(/[\s·-]+/)
    .filter(Boolean)
    .slice(0, 3)
    .map(w => w[0])
    .join("")
    .toUpperCase();
  return (
    <div style={{
      aspectRatio: "1.6 / 1",
      background: "var(--surface)",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius-sm)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 14,
      gap: 6,
      transition: "border-color .2s ease, background .2s ease, transform .2s ease",
      cursor: "default",
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--ink)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.transform = "translateY(0)"; }}>
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: 10.5,
        letterSpacing: "0.12em",
        color: "var(--accent)",
        fontWeight: 500,
      }}>{initials}</div>
      <div style={{
        fontSize: 13,
        fontWeight: 500,
        letterSpacing: "-0.005em",
        textAlign: "center",
        color: "var(--ink)",
        lineHeight: 1.25,
        textWrap: "balance",
      }}>{name}</div>
    </div>
  );
};

window.Cases = Cases;
