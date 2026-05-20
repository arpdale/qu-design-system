import figma from "@figma/code-connect"
import { Radio } from "./radio"

figma.connect(
  Radio,
  "https://www.figma.com/design/crA2HVDfG2flnTXTsB2Gr9/Notify-Design-System?node-id=23-30",
  {
    props: {
      checked: figma.enum("State", { Unselected: false, Selected: true, Disabled: false }),
      disabled: figma.enum("State", { Unselected: false, Selected: false, Disabled: true }),
    },
    example: ({ checked, disabled }) => (
      <Radio name="period" value="day" label="Day" checked={checked} disabled={disabled} />
    ),
  },
)
