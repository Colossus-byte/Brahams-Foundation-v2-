'use client';

import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  const links = [
    { label: 'Mission', href: '#mission' },
    { label: 'Our Work', href: '#dockets' },
    { label: 'Events', href: '#events' },
    { label: 'Impact', href: '#impact' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            {/* Logo placeholder — replace div with <img> once logo.jpg is available */}
            <div
              className="nav-logo-img"
              style={{
                background: 'rgba(201,168,76,0.1)',
                border: '2px solid rgba(201,168,76,0.55)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-cormorant, serif)',
                fontSize: '20px',
                fontWeight: 700,
                color: 'var(--gold)',
                flexShrink: 0,
              }}
            >
              B
            </div>
            <span className="nav-logo-text">
              Brahams Foundation
              <span className="nav-logo-sub">Empowering Globally</span>
            </span>
          </a>

          <div className="nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
            <a href="#donate" className="nav-link nav-donate">Donate Now</a>
          </div>

          <button
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`nav-mobile-overlay${menuOpen ? ' open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} className="nav-mobile-link" onClick={close}>{l.label}</a>
        ))}
        <a href="#donate" className="nav-mobile-donate" onClick={close}>Donate Now</a>
      </div>
    </>
  );
}
