import * as React from "react"
import { cn } from "./utils"

/**
 * Radio — Qu Notify form control.
 *
 * States: unselected | selected | disabled
 * - Unselected: transparent fill, 1.5px teal (#339FB8) stroke, full radius
 * - Selected:   cyan (#40CCF2) fill, white center dot, no stroke
 * - Disabled:   opacity 0.5 on full component
 *
 * Usage (uncontrolled, group via same `name`):
 *   <Radio name="time" value="day"   label="Day" />
 *   <Radio name="time" value="week"  label="Week" defaultChecked />
 *   <Radio name="time" value="month" label="Month" />
 *
 * Usage (controlled):
 *   <Radio name="x" value="a" checked={val === "a"} onChange={() => setVal("a")} label="Option A" />
 */

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string
  helperText?: string
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, helperText, disabled, checked, defaultChecked, className, onChange, ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(!!defaultChecked)
    const isControlled = checked !== undefined
    const currentChecked = isControlled ? !!checked : isChecked

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setIsChecked(e.target.checked)
      onChange?.(e)
    }

    return (
      <label
        className={cn(
          "inline-flex items-center gap-2 cursor-pointer select-none",
          disabled && "opacity-50 cursor-not-allowed",
          className,
        )}
      >
        {/* Hidden native input */}
        <input
          ref={ref}
          type="radio"
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
            "flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full",
            "border-[1.5px] transition-colors duration-[120ms]",
            currentChecked
              ? "border-transparent bg-[var(--color-primary,#40CCF2)]"
              : "border-[var(--color-secondary-border,#339FB8)] bg-transparent",
          )}
        >
          {currentChecked && (
            <span className="h-[6px] w-[6px] rounded-full bg-white" />
          )}
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
Radio.displayName = "Radio"

/**
 * RadioGroup — convenience wrapper for a labelled set of Radio options.
 *
 * Usage:
 *   <RadioGroup label="Time period" name="period" value={val} onChange={setVal}>
 *     <Radio value="day"   label="Day" />
 *     <Radio value="week"  label="Week" />
 *     <Radio value="month" label="Month" />
 *   </RadioGroup>
 */
export interface RadioGroupProps {
  label?: string
  name: string
  value?: string
  onChange?: (value: string) => void
  children: React.ReactNode
  className?: string
  orientation?: "horizontal" | "vertical"
}

export function RadioGroup({
  label,
  name,
  value,
  onChange,
  children,
  className,
  orientation = "vertical",
}: RadioGroupProps) {
  const cloned = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child
    const el = child as React.ReactElement<RadioProps>
    return React.cloneElement(el, {
      name,
      checked: value !== undefined ? el.props.value === value : undefined,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) onChange?.(e.target.value as string)
        el.props.onChange?.(e)
      },
    })
  })

  return (
    <fieldset className={cn("border-none p-0 m-0", className)}>
      {label && (
        <legend className="mb-2 font-['Red_Hat_Text'] text-[18px] font-medium text-[var(--color-text-primary,#000)]">
          {label}
        </legend>
      )}
      <div className={cn("flex gap-3", orientation === "vertical" ? "flex-col" : "flex-row flex-wrap")}>
        {cloned}
      </div>
    </fieldset>
  )
}
