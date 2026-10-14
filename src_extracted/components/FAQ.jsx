import { useState } from 'react';

const faqs = [
  { q: 'How does selling work?', a: 'Fill out the Register Product form on our Sell page with photos and details. Our team reviews your submission and contacts you within 48 hours with next steps. We handle listing and sales on your behalf.' },
  { q: 'How do I buy an item?', a: 'Browse our categories, click on an item you love, and hit BUY NOW. You\'ll be guided through checkout. We accept major payment methods and your purchase is protected.' },
  { q: 'Can I return an item?', a: 'We accept returns within 7 days if the item significantly differs from its listed condition. Please contact us with photos and your order number to initiate a return.' },
  { q: 'How do I know the condition of an item?', a: 'Every item is graded by our team: Like New (barely worn), Very Good (light use), or Good (visible wear with character). We include close-up photos of any notable wear.' },
  { q: 'How does shipping work?', a: 'We ship within 3–5 business days after purchase. You\'ll receive a tracking number by email. Shipping costs are calculated at checkout based on your location.' },
  { q: 'What categories do you accept for resale?', a: 'We accept clothes, shoes, bags, and accessories in Good condition or better. All items must be clean and ready to wear.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i);

  return (
    <section id="faqs" style={{ background: 'var(--burgundy)', padding: '80px 32px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h2 className="font-display" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: 'var(--white)', margin: '0 0 48px', lineHeight: 0.9 }}>
          FAQS
        </h2>

        <div>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.25)' }}>
              <button
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  background: 'none', border: 'none', color: 'var(--white)',
                  fontSize: 15, fontWeight: 600, padding: '20px 0', cursor: 'pointer',
                  textAlign: 'left', fontFamily: 'inherit', gap: 16
                }}
              >
                <span>{faq.q}</span>
                <svg
                  width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  style={{ transform: openIndex === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s', flexShrink: 0 }}
                >
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <div className={`accordion-content ${openIndex === i ? 'open' : ''}`}>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, lineHeight: 1.7, paddingBottom: 20, margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.25)' }} />
        </div>
      </div>
    </section>
  );
}
