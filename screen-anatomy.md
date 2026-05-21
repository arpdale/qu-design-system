# Qu Notify — Screen Anatomy

Spatial composition of every major screen. Each entry describes regions (top → bottom), components in each region, layout rules, and copy patterns. Intended as a blueprint — read this before building any new screen.

Screenshots live in `/screenshots/`. Filenames are referenced inline.

---

## Global Layout Shell (all authenticated screens)

```
┌─────────────────────────────────────┐
│  STATUS BAR (iOS system)            │  h: ~44px, system-rendered
├─────────────────────────────────────┤
│  APP HEADER                         │  h: 56px, white bg
│  [QU NOTIFY lockup]    [Bell icon]  │
├─────────────────────────────────────┤
│  CONTEXT BAR                        │  h: 48px, white bg
│  [Store Selector] • [Date Selector] │  both cyan pills, bullet separator
├─────────────────────────────────────┤
│                                     │
│  PAGE CONTENT                       │  flex-1, gray-50 (#F4F4F4) bg
│                                     │
├─────────────────────────────────────┤
│  BOTTOM NAV (dashboard screens only)│  floating glass pill, h: 72px
│  [Dashboard] [Inventory] [Menu]     │  fixed, bottom: 24px, centered
└─────────────────────────────────────┘
```

**App Header:**
- Left: QU NOTIFY logo lockup (Q-mark + NOTIFY wordmark). See `assets/logo-notify-lockup.svg`.
- Right: Bell icon (24px). Red dot badge when notifications exist.
- Background: white. No border — the context bar below creates visual separation.

**Context Bar:**
- Two `Selector` components (Primary variant, Active state).
- Left: Store selector with store icon. Label shows store name or "StoreName" / "13 Stores".
- Right: Date selector with calendar icon. Label shows formatted date (e.g. "01/06/26").
- Separated by a bullet `•` character in gray, vertically centered.
- Both selectors are cyan fill. This is the only place cyan appears as a persistent element.

---

## Authentication Screens

### Splash / Loading Screen
`screenshots/loading.png`

Full-bleed illustrated screen shown on app launch.

```
┌─────────────────────────────────────┐
│  STATUS BAR (white text, dark bg)   │
├─────────────────────────────────────┤
│                                     │
│  ILLUSTRATION FIELD                 │  black background
│  Food line-art scattered            │  brand-red + white + cyan stroke
│  (burger, hotdog, donut, etc.)      │
│                                     │
│  ┌──────────────────────────────┐   │
│  │  BRAND CARD (brand-red bg)   │   │  centered, tilted ~5°
│  │  [cyan burger illustration]  │   │
│  └──────────────────────────────┘   │
│                                     │
│  [Qi NOTIFY wordmark]               │  white, centered
│                                     │
├─────────────────────────────────────┤
│  Version 3.6.222-build. 1483        │  gray, centered, 12px
└─────────────────────────────────────┘
```

Copy: none (wordmark only). No buttons.

---

### Sign In
`screenshots/sign-in.png`, `screenshots/sign-in-empty.png`

```
┌─────────────────────────────────────┐
│  STATUS BAR                         │
├─────────────────────────────────────┤
│  "Sign In to"                       │  Inter Regular 18px, left
│  [QU NOTIFY logo — full lockup]     │  large, left-aligned
│                                     │  ~48px height
├─────────────────────────────────────┤
│  "Sign in to continue"              │  gray caption, left
│                                     │
│  USERNAME* label                    │  Red Hat Text Medium 18px
│  [pill input — default/filled]      │  full width
│                                     │
│  PASSWORD* label                    │
│  [pill input — password + eye icon] │  active = cyan border
│                                     │
│  [Forgot Password?]                 │  teal link text, right-aligned
│                                     │
│  *Required Fields                   │  gray 12px, left
│                                     │
│  [Sign In]                          │  cyan pill button, centered
│                                     │
│  (spacer — flexible)                │
│                                     │
│  "Powered by" + QU mark             │  gray, centered, 12px
│  Version 3.6.222-build. 1483        │  gray, centered, 12px
└─────────────────────────────────────┘
```

Copy patterns:
- Heading: "Sign In to" (sentence case) + large logo
- Helper: "Sign in to continue"
- Button: "Sign In"
- Link: "Forgot Password?"
- Footer: "Powered by" + wordmark + version

---

### Two-Step Verification
`screenshots/two-step-verification.png`

```
┌─────────────────────────────────────┐
│  STATUS BAR                         │
├─────────────────────────────────────┤
│  < Back to sign in                  │  teal link, left, with chevron
├─────────────────────────────────────┤
│  "Two Step Verification"            │  Inter Bold ~26px, left
│                                     │
│  [body copy — 2 lines]              │  gray, 16px
│  "Enter the 6-digit security code   │
│   from your authenticator app"      │
│                                     │
│  CODE* label                        │
│  [pill input — number, empty]       │
│                                     │
│  *Required Field                    │  gray 12px
│                                     │
│  [Continue]                         │  cyan pill, centered
│                                     │  (lighter = disabled when empty)
│                                     │
│  "Having trouble signing in?        │  gray, centered
│   Contact Support"                  │  "Contact Support" = teal link
│                                     │
│  (spacer)                           │
│                                     │
│  "Powered by" + QU + version        │
└─────────────────────────────────────┘
```

---

### Reset Password / Choose New Password
`screenshots/reset-password.png`, `screenshots/choose-new-password.png`, `screenshots/choose-new-password-with-toast.png`

Same structural template as Sign In. Differences:
- Heading: "Reset Password" or "Choose New Password"
- Single or two password inputs (new + confirm)
- Toast variant shows a green or red pill at bottom on success/error

---

### Enable Face ID (Modal)
`screenshots/enable-face-id.png`

Appears as an overlay on top of the Sign In screen (blurred behind).

```
┌─────────────────────────────────────┐
│  SCRIM (rgba(8,8,8,0.8))            │  full screen behind modal
│                                     │
│    ┌───────────────────────────┐    │
│    │  MODAL CARD               │    │  white, border-radius: 24px
│    │                           │    │  centered horizontally + vertically
│    │  [Face ID icon]           │    │  ~48px, centered
│    │                           │    │
│    │  "Enable Face ID"         │    │  Inter Bold 20px, centered
│    │                           │    │
│    │  [body copy]              │    │  gray 14px, centered, 2 lines
│    │  "Enable Face ID for      │    │
│    │   faster, more secure     │    │
│    │   access to Notify."      │    │
│    │                           │    │
│    │  [Enable Face ID]         │    │  cyan pill button, full width
│    │                           │    │
│    │  [Do it later]            │    │  teal underline link, centered
│    └───────────────────────────┘    │
│                                     │
└─────────────────────────────────────┘
```

---

## Dashboard Screen

### Sales Tab (primary view)
`screenshots/sales-dashboard.png`

```
[Global Shell: Header + Context Bar]
├─────────────────────────────────────┤
│  TAB BAR                            │  h: ~40px
│  [Sales] [Labor] [Store] [Product]  │  4 tabs, Sales selected (black pill)
│                                     │  gray-100 container pill
├─────────────────────────────────────┤
│  METRIC TILE GRID                   │  2 columns, 12px gap, 16px h-padding
│                                     │
│  [Net Sales tile]  [Checks tile]    │  white card, 16px radius, flat (no shadow)
│  $345.58           11               │  label 16px gray, value 24px semibold
│  $304.78 ↑+11.8%   9 ↑+18.1%       │  comparison + TrendBadge
│                                     │
│  [Payments tile]   [Avg Check tile] │
│  [Gross Sales]     [Discounts]      │
│  [Cash]            [Tills tile]     │  Tills has text list: Open/Closed/Reconciled
│  [Voids]           [Svc Charges]    │
│                                     │
│  (scrollable)                       │
├─────────────────────────────────────┤
│  [BOTTOM NAV]                       │  Dashboard selected
└─────────────────────────────────────┘
```

Tile anatomy (standard):
```
┌──────────────────────┐
│ Label text      >    │  label: Inter Regular 12px, gray; chevron: gray
│                      │
│ $345.58              │  value: Inter SemiBold 24px, black
│                      │
│ $304.78  ↑ +11.8%    │  comparison: 12px gray; TrendBadge: green/red pill
└──────────────────────┘
```

Tills tile (special — no single value, shows status list):
```
│ Tills           >    │
│                      │
│ Open: 0              │  Inter Regular 14px, black
│ Closed: 1            │
│ Reconciled: 0        │
```

---

### Store Tab — Kitchen sub-tab (table view)
`screenshots/dashboard-store-kitchen.png`

```
[Global Shell]
├─────────────────────────────────────┤
│  PRIMARY TAB BAR                    │  Store selected
│  [Sales] [Labor] [Store] [Product]  │
├─────────────────────────────────────┤
│  SECONDARY TAB BAR                  │  h: ~40px
│  [Productivity] [Network] [Kitchen] │  Kitchen selected (black pill)
├─────────────────────────────────────┤
│  SUB-SECTION FILTER                 │  right-aligned
│  "Fulfilment"                       │  teal text, 14px
├─────────────────────────────────────┤
│  TABLE HEADER                       │  Inter Medium 14px, gray
│  Store ↓          Avg Time  Orders  │  Sort indicator on active column
├─────────────────────────────────────┤
│  TABLE ROWS                         │  divider between rows
│  Store Name  >    00:00:00  0       │  row: 48px min-height
│  Store Name  >    00:02:29  16      │  chevron on left of data cols
│  ...                                │
└─────────────────────────────────────┘
```

Two nested tab bars is a real pattern in this app — primary (Sales/Labor/Store/Product) + secondary (Productivity/Network/Kitchen). Secondary bar is same pill pattern, smaller font, but still same black-selected / gray-100-container style.

---

### Loading / Error State
`screenshots/dashboard-loading-error.png`, `screenshots/dashboard-loading-error-with-toast.png`

Replaces the metric grid:
```
├─────────────────────────────────────┤
│                                     │
│        (vertical center)            │
│                                     │
│   [Info circle icon — cyan]         │  32px, centered
│                                     │
│   Something Went Wrong              │  Inter Regular 16px, gray, centered
│   Try Refreshing                    │
│                                     │
│   [Refresh]                         │  cyan pill button, centered
│                                     │
└─────────────────────────────────────┘
```

Toast (error only) — fixed at bottom above safe area:
```
┌─────────────────────────────────────┐
│  Ooops, we are having problems      │  brand-red bg, white text, 16px
│                                     │  full-width pill, h: ~52px
└─────────────────────────────────────┘
```

---

## Detail / Drill-Down Screens

### Metric Detail (e.g. Net Sales)
`screenshots/net-sales.png`

```
[Status Bar]
├─────────────────────────────────────┤
│  <           Net Sales              │  back chevron left, centered title
│                                     │  Inter Medium 17px
├─────────────────────────────────────┤
│  [Context Bar — store + date]       │
├─────────────────────────────────────┤
│  CHART SECTION                      │  white card
│                                     │
│  "Net Sales by hour"                │  Inter Bold 16px, centered
│  [export icon]                      │  right-aligned, teal
│                                     │
│  [Legend]                           │
│  ● Today (cyan)  ● Previous Day (gray)
│                                     │
│  [Line chart]                       │  cyan line = today, gray = previous
│  Y: $0–$1,500  X: 12AM–12AM        │
│                                     │
├─────────────────────────────────────┤
│  DATA TABLE                         │
│                                     │
│  Hour      Today   Previous Day  %  │  header row
│  ───────────────────────────────    │
│  12am–1am  $0.00   $0.00        0.0 │  normal row
│  12am–1am  $0.00   $0.00        0.0 │  SELECTED ROW: cyan bg, black text
│  12am–1am  $0.00   $0.00        0.0 │
│  ...                                │  (scrollable)
└─────────────────────────────────────┘
```

No bottom nav on this screen.

---

### Check Search
`screenshots/check-search.png`

```
[Status Bar]
├─────────────────────────────────────┤
│  <           Check Search           │  back + centered title
├─────────────────────────────────────┤
│  TOTALS SECTION                     │
│  "Totals"        [Filters icon]     │  section label + teal action
│                                     │
│  [Check Count tile] [Net Sales tile]│  2-col, white cards, 16px radius
│  8,013              $88,984         │
│                                     │
├─────────────────────────────────────┤
│  CHECKS SECTION                     │
│  "Checks"        [Share icon]       │  section label + teal action
│                                     │
│  CHECK CARD ─────────────────────   │  white card, 16px radius
│  [receipt icon] 20149 >  04/20 10:49│  check#: teal bold; timestamp: gray
│  📍 Rosa's Cafe 28                  │
│  👤 Castaneda, Alexis               │
│                                     │
│  OC: In Store      OC: Drive Thru   │  inline labels, gray
│                                     │
│  Net Sales          $11.15          │  label left, value right, bold
│  Discounts          $0.00           │
│  Refunds            $0.00           │
│  Removed Items      —               │
│  Returned Items     0               │
│  Voids              4               │
│  ───────────────────────────────    │
│                                     │
│  CHECK CARD ─────────────────────   │  next check
│  ...                                │
└─────────────────────────────────────┘
```

Note: check number is always teal and bold — it functions as a primary link/identifier.

---

### Tills (with Tab Bar)
`screenshots/open-tills.png`, `screenshots/closed-tills.png`, `screenshots/reconciled-tills.png`

```
[Status Bar]
├─────────────────────────────────────┤
│  <              Tills               │
├─────────────────────────────────────┤
│  [Context Bar]                      │
├─────────────────────────────────────┤
│  TAB BAR                            │
│  [Open] [Closed] [Reconciled]       │  3-tab, Open selected
├─────────────────────────────────────┤
│                                     │
│  EMPTY STATE (when no data)         │
│                                     │
│  [Box-with-X icon — gray stroke]    │  48px, centered
│  "No Tills Found"                   │  gray, 16px, centered
│                                     │
└─────────────────────────────────────┘
```

---

### Product Detail (e.g. Thanksgiving Feast)
`screenshots/thanksgiving-feast.png`

```
[Status Bar]
├─────────────────────────────────────┤
│  <       Thanksgiving Feast         │  centered title
├─────────────────────────────────────┤
│  TAB BAR                            │
│  [Prices] [Checks]                  │  2-tab
├─────────────────────────────────────┤
│  "1 Price for Thanksgiving Feast"   │  Inter Regular 14px, gray, left
│                             ↑ Quantity│  teal sort link, right-aligned, with arrow
├─────────────────────────────────────┤
│  DATA CARD                          │  white, 16px radius
│  Claimed           Price            │
│  [brand-red label] [black label]    │
│  2,260             $25.95           │  values: large, semibold
└─────────────────────────────────────┘
```

"Claimed" label uses brand-red (#EF2149) as a status color — not a badge, just colored text. This is the only use of red as a non-error label.

---

## Menu Overlay (Bottom Sheet)
`screenshots/menu-overlay.png`

Triggered by "Menu" in the bottom nav. Slides up over existing content.

```
[Blurred/scrimmed background — rgba(8,8,8,0.8)]
├─────────────────────────────────────┤
│  DRAG HANDLE                        │  gray pill, centered, ~4×40px
│                                     │
│  TOOLS SECTION                      │
│  "Tools"                            │  Inter SemiBold 14px, white
│                                     │
│  Kitchen Intelligence  [NEW]        │  white 16px; "NEW" = cyan pill badge
│  Settings                           │  white 16px
│  Forecast                           │  white 16px
│  Digital Channels                   │  white 16px
│  Check Search                       │  white 16px
│                                     │
│  SUPPORT SECTION                    │
│  "Support"                          │  Inter SemiBold 14px, white
│                                     │
│  Analyze                            │  white 16px
│  Product Tour                       │  white 16px
│                                     │
│  ─────────────────────────────────  │  divider
│                                     │
│  Log Out                            │  white, underlined — link style
│                                     │
│  Version 3.6.222                    │  gray, 12px, centered
└─────────────────────────────────────┘
```

Sheet background: dark (near-black, not pure black). Text: white. Section headers: SemiBold. Items: Regular. No icons on menu items (except "NEW" badge on Kitchen Intelligence).

---

## Component Inventory by Screen

| Component | Screens it appears in |
|---|---|
| `InputField` (default) | sign-in, two-step-verification, reset-password, choose-new-password |
| `InputField` (password) | sign-in, choose-new-password |
| `Button` (primary) | sign-in, enable-face-id, two-step-verification, reset-password, dashboard-loading-error |
| `Button` (link) | sign-in (Forgot Password), two-step-verification (Contact Support), menu-overlay (Log Out) |
| `Selector` (primary) | All authenticated screens (store + date context bar) |
| `TabBar` | sales-dashboard (4-tab), dashboard-store-kitchen (3-tab secondary), open-tills (3-tab), thanksgiving-feast (2-tab) |
| `MetricTile` | sales-dashboard (primary grid), check-search (totals) |
| `Badge` (trend) | All metric tiles with % change |
| `Badge` (brand) | menu-overlay (NEW on Kitchen Intelligence) |
| `BottomNav` | All dashboard-level screens |
| Modal | enable-face-id |
| Toast | dashboard-loading-error-with-toast, choose-new-password-with-toast |
| Empty state | open-tills, dashboard-loading-error |
| Table / list | net-sales (data table), dashboard-store-kitchen (store list), check-search (check cards) |
