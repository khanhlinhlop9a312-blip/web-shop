import { useNavigate } from 'react-router-dom';
import FAQ from '../components/FAQ';
import SocialMediaSection from '../components/SocialMediaSection';

const categories = [
  { name: 'QUẦN ÁO', path: '/clothes', img: '/cat-clothes.jpg', pos: 'center 40%' },
  { name: 'GIÀY DÉP', path: '/shoes', img: '/cat-shoes.jpg', pos: 'center' },
  { name: 'TÚI XÁCH', path: '/bags', img: '/cat-bags.jpg', pos: 'center' },
  { name: 'PHỤ KIỆN', path: '/accessories', img: '/cat-accessories.jpg', pos: 'center' },
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
                  GỬI BÁN ĐỒ
                </button>
                <button
                  onClick={() => navigate('/clothes')}
                  style={{
                    background: 'transparent', color: 'var(--white)',
                    border: '1.5px solid var(--white)', padding: '14px 32px',
                    fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', cursor: 'pointer'
                  }}
                >
                  MUA SẮM NGAY
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
            DANH MỤC SẢN PHẨM
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
                  <img src={cat.img} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: cat.pos || 'center' }} />
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
              title: 'mua sắm online.', sub: 'Khám phá hàng trăm món đồ pre-loved độc đáo.', cta: 'XEM CỬA HÀNG', path: '/clothes',
              objectPosition: 'center 20%'
            },
            {
              img: '/resell-items.jpg',
              title: 'gửi bán đồ cũ.', sub: 'Trao cho quần áo của bạn một vòng đời mới.', cta: 'GỬI ẢNH ĐỊNH GIÁ', path: '/sell',
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
              KHAI PHÁ CHẤT RIÊNG
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
                <span>Bước</span> <span>ra</span> <span>khỏi</span> <span>những</span> <span>gì</span> <span>quen</span> <span>thuộc.</span> <span>Áo</span> <span>thun</span> <span>oversized,</span> <span>quần</span> <span>túi</span> <span>hộp,</span> <span>sneakers</span> <span>cùng</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: 2 }}>
                <span>những</span> <span>món</span> <span>đồ</span> <span>streetwear</span> <span>second-hand</span> <span>sẽ</span> <span>tạo</span> <span>nên</span> <span>một</span> <span>phiên</span> <span>bản</span> <span>táo</span> <span>bạo</span> <span>và</span> <span>tự</span> <span>do</span> <span>của</span> <span>bạn.</span>
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
              Bước ra khỏi những gì quen thuộc. Áo thun oversized, quần túi hộp, sneakers cùng những món đồ streetwear second-hand sẽ kết hợp lại để tạo nên một phiên bản táo bạo hơn, tự do hơn và tràn đầy năng lượng hơn của chính bạn.
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

      {/* COMMUNITY / BRAND STORY */}
      <section id="community" style={{ background: 'var(--white)', padding: '88px 32px', borderBottom: '3px solid var(--burgundy)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="community-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 56, alignItems: 'center' }}>

            {/* Image side */}
            <div style={{
              border: '2px solid var(--black)',
              boxShadow: '10px 10px 0 var(--burgundy)',
              overflow: 'hidden',
              background: 'var(--pale-pink)',
              position: 'relative',
              height: '100%',
              minHeight: 480,
              maxHeight: 640
            }}>
              <img
                src="/brand-story.jpg"
                alt="Gekko Gecko - Find The Hip-Hop In You"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  display: 'block',
                  transition: 'transform 0.4s ease'
                }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.03)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute',
                top: 18,
                left: 18,
                background: 'var(--burgundy)',
                color: 'var(--white)',
                padding: '6px 14px',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.12em'
              }}>
                FIND THE HIP-HOP IN YOU
              </div>
              <div style={{
                position: 'absolute',
                bottom: 18,
                right: 18,
                background: 'rgba(0,0,0,0.75)',
                color: 'var(--white)',
                padding: '6px 12px',
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.1em',
                backdropFilter: 'blur(4px)'
              }}>
                @GEKKOGECKO.THRIFT
              </div>
            </div>

            {/* Story text side */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.2em',
                background: 'var(--baby-blue)',
                color: 'var(--burgundy)',
                padding: '4px 10px',
                display: 'inline-block',
                marginBottom: 16
              }}>
                COMMUNITY · BRAND STORY
              </span>

              <h2 className="font-display" style={{
                fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)',
                color: 'var(--burgundy)',
                margin: '0 0 16px',
                lineHeight: 1.05,
                letterSpacing: '0.01em'
              }}>
                🦎 GEKKO GECKO <br />
                <span style={{ color: 'var(--black)' }}>FIND THE HIP-HOP IN YOU</span>
              </h2>

              <p style={{
                fontSize: 'clamp(15px, 1.25vw, 17px)',
                fontWeight: 700,
                lineHeight: 1.6,
                color: 'var(--burgundy)',
                margin: '0 0 16px'
              }}>
                Đã đến lúc bạn bước ra khỏi những màu sắc quen thuộc mà mình vẫn khoác lên mỗi ngày.
              </p>

              <p style={{ fontSize: 14, lineHeight: 1.8, color: '#333', margin: '0 0 14px' }}>
                Bạn đã quá quen với hình ảnh bản thân hiện tại? Bạn muốn thử một điều gì đó mới mẻ, táo bạo hơn, nhưng chưa biết bắt đầu từ đâu?
              </p>

              <div style={{
                borderLeft: '3px solid var(--burgundy)',
                paddingLeft: 16,
                margin: '14px 0 18px',
                fontStyle: 'italic',
                color: 'var(--black)',
                fontWeight: 700,
                fontSize: 15
              }}>
                “Nếu như bạn có thể là 1 ‘bản thân’ khác”
              </div>

              <p style={{ fontSize: 14, lineHeight: 1.8, color: '#444', margin: '0 0 12px' }}>
                Gekko Gecko mang đến campaign định hướng phong cách Hip-hop - nơi bạn được khám phá những cách phối đồ mới, thử nghiệm với streetwear và tự do thể hiện cá tính qua từng outfit.
              </p>

              <p style={{ fontSize: 14, lineHeight: 1.8, color: '#444', margin: '0 0 12px' }}>
                Không cần phải trở thành một ai khác. Chỉ cần cho bản thân cơ hội trải nghiệm những điều trước đây bạn chưa từng thử.
              </p>

              <p style={{ fontSize: 14, lineHeight: 1.8, color: '#444', margin: '0 0 20px' }}>
                Bởi đôi khi, bước đầu tiên để bứt phá chính là dám thay đổi cách bạn nhìn nhận và thể hiện chính mình.
              </p>

              <div style={{
                background: 'var(--pale-pink)',
                border: '1.5px solid var(--burgundy)',
                padding: '12px 18px',
                marginBottom: 24,
                display: 'inline-block'
              }}>
                <p className="font-display" style={{
                  margin: 0,
                  fontSize: 'clamp(14px, 1.2vw, 17px)',
                  color: 'var(--burgundy)',
                  letterSpacing: '0.04em'
                }}>
                  PHÁ VỠ KHUÔN KHỔ. KHOÁC LÊN MÀU SẮC CỦA CHÍNH MÌNH.
                </p>
              </div>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <button
                  onClick={() => navigate('/thay-mau')}
                  style={{
                    background: 'var(--burgundy)',
                    color: 'var(--white)',
                    border: 'none',
                    padding: '13px 28px',
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#8a0022'}
                  onMouseLeave={e => e.currentTarget.style.background = 'var(--burgundy)'}
                >
                  ĐĂNG KÝ DỰ ÁN "THAY MÀU" →
                </button>
              </div>
            </div>

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
              BẠN CÓ ĐỒ CŨ MUỐN BÁN LẠI?
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--black)', margin: '0 0 24px', padding: 0, maxWidth: 395, textAlign: 'justify', textJustify: 'inter-word' }}>
              Bạn có thể gửi bao nhiêu món đồ tùy thích. Để bắt đầu, bạn chỉ cần gửi một bức ảnh cho mỗi món đồ - vậy là đủ.<br />
              Tụi mình sẽ hướng dẫn bạn các bước tiếp theo.
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
                GỬI ẢNH ĐỊNH GIÁ
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
                TÌM HIỂU THÊM
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
