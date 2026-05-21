import type { Meta, StoryObj } from '@storybook/react-vite'
import { QuMark } from './qu-mark'

const meta: Meta<typeof QuMark> = {
  title: 'Brand/QuMark',
  component: QuMark,
  argTypes: {
    width: { control: { type: 'range', min: 40, max: 320, step: 4 } },
    color: { control: 'color' },
  },
  args: { width: 200 },
}
export default meta

type Story = StoryObj<typeof QuMark>

export const Default: Story = {}

/** Letterforms use `currentColor`; the cyan stripe stays fixed. */
export const OnDark: Story = {
  args: { color: '#FFFFFF' },
  decorators: [
    (Story) => (
      <div style={{ background: '#0A0A0A', padding: 48, borderRadius: 16 }}>
        <Story />
      </div>
    ),
  ],
}
