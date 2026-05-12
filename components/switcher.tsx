import * as React from "react"
import { cn } from "./utils"

/**
 * Switcher — Qu Notify segmented control (iOS-style).
 *
 * Visual spec:
 *   Container: gray-100 (#DEDEDE) bg, 8px corner radius, 3px padding
 *   Selected segment: black fill, white text, 6px corner radius
 *   Unselected segment: transparent, secondary text (gray)
 *   Font: Inter Medium 14px
 *
 * Differs from TabBar:
 *   - TabBar: full-radius pill, used for primary page-level navigation
 *   - Switcher: square-ish corners (8px), used for inline data filters
 *     (e.g. Day / Week / Month, Net / Gross, All / Open / Closed)
 *
 * Usage (uncontrolled):
 *   <Switcher segments={["Day", "Week", "Month"]} defaultValue="Week" />
 *
 * Usage (controlled):
 *   <Switcher
 *     segments={["Net", "Gross"]}
 *     value={metric}
 *     onValueChange={setMetric}
 *   />
 *
 * Usage with icon segments:
 *   <Switcher
 *     segments={[
 *       { value: "list",  label: "List",  icon: <ListIcon /> },
 *       { value: "grid",  label: "Grid",  icon: <GridIcon /> },
 *     ]}
 *     value={view}
 *     onValueChange={setView}
 *   />
 */

type Segment = string | { value: string; label: string; icon?: React.ReactNode }

function segmentValue(s: Segment): string {
  return typeof s === "string" ? s : s.value
}
function segmentLabel(s: Segment): string {
  return typeof s === "string" ? s : s.label
}
function segmentIcon(s: Segment): React.ReactNode | undefined {
  return typeof s === "string" ? undefined : s.icon
}

export interface SwitcherProps {
  segments: Segment[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  className?: string
  /** Stretch to fill container width */
  stretch?: boolean
}

export function Switcher({
  segments,
  value,
  defaultValue,
  onValueChange,
  className,
  stretch = false,
}: SwitcherProps) {
  const [selected, setSelected] = React.useState(
    defaultValue ?? segmentValue(segments[0]),
  )
  const isControlled = value !== undefined
  const current = isControlled ? value : selected

  const handleSelect = (val: string) => {
    if (!isControlled) setSelected(val)
    onValueChange?.(val)
  }

  return (
    <div
      role="group"
      className={cn(
        "inline-flex items-center gap-0.5 rounded-[8px] p-[3px]",
        "bg-[var(--color-inactive,#DEDEDE)]",
        stretch && "w-full",
        className,
      )}
    >
      {segments.map((seg) => {
        const val = segmentValue(seg)
        const label = segmentLabel(seg)
        const icon = segmentIcon(seg)
        const isSelected = val === current

        return (
          <button
            key={val}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => handleSelect(val)}
            className={cn(
              "inline-flex items-center justify-center gap-1.5 rounded-[6px]",
              "px-4 py-[7px] cursor-pointer select-none",
              "font-['Inter'] text-[14px] font-medium leading-tight",
              "outline-none transition-colors duration-[120ms]",
              "focus-visible:ring-2 focus-visible:ring-[var(--color-ring,#40CCF2)] focus-visible:ring-offset-1",
              stretch && "flex-1",
              isSelected
                ? "bg-[var(--color-foreground,#000)] text-white"
                : "bg-transparent text-[var(--color-text-secondary,#6B7280)] hover:text-[var(--color-text-primary,#000)]",
            )}
          >
            {icon && <span className="shrink-0 [&_svg]:size-[14px]">{icon}</span>}
            {label}
          </button>
        )
      })}
    </div>
  )
}
