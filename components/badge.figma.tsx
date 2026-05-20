import figma from "@figma/code-connect"
import { Badge, TrendBadge } from "./badge"

figma.connect(
  Badge,
  "https://www.figma.com/design/crA2HVDfG2flnTXTsB2Gr9/Notify-Design-System?node-id=19-18",
  {
    props: {
      variant: figma.enum("Variant", {
        Default: "default",
        Success: "success",
        Error: "error",
        Warning: "warning",
        Alert: "alert",
        Info: "info",
        Neutral: "neutral",
        Brand: "brand",
      }),
    },
    example: ({ variant }) => <Badge variant={variant}>Open</Badge>,
  },
)

figma.connect(
  TrendBadge,
  "https://www.figma.com/design/crA2HVDfG2flnTXTsB2Gr9/Notify-Design-System?node-id=20-14",
  {
    props: {
      value: figma.enum("Variant", { Positive: 11.8, Negative: -5.6, Neutral: 0 }),
    },
    example: ({ value }) => <TrendBadge value={value} />,
  },
)
