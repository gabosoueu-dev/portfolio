// Contact block — full-bleed blue ground, big type, mono details
function Contact() {
  const [copied, setCopied] = React.useState(false);
  function copy() {
    navigator.clipboard?.writeText('hello@gabo.design');
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="mono-label contact-label">04 / Contact</div>
        <h2 className="contact-title">Say hi<span className="contact-dot">.</span></h2>
        <div className="contact-grid">
          <div>
            <div className="mono-label contact-sub">Email</div>
            <button className="contact-link" onClick={copy}>
              hello@gabo.design
              <span className="contact-copy">{copied ? 'copied' : 'click to copy'}</span>
            </button>
          </div>
          <div>
            <div className="mono-label contact-sub">Elsewhere</div>
            <div className="contact-stack">
              <a className="contact-link" href="#">github.com/gabo ↗</a>
              <a className="contact-link" href="#">read.cv/gabo ↗</a>
              <a className="contact-link" href="#">linkedin.com/in/gabo ↗</a>
            </div>
          </div>
          <div>
            <div className="mono-label contact-sub">Location</div>
            <div className="contact-static">Mexico City</div>
            <div className="contact-static contact-static-dim">UTC −6 · happy to travel</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-mark">gabo<span className="brand-dot">.</span></div>
      <div className="footer-meta">
        <span>Designed and built by Gabo</span>
        <span className="dot-sep">·</span>
        <span>Last updated May 2026</span>
        <span className="dot-sep">·</span>
        <span>© 2026</span>
      </div>
    </footer>
  );
}

window.Contact = Contact;
window.Footer = Footer;
