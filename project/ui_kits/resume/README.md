# Resume / CV — UI kit

The CV page is the front door of the portfolio. A single scrollable page with a sticky blurred-paper nav, a wide-margin intro, three content sections (experience, selected work, skills), and a full-bleed blue contact block to close.

## Files

| File | Role |
|---|---|
| `index.html` | Page shell, all styles, React mount |
| `Header.jsx` | Sticky top nav, brand mark, mono links, pill CTA |
| `Intro.jsx` | Hero: name, role, lede, meta line, primary + ghost CTAs, side block |
| `ExperienceItem.jsx` | One job entry + the `ExperienceList` that owns the data |
| `SelectedWork.jsx` | 4-up grid of case tiles with the block-offset hover |
| `Skills.jsx` | 3-column tag clusters |
| `Footer.jsx` | The full-bleed blue contact block + ink-coloured footer |

## How to extend it

- Job entries are objects in `ExperienceList` — add an item to the array.
- Case tiles use the `tone` prop (`blue` / `yellow` / `ink` / `sky`) to pick a block colour.
- Skill clusters live in `Skills.jsx` under `groups`.
- The full-bleed blue contact section has its own colour rules — links go yellow on hover (the one place yellow is used as an accent inside type).

## Behaviour that's faked

- "Click to copy" on the email works in real browsers.
- The download PDF button doesn't have a real PDF behind it.
- All other links go to `#` anchors.
