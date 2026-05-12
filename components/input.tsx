import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "./utils"

/**
 * Input — pill-shaped form field matching the Qu Notify Input component set.
 *
 * Matrix:
 *   type:  default | password | search
 *   state: normal | active | filled | error | disabled | readonly
 *
 * Anatomy (top → bottom):
 *   <label>        — Red Hat Text Medium 18px, required asterisk in brand-red
 *   <pill>         — full-radius container, white bg, 1.5px stroke
 *     [left-icon]  — search icon (search type only)
 *     <input>      — Inter Regular 16px placeholder / filled text
 *     [right-icon] — eye/eye-off toggle (password), x-circle clear (search filled), info (error)
 *   <helper>       — Inter Regular 12px, gray or red
 *
 * Usage:
 *   <InputField label="Email" placeholder="you@example.com" />
 *   <InputField type="password" label="Password" required />
 *   <InputField type="search" placeholder="Search checks..." />
 *   <InputField state="error" errorMessage="Invalid email address" />
 */

// ── pill shell ──────────────────────────────────────────────────────────────
const pillVariants = cva(
  [
    "flex items-center gap-2",
    "h-12 w-full rounded-full px-4",
    "border-[1.5px] bg-[var(--color-input-bg,#fff)]",
    "transition-colors duration-[120ms]",
  ],
  {
    variants: {
      state: {
        normal:   "border-[var(--color-input-border-default,#C9C9C9)]",
        active:   "border-[var(--color-input-border-active,#40CCF2)] ring-0",
        filled:   "border-[var(--color-input-border-default,#C9C9C9)]",
        error:    "border-[var(--color-input-border-error,#EF2149)]",
        disabled: "border-[var(--color-input-border-default,#C9C9C9)] bg-[var(--color-input-bg-disabled,#F4F4F4)] cursor-not-allowed opacity-50",
        readonly: "border-[var(--color-input-border-default,#C9C9C9)] bg-[var(--color-input-bg-disabled,#F4F4F4)]",
      },
    },
    defaultVariants: { state: "normal" },
  },
)

type InputState = "normal" | "active" | "filled" | "error" | "disabled" | "readonly"
type InputType  = "default" | "password" | "search"

export interface InputFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Visual input type — controls icons and keyboard on mobile */
  type?: InputType
  /** Controlled state override — set automatically on focus/blur if uncontrolled */
  state?: InputState
  label?: string
  /** Whether to show the red required asterisk */
  required?: boolean
  helperText?: string
  errorMessage?: string
  /** Slot for a custom right-side icon/action */
  rightSlot?: React.ReactNode
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      type = "default",
      state: stateProp,
      label,
      required,
      helperText,
      errorMessage,
      rightSlot,
      className,
      onFocus,
      onBlur,
      onChange,
      value,
      defaultValue,
      disabled,
      readOnly,
      placeholder,
      ...props
    },
    ref,
  ) => {
    // ── internal state for uncontrolled focus/fill tracking ──
    const [focused, setFocused]       = React.useState(false)
    const [hasValue, setHasValue]     = React.useState(!!defaultValue || !!value)
    const [showPassword, setShowPassword] = React.useState(false)

    // Derive visual state
    const state: InputState =
      stateProp ??
      (disabled       ? "disabled"
      : readOnly       ? "readonly"
      : errorMessage   ? "error"
      : focused        ? "active"
      : hasValue       ? "filled"
      : "normal")

    const nativeType =
      type === "password" ? (showPassword ? "text" : "password") :
      type === "search"   ? "search" :
      "text"

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true)
      onFocus?.(e)
    }
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false)
      onBlur?.(e)
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0)
      onChange?.(e)
    }

    // ── icon colors ──────────────────────────────────────────────────────────
    const iconColor =
      state === "active"  ? "text-[var(--color-input-icon-active,#40CCF2)]"  :
      state === "error"   ? "text-[var(--color-input-icon-error,#EF2149)]"   :
      "text-[var(--color-input-icon-default,#B1B1B1)]"

    return (
      <div className={cn("flex w-full flex-col gap-1.5", className)}>

        {/* Label row */}
        {label && (
          <label className="flex items-center gap-0.5 font-['Red_Hat_Text'] text-[18px] font-medium leading-tight text-[var(--color-text-primary,#000)]">
            {label}
            {required && (
              <span className="text-[var(--color-brand-red,#EF2149)]" aria-hidden="true"> *</span>
            )}
          </label>
        )}

        {/* Pill */}
        <div className={pillVariants({ state })}>

          {/* Left icon — search only */}
          {type === "search" && (
            <span className={cn("shrink-0", iconColor)} aria-hidden="true">
              <SearchIcon />
            </span>
          )}

          {/* Native input */}
          <input
            ref={ref}
            type={nativeType}
            disabled={disabled || state === "disabled"}
            readOnly={readOnly || state === "readonly"}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            className={cn(
              "min-w-0 flex-1 bg-transparent outline-none",
              "font-['Inter'] text-[16px] font-normal",
              "text-[var(--color-input-text,#000)] placeholder:text-[var(--color-input-placeholder,#B1B1B1)]",
              "disabled:cursor-not-allowed",
            )}
            aria-invalid={state === "error" || undefined}
            {...props}
          />

          {/* Right slot — custom override */}
          {rightSlot}

          {/* Right icon — contextual */}
          {!rightSlot && type === "password" && (
            <button
              type="button"
              tabIndex={-1}
              onClick={() => setShowPassword(v => !v)}
              className={cn("shrink-0 cursor-pointer", iconColor)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          )}
          {!rightSlot && type === "search" && hasValue && !disabled && (
            <button
              type="button"
              tabIndex={-1}
              onClick={() => setHasValue(false)}
              className={cn("shrink-0 cursor-pointer", iconColor)}
              aria-label="Clear search"
            >
              <XCircleIcon />
            </button>
          )}
          {!rightSlot && state === "error" && type !== "password" && (
            <span className={cn("shrink-0", iconColor)} aria-hidden="true">
              <InfoCircleIcon />
            </span>
          )}
        </div>

        {/* Helper / error text */}
        {(errorMessage || helperText) && (
          <p
            className={cn(
              "font-['Inter'] text-[12px] font-normal leading-tight px-1",
              errorMessage
                ? "text-[var(--color-input-text-error,#EF2149)]"
                : "text-[var(--color-text-tertiary,#6B7280)]",
            )}
          >
            {errorMessage ?? helperText}
          </p>
        )}
      </div>
    )
  },
)
InputField.displayName = "InputField"

// ── inline icon components (16×16 stroke, matches Figma set) ─────────────────

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7" cy="7" r="4.5" />
      <line x1="10.5" y1="10.5" x2="14" y2="14" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5Z" />
      <circle cx="8" cy="8" r="2" />
    </svg>
  )
}

function EyeOffIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 2l12 12M6.5 6.5A2 2 0 0 0 9.5 9.5" />
      <path d="M4.2 4.2C2.6 5.2 1 8 1 8s2.5 5 7 5c1.4 0 2.7-.4 3.8-1" />
      <path d="M9.8 3.2C12.2 4.2 15 8 15 8s-.7 1.4-1.8 2.6" />
    </svg>
  )
}

function XCircleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="6.5" />
      <line x1="5.5" y1="5.5" x2="10.5" y2="10.5" />
      <line x1="10.5" y1="5.5" x2="5.5" y2="10.5" />
    </svg>
  )
}

function InfoCircleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="6.5" />
      <line x1="8" y1="7" x2="8" y2="11" />
      <circle cx="8" cy="5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}
