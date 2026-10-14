import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  const [qty, setQty] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [bought, setBought] = useState(false);

  if (!product) {
    return (
      <div style={{ padding: 64, textAlign: 'center' }}>
        <p className="font-display" style={{ fontSize: 40, color: 'var(--burgundy)' }}>ITEM NOT FOUND</p>
        <button onClick={() => navigate(-1)} style={{ padding: '12px 24px', background: 'var(--burgundy)', color: 'var(--white)', border: 'none', cursor: 'pointer', marginTop: 16 }}>
          GO BACK
        </button>
      </div>
    );
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const details = [
    { label: 'CONDITION', value: product.condition },
    { label: 'SIZE', value: product.size },
    { label: 'MATERIAL', value: product.material },
    { label: 'COLOR', value: product.color },
    { label: 'SEASON', value: product.season },
    { label: 'CATEGORY', value: product.type },
  ];

  return (
    <main style={{ background: 'var(--pale-pink)', minHeight: '80vh' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 32px' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 32, fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--burgundy)', fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', letterSpacing: 'inherit' }}>HOME</button>
          <span style={{ color: '#999' }}>/</span>
          <button onClick={() => navigate(`/${product.category}`)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--burgundy)', fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', letterSpacing: 'inherit' }}>
            {product.category.toUpperCase()}
          </button>
          <span style={{ color: '#999' }}>/</span>
          <span style={{ color: '#555' }}>{product.name}</span>
        </div>

        <div className="detail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'flex-start' }}>
          {/* Images */}
          <div>
            <div style={{ border: '2px solid var(--black)', height: 480, overflow: 'hidden', marginBottom: 12 }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            {/* Thumbnails */}
            <div style={{ display: 'flex', gap: 8 }}>
              {[product.image, product.image, product.image].map((src, i) => (
                <div key={i} style={{ width: 80, height: 80, border: '1.5px solid var(--black)', overflow: 'hidden', cursor: 'pointer', opacity: i === 0 ? 1 : 0.6 }}>
                  <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <span style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.15em',
              background: 'var(--baby-blue)', color: 'var(--burgundy)',
              padding: '4px 10px', display: 'inline-block', marginBottom: 16
            }}>
              {product.category.toUpperCase()} · {product.type.toUpperCase()}
            </span>

            <h1 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--black)', margin: '0 0 8px', lineHeight: 0.95 }}>
              {product.name.toUpperCase()}
            </h1>

            <p style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--burgundy)', margin: '0 0 24px', fontFamily: 'Anton, sans-serif' }}>
              ${product.price}
            </p>

            {/* Details grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, marginBottom: 24, border: '1.5px solid var(--black)' }}>
              {details.map(d => (
                <div key={d.label} style={{ padding: '10px 14px', borderRight: '1px solid var(--black)', borderBottom: '1px solid var(--black)' }}>
                  <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.15em', color: '#888', margin: '0 0 3px' }}>{d.label}</p>
                  <p style={{ fontSize: 13, fontWeight: 600, margin: 0 }}>{d.value}</p>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 13, lineHeight: 1.8, color: '#444', marginBottom: 28 }}>{product.description}</p>

            {/* Quantity */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em' }}>QTY</span>
              <div style={{ display: 'flex', border: '1.5px solid var(--black)', overflow: 'hidden' }}>
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  style={{ width: 36, height: 36, background: 'var(--white)', border: 'none', cursor: 'pointer', fontSize: 16, fontWeight: 700 }}
                >
                  −
                </button>
                <span style={{ width: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, borderLeft: '1px solid var(--black)', borderRight: '1px solid var(--black)' }}>
                  {qty}
                </span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  style={{ width: 36, height: 36, background: 'var(--white)', border: 'none', cursor: 'pointer', fontSize: 16, fontWeight: 700 }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            {bought ? (
              <div style={{
                background: 'var(--baby-blue)', border: '1.5px solid var(--burgundy)',
                padding: '16px 24px', textAlign: 'center', marginBottom: 12
              }}>
                <p className="font-display" style={{ margin: 0, fontSize: 20, color: 'var(--burgundy)' }}>
                  ✓ ADDED TO CART!
                </p>
              </div>
            ) : (
              <button
                onClick={() => setBought(true)}
                style={{
                  width: '100%', padding: '16px', background: 'var(--burgundy)', color: 'var(--white)',
                  border: 'none', fontSize: 13, fontWeight: 700, letterSpacing: '0.12em',
                  cursor: 'pointer', marginBottom: 12, transition: 'background 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#8a0022'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--burgundy)'}
              >
                BUY NOW
              </button>
            )}

            <button
              onClick={() => setWishlisted(w => !w)}
              style={{
                width: '100%', padding: '14px',
                background: wishlisted ? 'var(--pale-pink)' : 'var(--white)',
                color: 'var(--burgundy)',
                border: '1.5px solid var(--burgundy)',
                fontSize: 13, fontWeight: 700, letterSpacing: '0.1em',
                cursor: 'pointer', transition: 'background 0.2s'
              }}
            >
              {wishlisted ? '♥ WISHLISTED' : '♡ ADD TO WISHLIST'}
            </button>
          </div>
        </div>

        {/* Related items */}
        {related.length > 0 && (
          <div style={{ marginTop: 72 }}>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--burgundy)', margin: '0 0 24px' }}>
              MORE {product.category.toUpperCase()}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
              {related.map(p => (
                <div
                  key={p.id}
                  onClick={() => { navigate(`/product/${p.id}`); window.scrollTo({ top: 0 }); }}
                  style={{ border: '1.5px solid var(--black)', cursor: 'pointer', overflow: 'hidden', background: 'var(--white)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--burgundy)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--black)'}
                >
                  <div style={{ height: 200, overflow: 'hidden' }}>
                    <img
                      src={p.image}
                      alt={p.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                      onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div style={{ padding: '10px 12px' }}>
                    <p style={{ fontSize: 12, fontWeight: 700, margin: '0 0 2px' }}>{p.name}</p>
                    <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--burgundy)', margin: 0 }}>${p.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
