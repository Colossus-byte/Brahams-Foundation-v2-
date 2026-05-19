'use client';

import { useEffect, useRef } from 'react';
import ImagePlaceholder from './ImagePlaceholder';

export default function Mission() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.fade-up');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const principles = [
    { icon: '🌐', title: 'Empower Globally', text: 'Connecting local communities to global opportunities and resources.' },
    { icon: '🤝', title: 'Unite Communities', text: 'Building bridges across cultures, abilities, and generations.' },
    { icon: '✨', title: 'Change Lives', text: 'Creating lasting impact through education, sports, and empowerment.' },
  ];

  return (
    <section className="mission" id="mission" ref={sectionRef}>
      <div className="container">
        <div className="mission-grid">
          <div className="mission-img-wrap fade-up">
            {/* Placeholder — replace with <img src="community-team.jpg"> once uploaded */}
            <ImagePlaceholder
              label="community-team.jpg"
              style={{ width: '100%', height: '560px', borderRadius: 'var(--radius-xl)' }}
            />
            <div className="mission-quote-card">
              <span className="mission-quote-mark">"</span>
              <p className="mission-quote-text">Where there is unity, there is strength.</p>
              <p className="mission-quote-source">Brahams Foundation</p>
            </div>
          </div>

          <div className="mission-content fade-up" style={{ transitionDelay: '0.15s' }}>
            <span className="section-label">Our Purpose</span>
            <h2 className="mission-title">Built on Purpose,<br />Driven by People</h2>
            <p className="mission-body">
              Brahams Foundation is a globally-focused Kenyan NGO rooted in Ugenya, Siaya County.
              We champion talent development through sports, advance girl child education and empowerment,
              foster cultural pride, and create economic pathways for individuals and communities.
              <br /><br />
              We believe every child, especially girls, deserves access to quality education, safe spaces,
              and mentorship. Our disability inclusion programmes ensure no one is left behind, while our
              economic initiatives unlock sustainable livelihoods across the region and beyond.
            </p>

            <div className="mission-cards">
              {principles.map((p) => (
                <div key={p.title} className="mission-card">
                  <span className="mission-card-icon">{p.icon}</span>
                  <div>
                    <div className="mission-card-title">{p.title}</div>
                    <div className="mission-card-text">{p.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
