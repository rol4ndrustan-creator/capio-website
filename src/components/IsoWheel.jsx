/* ISO Expertise Wheel — replaces the screenshot's clip-art ring with a proper
   typographic radial layout. Hover/active state highlights a domain. */

const IsoWheel = () => {
  const domains = window.CAPIO_ISO_WHEEL || [];
  const [active, setActive] = React.useState(0);
  const size = 560;
  const cx = size / 2;
  const cy = size / 2;
  const ringR = 220;
  const innerR = 130;

  /* arrange domains around a circle */
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "center" }}>
      {/* SVG wheel */}
      <div style={{ position: "relative", width: "100%", maxWidth: size, aspectRatio: "1", margin: "0 auto" }}>
        <svg viewBox={`0 0 ${size} ${size}`} style={{ width: "100%", height: "100%" }}>
          {/* outer ring guide */}
          <circle cx={cx} cy={cy} r={ringR} fill="none" stroke="var(--line)" strokeWidth="1" />
          <circle cx={cx} cy={cy} r={ringR - 36} fill="none" stroke="var(--line-2)" strokeWidth="1" strokeDasharray="2 4" />

          {/* center hub */}
          <circle cx={cx} cy={cy} r={innerR} fill="var(--ink)" />
          <text x={cx} y={cy - 16} textAnchor="middle" fill="var(--paper)"
                fontFamily="var(--font-mono)" fontSize="11" letterSpacing="0.12em">CAPIO</text>
          <text x={cx} y={cy + 4} textAnchor="middle" fill="var(--paper)"
                fontFamily="var(--font-sans)" fontSize="22" fontWeight="500" letterSpacing="-0.01em">ISO Consultant</text>
          <text x={cx} y={cy + 28} textAnchor="middle" fill="var(--paper)"
                fontFamily="var(--font-serif)" fontStyle="italic" fontSize="22" fontWeight="300">Expertise</text>

          {/* spokes + domain markers */}
          {domains.map((d, i) => {
            const a = (i / domains.length) * Math.PI * 2 - Math.PI / 2;
            const x1 = cx + Math.cos(a) * innerR;
            const y1 = cy + Math.sin(a) * innerR;
            const x2 = cx + Math.cos(a) * ringR;
            const y2 = cy + Math.sin(a) * ringR;
            const dotX = cx + Math.cos(a) * (ringR + 12);
            const dotY = cy + Math.sin(a) * (ringR + 12);
            const isActive = active === i;
            return (
              <g key={d.id} onClick={() => setActive(i)} style={{ cursor: "pointer" }}>
                <line x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke={isActive ? "var(--ink)" : "var(--line)"} strokeWidth={isActive ? 1.5 : 1}/>
                <circle cx={x2} cy={y2} r={isActive ? 8 : 5}
                        fill={isActive ? "var(--accent)" : "var(--paper-2)"}
                        stroke="var(--ink)" strokeWidth="1"/>
                <text x={dotX + Math.cos(a) * 18} y={dotY + Math.sin(a) * 18}
                      textAnchor={Math.cos(a) > 0.3 ? "start" : (Math.cos(a) < -0.3 ? "end" : "middle")}
                      dominantBaseline="middle"
                      fontFamily="var(--font-mono)" fontSize="10" letterSpacing="0.08em"
                      fill={isActive ? "var(--ink)" : "var(--muted)"}>
                  {String(i + 1).padStart(2, "0")}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Detail panel */}
      <div>
        <Eyebrow>Domain {String(active + 1).padStart(2, "0")} of {String(domains.length).padStart(2, "0")}</Eyebrow>
        <h3 style={{ marginTop: 14, fontSize: 36, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          {domains[active] && domains[active].label}
        </h3>
        <p style={{ marginTop: 14, color: "var(--ink-2)", fontSize: 15.5 }}>
          Standards Capio is qualified to consult, audit, and certify under, with active Lead Auditor accreditations.
        </p>

        <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 0,
                      border: "1px solid var(--line)", borderRadius: "var(--radius)",
                      background: "var(--surface)", overflow: "hidden" }}>
          {(domains[active]?.standards || []).map((s, i) => (
            <div key={s} style={{
              padding: "16px 20px",
              borderTop: i === 0 ? "none" : "1px solid var(--line)",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.02em",
            }}>
              <span>{s}</span>
              <Icon name="check" size={14} color="var(--accent)"/>
            </div>
          ))}
        </div>

        {/* domain chips for quick jump */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 24 }}>
          {domains.map((d, i) => (
            <button key={d.id} onClick={() => setActive(i)}
                    style={{
                      padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 500,
                      background: active === i ? "var(--ink)" : "transparent",
                      color: active === i ? "var(--paper)" : "var(--ink-2)",
                      border: "1px solid " + (active === i ? "var(--ink)" : "var(--line)"),
                      transition: "all .15s ease",
                    }}>
              {d.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

window.IsoWheel = IsoWheel;
