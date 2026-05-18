import * as React from "react"
import { cn } from "./utils"
import { ChevronLeft } from "./icons"

/**
 * ScreenHeader — top app-bar for any non-root screen.
 *
 * Three-column grid: [back button] [centered title] [right slot]. Each slot
 * is fixed-width (44px) so the title is always optically centered regardless
 * of what's on either side. Renders with a flat white surface; place above
 * a context bar or directly above scrolling content.
 *
 * Visual spec:
 *   Height:   56px (flex-shrink-0)
 *   Padding:  0 16px horizontal
 *   Bg:       white
 *   Layout:   grid-cols-[44px_1fr_44px], items-center
 *   Title:    Inter Medium 17px, black, centered, h1
 *   Back:     ChevronLeft 24px, left-aligned in its column, aria-label="Back"
 *
 * Usage:
 *   <ScreenHeader title="Tills" onBack={() => history.back()} />
 *   <ScreenHeader title="Dashboard" />                                  // no back
 *   <ScreenHeader title="Inventory" onBack={onBack} rightSlot={
 *     <IconButton aria-label="Filter"><Filter /></IconButton>
 *   } />
 *
 * The h1 is semantically the page title — keep one ScreenHeader per route.
 * For section headers inside the scrollable content area, use SectionHeader.
 */

export interface ScreenHeaderProps {
  title: string
  /** Back affordance. Omit to render no back button (use for root-level screens). */
  onBack?: () => void
  /** Optional element rendered in the right column (typically a single icon button). */
  rightSlot?: React.ReactNode
  className?: string
}

export function ScreenHeader({ title, onBack, rightSlot, className }: ScreenHeaderProps) {
  return (
    <header
      className={cn(
        "grid h-14 shrink-0 grid-cols-[44px_1fr_44px] items-center px-4",
        "bg-[var(--color-bg-card,#FFFFFF)]",
        className,
      )}
    >
      {onBack ? (
        <button
          type="button"
          aria-label="Back"
          onClick={onBack}
          className={cn(
            "inline-flex items-center justify-start",
            "border-0 bg-transparent p-1 cursor-pointer",
            "text-[var(--color-text-primary,#000)]",
          )}
        >
          <ChevronLeft size={24} />
        </button>
      ) : (
        <span />
      )}
      <h1
        className={cn(
          "m-0 font-sans text-[17px] font-medium leading-tight text-center",
          "text-[var(--color-text-primary,#000)]",
        )}
      >
        {title}
      </h1>
      <div className="inline-flex items-center justify-end">{rightSlot}</div>
    </header>
  )
}
