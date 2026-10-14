const socialPosts = [
  {
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80',
    caption: 'Found this gem at GEKKO GECKO 🔥',
    likes: '2.4K', tag: '@style.second'
  },
  {
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80',
    caption: 'Pre-loved never looked this good',
    likes: '1.8K', tag: '@thrifted.fits'
  },
  {
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80',
    caption: 'Sustainable and stylish ♻️',
    likes: '3.1K', tag: '@ecofashion.vn'
  },
  {
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80',
    caption: 'OOTD: 100% second-hand',
    likes: '5.2K', tag: '@gekkogecko'
  },
];

export default function SocialMediaSection({ id }) {
  return (
    <section id={id} style={{ background: 'var(--red)', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2 className="font-display" style={{
          fontSize: 'clamp(3rem, 8vw, 7rem)', color: 'var(--white)',
          margin: '0 0 56px', lineHeight: 0.88, letterSpacing: '0.01em'
        }}>
          SOCIAL<br />MEDIA<br />CONTENT
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 20
        }}>
          {socialPosts.map((post, i) => (
            <div
              key={i}
              style={{
                background: 'var(--white)',
                border: '2px solid var(--black)',
                overflow: 'hidden'
              }}
            >
              <div style={{ height: 260, overflow: 'hidden' }}>
                <img
                  src={post.image}
                  alt={post.caption}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '14px 16px' }}>
                <p style={{ fontSize: 13, fontWeight: 700, margin: '0 0 4px', color: 'var(--black)' }}>
                  {post.tag}
                </p>
                <p style={{ fontSize: 12, color: '#444', margin: '0 0 8px', lineHeight: 1.4 }}>
                  {post.caption}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--red)" stroke="none">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  <span style={{ fontSize: 12, fontWeight: 600 }}>{post.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
