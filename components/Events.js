'use client';

import { useState } from 'react';
import Image from 'next/image';

const STATUS_TABS = ['All', 'Upcoming', 'Past'];
const CATEGORIES = ['All', 'Sports', 'Education', 'Community', 'Cultural', 'Health', 'Women', 'Disability'];

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', {
    weekday: 'short', year: 'numeric', month: 'long', day: 'numeric',
  });
}

function StatusBadge({ status }) {
  const cls = status === 'Upcoming' ? 'badge badge-upcoming'
    : status === 'Ongoing' ? 'badge badge-ongoing'
    : 'badge badge-past';
  return <span className={cls}>{status}</span>;
}

export default function Events({ events = [] }) {
  const [activeStatus, setActiveStatus] = useState('All');
  const [activeCat, setActiveCat] = useState('All');

  const upcoming = events.filter((e) => e.status === 'Upcoming');

  const filtered = events.filter((e) => {
    const matchStatus = activeStatus === 'All' || e.status === activeStatus;
    const matchCat = activeCat === 'All' || e.category === activeCat;
    return matchStatus && matchCat;
  });

  return (
    <section className="events" id="events">
      <div className="container">
        <div className="events-header">
          <span className="section-label">Events & Programmes</span>
          <h2 className="events-title">Where Action Happens</h2>
          <p className="events-sub">Join us at our events — from sports tournaments to community outreach.</p>
        </div>

        {upcoming.length > 0 && (
          <div className="events-upcoming-strip">
            <span className="events-strip-label">🔥 Upcoming</span>
            <div className="events-strip-items">
              {upcoming.slice(0, 4).map((e) => (
                <span key={e._id} className="events-strip-item">
                  {e.title} · {formatDate(e.date)}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="events-filters">
          <div className="events-status-tabs">
            {STATUS_TABS.map((tab) => (
              <button
                key={tab}
                className={`events-tab${activeStatus === tab ? ' active' : ''}`}
                onClick={() => setActiveStatus(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="events-categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`events-cat-pill${activeCat === cat ? ' active' : ''}`}
                onClick={() => setActiveCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="events-grid">
          {filtered.length === 0 ? (
            <div className="events-empty">
              <div className="events-empty-icon">🗓️</div>
              <h3 className="events-empty-title">
                {events.length === 0 ? 'Events Coming Soon' : 'No events match your filters'}
              </h3>
              <p className="events-empty-text">
                {events.length === 0
                  ? 'Our team is planning incredible events. Check back soon or follow us on social media.'
                  : 'Try adjusting the status or category filters above.'}
              </p>
            </div>
          ) : (
            filtered.map((event, i) => (
              <EventCard key={event._id} event={event} featured={event.featured && i === 0} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function EventCard({ event, featured }) {
  const imgUrl = event.coverPhoto?.asset?.url;

  return (
    <div className={`event-card${featured ? ' featured' : ''}`}>
      <div className="event-card-img-wrap">
        {imgUrl ? (
          <Image
            src={imgUrl}
            alt={event.title}
            fill
            className="event-card-img"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', background: 'var(--navy-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px' }}>
            🗓️
          </div>
        )}
        <div className="event-card-badges">
          <StatusBadge status={event.status} />
          <span className="badge badge-cat">{event.category}</span>
        </div>
      </div>
      <div className="event-card-body">
        <h3 className="event-card-title">{event.title}</h3>
        <div className="event-card-meta">
          <span className="event-card-meta-item">📅 {formatDate(event.date)}</span>
          <span className="event-card-meta-item">📍 {event.location}</span>
        </div>
        <p className="event-card-desc">{event.shortDescription}</p>
        <div className="event-card-actions">
          <span className="event-btn event-btn-outline">View Details</span>
          {event.registrationLink ? (
            <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" className="event-btn event-btn-primary">
              Register
            </a>
          ) : (
            <span className="event-btn event-btn-primary" style={{ opacity: 0.6, cursor: 'default' }}>Register</span>
          )}
        </div>
      </div>
    </div>
  );
}
