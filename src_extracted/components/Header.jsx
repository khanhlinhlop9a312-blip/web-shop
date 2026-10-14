import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: 'SHOP', href: '/' },
    { label: 'SELL', href: '/sell' },
    { label: 'COMMUNITY', href: '/#community' },
    { label: 'FAQs', href: '/#faqs' },
  ];

  const handleNav = (href) => {
    setMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header style={{ background: 'var(--burgundy)' }} role="banner">
      {/* Top row: logo + circle logo */}
      <div style={{ padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--white)', letterSpacing: '0.02em', lineHeight: 1 }}>
            GEKKO GECKO
          </span>
        </Link>
        <div style={{
          width: 64, height: 64, borderRadius: '50%', background: 'var(--baby-blue)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          border: '2px solid var(--white)'
        }}>
          <span style={{ fontSize: 8, fontWeight: 700, textAlign: 'center', color: 'var(--burgundy)', lineHeight: 1.2, padding: '0 4px' }}>
            OUR<br />LOGO
          </span>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.3)', marginX: 0 }} />

      {/* Nav row */}
      <div style={{ padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="desktop-nav" style={{ display: 'flex', gap: 32 }}>
          {navLinks.map(link => (
            link.href.startsWith('/#') ? (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                style={{
                  background: 'none', border: 'none', color: 'var(--white)',
                  fontSize: 12, fontWeight: 600, letterSpacing: '0.12em',
                  padding: '14px 0', cursor: 'pointer', fontFamily: 'inherit'
                }}
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                style={{ color: 'var(--white)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', padding: '14px 0', display: 'block' }}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        {/* Icons */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <button
            aria-label="Search"
            style={{ background: 'none', border: 'none', color: 'var(--white)', cursor: 'pointer', padding: 4 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
          <a href="https://instagram.com" aria-label="Instagram" style={{ color: 'var(--white)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="https://facebook.com" aria-label="Facebook" style={{ color: 'var(--white)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          {/* Hamburger - mobile only */}
          <button
            className="hamburger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', color: 'var(--white)', cursor: 'pointer', padding: 4, display: 'none' }}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav aria-label="Mobile navigation" style={{
          background: 'var(--burgundy)', borderTop: '1px solid rgba(255,255,255,0.2)',
          padding: '16px 32px 24px'
        }}>
          {navLinks.map(link => (
            link.href.startsWith('/#') ? (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  background: 'none', border: 'none', color: 'var(--white)',
                  fontSize: 16, fontWeight: 600, letterSpacing: '0.1em',
                  padding: '12px 0', cursor: 'pointer', fontFamily: 'inherit',
                  borderBottom: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block', color: 'var(--white)', fontSize: 16,
                  fontWeight: 600, letterSpacing: '0.1em', padding: '12px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>
      )}

      <style>{`
        @media (max-width: 640px) {
          .hamburger { display: block !important; }
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </header>
  );
}
