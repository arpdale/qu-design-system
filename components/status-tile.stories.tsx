import type { Meta, StoryObj } from '@storybook/react-vite'
import { StatusTile } from './status-tile'

const meta: Meta<typeof StatusTile> = {
  title: 'Components/StatusTile',
  component: StatusTile,
  parameters: { backgrounds: { default: 'app' } },
  args: {
    label: 'Tills',
    items: [
      { label: 'Open', value: 0 },
      { label: 'Closed', value: 8 },
      { label: 'Reconciled', value: 8 },
    ],
    onClick: () => {},
  },
  decorators: [(Story) => <div style={{ width: 200 }}><Story /></div>],
}
export default meta

type Story = StoryObj<typeof StatusTile>

export const Default: Story = {}
export const NonInteractive: Story = { args: { onClick: undefined } }
export const Loading: Story = { args: { loading: true } }
export const LoadingFiveRows: Story = { args: { loading: true, loadingRows: 5 } }

export const MixedStringValues: Story = {
  args: {
    label: 'Service',
    items: [
      { label: 'Average wait', value: '3m 12s' },
      { label: 'Longest wait', value: '8m 04s' },
      { label: 'Drinks delay', value: '00:42' },
    ],
  },
}
