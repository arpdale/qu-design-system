import figma from "@figma/code-connect"
import { BottomNav } from "./bottom-nav"
import { Dashboard, Package, Menu } from "./icons"

figma.connect(
  BottomNav,
  "https://www.figma.com/design/crA2HVDfG2flnTXTsB2Gr9/Notify-Design-System?node-id=28-2",
  {
    example: () => (
      <BottomNav
        value="dashboard"
        onValueChange={() => {}}
        items={[
          { value: "dashboard", label: "Dashboard", icon: <Dashboard /> },
          { value: "inventory", label: "Inventory", icon: <Package /> },
          { value: "menu", label: "Menu", icon: <Menu /> },
        ]}
      />
    ),
  },
)
