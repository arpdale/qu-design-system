import * as React from "react"
import { cn } from "./utils"
import { TrendBadge } from "./badge"
import { ChevronRight } from "./icons"

/**
 * MetricTile — the core data display unit of the Qu Notify dashboard.
 *
 * Visual spec:
 *   Container: white card, 16px border-radius, flat (no resting shadow)
 *   Label:     Inter Regular 16px, gray (#6B7280)
 *   Value:     Inter SemiBold 24px, black (#000) — md size; scales sm 20 / lg 30
 *   Sub-label: Inter Regular 14px, gray — prior-period value (e.g. "$304.78")
 *   Trend:     TrendBadge — Inter SemiBold 14px (green/red/neutral)
 *
 * Variants:
 *   size:    sm | md | lg
 *   loading: skeleton state
 *
 * Usage (minimal):
 *   <MetricTile label="Net Sales" value="$42,810" />
 *
 * Usage (with trend):
 *   <MetricTile label="Average Check" value="$18.42" trend={11.8} trendLabel="vs last week" />
 *
 * Usage (with icon and custom value color):
 *   <MetricTile
 *     label="Labor %"
 *     value="24.1%"
 *     trend={-2.3}
 *     icon={<UserIcon />}
 *     valueColor="var(--color-success,#16A34A)"
 *   />
 *
 * Usage (loading):
 *   <MetricTile label="Net Sales" value="..." loading />
 *
 * Usage (grid):
 *   <MetricTileGrid cols={2}>
 *     <MetricTile label="Net Sales"    value="$42,810" trend={11.8} />
 *     <MetricTile label="Avg Check"    value="$18.42"  trend={-1.2} />
 *     <MetricTile label="Checks"       value="2,324"   />
 *     <MetricTile label="Speed of Svc" value="3m 12s"  />
 *   </MetricTileGrid>
 */

export interface MetricTileProps {
  label: string
  value: string | number
  /** Percentage change. Positive = green, negative = red. */
  trend?: number
  trendLabel?: string
  icon?: React.ReactNode
  /** Override the value text color (e.g. for KPI goal states) */
  valueColor?: string
  size?: "sm" | "md" | "lg"
  loading?: boolean
  /** Click handler — makes the tile interactive */
  onClick?: () => void
  className?: string
  /** Render as a specific element */
  as?: "div" | "article"
}

export function MetricTile({
  label,
  value,
  trend,
  trendLabel,
  icon,
  valueColor,
  size = "md",
  loading = false,
  onClick,
  className,
  as: Tag = "div",
}: MetricTileProps) {
  const valueSize = {
    sm: "text-[20px]",
    md: "text-[24px]",
    lg: "text-[30px]",
  }[size]

  const padding = {
    sm: "p-3",
    md: "p-4",
    lg: "p-5",
  }[size]

  return (
    <Tag
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === "Enter" || e.key === " ") onClick() } : undefined}
      className={cn(
        // Card shell — flat (no resting shadow); card fill separates it from the app page.
        // Token-driven (--color-bg-card / --tile-radius) so it responds to theme + fidelity flips.
        "flex flex-col gap-1 rounded-[var(--tile-radius)] bg-[var(--color-bg-card)]",
        padding,
        // Interactive
        onClick && "cursor-pointer outline-none hover:shadow-[0_4px_12px_rgba(0,0,0,0.10)] transition-shadow duration-[120ms]",
        onClick && "focus-visible:ring-2 focus-visible:ring-[var(--color-ring,#40CCF2)] focus-visible:ring-offset-2",
        // Loading
        loading && "animate-pulse",
        className,
      )}
    >
      {/* Label row */}
      <div className="flex items-center justify-between gap-2">
        <span
          className={cn(
            "font-sans text-[16px] font-normal leading-tight",
            "text-[var(--color-text-tertiary,#6B7280)]",
            loading && "h-3 w-24 rounded bg-gray-200",
          )}
        >
          {!loading && label}
        </span>
        {!loading && (icon ? (
          <span className="shrink-0 text-[var(--color-text-tertiary,#6B7280)] [&_svg]:size-4" aria-hidden="true">
            {icon}
          </span>
        ) : onClick ? (
          <span className="shrink-0 text-[var(--color-text-tertiary,#6B7280)]" aria-hidden="true">
            <ChevronRight size={14} />
          </span>
        ) : null)}
      </div>

      {/* Value */}
      <span
        className={cn(
          "font-sans font-semibold leading-tight tracking-tight",
          valueSize,
          loading && "mt-1 h-7 w-28 rounded bg-gray-200",
        )}
        style={valueColor && !loading ? { color: valueColor } : undefined}
      >
        {!loading && value}
      </span>

      {/* Metadata row — prior-period value (left, gray) + trend (right, colored).
          The trend right-aligns under the chevron above. */}
      {(trend !== undefined || trendLabel) && !loading && (
        <div className="flex items-center justify-between gap-2">
          {trendLabel ? (
            <span className="font-sans text-[14px] text-[var(--color-text-tertiary,#6B7280)]">
              {trendLabel}
            </span>
          ) : <span />}
          {trend !== undefined ? <TrendBadge value={trend} /> : <span />}
        </div>
      )}
      {loading && trend !== undefined && (
        <div className="mt-1 h-4 w-16 rounded bg-gray-200" />
      )}
    </Tag>
  )
}

/**
 * MetricTileGrid — responsive grid wrapper.
 *
 * Usage:
 *   <MetricTileGrid cols={2}> ... </MetricTileGrid>
 */
export interface MetricTileGridProps {
  cols?: 1 | 2 | 3 | 4
  children: React.ReactNode
  className?: string
}

export function MetricTileGrid({ cols = 2, children, className }: MetricTileGridProps) {
  const colClass = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  }[cols]

  return (
    <div className={cn("grid gap-3", colClass, className)}>
      {children}
    </div>
  )
}

