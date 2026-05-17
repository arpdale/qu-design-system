import * as React from "react"
import { cn } from "./utils"

/**
 * Toggle — iOS-style switch. Qu Notify form control.
 *
 * States: off | on | disabled-off | disabled-on
 * - Off: gray-100 (#DEDEDE) track, white knob positioned left
 * - On:  cyan (#40CCF2) track, white knob positioned right
 * - Disabled: opacity 0.5 on full component
 *
 * Track: 44×24px, full-radius pill
 * Knob:  20×20px white circle, 2px from edge, animates on toggle
 *
 * Usage:
 *   <Toggle label="Enable notifications" />
 *   <Toggle checked label="Push alerts" />
 *   <Toggle disabled label="Feature unavailable" />
 *
 * Controlled:
 *   <Toggle checked={enabled} onChange={(v) => setEnabled(v)} label="Face ID" />
 */

export interface ToggleProps {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  label?: string
  /** Label position relative to the toggle */
  labelPosition?: "right" | "left"
  helperText?: string
  onChange?: (checked: boolean) => void
  className?: string
  id?: string
}

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      checked,
      defaultChecked = false,
      disabled = false,
      label,
      labelPosition = "right",
      helperText,
      onChange,
      className,
      id: idProp,
    },
    ref,
  ) => {
    const generatedId = React.useId()
    const id = idProp ?? generatedId

    const [isOn, setIsOn] = React.useState(defaultChecked)
    const isControlled = checked !== undefined
    const currentOn = isControlled ? !!checked : isOn

    const handleClick = () => {
      if (disabled) return
      const next = !currentOn
      if (!isControlled) setIsOn(next)
      onChange?.(next)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault()
        handleClick()
      }
    }

    const track = (
      <button
        ref={ref}
        id={id}
        role="switch"
        type="button"
        aria-checked={currentOn}
        disabled={disabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          // track
          "relative inline-flex h-[19px] w-[45px] shrink-0 cursor-pointer rounded-full",
          "border-0 outline-none transition-colors duration-[180ms] ease-[cubic-bezier(0.2,0,0,1)]",
          "focus-visible:ring-2 focus-visible:ring-[var(--color-secondary,#339FB8)] focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed",
          currentOn
            ? "bg-[var(--color-secondary,#339FB8)]"
            : "bg-[var(--color-inactive,#DEDEDE)]",
        )}
      >
        {/* Knob */}
        <span
          aria-hidden="true"
          className={cn(
            "absolute top-[2px] h-[15px] w-[24px] rounded-full bg-white shadow-sm",
            "transition-transform duration-[180ms] ease-[cubic-bezier(0.2,0,0,1)]",
            currentOn ? "translate-x-[19px]" : "translate-x-[2px]",
          )}
        />
      </button>
    )

    if (!label && !helperText) {
      return <span className={cn(disabled && "opacity-50", className)}>{track}</span>
    }

    const labelContent = (
      <label
        htmlFor={id}
        className={cn(
          "flex flex-col gap-0.5 cursor-pointer",
          disabled && "cursor-not-allowed",
        )}
      >
        <span className="font-['Red_Hat_Text'] text-[14px] font-normal leading-tight text-[var(--color-text-primary,#000)]">
          {label}
        </span>
        {helperText && (
          <span className="font-['Inter'] text-[12px] text-[var(--color-text-tertiary,#6B7280)]">
            {helperText}
          </span>
        )}
      </label>
    )

    return (
      <div
        className={cn(
          "inline-flex items-center gap-2.5",
          disabled && "opacity-50",
          className,
        )}
      >
        {labelPosition === "left" && labelContent}
        {track}
        {labelPosition === "right" && labelContent}
      </div>
    )
  },
)
Toggle.displayName = "Toggle"
