import type { Meta, StoryObj } from '@storybook/react-vite'
import { Selector, SelectorGroup } from './selector'

const meta: Meta<typeof Selector> = {
  title: 'Components/Selector',
  component: Selector,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    state: { control: 'select', options: ['active', 'inactive', 'disabled'] },
    open: { control: 'boolean' },
  },
  args: { label: 'All Stores', variant: 'primary', state: 'active' },
}
export default meta

type Story = StoryObj<typeof Selector>

export const PrimaryActive: Story = {}
export const PrimaryInactive: Story = { args: { state: 'inactive' } }
export const SecondaryActive: Story = { args: { variant: 'secondary', state: 'active' } }
export const SecondaryInactive: Story = { args: { variant: 'secondary', state: 'inactive' } }
export const Open: Story = { args: { open: true } }
export const Disabled: Story = { args: { state: 'disabled' } }

export const Group: StoryObj = {
  render: () => (
    <SelectorGroup>
      <Selector label="All Stores" />
      <Selector label="This Week" variant="secondary" />
      <Selector label="Net Sales" variant="secondary" state="inactive" />
    </SelectorGroup>
  ),
}
