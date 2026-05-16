/* Case Studies — index with two sections: Products & Services
   Detail pages live in CaseStudyDetail.jsx */

const CaseStudies = () => {
  const productCases = window.CAPIO_PRODUCT_CASES || [];
  const serviceCases = window.CAPIO_SERVICE_CASES || [];
  const [tab, setTab] = React.useState(() => {
    const hash = (window.location.hash || "").toLowerCase();
    if (hash.includes("products")) return "products";
    return "services";
  });

  return (
    <div className="page">
      <PageHeader
        crumb="Case Studies"
        title={<>Eleven engagements, on the page. <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>Named</em> &amp; signed-off.</>}
        lede="A curated set of recent engagements — four flagship consulting cases (OJK · World Bank, MNC Group, Combiphar, WIKA) and seven productised builds we've delivered to clients. Every metric is real and client-verified."
      />

      {/* Tab switcher */}
      <section style={{ paddingTop: 0, paddingBottom: 24 }}>
        <div className="container-wide">
          <div style={{ display: "flex", gap: 0, borderBottom: "1px solid var(--line)" }}>
            <TabBtn active={tab === "services"} onClick={() => setTab("services")}
                    count={serviceCases.length} label="Services" sub="Consulting engagements" />
            <TabBtn active={tab === "products"} onClick={() => setTab("products")}
                    count={productCases.length} label="Products" sub="Builds delivered" />
          </div>
        </div>
      </section>

      {tab === "services" ? <ServicesCases cases={serviceCases}/> : <ProductsCases cases={productCases}/>}

      <CtaBanner />
    </div>
  );
};

const TabBtn = ({ active, onClick, count, label, sub }) => (
  <button onClick={onClick} style={{
    flex: 1,
    padding: "22px 24px",
    textAlign: "left",
    background: "transparent",
    borderBottom: "2px solid " + (active ? "var(--ink)" : "transparent"),
    display: "flex", flexDirection: "column", gap: 4,
    color: active ? "var(--ink)" : "var(--muted)",
    transition: "all .15s ease",
  }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
      <span style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.015em" }}>{label}</span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: active ? "var(--accent)" : "var(--muted)",
                     letterSpacing: "0.04em" }}>{String(count).padStart(2, "0")}</span>
    </div>
    <div style={{ fontSize: 13.5, color: active ? "var(--ink-2)" : "var(--muted)" }}>{sub}</div>
  </button>
);

/* ────────────── Services cases ────────────── */
const ServicesCases = ({ cases }) => {
  const featured = cases[0];
  const rest = cases.slice(1);
  return (
    <>
      {/* Featured (OJK) — large hero card */}
      <section style={{ paddingTop: 0 }}>
        <div className="container-wide">
          <a href={"#/case-study/" + featured.id} style={{ display: "block" }}>
            <div style={{
              background: "var(--ink)", color: "var(--paper)", borderRadius: "var(--radius-lg)",
              padding: "64px 56px", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 56,
              position: "relative", overflow: "hidden",
            }}>
              <div>
                <Tag accent style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.9)" }}>
                  {featured.sector.toUpperCase()}
                </Tag>
                <h2 style={{ color: "var(--paper)", marginTop: 22, fontSize: 44, lineHeight: 1.08, letterSpacing: "-0.025em" }}>
                  {featured.title}
                </h2>
                <div style={{ marginTop: 16, fontFamily: "var(--font-mono)", fontSize: 12,
                              color: "rgba(255,255,255,0.55)", letterSpacing: "0.06em" }}>
                  {featured.client.toUpperCase()} · {featured.year.toUpperCase()}
                </div>
                <p style={{ marginTop: 22, color: "rgba(255,255,255,0.75)", fontSize: 17, lineHeight: 1.55, maxWidth: 600 }}>
                  {featured.summary}
                </p>
                <div style={{ display: "flex", gap: 6, marginTop: 22, flexWrap: "wrap" }}>
                  {featured.services.map(s => (
                    <span key={s} style={{
                      padding: "5px 11px", borderRadius: 999,
                      border: "1px solid rgba(255,255,255,0.2)",
                      fontSize: 12, color: "rgba(255,255,255,0.85)",
                    }}>{s}</span>
                  ))}
                </div>
                <div style={{ marginTop: 32, display: "inline-flex", alignItems: "center", gap: 10,
                              padding: "12px 18px", border: "1px solid rgba(255,255,255,0.25)",
                              borderRadius: 999, fontSize: 14, fontWeight: 500 }}>
                  Read full case study <Icon name="arrow" size={14} color="var(--paper)" />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(255,255,255,0.08)",
                            borderRadius: "var(--radius)", overflow: "hidden", alignSelf: "start" }}>
                {featured.outcomes.map(([k, v]) => (
                  <div key={k} style={{ padding: "26px 24px", background: "var(--ink)" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "rgba(255,255,255,0.5)",
                                  letterSpacing: "0.1em", textTransform: "uppercase" }}>{k}</div>
                    <div style={{ marginTop: 6, fontSize: 30, fontWeight: 400, fontFamily: "var(--font-serif)",
                                  letterSpacing: "-0.02em", lineHeight: 1.1 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Rest of services cases */}
      <section>
        <div className="container-wide">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {rest.map(c => (
              <a key={c.id} href={"#/case-study/" + c.id} className="card"
                 style={{ padding: 28, display: "flex", flexDirection: "column", gap: 14, minHeight: 380 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <Tag accent>{c.sector}</Tag>
                  <Icon name="arrowUpRight" size={18}/>
                </div>
                <div style={{ marginTop: 4, fontFamily: "var(--font-mono)", fontSize: 11,
                              color: "var(--muted)", letterSpacing: "0.06em" }}>
                  {c.client.toUpperCase()} · {c.year}
                </div>
                <h3 style={{ fontSize: 22, lineHeight: 1.22, letterSpacing: "-0.02em" }}>{c.title}</h3>
                <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.55,
                            display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {c.summary}
                </p>
                <div style={{ marginTop: "auto", paddingTop: 18, borderTop: "1px solid var(--line)",
                              display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {c.services.slice(0, 3).map(s => <Tag key={s}>{s}</Tag>)}
                  {c.services.length > 3 && <Tag>+{c.services.length - 3}</Tag>}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

/* ────────────── Products cases ────────────── */
const ProductsCases = ({ cases }) => (
  <section style={{ paddingTop: 0 }}>
    <div className="container-wide">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {cases.map((c, i) => (
          <a key={c.id} href={"#/case-study/" + c.id} className="card"
             style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column",
                      minHeight: 480 }}>
            <ImgPlaceholder label={`Product screen · ${c.client}`} height={220}
                            style={{ borderRadius: 0, border: "none", borderBottom: "1px solid var(--line)" }}/>
            <div style={{ padding: 26, display: "flex", flexDirection: "column", flex: 1, gap: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Tag accent>{c.tag}</Tag>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--muted)", letterSpacing: "0.06em" }}>
                  {String(i+1).padStart(2,"0")} / {String(cases.length).padStart(2,"0")}
                </div>
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.06em" }}>
                {c.client.toUpperCase()}
              </div>
              <h3 style={{ fontSize: 20, lineHeight: 1.25, letterSpacing: "-0.015em" }}>{c.title}</h3>
              <p style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55,
                          display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {c.summary}
              </p>
              <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid var(--line)",
                            display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontSize: 13, color: "var(--accent)", fontWeight: 500 }}>More info</div>
                <Icon name="arrow" size={14} color="var(--accent)"/>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

window.CaseStudies = CaseStudies;
