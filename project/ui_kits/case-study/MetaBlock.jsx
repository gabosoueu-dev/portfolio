// Project meta — small grid below the hero
function MetaBlock({ rows = [] }) {
  return (
    <section className="case-meta">
      <div className="case-meta-grid">
        {rows.map((r) => (
          <div key={r.label} className="case-meta-item">
            <div className="mono-label">{r.label}</div>
            <div className="case-meta-value">{r.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.MetaBlock = MetaBlock;
