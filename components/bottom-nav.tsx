import * as React from "react"
import { cn } from "./utils"

/**
 * BottomNav — Qu Notify floating bottom navigation bar.
 *
 * Visual spec:
 *   Container: glass gradient pill (180deg, rgba(220,220,220,0.2) → rgba(118,118,118,0.2))
 *              box-shadow: 0 4px 4px rgba(0,0,0,0.14)
 *              border-radius: 60px
 *              max-width: 360px, height: 72px
 *   Selected item: black fill pill, white icon + label (Semi Bold)
 *   Unselected item: transparent, gray icon + label (Regular)
 *   Font: Inter — label 10px
 *   Icon: 20×20px
 *
 * Usage (controlled — you manage routing):
 *   const [active, setActive] = useState("dashboard")
 *
 *   <BottomNav
 *     items={[
 *       { value: "dashboard", label: "Dashboard", icon: <DashboardIcon /> },
 *       { value: "inventory", label: "Inventory", icon: <BoxIcon /> },
 *       { value: "menu",      label: "Menu",      icon: <MenuIcon /> },
 *     ]}
 *     value={active}
 *     onValueChange={setActive}
 *   />
 *
 * Usage with React Router / Next.js:
 *   <BottomNav
 *     items={navItems}
 *     value={pathname}
 *     onValueChange={(v) => router.push(v)}
 *   />
 *
 * Positioning:
 *   Wrap in a <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-sm px-4 z-50">
 *   for the standard bottom-floating placement used in the app.
 */

export interface NavItem {
  value: string
  label: string
  icon: React.ReactNode
  /** Notification indicator */
  badge?: boolean | number
}

export interface BottomNavProps {
  items: NavItem[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  className?: string
}

export function BottomNav({
  items,
  value,
  defaultValue,
  onValueChange,
  className,
}: BottomNavProps) {
  const [selected, setSelected] = React.useState(
    defaultValue ?? items[0]?.value,
  )
  const isControlled = value !== undefined
  const current = isControlled ? value : selected

  const handleSelect = (val: string) => {
    if (!isControlled) setSelected(val)
    onValueChange?.(val)
  }

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        // Glass pill container
        "flex items-center justify-between",
        "w-full max-w-[360px] h-[72px] rounded-[60px]",
        "px-3 py-2",
        // Glass gradient
        "bg-gradient-to-b from-[rgba(220,220,220,0.20)] to-[rgba(118,118,118,0.20)]",
        "backdrop-blur-md",
        // Shadow
        "shadow-[0_4px_4px_rgba(0,0,0,0.14)]",
        className,
      )}
    >
      {items.map((item) => {
        const isSelected = item.value === current
        return (
          <NavItemButton
            key={item.value}
            item={item}
            isSelected={isSelected}
            onClick={() => handleSelect(item.value)}
          />
        )
      })}
    </nav>
  )
}

// ── Internal nav item ─────────────────────────────────────────────────────────
interface NavItemButtonProps {
  item: NavItem
  isSelected: boolean
  onClick: () => void
}

function NavItemButton({ item, isSelected, onClick }: NavItemButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={isSelected ? "page" : undefined}
      className={cn(
        "relative inline-flex flex-col items-center justify-center gap-[3px]",
        "rounded-full py-2 px-4 cursor-pointer select-none",
        "outline-none transition-colors duration-[120ms]",
        "focus-visible:ring-2 focus-visible:ring-[var(--color-ring,#40CCF2)] focus-visible:ring-offset-1",
        isSelected
          ? "bg-[var(--color-foreground,#000)] text-white"
          : "bg-transparent text-[var(--color-muted-foreground,#6B7280)]",
      )}
    >
      {/* Badge dot */}
      {item.badge && (
        <span
          aria-label={typeof item.badge === "number" ? `${item.badge} notifications` : "New notification"}
          className={cn(
            "absolute right-2 top-2 flex items-center justify-center",
            "rounded-full bg-[var(--color-destructive,#EF2149)] text-white",
            typeof item.badge === "number"
              ? "h-4 min-w-4 px-1 font-sans text-[10px] font-semibold"
              : "h-2 w-2",
          )}
        >
          {typeof item.badge === "number" ? item.badge : null}
        </span>
      )}

      {/* Icon */}
      <span className="[&_svg]:size-5" aria-hidden="true">
        {item.icon}
      </span>

      {/* Label */}
      <span
        className={cn(
          "font-sans text-[10px] leading-tight",
          isSelected ? "font-semibold" : "font-normal",
        )}
      >
        {item.label}
      </span>
    </button>
  )
}

// ── Positioning wrapper — use as-is for the standard app layout ───────────────
export function BottomNavContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed bottom-6 left-1/2 z-50 flex w-full max-w-[402px] -translate-x-1/2 items-center justify-center px-4">
      {children}
    </div>
  )
}
