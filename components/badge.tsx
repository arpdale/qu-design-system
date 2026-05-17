import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "./utils"
import { ArrowUp2, ArrowDown2 } from "./icons"

/**
 * Badge — Qu Notify status/trend pill label.
 *
 * Variants:
 *   variant: default | success | error | warning | alert | info | neutral
 *   size:    sm | md
 *
 * Usage:
 *   <Badge>Open</Badge>
 *   <Badge variant="success">+11.8%</Badge>
 *   <Badge variant="error">-5.6%</Badge>
 *   <Badge variant="warning">Delayed</Badge>
 *   <Badge icon={<TrendUpIcon />} variant="success">Net Sales</Badge>
 */

const badgeVariants = cva(
  [
    "inline-flex items-center gap-1 rounded-full font-['Inter'] font-medium whitespace-nowrap",
    "select-none leading-tight",
  ],
  {
    variants: {
      variant: {
        default: "bg-[var(--color-inactive,#DEDEDE)] text-[var(--color-text-primary,#000)]",
        success: "bg-[var(--color-success-soft,#B3F5D1)] text-[var(--color-success,#16A34A)]",
        error:   "bg-[var(--color-error-soft,#FFC9C9)] text-[var(--color-destructive,#EF2149)]",
        warning: "bg-[var(--color-warning-soft,#FFF085)] text-[#92680E]",
        alert:   "bg-[var(--color-alert-soft,#EAC1C3)] text-[var(--color-alert,#FA6A0A)]",
        info:    "bg-[var(--color-info-soft,#BEDBFF)] text-[var(--color-info,#2F80ED)]",
        neutral: "bg-transparent text-[var(--color-text-secondary,#6B7280)] border border-[var(--color-border,#C9C9C9)]",
        // Brand accent fills — used for status tags in Kitchen Intelligence
        brand:   "bg-[var(--color-primary,#40CCF2)] text-[var(--color-text-primary,#000)]",
      },
      size: {
        sm: "h-5 px-2 text-[11px]",
        md: "h-6 px-2.5 text-[12px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode
}

export function Badge({ variant, size, icon, children, className, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {icon && <span className="shrink-0 [&_svg]:size-3" aria-hidden="true">{icon}</span>}
      {children}
    </span>
  )
}

/**
 * TrendBadge — inline trend indicator. Bare colored text + arrow, no pill bg.
 *
 * Used inside MetricTile and anywhere a percent delta needs to appear next to
 * a primary value. The bare style keeps the trend visually subordinate to the
 * value above it (the headline number is the hero; the trend is supporting
 * commentary). For a pill-shaped status label, use <Badge> directly.
 *
 * Usage:
 *   <TrendBadge value={11.8} />   → green "↗ +11.8%"
 *   <TrendBadge value={-5.6} />   → red "↘ −5.6%"
 *   <TrendBadge value={0} />      → neutral "0.0%"
 */
export interface TrendBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number
  /** Number of decimal places (default: 1) */
  decimals?: number
  /** Show arrow icon (default: true) */
  showArrow?: boolean
}

export function TrendBadge({ value, decimals = 1, showArrow = true, className, ...props }: TrendBadgeProps) {
  const colorClass =
    value > 0 ? "text-[var(--color-success,#16A34A)]" :
    value < 0 ? "text-[var(--color-destructive,#EF2149)]" :
    "text-[var(--color-text-tertiary,#6B7280)]"

  const formatted = `${value > 0 ? "+" : ""}${value.toFixed(decimals)}%`

  const arrow = showArrow ? (
    value > 0 ? <ArrowUp2 /> :
    value < 0 ? <ArrowDown2 /> :
    null
  ) : null

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 whitespace-nowrap select-none",
        "font-['Inter'] text-[12px] font-medium leading-tight",
        "[&_svg]:size-3",
        colorClass,
        className,
      )}
      {...props}
    >
      {arrow}
      {formatted}
    </span>
  )
}

