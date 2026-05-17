import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from './checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: { label: 'Remember me' },
}
export default meta

type Story = StoryObj<typeof Checkbox>

export const Unchecked: Story = {}
export const Checked: Story = { args: { defaultChecked: true } }
export const Indeterminate: Story = { args: { indeterminate: true, label: 'Select all' } }
export const Disabled: Story = { args: { disabled: true, label: 'Unavailable' } }
export const DisabledChecked: Story = { args: { disabled: true, defaultChecked: true, label: 'Locked on' } }
export const WithHelper: Story = { args: { label: 'Marketing emails', helperText: 'You can unsubscribe any time.' } }

export const Matrix: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox label="Unchecked" />
      <Checkbox defaultChecked label="Checked" />
      <Checkbox indeterminate label="Indeterminate" />
      <Checkbox disabled label="Disabled" />
      <Checkbox disabled defaultChecked label="Disabled + checked" />
    </div>
  ),
}
