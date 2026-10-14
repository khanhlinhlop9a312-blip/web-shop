import { useNavigate } from 'react-router-dom';
import FAQ from '../components/FAQ';
import SocialMediaSection from '../components/SocialMediaSection';

const categories = [
  { name: 'CLOTHES', path: '/clothes', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80' },
  { name: 'SHOES', path: '/shoes', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80' },
  { name: 'BAGS', path: '/bags', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&q=80' },
  { name: 'ACCESSORIES', path: '/accessories', img: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=200&q=80' },
];

const communityPosts = [
  { image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80', title: 'Style Guide: 5 Ways to Wear Thrifted Denim', tag: 'STYLING' },
  { image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80', title: 'Why Second-Hand Shopping is the Future', tag: 'SUSTAINABILITY' },
  { image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80', title: 'Community Spotlight: @gekko.girls', tag: 'COMMUNITY' },
  { image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80', title: "Rare Finds This Week — Don't Miss Out!", tag: 'PICKS' },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <main>
      {/* HERO */}
      <section style={{ background: 'var(--burgundy)', overflow: 'hidden' }}>
        <div className="hero-inner" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 500 }}>
          {/* Text side */}
          <div style={{ padding: '64px 48px 64px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, letterSpacing: '0.2em', fontWeight: 600, marginBottom: 20 }}>
              SECOND-HAND FASHION
            </p>
            <h1 className="font-display" style={{
              color: 'var(--white)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: 0.95, margin: '0 0 20px', letterSpacing: '0.01em'
            }}>
              BẠN CÓ ĐỒ<br />KHÔNG DÙNG?<br />HÃY ĐỂ TỤI<br />MÌNH GIÚP
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.7, marginBottom: 32, maxWidth: 340 }}>
              Những trang phục cũ mà bạn không còn dùng đến — tụi mình sẽ giúp bạn tìm chủ nhân mới cho chúng.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                onClick={() => navigate('/sell')}
                style={{
                  background: 'var(--white)', color: 'var(--burgundy)',
                  border: 'none', padding: '14px 32px', fontSize: 12,
                  fontWeight: 700, letterSpacing: '0.12em', cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--baby-blue)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--white)'}
              >
                SELL YOUR ITEMS
              </button>
              <button
                onClick={() => navigate('/clothes')}
                style={{
                  background: 'transparent', color: 'var(--white)',
                  border: '1.5px solid var(--white)', padding: '14px 32px',
                  fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', cursor: 'pointer'
                }}
              >
                SHOP NOW
              </button>
            </div>
          </div>

          {/* Image side */}
          <div className="hero-image-side" style={{ position: 'relative', overflow: 'hidden' }}>
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85"
              alt="Fashion model with second-hand clothes"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, var(--burgundy) 0%, transparent 30%)'
            }} />
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hero-inner { grid-template-columns: 1fr !important; }
            .hero-image-side { display: none !important; }
            .promo-inner { grid-template-columns: 1fr !important; }
            .nang-inner { grid-template-columns: 1fr !important; }
            .sell-inner { grid-template-columns: 1fr !important; }
            .sell-img-block { display: none !important; }
          }
        `}</style>
      </section>

      {/* SHOP BY CATEGORY */}
      <section style={{ background: 'var(--baby-blue)', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 className="font-display" style={{
            fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--burgundy)',
            margin: '0 0 56px', letterSpacing: '0.02em'
          }}>
            SHOP BY CATEGORY.
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat.name}
                onClick={() => navigate(cat.path)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14
                }}
              >
                <div
                  style={{
                    width: 120, height: 120, borderRadius: '50%',
                    border: '2.5px solid var(--burgundy)',
                    overflow: 'hidden', transition: 'border-width 0.2s, transform 0.2s',
                    background: 'var(--white)'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; e.currentTarget.style.borderWidth = '4px'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderWidth = '2.5px'; }}
                >
                  <img src={cat.img} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', color: 'var(--burgundy)' }}>
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROMO SECTION */}
      <section style={{ background: 'var(--pale-pink)', padding: '0' }}>
        <div className="promo-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', maxWidth: '100%' }}>
          {[
            {
              img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=85',
              title: 'shop online.', sub: 'Discover hundreds of pre-loved pieces.', cta: 'GO TO SHOP', path: '/clothes'
            },
            {
              img: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&q=85',
              title: 'resell items.', sub: 'Give your clothes a new life.', cta: 'SEND PHOTOS FOR REVIEW', path: '/sell'
            }
          ].map((block, i) => (
            <div
              key={i}
              style={{ position: 'relative', height: 400, overflow: 'hidden', border: '1px solid var(--black)', cursor: 'pointer' }}
              onClick={() => navigate(block.path)}
            >
              <img
                src={block.img}
                alt={block.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute', inset: 0, padding: 32,
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)'
              }}>
                <h3 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)', color: 'var(--white)', margin: '0 0 6px' }}>
                  {block.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, marginBottom: 16 }}>{block.sub}</p>
                <button style={{
                  alignSelf: 'flex-start', background: 'var(--white)', color: 'var(--black)',
                  border: 'none', padding: '8px 18px', fontSize: 10, fontWeight: 700,
                  letterSpacing: '0.1em', cursor: 'pointer'
                }}>
                  {block.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NÂNG TẦM ĐỒ CŨ */}
      <section style={{ background: 'var(--burgundy)', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 className="font-display" style={{
            fontSize: 'clamp(3rem, 7vw, 7rem)', color: 'var(--white)',
            margin: '0 0 48px', lineHeight: 0.9, letterSpacing: '0.01em'
          }}>
            NÂNG TẦM ĐỒ CŨ
          </h2>
          <div className="nang-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {[
              'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=85',
              'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=85'
            ].map((src, i) => (
              <div key={i} style={{ border: '2px solid rgba(255,255,255,0.3)', height: 380, overflow: 'hidden' }}>
                <img src={src} alt="Fashion editorial" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA */}
      <SocialMediaSection />

      {/* COMMUNITY */}
      <section id="community" style={{ background: 'var(--white)', padding: '80px 32px', borderBottom: '3px solid var(--burgundy)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--burgundy)', margin: 0 }}>
              COMMUNITY
            </h2>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--burgundy)', borderBottom: '2px solid var(--burgundy)', paddingBottom: 2 }}>
              VIEW ALL →
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {communityPosts.map((post, i) => (
              <div
                key={i}
                style={{ border: '1.5px solid var(--black)', overflow: 'hidden', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--burgundy)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--black)'}
              >
                <div style={{ height: 200, overflow: 'hidden' }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  />
                </div>
                <div style={{ padding: '14px 16px' }}>
                  <span style={{
                    fontSize: 9, fontWeight: 700, letterSpacing: '0.15em',
                    background: 'var(--baby-blue)', color: 'var(--burgundy)', padding: '3px 8px',
                    display: 'inline-block', marginBottom: 8
                  }}>
                    {post.tag}
                  </span>
                  <p style={{ fontSize: 13, fontWeight: 700, margin: 0, lineHeight: 1.4 }}>{post.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELL PROMO */}
      <section style={{ background: 'var(--pale-pink)', padding: '80px 32px', borderBottom: '3px solid var(--burgundy)' }}>
        <div className="sell-inner" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', color: 'var(--burgundy)', margin: '0 0 16px', lineHeight: 0.95 }}>
              HAVE ITEMS<br />TO RESELL?
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--black)', marginBottom: 24, maxWidth: 400 }}>
              You can send as many items as you have. To start, simply send one photo per item — that's enough. We'll guide you on the next step.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                onClick={() => navigate('/sell')}
                style={{
                  background: 'var(--burgundy)', color: 'var(--white)',
                  border: 'none', padding: '12px 28px', fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.12em', cursor: 'pointer'
                }}
              >
                SEND PHOTOS FOR REVIEW
              </button>
              <button style={{
                background: 'var(--white)', color: 'var(--burgundy)',
                border: '1.5px solid var(--burgundy)', padding: '12px 28px',
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', cursor: 'pointer'
              }}>
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="sell-img-block" style={{ height: 320, overflow: 'hidden', border: '2px solid var(--burgundy)' }}>
            <img
              src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=85"
              alt="Clothes for resale"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />
    </main>
  );
}
