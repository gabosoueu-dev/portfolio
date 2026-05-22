// One job entry — two-column: meta on left, role/body on right
function ExperienceItem({ years, company, role, location, body, tags = [], current = false }) {
  return (
    <article className="exp-item">
      <div className="exp-meta">
        <div className="exp-years">{years}</div>
        {current && <span className="tag" style={{ marginTop: 8 }}>Current</span>}
      </div>
      <div className="exp-main">
        <h3 className="exp-role">{role}</h3>
        <div className="exp-company">
          <span>{company}</span>
          <span className="dot-sep">·</span>
          <span>{location}</span>
        </div>
        <p className="exp-body">{body}</p>
        {tags.length > 0 && (
          <div className="exp-tags">
            {tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        )}
      </div>
    </article>
  );
}

function ExperienceList() {
  const items = [
    {
      years: '2024 — present',
      company: 'Mercado Pago',
      role: 'Product lead, onboarding & growth',
      location: 'Mexico City',
      body: 'Leading the redesign of new-user onboarding across web and mobile. Activation up 18% in two release cycles. I run a team of four designers and one researcher, embedded with engineering.',
      tags: ['Product strategy', 'Design systems', 'Research'],
      current: true,
    },
    {
      years: '2021 — 2024',
      company: 'Kavak',
      role: 'Senior product designer + scrum master',
      location: 'Mexico City',
      body: 'Owned the post-purchase experience end to end — vehicle delivery, financing, support. Doubled as scrum master for a 12-person squad. Shipped a redesigned dashboard that cut support tickets by 31%.',
      tags: ['Service design', 'Scrum', 'B2B'],
    },
    {
      years: '2019 — 2021',
      company: 'Bitso',
      role: 'Product designer',
      location: 'Mexico City',
      body: 'Designed the first version of the institutional trading dashboard. Built the company\'s component library from scratch with two engineers. Wrote the first version of the design principles still in use today.',
      tags: ['Fintech', 'Design systems', '0 → 1'],
    },
    {
      years: '2018 — 2019',
      company: 'Freelance',
      role: 'Designer for early-stage startups',
      location: 'Remote',
      body: 'Brand and product work for half a dozen seed-stage teams across LATAM. Mostly identity, marketing sites, and the first 2–3 screens of MVPs.',
      tags: ['Brand', 'Marketing sites'],
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="section-header">
        <div className="section-num">01 / Experience</div>
        <h2 className="section-title">Six years of zero-to-one product work.</h2>
      </div>
      <div className="exp-list">
        {items.map((item, i) => <ExperienceItem key={i} {...item} />)}
      </div>
    </section>
  );
}

window.ExperienceItem = ExperienceItem;
window.ExperienceList = ExperienceList;
