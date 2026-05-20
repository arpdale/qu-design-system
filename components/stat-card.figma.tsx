import figma from "@figma/code-connect"
import { StatCard } from "./stat-card"

figma.connect(
  StatCard,
  "https://www.figma.com/design/crA2HVDfG2flnTXTsB2Gr9/Notify-Design-System?node-id=91-11",
  {
    props: {
      loading: figma.enum("State", { Default: false, Loading: true }),
    },
    example: ({ loading }) => <StatCard label="Check Count" value="8,013" loading={loading} />,
  },
)
