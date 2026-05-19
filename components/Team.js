'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import ImagePlaceholder from './ImagePlaceholder';

export default function Team({ team = [] }) {
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
    <section className="team" id="team" ref={ref}>
      <div className="container">
        <div className="team-grid">
          <div className="team-photos fade-up">
            <div className="team-photo-wrap">
              {/* Placeholder — replace with <img src="team-disability-outreach.jpg"> once uploaded */}
              <ImagePlaceholder
                label="team-disability-outreach.jpg"
                style={{ width: '100%', height: '360px' }}
              />
              <div className="team-photo-caption">Disability Outreach Programme</div>
            </div>
            <div className="team-photo-wrap">
              {/* Placeholder — replace with <img src="team-leadership.jpg"> once uploaded */}
              <ImagePlaceholder
                label="team-leadership.jpg"
                style={{ width: '100%', height: '220px' }}
              />
              <div className="team-photo-caption">Foundation Leadership</div>
            </div>
          </div>

          <div className="team-content fade-up" style={{ transitionDelay: '0.15s' }}>
            <span className="section-label">Our People</span>
            <h2 className="team-title">Driven by Passion,<br />Guided by Purpose</h2>
            <p className="team-body">
              Behind every programme, every event, and every life changed is a dedicated team of
              passionate individuals who believe in the power of community. From our directors
              to our volunteers, each person brings unique skills and a shared commitment to
              empowering Ugenya and the world.
            </p>
            <div className="team-ctas">
              <a href="#contact" className="btn-primary">Join Our Team →</a>
              <a href="#contact" className="btn-outline">Partner With Us</a>
            </div>
          </div>
        </div>

        {team.length > 0 && (
          <div className="team-members-grid">
            {team.map((member) => {
              const photoUrl = member.photo?.asset?.url;
              return (
                <div key={member._id} className="team-member-card">
                  {photoUrl ? (
                    // Sanity CDN images use Next.js Image for optimisation
                    <Image
                      src={photoUrl}
                      alt={member.name}
                      width={300}
                      height={220}
                      className="team-member-img"
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                    />
                  ) : (
                    <div style={{ width: '100%', height: '220px', background: 'var(--navy-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>
                      👤
                    </div>
                  )}
                  <div className="team-member-body">
                    <div className="team-member-name">{member.name}</div>
                    <div className="team-member-role">{member.role}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
