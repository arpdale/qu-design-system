import type { Meta, StoryObj } from '@storybook/react-vite'
import { InputField } from './input'

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  parameters: { layout: 'padded' },
  argTypes: {
    type: { control: 'select', options: ['default', 'password', 'search'] },
    state: { control: 'select', options: [undefined, 'normal', 'active', 'filled', 'error', 'disabled', 'readonly'] },
    required: { control: 'boolean' },
  },
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'default',
  },
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
}
export default meta

type Story = StoryObj<typeof InputField>

export const Default: Story = {}

export const Required: Story = { args: { required: true } }

export const Password: Story = {
  args: { type: 'password', label: 'Password', placeholder: 'Enter password', required: true },
}

export const Search: Story = {
  args: { type: 'search', label: undefined, placeholder: 'Search checks…' },
}

export const Filled: Story = {
  args: { defaultValue: 'jordan@quserve.com' },
}

export const Error: Story = {
  args: { defaultValue: 'not-an-email', errorMessage: 'Invalid email address' },
}

export const WithHelper: Story = {
  args: { helperText: 'We will never share your email.' },
}

export const Disabled: Story = { args: { disabled: true, defaultValue: 'locked@quserve.com' } }

export const Matrix: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <InputField label="Default" placeholder="Placeholder" />
      <InputField label="Filled" defaultValue="filled value" />
      <InputField label="Error" defaultValue="bad input" errorMessage="Something is wrong" />
      <InputField label="Disabled" disabled defaultValue="disabled value" />
      <InputField type="password" label="Password" required placeholder="Enter password" />
      <InputField type="search" placeholder="Search checks…" />
    </div>
  ),
}
