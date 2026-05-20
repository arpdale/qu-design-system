import figma from "@figma/code-connect"
import { ScreenHeader } from "./screen-header"

figma.connect(
  ScreenHeader,
  "https://www.figma.com/design/crA2HVDfG2flnTXTsB2Gr9/Notify-Design-System?node-id=89-3",
  {
    variant: { Back: "True" },
    example: () => <ScreenHeader title="Tills" onBack={() => history.back()} />,
  },
)

figma.connect(
  ScreenHeader,
  "https://www.figma.com/design/crA2HVDfG2flnTXTsB2Gr9/Notify-Design-System?node-id=89-3",
  {
    variant: { Back: "False" },
    example: () => <ScreenHeader title="Dashboard" />,
  },
)
