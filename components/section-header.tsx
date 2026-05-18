import * as React from "react"
import { cn } from "./utils"

/**
 * SectionHeader — title row above a content block, with optional right-aligned action.
 *
 * Visual spec:
 *   Title:  Inter Bold 18px, black (#000)
 *   Action: caller-provided node (typically a Button, IconButton, or link)
 *   Layout: title left, action right, vertical center, 8px top / 12px bottom margin
 *
 * Used in: Check Search ("Totals", "Checks"), and anywhere a section needs a
 * lightweight label-with-action pattern. For headline page titles, use the
 * ScreenHeader pattern (a separate concern — owned by consumer for now).
 *
 * Usage:
 *   <SectionHeader title="Totals" />
 *   <SectionHeader title="Checks" action={<IconButton ... />} />
 *   <SectionHeader title="Filters" action={
 *     <Button variant="ghost" icon={<Filter />}>Filters</Button>
 *   } />
 */

export interface SectionHeaderProps {
  title: string
  action?: React.ReactNode
  /** Heading level (default h2). Use h3/h4 when nested inside another section. */
  as?: "h2" | "h3" | "h4"
  className?: string
}

export function SectionHeader({ title, action, as: Tag = "h2", className }: SectionHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between gap-2 my-2 mb-3", className)}>
      <Tag className="m-0 font-sans text-[18px] font-bold leading-tight text-[var(--color-text-primary,#000)]">
        {title}
      </Tag>
      {action}
    </div>
  )
}
