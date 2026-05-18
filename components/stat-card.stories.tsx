import type { Meta, StoryObj } from '@storybook/react-vite'
import { StatCard } from './stat-card'

const meta: Meta<typeof StatCard> = {
  title: 'Components/StatCard',
  component: StatCard,
  parameters: { backgrounds: { default: 'app' } },
  args: { label: 'Check Count', value: '8,013' },
  decorators: [(Story) => <div style={{ width: 200 }}><Story /></div>],
}
export default meta

type Story = StoryObj<typeof StatCard>

export const Default: Story = {}
export const Currency: Story = { args: { label: 'Net Sales', value: '$88,984' } }
export const Loading: Story = { args: { loading: true } }

export const TwoUp: StoryObj = {
  decorators: [(Story) => <div style={{ width: 420, padding: 16 }}><Story /></div>],
  render: () => (
    <div className="grid grid-cols-2 gap-3">
      <StatCard label="Check Count" value="8,013" />
      <StatCard label="Net Sales" value="$88,984" />
    </div>
  ),
}
