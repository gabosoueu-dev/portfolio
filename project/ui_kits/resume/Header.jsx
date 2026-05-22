// Top navigation bar — paper, blurred, mono links
function Header({ active = 'cv' }) {
  const items = [
    { key: 'work', label: 'Work', href: '#work' },
    { key: 'cv', label: 'CV', href: '#cv' },
    { key: 'writing', label: 'Writing', href: '#writing' },
    { key: 'contact', label: 'Contact', href: '#contact' },
  ];
  return (
    <nav className="site-nav">
      <a className="brand" href="#">
        gabo<span className="brand-dot">.</span>
      </a>
      <div className="nav-links">
        {items.map(i => (
          <a key={i.key} href={i.href} className={'nav-link' + (active === i.key ? ' is-active' : '')}>
            {i.label}
          </a>
        ))}
      </div>
      <a className="nav-cta" href="mailto:hello@gabo.design">
        Email me
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="11" height="11" style={{ marginLeft: 6 }}>
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      </a>
    </nav>
  );
}

window.Header = Header;
