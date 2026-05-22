// Skills section — three columns of tag clusters
function Skills() {
  const groups = [
    { title: 'Product', items: ['Discovery', 'Product strategy', 'Roadmapping', 'OKRs', 'Research', 'Analytics'] },
    { title: 'Design', items: ['Interaction design', 'Visual design', 'Design systems', 'Prototyping', 'Service design'] },
    { title: 'Delivery', items: ['Scrum', 'Kanban', 'Backlog grooming', 'Stakeholder mgmt', 'Hiring', 'Mentoring'] },
  ];
  return (
    <section className="skills" id="skills">
      <div className="section-header">
        <div className="section-num">03 / Skills</div>
        <h2 className="section-title">What I do.</h2>
      </div>
      <div className="skills-grid">
        {groups.map(g => (
          <div key={g.title} className="skills-group">
            <div className="skills-group-title">{g.title}</div>
            <div className="skills-tags">
              {g.items.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.Skills = Skills;
