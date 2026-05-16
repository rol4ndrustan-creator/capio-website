/* Toolkit — redesigned questionnaire launcher (replaces the current screenshot UI)
   Adds: featured wizard, filter chips, working preview wizard for one tool. */

const WIZARDS = [
  {
    id: "pentest", cat: "Security", code: "01", title: "Pentest Sizing Wizard",
    desc: "Multi-target scope, approach, duration, and senior recommendations.",
    duration: "5–8 min", questions: 14, featured: true,
  },
  {
    id: "iso", cat: "Compliance", code: "02", title: "ISO 27001 Sizing",
    desc: "Scope/tier estimation for ISMS implementation — without pricing assumptions.",
    duration: "6–10 min", questions: 18,
  },
  {
    id: "emr", cat: "Healthcare", code: "03", title: "EMR Compliance Tool",
    desc: "Audit readiness assessment for EMR-aligned healthcare requirements & controls.",
    duration: "8–12 min", questions: 22,
  },
  {
    id: "iso-ready", cat: "Readiness", code: "04", title: "ISO Readiness (EMR)",
    desc: "Quick readiness diagnostic for EMR-related governance & controls.",
    duration: "4–6 min", questions: 12,
  },
  {
    id: "pjp2", cat: "PJP2", code: "05", title: "IT Audit — PJP2 (BI-aligned)",
    desc: "Sizing IT audit for payment companies (QRIS/Direct Debit): governance, reconciliation, access, change, DR.",
    duration: "10–14 min", questions: 26,
  },
  {
    id: "redteam", cat: "Security", code: "06", title: "Red Team Engagement Scope",
    desc: "Adversary-emulation sizing — threat model, dwell time goals, detection objectives.",
    duration: "8–10 min", questions: 16,
  },
  {
    id: "pdp", cat: "Compliance", code: "07", title: "PDP Law Readiness",
    desc: "Personal Data Protection law readiness for Indonesian data controllers.",
    duration: "6–8 min", questions: 15,
  },
  {
    id: "soc2", cat: "Compliance", code: "08", title: "SOC 2 Type II Scoping",
    desc: "Trust services criteria mapping for SaaS organizations targeting US/SG clients.",
    duration: "8–10 min", questions: 20,
  },
];

const CATS = ["All", "Security", "Compliance", "Healthcare", "PJP2", "Readiness"];

const Toolkit = () => {
  const [cat, setCat] = React.useState("All");
  const [q, setQ] = React.useState("");
  const [openWiz, setOpenWiz] = React.useState(null);

  const filtered = WIZARDS.filter(w =>
    (cat === "All" || w.cat === cat) &&
    (q === "" || (w.title + " " + w.desc + " " + w.cat).toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <div className="page">
      <section style={{ paddingTop: 48, paddingBottom: 40 }}>
        <div className="container-wide">
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)",
                        fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <a href="#/" className="hover-line">Capio</a>
            <Icon name="chevron" size={11} color="var(--muted)" />
            <span style={{ color: "var(--ink)" }}>Toolkit</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, marginTop: 32, alignItems: "end" }}>
            <div>
              <Eyebrow>Capio Toolkit · v3.2</Eyebrow>
              <h1 style={{
                fontSize: "clamp(40px, 5.5vw, 76px)", lineHeight: 1.02, letterSpacing: "-0.03em", marginTop: 22,
              }}>
                Sizing wizards.<br/>
                <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>
                  No login. No sales call.
                </em>
              </h1>
            </div>
            <div>
              <p style={{ color: "var(--ink-2)", fontSize: 17, lineHeight: 1.55, maxWidth: 480 }}>
                Eight guided assessments built by our senior team. Each takes under 15 minutes and ends with a scoped estimate &mdash; not a generic brochure.
              </p>
              <div style={{ display: "flex", gap: 28, marginTop: 24 }}>
                <MiniStat label="Wizards" value="8" />
                <MiniStat label="Avg. time" value="7 min" />
                <MiniStat label="Sessions / month" value="320+" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured wizard */}
      <section style={{ paddingTop: 0 }}>
        <div className="container-wide">
          <FeaturedWizard onOpen={() => setOpenWiz("pentest")} />
        </div>
      </section>

      {/* Filter + search */}
      <section style={{ paddingTop: 0, paddingBottom: 40 }}>
        <div className="container-wide">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
                        flexWrap: "wrap", gap: 16, paddingBottom: 24,
                        borderBottom: "1px solid var(--line)" }}>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {CATS.map(c => (
                <button key={c} onClick={() => setCat(c)}
                        style={{
                          padding: "8px 14px",
                          borderRadius: 999,
                          fontSize: 13,
                          fontWeight: 500,
                          background: cat === c ? "var(--ink)" : "transparent",
                          color: cat === c ? "var(--paper)" : "var(--ink-2)",
                          border: "1px solid " + (cat === c ? "var(--ink)" : "var(--line)"),
                          transition: "all .15s ease",
                        }}>
                  {c}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 14px",
                          border: "1px solid var(--line)", borderRadius: 999, width: 280,
                          background: "var(--surface)" }}>
              <Icon name="search" size={15} color="var(--muted)"/>
              <input value={q} onChange={e => setQ(e.target.value)}
                     placeholder="Search wizards… pentest, ISO, PJP2"
                     style={{ border: "none", background: "transparent", outline: "none",
                              fontSize: 14, flex: 1, color: "var(--ink)", fontFamily: "inherit" }}/>
              {q && <button onClick={() => setQ("")} style={{ color: "var(--muted)", display: "flex" }}>
                <Icon name="close" size={13}/>
              </button>}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 28 }}>
            {filtered.map(w => (
              <WizardCard key={w.id} w={w} onOpen={() => setOpenWiz(w.id)} />
            ))}
            {filtered.length === 0 && (
              <div style={{ gridColumn: "1/-1", padding: "60px 0", textAlign: "center", color: "var(--muted)" }}>
                No wizards match. Try clearing the filter.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How toolkit works */}
      <section style={{ background: "var(--paper-2)" }}>
        <div className="container-wide">
          <div className="section-head">
            <div>
              <Eyebrow>How the toolkit works</Eyebrow>
              <h2 style={{ marginTop: 14 }}>From wizard to scoped proposal in 48 hours.</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0,
                        borderTop: "1px solid var(--line)" }}>
            {[
              ["Pick a wizard", "Choose the framework or audit type that matches your engagement. Each wizard takes under 15 minutes."],
              ["Answer honestly", "Anonymous. We use ranges, not exact counts. Skip what you don't know — the wizard handles uncertainty."],
              ["Receive a scoped estimate", "Within 48 hours: a scope memo, indicative effort window, and a named partner for follow-up."],
            ].map(([t, d], i) => (
              <div key={t} style={{ padding: "36px 28px 48px", borderRight: i < 2 ? "1px solid var(--line)" : "none" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em" }}>
                  STEP {String(i+1).padStart(2,"0")}
                </div>
                <div style={{ marginTop: 24, fontSize: 24, fontWeight: 500, letterSpacing: "-0.015em" }}>{t}</div>
                <p style={{ marginTop: 12, fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.6 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {openWiz && <WizardModal id={openWiz} onClose={() => setOpenWiz(null)} />}
    </div>
  );
};

const FeaturedWizard = ({ onOpen }) => (
  <div style={{
    border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", background: "var(--surface)",
    overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr",
  }}>
    <div style={{ padding: "48px 48px 40px" }}>
      <Tag accent>FEATURED · MOST USED</Tag>
      <h2 style={{ fontSize: 42, lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: 22 }}>
        Pentest Sizing Wizard
      </h2>
      <p style={{ marginTop: 16, color: "var(--ink-2)", fontSize: 16, maxWidth: 460, lineHeight: 1.55 }}>
        The most common entry point. Scopes web, API, mobile, internal, and cloud targets into a single engagement &mdash; with a sensible approach for each.
      </p>
      <div style={{ display: "flex", gap: 24, marginTop: 28 }}>
        <Bit k="Duration" v="5–8 min" />
        <Bit k="Questions" v="14" />
        <Bit k="Outputs" v="Scope memo" />
      </div>
      <div style={{ marginTop: 36, display: "flex", gap: 10 }}>
        <Button onClick={onOpen} icon="arrow">Open wizard</Button>
        <Button variant="ghost" icon="arrowUpRight">Copy share link</Button>
      </div>
    </div>
    <div style={{ background: "var(--ink)", color: "var(--paper)", padding: "48px",
                  position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", color: "rgba(255,255,255,0.5)" }}>
        ↳ PREVIEW · QUESTION 03 OF 14
      </div>
      <div>
        <div style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", marginBottom: 14, fontFamily: "var(--font-mono)" }}>
          Q03
        </div>
        <div style={{ fontSize: 26, lineHeight: 1.25, letterSpacing: "-0.015em" }}>
          How many <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--accent-2)" }}>internet-facing</em> web applications need to be tested?
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginTop: 28 }}>
          {["1–3", "4–8", "9–20", "20+"].map((o, i) => (
            <div key={o} style={{
              padding: "14px 12px", borderRadius: 8,
              border: "1px solid " + (i === 1 ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.15)"),
              background: i === 1 ? "rgba(255,255,255,0.08)" : "transparent",
              textAlign: "center", fontSize: 15, fontWeight: 500,
            }}>{o}</div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: 3 }}>
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} style={{ width: 18, height: 3, borderRadius: 2,
                                  background: i < 3 ? "var(--accent-2)" : "rgba(255,255,255,0.15)" }}/>
          ))}
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.06em", color: "rgba(255,255,255,0.6)" }}>
          21% · ~5 MIN LEFT
        </div>
      </div>
    </div>

    <style>{`
      @media (max-width: 900px) {
        section .container-wide > div[style*="grid-template-columns: 1fr 1fr"] {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
  </div>
);

const Bit = ({ k, v }) => (
  <div>
    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{k}</div>
    <div style={{ marginTop: 4, fontSize: 17, fontWeight: 500 }}>{v}</div>
  </div>
);

const WizardCard = ({ w, onOpen }) => (
  <div className="card" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 14, minHeight: 280 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
      <Tag>{w.cat}</Tag>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em" }}>
        {w.code} / 08
      </div>
    </div>
    <h3 style={{ fontSize: 20, lineHeight: 1.25, letterSpacing: "-0.015em", marginTop: 4 }}>{w.title}</h3>
    <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.55 }}>{w.desc}</p>
    <div style={{ marginTop: "auto", paddingTop: 18, borderTop: "1px solid var(--line)",
                  display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.05em" }}>
        {w.questions}Q · {w.duration.toUpperCase()}
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        <button onClick={onOpen}
                style={{ padding: "8px 14px", borderRadius: 999, background: "var(--ink)", color: "var(--paper)",
                         fontSize: 12.5, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 6 }}>
          Open <Icon name="arrow" size={12}/>
        </button>
        <button style={{ padding: "8px 14px", borderRadius: 999, background: "transparent",
                         border: "1px solid var(--line)", color: "var(--ink-2)", fontSize: 12.5, fontWeight: 500 }}>
          Copy link
        </button>
      </div>
    </div>
  </div>
);

const WizardModal = ({ id, onClose }) => {
  const w = WIZARDS.find(x => x.id === id) || WIZARDS[0];
  const QUESTIONS = [
    { q: "Which engagement type are you scoping?", opts: ["Web/API only", "Network internal", "Mobile + Web", "Multi-target (recommended)"] },
    { q: "How many internet-facing applications?", opts: ["1–3", "4–8", "9–20", "20+"] },
    { q: "What is your primary threat model?", opts: ["External attacker", "Insider risk", "Compliance evidence", "Pre-launch verification"] },
    { q: "Has a senior pentest been done in the last 12 months?", opts: ["Yes — full scope", "Yes — partial", "No", "Not sure"] },
  ];
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const done = step >= QUESTIONS.length;
  const pct = Math.round(((step) / QUESTIONS.length) * 100);

  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(14,22,32,0.5)", backdropFilter: "blur(8px)",
      zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
      animation: "fadeUp .25s ease",
    }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{
        width: "min(800px, 100%)", background: "var(--paper)", borderRadius: "var(--radius-lg)",
        overflow: "hidden", display: "flex", flexDirection: "column", maxHeight: "90vh",
      }}>
        <div style={{ padding: "20px 32px", borderBottom: "1px solid var(--line)",
                      display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em" }}>
              WIZARD · {w.code}
            </div>
            <div style={{ marginTop: 2, fontWeight: 500, fontSize: 17 }}>{w.title}</div>
          </div>
          <button onClick={onClose} style={{ padding: 8, borderRadius: "50%", border: "1px solid var(--line)", display: "flex" }}>
            <Icon name="close" size={16}/>
          </button>
        </div>

        <div style={{ height: 3, background: "var(--paper-2)", position: "relative" }}>
          <div style={{ height: "100%", width: pct + "%", background: "var(--accent)", transition: "width .35s ease" }}/>
        </div>

        <div style={{ padding: "40px 32px 32px", flex: 1, overflowY: "auto" }}>
          {!done ? (
            <>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--muted)", letterSpacing: "0.08em" }}>
                QUESTION {String(step+1).padStart(2,"0")} / {String(QUESTIONS.length).padStart(2,"0")}
              </div>
              <h3 style={{ marginTop: 14, fontSize: 30, lineHeight: 1.2, letterSpacing: "-0.02em" }}>
                {QUESTIONS[step].q}
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 28 }}>
                {QUESTIONS[step].opts.map((o, i) => {
                  const selected = answers[step] === i;
                  return (
                    <button key={o} onClick={() => setAnswers({...answers, [step]: i})}
                            style={{
                              padding: "18px 18px", textAlign: "left",
                              border: "1px solid " + (selected ? "var(--ink)" : "var(--line)"),
                              background: selected ? "var(--ink)" : "var(--surface)",
                              color: selected ? "var(--paper)" : "var(--ink)",
                              borderRadius: "var(--radius-sm)", fontSize: 15, fontWeight: 500,
                              transition: "all .15s ease",
                            }}>
                      {o}
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <Icon name="check" size={36} color="var(--accent)"/>
              <h3 style={{ marginTop: 18, fontSize: 32, letterSpacing: "-0.02em" }}>
                Scope ready.
              </h3>
              <p style={{ marginTop: 14, color: "var(--ink-2)", fontSize: 16, maxWidth: 440, margin: "14px auto 0" }}>
                We'll send a scope memo, indicative effort, and named partner within 48 hours.
              </p>
              <div style={{ display: "flex", gap: 24, justifyContent: "center", marginTop: 32, padding: "24px",
                            background: "var(--paper-2)", borderRadius: "var(--radius)", maxWidth: 520, margin: "32px auto" }}>
                <ResultBit k="Estimated" v="3–4 weeks"/>
                <ResultBit k="Team" v="2 senior"/>
                <ResultBit k="Approach" v="Hybrid"/>
              </div>
            </div>
          )}
        </div>

        <div style={{ padding: "20px 32px", borderTop: "1px solid var(--line)",
                      display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--surface)" }}>
          {!done ? (
            <>
              <button onClick={() => setStep(Math.max(0, step-1))} disabled={step === 0}
                      style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, opacity: step === 0 ? 0.4 : 1 }}>
                <Icon name="chevron" size={14} style={{ transform: "rotate(180deg)" }}/> Back
              </button>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.05em" }}>
                {pct}% COMPLETE
              </div>
              <Button onClick={() => setStep(step+1)} icon="arrow">
                {step === QUESTIONS.length - 1 ? "Get my scope" : "Continue"}
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" onClick={onClose} icon={false}>Close</Button>
              <Button href="#/contact" icon="arrow">Book consultation</Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const ResultBit = ({ k, v }) => (
  <div>
    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--muted)", letterSpacing: "0.08em" }}>{k.toUpperCase()}</div>
    <div style={{ marginTop: 4, fontSize: 19, fontWeight: 500 }}>{v}</div>
  </div>
);

window.Toolkit = Toolkit;
