import figma from "@figma/code-connect"
import { MetricTile } from "./metric-tile"

figma.connect(
  MetricTile,
  "https://www.figma.com/design/crA2HVDfG2flnTXTsB2Gr9/Notify-Design-System?node-id=31-45",
  {
    props: {
      size: figma.enum("Size", { Sm: "sm", Md: "md", Lg: "lg" }),
      loading: figma.enum("State", {
        Default: false,
        NoTrend: false,
        ValueOnly: false,
        Loading: true,
      }),
    },
    example: ({ size, loading }) => (
      <MetricTile size={size} loading={loading} label="Net Sales" value="$345.58" trend={11.8} />
    ),
  },
)
