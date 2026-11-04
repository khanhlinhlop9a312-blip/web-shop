import { useState } from 'react';

const faqs = [
  { q: 'Quy trình gửi bán đồ diễn ra như thế nào?', a: "Bạn chỉ cần điền biểu mẫu Đăng ký sản phẩm trên trang Bán đồ kèm ảnh chụp và mô tả. Đội ngũ của chúng mình sẽ kiểm duyệt và liên hệ lại với bạn trong vòng 48 giờ để hướng dẫn các bước tiếp theo. Chúng mình sẽ hỗ trợ bạn đăng bán và tìm chủ nhân mới cho món đồ." },
  { q: 'Làm thế nào để mua một món đồ?', a: "Duyệt qua các danh mục, chọn món đồ ưng ý và bấm BUY NOW. Bạn sẽ được lựa chọn 1 trong 3 hình thức thuận tiện: Điền link Google Form, Đặt qua Facebook hoặc Đặt qua Instagram." },
  { q: 'Chính sách đổi trả hàng như thế nào?', a: 'Chúng mình hỗ trợ đổi trả trong vòng 7 ngày nếu sản phẩm có lỗi rách hoặc khác biệt đáng kể so với tình trạng được mô tả. Vui lòng nhắn tin kèm ảnh chụp và mã đơn hàng để được hỗ trợ nhanh nhất.' },
  { q: 'Làm sao để biết chính xác tình trạng món đồ?', a: 'Mỗi món đồ đều được kiểm tra kỹ lưỡng và phân loại rõ ràng: Like New (gần như mới), Very Good (rất tốt, ít sử dụng), hoặc Good (tình trạng tốt, có dấu ấn thời gian tự nhiên). Chúng mình luôn cung cấp hình ảnh thực tế và mô tả chi tiết nhất.' },
  { q: 'Thời gian và phí vận chuyển ra sao?', a: "Đơn hàng sẽ được chuẩn bị và gửi đi trong vòng 2–4 ngày làm việc. Bạn sẽ nhận được mã vận đơn để theo dõi đơn hàng dễ dàng. Phí vận chuyển được tính dựa trên địa chỉ nhận hàng của bạn." },
  { q: 'GEKKO GECKO nhận thu mua / ký gửi những loại đồ nào?', a: 'Chúng mình nhận quần áo, giày dép, túi xách và phụ kiện thời trang ở tình trạng Tốt trở lên. Tất cả các món đồ cần được giặt sạch và sẵn sàng sử dụng.' },
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
