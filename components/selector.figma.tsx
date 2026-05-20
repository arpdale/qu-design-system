import figma from "@figma/code-connect"
import { Selector } from "./selector"

figma.connect(
  Selector,
  "https://www.figma.com/design/crA2HVDfG2flnTXTsB2Gr9/Notify-Design-System?node-id=27-18",
  {
    props: {
      variant: figma.enum("Variant", { Primary: "primary", Secondary: "secondary" }),
      state: figma.enum("State", { Active: "active", Inactive: "inactive" }),
    },
    example: ({ variant, state }) => (
      <Selector label="All Stores" variant={variant} state={state} />
    ),
  },
)
