/* Contact / Request a proposal */

const Contact = () => {
  const [form, setForm] = React.useState({
    name: "", email: "", company: "", role: "", interest: "ISO 27001", urgency: "Within 3 months", message: "",
  });
  const [sent, setSent] = React.useState(false);
  const handle = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <div className="page">
      <section style={{ paddingTop: 48, paddingBottom: 40 }}>
        <div className="container-wide">
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)",
                        fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <a href="#/" className="hover-line">Capio</a>
            <Icon name="chevron" size={11} color="var(--muted)" />
            <span style={{ color: "var(--ink)" }}>Contact</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 80, marginTop: 36, alignItems: "start" }}>
            {/* Left: copy & contact info */}
            <div style={{ position: "sticky", top: 100 }}>
              <Eyebrow>Get in touch</Eyebrow>
              <h1 style={{ marginTop: 22, fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1.04, letterSpacing: "-0.03em" }}>
                Tell us what you're<br/>
                <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>
                  trying to ship.
                </em>
              </h1>
              <p style={{ marginTop: 22, fontSize: 17, color: "var(--ink-2)", lineHeight: 1.6, maxWidth: 460 }}>
                A named partner will reply within one working day. If you'd like to size your engagement first, the toolkit takes about 8 minutes.
              </p>

              <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 22 }}>
                <ContactRow icon="mail" k="Email" v="hello@capiotekologi.co.id" />
                <ContactRow icon="phone" k="Phone (JKT)" v="+62 21 5790 1234" />
                <ContactRow icon="pin" k="Jakarta HQ" v="Sentral Senayan III, 12th Floor" />
                <ContactRow icon="pin" k="Surabaya" v="Pakuwon Tower, 23rd Floor" />
                <ContactRow icon="pin" k="Singapore" v="One Raffles Place, Level 24" />
              </div>

              <div style={{ marginTop: 40, padding: 20, background: "var(--paper-2)", borderRadius: "var(--radius)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Icon name="clock" size={16} color="var(--ink-2)" />
                  <div style={{ fontWeight: 500 }}>Response window</div>
                </div>
                <div style={{ marginTop: 8, fontSize: 14, color: "var(--ink-2)" }}>
                  Mon–Fri · 09:00–18:00 WIB · &lt; 1 working day for proposals
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--line)",
                          borderRadius: "var(--radius-lg)", padding: "40px 40px" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <Icon name="check" size={40} color="var(--accent)"/>
                  <h2 style={{ marginTop: 18, fontSize: 30 }}>Message received.</h2>
                  <p style={{ marginTop: 14, color: "var(--ink-2)" }}>
                    A partner will reply to {form.email || "you"} within one working day.
                  </p>
                  <div style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 10 }}>
                    <Button href="#/toolkit" icon="arrow">Open the toolkit</Button>
                    <Button variant="ghost" href="#/insights" icon="arrowUpRight">Read insights</Button>
                  </div>
                </div>
              ) : (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h2 style={{ fontSize: 22, fontWeight: 500 }}>Request a proposal</h2>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.06em" }}>
                      STEP 1 OF 1 · ~2 MIN
                    </div>
                  </div>

                  <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                    <div className="field"><label>Full name</label>
                      <input value={form.name} onChange={handle("name")} placeholder="Andini Sukma" /></div>
                    <div className="field"><label>Work email</label>
                      <input value={form.email} onChange={handle("email")} placeholder="ciso@yourbank.co.id" /></div>
                    <div className="field"><label>Company</label>
                      <input value={form.company} onChange={handle("company")} placeholder="PT Bank ..." /></div>
                    <div className="field"><label>Role</label>
                      <input value={form.role} onChange={handle("role")} placeholder="CISO, Head of IT Audit, ..." /></div>

                    <div className="field" style={{ gridColumn: "1 / -1" }}>
                      <label>What are you trying to ship?</label>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {["ISO 27001", "Penetration Test", "PJP2 Audit", "EMR Compliance", "Red Team", "Not sure yet"].map(i => (
                          <button key={i} onClick={() => setForm({...form, interest: i})}
                                  style={{ padding: "8px 14px", borderRadius: 999, fontSize: 13, fontWeight: 500,
                                           background: form.interest === i ? "var(--ink)" : "var(--paper-2)",
                                           color: form.interest === i ? "var(--paper)" : "var(--ink-2)",
                                           border: "1px solid " + (form.interest === i ? "var(--ink)" : "var(--line)") }}>
                            {i}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="field" style={{ gridColumn: "1 / -1" }}>
                      <label>When do you need to start?</label>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {["This month", "Within 3 months", "Within 6 months", "Exploring"].map(i => (
                          <button key={i} onClick={() => setForm({...form, urgency: i})}
                                  style={{ padding: "8px 14px", borderRadius: 999, fontSize: 13, fontWeight: 500,
                                           background: form.urgency === i ? "var(--ink)" : "var(--paper-2)",
                                           color: form.urgency === i ? "var(--paper)" : "var(--ink-2)",
                                           border: "1px solid " + (form.urgency === i ? "var(--ink)" : "var(--line)") }}>
                            {i}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="field" style={{ gridColumn: "1 / -1" }}>
                      <label>Anything else?</label>
                      <textarea value={form.message} onChange={handle("message")} rows={5}
                                placeholder="Briefly describe your scope, regulatory driver, and any deadlines."/>
                    </div>
                  </div>

                  <div style={{ marginTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--muted)", letterSpacing: "0.05em", maxWidth: 340 }}>
                      WE'LL NEVER SHARE YOUR DETAILS. NDA AVAILABLE ON REQUEST BEFORE FIRST CALL.
                    </div>
                    <Button onClick={() => setSent(true)} icon="arrow">Send to Capio</Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container-wide">
          <div className="section-head">
            <div>
              <Eyebrow>Common questions</Eyebrow>
              <h2 style={{ marginTop: 14 }}>Before you fill in the form.</h2>
            </div>
          </div>
          <FAQ />
        </div>
      </section>
    </div>
  );
};

const ContactRow = ({ icon, k, v }) => (
  <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
    <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--paper-2)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <Icon name={icon} size={15} color="var(--ink-2)"/>
    </div>
    <div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{k}</div>
      <div style={{ marginTop: 2, fontSize: 15, fontWeight: 500 }}>{v}</div>
    </div>
  </div>
);

const FAQS = [
  ["Do you sign NDAs before the first call?", "Yes — we'll counter-sign your form or send ours. No technical detail is exchanged until both sides are protected."],
  ["What's your minimum engagement?", "We don't have a fixed floor, but most engagements start at ~4 weeks of senior effort. The toolkit gives a more accurate range."],
  ["Are you a reseller for any certification body?", "No. We hold zero partner agreements that pay us for certifications, software, or training referrals. Full disclosure available on request."],
  ["Do you do incident response retainers?", "Yes — for existing clients only, capped at 6 retainers active at once. We don't take cold-start IR work."],
  ["Can you work in-country, or remote?", "Both. Jakarta, Surabaya, Singapore in-country; remote across SEA. Day-rates do not differ."],
];

const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <div style={{ borderTop: "1px solid var(--line)" }}>
      {FAQS.map(([q, a], i) => (
        <div key={i} style={{ borderBottom: "1px solid var(--line)" }}>
          <button onClick={() => setOpen(open === i ? -1 : i)} style={{
            width: "100%", padding: "24px 0", display: "flex", justifyContent: "space-between",
            alignItems: "center", textAlign: "left", fontSize: 19, fontWeight: 500, letterSpacing: "-0.015em",
          }}>
            <span>{q}</span>
            <Icon name={open === i ? "minus" : "plus"} size={18} />
          </button>
          {open === i && (
            <div style={{ paddingBottom: 24, color: "var(--ink-2)", fontSize: 16, lineHeight: 1.6, maxWidth: 720 }}>
              {a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

window.Contact = Contact;
