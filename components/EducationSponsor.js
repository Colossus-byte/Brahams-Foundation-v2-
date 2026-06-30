'use client';

import { useEffect, useRef } from 'react';
import ImagePlaceholder from './ImagePlaceholder';

const SUPPORTS = [
  { icon: '📚', label: 'School Fees' },
  { icon: '👕', label: 'Uniforms & Books' },
  { icon: '🤝', label: 'Mentorship' },
  { icon: '🎓', label: 'Academic Support' },
];

// Replace url with the real image path once photos are added to /public
// e.g. url: '/images/edu-1.jpg'
// Leave url as null to show the placeholder until photos are ready
const PHOTOS = [
  { filename: 'edu-1.jpg', url: null, alt: 'Children attending class' },
  { filename: 'edu-2.jpg', url: null, alt: 'Students with books and uniforms' },
  { filename: 'edu-3.jpg', url: null, alt: 'School outreach programme' },
  { filename: 'edu-4.jpg', url: null, alt: 'Community education partnership' },
];

export default function EducationSponsor() {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.fade-up');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="edu-sponsor" id="education" ref={ref}>
      <div className="container">
        <div className="edu-sponsor-grid">

          {/* ── Left: Content ── */}
          <div className="edu-sponsor-content fade-up">
            <span className="section-label">Education Sponsorship Initiative</span>

            <h2 className="edu-sponsor-title">
              Every Child Deserves<br />
              <em>A Chance to Learn</em>
            </h2>

            <p className="edu-sponsor-body">
              Brahams Foundation supports vulnerable children through school fees, uniforms,
              books, mentorship, and academic support — giving them the foundation to build
              a better future.
            </p>

            <p className="edu-sponsor-body edu-sponsor-body--gap">
              We partner with schools, children&apos;s homes, and aligned community institutions
              to identify children who need educational assistance and long-term empowerment.
            </p>

            <div className="edu-sponsor-supports">
              {SUPPORTS.map((s) => (
                <div key={s.label} className="edu-support-pill">
                  <span className="edu-support-pill-icon">{s.icon}</span>
                  <span className="edu-support-pill-label">{s.label}</span>
                </div>
              ))}
            </div>

            <a href="#donate" className="btn-primary edu-sponsor-cta">
              Support a Child →
            </a>
          </div>

          {/* ── Right: Photo mosaic ── */}
          <div className="edu-photo-wrap fade-up" style={{ transitionDelay: '0.18s' }}>
            <div className="edu-photo-grid">
              {PHOTOS.map((p) => (
                <div key={p.filename} className="edu-photo-slot">
                  {p.url ? (
                    <img
                      src={p.url}
                      alt={p.alt}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <ImagePlaceholder
                      label={p.filename}
                      style={{ position: 'absolute', inset: 0 }}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="edu-photo-badge">
              <span className="edu-photo-badge-num">Education</span>
              <span className="edu-photo-badge-label">Enabling Futures</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
