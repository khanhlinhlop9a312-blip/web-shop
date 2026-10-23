import { useState, useEffect } from 'react';
import { socialPosts as defaultPosts } from '../data/socialPosts';

export default function SocialMediaSection({ id }) {
  const [posts, setPosts] = useState(() => {
    // Sort default posts by date descending and take the 4 latest
    return [...defaultPosts]
      .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
      .slice(0, 4);
  });
  const [filter, setFilter] = useState('all'); // 'all' | 'instagram' | 'facebook'

  // If a live feed API URL is provided (e.g., via Behold.so, Curator.io, or backend endpoint),
  // automatically fetch the newest posts dynamically in real-time.
  useEffect(() => {
    const feedUrl = import.meta.env.VITE_SOCIAL_FEED_URL || window.__SOCIAL_FEED_URL__;
    if (!feedUrl) return;

    fetch(feedUrl)
      .then(res => res.json())
      .then(data => {
        // Normalizing data from feed (Behold / custom JSON)
        const items = Array.isArray(data) ? data : (data.posts || data.data || []);
        if (items.length > 0) {
          const formatted = items.map((item, idx) => ({
            id: item.id || idx,
            platform: item.platform || 'instagram',
            image: item.media_url || item.imageUrl || item.image || item.thumbnail_url,
            caption: item.caption || item.text || '',
            likes: item.likes || item.like_count || '1.2K',
            tag: item.username ? `@${item.username}` : '@gekkogecko.thrift',
            url: item.permalink || item.url || 'https://www.instagram.com/gekkogecko.thrift/',
            date: item.timestamp || item.date || new Date().toISOString()
          }));
          const sorted = formatted
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 4);
          setPosts(sorted);
        }
      })
      .catch(err => {
        console.warn('Could not load live social feed, using curated posts:', err);
      });
  }, []);

  const filteredPosts = posts.filter(p => filter === 'all' || p.platform === filter);

  return (
    <section id={id} style={{ background: 'var(--red)', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
          <div>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: 8 }}>
              LATEST HIGHLIGHTS
            </span>
            <h2 className="font-display" style={{
              fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--white)',
              margin: 0, lineHeight: 0.95, letterSpacing: '0.01em'
            }}>
              SOCIAL CONTENT
            </h2>
          </div>

          {/* Social Links & Filter */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="https://www.instagram.com/gekkogecko.thrift/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'transparent', color: 'var(--white)',
                border: '1.5px solid var(--white)',
                padding: '10px 18px', fontSize: 11, fontWeight: 700,
                letterSpacing: '0.1em', transition: 'all 0.2s', textDecoration: 'none'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--white)'; e.currentTarget.style.color = 'var(--burgundy)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--white)'; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
              @gekkogecko.thrift
            </a>
            <a
              href="https://www.facebook.com/gekkogecko.store?locale=vi_VN"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'var(--white)', color: 'var(--burgundy)',
                border: '1.5px solid var(--white)',
                padding: '10px 18px', fontSize: 11, fontWeight: 700,
                letterSpacing: '0.1em', transition: 'all 0.2s', textDecoration: 'none'
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--baby-blue)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--white)'}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              gekkogecko.store
            </a>
            <a
              href="https://www.tiktok.com/@gekkogecko.store"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'transparent', color: 'var(--white)',
                border: '1.5px solid var(--white)',
                padding: '10px 18px', fontSize: 11, fontWeight: 700,
                letterSpacing: '0.1em', transition: 'all 0.2s', textDecoration: 'none'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--white)'; e.currentTarget.style.color = 'var(--burgundy)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--white)'; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.33-6.33V9.08a8.21 8.21 0 0 0 4.92 1.62V7.25a4.87 4.87 0 0 1-1-.56z" />
              </svg>
              @gekkogecko.store
            </a>
          </div>
        </div>

        {/* 4 Latest Posts Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 20
        }}>
          {filteredPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--white)',
                border: '2px solid var(--black)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'transform 0.25s, box-shadow 0.25s',
                cursor: 'pointer'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Image with platform badge */}
              <div style={{ height: 260, overflow: 'hidden', position: 'relative', background: '#f5f5f5' }}>
                <img
                  src={post.image}
                  alt={post.caption}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: post.objectPosition || 'center', transition: 'transform 0.4s' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                {/* Platform Badge */}
                <div style={{
                  position: 'absolute', top: 12, right: 12,
                  background: 'rgba(0,0,0,0.75)', color: 'var(--white)',
                  borderRadius: 20, padding: '4px 10px',
                  display: 'flex', alignItems: 'center', gap: 6,
                  backdropFilter: 'blur(4px)', fontSize: 10, fontWeight: 700, letterSpacing: '0.05em'
                }}>
                  {post.platform === 'facebook' ? (
                    <>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      Facebook
                    </>
                  ) : post.platform === 'tiktok' ? (
                    <>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.33-6.33V9.08a8.21 8.21 0 0 0 4.92 1.62V7.25a4.87 4.87 0 0 1-1-.56z" />
                      </svg>
                      TikTok
                    </>
                  ) : (
                    <>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                      </svg>
                      Instagram
                    </>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--burgundy)', letterSpacing: '0.02em' }}>
                      {post.tag}
                    </span>
                    <span style={{ fontSize: 11, color: '#888' }}>
                      ↗
                    </span>
                  </div>
                  <p style={{
                    fontSize: 12, color: '#333', margin: '0 0 12px', lineHeight: 1.5,
                    display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                  }}>
                    {post.caption}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, borderTop: '1px solid #eee' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--red)" stroke="none">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#333' }}>{post.likes}</span>
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', color: 'var(--burgundy)' }}>
                    VIEW POST →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
