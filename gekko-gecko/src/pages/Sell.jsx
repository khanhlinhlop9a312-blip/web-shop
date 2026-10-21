import { useState } from 'react';

const initialForm = {
  name: '', email: '', phone: '', service: '', description: '', attachment: null
};

export default function Sell() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    else if (!/^\+?[\d\s\-()]{7,}$/.test(form.phone)) e.phone = 'Enter a valid phone number';
    if (!form.service.trim()) e.service = 'Please select a service';
    if (!form.description.trim()) e.description = 'Description is required';
    if (!form.attachment) e.attachment = 'Please attach a photo of the item';
    return e;
  };

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const inputStyle = (field) => ({
    width: '100%', padding: '10px 12px',
    border: `1.5px solid ${errors[field] ? 'var(--red)' : '#ccc'}`,
    background: 'var(--white)', fontSize: 13, fontFamily: 'inherit',
    outline: 'none', marginTop: 6, display: 'block',
    boxSizing: 'border-box'
  });

  const labelStyle = { fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', display: 'block', color: 'var(--black)' };
  const errorStyle = { fontSize: 11, color: 'var(--red)', marginTop: 4, display: 'block' };

  return (
    <main style={{ background: 'var(--baby-blue)', minHeight: '90vh', padding: '80px 32px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div className="sell-form-grid" style={{
          display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 0,
          border: '2px solid var(--black)', background: 'var(--white)',
          overflow: 'hidden'
        }}>
          {/* Left: image + brand */}
          <div style={{ background: 'var(--burgundy)', position: 'relative', minHeight: 500, display: 'flex', flexDirection: 'column' }}>
            <div style={{
              padding: '24px 32px',
              borderBottom: '1px solid rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'var(--burgundy)',
              position: 'relative',
              zIndex: 2
            }}>
              <h1 className="font-display" style={{ fontSize: 28, color: 'var(--white)', margin: 0, letterSpacing: '0.02em' }}>
                GEKKO GECKO
              </h1>
              <div style={{
                width: 44, height: 44, borderRadius: '50%', overflow: 'hidden',
                border: '1.5px solid var(--white)', background: 'var(--burgundy)', flexShrink: 0
              }}>
                <img
                  src="/logo.png"
                  alt="GEKKO GECKO Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
            <div style={{ flex: 1, position: 'relative', minHeight: 380, overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=85"
                alt="Folded clothes for resale"
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85, position: 'absolute', inset: 0 }}
              />
            </div>
          </div>

          {/* Right: form */}
          <div style={{ padding: '40px 36px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
                <h2 className="font-display" style={{ fontSize: 32, color: 'var(--burgundy)', marginBottom: 12 }}>
                  SUCCESS!
                </h2>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: '#555' }}>
                  Your product has been submitted successfully! Our team will review your submission and contact you within 48 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(initialForm); }}
                  style={{
                    marginTop: 24, padding: '12px 28px', background: 'var(--burgundy)',
                    color: 'var(--white)', border: 'none', fontSize: 12, fontWeight: 700,
                    letterSpacing: '0.1em', cursor: 'pointer'
                  }}
                >
                  SUBMIT ANOTHER
                </button>
              </div>
            ) : (
              <>
                <h2 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 6px', color: 'var(--burgundy)' }}>
                  Register product
                </h2>
                <p style={{ fontSize: 12, color: '#666', lineHeight: 1.6, marginBottom: 24 }}>
                  Please fill out this form if you have clothes or fashion items that you would like to resell.
                </p>

                <form onSubmit={handleSubmit} noValidate>
                  {[
                    { field: 'name', label: 'Name', type: 'text', placeholder: 'Your full name' },
                    { field: 'email', label: 'Email address', type: 'email', placeholder: 'you@example.com' },
                    { field: 'phone', label: 'Phone number', type: 'tel', placeholder: '+84 xxx xxx xxx' },
                  ].map(({ field, label, type, placeholder }) => (
                    <div key={field} style={{ marginBottom: 16 }}>
                      <label htmlFor={field} style={labelStyle}>{label.toUpperCase()}</label>
                      <input
                        id={field}
                        type={type}
                        value={form[field]}
                        onChange={e => handleChange(field, e.target.value)}
                        placeholder={placeholder}
                        aria-describedby={errors[field] ? `${field}-err` : undefined}
                        style={inputStyle(field)}
                      />
                      {errors[field] && <span id={`${field}-err`} style={errorStyle}>{errors[field]}</span>}
                    </div>
                  ))}

                  <div style={{ marginBottom: 16 }}>
                    <label htmlFor="service" style={labelStyle}>SERVICE NEEDED</label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={e => handleChange('service', e.target.value)}
                      style={{ ...inputStyle('service'), cursor: 'pointer' }}
                    >
                      <option value="">Select a service...</option>
                      <option value="sell">Sell my items</option>
                      <option value="donate">Donate items</option>
                      <option value="consignment">Consignment</option>
                      <option value="trade">Trade / swap</option>
                    </select>
                    {errors.service && <span style={errorStyle}>{errors.service}</span>}
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <label htmlFor="description" style={labelStyle}>{"PRODUCT'S DESCRIPTION/DETAILS"}</label>
                    <textarea
                      id="description"
                      value={form.description}
                      onChange={e => handleChange('description', e.target.value)}
                      placeholder="Describe the item: brand, condition, size, any flaws..."
                      rows={3}
                      style={{ ...inputStyle('description'), resize: 'vertical' }}
                    />
                    {errors.description && <span style={errorStyle}>{errors.description}</span>}
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <label htmlFor="attachment" style={labelStyle}>ATTACHMENT (REQUIRED)</label>
                    <input
                      id="attachment"
                      type="file"
                      accept="image/*"
                      onChange={e => handleChange('attachment', e.target.files[0] || null)}
                      style={{ ...inputStyle('attachment'), padding: '8px 12px', cursor: 'pointer' }}
                    />
                    {errors.attachment && <span style={errorStyle}>{errors.attachment}</span>}
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: '100%', padding: '14px', background: 'var(--black)',
                      color: 'var(--white)', border: 'none', fontSize: 13, fontWeight: 700,
                      letterSpacing: '0.12em', cursor: 'pointer', transition: 'background 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--burgundy)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'var(--black)'}
                  >
                    SUBMIT
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sell-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
