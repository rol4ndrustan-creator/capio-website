/* App — hash-based router + tweaks orchestrator */

const { useState, useEffect } = React;

function parseRoute() {
  let h = window.location.hash || "#/";
  h = h.replace(/^#/, "");
  if (!h.startsWith("/")) h = "/" + h;
  return h;
}

function App() {
  const [t, setTweak] = useTweaks(window.CAPIO_TWEAK_DEFAULTS);
  const [route, setRoute] = useState(parseRoute());

  useEffect(() => {
    const onHash = () => {
      setRoute(parseRoute());
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  /* apply tweaks to root */
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-palette", t.palette);
    root.setAttribute("data-density", t.density);
    root.style.setProperty("--heading-weight", t.headingWeight);
  }, [t]);

  let page;
  if (route === "/" || route === "") page = <Home tweaks={t}/>;
  else if (route === "/services") page = <Services/>;
  else if (route.startsWith("/service/")) page = <ServiceDetail id={route.slice("/service/".length)} />;
  else if (route === "/toolkit") page = <Toolkit/>;
  else if (route === "/insights") page = <Insights/>;
  else if (route === "/article" || route.startsWith("/article")) page = <Article/>;
  else if (route === "/about") page = <About/>;
  else if (route === "/cases") page = <Cases/>;
  else if (route === "/case-studies" || route.startsWith("/case-studies")) page = <CaseStudies/>;
  else if (route.startsWith("/case-study/")) page = <CaseStudyDetail id={route.slice("/case-study/".length)} />;
  else if (route === "/contact") page = <Contact/>;
  else page = <NotFound/>;

  return (
    <>
      <Nav route={route} />
      <main key={route}>{page}</main>
      <Footer />

      <TweaksPanel>
        <TweakSection label="Theme" />
        <TweakRadio label="Palette" value={t.palette}
                    options={["slate","emerald","bronze","ink"]}
                    onChange={(v) => setTweak("palette", v)} />
        <TweakRadio label="Density" value={t.density}
                    options={["compact","comfortable","spacious"]}
                    onChange={(v) => setTweak("density", v)} />

        <TweakSection label="Typography" />
        <TweakSlider label="Heading weight" value={t.headingWeight}
                     min={400} max={700} step={100}
                     onChange={(v) => setTweak("headingWeight", v)} />

        <TweakSection label="Homepage" />
        <TweakToggle label="Animated hero" value={t.heroAnim}
                     onChange={(v) => setTweak("heroAnim", v)} />
        <TweakToggle label="Show stats row" value={t.showStats}
                     onChange={(v) => setTweak("showStats", v)} />
      </TweaksPanel>
    </>
  );
}

const NotFound = () => (
  <div className="page" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)", letterSpacing: "0.1em" }}>404</div>
      <h1 style={{ marginTop: 16, fontSize: 56, letterSpacing: "-0.025em" }}>Page not found.</h1>
      <p style={{ marginTop: 14, color: "var(--ink-2)" }}>The page may have been moved or renamed.</p>
      <Button href="#/" icon="arrow" style={{ marginTop: 24 }}>Back to home</Button>
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
