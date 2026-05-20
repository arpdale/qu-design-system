import figma from "@figma/code-connect"
import { DrawerSection, DrawerItem, DrawerAction } from "./drawer-section"

figma.connect(
  DrawerItem,
  "https://www.figma.com/design/crA2HVDfG2flnTXTsB2Gr9/Notify-Design-System?node-id=93-9",
  {
    props: {
      active: figma.enum("State", { Default: false, Active: true, Disabled: false }),
      disabled: figma.enum("State", { Default: false, Active: false, Disabled: true }),
    },
    example: ({ active, disabled }) => (
      <DrawerItem label="Settings" active={active} disabled={disabled} />
    ),
  },
)

figma.connect(
  DrawerSection,
  "https://www.figma.com/design/crA2HVDfG2flnTXTsB2Gr9/Notify-Design-System?node-id=94-2",
  {
    example: () => (
      <DrawerSection title="Tools">
        <DrawerItem label="Kitchen Intelligence" />
        <DrawerItem label="Settings" active />
      </DrawerSection>
    ),
  },
)

figma.connect(
  DrawerAction,
  "https://www.figma.com/design/crA2HVDfG2flnTXTsB2Gr9/Notify-Design-System?node-id=94-12",
  {
    example: () => <DrawerAction>Log Out</DrawerAction>,
  },
)
