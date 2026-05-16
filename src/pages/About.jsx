/* About — uses the real Capio team certification structure */

const About = () => (
  <div className="page">
    <PageHeader
      crumb="About"
      title={<>Your technology connection, <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>quietly</em> independent.</>}
      lede={<>&ldquo;Capio always delivering quality services, with upgrading the expert capacity.&rdquo; We're an Indonesian cybersecurity, IT audit, and ISO consulting partner — independent, vendor-neutral, and accountable to your auditor.</>}
    />

    {/* Manifesto */}
    <section style={{ paddingTop: 0 }}>
      <div className="container-wide">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80, alignItems: "start" }}>
          <div style={{ position: "sticky", top: 100 }}>
            <Eyebrow>What we believe</Eyebrow>
            <h2 style={{ marginTop: 14, fontSize: 36, lineHeight: 1.1, letterSpacing: "-0.025em" }}>
              Four principles, written once.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0,
                        borderTop: "1px solid var(--line)" }}>
            {[
              ["01", "Senior, not staffed.", "Every engagement is partner-led. If you can't get a partner on the call, you're with the wrong firm — including us."],
              ["02", "Honest sizing.", "We built the Capio Toolkit because under-scoping is the most common cause of bad engagements. Our average variance from quoted effort is ±3%."],
              ["03", "Evidence over deck.", "Final deliverables are audit-grade artefacts. Slideware exists to summarise, not substitute."],
              ["04", "Stay in the room.", "We sit alongside your team during certification audits, regulator inspections, and incident response. We don't toss findings over a wall."],
            ].map(([n, t, d]) => (
              <div key={n} style={{ padding: "28px 0", borderBottom: "1px solid var(--line)",
                                    display: "grid", gridTemplateColumns: "60px 1fr", gap: 24 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)", letterSpacing: "0.1em", paddingTop: 6 }}>{n}</div>
                <div>
                  <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em" }}>{t}</div>
                  <p style={{ marginTop: 12, fontSize: 16, color: "var(--ink-2)", lineHeight: 1.6, maxWidth: 540 }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Expertise (real cert structure from screenshot) */}
    <section style={{ background: "var(--paper-2)" }}>
      <div className="container-wide">
        <div className="section-head">
          <div>
            <Eyebrow>Our team of experts</Eyebrow>
            <h2 style={{ marginTop: 14 }}>
              <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>30+</em> active accreditations across four disciplines.
            </h2>
          </div>
          <div style={{ color: "var(--ink-2)", fontSize: 16.5 }}>
            Capio's bench combines globally-recognised certifications (ISACA, EC-Council, Offensive Security, ISO) with Indonesia-specific authorities (BSSN, AFPI, Kominfo, BNSP) &mdash; so we can bridge international frameworks and local regulator expectations.
          </div>
        </div>

        <ExpertiseGrid />
      </div>
    </section>

    {/* Team grid */}
    <section>
      <div className="container-wide">
        <div className="section-head">
          <div>
            <Eyebrow>The bench</Eyebrow>
            <h2 style={{ marginTop: 14 }}>Senior practitioners.<br/>No bait-and-switch.</h2>
          </div>
          <div style={{ color: "var(--ink-2)", fontSize: 16.5 }}>
            We deliberately stay focused. Every face below is someone who will pick up the phone, sign a deliverable, and remember your engagement two years later.
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {[
            ["Reza Adipraja", "Partner · ISO & Audit", ["CISA","Lead Auditor 27001","Fintech Director AFPI"], 14],
            ["Maya Pranata", "Partner · Healthcare & Privacy", ["Lead Auditor 27001:2022","ISO 22301","ISO 27701"], 11],
            ["Bayu Wirawan", "Partner · Offensive Security", ["OSCP","OSWP","LPT","CHFI"], 12],
            ["Sari Kusuma", "Partner · IT Audit", ["CISA INIXINDO","BSSN Registered","COBIT 2019"], 13],
            ["Dimas Hadi", "Senior Manager · SOC", ["ECIH","CHFI","SEI CSIRT"], 9],
            ["Indira Lestari", "Senior Manager · Privacy", ["ISO 27701","ISO 29100","PDP"], 8],
            ["Andre Putra", "Senior Consultant · Pentest", ["CEH","ECSA","OSCP"], 7],
            ["Yusi Anggraini", "Senior Consultant · Software", ["Scrum Foundation","PMP","Agile"], 6],
          ].map(([name, role, creds, years]) => (
            <div key={name} style={{ background: "var(--surface)", border: "1px solid var(--line)",
                                     borderRadius: "var(--radius)", overflow: "hidden" }}>
              <ImgPlaceholder label="Portrait" height={240} style={{ borderRadius: 0, border: "none" }} />
              <div style={{ padding: 22 }}>
                <div style={{ fontSize: 17, fontWeight: 500, letterSpacing: "-0.01em" }}>{name}</div>
                <div style={{ fontSize: 13.5, color: "var(--ink-2)", marginTop: 4 }}>{role}</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 14 }}>
                  {creds.map(c => <Tag key={c}>{c}</Tag>)}
                </div>
                <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--line)",
                              fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.06em" }}>
                  {years} YEARS IN PRACTICE
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications visual wall */}
    <section>
      <div className="container-wide">
        <div className="section-head">
          <div>
            <Eyebrow>Certificates obtained</Eyebrow>
            <h2 style={{ marginTop: 14 }}>
              <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>22</em> live accreditations<br/>
              from <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>11</em> issuing bodies.
            </h2>
          </div>
          <div style={{ color: "var(--ink-2)", fontSize: 16.5 }}>
            Every certificate below is held by at least one active member of the Capio bench. Originals available on request during procurement. Easy to swap a credential when our team adds a new one.
          </div>
        </div>
        <CertWall />
      </div>
    </section>

    {/* Chronology + office photo */}
    <section style={{ background: "var(--paper-2)" }}>
      <div className="container-wide">
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "start" }}>
          <ImgPlaceholder label="Photo · Jakarta office, working day" height={520} />
          <div style={{ paddingTop: 20 }}>
            <Eyebrow>The chronology</Eyebrow>
            <h2 style={{ marginTop: 14, fontSize: 36, lineHeight: 1.1, letterSpacing: "-0.025em" }}>
              From one office, to a regional practice.
            </h2>
            <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                ["2018", "Capio Teknologi founded in Jakarta. First engagement: ISMS for a regional bank."],
                ["2020", "Pentest & VAPT practice formalised. First red-team engagement in BFSI."],
                ["2022", "Surabaya office opens. EMR & healthcare audit practice begins."],
                ["2024", "Singapore presence opens to support regional clients. OpenEDR partnership."],
                ["2026", "Capio Toolkit v3 launches publicly — 320+ sessions per month."],
              ].map(([y, e]) => (
                <div key={y} style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 20,
                                      padding: "20px 0", borderTop: "1px solid var(--line)" }}>
                  <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300,
                                fontSize: 28, color: "var(--accent)", letterSpacing: "-0.015em" }}>{y}</div>
                  <div style={{ color: "var(--ink-2)", paddingTop: 6 }}>{e}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
);

/* Expertise grid — uses CAPIO_EXPERTISE from data.jsx */
const ExpertiseGrid = () => {
  const groups = window.CAPIO_EXPERTISE || [];
  const icons = {
    professional: "doc",
    cybersecurity: "shield",
    frameworks: "layers",
    "audit-resilience": "chart",
  };
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr 1fr 1fr", gap: 16 }}>
      {groups.map((g, i) => (
        <div key={g.id} className="card" style={{
          padding: 28, display: "flex", flexDirection: "column", gap: 18,
          background: "var(--surface)",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{
              width: 44, height: 44, borderRadius: "50%", background: "var(--paper-2)",
              border: "1px solid var(--line)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Icon name={icons[g.id] || "doc"} size={18} color="var(--accent)" />
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--muted)", letterSpacing: "0.08em" }}>
              {String(i + 1).padStart(2, "0")} / 04
            </div>
          </div>

          <h3 style={{ fontSize: 19, lineHeight: 1.25, letterSpacing: "-0.015em", marginTop: 8 }}>
            {g.title}
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: 0,
                        marginTop: 8, borderTop: "1px solid var(--line)" }}>
            {g.items.map((item, j) => (
              <div key={j} style={{
                padding: "10px 0", borderBottom: "1px solid var(--line-2)",
                fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.45,
                display: "flex", alignItems: "flex-start", gap: 10,
              }}>
                <Icon name="check" size={13} color="var(--accent)" style={{ marginTop: 4, flexShrink: 0 }}/>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "auto", paddingTop: 10,
                        fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--muted)", letterSpacing: "0.08em" }}>
            {g.items.length} ACTIVE CERTIFICATIONS
          </div>
        </div>
      ))}
    </div>
  );
};

/* Certificates wall — a polished grid of certificate tiles */
const CertWall = () => {
  const certs = window.CAPIO_CERTS || [];
  const [hover, setHover] = React.useState(null);
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: 14,
    }}>
      {certs.map((c, i) => (
        <div key={c.id}
             onMouseEnter={() => setHover(i)}
             onMouseLeave={() => setHover(null)}
             style={{
          position: "relative",
          aspectRatio: "1.25 / 1",
          background: "var(--surface)",
          border: "1px solid var(--line)",
          borderRadius: "var(--radius)",
          padding: "20px 22px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          transition: "transform .2s ease, border-color .2s ease",
          transform: hover === i ? "translateY(-2px)" : "translateY(0)",
          borderColor: hover === i ? "var(--ink)" : "var(--line)",
        }}>
          {/* Accent ribbon */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 4,
            background: c.color,
          }}/>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: 4 }}>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em",
              color: "var(--muted)", textTransform: "uppercase",
            }}>
              {c.org}
            </div>
            <Icon name="check" size={14} color={c.color}/>
          </div>

          <div style={{ marginTop: "auto" }}>
            <div style={{
              fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.15,
              color: "var(--ink)",
            }}>{c.code}</div>
            <div style={{
              marginTop: 6, fontSize: 13, color: "var(--ink-2)",
              fontFamily: "var(--font-sans)",
            }}>{c.label}</div>
          </div>

          <div style={{
            marginTop: 10, paddingTop: 10, borderTop: "1px solid var(--line-2)",
            display: "flex", justifyContent: "space-between",
            fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.06em",
            color: "var(--muted)", textTransform: "uppercase",
          }}>
            <span>{c.year}</span>
            <span>{String(i + 1).padStart(2, "0")}/{String(certs.length).padStart(2, "0")}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

window.About = About;
