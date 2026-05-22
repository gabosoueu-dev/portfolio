---
name: gabo-design
description: Use this skill to generate well-branded interfaces and assets for Gabo's personal portfolio, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# Gabo Portfolio — design skill

Read `README.md` first — it has the full content fundamentals, visual foundations, iconography, and folder index. Then explore the other files as needed.

## What's in here

- `README.md` — the brand brief and folder map
- `colors_and_type.css` — all design tokens (colours, type, spacing, radii, motion) as CSS variables
- `assets/` — logo, wordmark, block-colour compositions (SVG)
- `preview/` — small specimen cards for each token / component (good reference when you're not sure what something should look like)
- `ui_kits/resume/` — the Resume / CV page, with `index.html` + `*.jsx` components
- `ui_kits/case-study/` — the long-form case study layout, same shape

## Usage

If you're producing visual artifacts (slides, mocks, throwaway prototypes), **copy the assets and CSS out** of this folder into the artifact and reference them by relative path. Each UI kit's `index.html` is the right starting point if you want a full-page surface; pull out individual `.jsx` files if you only need one component.

If you're working in production code, the tokens in `colors_and_type.css` are the source of truth — translate them into your framework's token system rather than reinventing the values.

When the user invokes this skill without other guidance, ask what they want to build, ask follow-up questions, and act as an expert designer who outputs HTML artifacts **or** production code depending on the need.

## Non-negotiables

- **No emoji. No gradients. No drop shadows.** Depth comes from whitespace and full-bleed colour blocks.
- **One display font** (Inter Medium) at sizes from 24px up to 160px. **One mono** (JetBrains Mono) for labels, meta, and tabular numbers. Never italic.
- **Imagery is colour blocks** (`<BlockFigure>` in the case-study kit). If real product imagery is requested, ask for it — don't invent SVG screenshots.
- **First-person, lowercase, blunt copy.** "hi, I'm Gabo." No buzzwords, no Title Case headlines.
- **Radii are 0 or 999** — sharp rectangles or full pills, nothing in between.
- **The one playful move** is the block-offset hover (8px translate, no scale). Use it sparingly.

## Fonts

The system uses **Inter** for display/body and **JetBrains Mono** for labels. Both load from Google Fonts via the `@import` at the top of `colors_and_type.css`. No local TTFs required.
