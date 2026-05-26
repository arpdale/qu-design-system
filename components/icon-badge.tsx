import * as React from "react"
import { cn } from "./utils"

const colorMap = {
  destructive: "bg-[var(--color-destructive,#EF2149)]",
  primary:     "bg-[var(--color-primary,#40CCF2)]",
  success:     "bg-[var(--color-success,#16A34A)]",
  info:        "bg-[var(--color-info,#2F80ED)]",
} as const

export type IconBadgeColor = keyof typeof colorMap

export interface IconBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** false = hidden, true = dot only, number = count (clamped to 99+) */
  badge?: boolean | number
  /** Badge color. Defaults to "destructive" (red). */
  color?: IconBadgeColor
  children: React.ReactNode
}

export function IconBadge({ badge, color = "destructive", children, className, ...props }: IconBadgeProps) {
  const showBadge = badge === true || (typeof badge === "number" && badge > 0)

  return (
    <span className={cn("relative inline-flex", className)} {...props}>
      {children}
      {showBadge && (
        <span
          aria-label={
            typeof badge === "number"
              ? `${badge} notification${badge === 1 ? "" : "s"}`
              : "New notification"
          }
          className={cn(
            "absolute flex items-center justify-center",
            "rounded-full text-white",
            colorMap[color],
            "ring-2 ring-[var(--color-background,#fff)]",
            typeof badge === "number"
              ? "-top-1.5 -right-1.5 h-4 min-w-4 px-1 font-sans text-[10px] font-semibold leading-none"
              : "-top-0.5 -right-0.5 h-2 w-2",
          )}
        >
          {typeof badge === "number" ? (badge > 99 ? "99+" : badge) : null}
        </span>
      )}
    </span>
  )
}
