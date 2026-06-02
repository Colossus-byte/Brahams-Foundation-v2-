'use client';

import { useState } from 'react';
import ImagePlaceholder from './ImagePlaceholder';

// url is null until images are uploaded to GitHub — filename is the reference
const STATIC_IMAGES = [
  { url: null, filename: 'sports-action.jpg', cat: 'Sports', caption: 'Sports Action' },
  { url: null, filename: 'education-girls.jpg', cat: 'Education', caption: 'Girl Child Education' },
  { url: null, filename: 'team-disability-outreach.jpg', cat: 'Disability', caption: 'Disability Outreach' },
  { url: null, filename: 'sports-brahams-team.jpg', cat: 'Sports', caption: 'Brahams Sports Team' },
  { url: null, filename: 'community-cleanup.jpg', cat: 'Community', caption: 'Community Cleanup' },
  { url: null, filename: 'education-community.jpg', cat: 'Education', caption: 'Community Education' },
  { url: null, filename: 'sports-school.jpg', cat: 'Sports', caption: 'School Sports' },
  { url: null, filename: 'community-outreach.jpg', cat: 'Community', caption: 'Community Outreach' },
  { url: null, filename: 'tree-planting.jpg', cat: 'Environmental', caption: 'Tree Planting Drive' },
  { url: null, filename: 'education-primary.jpg', cat: 'Education', caption: 'Primary Education' },
  { url: null, filename: 'sports-team-1.jpg', cat: 'Sports', caption: 'Sports Team 1' },
  { url: null, filename: 'team-leadership.jpg', cat: 'Community', caption: 'Leadership Team' },
  { url: null, filename: 'education-secondary.jpg', cat: 'Education', caption: 'Secondary Education' },
  { url: null, filename: 'sports-team-2.jpg', cat: 'Sports', caption: 'Sports Team 2' },
  { url: null, filename: 'community-team.jpg', cat: 'Community', caption: 'Community Team' },
];

const FILTER_CATS = ['All', 'Sports', 'Education', 'Community', 'Disability', 'Environmental'];

export default function Gallery({ albums = [] }) {
  const [activeCat, setActiveCat] = useState('All');
  const [lightboxIdx, setLightboxIdx] = useState(null);

  // Sanity album images come first (real URLs from cdn.sanity.io)
  const sanityImages = albums.flatMap((album) =>
    (album.photos || []).map((p) => ({
      url: p.image?.asset?.url || null,
      filename: null,
      cat: album.category || 'All',
      caption: p.caption || album.title,
    })).filter((p) => p.url)
  );

  const allImages = [...sanityImages, ...STATIC_IMAGES];

  const filtered = activeCat === 'All'
    ? allImages
    : allImages.filter((img) => img.cat === activeCat);

  const displayImages = filtered.slice(0, 14);

  const openLightbox = (idx) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImg = () => setLightboxIdx((i) => (i - 1 + displayImages.length) % displayImages.length);
  const nextImg = () => setLightboxIdx((i) => (i + 1) % displayImages.length);

  return (
    <>
      <section className="gallery" id="gallery">
        <div className="container">
          <div className="gallery-header">
            <span className="section-label">Photo Gallery</span>
            <h2 className="gallery-title">Moments That Define Us</h2>
            <p className="gallery-sub">A visual story of transformation, unity, and hope.</p>
          </div>

          <div className="gallery-filters">
            {FILTER_CATS.map((cat) => (
              <button
                key={cat}
                className={`gallery-filter-btn${activeCat === cat ? ' active' : ''}`}
                onClick={() => setActiveCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-masonry">
            {displayImages.map((img, i) => (
              <div key={`${img.filename || img.url}-${i}`} className="gallery-item" onClick={() => openLightbox(i)}>
                {img.url ? (
                  <img src={img.url} alt={img.caption || 'Gallery photo'} className="gallery-item-img" />
                ) : (
                  <ImagePlaceholder
                    label={img.filename}
                    style={{ position: 'absolute', inset: 0 }}
                  />
                )}
                <div className="gallery-item-overlay">
                  <span className="gallery-item-zoom">⊕</span>
                </div>
              </div>
            ))}

            <a
              href="https://youtube.com/@brahamsfoundationmedia2131"
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-yt-tile"
            >
              <span className="gallery-yt-icon">▶</span>
              <span className="gallery-yt-text">Watch Our Story<br />on YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {lightboxIdx !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>✕</button>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImg(); }}>‹</button>
          {displayImages[lightboxIdx].url ? (
            <img
              src={displayImages[lightboxIdx].url}
              alt={displayImages[lightboxIdx].caption || ''}
              className="lightbox-img"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <ImagePlaceholder
              label={displayImages[lightboxIdx].filename || displayImages[lightboxIdx].caption}
              style={{ width: '600px', height: '420px', maxWidth: '88vw', borderRadius: 'var(--radius)' }}
              onClick={(e) => e.stopPropagation()}
            />
          )}
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); nextImg(); }}>›</button>
        </div>
      )}
    </>
  );
}
