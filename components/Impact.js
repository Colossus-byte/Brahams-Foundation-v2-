'use client';

import { useEffect, useRef, useState } from 'react';

const bars = [
  { label: 'Sports & Talent', pct: 78 },
  { label: 'Economic Empowerment', pct: 65 },
  { label: 'Girl Child & Education', pct: 72 },
  { label: 'Disability Inclusion', pct: 60 },
  { label: 'Environmental Stewardship', pct: 45 },
];

const stats = [
  { num: '500+', label: 'Lives Impacted' },
  { num: '5', label: 'Active Programs' },
  { num: '4+', label: 'Partnerships' },
  { num: '100%', label: 'Community' },
];

export default function Impact() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.fade-up');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="impact" id="impact" ref={ref}>
      <div className="container">
        <div className="impact-grid">
          <div className="fade-up">
            <span className="section-label">Our Progress</span>
            <h2 className="impact-title">Progress That Matters</h2>
            <p className="impact-body">
              Every percentage point represents a community uplifted, a talent discovered,
              a life redirected. We measure impact not just in numbers, but in the transformation
              we witness every day across Ugenya, Siaya, and beyond.
            </p>

            <div className="impact-bars">
              {bars.map((b) => (
                <div key={b.label} className="impact-bar-item">
                  <div className="impact-bar-header">
                    <span className="impact-bar-label">{b.label}</span>
                    <span className="impact-bar-pct">{b.pct}%</span>
                  </div>
                  <div className="impact-bar-track">
                    <div
                      className="impact-bar-fill"
                      style={{ width: animated ? `${b.pct}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
            <div className="impact-stats-grid">
              {stats.map((s) => (
                <div key={s.label} className="impact-stat-card">
                  <div className="impact-stat-num">{s.num}</div>
                  <div className="impact-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
