import figma from "@figma/code-connect"
import { Button, IconButton } from "./button"

figma.connect(
  Button,
  "https://www.figma.com/design/crA2HVDfG2flnTXTsB2Gr9/Notify-Design-System?node-id=21-66",
  {
    props: {
      variant: figma.enum("Variant", {
        Primary: "primary",
        Secondary: "secondary",
        Tertiary: "tertiary",
        Link: "link",
      }),
      size: figma.enum("Size", { Xsm: "xsm", Sm: "sm", Md: "md", Lg: "lg" }),
      state: figma.enum("State", { Active: "active", Inactive: "inactive" }),
      label: figma.textContent("Button"),
    },
    example: ({ variant, size, state, label }) => (
      <Button variant={variant} size={size} state={state}>
        {label}
      </Button>
    ),
  },
)

figma.connect(
  IconButton,
  "https://www.figma.com/design/crA2HVDfG2flnTXTsB2Gr9/Notify-Design-System?node-id=70-26",
  {
    props: {
      variant: figma.enum("Variant", {
        Primary: "primary",
        Secondary: "secondary",
        Tertiary: "tertiary",
      }),
      size: figma.enum("Size", { Xsm: "xsm", Sm: "sm", Md: "md", Lg: "lg" }),
      icon: figma.instance("Icon"),
    },
    example: ({ variant, size, icon }) => (
      <IconButton variant={variant} size={size}>
        {icon}
      </IconButton>
    ),
  },
)
