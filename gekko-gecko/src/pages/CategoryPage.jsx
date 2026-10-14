import { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { products, categoryFilters } from '../data/products';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';

const ITEMS_PER_PAGE = 8;

const categoryLabels = {
  clothes: 'CLOTHES',
  shoes: 'SHOES',
  bags: 'BAGS',
  accessories: 'ACCESSORIES'
};

export default function CategoryPage() {
  const location = useLocation();
  const category = location.pathname.replace('/', '');
  const label = categoryLabels[category] || category?.toUpperCase();

  const [search, setSearch] = useState('');
  const [activeFilters, setActiveFilters] = useState({ type: [], material: [], season: [], color: [] });
  const [sort, setSort] = useState('recommended');
  const [page, setPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const typeChips = categoryFilters[category]?.Type || [];

  const handleFilterChange = (key, value) => {
    setActiveFilters(prev => ({ ...prev, [key]: value }));
    setPage(1);
  };

  const handleChipToggle = (chip) => {
    const current = activeFilters.type || [];
    const updated = current.includes(chip) ? current.filter(v => v !== chip) : [...current, chip];
    setActiveFilters(prev => ({ ...prev, type: updated }));
    setPage(1);
  };

  const clearFilters = () => {
    setActiveFilters({ type: [], material: [], season: [], color: [] });
    setSearch('');
    setPage(1);
  };

  const filtered = useMemo(() => {
    let list = products.filter(p => p.category === category);

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.color.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    if (activeFilters.type?.length) list = list.filter(p => activeFilters.type.includes(p.type));
    if (activeFilters.material?.length) list = list.filter(p => activeFilters.material.includes(p.material));
    if (activeFilters.season?.length) list = list.filter(p => activeFilters.season.includes(p.season));
    if (activeFilters.color?.length) list = list.filter(p => activeFilters.color.includes(p.color));

    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    else if (sort === 'newest') list = [...list].sort((a, b) => b.id_created - a.id_created);

    return list;
  }, [category, search, activeFilters, sort]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <main style={{ background: 'var(--pale-pink)', minHeight: '80vh' }}>
      {/* Category Hero */}
      <div style={{
        background: 'var(--white)', padding: '40px 32px 32px',
        textAlign: 'center', borderBottom: '2px solid var(--black)'
      }}>
        <h1 className="font-display" style={{
          fontSize: 'clamp(3rem, 8vw, 8rem)', color: 'var(--red)',
          margin: 0, lineHeight: 0.9, letterSpacing: '0.01em'
        }}>
          {label}
        </h1>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px' }}>
        {/* Search + Sort row */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 20, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
            <input
              type="search"
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
              placeholder="Search..."
              aria-label="Search products"
              style={{
                width: '100%', padding: '10px 14px 10px 36px',
                border: '1.5px solid var(--black)', background: 'var(--white)',
                fontSize: 13, fontFamily: 'inherit', outline: 'none'
              }}
            />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2"
              style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
            >
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>

          <select
            value={sort}
            onChange={e => { setSort(e.target.value); setPage(1); }}
            aria-label="Sort products"
            style={{
              padding: '10px 14px', border: '1.5px solid var(--black)',
              background: 'var(--white)', fontSize: 12, fontFamily: 'inherit',
              fontWeight: 600, cursor: 'pointer', letterSpacing: '0.05em'
            }}
          >
            <option value="recommended">RECOMMENDED</option>
            <option value="price-asc">PRICE: LOW TO HIGH</option>
            <option value="price-desc">PRICE: HIGH TO LOW</option>
            <option value="newest">NEWEST</option>
          </select>

          {/* Mobile filter toggle */}
          <button
            className="filter-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              padding: '10px 16px', border: '1.5px solid var(--black)',
              background: 'var(--white)', fontSize: 11, fontWeight: 700,
              letterSpacing: '0.1em', cursor: 'pointer', display: 'none'
            }}
          >
            FILTERS
          </button>
        </div>

        {/* Filter chips */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          {typeChips.map(chip => {
            const active = (activeFilters.type || []).includes(chip);
            return (
              <button
                key={chip}
                onClick={() => handleChipToggle(chip)}
                style={{
                  padding: '6px 14px', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em',
                  border: '1.5px solid',
                  borderColor: active ? 'var(--burgundy)' : 'var(--black)',
                  background: active ? 'var(--burgundy)' : 'var(--white)',
                  color: active ? 'var(--white)' : 'var(--black)',
                  cursor: 'pointer', transition: 'all 0.15s'
                }}
              >
                {chip}
              </button>
            );
          })}
          {(Object.values(activeFilters).some(v => v.length > 0) || search) && (
            <button
              onClick={clearFilters}
              style={{
                padding: '6px 14px', fontSize: 11, fontWeight: 700,
                border: '1.5px solid var(--red)', color: 'var(--red)',
                background: 'var(--white)', cursor: 'pointer', letterSpacing: '0.08em'
              }}
            >
              ✕ CLEAR FILTERS
            </button>
          )}
        </div>

        <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
          {/* Sidebar */}
          <div className="sidebar-desktop" style={{ flexShrink: 0 }}>
            <FilterSidebar
              category={category}
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
            />
          </div>

          {/* Mobile sidebar overlay */}
          {sidebarOpen && (
            <div
              style={{
                position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(0,0,0,0.4)',
                display: 'flex'
              }}
              onClick={() => setSidebarOpen(false)}
            >
              <div
                style={{ background: 'var(--white)', padding: 24, width: 280, overflowY: 'auto' }}
                onClick={e => e.stopPropagation()}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                  <span style={{ fontWeight: 700, fontSize: 14 }}>FILTERS</span>
                  <button onClick={() => setSidebarOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 18 }}>✕</button>
                </div>
                <FilterSidebar
                  category={category}
                  activeFilters={activeFilters}
                  onFilterChange={handleFilterChange}
                  onClearFilters={clearFilters}
                />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 12, color: '#666', marginBottom: 16, fontWeight: 600 }}>
              {filtered.length} ITEM{filtered.length !== 1 ? 'S' : ''}
            </p>

            {paginated.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
                {paginated.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '80px 32px' }}>
                <p className="font-display" style={{ fontSize: 32, color: 'var(--burgundy)', marginBottom: 8 }}>
                  NO ITEMS FOUND.
                </p>
                <p style={{ fontSize: 14, color: '#666' }}>Try adjusting your filters or search query.</p>
              </div>
            )}

            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={p => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sidebar-desktop { display: none !important; }
          .filter-toggle { display: block !important; }
        }
        @media (max-width: 480px) {
          .product-grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
