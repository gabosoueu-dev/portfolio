# Gabo Portfolio — Design System

A personal brand and portfolio system for **Gabo**, senior product designer / product manager / scrum master. The portfolio is a small, focused site: a **Resume / CV** page and **long‑form Project Case Studies**.

The aesthetic is **editorial, type‑first, lots of whitespace** — with **block colour** standing in for imagery. Think a designer's monograph or an exhibition booklet: confident hierarchy, generous margins, restraint, and a single bright colour doing most of the visual work.

> Tone is first‑person and casual. *"Hi, I'm Gabo. I design products."*

---

## Sources & references

This system was authored from two reference images supplied by the user:

| File | What it told us |
|---|---|
| `uploads/Screenshot 2026-05-20 at 12.18.44 pm.png` | Sunny yellow ground + royal blue / teal accents, blocky geometric forms, clear hierarchy |
| `uploads/ac24f15ab1bf207d2fe31d908a32ddc4.jpg` | Editorial book spread — cream paper, vivid sky‑blue block, ample margins |

There is **no codebase, Figma file, or existing portfolio** attached. Everything in this system is built from scratch off those two references and the user's questionnaire answers. If Gabo has an existing brand mark, fonts, or product screenshots, drop them in — I'd rather match the real thing than invent.

---

## Index — what's in this folder

```
README.md                  ← you are here
SKILL.md                   ← portable Claude skill manifest
colors_and_type.css        ← CSS variables: colours, type, spacing, radii, shadows
fonts/                     ← (Google Fonts loaded from CDN; no local TTFs yet)
assets/                    ← logo, monogram, block-colour compositions
preview/                   ← Design System tab cards (typography, colour, components…)
ui_kits/
  resume/                  ← Resume / CV page
    index.html
    Header.jsx
    Intro.jsx
    ExperienceItem.jsx
    Skills.jsx
    Footer.jsx
  case-study/              ← Long-form project case study
    index.html
    CaseHero.jsx
    MetaBlock.jsx
    LongFormSection.jsx
    PullQuote.jsx
    BlockFigure.jsx
    NextCase.jsx
```

---

## Content fundamentals

**Voice.** First person, lowercase confidence. Sentences are short. No buzzwords ("synergy," "leverage," "world‑class"). Gabo says what he does, who it was for, and what changed.

**Casing.** Body copy is sentence case. Section labels are `UPPERCASE TRACKED` in small mono. Headlines are sentence case — never Title Case, never ALL CAPS at large sizes. Numerals are tabular.

**Examples that pass:**

- "hi, I'm Gabo — I design products and run the teams that build them."
- "I led the redesign of the onboarding flow. Activation went up 18%."
- "Currently: product lead at [redacted]. Previously: design + scrum at [redacted]."
- `01 / EXPERIENCE`  ·  `02 / SELECTED WORK`  ·  `03 / CONTACT`

**Examples that fail (don't write like this):**

- ~~"As a passionate, multi‑disciplinary creative…"~~
- ~~"Spearheaded the synergistic transformation of…"~~
- ~~"Welcome to my portfolio! 🚀"~~

**Emoji.** None. Not in copy, not as bullets, not as section headers. The visual system uses geometry and colour blocks instead.

**Numbers and dates.** Always tabular. Use `2024 — present` (em dash with spaces) for ranges. Metrics are blunt: `+18% activation`, `6 month engagement`, `12 person team`.

**Punctuation.** Em dash with spaces — like this. No Oxford comma in lists of two. Single sentence at a time; paragraphs are short.

---

## Visual foundations

### Colour
A four‑colour system. **Paper**, **ink**, one **primary block colour** (royal blue), one **accent block colour** (sunny yellow), plus a thin **support** (sky blue / teal) used sparingly inside compositions, never as a UI accent.

- `--paper` `#F1ECE0` — primary background. Slightly warm off‑white, like uncoated book paper.
- `--ink` `#111318` — primary type colour. Near‑black with a hint of cool.
- `--blue` `#2B3CE0` — the workhorse block colour. Full saturation.
- `--yellow` `#F4C736` — secondary ground colour for accent pages / section dividers.
- `--sky` `#1FAFE8` — only inside block compositions.
- `--teal` `#3FC4C5` — only inside block compositions.

Backgrounds are **flat blocks of colour**. No gradients, no overlays, no images bleeding under text. When colour appears it appears **at full strength**, edge to edge, framed by paper margins.

### Type
**Inter** for everything. **JetBrains Mono** for labels, numerals, and metadata. Both are on Google Fonts and load via the `@import` at the top of `colors_and_type.css` — no local TTFs required.

Type does most of the work. Headlines are very large (96–160px on desktop). Body sits at 17–19px with generous leading (1.55–1.65). Tracking is `-0.02em` on display, `0` on body, `+0.08em` on UPPERCASE mono labels.

There is **one** display weight (medium 500). Bold is reserved. Italic is never used; if you need emphasis, change colour or weight.

> **Font choice.** Per Gabo's request, the system uses **Inter** for display and body, paired with **JetBrains Mono** for mono labels and tabular numerals. Both load from Google Fonts.

### Spacing
A 4px base scale: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256`. Section padding on desktop is 128px top/bottom, 64px on tablet, 32px on mobile. Margins inside the page grid are wide — text columns never exceed 640px.

### Layout & grid
12‑column grid, 32px gutters on desktop. Long‑form text is set in a 6–7 column measure (about 60–65 characters per line) and **left‑aligned, ragged right**. Justified text is never used.

The signature layout move: **a wide left margin of empty paper, then a single column of type, then a hard block of colour to the right or below.** The blocks are full‑bleed when used as section breaks.

### Backgrounds, blocks, imagery
There is no photography in this system. "Imagery" is **flat rectangles of blue or yellow**, sometimes overlapping or offset, sometimes containing a single short caption in mono. A case study cover is a full‑bleed blue block with a 96px title sitting on it; a section divider is a 60vh yellow block with one line of mono.

No textures, no grain, no noise overlays, no gradients. The paper colour reads as the warmth.

### Borders, radii, shadows
- **Radii:** mostly `0`. Buttons and chips use `999px` (full pill). Cards use `0`. The brand is hard‑edged.
- **Borders:** `1px solid var(--ink)` at 12% opacity for dividers between sections. Hairline rules above section labels.
- **Shadows:** none. Depth is communicated by colour blocks and whitespace, not by elevation.

### Hover & press states
- **Links** are underlined with a 1px ink rule that on hover thickens to 2px and shifts to `--blue`. Text colour does not change.
- **Buttons** (pill, ink fill, paper text): on hover swap to `--blue` fill, paper text. On press, drop opacity to 90%. No scale transforms.
- **Block colours** (case study cover tiles): on hover the block shifts 8px down‑right with a 180ms cubic bezier, revealing a thin ink‑coloured shadow block behind. This is the one "playful" move.

### Motion
Subtle, fast, never bouncy. Standard easing is `cubic-bezier(0.2, 0.8, 0.2, 1)` over 180–280ms. Page transitions are fades only. Scroll is plain — no parallax, no scroll‑hijacking. The block‑offset hover is the only spring.

### Transparency & blur
Almost never. One exception: the resume page's fixed top bar uses `backdrop-filter: blur(12px)` over an 80%‑opaque paper background, so type passing underneath softens out. No frosted modals, no glassmorphism elsewhere.

### Cards
There are no "cards" in the rounded‑shadow sense. A "card" in this system is **a paper rectangle with a thin ink rule above it and a mono label**, or **a full blue/yellow block with a 96px title**. Cards never have borders on all four sides.

---

## Iconography

**Almost no icons.** This portfolio is deliberately a no‑icon design — labels do the work icons usually do. The exceptions, all from **Lucide** (loaded from CDN), are:

- `arrow-up-right` — used on external links and "next case study"
- `arrow-down` — used once on the resume hero to indicate "scroll"
- a generic 24px hamburger / close pair for the mobile menu

Lucide was chosen because its stroke weight (1.5px) and squared‑off terminals match the geometric block aesthetic. **Heroicons would be the substitution** if Lucide became unavailable. Icons are always `currentColor`, 18 or 24px, never filled, never coloured separately from their text.

No emoji. No unicode glyphs (no ★, ⌘, →). The em dash `—` and bullet `·` are the only special characters in copy.

A flagged substitution: the **monogram logo** in `assets/logo.svg` is a clean geometric `G` built from blocks, matching the visual DNA of the reference images. If Gabo has an existing mark, drop it in and delete the generated one.

---

## Skills index

- See `SKILL.md` for the Claude / Claude Code skill manifest.
- See `preview/` for the cards that populate the Design System tab.
- See `ui_kits/` for the two product surfaces (Resume, Case Study).
