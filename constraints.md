# Qu Notify — Hard Design Constraints

Rules extracted directly from production screenshots. Two lists: things that are **never** done, and things that are **always** done. These override everything else, including README prose.

---

## NEVER

### Color
- **Never use cyan (#40CCF2) as a large background fill.** It is a pill/stroke/accent color only. The app background is always `#F4F4F4`, cards `#FFFFFF`.
- **Never use cyan text on a dark background for body copy.** Cyan text only appears on white/light surfaces (links, active teal-variant labels).
- **Never change the disabled state by swapping colors.** Disabled = `opacity: 0.5` on the entire component. The component's own colors stay intact underneath.
- **Never use brand-red (#EF2149) for anything other than errors, error borders, and the "Claimed" data status.** It is not a general accent.

### Typography
- **No emoji, anywhere.** Not in buttons, labels, tiles, toasts, empty states, or body copy. Zero.
- **Never sentence-case the wordmark.** The product name is always `NOTIFY` (all-caps). The company name is `QU` or `Qu` — never `qu` or `notify`.
- **Never use Zilla Slab for body copy or UI labels.** It is display-only (onboarding headlines, pull quotes, splash screen).
- **Never left-align a centered-title screen header.** Detail screens (Net Sales, Check Search, Tills, etc.) have a centered title with a back chevron left.

### Inputs & Forms
- **Never use a rectangular input field.** All input fields are full-radius pills (`border-radius: 9999px`).
- **Never show a required field asterisk in gray.** The asterisk is always brand-red (#EF2149).
- **Never use the error color for the label text.** The label stays black; only the border, helper text, and right icon flip to red on error.

### Buttons
- **Never use a rectangular button.** All buttons are full-radius pills.
- **Never make the primary button black.** Black is the nav/tab selected-state color. The primary CTA button is cyan (#40CCF2).
- **Never put an outline on a primary button.** Primary = solid fill only.

### Navigation & Layout
- **Never show bottom nav on authentication screens** (Sign In, 2-Step, Reset Password, Choose Password, Enable Face ID, Splash).
- **Never show bottom nav on detail/drill-down screens** (Net Sales, Check detail, Tills detail, Thanksgiving Feast, etc.). Bottom nav is dashboard-level only.
- **Never use the bottom nav for more than 3 items** — Dashboard, Inventory, Menu.
- **Never stack two context-selector bars.** The store + date selectors always appear on a single line separated by a bullet `•`.

### Icons
- **Never use icon fonts.** SVG only — stroke style, rounded caps and joins.
- **Never fill a stroke icon** (except when used as an illustration element on the splash screen).

### Copy
- **Never write marketing copy in the app.** All copy is operational and direct. "Net Sales" not "Your earnings today".
- **Never use first-person in UI labels.** "Sign in to continue", not "Let's get you signed in".
- **Never use ellipsis (...) in button labels.** Buttons are always definitive: "Sign In", "Refresh", "Enable Face ID", "Continue".

---

## ALWAYS

### Color
- **App background:** `#F4F4F4` (gray-50). Never white at the page level.
- **Card/tile background:** `#FFFFFF`. Always white, no tinted card backgrounds.
- **Primary CTA button fill:** `#40CCF2` (Tech Blue/cyan).
- **Selected tab / nav item fill:** `#000000` (black).
- **Context selectors (store + date pills):** Always cyan fill, regardless of page.
- **Active input border:** Cyan (#40CCF2), 1.5px, pill shape.
- **Error input border:** Brand-red (#EF2149), 1.5px.
- **Toast bar (error):** Brand-red fill, white text, full-radius pill, fixed bottom.
- **Teal (#339FB8):** Secondary interactive — link text, secondary button outline/text, action labels ("Fulfilment", "Quantity"), check numbers in Check Search.

### Typography
- **Header font:** Red Hat Text — section labels, input labels, button labels, menu items.
- **Body / data font:** Inter — all metric values, table data, body copy, captions.
- **Label casing:** Title Case for page headers and section titles. ALL CAPS for the product wordmark (NOTIFY). Sentence case for everything else (button labels, helper text, body).
- **Metric values:** Inter SemiBold, 24px minimum on dashboard tiles.
- **Version string:** Always shown on auth screens. Format: `Version 3.6.222-build. 1483`.

### Inputs
- **Always pill-shaped** (`border-radius: 9999px`).
- **Always show a label above the field** (not a placeholder-as-label pattern).
- **Always show the eye icon** on password fields for show/hide toggle.
- **Always show `*Required Fields`** footnote below the form when required fields exist.

### Buttons
- **Always pill-shaped.** No exceptions.
- **Disabled button:** Full opacity of the normal state, but `opacity: 0.5` on the component — the cyan fill remains visible underneath.
- **Primary CTA always centered** on auth/modal screens. Dashboard actions can be left-aligned.

### Navigation
- **Always show the QU NOTIFY lockup** top-left on authenticated screens.
- **Always show the bell icon** top-right on authenticated screens (with red dot when notifications exist).
- **Context bar (store + date) always appears** below the header on all authenticated data screens.
- **Back navigation:** Left-chevron icon only (no text) on data detail screens. Text link "< Back to [screen]" on auth sub-screens (Two-Step, Reset Password).
- **Bottom nav always shows all 3 items** even when one is active. Never hide inactive items.
- **Bottom nav selected item:** Black pill behind icon + label, white icon + Semi Bold label. Unselected: gray icon + Regular label.

### Cards & Tiles
- **Always 16px border-radius** on metric tiles.
- **Tiles and cards are flat — no resting shadow.** Their white fill on the gray-50 page background provides the separation. (An interactive tile may use a subtle shadow on hover only.)
- **Never a visible border** on cards — the white-on-gray-50 contrast provides the separation.

### Empty States
- **Always show a gray stroke icon** (not brand-colored) above the empty-state message.
- **Message format:** "No [Thing] Found" — noun-first, sentence case.

### Error States
- **In-page error:** Cyan info-circle icon, centered copy ("Something Went Wrong / Try Refreshing"), cyan "Refresh" button.
- **Toast error:** Red pill, "Ooops, we are having problems" — this is the actual production copy.

### Modals / Sheets
- **Dark scrim behind modals:** `rgba(8,8,8,0.8)`.
- **Modal card:** White, `border-radius: 24px` minimum, centered.
- **Bottom sheet (menu):** Slides up from bottom, white, `border-radius: 60px` top corners, drag handle at top.

### Table / List Patterns
- **Active/selected row highlight:** Cyan fill (`#40CCF2`) row background with black text.
- **Chevron `>`** on every tappable row.
- **Column headers** right-aligned for numeric columns, left-aligned for name columns.
- **Section action links** (e.g. "Fulfilment", "Quantity") always teal, right-aligned.

### Spacing
- **Minimum tap target:** 44×44px (iOS HIG).
- **Screen horizontal padding:** 16px left/right (matches `--space-lg`).
- **Card grid gap:** 12px between tiles (`--space-xs` to `--space-sm`).
