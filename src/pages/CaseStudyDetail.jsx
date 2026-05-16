/* Case Study Detail — single engagement deep-dive */

const CaseStudyDetail = ({ id }) => {
  const all = [
    ...(window.CAPIO_SERVICE_CASES || []),
    ...(window.CAPIO_PRODUCT_CASES || []),
  ];
  const c = all.find(x => x.id === id) || all[0];
  if (!c) return null;

  /* find adjacent for prev/next */
  const idx = all.findIndex(x => x.id === c.id);
  const next = all[(idx + 1) % all.length];

  React.useEffect(() => {
    const onScroll = () => {
      const bar = document.getElementById("read-progress");
      if (!bar) return;
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      bar.style.width = pct + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="page">
      <div id="read-progress" style={{
        position: "fixed", top: 72, left: 0, height: 2, background: "var(--accent)", zIndex: 60, width: 0,
        transition: "width .1s linear",
      }}/>

      {/* Header */}
      <section style={{ paddingTop: 48, paddingBottom: 32 }}>
        <div className="container-wide">
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)",
                        fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <a href="#/" className="hover-line">Capio</a>
            <Icon name="chevron" size={11} color="var(--muted)" />
            <a href="#/case-studies" className="hover-line">Case Studies</a>
            <Icon name="chevron" size={11} color="var(--muted)" />
            <span style={{ color: "var(--ink)" }}>{c.client}</span>
          </div>

          <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end" }}>
            <div>
              <Tag accent>{c.sector}</Tag>
              <div style={{ marginTop: 14, fontFamily: "var(--font-mono)", fontSize: 12,
                            color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {c.client}  ·  {c.year}
              </div>
              <h1 style={{ marginTop: 18, fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}>
                {c.title}
              </h1>
              <p style={{ marginTop: 22, fontSize: 18.5, color: "var(--ink-2)", lineHeight: 1.55, maxWidth: 640 }}>
                {c.summary}
              </p>
            </div>
            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                {c.services.map(s => <Tag key={s}>{s}</Tag>)}
              </div>
              <Button href="#/contact" icon="arrow" style={{ width: "100%", justifyContent: "center", padding: "16px 24px" }}>
                Request a similar engagement
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cover photo */}
      <section style={{ paddingTop: 0, paddingBottom: 56 }}>
        <div className="container-wide">
          <ImgPlaceholder
            label={`Hero photo · ${c.client}`}
            height={480}
            style={{ borderRadius: "var(--radius-lg)" }}
          />
        </div>
      </section>

      {/* Outcomes strip */}
      <section style={{ paddingTop: 0, paddingBottom: 56 }}>
        <div className="container-wide">
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${c.outcomes.length}, 1fr)`, gap: 0,
                        border: "1px solid var(--line)", borderRadius: "var(--radius)",
                        background: "var(--surface)", overflow: "hidden" }}>
            {c.outcomes.map(([k, v], i) => (
              <div key={k} style={{ padding: "28px 28px", borderLeft: i > 0 ? "1px solid var(--line)" : "none" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)",
                              letterSpacing: "0.08em", textTransform: "uppercase" }}>{k}</div>
                <div style={{ marginTop: 8, fontSize: 38, fontWeight: 400, fontFamily: "var(--font-serif)",
                              letterSpacing: "-0.02em", lineHeight: 1, color: "var(--ink)" }}>
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section style={{ paddingTop: 0 }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 var(--gutter)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <div>
              <Eyebrow>The challenge</Eyebrow>
              <p style={{ marginTop: 16, fontSize: 16.5, lineHeight: 1.7, color: "var(--ink)" }}>
                {c.challenge}
              </p>
            </div>
            <div>
              <Eyebrow>Capio's approach</Eyebrow>
              <p style={{ marginTop: 16, fontSize: 16.5, lineHeight: 1.7, color: "var(--ink)" }}>
                {c.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services delivered */}
      <section>
        <div className="container-wide">
          <div className="section-head">
            <div>
              <Eyebrow>Services delivered</Eyebrow>
              <h2 style={{ marginTop: 14, fontSize: "clamp(28px, 3.5vw, 40px)" }}>
                {c.services.length === 1 ? "One practice." : `${spelled(c.services.length)} practices, one bench.`}
              </h2>
            </div>
            <div style={{ color: "var(--ink-2)", fontSize: 16 }}>
              Each line below mapped to a Capio practice. Click any to read more about how we deliver it.
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
            {c.services.map(svc => {
              const match = (window.CAPIO_SERVICES || []).find(s => s.name === svc);
              return (
                <a key={svc} href={match ? "#/service/" + match.id : "#/services"}
                   className="card" style={{ padding: 22, display: "flex", justifyContent: "space-between",
                                              alignItems: "center", gap: 18 }}>
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 500, letterSpacing: "-0.01em" }}>{svc}</div>
                    {match && (
                      <div style={{ marginTop: 4, fontFamily: "var(--font-mono)", fontSize: 11,
                                    color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                        {match.short}
                      </div>
                    )}
                  </div>
                  <Icon name="arrowUpRight" size={20} color="var(--ink-2)"/>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Up next */}
      {next && (
        <section style={{ background: "var(--paper-2)" }}>
          <div className="container-wide">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
              <div>
                <Eyebrow>Next case study</Eyebrow>
                <h3 style={{ marginTop: 14, fontSize: 30, lineHeight: 1.15, letterSpacing: "-0.02em", maxWidth: "20ch" }}>
                  {next.title}
                </h3>
                <div style={{ marginTop: 10, fontFamily: "var(--font-mono)", fontSize: 12,
                              color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  {next.client} · {next.year}
                </div>
              </div>
              <Button href={"#/case-study/" + next.id} icon="arrow">Continue reading</Button>
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </div>
  );
};

function spelled(n) {
  const w = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"];
  return w[n - 1] || String(n);
}

window.CaseStudyDetail = CaseStudyDetail;
