/* Article detail */

const Article = () => {
  const a = (window.ARTICLES || [])[0] || {
    title: "ISO 27001:2022 — what actually changed for Indonesian banks.",
    cat: "Compliance", read: "8 min", date: "Apr 12, 2026", author: "Reza Adipraja",
  };

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

      {/* Article header */}
      <section style={{ paddingTop: 48, paddingBottom: 24 }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 var(--gutter)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)",
                        fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <a href="#/" className="hover-line">Capio</a>
            <Icon name="chevron" size={11} color="var(--muted)" />
            <a href="#/insights" className="hover-line">Insights</a>
            <Icon name="chevron" size={11} color="var(--muted)" />
            <span style={{ color: "var(--ink)" }}>{a.cat}</span>
          </div>

          <Tag accent style={{ marginTop: 32 }}>{a.cat.toUpperCase()}</Tag>
          <h1 style={{ marginTop: 22, fontSize: "clamp(36px, 4.5vw, 56px)", lineHeight: 1.08, letterSpacing: "-0.025em" }}>
            {a.title}
          </h1>
          <p style={{ marginTop: 22, fontSize: 19, color: "var(--ink-2)", lineHeight: 1.55 }}>
            A clause-by-clause reading of the 2022 revision, with notes on which Annex A controls OJK auditors now expect to see <em>operating</em>, not just documented.
          </p>

          <div style={{ marginTop: 36, paddingTop: 24, paddingBottom: 24,
                        borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)",
                        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--paper-2)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 18 }}>
                R
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 500 }}>{a.author}</div>
                <div style={{ fontSize: 13, color: "var(--ink-2)" }}>Partner, Governance Practice</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 18, fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--muted)", letterSpacing: "0.06em" }}>
              <span>{a.date.toUpperCase()}</span>
              <span>·</span>
              <span>{a.read.toUpperCase()} READ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <section style={{ paddingTop: 0, paddingBottom: 56 }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 var(--gutter)" }}>
          <ImgPlaceholder label="Hero photograph · architectural, evidence-relevant" height={520} />
        </div>
      </section>

      {/* Body */}
      <section style={{ paddingTop: 0 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 var(--gutter)" }}>
          <div className="article-body">
            <p>The 2022 revision of ISO/IEC 27001 is, on its face, modest. The clause structure remains intact; the management system requirements are essentially unchanged. The substantive shift is in Annex A &mdash; the control set has been re-organised into four themes and expanded with eleven new controls aimed at modern cloud, threat intelligence, and secure development concerns.</p>

            <h2>What we're actually seeing in Indonesian banks</h2>
            <p>OJK supervisors have been quietly recalibrating around the new themes. In the three audit cycles we've supported since the revision came into force, two patterns have emerged repeatedly &mdash; both worth flagging early in your transition planning.</p>

            <blockquote>
              "The shift from <em>documented</em> to <em>operating</em> evidence is the single biggest change our clients have to internalise."
            </blockquote>

            <p>Most ISMS programmes treat policy publication as the primary deliverable. That worked for the 2013 surveillance cycle. It does not work for OJK auditors operating under the revised guidance, who now routinely sample evidence of <em>continuous</em> control operation &mdash; access reviews actually performed, threat intelligence actually consumed, secure development gates actually blocking.</p>

            <h3>The eleven new controls, ranked by where Indonesian estates struggle</h3>
            <ol>
              <li><strong>A.5.7 Threat intelligence.</strong> The single most-failed new control in our gap assessments.</li>
              <li><strong>A.8.9 Configuration management.</strong> Cloud estates rarely have authoritative baselines.</li>
              <li><strong>A.8.10 Information deletion.</strong> Most clients can't prove deletion happened.</li>
              <li><strong>A.8.16 Monitoring activities.</strong> SIEM exists; tuning rarely does.</li>
              <li><strong>A.5.23 Cloud security.</strong> Vendor due diligence isn't documented as a control.</li>
            </ol>

            <p>If you're entering surveillance in the next 12 months, your transition plan should prioritise these five in roughly this order. The remaining six new controls are typically handled by adjustments to existing programmes.</p>

            <h2>Practical next steps</h2>
            <p>Re-baseline your Statement of Applicability against the 2022 Annex A. Map your existing controls to the new theme structure &mdash; not because the certification body requires it, but because your <em>internal</em> reviewers will move much faster against the new layout. Then walk each of the eleven new controls with the relevant control owner and ask one question: <em>where would the evidence for this control's continuous operation come from?</em></p>

            <p>If that question produces a long pause, you have a gap. If it produces a confident answer, ask to see last quarter's evidence. That's where the audit will go next.</p>

            <div style={{ marginTop: 56, padding: 36, background: "var(--paper-2)", borderRadius: "var(--radius)",
                          borderLeft: "3px solid var(--accent)" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.08em" }}>
                READ NEXT
              </div>
              <h3 style={{ marginTop: 12, fontSize: 22, lineHeight: 1.25 }}>
                <a href="#/article" className="hover-line">PJP2: the four common findings BI keeps raising →</a>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />

      <style>{`
        .article-body {
          font-size: 18px;
          line-height: 1.75;
          color: var(--ink);
        }
        .article-body p { margin: 0 0 28px; }
        .article-body h2 {
          font-size: 30px; margin-top: 48px; margin-bottom: 18px;
          letter-spacing: -0.02em; line-height: 1.15;
        }
        .article-body h3 {
          font-size: 22px; margin-top: 36px; margin-bottom: 14px;
          letter-spacing: -0.015em;
        }
        .article-body blockquote {
          margin: 36px 0;
          padding: 0 0 0 28px;
          border-left: 2px solid var(--accent);
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 300;
          font-size: 24px;
          line-height: 1.4;
          color: var(--ink);
        }
        .article-body ol {
          padding-left: 24px;
          margin: 0 0 28px;
        }
        .article-body ol li { margin-bottom: 12px; }
        .article-body strong { font-weight: 600; }
      `}</style>
    </div>
  );
};

window.Article = Article;
