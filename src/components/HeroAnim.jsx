/* HeroAnim — "Control Coverage in Motion"
   A grid of small squares representing security controls grouped by domain.
   A scanning bar sweeps across; controls transition through states:
   unassessed → assessing → covered/gap.
   Designed to feel like a quiet, expert dashboard — not a generic gradient blob. */

const DOMAINS = [
  { id: "A5",  label: "Organizational",  count: 37, x: 0,   w: 24 },
  { id: "A6",  label: "People",          count: 8,  x: 24,  w: 8  },
  { id: "A7",  label: "Physical",        count: 14, x: 32,  w: 14 },
  { id: "A8",  label: "Technological",   count: 34, x: 46,  w: 30 },
];
const TOTAL_COLS = 76;
const ROWS = 6;

const HeroAnim = ({ enabled = true }) => {
  const canvasRef = React.useRef(null);
  const wrapRef = React.useRef(null);
  const [dims, setDims] = React.useState({ w: 720, h: 420 });
  const [stats, setStats] = React.useState({ covered: 0, gaps: 0, assessed: 0 });

  /* Build initial control grid (deterministic, no random per render) */
  const cells = React.useMemo(() => {
    const arr = [];
    let seed = 1;
    const rand = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    DOMAINS.forEach(d => {
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < d.w; c++) {
          const phase = rand();
          arr.push({
            col: d.x + c,
            row: r,
            domain: d.id,
            phase,
            isGap: rand() < 0.12, // ~12% will end as "gap"
          });
        }
      }
    });
    return arr;
  }, []);

  React.useEffect(() => {
    const onResize = () => {
      if (!wrapRef.current) return;
      const w = wrapRef.current.offsetWidth;
      const h = Math.max(360, Math.min(520, w * 0.58));
      setDims({ w, h });
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    canvas.width = dims.w * dpr;
    canvas.height = dims.h * dpr;
    ctx.scale(dpr, dpr);

    const pad = { l: 32, r: 32, t: 56, b: 56 };
    const gridW = dims.w - pad.l - pad.r;
    const gridH = dims.h - pad.t - pad.b;
    const cellW = gridW / TOTAL_COLS;
    const cellH = gridH / ROWS;
    const sz = Math.min(cellW, cellH) * 0.72;

    let raf;
    const start = performance.now();
    let lastStats = { covered: 0, gaps: 0, assessed: 0 };

    const tick = (now) => {
      const t = enabled ? ((now - start) / 1000) % 7 : 7; // 7s cycle; freeze on disable
      ctx.clearRect(0, 0, dims.w, dims.h);

      // axis lines
      ctx.strokeStyle = "rgba(14,22,32,0.08)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(pad.l, dims.h - pad.b + 0.5);
      ctx.lineTo(dims.w - pad.r, dims.h - pad.b + 0.5);
      ctx.stroke();

      // domain headers
      const ink = getCss("--ink");
      const muted = getCss("--muted");
      const accent = getCss("--accent");
      const paper2 = getCss("--paper-2");

      DOMAINS.forEach(d => {
        const x = pad.l + d.x * cellW;
        const w = d.w * cellW;
        ctx.fillStyle = "rgba(14,22,32,0.55)";
        ctx.font = "500 10px 'JetBrains Mono', monospace";
        ctx.textBaseline = "alphabetic";
        ctx.fillText(d.id, x + 2, pad.t - 22);
        ctx.fillStyle = "rgba(14,22,32,0.85)";
        ctx.font = "500 13px 'Hanken Grotesk', sans-serif";
        ctx.fillText(d.label, x + 2, pad.t - 6);
        // small bracket
        ctx.strokeStyle = "rgba(14,22,32,0.15)";
        ctx.beginPath();
        ctx.moveTo(x, pad.t - 32);
        ctx.lineTo(x, pad.t - 28);
        ctx.lineTo(x + w - cellW * 0.2, pad.t - 28);
        ctx.lineTo(x + w - cellW * 0.2, pad.t - 32);
        ctx.stroke();
      });

      // scan bar position: 0 → 1 over 5s, then pause 2s
      const scanT = Math.min(1, t / 5);
      const scanX = pad.l + scanT * gridW;

      // cells
      let covered = 0, gaps = 0, assessed = 0;
      cells.forEach(cell => {
        const cx = pad.l + cell.col * cellW + (cellW - sz) / 2;
        const cy = pad.t + cell.row * cellH + (cellH - sz) / 2;
        const cellCenterX = pad.l + cell.col * cellW + cellW / 2;

        // state determination
        const distToScan = cellCenterX - scanX;
        let state = "idle";
        if (distToScan < -2 && distToScan > -16) state = "scanning";
        else if (distToScan <= -16) state = cell.isGap ? "gap" : "covered";

        let fill = "rgba(14,22,32,0.06)";
        let stroke = null;
        if (state === "scanning") {
          fill = paper2;
          stroke = ink;
        } else if (state === "covered") {
          fill = accent;
          covered++;
        } else if (state === "gap") {
          fill = "transparent";
          stroke = "rgba(184, 84, 31, 0.8)";
          gaps++;
        }
        if (state !== "idle") assessed++;

        ctx.fillStyle = fill;
        if (state === "gap") {
          ctx.strokeStyle = stroke;
          ctx.lineWidth = 1;
          ctx.strokeRect(cx + 0.5, cy + 0.5, sz - 1, sz - 1);
        } else {
          ctx.fillRect(cx, cy, sz, sz);
          if (stroke) {
            ctx.strokeStyle = stroke;
            ctx.lineWidth = 1;
            ctx.strokeRect(cx + 0.5, cy + 0.5, sz - 1, sz - 1);
          }
        }
      });

      // scan bar
      if (scanT < 1) {
        const grad = ctx.createLinearGradient(scanX - 40, 0, scanX, 0);
        grad.addColorStop(0, "rgba(14,22,32,0)");
        grad.addColorStop(1, "rgba(14,22,32,0.12)");
        ctx.fillStyle = grad;
        ctx.fillRect(scanX - 40, pad.t - 4, 40, gridH + 8);
        ctx.strokeStyle = "rgba(14,22,32,0.4)";
        ctx.beginPath();
        ctx.moveTo(scanX + 0.5, pad.t - 8);
        ctx.lineTo(scanX + 0.5, pad.t + gridH + 8);
        ctx.stroke();

        // tick label
        ctx.fillStyle = "rgba(14,22,32,0.6)";
        ctx.font = "500 10px 'JetBrains Mono', monospace";
        ctx.fillText("SCANNING", scanX + 6, pad.t - 36);
      }

      // legend & live count along bottom
      const legendY = dims.h - pad.b + 24;
      ctx.font = "500 11px 'JetBrains Mono', monospace";
      ctx.fillStyle = "rgba(14,22,32,0.55)";
      ctx.fillText(`${assessed} / ${cells.length} ASSESSED`, pad.l, legendY);
      // accent dot
      ctx.fillStyle = accent;
      ctx.fillRect(pad.l + 145, legendY - 9, 9, 9);
      ctx.fillStyle = "rgba(14,22,32,0.7)";
      ctx.fillText(`${covered} COVERED`, pad.l + 160, legendY);
      // gap marker
      ctx.strokeStyle = "rgba(184,84,31,0.9)";
      ctx.strokeRect(pad.l + 260 + 0.5, legendY - 9 + 0.5, 8, 8);
      ctx.fillStyle = "rgba(14,22,32,0.7)";
      ctx.fillText(`${gaps} GAPS`, pad.l + 275, legendY);

      if (
        assessed !== lastStats.assessed ||
        covered !== lastStats.covered ||
        gaps !== lastStats.gaps
      ) {
        lastStats = { covered, gaps, assessed };
        setStats(lastStats);
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [dims, cells, enabled]);

  return (
    <div ref={wrapRef} style={{
      width: "100%",
      background: "var(--surface)",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius-lg)",
      padding: 0,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* corner labels */}
      <div style={{
        position: "absolute", top: 18, right: 22, display: "flex", alignItems: "center", gap: 8,
        fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--muted)", letterSpacing: "0.08em",
      }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "inline-block",
          animation: "blink 1.8s ease-in-out infinite" }}/>
        LIVE · ISO 27001 ANNEX A
      </div>

      <canvas ref={canvasRef} style={{ width: "100%", height: dims.h, display: "block" }} />

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
      `}</style>
    </div>
  );
};

function getCss(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || "#000";
}

window.HeroAnim = HeroAnim;
