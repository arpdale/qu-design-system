import * as React from "react"
import { cn } from "./utils"
import { ChevronRight } from "./icons"

/**
 * StatusTile — a tile that displays a header label and a list of named values,
 * shaped like MetricTile but with a multi-row body instead of a hero number.
 *
 * Used when a single "value" doesn't capture the data — e.g. Tills (Open: 0,
 * Closed: 8, Reconciled: 8) where each status row is itself the data point.
 *
 * Visual spec (matches MetricTile shell so it grids cleanly alongside):
 *   Container: white card, 16px border-radius, shadow: 0 4px 4px rgba(0,0,0,0.06)
 *   Header:    Inter Regular 12px, gray, with optional right-aligned chevron
 *   Items:     Inter Regular 14px black; value portion is bold (font-weight 600)
 *   Layout:    column, gap-3 between header and item list, gap-1 within list
 *
 * Usage:
 *   <StatusTile
 *     label="Tills"
 *     items={[
 *       { label: "Open", value: 0 },
 *       { label: "Closed", value: 8 },
 *       { label: "Reconciled", value: 8 },
 *     ]}
 *     onClick={() => navigate('/tills')}
 *   />
 *
 *   <StatusTile label="Tills" items={[]} loading />
 */

export interface StatusTileItem {
  label: string
  value: string | number
}

export interface StatusTileProps {
  label: string
  items: StatusTileItem[]
  /** Number of skeleton rows to render when loading. Defaults to items.length, or 3 if items is empty. */
  loadingRows?: number
  loading?: boolean
  onClick?: () => void
  className?: string
}

export function StatusTile({
  label,
  items,
  loadingRows,
  loading = false,
  onClick,
  className,
}: StatusTileProps) {
  const skeletonRowCount = loadingRows ?? (items.length > 0 ? items.length : 3)
  return (
    <div
      role={onClick ? "button" : undefined}
      tabIndex={onClick && !loading ? 0 : undefined}
      aria-busy={loading || undefined}
      onClick={loading ? undefined : onClick}
      onKeyDown={
        onClick && !loading
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") onClick()
            }
          : undefined
      }
      className={cn(
        "flex flex-col gap-3 rounded-[16px] bg-white p-4",
        "shadow-[0_4px_4px_rgba(0,0,0,0.06)]",
        onClick && !loading && "cursor-pointer outline-none",
        onClick && !loading && "hover:shadow-[0_4px_12px_rgba(0,0,0,0.10)] transition-shadow duration-[120ms]",
        onClick && !loading && "focus-visible:ring-2 focus-visible:ring-[var(--color-ring,#40CCF2)] focus-visible:ring-offset-2",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-2 font-sans text-[12px] text-[var(--color-text-tertiary,#6B7280)]">
        <span>{label}</span>
        {!loading && onClick && (
          <span className="shrink-0" aria-hidden="true">
            <ChevronRight size={14} />
          </span>
        )}
      </div>

      {/* Body */}
      {loading ? (
        <div className="flex flex-col gap-1.5">
          {Array.from({ length: skeletonRowCount }).map((_, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="block h-3 rounded bg-gray-200"
              style={{ width: `${48 + i * 6}%` }}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-1 font-sans text-[14px] text-[var(--color-text-primary,#000)]">
          {items.map((item) => (
            <span key={item.label}>
              {item.label}: <strong className="font-semibold">{item.value}</strong>
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
