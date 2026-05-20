import figma from "@figma/code-connect"
import { Toggle } from "./toggle"

figma.connect(
  Toggle,
  "https://www.figma.com/design/crA2HVDfG2flnTXTsB2Gr9/Notify-Design-System?node-id=25-10",
  {
    props: {
      checked: figma.enum("State", {
        "Off": false,
        "On": true,
        "Disabled-Off": false,
        "Disabled-On": true,
      }),
      disabled: figma.enum("State", {
        "Off": false,
        "On": false,
        "Disabled-Off": true,
        "Disabled-On": true,
      }),
    },
    example: ({ checked, disabled }) => (
      <Toggle label="Enable notifications" checked={checked} disabled={disabled} />
    ),
  },
)
