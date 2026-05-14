/**
 * Componentes de sección del portfolio.
 * Cada bloque visual de la página vive aquí: Nav, Hero, Marquee,
 * Services, Work, Testimonials, About, Connect, Footer.
 *
 * Se exportan al final a `window` para que app.jsx pueda usarlos
 * (cada <script type="text/babel"> tiene su propio scope).
 */

const { useState, useEffect, useRef } = React;

/* ─── NAV ─────────────────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', on);
    return () => window.removeEventListener('scroll', on);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 32, behavior: 'smooth' });
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '20px 32px',
      background: scrolled ? 'color-mix(in srgb, var(--bg) 80%, transparent)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      transition: 'all 0.3s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <a href="#top" onClick={(e) => { e.preventDefault(); scrollTo('top'); }} style={{
        fontSize: '15px', fontWeight: 500, letterSpacing: '-0.02em',
        display: 'flex', alignItems: 'center', gap: 0
      }}>
        <span>{DATA.brand}</span>
        <span className="slash">/</span>
        <span>{DATA.brandSlash}</span>
      </a>

      <div className="hide-mobile" style={{ display: 'flex', gap: '28px', alignItems: 'center', fontSize: '14px' }}>
        {[
          { id: 'services', label: 'services' },
          { id: 'work',     label: 'work' },
          { id: 'about',    label: 'about' },
        ].map(l => (
          <button key={l.id} onClick={() => scrollTo(l.id)} style={{
            background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)',
            fontSize: '14px', fontFamily: 'inherit', padding: 0, letterSpacing: '-0.01em',
            display: 'inline-flex', alignItems: 'center'
          }}>
            <span className="slash">/</span>{l.label}
          </button>
        ))}
        <a href={`mailto:${DATA.email}`} style={{
          background: 'var(--text)', color: 'var(--bg)',
          padding: '10px 18px', borderRadius: '999px',
          fontSize: '13px', fontWeight: 500, letterSpacing: '-0.01em',
          transition: 'transform 0.2s'
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
        onMouseLeave={e => e.currentTarget.style.transform = ''}>
          let's connect →
        </a>
      </div>

      {/* Mobile toggle */}
      <button onClick={() => setOpen(o => !o)} className="show-mobile" style={{
        background: 'none', border: '1px solid var(--line)', padding: '8px 14px', borderRadius: '999px',
        fontSize: '13px', color: 'var(--text)', cursor: 'pointer', display: 'none'
      }}>{open ? 'close' : 'menu'}</button>

      {open && (
        <div style={{
          position: 'fixed', top: '68px', left: 0, right: 0, bottom: 0,
          background: 'var(--bg)', zIndex: 99, display: 'flex', flexDirection: 'column',
          padding: '40px 24px', gap: '24px', borderTop: '1px solid var(--line)'
        }}>
          {['services', 'work', 'about'].map(id => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: '32px', fontWeight: 500, letterSpacing: '-0.03em',
              color: 'var(--text)', textAlign: 'left', fontFamily: 'inherit'
            }}>
              <span className="slash">/</span>{id}
            </button>
          ))}
          <a href={`mailto:${DATA.email}`} style={{
            marginTop: '12px', fontSize: '18px',
            color: 'var(--accent)', fontStyle: 'italic', fontFamily: 'var(--serif)'
          }}>let's connect →</a>
        </div>
      )}
    </nav>
  );
}

/* ─── HERO ────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="top" style={{
      minHeight: '100vh',
      padding: '120px 32px 60px',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      position: 'relative'
    }}>
      <div className="container" style={{ padding: 0, marginTop: '40px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 className="hero-title">
          {DATA.brand}<span className="slash">/</span>{DATA.brandSlash}
        </h1>
      </div>

      <div className="container" style={{ padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '32px', marginTop: '40px' }}>
        <div style={{ maxWidth: '620px' }}>
          <p style={{
            fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
            lineHeight: 1.4, letterSpacing: '-0.01em',
            color: 'var(--text)'
          }}>
            {DATA.intro} <span className="slash">/</span>
            <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400 }}>{DATA.introBold}</span>
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-start' }}>
          <span className="num-mono" style={{ color: 'var(--muted)' }}>scroll</span>
          <svg width="14" height="40" viewBox="0 0 14 40" fill="none">
            <path d="M7 1V35M7 35L1 29M7 35L13 29" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      <div style={{ position: 'absolute', top: '90px', right: '32px', textAlign: 'right' }}>
        <div className="num-mono" style={{ color: 'var(--muted)' }}>{DATA.location}</div>
        <div className="num-mono" style={{ color: 'var(--muted)' }}>est. 2016 — {DATA.year}</div>
      </div>
    </section>
  );
}

/* ─── MARQUEE ─────────────────────────────────────────────────── */
function Marquee({ text }) {
  const items = Array(8).fill(text);
  return (
    <div style={{
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)',
      padding: '28px 0',
      overflow: 'hidden',
      background: 'var(--bg)'
    }}>
      <div className="marquee-track">
        {items.map((t, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: '80px',
            fontSize: 'clamp(1.6rem, 3.5vw, 3rem)',
            fontWeight: 500, letterSpacing: '-0.03em', whiteSpace: 'nowrap'
          }}>
            <span style={{ color: 'var(--text)' }}>{t}</span>
            <span style={{
              width: '14px', height: '14px', borderRadius: '50%',
              background: 'var(--accent)', display: 'inline-block', flexShrink: 0
            }}></span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── SERVICES ────────────────────────────────────────────────── */
function ServiceItem({ num, title, desc, isLast }) {
  const [open, setOpen] = useState(num === '01');
  return (
    <div className="reveal" style={{
      borderTop: '1px solid var(--line)',
      borderBottom: isLast ? '1px solid var(--line)' : 'none',
      padding: '28px 0',
      cursor: 'pointer',
      transition: 'padding 0.3s ease'
    }} onClick={() => setOpen(o => !o)}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '24px', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', flex: 1 }}>
          <span className="num-mono" style={{ color: 'var(--muted)', minWidth: '20px' }}>{num}</span>
          <h3 style={{
            fontSize: 'clamp(1.3rem, 2.5vw, 2.2rem)',
            fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.1,
          }}>
            <span className="slash">/</span>{title}
          </h3>
        </div>
        <span style={{
          fontSize: '24px', color: 'var(--accent)',
          transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s ease',
          display: 'inline-block', lineHeight: 1
        }}>+</span>
      </div>
      <div style={{
        maxHeight: open ? '400px' : '0',
        opacity: open ? 1 : 0,
        overflow: 'hidden',
        transition: 'max-height 0.5s ease, opacity 0.4s ease, margin-top 0.3s',
        marginTop: open ? '16px' : '0'
      }}>
        <p style={{
          color: 'var(--text-soft)',
          fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)', lineHeight: 1.6,
          maxWidth: '620px',
          paddingLeft: '44px'
        }}>{desc}</p>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" style={{ padding: '120px 0 80px' }}>
      <div className="container">
        <div className="svc-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '48px', alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: '120px' }}>
            <span className="num-mono" style={{ color: 'var(--muted)' }}>/services</span>
            <h2 className="reveal" style={{
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 0.95,
              marginTop: '8px'
            }}>
              lo que <em style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}>hago</em>.
            </h2>
            <p className="reveal" style={{
              marginTop: '24px', color: 'var(--text-soft)',
              fontSize: '15px', lineHeight: 1.6, maxWidth: '380px'
            }}>
              Cinco direcciones donde combino diseño visual con pensamiento estratégico. No son silos — se solapan, se nutren entre sí, y al final hablan del mismo proyecto desde ángulos distintos.
            </p>
          </div>

          <div>
            {DATA.services.map((s, i) => (
              <ServiceItem key={s.num} {...s} isLast={i === DATA.services.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── WORK / PROJECTS ─────────────────────────────────────────── */
const arrowBtn = (disabled) => ({
  width: '44px', height: '44px', borderRadius: '50%',
  border: '1px solid var(--line)', background: 'transparent',
  color: 'var(--text)', cursor: disabled ? 'not-allowed' : 'pointer',
  opacity: disabled ? 0.3 : 1, fontSize: '16px',
  transition: 'all 0.2s', fontFamily: 'inherit'
});

function ProjectCard({ project: p, active, onClick }) {
  return (
    <article onClick={onClick} style={{
      flex: '0 0 clamp(280px, 38vw, 560px)',
      scrollSnapAlign: 'start',
      cursor: 'pointer',
      opacity: active ? 1 : 0.55,
      transition: 'opacity 0.4s ease, transform 0.4s ease',
      transform: active ? 'none' : 'scale(0.97)',
    }}>
      <div style={{
        width: '100%',
        aspectRatio: '4/3',
        background: p.color,
        borderRadius: '16px',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '20px',
      }}>
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.18 }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`grid-${p.id}`} width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0L0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${p.id})`} />
        </svg>
        <span style={{
          position: 'absolute', bottom: '-30px', right: '-20px',
          fontSize: 'clamp(8rem, 18vw, 16rem)',
          fontWeight: 600, letterSpacing: '-0.06em',
          color: 'rgba(255,255,255,0.18)', lineHeight: 0.85,
          pointerEvents: 'none', userSelect: 'none'
        }}>{p.num}</span>
        <span style={{
          position: 'absolute', top: '20px', left: '20px',
          background: 'rgba(0,0,0,0.4)', color: '#fff',
          padding: '5px 12px', borderRadius: '999px',
          fontSize: '11px', fontFamily: 'var(--mono)', letterSpacing: '0.04em',
          backdropFilter: 'blur(8px)'
        }}>{p.cat}</span>
        <span style={{
          position: 'absolute', top: '20px', right: '20px',
          color: '#fff', fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.04em',
          opacity: 0.85
        }}>{p.year}</span>
      </div>
      <div>
        <h3 style={{
          fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)',
          fontWeight: 500, letterSpacing: '-0.02em',
          marginBottom: '8px'
        }}>
          <span className="slash">/</span>{p.title}
        </h3>
        <p style={{ color: 'var(--text-soft)', fontSize: '14px', lineHeight: 1.5 }}>{p.desc}</p>
        <a href={p.href} style={{
          marginTop: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px',
          color: 'var(--accent)', fontStyle: 'italic',
          fontFamily: 'var(--serif)', fontSize: '18px'
        }}>ver caso →</a>
      </div>
    </article>
  );
}

function Work() {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef(null);
  const next = () => setIdx(i => Math.min(DATA.projects.length - 1, i + 1));
  const prev = () => setIdx(i => Math.max(0, i - 1));

  useEffect(() => {
    if (trackRef.current) {
      const card = trackRef.current.children[idx];
      if (card) {
        const target = card.offsetLeft - 32;
        trackRef.current.scrollTo({ left: target, behavior: 'smooth' });
      }
    }
  }, [idx]);

  return (
    <section id="work" style={{ padding: '120px 0 80px' }}>
      <div className="container" style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <span className="num-mono" style={{ color: 'var(--muted)' }}>/work</span>
            <h2 className="reveal" style={{
              fontSize: 'clamp(2.4rem, 6vw, 5.5rem)',
              fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 0.95,
              marginTop: '8px'
            }}>
              <span className="slash">/</span>proyectos que <em style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}>dejaron huella</em>.
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span className="num-mono" style={{ color: 'var(--muted)' }}>
              {String(idx + 1).padStart(2, '0')} / {String(DATA.projects.length).padStart(2, '0')}
            </span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={prev} disabled={idx === 0} style={arrowBtn(idx === 0)}>←</button>
              <button onClick={next} disabled={idx === DATA.projects.length - 1} style={arrowBtn(idx === DATA.projects.length - 1)}>→</button>
            </div>
          </div>
        </div>
      </div>

      <div ref={trackRef} style={{
        display: 'flex', gap: '24px',
        padding: '0 32px 24px',
        overflowX: 'auto', scrollSnapType: 'x mandatory',
        scrollbarWidth: 'none'
      }}>
        {DATA.projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} active={i === idx} onClick={() => setIdx(i)} />
        ))}
        <div style={{ minWidth: '32px', flexShrink: 0 }}></div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ────────────────────────────────────────────── */
function Testimonials() {
  return (
    <section style={{ padding: '120px 0 80px', background: 'var(--bg)', borderTop: '1px solid var(--line)' }}>
      <div className="container" style={{ marginBottom: '56px' }}>
        <span className="num-mono" style={{ color: 'var(--muted)' }}>/testimonials</span>
        <h2 className="reveal" style={{
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 0.95,
          marginTop: '8px'
        }}>
          <span className="slash">/</span>lo que <em style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}>dicen</em>.
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 380px), 1fr))',
        gap: '1px',
        background: 'var(--line)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
      }}>
        {DATA.testimonials.map((t, i) => (
          <div key={i} className="reveal" style={{
            background: 'var(--bg)', padding: '36px 32px',
            display: 'flex', flexDirection: 'column', gap: '24px',
            minHeight: '280px'
          }}>
            <span style={{ fontSize: '40px', color: 'var(--accent)', fontFamily: 'var(--serif)', lineHeight: 0.6, fontStyle: 'italic' }}>"</span>
            <p style={{
              flex: 1, fontSize: '15px', lineHeight: 1.55,
              color: 'var(--text)', letterSpacing: '-0.01em'
            }}>{t.text}</p>
            <div style={{ borderTop: '1px solid var(--line)', paddingTop: '14px' }}>
              <div style={{ fontSize: '14px', fontWeight: 500, letterSpacing: '-0.01em' }}>{t.name}</div>
              <div className="num-mono" style={{ color: 'var(--muted)', marginTop: '2px' }}>{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── ABOUT ───────────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" style={{ padding: '120px 0 80px' }}>
      <div className="container">
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '56px', alignItems: 'start' }}>
          <div>
            <span className="num-mono" style={{ color: 'var(--muted)' }}>/about</span>
            <h2 className="reveal" style={{
              fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
              fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 0.95,
              marginTop: '8px'
            }}>
              <span className="slash">/</span>detrás del <em style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}>trabajo</em>.
            </h2>
          </div>

          <div>
            <p className="reveal" style={{
              fontSize: 'clamp(1.2rem, 1.9vw, 1.6rem)',
              lineHeight: 1.4, letterSpacing: '-0.01em',
              color: 'var(--text)', marginBottom: '40px'
            }}>{DATA.about}</p>

            <div className="reveal" style={{ marginTop: '40px', marginBottom: '40px' }}>
              <div className="num-mono" style={{ color: 'var(--muted)', marginBottom: '16px' }}>/toolbox</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {DATA.skills.map(s => (
                  <span key={s} style={{
                    fontSize: '13px', padding: '6px 12px',
                    border: '1px solid var(--line)', borderRadius: '999px',
                    color: 'var(--text)', transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)'; }}
                  onMouseLeave={e => { e.target.style.borderColor = 'var(--line)'; e.target.style.color = 'var(--text)'; }}>{s}</span>
                ))}
              </div>
            </div>

            <div className="reveal">
              <div className="num-mono" style={{ color: 'var(--muted)', marginBottom: '12px' }}>/elsewhere</div>
              {DATA.links.map((l, i) => (
                <a key={i} href={l.href} target="_blank" rel="noopener" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '18px 0', borderTop: '1px solid var(--line)',
                  borderBottom: i === DATA.links.length - 1 ? '1px solid var(--line)' : 'none',
                  fontSize: '15px', letterSpacing: '-0.01em',
                  transition: 'padding 0.3s, color 0.3s'
                }}
                onMouseEnter={e => { e.currentTarget.style.paddingLeft = '12px'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0'; e.currentTarget.style.color = 'var(--text)'; }}>
                  <span style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                    <span className="num-mono" style={{ color: 'var(--muted)', minWidth: '70px' }}>/{l.kind}</span>
                    <span>{l.title}</span>
                  </span>
                  <span style={{ fontSize: '14px' }}>↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CONNECT ─────────────────────────────────────────────────── */
function ConnectBlock() {
  return (
    <section style={{ padding: '120px 0 80px', borderTop: '1px solid var(--line)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="num-mono" style={{ color: 'var(--muted)', marginBottom: '16px' }}>/connect</div>
        <h2 className="reveal cursor-blink" style={{
          fontSize: 'clamp(2.4rem, 8vw, 7.5rem)',
          fontWeight: 500, letterSpacing: '-0.05em', lineHeight: 0.9,
          marginBottom: '40px'
        }}>
          ¿hablamos<span className="slash">?</span>
        </h2>
        <a href={`mailto:${DATA.email}`} style={{
          display: 'inline-block',
          fontSize: 'clamp(1.4rem, 3vw, 2.4rem)',
          fontStyle: 'italic', fontFamily: 'var(--serif)', fontWeight: 400,
          color: 'var(--accent)',
          borderBottom: '1px solid currentColor', paddingBottom: '4px'
        }}>
          {DATA.email} →
        </a>
        <div style={{
          marginTop: '48px', display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap',
          fontSize: '14px'
        }}>
          <a href={DATA.linkedin} target="_blank" rel="noopener" className="hover-line">linkedin <span style={{ fontSize: '10px' }}>↗</span></a>
          <a href={`mailto:${DATA.email}`} className="hover-line">email <span style={{ fontSize: '10px' }}>↗</span></a>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ──────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--line)',
      padding: '40px 32px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px'
    }}>
      <div className="num-mono" style={{ color: 'var(--muted)' }}>
        © {DATA.year} {DATA.fullName} · {DATA.location} · all rights reserved.
      </div>
      <div className="num-mono" style={{ color: 'var(--muted)' }}>
        <span className="slash">/</span>vibe-coded with care.
      </div>
    </footer>
  );
}

/* ─── EXPORT to window ────────────────────────────────────────── */
Object.assign(window, {
  Nav, Hero, Marquee,
  Services, ServiceItem,
  Work, ProjectCard,
  Testimonials, About, ConnectBlock, Footer,
});
