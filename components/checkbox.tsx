import * as React from "react"
import { cn } from "./utils"

/**
 * Checkbox — Qu Notify form control.
 *
 * States: unchecked | checked | indeterminate | disabled
 * - Unchecked:     transparent fill, 1.5px teal (#339FB8) stroke, 4px radius
 * - Checked:       cyan (#40CCF2) fill, white checkmark, no stroke
 * - Indeterminate: cyan fill, white dash, no stroke
 * - Disabled:      opacity 0.5 on full component
 *
 * Usage:
 *   <Checkbox label="Remember me" />
 *   <Checkbox checked label="Agreed to terms" />
 *   <Checkbox indeterminate label="Select all" />
 *   <Checkbox disabled label="Unavailable option" />
 */

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string
  indeterminate?: boolean
  helperText?: string
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, indeterminate, helperText, disabled, checked, defaultChecked, className, onChange, ...props }, ref) => {
    const internalRef = React.useRef<HTMLInputElement>(null)
    const resolvedRef = (ref as React.RefObject<HTMLInputElement>) ?? internalRef

    const [isChecked, setIsChecked] = React.useState(!!defaultChecked || !!checked)
    const isControlled = checked !== undefined
    const currentChecked = isControlled ? !!checked : isChecked

    React.useEffect(() => {
      if (resolvedRef.current) {
        resolvedRef.current.indeterminate = !!indeterminate
      }
    }, [indeterminate, resolvedRef])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setIsChecked(e.target.checked)
      onChange?.(e)
    }

    const showCheck = !indeterminate && currentChecked
    const showDash  = !!indeterminate

    return (
      <label
        className={cn(
          "inline-flex items-center gap-2 cursor-pointer select-none",
          disabled && "opacity-50 cursor-not-allowed",
          className,
        )}
      >
        {/* Hidden native input for a11y / form submission */}
        <input
          ref={resolvedRef}
          type="checkbox"
          checked={isControlled ? checked : isChecked}
          disabled={disabled}
          onChange={handleChange}
          className="sr-only"
          {...props}
        />

        {/* Visual control */}
        <span
          aria-hidden="true"
          className={cn(
            "flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[4px]",
            "border-[1.5px] transition-colors duration-[120ms]",
            (showCheck || showDash)
              ? "border-transparent bg-[var(--color-primary,#40CCF2)]"
              : "border-[var(--color-secondary-border,#339FB8)] bg-transparent",
          )}
        >
          {showCheck && <CheckIcon />}
          {showDash  && <DashIcon />}
        </span>

        {/* Label + helper */}
        {(label || helperText) && (
          <span className="flex flex-col gap-0.5">
            {label && (
              <span className="font-['Red_Hat_Text'] text-[14px] font-normal leading-tight text-[var(--color-text-primary,#000)]">
                {label}
              </span>
            )}
            {helperText && (
              <span className="font-['Inter'] text-[12px] text-[var(--color-text-tertiary,#6B7280)]">
                {helperText}
              </span>
            )}
          </span>
        )}
      </label>
    )
  },
)
Checkbox.displayName = "Checkbox"

// ── icons ────────────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="1,4 4,7 10,1" />
    </svg>
  )
}

function DashIcon() {
  return (
    <svg width="10" height="2" viewBox="0 0 10 2" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
      <line x1="1" y1="1" x2="9" y2="1" />
    </svg>
  )
}
