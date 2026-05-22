// Full-bleed block cover for a case study
function CaseHero({ num = '01', tone = 'blue', client, title, year, role }) {
  return (
    <header className={'case-hero case-hero-' + tone} data-screen-label="Case study">
      <div className="case-hero-inner">
        <div className="case-hero-top">
          <div className="mono-label case-hero-num">{num} / Case study</div>
          <div className="mono-label case-hero-year">{year}</div>
        </div>
        <div className="case-hero-bottom">
          <div className="case-hero-client">{client}</div>
          <h1 className="case-hero-title">{title}</h1>
          <div className="mono-label case-hero-role">{role}</div>
        </div>
        <div className="case-hero-shape" aria-hidden="true"></div>
      </div>
    </header>
  );
}

window.CaseHero = CaseHero;
