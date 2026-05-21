import type { Meta, StoryObj } from '@storybook/react-vite'
import { NotifyLockup } from './notify-lockup'

const meta: Meta<typeof NotifyLockup> = {
  title: 'Brand/NotifyLockup',
  component: NotifyLockup,
  argTypes: {
    width: { control: { type: 'range', min: 80, max: 360, step: 4 } },
    color: { control: 'color' },
  },
  args: { width: 200 },
}
export default meta

type Story = StoryObj<typeof NotifyLockup>

export const Default: Story = {}

/** Foreground uses `currentColor`; the cyan accent bar stays fixed. */
export const OnDark: Story = {
  args: { color: '#FFFFFF' },
  decorators: [
    (Story) => (
      <div style={{ background: '#0A0A0A', padding: 40, borderRadius: 16 }}>
        <Story />
      </div>
    ),
  ],
}
