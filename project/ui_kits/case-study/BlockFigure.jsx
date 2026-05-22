// "Image" placeholder — a colour block with a caption.
// The portfolio's imagery is all block colour, not photos.
function BlockFigure({ tone = 'blue', height = 480, caption, label, layout = 'simple' }) {
  return (
    <figure className={'case-figure case-figure-' + layout}>
      <div
        className={'case-figure-block case-figure-' + tone}
        style={{ height }}
      >
        {layout === 'paper-offset' && <div className="case-figure-paper"></div>}
        {layout === 'inset-yellow' && <div className="case-figure-inset case-figure-inset-yellow"></div>}
        {layout === 'inset-ink'    && <div className="case-figure-inset case-figure-inset-ink"></div>}
        {layout === 'inset-sky'    && <div className="case-figure-inset case-figure-inset-sky"></div>}
        {label && <div className="mono-label case-figure-label">{label}</div>}
      </div>
      {caption && <figcaption className="case-figure-caption">{caption}</figcaption>}
    </figure>
  );
}

// Two block figures side by side
function FigureRow({ left, right }) {
  return <div className="case-figure-row">{left}{right}</div>;
}

window.BlockFigure = BlockFigure;
window.FigureRow = FigureRow;
