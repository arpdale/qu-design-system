# Changelog — Qu Notify Design System

Decision log — not just version history. Each entry captures *why* a decision was made, not just *what* changed.

---

## v1.3.0 — 2026-05-21

### Added `QuMark` — the recolorable brand mark component

**Promoted the inline `QuMark` SVG (previously hand-copied in the app's Splash screen) into the DS as a first-class React component.**
The brand mark exists as a static SVG asset (`assets/logo-qu.svg`), but an `<img>` of it can't be recolored — its letterforms are `fill="currentColor"`, which resolves to a fixed color inside an isolated `<img>`. The Splash screen needs white letterforms on a dark background (with the cyan stripe preserved), so it had been carrying a verbatim inline copy of the path data, with a comment anticipating exactly this promotion. That copy was a drift hazard: a logo change in the DS would not propagate to it.

`QuMark` is an inline `<svg>` (mirroring the icon component pattern — `currentColor` letterforms, `displayName`, props spread onto the root) so consumers recolor it via the `color` prop or CSS. It takes `width` and derives `height` from the fixed 52:31 aspect ratio. The top stripe stays brand cyan (`#41CCF2`) and intentionally does not recolor. Lives under `Brand/` in Storybook to keep it distinct from the 24px UI icon set, and is exported from the package root: `import { QuMark } from '@david-richard/notify-ds'`.

Minor bump: additive, non-breaking. The `assets/logo-qu.svg` and `logo-notify-lockup.svg` assets are unchanged and remain the right choice for static, default-color placements.

**Follow-up (not in this release):** no `.figma.tsx` Code Connect mapping yet — needs a Figma node for the mark to map against.

### Fixed tile typography drift

**Restored the tile type ramp to the original source design.** The synced DS had drifted on tile label/value sizes, so `MetricTile`, `StatCard`, and `StatusTile` rendered inconsistent label sizes (14 / 13 / 12px) and the wrong value size. Realigned to the canonical tile spec — top-to-bottom: **label 16 Regular · value 24 SemiBold · sub-value 14 Regular · trend 14 SemiBold**.

- `MetricTile`: label 14→16; value `md` 28→24 (size axis re-centered sm/md/lg = 20/24/30); sub-value 13→14; `TrendBadge` 13/Medium→14/SemiBold.
- `StatCard`: label 13→16; value 22/Bold→24/SemiBold.
- `StatusTile`: header 12→16 (item rows already 14 Reg / 14 SemiBold).
- Figma `MetricTile`/`StatCard`/`StatusTile` components updated to match; `screen-anatomy.md` label note corrected 12px→16px.

Note: the `TrendBadge` weight change (Medium→SemiBold) is global, so standalone `<TrendBadge>` usages also render 14/SemiBold.

---

## v1.2.0 — 2026-05-20

Release bundling three Figma↔code reconciliation changes: **Code Connect mappings**, **flat tiles**, and the **Dark mode token set** (detailed below). Minor bump: a new theming mode plus a visual change to existing tile components is more than a patch.

### Code Connect mappings added

**Parser-based Code Connect (`.figma.tsx`) for all 16 components (20 connections).**
Figma's Dev Mode and the Figma MCP previously emitted guessed markup for our components; now they resolve to the real React component + props. Mappings live beside each component (`button.figma.tsx`, etc.), variant enums map exhaustively to props, and `figma.config.json` rewrites the source path to the published `@david-richard/notify-ds` import. `*.figma.tsx` is excluded from the tsup build and tsconfig, so nothing new ships to npm. Publishing is gated by Figma plan (Organization/Enterprise + Dev/Full seat) and run via `npm run figma:publish`.

### Tiles are now flat (no resting shadow)

**Removed the resting drop shadow from `MetricTile`, `StatCard`, and `StatusTile`.**
The production dashboard tiles are flat — separation comes from the white card on the gray-50 page background, not a shadow. The interactive hover lift on clickable tiles is retained. `constraints.md` and `screen-anatomy.md` (which had asserted an always-on tile shadow) were corrected. The `component.tile.shadow` / `shadow/card` tokens remain but are now orphaned.

---

## 2026-05-20 — Dark mode tokens ported from Figma

**Dark mode is now a real, shipped mode — no longer a known gap.**
The Figma "Notify Design System" file already defined a complete Light/Dark pair on its Semantic variable collection (38 color variables, both modes populated). The code only ever exposed the Light values, so Figma and the package had drifted: the file advertised "2 modes" while `tokens.css` shipped one.

This change ports the Dark mode values **1:1 from Figma** (Figma is the source of truth here, since the design side had done the Light→Dark mapping work):
- `tokens.css` — added a `[data-theme="dark"], .dark` block redeclaring only the semantic aliases that differ from Light (surfaces → near-black, text → white, `nav-selected` inverts, borders/inactive → gray ramp). The `@theme` aliases (`--color-background`, `--color-foreground`) cascade automatically because they reference these vars.
- `tokens.json` — added `$extensions.qu.modes.dark` documenting the dark primitive references for each differing semantic token.
- `tailwind.config.js` — `darkMode: ['selector', '[data-theme="dark"]']` so consumers can use `dark:` utilities with either the class or the data-attribute strategy.

**Why only the differing aliases are redeclared:** brand, accent, and status colors (cyan CTA, teal, reds, greens) are intentionally mode-stable — they read correctly on both surfaces. Redeclaring only what changes keeps the dark block auditable and prevents primitive duplication.

**Known reconciliation gap (not addressed here):** Figma's Semantic collection (38 vars) is slimmer than the repo's semantic tier — it lacks the granular `input-*` aliases the code has (`input-bg-disabled`, `input-placeholder`, etc.), binding instead to generic equivalents (`color/border`, `color/background`). The values resolve identically; only the naming granularity differs.

---

## v1.0.0 — Initial canonical release

### Token architecture
**Three-tier model: primitives → semantic → component.**
Rationale: primitives hold raw values, semantic tokens assign meaning and enable future dark mode, component tokens encode geometry per component. No component should reference a primitive directly — it consumes semantic tokens, which in turn alias primitives. This makes global color swaps (e.g. dark mode) a semantic-tier change only.

**W3C DTCG format (`tokens.json`).**
Chose DTCG over Style Dictionary proprietary format because Style Dictionary v4 now reads DTCG natively, and it future-proofs the repo for Figma Variables interop (Figma's REST API exports in DTCG). The `{primitive.color.brand.tech-blue}` reference syntax is DTCG-compliant.

---

### Color decisions

**Primary CTA button = cyan (#40CCF2), not black.**
The app screenshots confirm this: Sign In, Refresh, Enable Face ID, Continue — all cyan. Black is the *navigation/tab selected-state* color. The confusion arose from early spec docs listing "primary button: black" which described a different button variant. The rule is: CTA = cyan, nav selected = black.

**Teal (#339FB8) as secondary, not cyan.**
Secondary buttons, outlined selectors, link text, action labels ("Fulfilment", sort links), and check numbers in Check Search all use teal. Cyan is reserved for fill states only.

**Disabled state = `opacity: 0.5` on the component, not a color token change.**
The "Continue" button on Two-Step Verification is lighter because it renders the cyan button at 50% opacity, not because it uses a different fill color. This means the disabled visual is always accurate regardless of the component's current variant. No `disabled-background` token is needed or desired.

**Cyan is never a large background fill.**
Observed consistently across all 27 app screenshots. Cyan only appears in: pill buttons, input focus borders, context selector pills, checkbox/toggle on-state, table row selection highlight. Never a card background, never a page background.

**App background = gray-50 (#F4F4F4), not white.**
Cards are white. The page behind cards is always gray-50. This creates the card-lift effect without explicit borders.

---

### Typography decisions

**Button font = Red Hat Text (secondary), not Inter.**
The Figma source components use Inter for historical reasons, but the spec calls for Red Hat Text Medium on button labels and section headers. The component library follows the spec intent. Figma components should be updated to match.

**Zilla Slab = display only.**
Only for: splash screen wordmark, H2 display headings, pull quotes. Never for UI labels, body copy, or buttons. The full weight range (Light through Bold, Regular and Italic) is included in `fonts/` because Zilla Slab is not available on Google Fonts in all weights.

**Label casing:**
- `NOTIFY`, `KITCHEN INTELLIGENCE` — ALL CAPS for product name wordmarks and section category labels only
- `Net Sales`, `Kitchen Intelligence`, `Check Search` — Title Case for page headers and section titles
- Everything else — Sentence case (`Sign in to continue`, `Enable Face ID for faster access`)

---

### Component decisions

**Inputs are always pill-shaped.**
`border-radius: 9999px`. No exceptions. Confirmed across every input in the app.

**`TabBar` vs `Switcher` — two different components, different visual treatment.**
`TabBar` (full-radius pill container, full-radius tab pills) is used for primary page-level navigation within a screen (Sales/Labor/Store/Product, Prices/Checks, Open/Closed/Reconciled). `Switcher` (8px container radius, 6px segment radius) is used for inline data filters (Day/Week/Month, Net/Gross). They look similar but serve different hierarchy levels.

**`BottomNav` only on dashboard-level screens.**
Not present on: auth screens (Sign In, Two-Step, Reset Password, Enable Face ID), or detail/drill-down screens (Net Sales, Check Search, Tills detail, Product detail). The bottom nav appears only while the user is on the main dashboard.

**`Selector` context bar is always cyan fill.**
The store and date selectors in the context bar are always `Primary / Active` state — cyan fill, black text. They are never shown in inactive or secondary style regardless of whether the filter has been modified.

**`MetricTile` — 16px radius, card shadow, never a visible border.**
Elevation is conveyed by shadow only (`0 4px 4px rgba(0,0,0,0.06)`). No `border` property. Confirmed across all dashboard screenshots.

**`TrendBadge` comparison value is always shown below the main metric value, not to the right.**
The layout is: label (top), value (large, middle), comparison value + trend badge (bottom row). This matches the tile anatomy in all dashboard screenshots.

---

### Asset decisions

**SVG icons only — no icon font.**
The Figma source uses custom stroke vectors. Lucide Icons is the specified CDN fallback (stroke weight and style are the closest match). All icons are provided as individual `.svg` files in `assets/icons/` for direct inlining.

**Fonts shipped in `fonts/` — Zilla Slab only.**
Inter and Red Hat Text are loaded from Google Fonts at runtime (`fonts.googleapis.com`). Zilla Slab is not fully available on Google Fonts (missing Medium and SemiBold weights) so the full TTF set is included in this package. Consuming apps should add the Google Fonts import from `@import` in their CSS or use `<link>` in their HTML head.

---

### What's not in v1.0.0 (known gaps)

- **Kitchen Intelligence screen** — the dark-gradient KI screen has its own visual language (72px score, day-part selector at 34px, dark surface). Not yet componentized. Token primitives exist (`primitive.gradient.ki-bg`, `primitive.color.brand.stable-blue`).
- **Chart components** — the line chart in Net Sales detail and the KI visualization are not included. Recommend Recharts or Victory Native for React Native, following the cyan/gray color scheme from screenshots.
- **Toast component** — the red error toast (fixed bottom, full-width pill) is not yet a React component. Anatomy is documented in `screen-anatomy.md`.
- **Data table component** — the tabular data in Net Sales and Store/Kitchen views is not componentized. Anatomy is documented in `screen-anatomy.md`.
