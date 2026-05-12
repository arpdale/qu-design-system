import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Button — shadcn-style primitive backed by the semantic tokens in tokens.css.
 *
 * Matrix:
 *   variant: primary | secondary | tertiary | link
 *   size:    xsm | sm | md | lg
 *   state:   active (default) | inactive | disabled  — driven by `data-state` + `disabled`
 *
 * Use `<Button iconOnly />` (or `<IconButton />` below) to render the icon-only square form.
 */
const buttonVariants = cva(
  [
    // base
    "inline-flex items-center justify-center whitespace-nowrap select-none",
    "rounded-[var(--button-radius)] font-medium font-[var(--font-family-secondary)]", // Red Hat Text Medium per spec
    "transition-colors duration-[var(--p-duration-fast)] ease-[var(--p-easing-standard)]",
    "outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-[var(--p-opacity-disabled)]",
    // icon child sizing
    "[&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-[var(--color-primary)] text-[var(--color-primary-foreground)]",
          "hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-pressed)]",
          "data-[state=inactive]:bg-[var(--color-inactive)] data-[state=inactive]:text-[var(--color-inactive-foreground)]",
        ],
        secondary: [
          "bg-transparent text-[var(--color-secondary-foreground)]",
          "border border-[var(--color-secondary-border)]",
          "hover:bg-[var(--color-secondary-hover)] active:bg-[var(--color-secondary-pressed)]",
          "data-[state=inactive]:text-[var(--color-inactive-foreground)] data-[state=inactive]:border-[var(--color-inactive-border)]",
        ],
        tertiary: [
          "bg-transparent text-[var(--color-tertiary-foreground)]",
          "hover:bg-[var(--color-tertiary-hover)]",
          "data-[state=inactive]:text-[var(--color-inactive-foreground)]",
        ],
        link: [
          "bg-transparent text-[var(--color-link-foreground)] underline underline-offset-4",
          "hover:decoration-2",
          "data-[state=inactive]:text-[var(--color-inactive-foreground)]",
        ],
      },
      size: {
        xsm: "h-[var(--button-xsm-h)] px-[var(--button-xsm-px)] gap-[var(--button-xsm-gap)] text-[length:var(--button-xsm-fs)] leading-[var(--button-xsm-lh)] [&_svg]:size-3",
        sm:  "h-[var(--button-sm-h)]  px-[var(--button-sm-px)]  gap-[var(--button-sm-gap)]  text-[length:var(--button-sm-fs)]  leading-[var(--button-sm-lh)]  [&_svg]:size-[14px]",
        md:  "h-[var(--button-md-h)]  px-[var(--button-md-px)]  gap-[var(--button-md-gap)]  text-[length:var(--button-md-fs)]  leading-[var(--button-md-lh)]  [&_svg]:size-4",
        lg:  "h-[var(--button-lg-h)]  px-[var(--button-lg-px)]  gap-[var(--button-lg-gap)]  text-[length:var(--button-lg-fs)]  leading-[var(--button-lg-lh)]  [&_svg]:size-5",
      },
      iconOnly: {
        true: "px-0 aspect-square rounded-[var(--button-icon-radius)]",
        false: "",
      },
    },
    compoundVariants: [
      // Link variant has no horizontal padding — it's text-like.
      { variant: "link", iconOnly: false, class: "px-0 h-auto" },
      // Tertiary should hug its text vertically.
      { variant: "tertiary", iconOnly: false, class: "" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      iconOnly: false,
    },
  },
)

type ButtonState = "active" | "inactive"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  state?: ButtonState
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, iconOnly, state = "active", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        ref={ref}
        data-state={state}
        className={cn(buttonVariants({ variant, size, iconOnly }), className)}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export const IconButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, "iconOnly">>(
  (props, ref) => <Button ref={ref} iconOnly {...props} />,
)
IconButton.displayName = "IconButton"

export { buttonVariants }
