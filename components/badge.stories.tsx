import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge, TrendBadge } from './badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: { control: 'select', options: ['default', 'success', 'error', 'warning', 'alert', 'info', 'neutral', 'brand'] },
    size: { control: 'select', options: ['sm', 'md'] },
  },
  args: { children: 'Open', variant: 'default', size: 'md' },
}
export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {}
export const Success: Story = { args: { variant: 'success', children: '+11.8%' } }
export const Error: Story = { args: { variant: 'error', children: '-5.6%' } }
export const Warning: Story = { args: { variant: 'warning', children: 'Delayed' } }
export const Alert: Story = { args: { variant: 'alert', children: 'Alert' } }
export const Info: Story = { args: { variant: 'info', children: 'New' } }
export const Neutral: Story = { args: { variant: 'neutral', children: 'Draft' } }
export const Brand: Story = { args: { variant: 'brand', children: 'Live' } }

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="alert">Alert</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="brand">Brand</Badge>
    </div>
  ),
}

export const Trend: StoryObj<typeof TrendBadge> = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <TrendBadge value={11.8} />
      <TrendBadge value={-5.6} />
      <TrendBadge value={0} />
      <TrendBadge value={42.1} decimals={2} />
      <TrendBadge value={-3.4} showArrow={false} />
    </div>
  ),
}
