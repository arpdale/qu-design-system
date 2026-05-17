import * as React from "react"
import { cn } from "./utils"

/**
 * TabBar — Qu Notify top-level tab selector (L1).
 *
 * Visual spec:
 *   Layout: standalone pills sitting in a row with gaps (no outer container).
 *   Selected tab:   black fill, white text, full-radius pill.
 *   Unselected tab: gray-100 fill, primary text, full-radius pill.
 *   Font: Inter Medium 14px.
 *
 * Differs from Switcher: TabBar is for primary page-level navigation where
 * each tab reads as its own standalone affordance. Switcher is for inline
 * filters where the segments share an outer track.
 *
 * Usage (uncontrolled):
 *   <TabBar tabs={["Sales", "Labor", "Store"]} defaultValue="Sales" />
 *
 * Usage (controlled):
 *   <TabBar
 *     tabs={["Sales", "Labor", "Store", "Product"]}
 *     value={activeTab}
 *     onValueChange={setActiveTab}
 *   />
 *
 * Usage with content panels:
 *   <TabBar tabs={tabs} value={active} onValueChange={setActive} />
 *   {active === "Sales" && <SalesPanel />}
 */

export interface TabBarProps {
  tabs: string[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  className?: string
  /** Make all tabs equal width (fills container) */
  stretch?: boolean
}

export function TabBar({
  tabs,
  value,
  defaultValue,
  onValueChange,
  className,
  stretch = false,
}: TabBarProps) {
  const [selected, setSelected] = React.useState(defaultValue ?? tabs[0])
  const isControlled = value !== undefined
  const current = isControlled ? value : selected

  const handleSelect = (tab: string) => {
    if (!isControlled) setSelected(tab)
    onValueChange?.(tab)
  }

  return (
    <div
      role="tablist"
      aria-label="Tabs"
      className={cn(
        "inline-flex items-center gap-2",
        stretch && "w-full",
        className,
      )}
    >
      {tabs.map((tab) => {
        const isSelected = tab === current
        return (
          <button
            key={tab}
            role="tab"
            type="button"
            aria-selected={isSelected}
            onClick={() => handleSelect(tab)}
            className={cn(
              "rounded-full px-4 py-[7px] cursor-pointer select-none",
              "font-['Inter'] text-[14px] font-medium leading-tight",
              "outline-none transition-colors duration-[120ms]",
              "focus-visible:ring-2 focus-visible:ring-[var(--color-ring,#40CCF2)] focus-visible:ring-offset-1",
              stretch && "flex-1 text-center",
              isSelected
                ? "bg-[var(--color-foreground,#000)] text-white"
                : "bg-[var(--color-inactive,#DEDEDE)] text-[var(--color-text-primary,#000)] hover:brightness-95",
            )}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}

/**
 * TabPanels — optional declarative panel companion for TabBar.
 *
 * Usage:
 *   <TabBar tabs={["Sales","Labor"]} value={tab} onValueChange={setTab} />
 *   <TabPanels value={tab}>
 *     <TabPanel value="Sales"><SalesContent /></TabPanel>
 *     <TabPanel value="Labor"><LaborContent /></TabPanel>
 *   </TabPanels>
 */
export interface TabPanelsProps {
  value: string
  children: React.ReactNode
  className?: string
}
export function TabPanels({ value, children, className }: TabPanelsProps) {
  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return null
        const el = child as React.ReactElement<TabPanelProps>
        return el.props.value === value ? el : null
      })}
    </div>
  )
}

export interface TabPanelProps {
  value: string
  children: React.ReactNode
  className?: string
}
export function TabPanel({ children, className }: TabPanelProps) {
  return <div role="tabpanel" className={className}>{children}</div>
}
