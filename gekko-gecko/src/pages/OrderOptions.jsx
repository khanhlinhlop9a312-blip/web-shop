import { useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { ORDER_LINKS } from '../config/orderLinks';

const categoryNamesVN = {
  clothes: 'QUẦN ÁO',
  shoes: 'GIÀY DÉP',
  bags: 'TÚI XÁCH',
  accessories: 'PHỤ KIỆN'
};

export default function OrderOptions() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === parseInt(id, 10));
  const rawQty = parseInt(searchParams.get('qty') || '1', 10);
  const qty = Number.isNaN(rawQty) || rawQty < 1 ? 1 : rawQty;

  const [copied, setCopied] = useState(false);

  if (!product) {
    return (
      <div style={{ padding: '80px 24px', textAlign: 'center', background: 'var(--pale-pink)', minHeight: '60vh' }}>
        <p className="font-display" style={{ fontSize: 36, color: 'var(--burgundy)', marginBottom: 16 }}>
          ITEM NOT FOUND
        </p>
        <p style={{ color: '#555', marginBottom: 24 }}>Không tìm thấy sản phẩm này trong kho hàng.</p>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '12px 28px',
            background: 'var(--burgundy)',
            color: 'var(--white)',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer'
          }}
        >
          QUAY LẠI TRANG CHỦ
        </button>
      </div>
    );
  }

  const totalPrice = product.price * qty;
  const formattedProductPrice = typeof product.price === 'number' && product.price >= 1000
    ? `${product.price.toLocaleString('vi-VN')}đ`
    : `$${product.price}`;
  const formattedTotalPrice = typeof totalPrice === 'number' && totalPrice >= 1000
    ? `${totalPrice.toLocaleString('vi-VN')}đ`
    : `$${totalPrice}`;

  const orderSummaryText = `[GEKKO GECKO] Đặt hàng: ${product.name} | Size: ${product.size || 'N/A'} | Màu: ${product.color || 'N/A'} | SL: ${qty} | Tổng tiền: ${formattedTotalPrice}`;

  const handleCopyInfo = () => {
    navigator.clipboard.writeText(orderSummaryText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      // Fallback if clipboard API is blocked
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
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
            onClick={() => navigate(`/${product.category}`)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--burgundy)', fontWeight: 'inherit', letterSpacing: 'inherit', padding: 0 }}
          >
            {categoryNamesVN[product.category] || product.category.toUpperCase()}
          </button>
          <span style={{ color: '#999' }}>/</span>
          <button
            onClick={() => navigate(`/product/${product.id}`)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--burgundy)', fontWeight: 'inherit', letterSpacing: 'inherit', padding: 0 }}
          >
            {product.name}
          </button>
          <span style={{ color: '#999' }}>/</span>
          <span style={{ color: '#555', fontWeight: 700 }}>ĐẶT HÀNG</span>
        </div>

        {/* Header Section */}
        <div style={{ marginBottom: 36 }}>
          <span style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.15em',
            background: 'var(--baby-blue)',
            color: 'var(--burgundy)',
            padding: '4px 10px',
            display: 'inline-block',
            marginBottom: 12
          }}>
            CHECKOUT · 3 PHƯƠNG THỨC ĐẶT HÀNG
          </span>
          <h1 className="font-display" style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            color: 'var(--black)',
            margin: '0 0 10px',
            lineHeight: 1
          }}>
            CHỌN KÊNH ĐẶT HÀNG
          </h1>
          <p style={{ fontSize: 14, color: '#555', maxWidth: 640, lineHeight: 1.6, margin: 0 }}>
            Bạn đang chuẩn bị đặt mua <strong>{product.name}</strong>. Vui lòng chọn 1 trong 3 hình thức bên dưới để hoàn tất việc mua hàng tiện lợi nhất:
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="order-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 36, alignItems: 'start' }}>
          
          {/* Options Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            
            {/* OPTION 1: GOOGLE FORM */}
            <div style={{
              background: 'var(--white)',
              border: '2px solid var(--black)',
              padding: '24px',
              position: 'relative',
              boxShadow: '4px 4px 0 var(--burgundy)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  background: 'var(--pale-pink)',
                  color: 'var(--burgundy)',
                  padding: '3px 8px',
                  border: '1px solid var(--burgundy)'
                }}>
                  LỰA CHỌN 1 · TỰ ĐỘNG
                </span>
                {/* Form Icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--burgundy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>

              <h2 className="font-display" style={{ fontSize: 22, margin: '0 0 8px', color: 'var(--black)' }}>
                1. ĐIỀN THÔNG TIN QUA GOOGLE FORM
              </h2>
              <p style={{ fontSize: 13, color: '#555', lineHeight: 1.6, margin: '0 0 16px' }}>
                Điền nhanh thông tin người nhận, địa chỉ giao hàng và thông tin chuyển khoản vào biểu mẫu Google Form của shop.
              </p>

              <a
                href={ORDER_LINKS.googleForm}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  width: '100%',
                  padding: '14px 20px',
                  background: 'var(--burgundy)',
                  color: 'var(--white)',
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: '0.08em',
                  textAlign: 'center',
                  textDecoration: 'none',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#8a0022'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--burgundy)'}
              >
                <span>MỞ LINK GOOGLE FORM</span>
                <span style={{ fontSize: 16 }}>↗</span>
              </a>
            </div>

            {/* OPTION 2: FACEBOOK */}
            <div style={{
              background: 'var(--white)',
              border: '2px solid var(--black)',
              padding: '24px',
              position: 'relative',
              boxShadow: '4px 4px 0 var(--burgundy)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  background: '#e7f3ff',
                  color: '#1877f2',
                  padding: '3px 8px',
                  border: '1px solid #1877f2'
                }}>
                  LỰA CHỌN 2 · NHẮN TIN TƯ VẤN
                </span>
                {/* Facebook Icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#1877f2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>

              <h2 className="font-display" style={{ fontSize: 22, margin: '0 0 8px', color: 'var(--black)' }}>
                2. ĐẶT HÀNG QUA FACEBOOK PAGE
              </h2>
              <p style={{ fontSize: 13, color: '#555', lineHeight: 1.6, margin: '0 0 16px' }}>
                Nhắn tin trực tiếp với Fanpage GEKKO GECKO để được nhân viên tư vấn số đo, tình trạng sản phẩm và xác nhận giữ đồ ngay.
              </p>

              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a
                  href={ORDER_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: '1 1 200px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    padding: '14px 18px',
                    background: '#1877f2',
                    color: 'var(--white)',
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: '0.08em',
                    textAlign: 'center',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  <span>MỞ FACEBOOK PAGE</span>
                  <span style={{ fontSize: 16 }}>↗</span>
                </a>

                {ORDER_LINKS.facebookMessenger && (
                  <a
                    href={ORDER_LINKS.facebookMessenger}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 6,
                      padding: '14px 18px',
                      background: 'var(--white)',
                      color: '#1877f2',
                      border: '1.5px solid #1877f2',
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: '0.05em',
                      textDecoration: 'none'
                    }}
                  >
                    <span>MESSENGER CHAT</span>
                  </a>
                )}
              </div>
            </div>

            {/* OPTION 3: INSTAGRAM */}
            <div style={{
              background: 'var(--white)',
              border: '2px solid var(--black)',
              padding: '24px',
              position: 'relative',
              boxShadow: '4px 4px 0 var(--burgundy)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  background: '#fce4ec',
                  color: '#d6249f',
                  padding: '3px 8px',
                  border: '1px solid #d6249f'
                }}>
                  LỰA CHỌN 3 · DIRECT MESSAGE (DM)
                </span>
                {/* Instagram Icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#d6249f">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>

              <h2 className="font-display" style={{ fontSize: 22, margin: '0 0 8px', color: 'var(--black)' }}>
                3. ĐẶT HÀNG QUA INSTAGRAM
              </h2>
              <p style={{ fontSize: 13, color: '#555', lineHeight: 1.6, margin: '0 0 16px' }}>
                Gửi tin nhắn Instagram Direct tới tài khoản <strong>@gekkogecko.thrift</strong> để gửi hình ảnh hoặc tên đồ cần mua để chốt đơn nhanh gọn.
              </p>

              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a
                  href={ORDER_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: '1 1 200px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    padding: '14px 18px',
                    background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                    color: 'var(--white)',
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: '0.08em',
                    textAlign: 'center',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  <span>MỞ INSTAGRAM PAGE</span>
                  <span style={{ fontSize: 16 }}>↗</span>
                </a>

                {ORDER_LINKS.instagramDM && (
                  <a
                    href={ORDER_LINKS.instagramDM}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 6,
                      padding: '14px 18px',
                      background: 'var(--white)',
                      color: '#d6249f',
                      border: '1.5px solid #d6249f',
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: '0.05em',
                      textDecoration: 'none'
                    }}
                  >
                    <span>MỞ INSTA DM</span>
                  </a>
                )}
              </div>
            </div>

            {/* Back action */}
            <div style={{ marginTop: 8 }}>
              <button
                onClick={() => navigate(`/product/${product.id}`)}
                style={{
                  background: 'none',
                  border: '1.5px solid var(--black)',
                  padding: '12px 20px',
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  color: 'var(--black)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8
                }}
              >
                <span>←</span>
                <span>QUAY LẠI TRANG SẢN PHẨM</span>
              </button>
            </div>
          </div>

          {/* Product Summary Sticky Column */}
          <div style={{ position: 'sticky', top: 24 }}>
            <div style={{
              background: 'var(--white)',
              border: '2px solid var(--black)',
              padding: '24px',
              boxShadow: '4px 4px 0 var(--burgundy)'
            }}>
              <span style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: '#888',
                display: 'block',
                marginBottom: 12
              }}>
                THÔNG TIN SẢN PHẨM ĐÃ CHỌN
              </span>

              {/* Product preview */}
              <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                <div style={{
                  width: 90,
                  height: 110,
                  border: '1.5px solid var(--black)',
                  overflow: 'hidden',
                  flexShrink: 0
                }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h3 className="font-display" style={{ fontSize: 18, margin: '0 0 6px', color: 'var(--black)', lineHeight: 1.2 }}>
                    {product.name}
                  </h3>
                  <p style={{ fontSize: 12, color: '#666', margin: '0 0 6px' }}>
                    {(categoryNamesVN[product.category] || product.category).toUpperCase()} · {product.type}
                  </p>
                  <p style={{ fontSize: 18, fontWeight: 800, color: 'var(--burgundy)', margin: 0, fontFamily: 'Anton, sans-serif' }}>
                    {formattedProductPrice}
                  </p>
                </div>
              </div>

              {/* Specs table */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 1,
                border: '1px solid var(--black)',
                marginBottom: 20,
                fontSize: 12
              }}>
                <div style={{ padding: '8px 10px', borderRight: '1px solid var(--black)', borderBottom: '1px solid var(--black)', background: '#fafafa' }}>
                  <span style={{ color: '#888', fontSize: 10, display: 'block', fontWeight: 600 }}>KÍCH THƯỚC</span>
                  <strong>{product.size || 'N/A'}</strong>
                </div>
                <div style={{ padding: '8px 10px', borderBottom: '1px solid var(--black)', background: '#fafafa' }}>
                  <span style={{ color: '#888', fontSize: 10, display: 'block', fontWeight: 600 }}>MÀU SẮC</span>
                  <strong>{product.color || 'N/A'}</strong>
                </div>
                <div style={{ padding: '8px 10px', borderRight: '1px solid var(--black)', background: '#fafafa' }}>
                  <span style={{ color: '#888', fontSize: 10, display: 'block', fontWeight: 600 }}>TÌNH TRẠNG</span>
                  <strong>{product.condition || 'N/A'}</strong>
                </div>
                <div style={{ padding: '8px 10px', background: '#fafafa' }}>
                  <span style={{ color: '#888', fontSize: 10, display: 'block', fontWeight: 600 }}>SỐ LƯỢNG</span>
                  <strong>{qty}</strong>
                </div>
              </div>

              {/* Price summary row */}
              <div style={{
                borderTop: '1.5px dashed #ccc',
                paddingTop: 16,
                marginBottom: 20,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline'
              }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--black)' }}>TỔNG TẠM TÍNH:</span>
                <span className="font-display" style={{ fontSize: 26, color: 'var(--burgundy)' }}>
                  {formattedTotalPrice}
                </span>
              </div>

              {/* Copy order text button */}
              <div style={{ borderTop: '1px solid #eee', paddingTop: 16 }}>
                <p style={{ fontSize: 11, color: '#666', margin: '0 0 10px', lineHeight: 1.4 }}>
                  💡 <em>Mẹo: Bấm sao chép để dán sẵn thông tin món đồ vào tin nhắn Facebook hoặc Instagram cho shop:</em>
                </p>
                <button
                  onClick={handleCopyInfo}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    background: copied ? '#2e7d32' : 'var(--white)',
                    color: copied ? 'var(--white)' : 'var(--black)',
                    border: '1.5px solid ' + (copied ? '#2e7d32' : 'var(--black)'),
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    transition: 'all 0.2s'
                  }}
                >
                  {copied ? (
                    <>
                      <span>✓</span>
                      <span>ĐÃ SAO CHÉP THÀNH CÔNG!</span>
                    </>
                  ) : (
                    <>
                      <span>📋</span>
                      <span>SAO CHÉP THÔNG TIN MÓN ĐỒ</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .order-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

