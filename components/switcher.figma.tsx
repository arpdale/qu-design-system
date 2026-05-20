import figma from "@figma/code-connect"
import { Switcher } from "./switcher"

// Switcher takes a `segments` array, so the Figma "Segments" variant (Two/Three)
// has no direct prop equivalent — a representative example is provided instead.
figma.connect(
  Switcher,
  "https://www.figma.com/design/crA2HVDfG2flnTXTsB2Gr9/Notify-Design-System?node-id=25-24",
  {
    example: () => <Switcher segments={["Day", "Week", "Month"]} defaultValue="Week" />,
  },
)
