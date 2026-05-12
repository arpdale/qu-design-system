import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "./utils"

/**
 * Selector — pill-shaped dropdown trigger. Qu Notify filter/store-picker control.
 *
 * Variants:
 *   variant: primary | secondary
 *   state:   active | inactive | disabled
 *
 * Primary Active:   cyan (#40CCF2) fill, black text
 * Primary Inactive: gray-100 fill, primary text
 * Secondary Active: teal outline, teal text
 * Secondary Inactive: gray-200 outline, secondary text
 *
 * The component is a styled button — wire up a Popover/DropdownMenu to it externally.
 * The `open` prop controls the chevron rotation only.
 *
 * Usage:
 *   <Selector label="All Stores" />
 *   <Selector label="This Week" variant="secondary" state="active" />
 *   <Selector label="Location" open />
 *   <Selector label="Date Range" state="disabled" />
 */

const selectorVariants = cva(
  [
    "inline-flex items-center gap-1.5 rounded-full select-none cursor-pointer",
    "py-2 pl-3.5 pr-2.5",
    "font-['Red_Hat_Text'] text-[14px] font-medium leading-tight",
    "border-[1.5px] transition-colors duration-[120ms]",
    "outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring,#40CCF2)] focus-visible:ring-offset-1",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
      },
      state: {
        active:   "",
        inactive: "",
        disabled: "",
      },
    },
    compoundVariants: [
      // Primary
      {
        variant: "primary",
        state: "active",
        class: "bg-[var(--color-primary,#40CCF2)] border-transparent text-[var(--color-text-primary,#000)]",
      },
      {
        variant: "primary",
        state: ["inactive", "disabled"],
        class: "bg-[var(--color-inactive,#DEDEDE)] border-transparent text-[var(--color-text-primary,#000)]",
      },
      // Secondary
      {
        variant: "secondary",
        state: "active",
        class: "bg-transparent border-[var(--color-secondary-border,#339FB8)] text-[var(--color-secondary-foreground,#339FB8)]",
      },
      {
        variant: "secondary",
        state: ["inactive", "disabled"],
        class: "bg-transparent border-[var(--color-border,#C9C9C9)] text-[var(--color-text-secondary,#6B7280)]",
      },
    ],
    defaultVariants: {
      variant: "primary",
      state: "active",
    },
  },
)

export interface SelectorProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">,
    VariantProps<typeof selectorVariants> {
  label: string
  /** Controlled open state — rotates chevron 180° */
  open?: boolean
  /** Icon to show before the label (optional) */
  icon?: React.ReactNode
}

export const Selector = React.forwardRef<HTMLButtonElement, SelectorProps>(
  ({ label, variant = "primary", state = "active", open = false, icon, className, disabled, ...props }, ref) => {
    const isDisabled = disabled || state === "disabled"

    return (
      <button
        ref={ref}
        type="button"
        disabled={isDisabled}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={cn(selectorVariants({ variant, state: isDisabled ? "disabled" : state }), className)}
        {...props}
      >
        {icon && <span className="shrink-0 [&_svg]:size-4">{icon}</span>}
        <span>{label}</span>
        <ChevronDownIcon
          className={cn(
            "shrink-0 transition-transform duration-[120ms]",
            open && "rotate-180",
          )}
        />
      </button>
    )
  },
)
Selector.displayName = "Selector"

// ── Selector Group — renders a horizontal row of Selectors ───────────────────
export interface SelectorGroupProps {
  children: React.ReactNode
  className?: string
}
export function SelectorGroup({ children, className }: SelectorGroupProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {children}
    </div>
  )
}

// ── icon ─────────────────────────────────────────────────────────────────────
function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="2,4 6,8 10,4" />
    </svg>
  )
}
