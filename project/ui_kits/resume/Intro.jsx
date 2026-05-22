// Hero intro — the wide-paper-margin + single column move
function Intro() {
  return (
    <section className="intro" id="cv">
      <div className="intro-grid">
        <div className="intro-label">
          <div className="mono-label">CV · 2026</div>
          <div className="intro-rule"></div>
        </div>
        <div className="intro-main">
          <h1 className="intro-title">
            Hi, I'm Gabo<span className="intro-dot">.</span>
          </h1>
          <p className="intro-lede">
            Senior product designer, product manager, and scrum master. I lead small teams that ship things that work.
          </p>
          <p className="intro-meta">Mexico City &nbsp;·&nbsp; 2018 — present &nbsp;·&nbsp; available Q3 2026</p>
          <div className="intro-cta">
            <a className="btn" href="#contact">
              Get in touch
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="13" height="13" style={{ marginLeft: 6 }}>
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
            <a className="btn btn--ghost" href="#" download>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" style={{ marginRight: 6 }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
        <aside className="intro-block" aria-hidden="true">
          <div className="intro-block-paper"></div>
        </aside>
      </div>
    </section>
  );
}

window.Intro = Intro;
