import * as React from "react"
import { cn } from "./utils"

/**
 * StatCard — a label + value card with a horizontal divider between them.
 *
 * Distinct from MetricTile: StatCard has no trend, no chevron, no icon,
 * and emphasizes the label/value separation with a divider line. Used for
 * summary stats above a content area (e.g. "Check Count" and "Net Sales"
 * above the checks list in Check Search), or any small at-a-glance KPI
 * that doesn't have an associated period-over-period comparison.
 *
 * Visual spec:
 *   Container: white card, 16px border-radius, shadow: 0 4px 4px rgba(0,0,0,0.04)
 *   Label:     Inter Regular 13px, black (#000) — sits at the top
 *   Divider:   1px solid #EAEAEA
 *   Value:     Inter Bold 22px, black (#000) — sits below the divider
 *
 * Usage:
 *   <StatCard label="Check Count" value="8,013" />
 *   <StatCard label="Net Sales" value="$88,984" />
 *   <StatCard label="Net Sales" value="$88,984" loading />
 */

export interface StatCardProps {
  label: string
  value: string | number
  loading?: boolean
  className?: string
}

export function StatCard({ label, value, loading = false, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-[16px] bg-white px-4 py-[14px]",
        "shadow-[0_4px_4px_rgba(0,0,0,0.04)]",
        loading && "animate-pulse",
        className,
      )}
    >
      <span
        className={cn(
          "font-sans text-[13px] leading-tight text-[var(--color-text-primary,#000)]",
          loading && "h-3 w-24 rounded bg-gray-200",
        )}
      >
        {!loading && label}
      </span>
      <hr className="m-0 border-0 border-t border-[#EAEAEA]" />
      <span
        className={cn(
          "font-sans text-[22px] font-bold leading-tight text-[var(--color-text-primary,#000)]",
          loading && "mt-1 h-6 w-32 rounded bg-gray-200",
        )}
      >
        {!loading && value}
      </span>
    </div>
  )
}
