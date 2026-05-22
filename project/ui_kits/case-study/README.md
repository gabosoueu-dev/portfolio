# Case study — UI kit

The long-form layout for an individual project. A full-bleed coloured hero, a tight meta block, then a sequence of numbered long-form sections separated by colour-block figures.

## Files

| File | Role |
|---|---|
| `index.html` | Page shell, all styles, sample case wired up |
| `CaseHero.jsx` | Full-bleed coloured hero with client / title / year |
| `MetaBlock.jsx` | Four-column meta strip (role, team, duration, outcome) |
| `LongFormSection.jsx` | Numbered section pattern + `<P>` paragraph + `<StatRow>` |
| `PullQuote.jsx` | Display-sized quote with blue accent rule |
| `BlockFigure.jsx` | Colour-block placeholder "image" + `<FigureRow>` for side-by-side |
| `NextCase.jsx` | Full-bleed next-study link with arrow that moves up-right on hover |

## Patterns the kit assumes

- A case is **one full-bleed coloured hero**, then **paper sections** with a 220px sticky label column on the left and a 640px text measure on the right.
- "Imagery" is a `<BlockFigure>`. Layouts: `simple`, `paper-offset`, `inset-yellow`, `inset-ink`, `inset-sky`. Mix freely; never include real photography.
- A case has at most **one `<PullQuote>` per section** and rarely more than two per case.
- Stat rows belong to the Context or Outcome sections, not Design.
- The last block is always `<NextCase>`.

## What's faked

- Hero shape is decorative — no real product screenshots.
- The "next case" link goes to an anchor.
