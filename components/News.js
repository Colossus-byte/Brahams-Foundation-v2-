import Image from 'next/image';

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function News({ news = [] }) {
  if (!news.length) return null;

  return (
    <section className="news" id="news">
      <div className="container">
        <div className="news-header">
          <span className="section-label">Latest News</span>
          <h2 className="news-title">Stories of Impact</h2>
        </div>

        <div className="news-grid">
          {news.map((post) => {
            const imgUrl = post.coverImage?.asset?.url;
            return (
              <article key={post._id} className="news-card">
                <div className="news-card-img-wrap">
                  {imgUrl ? (
                    <Image
                      src={imgUrl}
                      alt={post.title}
                      width={600}
                      height={220}
                      className="news-card-img"
                      style={{ objectFit: 'cover', width: '100%', height: '220px' }}
                    />
                  ) : (
                    <div style={{ width: '100%', height: '220px', background: 'var(--navy-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px' }}>
                      📰
                    </div>
                  )}
                </div>
                <div className="news-card-body">
                  <div className="news-card-date">{formatDate(post.publishedAt)}</div>
                  <h3 className="news-card-title">{post.title}</h3>
                  {post.excerpt && <p className="news-card-excerpt">{post.excerpt}</p>}
                  <span className="news-read-more">Read More →</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
