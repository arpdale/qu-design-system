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
  // Default onClick so the drill-in chevron renders. Real consumers usually
  // pass a real handler — pass `onClick: undefined` in a story to see the
  // non-interactive variant.
  args: { label: 'Net Sales', value: '$345.58', onClick: () => {} },
  decorators: [(Story) => <div style={{ width: 200 }}><Story /></div>],
}
export default meta

type Story = StoryObj<typeof MetricTile>

export const Default: Story = {}

export const WithTrend: Story = {
  args: { trend: 11.8, trendLabel: '$304.78' },
}

export const Negative: Story = {
  args: { trend: -5.6, trendLabel: '$365.42' },
}

export const TrendLabelOnly: Story = {
  args: { value: '$44.91', trendLabel: '$44.91' },
}

export const Loading: Story = { args: { loading: true, trend: 0 } }

export const Large: Story = { args: { size: 'lg', value: '$1.4M', trend: 22.4, trendLabel: '$1.15M' } }

export const Small: Story = { args: { size: 'sm', value: '24.1%', trend: -2.3, trendLabel: '24.7%' } }

export const NonInteractive: Story = {
  args: { onClick: undefined, trend: 11.8, trendLabel: '$304.78' },
  parameters: { docs: { description: { story: 'No `onClick` → no chevron. Used for display-only tiles.' } } },
}

const UserIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="8" cy="5" r="2.5" /><path d="M3 14a5 5 0 0 1 10 0" strokeLinecap="round" />
  </svg>
)

export const WithIcon: Story = {
  args: { label: 'Labor %', value: '24.1%', trend: -2.3, trendLabel: '26.4%', icon: <UserIcon /> },
  parameters: { docs: { description: { story: 'Custom `icon` prop wins over the default chevron.' } } },
}

export const Grid: StoryObj = {
  decorators: [(Story) => <div style={{ width: 420, padding: 16 }}><Story /></div>],
  render: () => (
    <MetricTileGrid cols={2}>
      <MetricTile label="Net Sales"    value="$42,810" trend={11.8} trendLabel="$38,287" onClick={() => {}} />
      <MetricTile label="Avg Check"    value="$18.42"  trend={-1.2} trendLabel="$18.65" onClick={() => {}} />
      <MetricTile label="Checks"       value="2,324"   onClick={() => {}} />
      <MetricTile label="Speed of Svc" value="3m 12s"  trend={-8.4} trendLabel="3m 30s" onClick={() => {}} />
    </MetricTileGrid>
  ),
}

/**
 * SalesDashboard — closest visual match to the deployed Sales screen.
 * Mirrors SalesView in notify-mobile: 2-col grid, dollar prior values,
 * chevron on every tile.
 */
export const SalesDashboard: StoryObj = {
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div style={{ width: 402, padding: 16, background: '#F4F4F4' }}><Story /></div>],
  render: () => (
    <MetricTileGrid cols={2}>
      <MetricTile label="Net Sales"     value="$345.58" trend={11.8}  trendLabel="$304.78" onClick={() => {}} />
      <MetricTile label="Checks"        value="11"      trend={18.1}  trendLabel="9"       onClick={() => {}} />
      <MetricTile label="Payments"      value="$378.40" trend={11.1}  trendLabel="$336.28" onClick={() => {}} />
      <MetricTile label="Average Check" value="$33.86"  trend={7.7}   trendLabel="$31.42"  onClick={() => {}} />
      <MetricTile label="Gross Sales"   value="$368.40" trend={11.4}  trendLabel="$326.28" onClick={() => {}} />
      <MetricTile label="Discounts"     value="$22.40"  trend={14.2}  trendLabel="$19.20"  onClick={() => {}} />
      <MetricTile label="Cash"          value="$44.91"  trendLabel="$44.91" onClick={() => {}} />
    </MetricTileGrid>
  ),
}
