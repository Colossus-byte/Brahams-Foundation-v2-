export default function Hero({ settings }) {
  const subtext = settings?.heroSubtext ||
    'Brahams Foundation unites communities through sports, education, environmental stewardship, and economic empowerment, building a future where every life matters.';

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-body container">
        <div className="hero-content">
          <div className="hero-pill">
            <span className="hero-pill-dot" />
            Kenyan NGO · Est. Ugenya, Siaya
          </div>

          <h1 className="hero-headline">
            {settings?.heroHeadline || (
              <>
                Empowering<br />
                <em>Globally.</em><br />
                Changing Lives.
              </>
            )}
          </h1>

          <p className="hero-subtext">{subtext}</p>

          <div className="hero-ctas">
            <a href="#mission" className="btn-primary">
              Discover Our Mission →
            </a>
            <a href="#donate" className="btn-outline">
              Support Us
            </a>
          </div>
        </div>

        <div className="hero-emblem">
          <div className="hero-emblem-ring">
            <img
              src="https://raw.githubusercontent.com/Colossus-byte/Brahams-Foundation-v2-/main/logo.jpg"
              alt="Brahams Foundation"
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                border: '3px solid var(--gold)',
                boxShadow: '0 0 60px rgba(201,168,76,0.25)',
                flexShrink: 0,
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="hero-stats-inner">
          {[
            { num: '3', label: 'Core Dockets' },
            { num: '6+', label: 'Focus Areas' },
            { num: '∞', label: 'Lives to Change' },
            { num: '1', label: 'Global Vision' },
          ].map((s) => (
            <div key={s.label} className="hero-stat">
              <div className="hero-stat-num">{s.num}</div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
