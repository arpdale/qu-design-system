import type { Meta, StoryObj } from '@storybook/react-vite'
import { MetricTile, MetricTileGrid } from './metric-tile'

const meta: Meta<typeof MetricTile> = {
  title: 'Components/MetricTile',
  component: MetricTile,
  parameters: { backgrounds: { default: 'app' } },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    loading: { control: 'boolean' },
  },
  args: { label: 'Net Sales', value: '$42,810' },
  decorators: [(Story) => <div style={{ width: 200 }}><Story /></div>],
}
export default meta

type Story = StoryObj<typeof MetricTile>

export const Default: Story = {}
export const WithTrend: Story = { args: { trend: 11.8, trendLabel: 'vs last week' } }
export const Negative: Story = { args: { trend: -5.6, trendLabel: 'vs last week' } }
export const Loading: Story = { args: { loading: true, trend: 0 } }
export const Large: Story = { args: { size: 'lg', value: '$1.4M', trend: 22.4 } }
export const Small: Story = { args: { size: 'sm', value: '24.1%' } }

const UserIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="8" cy="5" r="2.5" /><path d="M3 14a5 5 0 0 1 10 0" strokeLinecap="round" />
  </svg>
)

export const WithIcon: Story = {
  args: { label: 'Labor %', value: '24.1%', trend: -2.3, icon: <UserIcon /> },
}

export const Grid: StoryObj = {
  decorators: [(Story) => <div style={{ width: 420, padding: 16 }}><Story /></div>],
  render: () => (
    <MetricTileGrid cols={2}>
      <MetricTile label="Net Sales"     value="$42,810" trend={11.8} />
      <MetricTile label="Avg Check"     value="$18.42"  trend={-1.2} />
      <MetricTile label="Checks"        value="2,324"   />
      <MetricTile label="Speed of Svc"  value="3m 12s"  trend={-8.4} />
    </MetricTileGrid>
  ),
}
