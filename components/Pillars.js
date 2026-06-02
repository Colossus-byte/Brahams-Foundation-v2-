'use client';

import { useEffect, useRef } from 'react';

const pillars = [
  { icon: '🌟', name: 'Talent & Education' },
  { icon: '🏥', name: 'Better Health Care' },
  { icon: '♿', name: 'People With Disabilities' },
  { icon: '👩‍💼', name: 'Women Empowerment' },
  { icon: '💼', name: 'Employment' },
  { icon: '🌱', name: 'Environmental Stewardship' },
];

export default function Pillars() {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.fade-up');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pillars" id="pillars" ref={ref}>
      <div className="container">
        <div className="pillars-header fade-up">
          <div>
            <span className="section-label">6 Focus Areas</span>
            <h2 className="pillars-title">Where We Direct<br />Our Energy</h2>
          </div>
          <p className="pillars-text">
            Every programme we run, every initiative we launch, flows through one of these six
            transformational focus areas, chosen because they represent the most urgent needs
            in our communities and the greatest opportunities for lasting change.
          </p>
        </div>

        <div className="pillars-grid fade-up" style={{ transitionDelay: '0.2s' }}>
          {pillars.map((p) => (
            <div key={p.name} className="pillar-item">
              <div className="pillar-icon">{p.icon}</div>
              <h3 className="pillar-name">{p.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
