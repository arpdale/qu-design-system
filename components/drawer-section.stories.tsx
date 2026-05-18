import type { Meta, StoryObj } from '@storybook/react-vite'
import { DrawerSection, DrawerItem, DrawerAction } from './drawer-section'
import { Badge } from './badge'

const meta: Meta<typeof DrawerSection> = {
  title: 'Components/DrawerSection',
  component: DrawerSection,
  args: { title: 'Tools' },
  // Dark surface — matches the menu drawer in notify-mobile (#1F2329).
  decorators: [
    (Story) => (
      <div style={{ width: 320, padding: 24, background: '#1F2329', borderRadius: 16 }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof DrawerSection>

export const Default: Story = {
  render: (args) => (
    <DrawerSection {...args}>
      <DrawerItem label="Kitchen Intelligence" badge={<Badge variant="brand">NEW</Badge>} onClick={() => {}} />
      <DrawerItem label="Settings" onClick={() => {}} />
      <DrawerItem label="Forecast" onClick={() => {}} />
      <DrawerItem label="Digital Channels" onClick={() => {}} />
      <DrawerItem label="Checks Search" active onClick={() => {}} />
      <DrawerItem label="Leaderboards" onClick={() => {}} />
    </DrawerSection>
  ),
}

export const WithActiveAndDisabled: Story = {
  render: (args) => (
    <DrawerSection {...args}>
      <DrawerItem label="Settings" active onClick={() => {}} />
      <DrawerItem label="Forecast" onClick={() => {}} />
      <DrawerItem label="Coming soon" disabled />
    </DrawerSection>
  ),
}

export const FullDrawer: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-6">
      <DrawerSection title="Tools">
        <DrawerItem label="Kitchen Intelligence" badge={<Badge variant="brand">NEW</Badge>} onClick={() => {}} />
        <DrawerItem label="Settings" onClick={() => {}} />
        <DrawerItem label="Forecast" onClick={() => {}} />
        <DrawerItem label="Digital Channels" onClick={() => {}} />
        <DrawerItem label="Checks Search" active onClick={() => {}} />
      </DrawerSection>
      <DrawerSection title="Support">
        <DrawerItem label="Analyze" onClick={() => {}} />
        <DrawerItem label="Product Tour" onClick={() => {}} />
      </DrawerSection>
      <DrawerAction onClick={() => {}}>Log Out</DrawerAction>
    </div>
  ),
}
