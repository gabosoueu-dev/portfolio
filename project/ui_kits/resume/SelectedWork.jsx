// Selected work tiles — case-study previews with block-offset hover
function WorkTile({ num, title, meta, tone = 'blue' }) {
  return (
    <a className="work-tile" href={'#case-' + num}>
      <div className="work-tile-shadow"></div>
      <div className={'work-tile-block work-tile-' + tone}>
        <div className="mono-label work-tile-num">{num} / Case</div>
        <div>
          <div className="work-tile-title">{title}</div>
          <div className="work-tile-meta">{meta}</div>
        </div>
      </div>
    </a>
  );
}

function SelectedWork() {
  const cases = [
    { num: '01', title: 'Onboarding rebuild', meta: '+18% activation · 2024', tone: 'blue' },
    { num: '02', title: 'Design system v2', meta: '9 teams · 2023', tone: 'yellow' },
    { num: '03', title: 'Scrum from scratch', meta: '12 person squad · 2022', tone: 'ink' },
    { num: '04', title: 'Institutional dashboard', meta: '0 → 1 · 2020', tone: 'sky' },
  ];
  return (
    <section className="selected-work" id="work">
      <div className="section-header">
        <div className="section-num">02 / Selected work</div>
        <h2 className="section-title">A handful of things I'm proud of.</h2>
      </div>
      <div className="work-grid">
        {cases.map(c => <WorkTile key={c.num} {...c} />)}
      </div>
    </section>
  );
}

window.SelectedWork = SelectedWork;
window.WorkTile = WorkTile;
