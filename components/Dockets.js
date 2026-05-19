'use client';

import { useEffect, useRef } from 'react';
import ImagePlaceholder from './ImagePlaceholder';

const dockets = [
  {
    num: '01',
    title: 'Sports',
    badge: 'Talent Development',
    filename: 'sports-brahams-team.jpg',
    desc: 'Nurturing athletic excellence from grassroots to global stages. We identify, train, and equip young talents across football, athletics, and more, giving youth a competitive edge and a pathway to professional careers.',
  },
  {
    num: '02',
    title: 'Social Economic Empowerment',
    badge: 'Economic Growth',
    filename: 'community-cleanup.jpg',
    desc: 'Unlocking sustainable livelihoods through skills training, micro-enterprise support, and financial literacy. We equip communities, especially women and youth, with tools to build economic independence.',
  },
  {
    num: '03',
    title: 'Cultural Festivals, Investments & Initiatives',
    badge: 'Cultural Heritage',
    filename: 'community-outreach.jpg',
    desc: 'Celebrating and preserving the rich cultural identity of our communities. Through festivals, arts, and strategic cultural investments, we build pride, cohesion, and economic opportunities rooted in heritage.',
  },
];

export default function Dockets() {
  const ref = useRef(null);

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
    <section className="dockets" id="dockets" ref={ref}>
      <div className="container">
        <div className="dockets-header fade-up">
          <span className="section-label">3 Core Dockets</span>
          <h2 className="dockets-title">Our Work in the World</h2>
          <p className="dockets-sub">Three pillars driving transformation, locally rooted and globally inspired.</p>
        </div>

        <div className="dockets-grid">
          {dockets.map((d, i) => (
            <div key={d.num} className="docket-card fade-up" style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="docket-img-wrap">
                {/* Placeholder — replace with <img src={d.filename}> once images are uploaded */}
                <ImagePlaceholder
                  label={d.filename}
                  style={{ position: 'absolute', inset: 0 }}
                />
                <div className="docket-img-overlay" />
                <span className="docket-num">{d.num}</span>
                <span className="docket-badge">{d.badge}</span>
              </div>
              <div className="docket-body">
                <h3 className="docket-title">{d.title}</h3>
                <p className="docket-desc">{d.desc}</p>
                <span className="docket-arrow">Learn More →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
