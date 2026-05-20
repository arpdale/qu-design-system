import figma from "@figma/code-connect"
import { InputField } from "./input"

// The Figma "Variant" axis collapses both the React `type` and `state` props,
// so it is read twice — once for each prop.
figma.connect(
  InputField,
  "https://www.figma.com/design/crA2HVDfG2flnTXTsB2Gr9/Notify-Design-System?node-id=26-30",
  {
    props: {
      type: figma.enum("Variant", {
        Normal: "default",
        Active: "default",
        Filled: "default",
        Error: "default",
        Search: "search",
        Disabled: "default",
        Readonly: "default",
        Password: "password",
      }),
      state: figma.enum("Variant", {
        Normal: "normal",
        Active: "active",
        Filled: "filled",
        Error: "error",
        Search: "normal",
        Disabled: "disabled",
        Readonly: "readonly",
        Password: "filled",
      }),
    },
    example: ({ type, state }) => (
      <InputField type={type} state={state} label="Email" placeholder="you@example.com" />
    ),
  },
)
