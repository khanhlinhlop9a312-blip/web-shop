import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <article
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
      style={{
        border: '1.5px solid var(--black)',
        background: 'var(--white)',
        cursor: 'pointer',
        transition: 'border-color 0.2s',
        overflow: 'hidden',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--burgundy)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--black)'}
    >
      <div className="product-img" style={{ height: 260, background: 'var(--pale-pink)' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="lazy"
        />
      </div>
      <div style={{ padding: '12px 14px 14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
          <h3 style={{ fontSize: 13, fontWeight: 700, margin: 0, lineHeight: 1.3, flex: 1, paddingRight: 8 }}>
            {product.name}
          </h3>
          <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--burgundy)', whiteSpace: 'nowrap' }}>
            ${product.price}
          </span>
        </div>
        <p style={{ fontSize: 11, color: '#666', margin: '4px 0', letterSpacing: '0.05em' }}>
          {product.type} · {product.condition}
        </p>
        <button
          onClick={e => { e.stopPropagation(); navigate(`/product/${product.id}`); }}
          style={{
            marginTop: 10, width: '100%', padding: '8px 0',
            background: 'var(--burgundy)', color: 'var(--white)',
            border: 'none', fontSize: 11, fontWeight: 700,
            letterSpacing: '0.1em', cursor: 'pointer',
            transition: 'background 0.2s'
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#8a0022'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--burgundy)'}
        >
          VIEW ITEM
        </button>
      </div>
    </article>
  );
}
