// Pull quote — large display type, blue accent rule
function PullQuote({ children, attribution }) {
  return (
    <figure className="case-quote">
      <div className="case-quote-rule"></div>
      <blockquote className="case-quote-text">{children}</blockquote>
      {attribution && (
        <figcaption className="case-quote-attribution">— {attribution}</figcaption>
      )}
    </figure>
  );
}

window.PullQuote = PullQuote;
