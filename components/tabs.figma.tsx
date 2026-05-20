import figma from "@figma/code-connect"
import { TabBar } from "./tabs"

// TabBar takes a `tabs` array, so the Figma "Tabs" variant (Three/Four) has no
// direct prop equivalent — a representative example is provided instead.
figma.connect(
  TabBar,
  "https://www.figma.com/design/crA2HVDfG2flnTXTsB2Gr9/Notify-Design-System?node-id=27-36",
  {
    example: () => (
      <TabBar tabs={["Sales", "Labor", "Store", "Product"]} defaultValue="Sales" />
    ),
  },
)
