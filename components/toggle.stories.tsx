import type { Meta, StoryObj } from '@storybook/react-vite'
import { Toggle } from './toggle'

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    labelPosition: { control: 'select', options: ['left', 'right'] },
  },
  args: { label: 'Enable notifications' },
}
export default meta

type Story = StoryObj<typeof Toggle>

export const Off: Story = {}
export const On: Story = { args: { defaultChecked: true } }
export const Disabled: Story = { args: { disabled: true, label: 'Locked off' } }
export const DisabledOn: Story = { args: { disabled: true, defaultChecked: true, label: 'Locked on' } }
export const LabelLeft: Story = { args: { labelPosition: 'left', label: 'Face ID' } }
export const WithHelper: Story = {
  args: { label: 'Push alerts', helperText: 'Get notified about closing-time issues.' },
}
export const NoLabel: Story = { args: { label: undefined } }

export const Matrix: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Toggle label="Off" />
      <Toggle label="On" defaultChecked />
      <Toggle label="Disabled off" disabled />
      <Toggle label="Disabled on" disabled defaultChecked />
    </div>
  ),
}
