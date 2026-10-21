import { useNavigate } from 'react-router-dom';
import FAQ from '../components/FAQ';
import SocialMediaSection from '../components/SocialMediaSection';

const categories = [
  { name: 'CLOTHES', path: '/clothes', img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80' },
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
        <div className="hero-inner" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: 500,
          width: '100%'
        }}>
          {/* Text side */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
            width: '100%'
          }}>
            <div style={{
              maxWidth: 600,
              width: '100%',
              padding: '48px 48px 64px 32px',
              boxSizing: 'border-box'
            }}>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, letterSpacing: '0.2em', fontWeight: 600, marginBottom: 20 }}>
                SECOND-HAND FASHION
              </p>
              <h1 className="font-display" style={{
                color: 'var(--white)',
                fontSize: 'clamp(1.5rem, 2.5vw, 2.4rem)',
                lineHeight: 1.35,
                margin: '0 0 20px',
                letterSpacing: '0.03em'
              }}>
                <span style={{ display: 'block' }}>BẠN CÓ ĐỒ KHÔNG DÙNG?</span>
                <span style={{ display: 'block' }}>HÃY ĐỂ CHÚNG MÌNH GIÚP</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.7, marginBottom: 32, maxWidth: 340 }}>
                Những trang phục cũ mà bạn không còn dùng đến - tụi mình sẽ giúp bạn tìm chủ nhân mới cho chúng.
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
          </div>

          {/* Image side */}
          <div className="hero-image-side" style={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            height: '100%'
          }}>
            <img
              src="/hero-banner.png"
              alt="GEKKO GECKO Banner"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '45% center',
                display: 'block'
              }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, var(--burgundy) 0%, transparent 10%)',
              pointerEvents: 'none'
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
            margin: '0 0 56px', lineHeight: 0.95, letterSpacing: '0.01em'
          }}>
            SHOP BY CATEGORY
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
              img: '/shop-online.jpg',
              title: 'shop online.', sub: 'Discover hundreds of pre-loved pieces.', cta: 'GO TO SHOP', path: '/clothes',
              objectPosition: 'center 20%'
            },
            {
              img: '/resell-items.jpg',
              title: 'resell items.', sub: 'Give your clothes a new life.', cta: 'SEND PHOTOS FOR REVIEW', path: '/sell',
              objectPosition: 'center 45%'
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
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: block.objectPosition || 'center', transition: 'transform 0.4s' }}
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

      {/* THE VIBE YOU UNLOCK */}
      <section style={{ background: 'var(--burgundy)', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="vibe-container" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'stretch', width: 'fit-content', maxWidth: '100%' }}>
            <h2 className="font-display" style={{
              fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--white)',
              margin: '0 0 16px', lineHeight: 0.95, letterSpacing: '0.01em',
              whiteSpace: 'nowrap'
            }}>
              THE VIBE YOU UNLOCK
            </h2>

            {/* Desktop: Exactly 2 lines aligned flush on both left and right edges with the title */}
            <div className="vibe-desc-desktop" style={{
              fontSize: 'clamp(12px, 1.1vw, 15px)',
              lineHeight: 1.85,
              color: 'rgba(255,255,255,0.85)',
              margin: '0 0 40px',
              width: '100%'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <span>Break</span> <span>free</span> <span>from</span> <span>the</span> <span>familiar.</span> <span>Oversized</span> <span>tees,</span> <span>cargo</span> <span>pants,</span> <span>sneakers,</span> <span>and</span> <span>second-hand</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: 2 }}>
                <span>streetwear</span> <span>pieces</span> <span>come</span> <span>together</span> <span>to</span> <span>create</span> <span>a</span> <span>bolder,</span> <span>freer,</span> <span>and</span> <span>more</span> <span>energetic</span> <span>version</span> <span>of</span> <span>you.</span>
              </div>
            </div>

            {/* Mobile: Natural flow with smart text wrapping */}
            <p className="vibe-desc-mobile" style={{
              fontSize: 14,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.85)',
              margin: '0 0 32px',
              textAlign: 'justify',
              textJustify: 'inter-word',
              display: 'none'
            }}>
              Break free from the familiar. Oversized tees, cargo pants, sneakers, and second-hand streetwear pieces come together to create a bolder, freer, and more energetic version&nbsp;of&nbsp;you.
            </p>
          </div>
          <div className="nang-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {/* Card Left - Before (Cô nàng bánh bèo) */}
            <div style={{
              position: 'relative',
              border: '2px solid rgba(255,255,255,0.3)',
              aspectRatio: '1 / 1',
              width: '100%',
              overflow: 'hidden',
              background: '#222'
            }}>
              <img
                src="/vibe-before.jpg"
                alt="Before style"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  transition: 'transform 0.4s ease'
                }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute',
                top: 16,
                left: 16,
                background: 'rgba(0,0,0,0.7)',
                color: 'var(--white)',
                padding: '6px 14px',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.12em',
                backdropFilter: 'blur(4px)'
              }}>
                BEFORE
              </div>
            </div>

            {/* Card Right - After (Cô gái hip hop cá tính) */}
            <div style={{
              position: 'relative',
              border: '2px solid rgba(255,255,255,0.3)',
              aspectRatio: '1 / 1',
              width: '100%',
              overflow: 'hidden',
              background: '#222'
            }}>
              <img
                src="/vibe-after.jpg"
                alt="After hip hop style"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  transition: 'transform 0.4s ease'
                }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute',
                top: 16,
                left: 16,
                background: 'var(--red)',
                color: 'var(--white)',
                padding: '6px 14px',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.12em',
                backdropFilter: 'blur(4px)'
              }}>
                AFTER • HIP-HOP
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA */}
      <SocialMediaSection />

      {/* COMMUNITY */}
      <section id="community" style={{ background: 'var(--white)', padding: '80px 32px', borderBottom: '3px solid var(--burgundy)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--burgundy)', margin: 0, lineHeight: 0.95, letterSpacing: '0.01em' }}>
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
        <div className="sell-inner" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: 72, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: 560 }}>
            <h2 className="font-display" style={{
              fontSize: 'clamp(2.1rem, 3.2vw, 2.65rem)',
              color: 'var(--burgundy)',
              margin: '0 0 16px',
              padding: 0,
              lineHeight: 1,
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap'
            }}>
              HAVE ITEMS TO RESELL?
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--black)', margin: '0 0 24px', padding: 0, maxWidth: 395, textAlign: 'justify', textJustify: 'inter-word' }}>
              You can send as many items as you have. To start, simply send one photo per item - that's enough.<br />
              We'll guide you on the next step.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
              <button
                onClick={() => navigate('/sell')}
                style={{
                  background: 'var(--burgundy)', color: 'var(--white)',
                  border: '2px solid var(--burgundy)', height: 44, padding: '0 28px',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', cursor: 'pointer',
                  boxSizing: 'border-box', transition: 'all 0.2s ease', whiteSpace: 'nowrap'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#4a0e17';
                  e.currentTarget.style.borderColor = '#4a0e17';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--burgundy)';
                  e.currentTarget.style.borderColor = 'var(--burgundy)';
                }}
              >
                SEND PHOTOS FOR REVIEW
              </button>
              <a
                href="#faqs"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  background: 'var(--white)', color: 'var(--burgundy)',
                  border: '2px solid var(--burgundy)', height: 44, padding: '0 28px',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', cursor: 'pointer',
                  textDecoration: 'none', boxSizing: 'border-box', transition: 'all 0.2s ease', whiteSpace: 'nowrap'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--burgundy)';
                  e.currentTarget.style.color = 'var(--white)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--white)';
                  e.currentTarget.style.color = 'var(--burgundy)';
                }}
              >
                LEARN MORE
              </a>
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
