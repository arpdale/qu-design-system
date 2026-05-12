# Changelog — Qu Notify Design System

Decision log — not just version history. Each entry captures *why* a decision was made, not just *what* changed.

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
- **Dark mode tokens** — semantic tier is structured to support a `dark` mode token set, but no dark-mode values are defined yet. Kitchen Intelligence is the only current dark surface.
