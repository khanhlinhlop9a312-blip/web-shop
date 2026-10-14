export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '32px 0' }}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        style={{
          padding: '6px 14px', border: '1.5px solid var(--black)',
          background: 'var(--white)', fontWeight: 700, fontSize: 12,
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
          opacity: currentPage === 1 ? 0.4 : 1,
          letterSpacing: '0.05em'
        }}
      >
        BACK
      </button>

      {pages.map(p => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          aria-current={p === currentPage ? 'page' : undefined}
          style={{
            width: 36, height: 36, border: '1.5px solid',
            borderColor: p === currentPage ? 'var(--burgundy)' : 'var(--black)',
            background: p === currentPage ? 'var(--burgundy)' : 'var(--white)',
            color: p === currentPage ? 'var(--white)' : 'var(--black)',
            fontWeight: 700, fontSize: 13, cursor: 'pointer'
          }}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        style={{
          padding: '6px 14px', border: '1.5px solid var(--black)',
          background: 'var(--white)', fontWeight: 700, fontSize: 12,
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
          opacity: currentPage === totalPages ? 0.4 : 1,
          letterSpacing: '0.05em'
        }}
      >
        NEXT
      </button>
    </nav>
  );
}
