const sponsors = [
  { icon: '⭐', name: 'Your Brand Here' },
  { icon: '🏆', name: 'Top Sponsor' },
  { icon: '🥇', name: 'Gold Partner' },
  { icon: '🌍', name: 'Global Donor' },
  { icon: '💫', name: 'Impact Partner' },
  { icon: '🤝', name: 'Strategic Ally' },
];

export default function Sponsors() {
  const doubled = [...sponsors, ...sponsors];

  return (
    <section className="sponsors" id="sponsors">
      <div className="sponsors-header">
        <p className="sponsors-label">Our Partners & Sponsors</p>
        <h2 className="sponsors-title">Backed by Those Who<br />Believe in Change</h2>
      </div>

      <div className="sponsors-marquee-wrap">
        <div className="sponsors-marquee">
          {doubled.map((s, i) => (
            <div key={i} className="sponsor-slot">
              <span className="sponsor-slot-icon">{s.icon}</span>
              <span className="sponsor-slot-name">{s.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="sponsors-cta">
        <p className="sponsors-cta-text">
          Join our growing family of sponsors and help us change more lives.
        </p>
        <a href="#contact" className="btn-primary">Become a Sponsor →</a>
      </div>
    </section>
  );
}
