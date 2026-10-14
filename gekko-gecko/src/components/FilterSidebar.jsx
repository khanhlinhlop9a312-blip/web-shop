import { useState } from 'react';
import { categoryFilters } from '../data/products';

export default function FilterSidebar({ category, activeFilters, onFilterChange, onClearFilters }) {
  const [openGroups, setOpenGroups] = useState({ Type: true, Material: false, Season: false, Color: false });
  const filters = categoryFilters[category] || {};

  const toggle = (group) => setOpenGroups(prev => ({ ...prev, [group]: !prev[group] }));

  const handleCheck = (group, value) => {
    const key = group.toLowerCase();
    const current = activeFilters[key] || [];
    const updated = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value];
    onFilterChange(key, updated);
  };

  const hasActiveFilters = Object.values(activeFilters).some(v => v.length > 0);

  return (
    <aside style={{ minWidth: 200, maxWidth: 220 }} aria-label="Product filters">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <h3 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', margin: 0 }}>
          CATEGORY
        </h3>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            style={{ fontSize: 10, color: 'var(--burgundy)', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '0.05em' }}
          >
            CLEAR
          </button>
        )}
      </div>

      {Object.entries(filters).map(([group, options]) => (
        <div key={group} style={{ borderTop: '1px solid #ddd', paddingTop: 12, marginBottom: 12 }}>
          <button
            onClick={() => toggle(group)}
            aria-expanded={openGroups[group]}
            style={{
              width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              background: 'none', border: 'none', cursor: 'pointer', padding: '0 0 8px',
              fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', fontFamily: 'inherit'
            }}
          >
            {group.toUpperCase()}
            <svg
              width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              style={{ transform: openGroups[group] ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>

          <div className={`accordion-content ${openGroups[group] ? 'open' : ''}`}>
            {options.map(opt => {
              const key = group.toLowerCase();
              const checked = (activeFilters[key] || []).includes(opt);
              return (
                <label
                  key={opt}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    fontSize: 12, padding: '4px 0', cursor: 'pointer',
                    color: checked ? 'var(--burgundy)' : 'var(--black)', fontWeight: checked ? 600 : 400
                  }}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleCheck(group, opt)}
                    style={{ accentColor: 'var(--burgundy)' }}
                  />
                  {opt}
                </label>
              );
            })}
          </div>
        </div>
      ))}
    </aside>
  );
}
