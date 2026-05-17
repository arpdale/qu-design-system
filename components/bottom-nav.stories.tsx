import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BottomNav } from './bottom-nav'

const DashboardIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="6" height="6" /><rect x="11" y="3" width="6" height="6" />
    <rect x="3" y="11" width="6" height="6" /><rect x="11" y="11" width="6" height="6" />
  </svg>
)
const InventoryIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7l7-4 7 4v6l-7 4-7-4V7z" /><path d="M3 7l7 4 7-4M10 11v6" />
  </svg>
)
const MenuIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="3" y1="5" x2="17" y2="5" /><line x1="3" y1="10" x2="17" y2="10" /><line x1="3" y1="15" x2="17" y2="15" />
  </svg>
)
const SettingsIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="10" cy="10" r="2.5" /><path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.2 4.2l1.5 1.5M14.3 14.3l1.5 1.5M4.2 15.8l1.5-1.5M14.3 5.7l1.5-1.5" strokeLinecap="round" />
  </svg>
)

const items = [
  { value: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
  { value: 'inventory', label: 'Inventory', icon: <InventoryIcon /> },
  { value: 'menu',      label: 'Menu',      icon: <MenuIcon /> },
  { value: 'settings',  label: 'Settings',  icon: <SettingsIcon /> },
]

const meta: Meta<typeof BottomNav> = {
  title: 'Components/BottomNav',
  component: BottomNav,
  parameters: { backgrounds: { default: 'dark' }, layout: 'centered' },
  args: { items, defaultValue: 'dashboard' },
}
export default meta

type Story = StoryObj<typeof BottomNav>

export const Default: Story = {}

export const WithBadges: Story = {
  args: {
    items: items.map((it, i) => ({ ...it, badge: i === 1 ? 3 : i === 2 ? true : false })),
  },
}

export const Controlled: StoryObj = {
  render: () => {
    const [v, setV] = React.useState('inventory')
    return <BottomNav items={items} value={v} onValueChange={setV} />
  },
}
