import figma from "@figma/code-connect"
import { Checkbox } from "./checkbox"

figma.connect(
  Checkbox,
  "https://www.figma.com/design/crA2HVDfG2flnTXTsB2Gr9/Notify-Design-System?node-id=23-18",
  {
    props: {
      checked: figma.enum("State", {
        Unchecked: false,
        Checked: true,
        Indeterminate: false,
        Disabled: false,
      }),
      indeterminate: figma.enum("State", {
        Unchecked: false,
        Checked: false,
        Indeterminate: true,
        Disabled: false,
      }),
      disabled: figma.enum("State", {
        Unchecked: false,
        Checked: false,
        Indeterminate: false,
        Disabled: true,
      }),
    },
    example: ({ checked, indeterminate, disabled }) => (
      <Checkbox label="Remember me" checked={checked} indeterminate={indeterminate} disabled={disabled} />
    ),
  },
)
