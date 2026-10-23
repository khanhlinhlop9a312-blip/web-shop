import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--burgundy)', color: 'var(--white)', padding: '56px 32px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, textDecoration: 'none' }}>
              <div style={{
                width: 44, height: 44, borderRadius: '50%', overflow: 'hidden',
                border: '1.5px solid var(--white)', flexShrink: 0, background: 'var(--burgundy)'
              }}>
                <img
                  src="/logo.png"
                  alt="GEKKO GECKO Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <span className="font-display" style={{ fontSize: 32, color: 'var(--white)' }}>
                GEKKO GECKO
              </span>
            </Link>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', maxWidth: 220 }}>
              A playful second-hand fashion community. Buy, sell, and style pre-loved pieces.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', marginBottom: 16, color: 'rgba(255,255,255,0.5)' }}>
              NAVIGATE
            </h4>
            {[['SHOP', '/'], ['SELL', '/sell'], ['COMMUNITY', '/#community'], ['FAQs', '/#faqs']].map(([l, h]) => (
              <Link key={l} to={h} style={{ display: 'block', color: 'var(--white)', fontSize: 13, padding: '4px 0', fontWeight: 500 }}>
                {l}
              </Link>
            ))}
          </div>

          {/* Info */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', marginBottom: 16, color: 'rgba(255,255,255,0.5)' }}>
              INFO
            </h4>
            {['About us', 'Shipping', 'Privacy Policy', 'Contact'].map(l => (
              <a key={l} href="#" style={{ display: 'block', color: 'var(--white)', fontSize: 13, padding: '4px 0' }}>{l}</a>
            ))}
          </div>

          {/* Social */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', marginBottom: 16, color: 'rgba(255,255,255,0.5)' }}>
              FOLLOW US
            </h4>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { label: 'Instagram', url: 'https://www.instagram.com/gekkogecko.thrift/', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                { label: 'Facebook', url: 'https://www.facebook.com/gekkogecko.store/about?locale=vi_VN', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { label: 'TikTok', url: 'https://www.tiktok.com/@gekkogecko.store', path: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.33-6.33V9.08a8.21 8.21 0 0 0 4.92 1.62V7.25a4.87 4.87 0 0 1-1-.56z' }
              ].map(({ label, url, path }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ color: 'var(--white)', display: 'inline-flex', alignItems: 'center' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 24, textAlign: 'center' }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.05em' }}>
            © 2026 GEKKO GECKO — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
