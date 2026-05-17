import type { Meta, StoryObj } from '@storybook/react-vite'
import { Switcher } from './switcher'

const meta: Meta<typeof Switcher> = {
  title: 'Components/Switcher',
  component: Switcher,
  args: { segments: ['Day', 'Week', 'Month'], defaultValue: 'Week' },
}
export default meta

type Story = StoryObj<typeof Switcher>

export const Default: Story = {}

export const TwoOption: Story = { args: { segments: ['Net', 'Gross'], defaultValue: 'Net' } }

export const Stretch: Story = {
  args: { segments: ['All', 'Open', 'Closed'], stretch: true },
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
}

const ListIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
    <line x1="2" y1="3" x2="12" y2="3" /><line x1="2" y1="7" x2="12" y2="7" /><line x1="2" y1="11" x2="12" y2="11" />
  </svg>
)
const GridIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="4" height="4" /><rect x="8" y="2" width="4" height="4" />
    <rect x="2" y="8" width="4" height="4" /><rect x="8" y="8" width="4" height="4" />
  </svg>
)

export const WithIcons: Story = {
  args: {
    segments: [
      { value: 'list', label: 'List', icon: <ListIcon /> },
      { value: 'grid', label: 'Grid', icon: <GridIcon /> },
    ],
    defaultValue: 'list',
  },
}
