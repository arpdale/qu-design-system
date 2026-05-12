# notify-ds

Design system for **Qu Notify** — the restaurant analytics mobile app by [Qu](https://qubeyond.com). Contains tokens, components, fonts, icons, screenshots, and brand assets.

**For AI design agents:** Read `constraints.md` first, then `screen-anatomy.md`, then come back here for the API surface. Those two files are load-bearing.

---

## What's in this repo

```
notify-ds/
├── tokens.json          ← W3C DTCG format. Single source of truth for all values.
├── tokens.css           ← CSS custom properties. Import this in any HTML/CSS project.
├── tailwind.config.js   ← Tailwind v3 preset. Use as a preset in consuming projects.
├── constraints.md       ← Hard never/always rules. Read before building any UI.
├── screen-anatomy.md    ← Every screen decomposed spatially. Read before building any screen.
├── CHANGELOG.md         ← Decision log — why things are the way they are.
├── components/          ← React/TypeScript components
│   ├── index.ts         ← Barrel export (single import surface)
│   ├── button.tsx
│   ├── input.tsx
│   ├── checkbox.tsx
│   ├── radio.tsx
│   ├── toggle.tsx
│   ├── selector.tsx
│   ├── tabs.tsx
│   ├── switcher.tsx
│   ├── bottom-nav.tsx
│   ├── badge.tsx
│   └── metric-tile.tsx
├── assets/
│   ├── logo-notify-lockup.svg
│   ├── logo-qu.svg
│   ├── logo-q-mark.svg
│   └── icons/           ← SVG stroke icons, one file per icon
├── fonts/               ← Zilla Slab TTF (all weights). Inter + Red Hat Text via Google Fonts.
└── screenshots/         ← 27 production app screenshots, named descriptively
```

---

## Product context

**Qu Notify** is an iOS-first mobile app used by restaurant franchisees, group managers, and store managers to monitor real-time sales, labor, and kitchen performance. It is checked multiple times daily — it is a utility, not an experience. Clarity and data density take priority over decoration.

**Primary screens:** Splash → Sign In → Dashboard (Sales/Labor/Store/Product tabs) → Metric detail → Menu overlay → Check Search → Tills → Kitchen Intelligence

**Users:** Franchisees, group managers, store managers

**Data shown:** Net Sales, Checks, Average Check, Payments, Gross Sales, Discounts, Cash, Tills (Open/Closed/Reconciled), Voids, Service Charges, Labor, Speed of Service, Kitchen fulfillment times

---

## Quick start

### As a Tailwind preset

```js
// tailwind.config.js
const notifyPreset = require('notify-ds/tailwind')
module.exports = {
  presets: [notifyPreset],
  content: ['./src/**/*.{ts,tsx,html}'],
}
```

### CSS custom properties

```css
/* In your global CSS */
@import 'notify-ds/tokens.css';
```

### React components

```tsx
import { Button, MetricTile, TabBar, InputField } from 'notify-ds/components'

// Dashboard tile
<MetricTile label="Net Sales" value="$345.58" trend={11.8} trendLabel="vs yesterday" />

// Primary CTA
<Button variant="primary" size="lg">Sign In</Button>

// Tab bar
<TabBar tabs={["Sales", "Labor", "Store", "Product"]} value={tab} onValueChange={setTab} />
```

### Tokens (raw JSON)

```js
const tokens = require('notify-ds/tokens')
const techBlue = tokens.primitive.color.brand['tech-blue'].$value // "#40CCF2"
```

### Inline SVG icons

```html
<!-- Direct reference -->
<img src="node_modules/notify-ds/assets/icons/search.svg" />

<!-- Or import and inline (recommended) -->
import SearchIcon from 'notify-ds/assets/icons/search.svg'
```

---

## Design fundamentals

### Colors (key values)

| Token | Value | Usage |
|---|---|---|
| `primitive.color.brand.tech-blue` | `#40CCF2` | Primary CTA buttons, input focus border, context selectors, checkbox on-state, toggle on-state |
| `primitive.color.brand.teal` | `#339FB8` | Secondary button outline/text, link text, action labels, check numbers |
| `primitive.color.neutral.black` | `#000000` | Primary text, **tab/nav selected fill** |
| `primitive.color.neutral.white` | `#FFFFFF` | Card backgrounds, text on dark fills |
| `primitive.color.neutral.gray-50` | `#F4F4F4` | App screen background (never white at page level) |
| `primitive.color.neutral.gray-100` | `#DEDEDE` | Tab bar container, switcher container, inactive button bg |
| `primitive.color.brand.red` | `#EF2149` | Error borders, error text, required asterisk, toast bg |

**Critical:** `#40CCF2` (cyan) is the CTA button color. `#000000` (black) is the selected tab/nav color. These are separate roles and must not be swapped.

### Typography

| Family | Role | Usage |
|---|---|---|
| **Inter** | Primary | Body text, data labels, metric values, captions |
| **Red Hat Text** | Secondary | Page headers, input labels, button labels, section titles |
| **Zilla Slab** | Display | Splash screen, H2 display headings, pull quotes only |

Google Fonts import:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Red+Hat+Text:wght@400;500;600;700&family=Red+Hat+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Zilla Slab TTF files are in `fonts/` for local use.

### Shapes

- **Inputs:** Always `border-radius: 9999px` (full pill). No exceptions.
- **Buttons:** Always `border-radius: 9999px` (full pill). No exceptions.
- **Metric tiles:** `border-radius: 16px`
- **Modals:** `border-radius: 24px`
- **Bottom nav:** `border-radius: 60px`
- **Tab bar container:** `border-radius: 9999px`
- **Switcher container:** `border-radius: 8px` (not pill — this distinguishes it from TabBar)

### Disabled states

Always `opacity: 0.5` on the entire component. Never a color swap. The component's current fill/stroke colors remain intact underneath the opacity reduction.

---

## Component API

### Button

```tsx
<Button
  variant="primary"    // primary | secondary | tertiary | link
  size="md"            // xsm | sm | md | lg
  state="active"       // active | inactive
  iconOnly={false}
  disabled={false}
>
  Sign In
</Button>

<IconButton variant="primary" size="md"><SearchIcon /></IconButton>
```

### InputField

```tsx
<InputField
  type="default"         // default | password | search
  label="Username"
  required
  placeholder="you@example.com"
  state="normal"         // normal | active | filled | error | disabled | readonly
  errorMessage="Invalid email"
  helperText="We'll never share your email"
/>
```

### Checkbox / Radio / Toggle

```tsx
<Checkbox label="Remember me" defaultChecked />
<Checkbox label="Select all" indeterminate />

<RadioGroup name="period" value={val} onChange={setVal} label="Time period">
  <Radio value="day"   label="Day" />
  <Radio value="week"  label="Week" />
  <Radio value="month" label="Month" />
</RadioGroup>

<Toggle label="Enable notifications" checked={on} onChange={setOn} />
```

### Selector

```tsx
<Selector label="All Stores" variant="primary" state="active" open={isOpen} />
<Selector label="This Week"  variant="secondary" state="active" />
<SelectorGroup>
  <Selector label="StoreName" icon={<StoreIcon />} />
  <Selector label="01/06/26"  icon={<CalendarIcon />} />
</SelectorGroup>
```

### TabBar

```tsx
<TabBar
  tabs={["Sales", "Labor", "Store", "Product"]}
  value={activeTab}
  onValueChange={setActiveTab}
/>
// With content panels:
<TabPanels value={activeTab}>
  <TabPanel value="Sales"><SalesView /></TabPanel>
  <TabPanel value="Labor"><LaborView /></TabPanel>
</TabPanels>
```

### Switcher

```tsx
<Switcher
  segments={["Day", "Week", "Month"]}
  defaultValue="Week"
  onValueChange={setPeriod}
/>
// With icon segments:
<Switcher segments={[{value:"list", label:"List", icon:<ListIcon/>}, ...]} />
```

### BottomNav

```tsx
<BottomNavContainer>
  <BottomNav
    items={[
      { value: "dashboard", label: "Dashboard", icon: <DashboardIcon /> },
      { value: "inventory", label: "Inventory", icon: <BoxIcon />, badge: 3 },
      { value: "menu",      label: "Menu",      icon: <MenuIcon /> },
    ]}
    value={activeRoute}
    onValueChange={(v) => router.push(v)}
  />
</BottomNavContainer>
```

`BottomNavContainer` positions the nav as `fixed bottom-6 left-1/2 -translate-x-1/2`.

### MetricTile

```tsx
<MetricTile
  label="Net Sales"
  value="$345.58"
  trend={11.8}
  trendLabel="vs yesterday"
/>

<MetricTileGrid cols={2}>
  <MetricTile label="Net Sales"   value="$345.58" trend={11.8} />
  <MetricTile label="Checks"      value="11"      trend={18.1} />
  <MetricTile label="Avg Check"   value="$33.86"  trend={7.7} />
  <MetricTile label="Gross Sales" value="$368.40" trend={11.4} />
</MetricTileGrid>

// Loading state:
<MetricTile label="Net Sales" value="" trend={0} loading />
```

### Badge / TrendBadge

```tsx
<Badge variant="success">Open</Badge>
<Badge variant="error">Closed</Badge>
<Badge variant="brand">NEW</Badge>

// Auto-picks color from sign:
<TrendBadge value={11.8} />    // → green "+11.8%"
<TrendBadge value={-5.6} />   // → red "−5.6%"
```

---

## Screenshots

27 production screenshots in `screenshots/`. Key ones for design reference:

| File | Shows |
|---|---|
| `sales-dashboard.png` | Full dashboard, metric tile grid, context bar, tab bar, bottom nav |
| `sign-in.png` | Auth screen, input field states, primary button, "Powered by" footer |
| `menu-overlay.png` | Bottom sheet, dark scrim, menu structure, "NEW" badge |
| `net-sales.png` | Detail screen, line chart, selected table row, back navigation |
| `check-search.png` | Check cards, teal check numbers, section headers |
| `dashboard-store-kitchen.png` | Nested tab bars, data table, teal action link |
| `open-tills.png` | Empty state pattern, 3-tab bar |
| `enable-face-id.png` | Modal overlay pattern |
| `loading.png` | Splash screen, brand illustration treatment |
| `dashboard-loading-error-with-toast.png` | Error state, toast pattern |

---

## Voice & copy

- **Direct and factual.** No marketing copy in UI. "Net Sales" not "Your earnings today."
- **Metric-first.** Lead with the number; context follows.
- **Sentence case** for all UI copy. ALL CAPS only for `NOTIFY` wordmark and section category labels (`KITCHEN`, `NETWORK`).
- **No emoji. Ever.**
- **Present tense** for states: "Sign in to continue", "No Tills Found", "Something Went Wrong".
- **Button labels are definitive:** "Sign In", "Refresh", "Enable Face ID" — no ellipsis, no "ing" forms.
- **Error toast copy (production):** "Ooops, we are having problems"

---

## Known gaps (v1.0.0)

- Toast component (anatomy in `screen-anatomy.md`)
- Data table component (anatomy in `screen-anatomy.md`)
- Kitchen Intelligence screen components (dark surface, 72px score, day-part switcher)
- Chart components (recommend Recharts with cyan/gray color scheme)
- Dark mode token set
