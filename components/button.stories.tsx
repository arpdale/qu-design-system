import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button, IconButton } from './button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'link'] },
    size: { control: 'select', options: ['xsm', 'sm', 'md', 'lg'] },
    state: { control: 'select', options: ['active', 'inactive'] },
    disabled: { control: 'boolean' },
    iconOnly: { control: 'boolean' },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    state: 'active',
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {}

export const Secondary: Story = { args: { variant: 'secondary' } }
export const Tertiary: Story = { args: { variant: 'tertiary' } }
export const Link: Story = { args: { variant: 'link' } }
export const Disabled: Story = { args: { disabled: true } }
export const Inactive: Story = { args: { state: 'inactive' } }

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const WithIcon: Story = {
  args: { children: <><span>Continue</span><ArrowIcon /></> },
}

export const IconOnly: StoryObj<typeof IconButton> = {
  render: (args) => <IconButton {...args} aria-label="More"><ArrowIcon /></IconButton>,
  args: { variant: 'primary', size: 'md' },
}

export const SizeMatrix: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['primary', 'secondary', 'tertiary', 'link'] as const).map((variant) => (
        <div key={variant} className="flex items-center gap-3">
          <span className="w-20 text-xs uppercase tracking-wide text-neutral-gray-400">{variant}</span>
          {(['xsm', 'sm', 'md', 'lg'] as const).map((size) => (
            <Button key={size} variant={variant} size={size}>Button</Button>
          ))}
        </div>
      ))}
    </div>
  ),
}
