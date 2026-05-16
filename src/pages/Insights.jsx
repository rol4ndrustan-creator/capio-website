/* Insights — editorial blog index */

const ARTICLES = [
  {
    id: 1, cat: "Compliance", featured: true,
    title: "ISO 27001:2022 — what actually changed for Indonesian banks.",
    excerpt: "A clause-by-clause reading of the 2022 revision, with notes on which Annex A controls OJK auditors now expect to see operating, not just documented.",
    read: "8 min", date: "Apr 12, 2026", author: "Reza Adipraja",
  },
  {
    id: 2, cat: "Pentest",
    title: "The diminishing returns of automated DAST in modern API estates.",
    excerpt: "Why scanner-led testing finds less and less in API-first architectures — and how to structure a senior-led testing programme instead.",
    read: "12 min", date: "Mar 28, 2026", author: "Bayu Wirawan",
  },
  {
    id: 3, cat: "Healthcare",
    title: "EMR vendor due diligence: a checklist that survives Kemenkes scrutiny.",
    excerpt: "Fourteen questions to put to your EMR vendor before signing — with the evidence each answer should be accompanied by.",
    read: "6 min", date: "Mar 14, 2026", author: "Maya Pranata",
  },
  {
    id: 4, cat: "Compliance",
    title: "PJP2: the four common findings BI keeps raising.",
    excerpt: "Reconciliation gaps, change management without segregation, DR tests on paper, and access reviews that nobody reads.",
    read: "10 min", date: "Mar 02, 2026", author: "Reza Adipraja",
  },
  {
    id: 5, cat: "Field notes",
    title: "What we learned scoping 240 engagements with a wizard.",
    excerpt: "Three years of data from our sizing toolkit — including the questions clients answer least honestly.",
    read: "5 min", date: "Feb 20, 2026", author: "Capio Team",
  },
  {
    id: 6, cat: "Pentest",
    title: "When red team isn't right: scoping adversary emulation for mid-sized banks.",
    excerpt: "A senior partner's view on when red team simulation is genuinely useful — and when it's just expensive theatre.",
    read: "9 min", date: "Feb 05, 2026", author: "Bayu Wirawan",
  },
];

const Insights = () => {
  const [cat, setCat] = React.useState("All");
  const cats = ["All", ...Array.from(new Set(ARTICLES.map(a => a.cat)))];
  const feat = ARTICLES.find(a => a.featured);
  const rest = ARTICLES.filter(a => !a.featured && (cat === "All" || a.cat === cat));

  return (
    <div className="page">
      <PageHeader
        crumb="Insights"
        title={<>Field notes from <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>senior practitioners.</em></>}
        lede="Slow, considered writing on the work we actually do. No SEO-driven listicles, no AI-spun re-treads of last quarter's headlines."
      />

      {/* Featured article */}
      <section style={{ paddingTop: 0 }}>
        <div className="container-wide">
          <a href="#/article" className="card" style={{ padding: 0, overflow: "hidden",
                                                        display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 0 }}>
            <ImgPlaceholder label="Editorial cover photo" height={460} style={{ borderRadius: 0, border: "none" }} />
            <div style={{ padding: "56px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <Tag accent>FEATURED</Tag>
              <h2 style={{ marginTop: 22, fontSize: 38, lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                {feat.title}
              </h2>
              <p style={{ marginTop: 18, fontSize: 16, color: "var(--ink-2)", lineHeight: 1.6, maxWidth: 520 }}>
                {feat.excerpt}
              </p>
              <div style={{ marginTop: 32, display: "flex", gap: 18, alignItems: "center",
                            fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--muted)", letterSpacing: "0.06em" }}>
                <span>{feat.author.toUpperCase()}</span>
                <span>·</span>
                <span>{feat.date.toUpperCase()}</span>
                <span>·</span>
                <span>{feat.read.toUpperCase()} READ</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Filter */}
      <section style={{ paddingTop: 32, paddingBottom: 24 }}>
        <div className="container-wide">
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", paddingBottom: 24, borderBottom: "1px solid var(--line)" }}>
            {cats.map(c => (
              <button key={c} onClick={() => setCat(c)}
                      style={{
                        padding: "8px 14px", borderRadius: 999, fontSize: 13, fontWeight: 500,
                        background: cat === c ? "var(--ink)" : "transparent",
                        color: cat === c ? "var(--paper)" : "var(--ink-2)",
                        border: "1px solid " + (cat === c ? "var(--ink)" : "var(--line)"),
                      }}>{c}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section style={{ paddingTop: 0 }}>
        <div className="container-wide">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {rest.map(a => (
              <a key={a.id} href="#/article" className="card" style={{ padding: 0, overflow: "hidden",
                                                                       display: "flex", flexDirection: "column" }}>
                <ImgPlaceholder label={`Photo · ${a.cat}`} height={220} style={{ borderRadius: 0, border: "none", borderBottom: "1px solid var(--line)" }}/>
                <div style={{ padding: 28, display: "flex", flexDirection: "column", flex: 1, gap: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Tag>{a.cat}</Tag>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.05em" }}>
                      {a.read.toUpperCase()}
                    </span>
                  </div>
                  <h3 style={{ fontSize: 21, lineHeight: 1.25, letterSpacing: "-0.015em" }}>{a.title}</h3>
                  <p style={{ fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.55,
                              display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {a.excerpt}
                  </p>
                  <div style={{ marginTop: "auto", paddingTop: 18, borderTop: "1px solid var(--line)",
                                display: "flex", justifyContent: "space-between",
                                fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--muted)", letterSpacing: "0.05em" }}>
                    <span>{a.author.toUpperCase()}</span>
                    <span>{a.date.toUpperCase()}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter sign-up */}
      <section>
        <div className="container-wide">
          <div style={{
            background: "var(--paper-2)", borderRadius: "var(--radius-lg)", padding: "56px 48px",
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center",
          }}>
            <div>
              <Eyebrow>Quarterly dispatch</Eyebrow>
              <h2 style={{ marginTop: 14, fontSize: 36, lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                Four times a year. Nothing in between.
              </h2>
              <p style={{ marginTop: 14, color: "var(--ink-2)", maxWidth: 460 }}>
                A practitioner-written quarterly on what's shifted in Indonesian cybersecurity & compliance. No automation, no SEO bait.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div className="field">
                <label>Work email</label>
                <input placeholder="ciso@yourbank.co.id" />
              </div>
              <Button icon="arrow" style={{ justifyContent: "center", padding: "16px 24px" }}>Subscribe</Button>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.05em" }}>
                ENGLISH · 4 ISSUES / YEAR · UNSUBSCRIBE ANYTIME
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

window.Insights = Insights;
window.ARTICLES = ARTICLES;
