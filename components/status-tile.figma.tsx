import figma from "@figma/code-connect"
import { StatusTile } from "./status-tile"

figma.connect(
  StatusTile,
  "https://www.figma.com/design/crA2HVDfG2flnTXTsB2Gr9/Notify-Design-System?node-id=92-19",
  {
    props: {
      loading: figma.enum("State", { Default: false, Loading: true }),
    },
    example: ({ loading }) => (
      <StatusTile
        label="Tills"
        loading={loading}
        items={[
          { label: "Open", value: 0 },
          { label: "Closed", value: 8 },
          { label: "Reconciled", value: 8 },
        ]}
      />
    ),
  },
)
