/* Icons — minimal stroke-based, hand-tuned to match grotesque typography
   No emoji, no decorative SVG illustrations. */

const Icon = ({ name, size = 18, stroke = 1.5, color = "currentColor", style }) => {
  const paths = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    arrowDown: <path d="M12 5v14M6 13l6 6 6-6" />,
    arrowUpRight: <path d="M7 17 17 7M9 7h8v8" />,
    check: <path d="M5 12l4 4 10-10" />,
    plus: <path d="M12 5v14M5 12h14" />,
    minus: <path d="M5 12h14" />,
    close: <path d="M6 6l12 12M18 6L6 18" />,
    menu: <path d="M3 7h18M3 17h18" />,
    search: <g><circle cx="11" cy="11" r="6"/><path d="M20 20l-4-4"/></g>,
    shield: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />,
    server: <g><rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01"/></g>,
    chart: <path d="M4 19V5M4 19h16M8 15v-4M12 15V8M16 15v-6"/>,
    doc: <g><path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5"/></g>,
    layers: <g><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/></g>,
    sparkle: <path d="M12 3v6M9 6h6M5 12v4M3 14h4M15 14v6M12 17h6"/>,
    clock: <g><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></g>,
    user: <g><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/></g>,
    mail: <g><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3 7l9 6 9-6"/></g>,
    pin: <g><path d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></g>,
    phone: <path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z"/>,
    globe: <g><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></g>,
    chevron: <path d="M9 6l6 6-6 6"/>,
    chevronDown: <path d="M6 9l6 6 6-6"/>,
    star: <path d="M12 3l3 6 6 1-4.5 4.5L18 21l-6-3.5L6 21l1.5-6.5L3 10l6-1z"/>,
    iso: <g><circle cx="12" cy="12" r="9"/><path d="M9 12h6M12 9v6"/></g>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={style}>
      {paths[name] || null}
    </svg>
  );
};

window.Icon = Icon;
