import figma from "@figma/code-connect"
import { SectionHeader } from "./section-header"

figma.connect(
  SectionHeader,
  "https://www.figma.com/design/crA2HVDfG2flnTXTsB2Gr9/Notify-Design-System?node-id=90-8",
  {
    example: () => <SectionHeader title="Totals" />,
  },
)
