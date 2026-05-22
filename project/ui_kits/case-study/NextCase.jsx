// Next case study — full-bleed link with block-offset hover
function NextCase({ num, title, meta, tone = 'yellow' }) {
  return (
    <a className={'case-next case-next-' + tone} href={'#case-' + num}>
      <div className="case-next-inner">
        <div className="case-next-left">
          <div className="mono-label case-next-label">Next case study</div>
          <div className="case-next-title">{title}</div>
          <div className="case-next-meta">{meta}</div>
        </div>
        <div className="case-next-right">
          <div className="mono-label case-next-num">{num}</div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="case-next-arrow">
            <path d="M7 17 17 7M9 7h8v8"/>
          </svg>
        </div>
      </div>
    </a>
  );
}

window.NextCase = NextCase;
