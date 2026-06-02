'use client';

import { useState } from 'react';
import ObfuscatedEmail from './ObfuscatedEmail';

const INTERESTS = [
  'General Enquiry',
  'Partnership Opportunities',
  'Volunteer / Join Team',
  'Sponsorship',
  'Media & Press',
  'Donation Support',
  'Programme Participation',
];

const SOCIALS = [
  { icon: '𝕏', label: 'Twitter', href: 'https://x.com/BrahamsFoundtn' },
  { icon: '📸', label: 'Instagram', href: 'https://www.instagram.com/brahamsfoundationke' },
  { icon: '📘', label: 'Facebook', href: 'https://www.facebook.com/share/1N8zvVTX44/' },
  { icon: '🎵', label: 'TikTok', href: 'https://www.tiktok.com/@brahamsfoundationmedia' },
  { icon: '▶', label: 'YouTube', href: 'https://youtube.com/@brahamsfoundationmedia2131' },
];

export default function Contact({ settings }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', organisation: '', interest: '', message: '',
  });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Left */}
          <div>
            <span className="section-label">Get In Touch</span>
            <h2 className="contact-title">Let&apos;s Build<br />Something Together</h2>
            <p className="contact-body">
              Whether you&apos;re looking to partner with us, volunteer, sponsor a programme,
              or simply learn more about our work, we&apos;d love to hear from you.
              Every message matters.
            </p>

            <div className="contact-info-cards">
              <div className="contact-info-card">
                <div className="contact-info-icon">📍</div>
                <div>
                  <div className="contact-info-label">Location</div>
                  <div className="contact-info-value">
                    {settings?.address || 'Nyasrek Mall, Ukwala, Ugenya, Siaya County, Kenya'}
                  </div>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">📞</div>
                <div>
                  <div className="contact-info-label">Phone</div>
                  <div className="contact-info-value">
                    {settings?.phone
                      ? <a href={`tel:${settings.phone.replace(/\s/g, '')}`}>{settings.phone}</a>
                      : <a href="tel:+254794432183">+254 794 432 183</a>
                    }
                  </div>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">✉️</div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value">
                    <ObfuscatedEmail />
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="contact-social-pill">
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">✅</div>
                <h3 className="form-success-title">Message Received!</h3>
                <p className="form-success-text">
                  Thank you for reaching out. Our team will get back to you within 2 to 3 business days.
                </p>
              </div>
            ) : (
              <>
                <h3 className="contact-form-title">Send a Message</h3>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">First Name *</label>
                      <input
                        className="form-input"
                        name="firstName"
                        placeholder="John"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name *</label>
                      <input
                        className="form-input"
                        name="lastName"
                        placeholder="Doe"
                        required
                        value={form.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Organisation (optional)</label>
                    <input
                      className="form-input"
                      name="organisation"
                      placeholder="Your organisation name"
                      value={form.organisation}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Area of Interest *</label>
                    <select
                      className="form-select"
                      name="interest"
                      required
                      value={form.interest}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Select an interest...</option>
                      {INTERESTS.map((i) => (
                        <option key={i} value={i}>{i}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      className="form-textarea"
                      name="message"
                      placeholder="Tell us how we can work together..."
                      required
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="form-submit">
                    Send Message →
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
