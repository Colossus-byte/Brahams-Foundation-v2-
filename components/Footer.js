import ObfuscatedEmail from './ObfuscatedEmail';

const SOCIALS = [
  { icon: '𝕏', href: 'https://x.com/BrahamsFoundtn', label: 'Twitter' },
  { icon: '📸', href: 'https://www.instagram.com/brahamsfoundationke', label: 'Instagram' },
  { icon: '📘', href: 'https://www.facebook.com/share/1N8zvVTX44/', label: 'Facebook' },
  { icon: '🎵', href: 'https://www.tiktok.com/@brahamsfoundationmedia', label: 'TikTok' },
  { icon: '▶', href: 'https://youtube.com/@brahamsfoundationmedia2131', label: 'YouTube' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <img
                src="https://raw.githubusercontent.com/Colossus-byte/Brahams-Foundation-v2-/main/logo.jpg"
                alt="Brahams Foundation"
                className="footer-logo-img"
              />
              <span className="footer-logo-name">Brahams Foundation</span>
            </a>
            <p className="footer-mission">
              A globally-focused Kenyan NGO empowering communities through sports,
              education, economic empowerment, cultural heritage, and disability inclusion.
              Rooted in Ugenya, reaching the world.
            </p>
            <ObfuscatedEmail
              linkStyle={{
                display: 'inline-block',
                fontSize: '13px',
                color: 'var(--gold)',
                marginBottom: '20px',
                opacity: 0.85,
                transition: 'opacity 0.2s',
              }}
            />
            <div className="footer-socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Our Work */}
          <div>
            <h4 className="footer-col-title">Our Work</h4>
            <ul className="footer-links">
              {['Sports', 'Social Economic Empowerment', 'Environmental Stewardship', 'Girl Child Empowerment', 'Disability Inclusion'].map((l) => (
                <li key={l}><a href="#dockets" className="footer-link">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="footer-col-title">Get Involved</h4>
            <ul className="footer-links">
              {[
                { label: 'Donate', href: '#donate' },
                { label: 'Become a Sponsor', href: '#contact' },
                { label: 'Partner With Us', href: '#contact' },
                { label: 'Volunteer', href: '#contact' },
                { label: 'Media & Press', href: '#contact' },
              ].map((l) => (
                <li key={l.label}><a href={l.href} className="footer-link">{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Organisation */}
          <div>
            <h4 className="footer-col-title">Organisation</h4>
            <ul className="footer-links">
              {[
                { label: 'About Us', href: '#mission' },
                { label: 'Our Team', href: '#team' },
                { label: 'Our Impact', href: '#impact' },
                { label: 'Events', href: '#events' },
                { label: 'Gallery', href: '#gallery' },
              ].map((l) => (
                <li key={l.label}><a href={l.href} className="footer-link">{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} Brahams Foundation. All rights reserved. · Nyasrek Mall, Ukwala, Ugenya, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
