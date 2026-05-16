/* Service detail — showcased: ISO 27001 Implementation */

const ServiceDetail = ({ id }) => {
  const service = (window.ALL_SERVICES || []).find(s => s.id === id) || (window.ALL_SERVICES || [])[0];
  if (!service) return null;

  return (
    <div className="page">
      <section style={{ paddingTop: 48, paddingBottom: 32 }}>
        <div className="container-wide">
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)",
                        fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <a href="#/" className="hover-line">Capio</a>
            <Icon name="chevron" size={11} color="var(--muted)" />
            <a href="#/services" className="hover-line">Services</a>
            <Icon name="chevron" size={11} color="var(--muted)" />
            <span style={{ color: "var(--ink)" }}>{service.short}</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, marginTop: 36, alignItems: "end" }}>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)",
                            letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {service.group}
              </div>
              <h1 style={{
                fontSize: "clamp(44px, 5.5vw, 80px)", lineHeight: 1.02, letterSpacing: "-0.03em",
                marginTop: 18,
              }}>{service.name}</h1>
              <p style={{ marginTop: 24, fontSize: 19, color: "var(--ink-2)", maxWidth: 600, lineHeight: 1.55 }}
                 dangerouslySetInnerHTML={{__html: service.long || service.blurb}} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "stretch" }}>
              <Button href="#/contact" icon="arrow" style={{ justifyContent: "center", padding: "16px 24px" }}>
                Request a proposal
              </Button>
              <Button href="#/toolkit" variant="ghost" icon="arrowUpRight" style={{ justifyContent: "center", padding: "16px 24px" }}>
                Size this engagement
              </Button>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0,
                            border: "1px solid var(--line)", borderRadius: "var(--radius)",
                            background: "var(--surface)", marginTop: 4 }}>
                <KV k="Duration" v={service.duration} />
                <KV k="Team size" v={service.teamSize} borderL />
              </div>
              {service.bullets && service.bullets.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
                  {service.bullets.map(b => <Tag key={b} accent>{b}</Tag>)}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 24 }}>
        <div className="container-wide">
          <ImgPlaceholder label="Hero photo · Boardroom, evidence binders, laptops" height={420} />
        </div>
      </section>

      {/* ISO Consultant Expertise wheel — only for ISO Consulting */}
      {service.id === "iso-consulting" && (
        <section>
          <div className="container-wide">
            <div className="section-head">
              <div>
                <Eyebrow>ISO consultant expertise</Eyebrow>
                <h2 style={{ marginTop: 14, fontSize: "clamp(32px, 4vw, 48px)" }}>
                  Seven domains.<br/>Thirty standards we work under.
                </h2>
              </div>
              <div style={{ color: "var(--ink-2)", fontSize: 16.5 }}>
                Click any spoke to inspect the standards Capio's Lead Auditors are accredited under. The same partner team can run the whole programme, end-to-end.
              </div>
            </div>
            <IsoWheel />
          </div>
        </section>
      )}

      <section>
        <div className="container-wide">
          <div className="section-head">
            <div>
              <Eyebrow>What you get</Eyebrow>
              <h2 style={{ marginTop: 14, fontSize: "clamp(32px, 4vw, 48px)" }}>Deliverables, on the page.</h2>
            </div>
            <div style={{ color: "var(--ink-2)", fontSize: 16.5 }}>
              No vague decks. Every engagement closes with auditable artifacts your team can hand directly to the regulator.
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {(service.deliverables || []).map((d, i) => (
              <div key={i} className="card" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 14, minHeight: 200 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em" }}>
                    DELIVERABLE {String(i+1).padStart(2,"0")}
                  </div>
                  <Icon name="doc" size={18} color="var(--ink-2)"/>
                </div>
                <div style={{ marginTop: "auto", fontSize: 22, fontWeight: 500, letterSpacing: "-0.015em" }}>{d}</div>
                <div style={{ fontSize: 14, color: "var(--ink-2)" }}>
                  {DELIVERABLE_DESC[d] || "Signed, version-controlled artifact delivered through our client portal."}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--paper-2)" }}>
        <div className="container-wide">
          <div className="section-head">
            <div>
              <Eyebrow>Programme</Eyebrow>
              <h2 style={{ marginTop: 14, fontSize: "clamp(32px, 4vw, 48px)" }}>A 14-week reference plan.</h2>
            </div>
            <div style={{ color: "var(--ink-2)", fontSize: 16.5 }}>
              Actual timelines depend on scope &mdash; run the sizing wizard for a tailored window.
            </div>
          </div>

          <Timeline />
        </div>
      </section>

      <section>
        <div className="container-wide">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "start" }}>
            <div>
              <Eyebrow>Engagement lead</Eyebrow>
              <h2 style={{ marginTop: 14, fontSize: "clamp(28px, 3.5vw, 42px)", maxWidth: "14ch" }}>
                You'll have a senior partner on the call, every call.
              </h2>
              <p style={{ marginTop: 22, color: "var(--ink-2)", fontSize: 16, maxWidth: 480 }}>
                No bait-and-switch. The partner on your kickoff signs every deliverable.
              </p>
            </div>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              <PersonCard name="Reza A." role="Partner, Governance" creds={["CISA","CISSP","ISO 27001 LA"]}/>
              <PersonCard name="Maya P." role="Senior Manager" creds={["CISM","ISO 27001 LA"]}/>
              <PersonCard name="Bayu W." role="Senior Consultant" creds={["OSCP","CISA"]}/>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container-wide">
          <Testimonial />
        </div>
      </section>

      <CtaBanner />
    </div>
  );
};

const DELIVERABLE_DESC = {
  "SoA & risk register": "Statement of Applicability mapped to your asset register, signed off by the ISMS Manager.",
  "Control mapping": "Cross-mapped controls to NIST CSF and OJK SE 21 so evidence flows to multiple regulators.",
  "Internal audit": "Independent internal audit pass with management response and corrective action plan.",
  "Surveillance support": "We sit alongside your team during certification body audits — including the dreaded surveillance.",
  "Executive narrative": "Two-page brief for the board: risk picture, what's safe, what isn't, what we recommend.",
  "Technical findings": "CVSS-scored findings with reproduction steps and remediation guidance per finding.",
  "Retest pass": "Free retest of all critical/high findings within 30 days of remediation.",
  "Remediation workshop": "Half-day workshop with your engineering team to walk through each finding.",
};

const KV = ({ k, v, borderL }) => (
  <div style={{ padding: "16px 18px", borderLeft: borderL ? "1px solid var(--line)" : "none" }}>
    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{k}</div>
    <div style={{ marginTop: 4, fontSize: 16, fontWeight: 500 }}>{v}</div>
  </div>
);

const Timeline = () => {
  const phases = [
    { name: "Discovery", weeks: 2, items: ["Stakeholder interviews", "Asset register", "Scope memo"] },
    { name: "Gap assessment", weeks: 3, items: ["Control walkthrough", "Evidence sampling", "Heatmap & SoA draft"] },
    { name: "Design & remediate", weeks: 5, items: ["Policy redesign", "Control workshops", "Implementation"] },
    { name: "Internal audit", weeks: 2, items: ["Audit fieldwork", "Findings & response", "Management review"] },
    { name: "Certification", weeks: 2, items: ["Stage 1 & 2 support", "Surveillance prep"] },
  ];
  const total = phases.reduce((a, p) => a + p.weeks, 0);

  return (
    <div style={{ border: "1px solid var(--line)", borderRadius: "var(--radius)", background: "var(--surface)" }}>
      {/* week ruler */}
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${total}, 1fr)`,
                    borderBottom: "1px solid var(--line)", padding: "12px 24px",
                    fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)", letterSpacing: "0.05em" }}>
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} style={{ textAlign: "left" }}>{i+1}W</div>
        ))}
      </div>
      <div style={{ padding: "16px 24px 28px" }}>
        {phases.map((p, idx) => {
          const before = phases.slice(0, idx).reduce((a, x) => a + x.weeks, 0);
          return (
            <div key={p.name} style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: 24,
                                       padding: "20px 0", borderBottom: idx < phases.length-1 ? "1px solid var(--line-2)" : "none",
                                       alignItems: "center" }}>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em" }}>
                  PHASE {String(idx+1).padStart(2,"0")}
                </div>
                <div style={{ marginTop: 6, fontSize: 20, fontWeight: 500, letterSpacing: "-0.015em" }}>{p.name}</div>
                <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 4 }}>
                  {p.items.join(" · ")}
                </div>
              </div>
              <div style={{ position: "relative", height: 24, background: "var(--paper-2)", borderRadius: 999 }}>
                <div style={{
                  position: "absolute",
                  left: `${(before / total) * 100}%`,
                  width: `${(p.weeks / total) * 100}%`,
                  top: 0, bottom: 0,
                  background: idx % 2 === 0 ? "var(--ink)" : "var(--accent)",
                  borderRadius: 999,
                  display: "flex", alignItems: "center", paddingLeft: 14,
                  color: "var(--paper)", fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.05em",
                }}>
                  {p.weeks}W
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const PersonCard = ({ name, role, creds }) => (
  <div style={{ flex: "1 1 200px", minWidth: 200 }}>
    <ImgPlaceholder label="Portrait photo · neutral background" height={240} style={{ borderRadius: "var(--radius)" }} />
    <div style={{ marginTop: 14, fontSize: 18, fontWeight: 500, letterSpacing: "-0.01em" }}>{name}</div>
    <div style={{ fontSize: 13.5, color: "var(--ink-2)" }}>{role}</div>
    <div style={{ marginTop: 10, display: "flex", gap: 6, flexWrap: "wrap" }}>
      {creds.map(c => <Tag key={c}>{c}</Tag>)}
    </div>
  </div>
);

const Testimonial = () => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 48, alignItems: "center",
                padding: "56px 56px", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)",
                background: "var(--paper-2)" }}>
    <div>
      <ImgPlaceholder label="Client portrait" height={240} style={{ borderRadius: "var(--radius)" }}/>
      <div style={{ marginTop: 14, fontSize: 16, fontWeight: 500 }}>Dr. Andini Sukma</div>
      <div style={{ fontSize: 13.5, color: "var(--ink-2)" }}>CISO, Tier-1 Retail Bank</div>
    </div>
    <div>
      <Icon name="sparkle" size={22} color="var(--accent)"/>
      <blockquote style={{
        margin: "16px 0 0", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300,
        fontSize: "clamp(22px, 2.4vw, 34px)", lineHeight: 1.25, letterSpacing: "-0.01em",
        color: "var(--ink)",
      }}>
        &ldquo;They sized the engagement within 3% of actual effort, refused to pad the team, and stayed in the room when our certification body got difficult. That's rarer than it should be.&rdquo;
      </blockquote>
    </div>
  </div>
);

window.ServiceDetail = ServiceDetail;
