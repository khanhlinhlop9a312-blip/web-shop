import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ORDER_LINKS } from '../config/orderLinks';

const initialForm = {
  fullName: '',
  age: '',
  phone: '',
  socialLink: '',
  currentStyle: 'Bánh bèo / Nữ tính',
  clothingSize: 'M',
  message: '',
  photo: null,
};

const styleOptions = [
  'Bánh bèo / Nữ tính',
  'Casual / Đơn giản',
  'Công sở / Thanh lịch',
  'Tối giản (Minimalism)',
  'Chưa định hình phong cách',
  'Khác',
];

const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'Oversize'];

export default function ThayMau() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = 'Vui lòng nhập họ và tên của bạn';
    if (!form.age.trim()) errs.age = 'Vui lòng nhập tuổi hoặc năm sinh';
    if (!form.phone.trim()) {
      errs.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^[0-9+() -]{8,15}$/.test(form.phone.trim())) {
      errs.phone = 'Số điện thoại không hợp lệ';
    }
    if (!form.socialLink.trim()) {
      errs.socialLink = 'Vui lòng cung cấp link Facebook hoặc Instagram của bạn';
    }
    return errs;
  };

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm(prev => ({ ...prev, photo: file.name }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstErrKey = Object.keys(errs)[0];
      document.getElementById(firstErrKey)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Save to localStorage so submissions are preserved
    try {
      const existing = JSON.parse(localStorage.getItem('thay_mau_registrations') || '[]');
      existing.push({
        ...form,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('thay_mau_registrations', JSON.stringify(existing));
    } catch {
      // localStorage may fail in strict private browsing; ignore silently
    }

    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const summaryText = `[ĐĂNG KÝ DỰ ÁN THAY MÀU - GEKKO GECKO]
Họ tên: ${form.fullName}
Tuổi/Năm sinh: ${form.age}
SĐT/Zalo: ${form.phone}
Link MXH: ${form.socialLink}
Phong cách hiện tại: ${form.currentStyle}
Size áo/quần: ${form.clothingSize}
Mong muốn: ${form.message || 'Không có'}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(summaryText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const labelStyle = {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '0.1em',
    display: 'block',
    color: 'var(--black)',
    marginBottom: 6,
  };

  const inputStyle = (fieldName) => ({
    width: '100%',
    padding: '12px 14px',
    border: `1.5px solid ${errors[fieldName] ? 'var(--red)' : 'var(--black)'}`,
    background: 'var(--white)',
    fontSize: 13,
    fontFamily: 'inherit',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  });

  const errorStyle = {
    fontSize: 11,
    color: 'var(--red)',
    marginTop: 4,
    display: 'block',
    fontWeight: 600,
  };

  return (
    <main style={{ background: 'var(--pale-pink)', minHeight: '85vh', paddingBottom: 80 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 28, fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            onClick={() => navigate('/')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--burgundy)', fontWeight: 'inherit', letterSpacing: 'inherit', padding: 0 }}
          >
            HOME
          </button>
          <span style={{ color: '#999' }}>/</span>
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--burgundy)', fontWeight: 'inherit', letterSpacing: 'inherit', padding: 0 }}
          >
            COMMUNITY
          </button>
          <span style={{ color: '#999' }}>/</span>
          <span style={{ color: '#555', fontWeight: 700 }}>DỰ ÁN "THAY MÀU"</span>
        </div>

        {/* 2-Column Main Card */}
        <div className="thay-mau-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.25fr)',
          border: '2px solid var(--black)',
          boxShadow: '10px 10px 0 var(--burgundy)',
          background: 'var(--white)',
          overflow: 'hidden',
        }}>
          
          {/* Left Column: Campaign Manifesto & Visual */}
          <div style={{
            background: 'var(--burgundy)',
            color: 'var(--white)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
          }}>
            <div className="thay-mau-text-container" style={{ padding: '36px 32px 20px' }}>
              <span style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.15em',
                background: 'var(--baby-blue)',
                color: 'var(--burgundy)',
                padding: '4px 10px',
                display: 'inline-block',
                marginBottom: 14,
              }}>
                GEKKO GECKO · CAMPAIGN 2026
              </span>

              <h1 className="font-display" style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
                lineHeight: 1.05,
                margin: '0 0 14px',
                color: 'var(--white)',
              }}>
                DỰ ÁN "THAY MÀU"
              </h1>

              <p style={{
                fontSize: 14,
                fontWeight: 600,
                lineHeight: 1.55,
                color: 'var(--baby-blue)',
                margin: '0 0 16px',
              }}>
                FIND THE HIP-HOP IN YOU — Khám phá một phiên bản mới, táo bạo và tự do hơn của chính bạn!
              </p>

              <div style={{
                borderLeft: '3px solid var(--baby-blue)',
                paddingLeft: 14,
                margin: '16px 0',
                fontStyle: 'italic',
                fontSize: 13,
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.9)',
              }}>
                "Không cần phải trở thành một ai khác. Chỉ cần cho bản thân cơ hội trải nghiệm những điều trước đây bạn chưa từng thử."
              </div>

              <div style={{ marginTop: 18, fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)' }}>
                <p style={{ margin: '0 0 6px' }}>✨ <strong>Bạn sẽ nhận được gì khi tham gia?</strong></p>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  <li>Được tư vấn định hình phong cách Hip-hop/Streetwear miễn phí.</li>
                  <li>Trực tiếp mix-match những outfit độc bản từ kho second-hand GEKKO GECKO.</li>
                  <li>Tham gia buổi chụp hình (photoshoot) lưu giữ diện mạo bứt phá mới.</li>
                </ul>
              </div>
            </div>

            {/* Campaign photo thumbnail */}
            <div className="thay-mau-img-container" style={{
              borderTop: '1px solid rgba(255,255,255,0.2)',
              position: 'relative',
              flex: '1 1 auto',
              minHeight: 340,
              overflow: 'hidden',
            }}>
              <img
                src="/brand-story.jpg"
                alt="Thay Mau Project"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 10%', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(101,0,25,0.85) 0%, transparent 60%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '16px 24px',
              }}>
                <span className="font-display" style={{ fontSize: 16, color: 'var(--white)', letterSpacing: '0.08em' }}>
                  PHÁ VỠ KHUÔN KHỔ · TỎA SÁNG THEO CÁCH CỦA BẠN
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Registration Form / Success State */}
          <div style={{ padding: '40px 36px', background: 'var(--white)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 16px' }}>
                <div style={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  background: 'var(--baby-blue)',
                  color: 'var(--burgundy)',
                  fontSize: 36,
                  fontWeight: 900,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  border: '2px solid var(--burgundy)',
                }}>
                  ✓
                </div>

                <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', color: 'var(--burgundy)', margin: '0 0 12px' }}>
                  ĐĂNG KÝ THÀNH CÔNG!
                </h2>

                <p style={{ fontSize: 14, lineHeight: 1.7, color: '#333', maxWidth: 440, margin: '0 auto 20px' }}>
                  Cảm ơn <strong>{form.fullName}</strong> đã gửi thông tin tham gia dự án <strong>"Thay Màu"</strong>. Tụi mình sẽ liên hệ với bạn qua SĐT/Zalo <strong>{form.phone}</strong> hoặc mạng xã hội trong thời gian sớm nhất để hẹn lịch tư vấn & chọn đồ nhé!
                </p>

                {/* Quick copy text */}
                <div style={{
                  background: 'var(--pale-pink)',
                  border: '1.5px solid var(--burgundy)',
                  padding: '16px',
                  maxWidth: 440,
                  margin: '0 auto 24px',
                  textAlign: 'left',
                }}>
                  <p style={{ fontSize: 11, color: '#666', margin: '0 0 8px', fontWeight: 600 }}>
                    💡 <em>Bạn cũng có thể sao chép thông tin để gửi tin nhắn cho shop chốt lịch sớm nhất:</em>
                  </p>
                  <button
                    onClick={handleCopy}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      background: copied ? '#2e7d32' : 'var(--burgundy)',
                      color: 'var(--white)',
                      border: 'none',
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: '0.08em',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 6,
                    }}
                  >
                    {copied ? '✓ ĐÃ SAO CHÉP THÀNH CÔNG!' : '📋 SAO CHÉP THÔNG TIN ĐÃ ĐIỀN'}
                  </button>
                </div>

                {/* Social contact buttons */}
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
                  <a
                    href={ORDER_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '12px 20px',
                      background: '#1877f2',
                      color: 'var(--white)',
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: '0.05em',
                      textDecoration: 'none',
                    }}
                  >
                    NHẮN TIN QUA FACEBOOK ↗
                  </a>
                  <a
                    href={ORDER_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '12px 20px',
                      background: '#d6249f',
                      color: 'var(--white)',
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: '0.05em',
                      textDecoration: 'none',
                    }}
                  >
                    NHẮN QUA INSTAGRAM ↗
                  </a>
                </div>

                <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm(initialForm);
                      setPhotoPreview(null);
                    }}
                    style={{
                      background: 'none',
                      border: '1.5px solid var(--black)',
                      padding: '10px 20px',
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    GỬI ĐĂNG KÝ KHÁC
                  </button>
                  <button
                    onClick={() => navigate('/')}
                    style={{
                      background: 'var(--black)',
                      color: 'var(--white)',
                      border: 'none',
                      padding: '10px 24px',
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    VỀ TRANG CHỦ
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h2 className="font-display" style={{ fontSize: 24, margin: '0 0 6px', color: 'var(--black)' }}>
                  PHIẾU ĐĂNG KÝ THAM GIA
                </h2>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.6, margin: '0 0 24px' }}>
                  Hãy điền đầy đủ các thông tin cá nhân bên dưới để GEKKO GECKO chuẩn bị những set đồ phù hợp nhất dành riêng cho bạn:
                </p>

                <form onSubmit={handleSubmit} noValidate>
                  
                  {/* Họ và tên */}
                  <div style={{ marginBottom: 16 }}>
                    <label htmlFor="fullName" style={labelStyle}>
                      HỌ VÀ TÊN <span style={{ color: 'var(--red)' }}>*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Ví dụ: Nguyễn Phương Linh"
                      value={form.fullName}
                      onChange={e => handleChange('fullName', e.target.value)}
                      style={inputStyle('fullName')}
                    />
                    {errors.fullName && <span style={errorStyle}>{errors.fullName}</span>}
                  </div>

                  {/* Tuổi + SĐT (2 columns) */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 12, marginBottom: 16 }}>
                    <div>
                      <label htmlFor="age" style={labelStyle}>
                        TUỔI / NĂM SINH <span style={{ color: 'var(--red)' }}>*</span>
                      </label>
                      <input
                        id="age"
                        type="text"
                        placeholder="VD: 2003 hoặc 21"
                        value={form.age}
                        onChange={e => handleChange('age', e.target.value)}
                        style={inputStyle('age')}
                      />
                      {errors.age && <span style={errorStyle}>{errors.age}</span>}
                    </div>

                    <div>
                      <label htmlFor="phone" style={labelStyle}>
                        SỐ ĐIỆN THOẠI (ZALO) <span style={{ color: 'var(--red)' }}>*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="09xx xxx xxx"
                        value={form.phone}
                        onChange={e => handleChange('phone', e.target.value)}
                        style={inputStyle('phone')}
                      />
                      {errors.phone && <span style={errorStyle}>{errors.phone}</span>}
                    </div>
                  </div>

                  {/* Link Facebook / Instagram */}
                  <div style={{ marginBottom: 18 }}>
                    <label htmlFor="socialLink" style={labelStyle}>
                      LINK FACEBOOK HOẶC INSTAGRAM CÁ NHÂN <span style={{ color: 'var(--red)' }}>*</span>
                    </label>
                    <input
                      id="socialLink"
                      type="text"
                      placeholder="facebook.com/your.profile hoặc @your.insta"
                      value={form.socialLink}
                      onChange={e => handleChange('socialLink', e.target.value)}
                      style={inputStyle('socialLink')}
                    />
                    <span style={{ fontSize: 11, color: '#777', marginTop: 4, display: 'block' }}>
                      (Để shop ghé thăm phong cách thường ngày và liên hệ gửi ảnh cho bạn)
                    </span>
                    {errors.socialLink && <span style={errorStyle}>{errors.socialLink}</span>}
                  </div>

                  {/* Phong cách hiện tại (Chips / Select) */}
                  <div style={{ marginBottom: 18 }}>
                    <label style={labelStyle}>PHONG CÁCH QUẦN ÁO BẠN HAY MẶC HIỆN TẠI</label>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
                      {styleOptions.map(opt => {
                        const active = form.currentStyle === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleChange('currentStyle', opt)}
                            style={{
                              padding: '7px 12px',
                              fontSize: 12,
                              fontWeight: active ? 700 : 500,
                              background: active ? 'var(--burgundy)' : '#f3f3f3',
                              color: active ? 'var(--white)' : 'var(--black)',
                              border: '1.5px solid ' + (active ? 'var(--burgundy)' : '#ddd'),
                              cursor: 'pointer',
                              transition: 'all 0.15s',
                            }}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Size quần áo */}
                  <div style={{ marginBottom: 18 }}>
                    <label style={labelStyle}>SIZE QUẦN ÁO BẠN THƯỜNG MẶC</label>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
                      {sizeOptions.map(sz => {
                        const active = form.clothingSize === sz;
                        return (
                          <button
                            key={sz}
                            type="button"
                            onClick={() => handleChange('clothingSize', sz)}
                            style={{
                              minWidth: 46,
                              padding: '8px 12px',
                              fontSize: 12,
                              fontWeight: active ? 700 : 600,
                              background: active ? 'var(--black)' : 'var(--white)',
                              color: active ? 'var(--white)' : 'var(--black)',
                              border: '1.5px solid var(--black)',
                              cursor: 'pointer',
                            }}
                          >
                            {sz}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Lời nhắn / Mong muốn */}
                  <div style={{ marginBottom: 18 }}>
                    <label htmlFor="message" style={labelStyle}>
                      ĐIỀU GÌ KHIẾN BẠN MUỐN THỬ SỨC VỚI DỰ ÁN "THAY MÀU"? (TÙY CHỌN)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Chia sẻ ngắn về mong muốn đổi mới phong cách của bạn..."
                      value={form.message}
                      onChange={e => handleChange('message', e.target.value)}
                      style={{ ...inputStyle('message'), resize: 'vertical' }}
                    />
                  </div>

                  {/* Tùy chọn gửi ảnh outfit */}
                  <div style={{ marginBottom: 24 }}>
                    <label htmlFor="outfitPhoto" style={labelStyle}>
                      ẢNH OUTFIT GẦN ĐÂY CỦA BẠN (TÙY CHỌN)
                    </label>
                    <input
                      id="outfitPhoto"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      style={{ ...inputStyle('photo'), padding: '8px 12px', cursor: 'pointer' }}
                    />
                    {photoPreview && (
                      <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 12 }}>
                        <img
                          src={photoPreview}
                          alt="Preview"
                          style={{ width: 64, height: 64, objectFit: 'cover', border: '1.5px solid var(--black)' }}
                        />
                        <span style={{ fontSize: 12, color: '#555' }}>Đã tải lên ảnh mẫu của bạn ✓</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '15px',
                      background: 'var(--burgundy)',
                      color: 'var(--white)',
                      border: 'none',
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#8a0022'}
                    onMouseLeave={e => e.currentTarget.style.background = 'var(--burgundy)'}
                  >
                    GỬI ĐĂNG KÝ THAM GIA →
                  </button>
                </form>
              </>
            )}
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 821px) {
          .thay-mau-text-container {
            padding: 30px 28px 18px !important;
          }
          .thay-mau-img-container {
            min-height: 360px !important;
          }
        }
        @media (max-width: 820px) {
          .thay-mau-grid {
            grid-template-columns: 1fr !important;
          }
          .thay-mau-img-container {
            height: 260px !important;
            min-height: 260px !important;
          }
        }
      `}</style>
    </main>
  );
}

