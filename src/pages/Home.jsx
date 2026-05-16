/* Home page */

const Home = ({ tweaks }) => {
  return (
    <div className="page">
      <Hero tweaks={tweaks} />
      <TrustBar />
      <ServicesGrid />
      {tweaks.showStats && <StatsRow />}
      <Methodology />
      <CaseSpotlight />
      <InsightsPreview />
      <CtaBanner />
    </div>
  );
};

const Hero = ({ tweaks }) => (
  <section className="hero" style={{ paddingTop: 56, paddingBottom: 96 }}>
    <div className="container-wide">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 64, alignItems: "center" }}>
        <div>
          <Eyebrow>Capio Teknologi · Est. 2018</Eyebrow>
          <h1 style={{ marginTop: 22 }}>
            Your technology<br/>
            connection &mdash;<br/>
            <em>quietly</em> independent.
          </h1>
          <p style={{
            marginTop: 28, maxWidth: 520, fontSize: 18.5, color: "var(--ink-2)", lineHeight: 1.55,
          }}>
            Capio Teknologi is an independent cybersecurity, IT audit, and ISO consulting partner for banks, hospitals, and regulated enterprises across Indonesia. From ISO 27001 to PJP2 audits, OpenEDR managed detection to custom software &mdash; one bench, eight practices.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
            <Button href="#/contact" icon="arrow">Request a proposal</Button>
            <Button href="#/case-studies" variant="ghost" icon="arrowUpRight">See case studies</Button>
          </div>

          <div style={{ marginTop: 56, display: "flex", gap: 36, flexWrap: "wrap" }}>
            <MiniStat label="Engagements" value="240+" />
            <MiniStat label="Avg. delivery" value="±3% scope" />
            <MiniStat label="Client retention" value="94%" />
          </div>
        </div>

        <div>
          <HeroAnim enabled={tweaks.heroAnim} />
          <div style={{
            marginTop: 16, display: "flex", justifyContent: "space-between",
            fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.05em",
          }}>
            <span>FIG. 01 — LIVE SCOPING VIEW · CLIENT ENGAGEMENT (REDACTED)</span>
            <span>UPDATED · T+0.3s</span>
          </div>
        </div>
      </div>
    </div>

    <style>{`
      @media (max-width: 1024px) {
        .hero .container-wide > div { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);

const MiniStat = ({ label, value }) => (
  <div>
    <div style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.025em" }}>{value}</div>
    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.06em",
                  color: "var(--muted)", textTransform: "uppercase", marginTop: 4 }}>
      {label}
    </div>
  </div>
);

const TRUST = [
  "MNC Bank", "Tokocrypto", "WIKA", "Komatsu", "Gramedia",
  "Bina Nusantara", "Combiphar", "Sephora", "Skyworth", "Home Credit",
  "BCA Multifinance", "Mirae Asset", "PT YKK", "RCTI", "PasarPolis",
];
const TrustBar = () => (
  <section style={{ padding: "56px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", background: "var(--paper-2)" }}>
    <div className="container-wide" style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 48, alignItems: "center" }}>
      <div>
        <Eyebrow>Trusted by</Eyebrow>
        <div style={{ marginTop: 10, fontSize: 14, color: "var(--ink-2)", maxWidth: 200 }}>
          150+ clients across BFSI, healthcare, government &amp; manufacturing.
        </div>
      </div>
      <div style={{ overflow: "hidden", position: "relative" }}>
        <div style={{ display: "flex", gap: 56, width: "max-content", animation: "marquee 32s linear infinite", alignItems: "center" }}>
          {[...TRUST, ...TRUST].map((name, i) => (
            <div key={i} style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: 22,
              color: "var(--ink-2)",
              opacity: 0.7,
              whiteSpace: "nowrap",
              letterSpacing: "-0.01em",
            }}>{name}</div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ServicesGrid = () => {
  const all = window.CAPIO_SERVICES || [];
  const featured = all.slice(0, 4);
  return (
  <section>
    <div className="container-wide">
      <div className="section-head">
        <div>
          <Eyebrow>Services</Eyebrow>
          <h2 style={{ marginTop: 14 }}>
            Eight practices.<br/>One independent perspective.
          </h2>
        </div>
        <div style={{ color: "var(--ink-2)", fontSize: 16.5 }}>
          From ISO consulting to managed SOC. Our practice is staffed by Lead Auditors, OSCP-certified red teamers, and CISA-registered audit partners &mdash; backed by 240+ engagements across regulated industries.
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18 }}>
        {featured.map(s => (
          <a key={s.id} href={"#/service/" + s.id} className="card" style={{
            padding: 32,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            background: s.featured ? "var(--ink)" : "var(--surface)",
            color: s.featured ? "var(--paper)" : "var(--ink)",
            borderColor: s.featured ? "var(--ink)" : "var(--line)",
            minHeight: 280,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em",
                color: s.featured ? "rgba(255,255,255,0.6)" : "var(--muted)",
              }}>{s.code} / 08</div>
              <Icon name="arrowUpRight" size={20} color={s.featured ? "var(--paper)" : "var(--ink-2)"}/>
            </div>
            <div style={{ marginTop: "auto" }}>
              <h3 style={{ fontSize: 28, lineHeight: 1.1, color: "inherit" }}>{s.name}</h3>
              <p style={{ marginTop: 14, fontSize: 15.5, lineHeight: 1.55, color: s.featured ? "rgba(255,255,255,0.75)" : "var(--ink-2)", maxWidth: 460 }}
                 dangerouslySetInnerHTML={{__html: s.blurb}} />
              <div style={{ display: "flex", gap: 8, marginTop: 22, flexWrap: "wrap" }}>
                {(s.bullets || []).slice(0,3).map(b => (
                  <span key={b} style={{
                    padding: "5px 11px", borderRadius: 999,
                    border: "1px solid " + (s.featured ? "rgba(255,255,255,0.18)" : "var(--line)"),
                    fontSize: 12.5, color: s.featured ? "rgba(255,255,255,0.85)" : "var(--ink-2)",
                  }}>{b}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div style={{ marginTop: 36, textAlign: "center" }}>
        <a href="#/services" className="hover-line" style={{ fontSize: 15, fontWeight: 500 }}>
          View all 8 services <Icon name="arrow" size={14} style={{ marginLeft: 4 }}/>
        </a>
      </div>
    </div>

    <style>{`
      @media (max-width: 860px) {
        section .container-wide > div:last-child {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
  </section>
  );
};

const StatsRow = () => (
  <section style={{ paddingTop: 0 }}>
    <div className="container-wide">
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
        borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)",
      }}>
        <StatCell value={240} suffix="+" label="Engagements delivered" />
        <StatCell value={94} suffix="%" label="Client retention" />
        <StatCell value={37} suffix=" certs" label="ISO 27001 awarded" />
        <StatCell value={8} label="Years independent" />
      </div>
    </div>
  </section>
);

const StatCell = ({ value, suffix, label }) => (
  <div style={{
    padding: "48px 28px",
    borderRight: "1px solid var(--line)",
  }}>
    <div style={{ fontSize: 60, fontWeight: 400, letterSpacing: "-0.04em", lineHeight: 1,
                  fontFamily: "var(--font-serif)" }}>
      <Counter end={value} suffix={suffix || ""} />
    </div>
    <div style={{ marginTop: 14, fontSize: 13.5, color: "var(--ink-2)", maxWidth: 200 }}>
      {label}
    </div>
  </div>
);

const Methodology = () => (
  <section style={{ background: "var(--paper-2)" }}>
    <div className="container-wide">
      <div className="section-head">
        <div>
          <Eyebrow>How we work</Eyebrow>
          <h2 style={{ marginTop: 14 }}>A method, not a methodology slide.</h2>
        </div>
        <div style={{ color: "var(--ink-2)", fontSize: 16.5 }}>
          Every engagement starts with sizing &mdash; an honest, evidence-based picture of scope before a single line of work is signed. Then we move in four deliberate phases.
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
                    borderTop: "1px solid var(--line)" }}>
        {[
          ["01", "Scope", "Tools-assisted sizing wizard establishes asset count, control depth, and effort window. Outputs feed the proposal."],
          ["02", "Assess", "Senior team conducts evidence-based discovery. No junior-led checklist passes; no offshore back-office."],
          ["03", "Remediate", "We sit alongside your team to design and implement controls &mdash; not toss findings over a wall."],
          ["04", "Sustain", "Quarterly health reviews, board-level reporting, and a named partner who answers the phone."],
        ].map(([n, t, d]) => (
          <div key={n} style={{
            padding: "36px 28px 48px",
            borderRight: "1px solid var(--line)",
            background: "transparent",
          }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em" }}>
              PHASE {n}
            </div>
            <div style={{ marginTop: 30, fontSize: 26, fontWeight: 500, letterSpacing: "-0.02em" }}>{t}</div>
            <p style={{ marginTop: 14, fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.6 }}>{d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CaseSpotlight = () => {
  const cases = window.CAPIO_SERVICE_CASES || [];
  const featured = cases[0]; // OJK
  return (
  <section>
    <div className="container-wide">
      <div className="section-head">
        <div>
          <Eyebrow>Selected work</Eyebrow>
          <h2 style={{ marginTop: 14 }}>Recent engagements.</h2>
        </div>
        <a href="#/case-studies" className="hover-line" style={{ fontSize: 15, fontWeight: 500, alignSelf: "end" }}>
          View all case studies <Icon name="arrow" size={14} style={{ marginLeft: 4 }}/>
        </a>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 18 }}>
        <a href={"#/case-study/" + (featured?.id || "")} className="card" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
          <ImgPlaceholder label="OJK Tower · Jakarta · architectural photograph" height={360} style={{ borderRadius: 0, border: "none" }} />
          <div style={{ padding: 32 }}>
            <Eyebrow>{(featured?.sector || "Government").toUpperCase()} · {featured?.year}</Eyebrow>
            <h3 style={{ fontSize: 30, lineHeight: 1.1, marginTop: 12, letterSpacing: "-0.025em" }}>
              {featured?.title}
            </h3>
            <p style={{ marginTop: 14, color: "var(--ink-2)", fontSize: 15.5, maxWidth: 560 }}>
              {featured?.summary}
            </p>
            <div style={{ display: "flex", gap: 20, marginTop: 26, flexWrap: "wrap" }}>
              {(featured?.outcomes || []).slice(0, 3).map(([k, v]) => (
                <StatChip key={k} k={k} v={v}/>
              ))}
            </div>
          </div>
        </a>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {cases.slice(1, 4).map(c => (
            <SmallCase key={c.id} id={c.id} tag={c.sector} title={c.title} />
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

const SmallCase = ({ tag, title, id }) => (
  <a href={id ? "#/case-study/" + id : "#/case-studies"} className="card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
    <Eyebrow>{tag}</Eyebrow>
    <div style={{ fontSize: 19, fontWeight: 500, lineHeight: 1.3, letterSpacing: "-0.015em" }}>{title}</div>
    <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 6, color: "var(--ink-2)", fontSize: 13.5 }}>
      Read case study <Icon name="arrow" size={12}/>
    </div>
  </a>
);

const StatChip = ({ k, v }) => (
  <div>
    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--muted)",
                  letterSpacing: "0.08em", textTransform: "uppercase" }}>{k}</div>
    <div style={{ fontSize: 20, fontWeight: 500, marginTop: 4 }}>{v}</div>
  </div>
);

const InsightsPreview = () => (
  <section style={{ paddingTop: 0 }}>
    <div className="container-wide">
      <div className="section-head">
        <div>
          <Eyebrow>Insights</Eyebrow>
          <h2 style={{ marginTop: 14 }}>Field notes from senior practitioners.</h2>
        </div>
        <a href="#/insights" className="hover-line" style={{ fontSize: 15, fontWeight: 500, alignSelf: "end" }}>
          All insights <Icon name="arrow" size={14}/>
        </a>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
        {[
          ["Compliance", "ISO 27001:2022 — what actually changed for Indonesian banks.", "8 min read", "Apr 2026"],
          ["Pentest", "The diminishing returns of automated DAST in modern API estates.", "12 min read", "Mar 2026"],
          ["Healthcare", "EMR vendor due diligence: a checklist that survives Kemenkes scrutiny.", "6 min read", "Mar 2026"],
        ].map(([cat, t, read, date], i) => (
          <a key={i} href="#/article" className="card" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <ImgPlaceholder label={`Editorial photo · ${cat}`} height={200} style={{ borderRadius: 0, border: "none", borderBottom: "1px solid var(--line)" }} />
            <div style={{ padding: 24, display: "flex", flexDirection: "column", flex: 1, gap: 12 }}>
              <Eyebrow>{cat}</Eyebrow>
              <h3 style={{ fontSize: 19, lineHeight: 1.3, letterSpacing: "-0.015em" }}>{t}</h3>
              <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between",
                            fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.05em" }}>
                <span>{read.toUpperCase()}</span>
                <span>{date.toUpperCase()}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const CtaBanner = () => (
  <section style={{ padding: "0 0 24px" }}>
    <div className="container-wide">
      <div style={{
        background: "var(--ink)",
        color: "var(--paper)",
        borderRadius: "var(--radius-lg)",
        padding: "72px 56px",
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr",
        gap: 48,
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div>
          <Eyebrow style={{ color: "rgba(255,255,255,0.6)" }}>Let's talk</Eyebrow>
          <h2 style={{ color: "var(--paper)", fontSize: 52, lineHeight: 1.0, letterSpacing: "-0.03em", marginTop: 16 }}>
            Have a project<br/>
            <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, color: "var(--accent-2)" }}>
              in mind?
            </em>
          </h2>
          <p style={{ marginTop: 18, color: "rgba(255,255,255,0.7)", fontSize: 17, maxWidth: 520 }}>
            A senior partner replies within one working day. Tell us what you're trying to ship &mdash; ISO certification, an audit, a pentest, a software build &mdash; and we'll come back with a scope and indicative effort.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Button href="#/contact" icon="arrow" style={{ background: "var(--paper)", color: "var(--ink)", justifyContent: "center", padding: "16px 24px", fontSize: 15 }}>
            Talk to us
          </Button>
          <Button href="#/case-studies" variant="ghost" icon="arrowUpRight" style={{ color: "var(--paper)", borderColor: "rgba(255,255,255,0.25)", justifyContent: "center", padding: "16px 24px", fontSize: 15 }}>
            See our case studies
          </Button>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.05em",
                        color: "rgba(255,255,255,0.5)", marginTop: 8, textAlign: "center" }}>
            NDA AVAILABLE · &lt; 1 WORKING DAY REPLY
          </div>
        </div>
      </div>
    </div>
  </section>
);

window.Home = Home;
