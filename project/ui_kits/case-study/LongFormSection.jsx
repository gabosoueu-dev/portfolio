// Standard long-form section — numbered label + h2 + body column
function LongFormSection({ num, label, title, children, id }) {
  return (
    <section className="case-section" id={id}>
      <div className="case-section-header">
        <div className="mono-label case-section-num">{num} / {label}</div>
        <h2 className="case-section-title">{title}</h2>
      </div>
      <div className="case-section-body">{children}</div>
    </section>
  );
}

// A paragraph with the system's reading-measure cap
function P({ children, lede = false }) {
  return <p className={lede ? 'case-p case-p-lede' : 'case-p'}>{children}</p>;
}

// Stats row — 3 big numbers
function StatRow({ stats = [] }) {
  return (
    <div className="case-stats">
      {stats.map((s, i) => (
        <div key={i} className="case-stat">
          <div className="case-stat-num">{s.num}</div>
          <div className="mono-label case-stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

window.LongFormSection = LongFormSection;
window.P = P;
window.StatRow = StatRow;
