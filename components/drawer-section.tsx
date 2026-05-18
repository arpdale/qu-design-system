import * as React from "react"
import { cn } from "./utils"

/**
 * DrawerSection / DrawerItem — list groups inside a slide-up or side drawer.
 *
 * Built for a dark drawer context (white text on dark surface), which matches
 * the current notify-mobile menu drawer ("Tools", "Support", "Log Out"). Colors
 * use CSS variables (--color-drawer-text-primary, --color-drawer-text-secondary)
 * with white / 55% white fallbacks so the component renders correctly without
 * any consumer theming.
 *
 * Visual spec:
 *   DrawerSection.title:  Zilla Slab Bold 24px, white — display-level header
 *   DrawerItem.label:     Inter Medium 18px white (Regular 500, Bold 700 if active)
 *   DrawerItem.badge:     consumer-provided node, sits right of label
 *   Items in a section:   vertical stack with 14px gap, 12px gap below title
 *
 * Usage:
 *   <DrawerSection title="Tools">
 *     <DrawerItem
 *       label="Kitchen Intelligence"
 *       badge={<Badge variant="brand">NEW</Badge>}
 *       onClick={openKitchenIntelligence}
 *     />
 *     <DrawerItem label="Settings" active onClick={openSettings} />
 *   </DrawerSection>
 *
 * For a top-level drawer action button (e.g. "Log Out" footer), see DrawerAction.
 */

export interface DrawerSectionProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function DrawerSection({ title, children, className }: DrawerSectionProps) {
  return (
    <section className={cn("flex flex-col", className)}>
      <h2
        className={cn(
          "m-0 mb-3 font-display text-[24px] font-bold leading-tight",
          "text-[var(--color-drawer-text-primary,#FFFFFF)]",
        )}
      >
        {title}
      </h2>
      <ul className="m-0 flex list-none flex-col gap-[14px] p-0">
        {children}
      </ul>
    </section>
  )
}

/**
 * DrawerItem — a single tappable row inside a DrawerSection.
 *
 * Active state bolds the label (medium → bold) and is the recommended way to
 * indicate the current route in a drawer. Use `disabled` to dim a row that
 * exists conceptually but isn't currently actionable.
 */

export interface DrawerItemProps {
  label: string
  /** Click handler. If omitted, the row is non-interactive (cursor: default). */
  onClick?: () => void
  /** When true, the row is rendered in the "current page" style (bold label). */
  active?: boolean
  disabled?: boolean
  /** Trailing slot, typically a Badge. */
  badge?: React.ReactNode
  /** Optional leading icon (rare in this drawer; use for affordances when needed). */
  icon?: React.ReactNode
  className?: string
}

export function DrawerItem({
  label,
  onClick,
  active = false,
  disabled = false,
  badge,
  icon,
  className,
}: DrawerItemProps) {
  return (
    <li className={cn("flex items-center gap-2.5", className)}>
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        aria-current={active ? "page" : undefined}
        className={cn(
          "flex items-center gap-2 border-0 bg-transparent p-0 text-left",
          "font-sans text-[18px] leading-tight",
          "text-[var(--color-drawer-text-primary,#FFFFFF)]",
          onClick && !disabled ? "cursor-pointer" : "cursor-default",
          disabled && "opacity-[var(--p-opacity-disabled,0.5)]",
          active ? "font-bold" : "font-medium",
        )}
      >
        {icon && <span className="shrink-0 [&_svg]:size-5" aria-hidden="true">{icon}</span>}
        {label}
      </button>
      {badge}
    </li>
  )
}

/**
 * DrawerAction — a prominent display-level link/button used for things like
 * "Log Out" at the bottom of a drawer. Renders in Zilla Slab to match the
 * drawer section titles.
 *
 * Usage:
 *   <DrawerAction onClick={onLogOut}>Log Out</DrawerAction>
 */

export interface DrawerActionProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export function DrawerAction({ children, onClick, className }: DrawerActionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "self-start border-0 bg-transparent p-0",
        "font-display text-[22px] font-bold underline",
        "text-[var(--color-drawer-text-primary,#FFFFFF)]",
        onClick && "cursor-pointer",
        className,
      )}
    >
      {children}
    </button>
  )
}
