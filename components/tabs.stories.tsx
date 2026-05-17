import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { TabBar, TabPanels, TabPanel } from './tabs'

const meta: Meta<typeof TabBar> = {
  title: 'Components/TabBar',
  component: TabBar,
  args: { tabs: ['Sales', 'Labor', 'Store'], defaultValue: 'Sales' },
}
export default meta

type Story = StoryObj<typeof TabBar>

export const Default: Story = {}

export const Stretch: Story = {
  args: { stretch: true, tabs: ['Sales', 'Labor', 'Store', 'Product'] },
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
}

export const FiveTabs: Story = { args: { tabs: ['Day', 'Week', 'Month', 'Quarter', 'Year'] } }

export const WithPanels: StoryObj = {
  render: () => {
    const [active, setActive] = React.useState('Sales')
    return (
      <div className="flex flex-col gap-4" style={{ width: 360 }}>
        <TabBar tabs={['Sales', 'Labor', 'Store']} value={active} onValueChange={setActive} stretch />
        <TabPanels value={active}>
          <TabPanel value="Sales"><div className="rounded-lg bg-white p-4 shadow">Sales content</div></TabPanel>
          <TabPanel value="Labor"><div className="rounded-lg bg-white p-4 shadow">Labor content</div></TabPanel>
          <TabPanel value="Store"><div className="rounded-lg bg-white p-4 shadow">Store content</div></TabPanel>
        </TabPanels>
      </div>
    )
  },
}
