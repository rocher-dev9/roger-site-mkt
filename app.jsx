/**
 * App principal: orquesta el panel de Tweaks, aplica el modo light/dark
 * y el color de acento, y monta la aplicación en el DOM.
 *
 * Depende de:
 *  - DATA            (data.js)
 *  - Componentes     (sections.jsx — exportados a window)
 *  - TweaksPanel etc (tweaks-panel.jsx — exportados a window)
 */

const { useEffect } = React;

/* ─── Valores por defecto editables desde el panel ────────────── */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#504FED",
  "mode": "light",
  "marqueeText": "available for freelance · disponible para colaboraciones · 2026"
}/*EDITMODE-END*/;

/* ─── Panel de Tweaks ─────────────────────────────────────────── */
function MyTweaks({ tweaks, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Modo">
        <TweakRadio
          id="mode" label="Tema" value={tweaks.mode}
          options={[
            { value: 'light', label: 'Light' },
            { value: 'dark',  label: 'Dark' },
          ]}
          onChange={v => setTweak('mode', v)}
        />
      </TweakSection>
      <TweakSection label="Color de marca">
        <TweakColor
          id="accent" label="Acento" value={tweaks.accent}
          options={['#504FED', '#E84A3F', '#0E8A5A', '#E0A82E', '#0E0E0E', '#7A5BD8']}
          onChange={v => setTweak('accent', v)}
        />
      </TweakSection>
      <TweakSection label="Marquee">
        <TweakText
          id="marqueeText" label="Texto" value={tweaks.marqueeText}
          onChange={v => setTweak('marqueeText', v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

/* ─── App raíz ────────────────────────────────────────────────── */
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  /* Aplicar modo (light/dark) + color de acento al :root */
  useEffect(() => {
    document.body.setAttribute('data-mode', tweaks.mode);
    document.documentElement.style.setProperty('--accent', tweaks.accent);
  }, [tweaks.mode, tweaks.accent]);

  /* IntersectionObserver para revelar elementos al hacer scroll */
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  });

  return (
    <>
      <Nav />
      <Hero />
      <Marquee text={tweaks.marqueeText} />
      <Services />
      <Work />
      <Testimonials />
      <About />
      <ConnectBlock />
      <Footer />
      <MyTweaks tweaks={tweaks} setTweak={setTweak} />
    </>
  );
}

/* ─── Mount ───────────────────────────────────────────────────── */
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
